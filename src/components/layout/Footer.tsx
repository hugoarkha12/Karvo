import type { Dictionary } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";
import { Container } from "@/components/ui/Container";
import { KarvoLogo } from "@/components/ui/Logo";
import { ModalTrigger } from "@/components/modals/ModalTrigger";
import { LanguageSwitch } from "./LanguageSwitch";

export function Footer({
  locale,
  copy,
  common,
}: {
  locale: Locale;
  copy: Dictionary["footer"];
  common: Dictionary["common"];
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-accent px-gutter pt-16 pb-8 text-white sm:pt-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#top" aria-label={common.home} className="text-[1.5rem]">
              <KarvoLogo />
            </a>
            <p className="mt-8 max-w-sm text-p-xl">{copy.tagline}</p>
            <p className="mt-4 text-p-sm text-on-dark-soft">{copy.location}</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8">
            {copy.columns.map((column) => (
              <div key={column.title}>
                <p className="mb-5 text-eyebrow uppercase text-on-dark-muted">{column.title}</p>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="link-underline text-p-sm">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="mb-5 text-eyebrow uppercase text-on-dark-muted">{copy.access.title}</p>
              <ul className="flex flex-col gap-3">
                <li>
                  <ModalTrigger modal="founder" unstyled className="link-underline text-left text-p-sm">
                    {copy.access.founder}
                  </ModalTrigger>
                </li>
                <li>
                  <ModalTrigger modal="diagnostic" unstyled className="link-underline text-left text-p-sm">
                    {copy.access.diagnostic}
                  </ModalTrigger>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/25 pt-6 text-[0.9375rem] text-on-dark-soft sm:mt-24 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Karvo Venture Studio. {copy.rights}
          </p>
          <div className="flex items-center gap-8">
            <LanguageSwitch current={locale} label={common.language} tone="light" />
            <a href="#top" className="link-underline">
              {common.backToTop}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
