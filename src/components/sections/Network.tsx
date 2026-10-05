import type { Dictionary } from "@/i18n/dictionaries/es";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "./SectionHeader";

export function Network({ copy }: { copy: Dictionary["network"] }) {
  return (
    <Section id="network">
      <SectionHeader
        eyebrow={copy.eyebrow}
        headline={copy.headline}
        aside={
          <p data-anim="copy" className="text-p-xl text-ink-soft">
            {copy.body}
          </p>
        }
      />

      <ul
        data-anim="stagger"
        className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
      >
        {copy.nodes.map((node, index) => (
          <li
            key={node.name}
            className="flex min-h-44 flex-col justify-between gap-8 bg-canvas p-6 transition-colors duration-300 hover:bg-surface lg:min-h-56 lg:p-8"
          >
            <span className="text-p-sm text-ink-muted tabular-nums">0{index + 1}</span>
            <div>
              <h3 className="text-h4">{node.name}</h3>
              <p className="mt-2 text-p-sm text-ink-soft">{node.role}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-p-sm text-ink-muted">{copy.note}</p>
    </Section>
  );
}
