import type { Dictionary } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tag } from "@/components/ui/Tag";
import { PartnerForm } from "@/components/forms/PartnerForm";

/** "Construye con nosotros": el destino de todos los CTA del sitio (#contacto). */
export function Partners({
  locale,
  copy,
  form,
  newTabLabel,
}: {
  locale: Locale;
  copy: Dictionary["partners"];
  form: Dictionary["form"];
  newTabLabel: string;
}) {
  return (
    <Section id="contacto" tone="mist">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5 lg:pt-6">
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <h2 data-anim="title" className="text-h2 text-balance">
              {copy.headline}
            </h2>
            <p data-anim="copy" className="mt-8 text-p-lg text-ink-soft">
              {copy.body}
            </p>
            <ul data-anim="stagger" className="mt-8 flex flex-wrap gap-2">
              {copy.audience.map((item) => (
                <li key={item}>
                  <Tag variant="white" className="px-4 py-3 text-p-sm">
                    {item}
                  </Tag>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-anim="fade" className="rounded-card bg-surface lg:col-span-7">
          <PartnerForm locale={locale} copy={form} privacyHref={`/${locale}/privacidad`} newTabLabel={newTabLabel} />
        </div>
      </div>
    </Section>
  );
}
