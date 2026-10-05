import type { Dictionary } from "@/i18n/dictionaries/es";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { KarvoSymbol } from "@/components/ui/Logo";
import { ModalTrigger } from "@/components/modals/ModalTrigger";

/** Cierre tipo "billboard": tarjeta oscura a todo el ancho. */
export function FinalCta({ copy }: { copy: Dictionary["finalCta"] }) {
  return (
    <section className="px-gutter pb-section">
      <Container>
        <div className="relative overflow-hidden rounded-card bg-ink px-6 py-16 text-white sm:px-12 sm:py-24 lg:px-16 lg:py-28">
          <KarvoSymbol className="pointer-events-none absolute top-[11%] right-[6%] hidden h-[78%] w-auto text-white/[0.06] lg:block" />
          <div className="relative max-w-[48rem]">
            <Eyebrow className="text-on-dark-soft">{copy.eyebrow}</Eyebrow>
            <h2
              data-anim="title"
              className="text-[clamp(2.5rem,1.55rem+3.8vw,5rem)] leading-[1.06] tracking-[-0.03em] text-balance"
            >
              {copy.headline}
            </h2>
            <p data-anim="copy" className="mt-6 text-p-xl text-accent-soft">
              {copy.subheadline}
            </p>
            <div data-anim="fade" className="mt-12 flex flex-wrap gap-3">
              <ModalTrigger modal="founder">{copy.primary}</ModalTrigger>
              <ModalTrigger modal="diagnostic" variant="outline-light">
                {copy.secondary}
              </ModalTrigger>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
