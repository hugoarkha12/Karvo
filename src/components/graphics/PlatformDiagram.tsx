import type { Dictionary } from "@/i18n/dictionaries/es";
import { ArkhaSymbol, ArkhaWordmark } from "@/components/ui/Logo";

// "La complejidad permanece en la infraestructura. La experiencia es
// sencilla.": la empresa ve una sola capa (Arkha) y debajo quedan las redes.
// Son categorías genéricas, no integraciones existentes.

const line = "bg-ink/25";

export function PlatformDiagram({ copy }: { copy: Dictionary["platform"]["diagram"] }) {
  return (
    <figure
      data-anim="fade"
      className="flex h-full flex-col rounded-card border border-line bg-mist p-5 [background-image:radial-gradient(rgb(23_23_23/0.1)_1px,transparent_1.2px)] [background-size:20px_20px] sm:p-8 lg:p-10"
    >
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="w-full max-w-xs rounded-card border border-line bg-surface px-5 py-4 text-center text-p-sm">
          {copy.company}
        </div>

        <span aria-hidden className={`h-8 w-px ${line}`} />

        <div className="w-full rounded-card bg-accent p-5 text-white sm:p-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-2.5">
              <ArkhaSymbol className="h-5 w-auto" />
              <ArkhaWordmark className="h-[0.7rem] w-auto" />
            </span>
            <span className="text-[0.8125rem] tracking-[0.12em] text-white/75 uppercase sm:ml-auto">
              {copy.layer}
            </span>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2">
            {copy.layerChips.map((chip) => (
              <li
                key={chip}
                className="rounded-card border border-white/40 px-3 py-2 text-[0.875rem] leading-none"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <span aria-hidden className={`h-8 w-px ${line}`} />

        {/* Línea que reparte hacia las tres redes. */}
        <ul className="relative grid w-full grid-cols-3 gap-2 pt-6 sm:gap-3">
          <span aria-hidden className={`absolute top-0 right-[16.67%] left-[16.67%] h-px ${line}`} />
          {copy.networks.map((network) => (
            <li
              key={network}
              className="relative grid min-h-20 place-items-center rounded-card border border-line bg-surface px-2 py-4 text-center text-[0.8125rem] leading-[1.3] sm:px-3 sm:text-[0.9375rem]"
            >
              <span aria-hidden className={`absolute -top-6 left-1/2 h-6 w-px ${line}`} />
              {network}
            </li>
          ))}
        </ul>
      </div>

      <figcaption className="mt-8 text-[0.8125rem] text-ink-muted">{copy.caption}</figcaption>
    </figure>
  );
}
