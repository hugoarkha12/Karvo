import type { Dictionary } from "@/i18n/dictionaries/es";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "./SectionHeader";

export function WhyArkha({ copy }: { copy: Dictionary["why"] }) {
  return (
    <Section id="por-que-arkha">
      <SectionHeader eyebrow={copy.eyebrow} headline={copy.headline} />

      <ul
        data-anim="stagger"
        className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
      >
        {copy.items.map((item, index) => (
          <li key={item.title} className="flex flex-col bg-surface p-6 lg:p-8">
            <span className="flex items-center gap-3 text-p-sm text-ink-muted tabular-nums">
              <span aria-hidden className="h-px w-6 bg-ink" />
              0{index + 1}
            </span>
            <h3 className="mt-12 text-h4 text-balance lg:mt-16">{item.title}</h3>
            <p className="mt-3 text-p-sm text-ink-soft">{item.desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
