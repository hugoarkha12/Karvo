import type { Dictionary } from "@/i18n/dictionaries/es";
import { Section } from "@/components/ui/Section";
import { PlatformDiagram } from "@/components/graphics/PlatformDiagram";
import { SectionCopy, SectionHeader } from "./SectionHeader";

export function Platform({ copy }: { copy: Dictionary["platform"] }) {
  const [complexity, simplicity] = copy.closing;

  return (
    <Section id="plataforma">
      <SectionHeader eyebrow={copy.eyebrow} headline={copy.headline} aside={<SectionCopy paragraphs={copy.body} />} />

      <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <PlatformDiagram copy={copy.diagram} />
        </div>

        <ol data-anim="stagger" className="border-b border-line lg:col-span-6">
          {copy.capabilities.map((capability, index) => (
            <li key={capability.title} className="grid gap-3 border-t border-line py-7 sm:grid-cols-[3rem_1fr] lg:py-9">
              <span className="text-p-md text-ink-muted tabular-nums">0{index + 1}</span>
              <div>
                <h3 className="text-h4">{capability.title}</h3>
                <p className="mt-3 text-p-md text-ink-soft">{capability.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <p
        data-anim="title"
        className="mt-16 text-[clamp(2rem,1.4rem+2.6vw,4rem)] leading-[1.08] tracking-[-0.025em] text-balance lg:mt-28"
      >
        <span className="text-ink-muted">{complexity}</span> {simplicity}
      </p>
    </Section>
  );
}
