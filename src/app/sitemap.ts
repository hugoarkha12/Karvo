import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

/** Rutas sin idioma: la landing y las páginas legales. */
const PAGES = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/privacidad", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terminos", priority: 0.3, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap(({ path, priority, changeFrequency }) => {
    const languages = Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}/${locale}${path}`]));
    return locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: { languages },
    }));
  });
}
