import type { Dictionary } from "@/i18n/dictionaries/es";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import {
  ChatIcon,
  CheckIcon,
  CodeIcon,
  CompassIcon,
  DatabaseIcon,
  DocumentIcon,
  FunnelIcon,
  NodesIcon,
  SparkIcon,
} from "@/components/ui/Icons";
import { ModalTrigger } from "@/components/modals/ModalTrigger";
import { CardGlyph } from "./CardGlyph";

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

/** Íconos de los pasos de la ilustración, en el orden de `flow.steps`. */
const FLOW_ICONS = [DocumentIcon, SparkIcon, CheckIcon, DatabaseIcon];
/** Paso que hace la IA: va resaltado en azul. */
const AI_STEP = 1;

/**
 * Soluciones tecnológicas para empresas (la parte de agencia de software e IA
 * de Karvo): introducción con una automatización de ejemplo, los seis
 * servicios, cómo trabajamos y un cierre. Los CTA abren el diagnóstico de
 * empresas (modal "diagnostic"), el mismo formulario de la tarjeta "Empresas".
 */
export function Solutions({ copy }: { copy: Copy }) {
  return (
    <Section id="soluciones">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h2 data-anim="title" className="text-h2 text-balance">
            {copy.headline}
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {copy.body.map((paragraph) => (
              <p key={paragraph} data-anim="copy" className="text-p-lg text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>
          <p data-anim="fade" className="mt-8 border-l-2 border-accent pl-5 text-p-xl">
            {copy.tagline}
          </p>
          <div data-anim="fade" className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ModalTrigger modal="diagnostic" className="w-full sm:w-auto">
              {copy.primary}
            </ModalTrigger>
            <Button href="#servicios" variant="outline" className="w-full sm:w-auto">
              {copy.secondary}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <AutomationFlow copy={copy.flow} />
        </div>
      </div>

      <Services copy={copy} />
      <Process copy={copy} />
      <Closing copy={copy.cta} />
    </Section>
  );
}

/**
 * Ilustración: una automatización típica como ventana de producto. Es un
 * ejemplo (lo dice la barra de título), no un caso real ni una promesa.
 */
function AutomationFlow({ copy }: { copy: Copy["flow"] }) {
  const last = copy.steps.length - 1;

  return (
    <figure
      data-anim="fade"
      className="overflow-hidden rounded-card bg-surface shadow-[0_1px_2px_rgb(0_0_0/0.04),0_32px_64px_-32px_rgb(0_0_0/0.22)]"
    >
      <figcaption className="flex items-center gap-3 border-b border-line px-5 py-3.5 text-[0.8125rem] text-ink-muted">
        <span aria-hidden className="flex gap-1.5">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="size-2.5 rounded-full bg-line" />
          ))}
        </span>
        {copy.caption}
      </figcaption>

      <ol className="p-5 [background-image:radial-gradient(rgb(23_23_23/0.07)_1px,transparent_1.2px)] [background-size:20px_20px] sm:p-8">
        {copy.steps.map((step, index) => {
          const Icon = FLOW_ICONS[index] ?? SparkIcon;
          const isAi = index === AI_STEP;
          return (
            <li key={step} className="relative flex items-start gap-4 py-3 sm:gap-5">
              {/* Tramo de línea hasta el siguiente paso, con un pulso que lo recorre. */}
              {index < last && (
                <span aria-hidden className="absolute top-[3.75rem] -bottom-3 left-6 w-px bg-ink/20">
                  <span
                    className="absolute left-1/2 size-2 -translate-x-1/2 rounded-full bg-accent animate-flow-dot motion-reduce:hidden"
                    style={{ animationDelay: `${index * 1.2}s` }}
                  />
                </span>
              )}
              <span
                className={cn(
                  "relative z-10 grid size-12 shrink-0 place-items-center rounded-card border",
                  isAi ? "border-accent bg-accent text-white" : "border-line bg-surface text-ink",
                )}
              >
                <Icon className="size-6" />
              </span>
              <span
                className={cn(
                  "flex min-h-12 flex-1 items-center gap-3 rounded-card border bg-surface px-4 py-2.5 text-p-sm",
                  isAi ? "border-accent/50" : "border-line",
                )}
              >
                <span className="text-[0.8125rem] text-ink-muted tabular-nums">0{index + 1}</span>
                {step}
              </span>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}

function Services({ copy }: { copy: Copy }) {
  return (
    <div id="servicios" className="mt-24 lg:mt-36">
      <h3 data-anim="title" className="text-h3">
        {copy.servicesTitle}
      </h3>
      <ul data-anim="stagger" className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {copy.services.map((service, index) => {
          const Icon = ICONS[service.key] ?? SparkIcon;
          return (
            <li key={service.key} className="flex flex-col rounded-card bg-surface p-6 lg:p-8">
              <div className="flex items-center justify-between gap-6">
                <span className="grid size-12 place-items-center rounded-card border border-line text-accent">
                  <Icon className="size-6" />
                </span>
                <span className="text-p-sm text-ink-muted tabular-nums">0{index + 1}</span>
              </div>
              <h4 className="mt-8 text-h4 text-balance">{service.title}</h4>
              <p className="mt-3 text-p-sm text-ink-soft">{service.desc}</p>
              <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-6">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem] leading-[1.45] text-ink-soft">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
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

/** Cuatro pasos en columnas numeradas (en móvil, uno debajo del otro). */
function Process({ copy }: { copy: Copy }) {
  return (
    <div className="mt-20 lg:mt-28">
      <h3 data-anim="title" className="text-h3">
        {copy.processTitle}
      </h3>
      <ol data-anim="stagger" className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {copy.process.map((step, index) => (
          <li key={step.title} className="border-t border-ink/80 py-6 lg:pb-0">
            <span className="text-[1.5rem] text-accent tabular-nums">0{index + 1}</span>
            <h4 className="mt-4 text-h4 text-balance">{step.title}</h4>
            <p className="mt-3 text-p-sm text-ink-soft">{step.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Cierre del apartado: tarjeta azul, como la de "Empresas", con el glifo de código. */
function Closing({ copy }: { copy: Copy["cta"] }) {
  return (
    <div
      data-anim="fade"
      className="relative mt-20 overflow-hidden rounded-card bg-accent px-6 py-14 text-white sm:px-12 sm:py-20 lg:mt-28 lg:px-16"
    >
      <CardGlyph
        kind="solutions"
        className="pointer-events-none absolute top-1/2 right-[3%] hidden h-[115%] w-auto -translate-y-1/2 text-white/10 lg:block"
      />
      <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h3 className="text-h2 text-balance">{copy.headline}</h3>
          <p className="mt-6 text-p-lg text-on-dark-soft">{copy.body}</p>
        </div>
        <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:col-start-9">
          <ModalTrigger modal="diagnostic" variant="light" className="w-full sm:w-auto">
            {copy.button}
          </ModalTrigger>
          <p className="text-[0.875rem] leading-[1.5] text-on-dark-soft">{copy.note}</p>
        </div>
      </div>
    </div>
  );
}
