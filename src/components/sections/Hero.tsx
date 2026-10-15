import type { Dictionary } from "@/i18n/dictionaries/es";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { NetworkGraphic } from "@/components/graphics/NetworkGraphic";

const delay = (seconds: number) => ({ "--delay": `${seconds}s` }) as React.CSSProperties;

export function Hero({ copy }: { copy: Dictionary["hero"] }) {
  const [lead, focus] = copy.body;

  return (
    <section className="px-gutter pt-8 pb-4 lg:pt-12">
      <Container>
        <div className="grid items-center gap-12 lg:min-h-[calc(100svh-var(--nav-h)-11rem)] lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="intro-slide mb-8 flex items-center gap-3 text-eyebrow uppercase text-ink-soft" style={delay(0.05)}>
              <span aria-hidden className="size-2 rounded-full bg-ink" />
              {copy.eyebrow}
            </p>
            <h1 className="text-[clamp(2.375rem,1.45rem+3.9vw,5rem)] leading-[1.03] tracking-[-0.035em]">
              <span className="intro-rise block" style={delay(0.1)}>
                {copy.line1}
              </span>
              <span className="intro-rise block text-ink-muted" style={delay(0.2)}>
                {copy.line2}
              </span>
            </h1>
            <p className="intro-slide mt-8 max-w-[34rem] text-p-lg text-ink-soft" style={delay(0.35)}>
              {lead}
            </p>
            {focus && (
              <p
                className="intro-slide mt-5 max-w-[34rem] border-l-2 border-ink pl-4 text-p-md text-ink"
                style={delay(0.4)}
              >
                {focus}
              </p>
            )}
            <div className="intro-slide mt-10 flex flex-col gap-3 sm:flex-row" style={delay(0.5)}>
              <Button href="#contacto" arrow className="w-full sm:w-auto">
                {copy.primary}
              </Button>
              <Button href="#plataforma" variant="outline" className="w-full sm:w-auto">
                {copy.secondary}
              </Button>
            </div>
            <p className="intro-slide mt-6 text-[0.9375rem] text-ink-muted" style={delay(0.6)}>
              {copy.note}
            </p>
          </div>

          <div className="intro-slide lg:col-span-6" style={delay(0.25)}>
            <NetworkGraphic copy={copy.graphic} />
          </div>
        </div>

        <ul className="intro-slide mt-16 grid gap-x-8 gap-y-4 border-t border-line pt-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4" style={delay(0.7)}>
          {copy.principles.map((principle) => (
            <li key={principle} className="flex items-start gap-3 text-p-sm text-ink-soft">
              <CheckIcon className="mt-0.5 size-5 shrink-0 text-ink" />
              {principle}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
