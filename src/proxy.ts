import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, detectLocale, locales } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocalePrefix) return;

  const locale = detectLocale({
    cookie: request.cookies.get(LOCALE_COOKIE)?.value,
    country: countryFromHeaders(request.headers),
    acceptLanguage: request.headers.get("accept-language"),
  });

  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

/**
 * País del visitante según el proveedor que esté frente al servidor:
 * Cloudflare (`cf-ipcountry`) o Vercel (`x-vercel-ip-country`). Sin ninguno
 * de los dos, la detección sigue con el idioma del navegador.
 */
function countryFromHeaders(headers: Headers): string | null {
  const country = headers.get("cf-ipcountry") ?? headers.get("x-vercel-ip-country");
  // Cloudflare usa "XX" (desconocido) y "T1" (red Tor).
  return country && !["XX", "T1"].includes(country) ? country : null;
}

export const config = {
  // Todo excepto internos de Next y archivos con extensión (imágenes, icon.svg,
  // sitemap.xml, robots.txt…).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
