import type { Dictionary } from "@/i18n/dictionaries/es";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { ContractIcon, NodesIcon, PegIcon, SparkIcon } from "@/components/ui/Icons";
import { SectionCopy, SectionHeader } from "./SectionHeader";

/** Ícono de cada tarjeta, según su `key` en el diccionario. */
const ICONS: Record<string, typeof SparkIcon> = {
  ai: SparkIcon,
  stablecoins: PegIcon,
  contracts: ContractIcon,
  integrations: NodesIcon,
};

/** Posición en la cuadrícula bento (desktop): la IA es la tarjeta principal. */
const LAYOUT = [
  "lg:row-span-2 bg-ink text-white",
  "bg-surface",
  "bg-surface",
  "sm:col-span-2 bg-surface",
];

/** Varias rutas posibles y una destacada: la IA ayuda a evaluar opciones. */
function RoutesVisual() {
  return (
    <svg viewBox="0 0 320 170" fill="none" aria-hidden className="w-full">
      <path d="M20 85C90 85 100 20 170 20s80 65 130 65" stroke="#fff" strokeOpacity="0.18" strokeDasharray="3 5" />
      <path d="M20 85C90 85 100 150 170 150s80-65 130-65" stroke="#fff" strokeOpacity="0.18" strokeDasharray="3 5" />
      <path d="M20 85c60 0 90-30 150-30s90 30 130 30" stroke="#fff" strokeOpacity="0.28" />
      <path d="M20 85h280" stroke="#9db8ff" strokeWidth="1.5" />
      {[90, 170, 240].map((x) => (
        <circle key={x} cx={x} cy="85" r="3" fill="#9db8ff" />
      ))}
      <circle cx="20" cy="85" r="7" fill="#171717" stroke="#fff" strokeWidth="1.5" />
      <circle cx="300" cy="85" r="7" fill="#0052ff" />
    </svg>
  );
}

export function Technology({ copy }: { copy: Dictionary["technology"] }) {
  return (
    <Section id="tecnologia" tone="mist">
      <SectionHeader eyebrow={copy.eyebrow} headline={copy.headline} aside={<SectionCopy paragraphs={copy.body} />} />

      <ul data-anim="stagger" className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-4">
        {copy.cards.map((card, index) => {
          const Icon = ICONS[card.key] ?? SparkIcon;
          const featured = index === 0;
          return (
            <li
              key={card.key}
              className={cn(
                "flex min-h-64 flex-col gap-10 rounded-card p-6 lg:p-8",
                featured && "sm:col-span-2 lg:col-span-1",
                LAYOUT[index],
              )}
            >
              <span
                className={cn(
                  "grid size-12 place-items-center rounded-card border",
                  featured ? "border-white/20 text-white" : "border-line text-ink",
                )}
              >
                <Icon className="size-6" />
              </span>
              {featured && (
                <div className="my-auto py-4">
                  <RoutesVisual />
                </div>
              )}
              <div className={cn("mt-auto", index === 3 && "lg:max-w-xl")}>
                <h3 className="text-h4">{card.title}</h3>
                <p className={cn("mt-3 text-p-sm", featured ? "text-on-dark-soft" : "text-ink-soft")}>{card.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 max-w-4xl text-[0.9375rem] text-ink-muted">{copy.note}</p>
    </Section>
  );
}
