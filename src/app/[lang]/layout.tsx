import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { locales, ogLocales } from "@/i18n/config";
import { siteUrl } from "@/lib/site";
import "../globals.css";

// Alternativa libre a PP Neue Montreal (la fuente de High Alpha, de licencia
// comercial). next/font la sirve desde nuestro dominio, sin pedidos a Google.
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

// Solo existen /es y /en; cualquier otro valor del segmento da 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#f6f6f6",
};

export async function generateMetadata(): Promise<Metadata> {
  const [locale, { meta }] = await Promise.all([getLocale(), getDictionary()]);

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: { es: "/es", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      siteName: "Karvo",
      url: `/${locale}`,
      title: meta.title,
      description: meta.ogDescription,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.ogDescription,
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={geist.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
