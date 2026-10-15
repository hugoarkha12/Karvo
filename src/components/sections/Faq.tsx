import type { Dictionary } from "@/i18n/dictionaries/es";
import { Section } from "@/components/ui/Section";
import { PlusIcon } from "@/components/ui/Icons";

/**
 * Preguntas frecuentes con `<details>` nativo: se abren y cierran sin
 * JavaScript, con teclado, y el navegador las encuentra con Ctrl+F.
 */
export function Faq({ copy }: { copy: Dictionary["faq"] }) {
  return (
    <Section id="preguntas" className="pt-0">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <h2 data-anim="title" className="text-h2 text-balance">
            {copy.headline}
          </h2>
          <p className="mt-6 text-p-md text-ink-soft">
            {copy.more}{" "}
            <a href="#contacto" className="text-ink underline underline-offset-[0.2em] transition-colors hover:text-accent">
              {copy.moreCta}
            </a>
          </p>
        </div>

        <ul className="border-b border-line lg:col-span-8">
          {copy.items.map((item) => (
            <li key={item.question} className="border-t border-line">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-p-xl transition-colors hover:text-accent lg:py-7 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <PlusIcon className="mt-1 size-6 shrink-0 transition-transform duration-500 ease-out-expo group-open:rotate-45" />
                </summary>
                <p className="max-w-3xl pr-12 pb-7 text-p-md text-ink-soft">{item.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
