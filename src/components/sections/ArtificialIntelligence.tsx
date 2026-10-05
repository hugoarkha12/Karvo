import type { Dictionary } from "@/i18n/dictionaries/es";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { SectionHeader } from "./SectionHeader";

export function ArtificialIntelligence({ copy }: { copy: Dictionary["ai"] }) {
  return (
    <Section id="ia">
      <SectionHeader
        eyebrow={copy.eyebrow}
        headline={copy.headline}
        aside={
          <>
            {copy.intro.map((paragraph) => (
              <p key={paragraph} data-anim="copy" className="text-p-lg text-ink-soft">
                {paragraph}
              </p>
            ))}
            <p data-anim="fade" className="flex items-start gap-3 text-p-lg">
              <span className="mt-[0.55em] size-2 shrink-0 rounded-full bg-accent" aria-hidden />
              {copy.realityNote}
            </p>
          </>
        }
      />

      <ul data-anim="stagger" className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {copy.vectors.map((vector) => (
          <li key={vector.title} className="flex flex-col gap-3 border-t border-ink pt-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-h4">{vector.title}</h3>
              <Tag variant="white">{vector.role}</Tag>
            </div>
            <p className="text-p-md text-ink-soft">{vector.desc}</p>
          </li>
        ))}
      </ul>

      <p className="mt-14 max-w-3xl text-p-sm text-ink-muted">{copy.note}</p>
    </Section>
  );
}
