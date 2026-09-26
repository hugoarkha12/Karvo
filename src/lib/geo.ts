import { Language, SPANISH_COUNTRIES } from "./translations";

export interface GeoDetectionResult {
  lang: Language;
  country?: string;
  city?: string;
  ip?: string;
  source: "saved" | "ip" | "browser";
}

export async function detectLanguageFromIpAndBrowser(): Promise<GeoDetectionResult> {
  if (typeof window === "undefined") {
    return { lang: "es", source: "browser" };
  }

  // 1. Check if user already has a saved manual preference
  const saved = localStorage.getItem("karvo_lang") as Language | null;
  if (saved === "en" || saved === "es") {
    return { lang: saved, source: "saved" };
  }

  // 2. Initial browser language heuristic
  const browserLang = (navigator.language || "").toLowerCase();
  const initialLang: Language = browserLang.startsWith("es") ? "es" : "en";

  try {
    // 3. Query high-speed IP geolocation service
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch("https://ipwho.is/", {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const countryCode = (data.country_code || "").toUpperCase();
      const isSpanishCountry = SPANISH_COUNTRIES.has(countryCode);
      const detectedLang: Language = isSpanishCountry ? "es" : "en";

      return {
        lang: detectedLang,
        country: countryCode,
        city: data.city,
        ip: data.ip,
        source: "ip",
      };
    }
  } catch {
    // Fallback: try secondary lightweight country lookup
    try {
      const controller2 = new AbortController();
      const timeoutId2 = setTimeout(() => controller2.abort(), 2000);
      const res2 = await fetch("https://api.country.is/", {
        signal: controller2.signal,
      });
      clearTimeout(timeoutId2);

      if (res2.ok) {
        const data2 = await res2.json();
        const countryCode = (data2.country || "").toUpperCase();
        const isSpanishCountry = SPANISH_COUNTRIES.has(countryCode);
        return {
          lang: isSpanishCountry ? "es" : "en",
          country: countryCode,
          ip: data2.ip,
          source: "ip",
        };
      }
    } catch {
      // Ignored: fallback to browser locale
    }
  }

  return {
    lang: initialLang,
    source: "browser",
  };
}
