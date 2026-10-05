import type { Dictionary } from "@/i18n/dictionaries/es";
import { Container } from "@/components/ui/Container";
import { ArrowIcon } from "@/components/ui/Icons";
import { CardGlyph, type GlyphKind } from "./CardGlyph";

const delay = (seconds: number) => ({ "--delay": `${seconds}s` }) as React.CSSProperties;

export function Hero({ copy }: { copy: Dictionary["hero"] }) {
  return (
    <section className="px-gutter pb-10 lg:pb-12">
      <Container className="flex min-h-[calc(100svh-var(--nav-h)-3rem)] flex-col justify-end gap-12 pt-10 lg:gap-16">
        <div>
          <p className="intro-slide mb-8 text-eyebrow uppercase text-ink-soft" style={delay(0.05)}>
            {copy.location}
          </p>
          <h1 className="text-display">
            <span className="intro-rise block" style={delay(0.1)}>
              {copy.line1}
            </span>
            <span className="intro-rise block text-accent" style={delay(0.2)}>
              {copy.line2}
            </span>
          </h1>
          <p className="intro-slide mt-8 max-w-[42rem] text-p-lg text-ink-soft" style={delay(0.35)}>
            {copy.subheadline}
          </p>
        </div>

        <ul className="grid gap-3 md:grid-cols-3 md:gap-5">
          {copy.cards.map((card, index) => (
            <li key={card.key} className="intro-slide" style={delay(0.45 + index * 0.1)}>
              <a
                href={card.href}
                className="group relative flex h-full min-h-52 flex-col justify-end overflow-hidden rounded-card bg-ink p-6 text-white transition-colors duration-300 hover:bg-accent md:min-h-64 lg:p-8"
              >
                <CardGlyph
                  kind={card.key as GlyphKind}
                  className="absolute top-6 right-6 hidden size-20 text-white/35 transition-colors duration-300 group-hover:text-white lg:top-8 lg:right-8 lg:block"
                />
                <div className="max-w-[22rem]">
                  <div className="mb-3 flex items-center gap-3">
                    <h2 className="text-h3">{card.title}</h2>
                    <ArrowIcon className="w-8 shrink-0 transition-transform duration-500 ease-out-expo group-hover:translate-x-2 lg:w-9" />
                  </div>
                  <p className="text-p-sm text-on-dark-soft">{card.desc}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
