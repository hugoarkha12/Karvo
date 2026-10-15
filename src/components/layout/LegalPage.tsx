import type { Metadata } from "next";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { locales, ogLocales, type Locale } from "@/i18n/config";
import { Container } from "@/components/ui/Container";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type LegalDocument = Dictionary["legal"]["privacy"];

/** Metadatos de una página legal: título propio, canonical y hreflang. */
export function legalMetadata(locale: Locale, path: string, document: LegalDocument): Metadata {
  const title = `${document.title} — Arkha`;
  return {
    title,
    description: document.description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
    },
    openGraph: {
      type: "website",
      siteName: "Arkha",
      url: `/${locale}${path}`,
      title,
      description: document.description,
      locale: ogLocales[locale],
    },
  };
}

/** Plantilla de Aviso de privacidad y Términos de uso. */
export function LegalPage({
  locale,
  path,
  dict,
  document,
}: {
  locale: Locale;
  /** Ruta sin idioma, p. ej. `/privacidad`. */
  path: string;
  dict: Dictionary;
  document: LegalDocument;
}) {
  return (
    <>
      <span id="top" />
      <Navbar locale={locale} nav={dict.nav} common={dict.common} path={path} />

      <main className="px-gutter pt-12 pb-section lg:pt-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <header className="lg:col-span-4">
            <a href={`/${locale}`} className="link-underline text-p-sm text-ink-soft">
              ← {dict.legal.backHome}
            </a>
            <h1 className="mt-8 text-h2 text-balance">{document.title}</h1>
            <p className="mt-4 text-[0.9375rem] text-ink-muted">
              {dict.legal.updatedLabel}: {dict.legal.updated}
            </p>
          </header>

          <article className="lg:col-span-7 lg:col-start-6">
            <p className="text-p-xl">{document.intro}</p>
            <div className="mt-12 border-b border-line">
              {document.sections.map((section, index) => (
                <section key={section.title} className="grid gap-4 border-t border-line py-8 sm:grid-cols-[3rem_1fr]">
                  <span className="text-p-sm text-ink-muted tabular-nums">0{index + 1}</span>
                  <div>
                    <h2 className="text-h4">{section.title}</h2>
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="mt-4 text-p-md text-ink-soft">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </Container>
      </main>

      <Footer locale={locale} copy={dict.footer} common={dict.common} path={path} />
    </>
  );
}
