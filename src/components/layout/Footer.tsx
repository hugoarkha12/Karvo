import type { Dictionary } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";
import { Container } from "@/components/ui/Container";
import { ArkhaLogo, ArkhaWordmark } from "@/components/ui/Logo";
import { LanguageSwitch } from "./LanguageSwitch";

/**
 * Pie de página de la landing y de las páginas legales. Los enlaces llevan el
 * idioma (`/es#plataforma`) para funcionar también desde `/es/privacidad`;
 * en la landing el navegador solo se desplaza, sin recargar.
 */
export function Footer({
  locale,
  copy,
  common,
  path = "",
}: {
  locale: Locale;
  copy: Dictionary["footer"];
  common: Dictionary["common"];
  /** Ruta actual sin idioma (p. ej. `/privacidad`), para el selector de idioma. */
  path?: string;
}) {
  const year = new Date().getFullYear();
  const home = `/${locale}`;

  return (
    <footer className="overflow-hidden bg-ink px-gutter pt-16 pb-8 text-white sm:pt-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href={home} aria-label={common.home} className="text-[1.75rem]">
              <ArkhaLogo />
            </a>
            <p className="mt-8 max-w-sm text-p-xl text-on-dark-soft">{copy.description}</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 lg:col-span-5 lg:col-start-8">
            <div>
              <p className="mb-5 text-eyebrow uppercase text-on-dark-muted">{copy.navTitle}</p>
              <ul className="flex flex-col gap-3">
                {copy.links.map((link) => (
                  <li key={link.href}>
                    <a href={`${home}${link.href}`} className="link-underline text-p-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-5 text-eyebrow uppercase text-on-dark-muted">{copy.legalTitle}</p>
              <ul className="flex flex-col gap-3">
                {copy.legalLinks.map((link) => (
                  <li key={link.path}>
                    <a href={`${home}${link.path}`} className="link-underline text-p-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <p className="mt-16 max-w-4xl text-[0.875rem] leading-[1.5] text-on-dark-muted sm:mt-20">{copy.disclaimer}</p>

        <div className="mt-10 flex flex-col gap-5 border-t border-graphite pt-6 text-[0.9375rem] text-on-dark-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Arkha. {copy.rights}
          </p>
          <div className="flex items-center gap-8">
            <LanguageSwitch current={locale} label={common.language} tone="light" path={path} />
            <a href="#top" className="link-underline">
              {common.backToTop}
            </a>
          </div>
        </div>

        {/* Gris opaco (no blanco con transparencia): los trazos del wordmark se
            traslapan y con alfa se verían las uniones. */}
        <ArkhaWordmark className="mt-16 w-full text-[#232323] sm:mt-24" />
      </Container>
    </footer>
  );
}
