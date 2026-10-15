import type { Dictionary } from "@/i18n/dictionaries/es";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionCopy, SectionHeader } from "./SectionHeader";

/** Etapas de desarrollo, sin fechas: hoy → después → a largo plazo. */
export function Vision({ copy }: { copy: Dictionary["vision"] }) {
  return (
    <Section id="nosotros" tone="dark">
      <SectionHeader
        tone="dark"
        eyebrow={copy.eyebrow}
        headline={copy.headline}
        aside={<SectionCopy paragraphs={copy.body} tone="dark" />}
      />

      <ol className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-24">
        <span
          aria-hidden
          data-anim="draw"
          className="absolute top-[0.4375rem] right-0 left-0 hidden h-px bg-graphite md:block"
        />
        {copy.stages.map((stage, index) => (
          <li key={stage.title} className="relative">
            <span
              aria-hidden
              className={cn(
                "relative z-10 block size-3.5 rounded-full border-2",
                index === 0 ? "border-white bg-white" : "border-white bg-ink",
              )}
            />
            <p className={cn("mt-6 text-eyebrow uppercase", index === 0 ? "text-white" : "text-on-dark-muted")}>
              {stage.when}
            </p>
            <h3 className="mt-3 text-h3">{stage.title}</h3>
            <p className="mt-4 max-w-sm text-p-sm text-on-dark-soft">{stage.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
