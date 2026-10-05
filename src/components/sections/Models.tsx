import type { Dictionary } from "@/i18n/dictionaries/es";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { CheckIcon } from "@/components/ui/Icons";
import { ModalTrigger } from "@/components/modals/ModalTrigger";
import { SectionHeader } from "./SectionHeader";

type ModelCopy = Dictionary["models"]["studio"];

function ModelCard({
  id,
  tone,
  copy,
  action,
}: {
  id: string;
  tone: "light" | "dark";
  copy: ModelCopy;
  action: React.ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <article
      id={id}
      className={cn(
        "flex flex-col rounded-card p-7 sm:p-10 lg:p-12",
        dark ? "bg-ink text-white" : "bg-surface",
      )}
    >
      <Tag variant={dark ? "outline-light" : "soft"} className="self-start">
        {copy.badge}
      </Tag>
      <h3 className="mt-10 text-h2">{copy.title}</h3>
      <p className="mt-3 text-p-xl">{copy.subhead}</p>
      <p className={cn("mt-6 text-p-md", dark ? "text-on-dark-soft" : "text-ink-soft")}>{copy.desc}</p>

      <ul className={cn("mt-10 border-b", dark ? "border-graphite" : "border-line")}>
        {copy.highlights.map((item) => (
          <li
            key={item}
            className={cn("flex items-center gap-4 border-t py-4 text-p-sm", dark ? "border-graphite" : "border-line")}
          >
            <CheckIcon className={cn("size-5 shrink-0", dark ? "text-accent-soft" : "text-accent")} />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-12">{action}</div>
    </article>
  );
}

export function Models({ copy }: { copy: Dictionary["models"] }) {
  return (
    <Section id="modelos">
      <SectionHeader
        eyebrow={copy.eyebrow}
        headline={copy.headline}
        aside={
          <p data-anim="copy" className="text-p-xl text-ink-soft">
            {copy.subtitle}
          </p>
        }
      />

      <div data-anim="stagger" className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-2">
        <ModelCard
          id="studio"
          tone="light"
          copy={copy.studio}
          action={
            <Button href="#como-construimos" variant="outline" arrow>
              {copy.studio.cta}
            </Button>
          }
        />
        <ModelCard
          id="karvo-ventures"
          tone="dark"
          copy={copy.ventures}
          action={<ModalTrigger modal="founder">{copy.ventures.cta}</ModalTrigger>}
        />
      </div>
    </Section>
  );
}
