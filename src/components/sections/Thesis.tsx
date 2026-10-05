import type { Dictionary } from "@/i18n/dictionaries/es";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { XMarkSmallIcon } from "@/components/ui/Icons";
import { SectionHeader } from "./SectionHeader";

export function Thesis({ copy }: { copy: Dictionary["thesis"] }) {
  return (
    <Section id="tesis">
      <SectionHeader
        eyebrow={copy.eyebrow}
        headline={copy.headline}
        aside={
          <p data-anim="copy" className="text-p-xl text-ink-soft">
            {copy.intro}
          </p>
        }
      />

      <ol data-anim="stagger" className="mt-14 border-b border-line lg:mt-20">
        {copy.shifts.map((shift, index) => (
          <li
            key={shift.title}
            className="grid gap-2 border-t border-line py-6 sm:grid-cols-12 sm:gap-6 lg:py-8"
          >
            <span className="text-p-md text-ink-muted tabular-nums sm:col-span-1">0{index + 1}</span>
            <h3 className="text-h4 sm:col-span-5">{shift.title}</h3>
            <p className="text-p-md text-ink-soft sm:col-span-6">{shift.desc}</p>
          </li>
        ))}
      </ol>

      <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p data-anim="copy" className="text-p-xl">
            {copy.conclusion}
          </p>
          <p className="mt-10 mb-4 text-eyebrow uppercase text-ink-soft">{copy.equationTitle}</p>
          <ul data-anim="stagger" className="flex flex-wrap items-center gap-2">
            {copy.equation.map((term, index) => (
              <li key={term} className="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden className="text-p-md text-ink-muted">
                    +
                  </span>
                )}
                <Tag variant={index === 0 ? "accent" : "white"} className="px-4 py-3 text-p-sm">
                  {term}
                </Tag>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <p className="mb-4 text-eyebrow uppercase text-ink-soft">{copy.notTitle}</p>
          <ul data-anim="stagger" className="flex flex-wrap gap-2">
            {copy.notList.map((item) => (
              <li key={item}>
                <Tag variant="outline" className="py-2.5 pl-2.5 text-ink-soft">
                  <XMarkSmallIcon className="size-4" />
                  {item}
                </Tag>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
