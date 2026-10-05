export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

/** Cookie con la preferencia manual del visitante (selector ES / EN). */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const ogLocales: Record<Locale, string> = {
  es: "es_MX",
  en: "en_US",
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Países (ISO 3166-1 alfa-2) donde mostramos español por defecto. */
const SPANISH_SPEAKING_COUNTRIES = new Set([
  "MX", "ES", "AR", "CO", "CL", "PE", "EC", "GT", "CU", "BO",
  "DO", "HN", "PY", "SV", "NI", "CR", "PA", "UY", "PR", "GQ", "VE",
]);

/** Primer idioma soportado según el orden de preferencia de `Accept-Language`. */
function matchAcceptLanguage(header: string): Locale | undefined {
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag = "", ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return {
        lang: tag.trim().toLowerCase().split("-")[0],
        quality: q ? Number(q.trim().slice(2)) : 1,
      };
    })
    .filter(({ lang, quality }) => lang && quality > 0)
    .sort((a, b) => b.quality - a.quality);

  return ranked.find(({ lang }) => hasLocale(lang))?.lang as Locale | undefined;
}

/**
 * Elige el idioma para quien entra a `/` sin idioma en la URL. Prioridad:
 * 1. Elección manual previa (cookie).
 * 2. País de la IP, si el proveedor lo envía (Cloudflare o Vercel, ver
 *    `proxy.ts`). Va antes que el navegador porque en la frontera muchos
 *    equipos están en inglés aunque el visitante sea de México.
 * 3. Idioma del navegador.
 * 4. Español.
 */
export function detectLocale({
  cookie,
  country,
  acceptLanguage,
}: {
  cookie?: string;
  country?: string | null;
  acceptLanguage?: string | null;
}): Locale {
  if (cookie && hasLocale(cookie)) return cookie;
  if (country) {
    return SPANISH_SPEAKING_COUNTRIES.has(country.toUpperCase()) ? "es" : "en";
  }
  if (acceptLanguage) return matchAcceptLanguage(acceptLanguage) ?? "en";
  return defaultLocale;
}
