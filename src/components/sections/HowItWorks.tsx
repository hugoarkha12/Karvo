import type { Dictionary } from "@/i18n/dictionaries/es";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "./SectionHeader";

/** Cuatro pasos: en horizontal en desktop y en vertical en móvil. */
export function HowItWorks({ copy }: { copy: Dictionary["howItWorks"] }) {
  return (
    <Section id="como-funciona" tone="dark">
      <SectionHeader tone="dark" eyebrow={copy.eyebrow} headline={copy.headline} />

      <ol className="relative mt-14 grid gap-10 lg:mt-20 lg:grid-cols-4 lg:gap-8">
        {/* Línea que conecta los pasos: vertical en móvil, horizontal en desktop. */}
        <span aria-hidden className="absolute top-2 bottom-2 left-[0.4375rem] w-px bg-graphite lg:hidden" />
        <span
          aria-hidden
          data-anim="draw"
          className="absolute top-[0.4375rem] right-0 left-0 hidden h-px bg-graphite lg:block"
        />
        {copy.steps.map((step, index) => (
          <li key={step.title} className="relative flex gap-5 lg:flex-col lg:gap-0">
            <span
              aria-hidden
              className={cn(
                "relative z-10 mt-1 size-3.5 shrink-0 rounded-full border-2 lg:mt-0",
                index === 0 ? "border-white bg-white" : "border-white bg-ink",
              )}
            />
            <div className="lg:mt-8 lg:pr-4">
              <span className="text-p-sm text-on-dark-muted tabular-nums">0{index + 1}</span>
              <h3 className="mt-2 text-h3">{step.title}</h3>
              <p className="mt-4 text-p-sm text-on-dark-soft">{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-14 max-w-4xl border-t border-graphite pt-6 text-[0.9375rem] text-on-dark-muted lg:mt-20">
        {copy.note}
      </p>
    </Section>
  );
}
