import type { Dictionary } from "@/i18n/dictionaries/es";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CorridorGraphic } from "@/components/graphics/CorridorGraphic";
import { SectionCopy } from "./SectionHeader";

export function Market({ copy }: { copy: Dictionary["market"] }) {
  return (
    <Section id="casos-de-uso">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h2 data-anim="title" className="text-h2 text-balance">
            {copy.headline}
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            <SectionCopy paragraphs={copy.body} />
          </div>
          <blockquote data-anim="fade" className="mt-10 border-l-2 border-ink pl-6 text-p-xl">
            {copy.closing}
          </blockquote>
        </div>

        <div className="flex flex-col gap-10 lg:col-span-6 lg:col-start-7">
          <CorridorGraphic copy={copy.corridor} />

          <div>
            <p className="mb-4 text-eyebrow uppercase text-ink-soft">{copy.useCasesTitle}</p>
            <ul data-anim="stagger" className="border-b border-line">
              {copy.useCases.map((useCase, index) => (
                <li
                  key={useCase.title}
                  className="grid gap-x-6 gap-y-2 border-t border-line py-5 sm:grid-cols-[2.5rem_1fr] lg:py-6"
                >
                  <span className="text-p-sm text-ink-muted tabular-nums">0{index + 1}</span>
                  <div>
                    <h3 className="text-h4">{useCase.title}</h3>
                    <p className="mt-2 text-p-sm text-ink-soft">{useCase.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
