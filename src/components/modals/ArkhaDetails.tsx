import type { Dictionary } from "@/i18n/dictionaries/es";
import { Tag } from "@/components/ui/Tag";
import { DialogHeader } from "./Dialog";

export function ArkhaDetails({ copy }: { copy: Dictionary["forms"]["arkha"] }) {
  return (
    <article>
      <DialogHeader eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />

      <div className="flex flex-col gap-8 px-6 py-8 sm:px-10 sm:py-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[0.9375rem] text-ink-soft">{copy.statusLabel}</span>
          <Tag variant="dark">
            <span className="size-1.5 rounded-full bg-accent-soft" aria-hidden />
            {copy.status}
          </Tag>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-p-lg">{copy.desc}</p>
          <p className="text-p-sm text-ink-soft">{copy.details}</p>
        </div>

        <dl className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {copy.facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-2 bg-surface p-5">
              <dt className="text-[0.9375rem] text-ink-muted">{fact.label}</dt>
              <dd className="text-p-sm">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <p className="text-[0.9375rem] text-ink-muted">{copy.footnote}</p>
      </div>
    </article>
  );
}
