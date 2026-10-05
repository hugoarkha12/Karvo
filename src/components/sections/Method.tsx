import type { Dictionary } from "@/i18n/dictionaries/es";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { SectionHeader } from "./SectionHeader";

/** Proceso en 5 fases, sobre fondo oscuro (como "Studio" de High Alpha). */
export function Method({ copy }: { copy: Dictionary["method"] }) {
  return (
    <Section id="como-construimos" tone="dark">
      <SectionHeader
        tone="dark"
        eyebrow={copy.eyebrow}
        headline={copy.headline}
        aside={
          <p data-anim="copy" className="text-p-lg text-on-dark-soft">
            {copy.subtitle}
          </p>
        }
      />

      <ol data-anim="stagger" className="mt-14 grid sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
        {copy.steps.map((step, index) => (
          <li
            key={step.title}
            className="flex flex-col gap-4 border-t border-graphite py-8 sm:pr-6 lg:border-t-0 lg:border-l lg:px-6 lg:py-2 xl:px-8"
          >
            <span className="text-[1.5rem] text-on-dark-soft tabular-nums">0{index + 1}</span>
            <h3 className="text-h4">{step.title}</h3>
            <p className="text-p-sm text-on-dark-soft">{step.desc}</p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-4">
              {step.tags.map((tag) => (
                <li key={tag}>
                  <Tag variant="outline-light">{tag}</Tag>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
