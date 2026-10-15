import type { Dictionary } from "@/i18n/dictionaries/es";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ArkhaSymbol } from "@/components/ui/Logo";

/**
 * Contacto para inversionistas y socios: tarjeta oscura a todo el ancho.
 * El botón lleva al formulario (incluye la opción "Inversionista") hasta que
 * Arkha defina un correo empresarial autorizado para el equipo fundador.
 */
export function Investors({ copy }: { copy: Dictionary["investors"] }) {
  return (
    <section id="inversionistas" className="px-gutter py-section">
      <Container>
        <div className="relative overflow-hidden rounded-card bg-ink px-6 py-16 text-white sm:px-12 sm:py-24 lg:px-16 lg:py-28">
          <ArkhaSymbol className="pointer-events-none absolute right-[5%] bottom-[-8%] hidden h-[95%] w-auto text-white/[0.06] lg:block" />
          <div className="relative max-w-[48rem]">
            <Eyebrow className="text-on-dark-soft">{copy.eyebrow}</Eyebrow>
            <h2
              data-anim="title"
              className="text-[clamp(2.5rem,1.55rem+3.8vw,4.75rem)] leading-[1.06] tracking-[-0.03em] text-balance"
            >
              {copy.headline}
            </h2>
            <div className="mt-8 flex flex-col gap-4">
              {copy.body.map((paragraph) => (
                <p key={paragraph} data-anim="copy" className="text-p-lg text-on-dark-soft">
                  {paragraph}
                </p>
              ))}
            </div>
            <div data-anim="fade" className="mt-12">
              <Button href="#contacto" arrow className="w-full sm:w-auto">
                {copy.cta}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
