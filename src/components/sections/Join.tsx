import type { Dictionary } from "@/i18n/dictionaries/es";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CheckIcon } from "@/components/ui/Icons";
import { ModalTrigger } from "@/components/modals/ModalTrigger";

function JoinCard({
  id,
  tone,
  eyebrow,
  headline,
  body,
  items,
  footer,
}: {
  id: string;
  tone: "dark" | "accent";
  eyebrow: string;
  headline: string;
  body: string;
  items: string[];
  footer: React.ReactNode;
}) {
  const lineColor = tone === "dark" ? "border-graphite" : "border-white/30";
  return (
    <article
      id={id}
      className={cn(
        "flex flex-col rounded-card p-7 text-white sm:p-10 lg:p-12",
        tone === "dark" ? "bg-ink" : "bg-accent",
      )}
    >
      <Eyebrow className="text-on-dark-soft">{eyebrow}</Eyebrow>
      <h2 data-anim="title" className="text-h2 text-balance">
        {headline}
      </h2>
      <p data-anim="copy" className="mt-6 text-p-lg text-on-dark-soft">
        {body}
      </p>
      <ul className={cn("mt-10 border-b", lineColor)}>
        {items.map((item) => (
          <li key={item} className={cn("flex items-center gap-4 border-t py-4 text-p-sm", lineColor)}>
            <CheckIcon className={cn("size-5 shrink-0", tone === "dark" ? "text-accent-soft" : "text-white")} />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-12">{footer}</div>
    </article>
  );
}

/** Las dos puertas de entrada: founders (aplicación) y empresas (diagnóstico). */
export function Join({
  founders,
  companies,
}: {
  founders: Dictionary["founders"];
  companies: Dictionary["companies"];
}) {
  return (
    <section className="px-gutter py-section">
      <Container className="grid gap-5 lg:grid-cols-2">
        <JoinCard
          id="founders"
          tone="dark"
          eyebrow={founders.eyebrow}
          headline={founders.headline}
          body={founders.body}
          items={founders.bullets}
          footer={
            <div className="flex flex-col items-start gap-5">
              <ModalTrigger modal="founder">{founders.cta}</ModalTrigger>
              <p className="text-[0.9375rem] text-on-dark-muted">{founders.meta.join(" · ")}</p>
            </div>
          }
        />
        <JoinCard
          id="empresas"
          tone="accent"
          eyebrow={companies.eyebrow}
          headline={companies.headline}
          body={companies.body}
          items={companies.pills}
          footer={
            <ModalTrigger modal="diagnostic" variant="light">
              {companies.cta}
            </ModalTrigger>
          }
        />
      </Container>
    </section>
  );
}
