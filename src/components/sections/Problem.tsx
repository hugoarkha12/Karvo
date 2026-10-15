import type { Dictionary } from "@/i18n/dictionaries/es";
import { Section } from "@/components/ui/Section";
import { SectionCopy, SectionHeader } from "./SectionHeader";

// Un diagrama mínimo por problema, en el mismo orden que `problem.cards`.
const glyph = { viewBox: "0 0 120 56", fill: "none", stroke: "currentColor", strokeWidth: 1.25, "aria-hidden": true } as const;

const GLYPHS = [
  /* Infraestructura fragmentada: sistemas sueltos con enlaces rotos. */
  <svg key="fragmented" {...glyph}>
    <path d="M17 18 41 38M49 38l24-22M81 16l24 20" strokeDasharray="5 5" strokeOpacity="0.5" />
    <rect x="8" y="10" width="14" height="14" rx="3" />
    <rect x="38" y="33" width="14" height="14" rx="3" />
    <rect x="70" y="8" width="14" height="14" rx="3" className="fill-accent stroke-accent" />
    <rect x="100" y="31" width="14" height="14" rx="3" />
  </svg>,
  /* Visibilidad limitada: el seguimiento se desvanece a mitad del camino. */
  <svg key="visibility" {...glyph}>
    <circle cx="10" cy="40" r="4" className="fill-accent stroke-accent" />
    <path d="M14 39C30 34 38 26 52 24" />
    <path d="M52 24c14-2 22-6 34-9" strokeDasharray="4 4" strokeOpacity="0.55" />
    <path d="M86 15c8-2 14-3 20-3" strokeDasharray="1 5" strokeOpacity="0.3" />
    <circle cx="110" cy="12" r="4" strokeDasharray="2 2" strokeOpacity="0.35" />
  </svg>,
  /* Complejidad operativa: rutas enredadas entre dos puntos. */
  <svg key="complexity" {...glyph}>
    <path d="M14 28C34-2 44 58 62 28s30-26 44 0" />
    <path d="M14 28c22 30 34-30 50 2s28 22 42-2" strokeOpacity="0.5" />
    <path d="M14 28c14-10 28 20 46 4s32-16 46-4" strokeOpacity="0.3" />
    <circle cx="10" cy="28" r="4" className="fill-accent stroke-accent" />
    <circle cx="110" cy="28" r="4" />
  </svg>,
];

export function Problem({ copy }: { copy: Dictionary["problem"] }) {
  return (
    <Section id="desafio" tone="mist">
      <SectionHeader eyebrow={copy.eyebrow} headline={copy.headline} aside={<SectionCopy paragraphs={copy.body} />} />

      <ul
        data-anim="stagger"
        className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3 lg:mt-20"
      >
        {copy.cards.map((card, index) => (
          <li
            key={card.title}
            className="flex flex-col bg-surface p-6 lg:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <span className="text-p-sm text-ink-muted tabular-nums">0{index + 1}</span>
              <span className="w-28 text-ink/70 lg:w-32">{GLYPHS[index]}</span>
            </div>
            <h3 className="mt-10 text-h4 lg:mt-20">{card.title}</h3>
            <p className="mt-3 text-p-sm text-ink-soft">{card.desc}</p>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-[0.9375rem] text-ink-muted">{copy.note}</p>
    </Section>
  );
}
