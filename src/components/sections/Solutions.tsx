import type { Dictionary } from "@/i18n/dictionaries/es";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  ChatIcon,
  CheckIcon,
  CodeIcon,
  CompassIcon,
  FunnelIcon,
  NodesIcon,
  SparkIcon,
} from "@/components/ui/Icons";
import { SectionCopy, SectionHeader } from "./SectionHeader";

type Copy = Dictionary["solutions"];

/** Ícono de cada servicio, según su `key` en el diccionario. */
const ICONS: Record<string, typeof SparkIcon> = {
  automation: SparkIcon,
  agents: ChatIcon,
  software: CodeIcon,
  integrations: NodesIcon,
  sales: FunnelIcon,
  consulting: CompassIcon,
};

/**
 * Apartado de soluciones tecnológicas para empresas: introducción, los seis
 * servicios, cómo trabajamos y un cierre que lleva al formulario (#contacto).
 * Va sobre fondo `mist` para leerse como un bloque propio dentro de la página.
 */
export function Solutions({ copy }: { copy: Copy }) {
  return (
    <Section id="soluciones" tone="mist">
      <SectionHeader
        eyebrow={copy.eyebrow}
        headline={copy.headline}
        aside={
          <>
            <SectionCopy paragraphs={copy.body} />
            <p data-anim="copy" className="text-p-xl text-ink">
              {copy.tagline}
            </p>
            <div data-anim="fade" className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#contacto" arrow className="w-full sm:w-auto">
                {copy.primary}
              </Button>
              <Button href="#servicios" variant="outline" className="w-full sm:w-auto">
                {copy.secondary}
              </Button>
            </div>
          </>
        }
      />

      <Services copy={copy} />
      <Process copy={copy} />
      <Closing copy={copy.cta} />
    </Section>
  );
}

function Services({ copy }: { copy: Copy }) {
  return (
    <div id="servicios" className="mt-20 lg:mt-28">
      <h3 data-anim="title" className="text-h3">
        {copy.servicesTitle}
      </h3>
      <ul data-anim="stagger" className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {copy.services.map((service, index) => {
          const Icon = ICONS[service.key] ?? SparkIcon;
          return (
            <li key={service.key} className="flex flex-col rounded-card bg-surface p-6 lg:p-8">
              <div className="flex items-center justify-between gap-6">
                <span className="grid size-12 place-items-center rounded-card border border-line text-ink">
                  <Icon className="size-6" />
                </span>
                <span className="text-p-sm text-ink-muted tabular-nums">0{index + 1}</span>
              </div>
              <h4 className="mt-8 text-h4 text-balance">{service.title}</h4>
              <p className="mt-3 text-p-sm text-ink-soft">{service.desc}</p>
              <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-6">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem] leading-[1.45] text-ink-soft">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Cuatro pasos: en fila en desktop (unidos por una línea) y apilados en móvil. */
function Process({ copy }: { copy: Copy }) {
  return (
    <div className="mt-20 lg:mt-28">
      <h3 data-anim="title" className="text-h3">
        {copy.processTitle}
      </h3>
      <ol className="relative mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Línea que une los pasos: vertical en móvil, horizontal en desktop. */}
        <span aria-hidden className="absolute top-2 bottom-2 left-[0.4375rem] w-px bg-ink/25 md:hidden" />
        <span
          aria-hidden
          data-anim="draw"
          className="absolute top-[0.4375rem] right-0 left-0 hidden h-px bg-ink/25 lg:block"
        />
        {copy.process.map((step, index) => (
          <li key={step.title} className="relative flex gap-5 md:block">
            <span
              aria-hidden
              className={cn(
                "relative z-10 mt-1 block size-3.5 shrink-0 rounded-full border-2 border-ink md:mt-0",
                index === 0 ? "bg-ink" : "bg-mist",
              )}
            />
            <div className="md:mt-6">
              <span className="block text-p-sm text-ink-muted tabular-nums">0{index + 1}</span>
              <h4 className="mt-2 text-h4 text-balance">{step.title}</h4>
              <p className="mt-3 text-p-sm text-ink-soft">{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Cierre del apartado: tarjeta oscura con la invitación a escribirnos. */
function Closing({ copy }: { copy: Copy["cta"] }) {
  return (
    <div
      data-anim="fade"
      className="mt-20 rounded-card bg-ink px-6 py-14 text-white sm:px-12 sm:py-20 lg:mt-28 lg:px-16"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h3 className="text-h2 text-balance">{copy.headline}</h3>
          <p className="mt-6 text-p-lg text-on-dark-soft">{copy.body}</p>
        </div>
        <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:col-start-9">
          <Button href="#contacto" arrow className="w-full sm:w-auto">
            {copy.button}
          </Button>
          <p className="text-[0.875rem] leading-[1.5] text-on-dark-muted">{copy.note}</p>
        </div>
      </div>
    </div>
  );
}
