import type { Dictionary } from "@/i18n/dictionaries/es";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { ModalTrigger } from "@/components/modals/ModalTrigger";
import { SectionHeader } from "./SectionHeader";

export function KarvoAI({ copy }: { copy: Dictionary["karvoAi"] }) {
  const last = copy.flow.length - 1;

  return (
    <Section id="karvo-ai">
      <SectionHeader
        eyebrow={copy.eyebrow}
        headline={copy.headline}
        aside={copy.body.map((paragraph) => (
          <p key={paragraph} data-anim="copy" className="text-p-lg text-ink-soft">
            {paragraph}
          </p>
        ))}
      />

      <div data-anim="fade" className="mt-14 rounded-card bg-surface p-6 sm:p-10 lg:mt-20 lg:p-12">
        <p className="text-eyebrow uppercase text-ink-soft">{copy.flowTitle}</p>

        <ol className="relative mt-10 grid gap-10 lg:grid-cols-5 lg:gap-8">
          {/* Línea que conecta las fases: vertical en móvil, horizontal en desktop. */}
          <span aria-hidden className="absolute top-2 bottom-2 left-[0.4375rem] w-px bg-line lg:hidden" />
          <span
            aria-hidden
            data-anim="draw"
            className="absolute top-[0.4375rem] right-0 left-0 hidden h-px bg-ink lg:block"
          />
          {copy.flow.map((step, index) => (
            <li key={step.name} className="relative flex gap-5 lg:flex-col lg:gap-0">
              <span
                aria-hidden
                className={cn(
                  "relative z-10 mt-1 size-3.5 shrink-0 rounded-full border-2 lg:mt-0",
                  index === last ? "border-accent bg-accent" : "border-ink bg-surface",
                )}
              />
              <div className="lg:mt-7">
                <span className="text-p-sm text-ink-muted tabular-nums">0{index + 1}</span>
                <h3 className={cn("mt-2 text-h4", index === last && "text-accent")}>{step.name}</h3>
                <p className="mt-3 text-p-sm text-ink-soft">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-start gap-6 border-t border-line pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-p-sm text-ink-soft">{copy.note}</p>
          <ModalTrigger modal="diagnostic">{copy.cta}</ModalTrigger>
        </div>
      </div>
    </Section>
  );
}
