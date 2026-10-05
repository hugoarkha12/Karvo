import type { Dictionary } from "@/i18n/dictionaries/es";
import { cn } from "@/lib/utils";
import { CheckIcon, LockIcon } from "@/components/ui/Icons";

// Mosaicos del carrusel de ventures. Todos se dibujan con HTML/SVG y escalan
// con el tamaño del slot (unidades `cqw` de container queries), así se ven
// igual en móvil y desktop. Cuando haya fotos y capturas reales de cada
// compañía, basta con reemplazar el mosaico por un <Image>.

type Mock = Dictionary["ventures"]["mock"];

// El slot del carrusel es el @container: `cqw` = 1 % de su ancho.
const tile = "absolute inset-0 overflow-hidden";

/** Logo / nombre de la compañía sobre negro. */
export function WordmarkTile({ name }: { name: string }) {
  return (
    <div className={cn(tile, "grid place-items-center bg-[#0b0b0b] text-white")}>
      <span className="text-[14cqw] leading-none font-medium tracking-[-0.04em]">{name}</span>
    </div>
  );
}

/** Corredor MXN ⇄ USD: la ruta transfronteriza que atiende Arkha. */
export function CorridorTile() {
  const route = "M88 214 C 140 96, 262 66, 318 118";
  return (
    <div
      className={cn(tile, "bg-[#d6d6d6]")}
      style={{
        backgroundImage: "radial-gradient(#17171733 1px, transparent 1.2px)",
        backgroundSize: "5.5cqw 5.5cqw",
      }}
    >
      <svg viewBox="0 0 400 300" className="absolute inset-0 size-full" aria-hidden>
        <line x1="204" y1="0" x2="204" y2="300" stroke="#171717" strokeOpacity="0.35" strokeDasharray="4 6" />
        <path id="arkha-route" d={route} fill="none" stroke="#171717" strokeWidth="1.5" />
        {[
          { x: 88, y: 214, label: "MXN" },
          { x: 318, y: 118, label: "USD" },
        ].map((node) => (
          <g key={node.label}>
            <circle cx={node.x} cy={node.y} r="9" fill="#f6f6f6" stroke="#171717" strokeWidth="1.5" />
            <text x={node.x} y={node.y + 34} textAnchor="middle" fontSize="15" fill="#171717" letterSpacing="1.5">
              {node.label}
            </text>
          </g>
        ))}
        <circle r="5" fill="#0052ff" className="motion-reduce:hidden">
          <animateMotion dur="3.2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.65 0 0.35 1">
            <mpath href="#arkha-route" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}

/** Pantalla conceptual del producto dentro de un dispositivo. */
export function ProductTile({ mock }: { mock: Mock }) {
  return (
    <div className={cn(tile, "bg-[#dedede]")}>
      <div className="absolute top-[13%] left-[8%] h-full w-full rounded-tl-[2.2cqw] bg-ink p-[1.1cqw] shadow-[0_2cqw_6cqw_-1cqw_rgb(0_0_0/0.35)]">
        <div className="flex h-full w-full flex-col overflow-hidden rounded-tl-[1.3cqw] bg-surface text-ink">
          <div className="flex items-center gap-[1cqw] border-b border-line px-[3cqw] py-[1.8cqw]">
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="size-[1.4cqw] rounded-full bg-line" />
            ))}
            <span className="ml-[2cqw] text-[2.4cqw] text-ink-muted">arkha.app</span>
          </div>
          <div className="flex flex-col gap-[3cqw] p-[4cqw] pr-[12cqw]">
            <p className="text-[4.6cqw] leading-none tracking-[-0.02em]">{mock.app}</p>
            <div className="grid grid-cols-2 gap-[2cqw]">
              {[
                { label: mock.send, value: "10,000.00", currency: "USD" },
                { label: mock.receive, value: "171,850.00", currency: "MXN" },
              ].map((amount) => (
                <div key={amount.currency} className="rounded-[1.2cqw] border border-line p-[2.4cqw]">
                  <p className="text-[2.3cqw] text-ink-muted">{amount.label}</p>
                  <p className="mt-[1cqw] text-[3.8cqw] leading-none tracking-[-0.02em] tabular-nums">
                    {amount.value} <span className="text-ink-muted">{amount.currency}</span>
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[2.3cqw] text-ink-muted tabular-nums">
              {mock.rate} · 1 USD = 17.185 MXN
            </p>
            <ol className="flex flex-wrap gap-[1.4cqw]">
              {mock.steps.map((step, index) => {
                const live = index === mock.steps.length - 1;
                return (
                  <li
                    key={step}
                    className={cn(
                      "flex items-center gap-[1cqw] rounded-full px-[2.2cqw] py-[1.1cqw] text-[2.3cqw] leading-none",
                      live ? "bg-accent text-white" : "bg-canvas",
                    )}
                  >
                    {live ? (
                      <span className="size-[1.2cqw] rounded-full bg-white" />
                    ) : (
                      <CheckIcon className="size-[2.4cqw]" />
                    )}
                    {step}
                    {live && <span className="text-white/75">· {mock.live}</span>}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
      <span className="absolute top-[4%] left-[4%] text-[2.3cqw] text-ink-muted">{mock.concept}</span>
    </div>
  );
}

/** Capacidades clave en tarjetas (como el detalle de UI en High Alpha). */
export function FactsTile({ facts }: { facts: Mock["facts"] }) {
  return (
    <div className={cn(tile, "bg-[#ececec] p-[4.5cqw]")}>
      <dl className="grid h-full grid-cols-2 grid-rows-2 gap-[2.4cqw]">
        {facts.map((fact, index) => (
          <div
            key={fact.label}
            className="flex flex-col justify-between rounded-[1.4cqw] bg-surface p-[3.4cqw] shadow-[0_0.3cqw_1cqw_rgb(0_0_0/0.06)]"
          >
            <dt className="flex items-center gap-[1.2cqw] text-[2.8cqw] text-ink-muted">
              <span className={cn("size-[1.4cqw] rounded-full", index === 0 ? "bg-accent" : "bg-line")} />
              {fact.label}
            </dt>
            <dd className="text-[5cqw] leading-none tracking-[-0.02em]">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Logo oculto de una compañía en modo stealth. */
export function StealthTile({ label }: { label: string }) {
  return (
    <div className={cn(tile, "grid place-items-center bg-[#0b0b0b] text-white/55")}>
      <span className="flex items-center gap-[2.5cqw] text-[6cqw] tracking-[-0.02em]">
        <LockIcon className="size-[7cqw]" />
        {label}
      </span>
    </div>
  );
}

/** "Foto" desenfocada: formas en escala de grises. */
export function BlurTile({ variant }: { variant: 0 | 1 }) {
  const blobs =
    variant === 0
      ? ["left-[-15%] top-[10%] size-[75%] bg-[#7d7d7d]", "right-[-20%] bottom-[-25%] size-[80%] bg-[#3f3f3f]", "left-[30%] top-[-20%] size-[45%] bg-[#bdbdbd]"]
      : ["right-[-10%] top-[-15%] size-[70%] bg-[#6a6a6a]", "left-[-25%] bottom-[-20%] size-[85%] bg-[#a3a3a3]", "left-[35%] top-[35%] size-[40%] bg-[#2e2e2e]"];
  return (
    <div className={cn(tile, "bg-[#c9c9c9]")}>
      {blobs.map((blob) => (
        <span key={blob} className={cn("absolute rounded-full blur-[9cqw]", blob)} />
      ))}
    </div>
  );
}

/** Interfaz bloqueada: solo esqueleto, sin datos. */
export function ConfidentialTile({ label, variant }: { label: string; variant: 0 | 1 }) {
  const widths = variant === 0 ? ["62%", "88%", "45%", "74%"] : ["48%", "70%", "84%", "56%"];
  return (
    <div className={cn(tile, "bg-[#dedede]")}>
      <div className="absolute top-[13%] left-[8%] h-full w-full rounded-tl-[2.2cqw] bg-ink p-[1.1cqw]">
        <div className="flex h-full w-full flex-col gap-[3cqw] rounded-tl-[1.3cqw] bg-surface p-[5cqw] pr-[14cqw]">
          {widths.map((width) => (
            <span key={width} className="h-[3cqw] rounded-full bg-canvas" style={{ width }} />
          ))}
          <div className="mt-[2cqw] grid grid-cols-3 gap-[2cqw]">
            {[0, 1, 2].map((box) => (
              <span key={box} className="h-[14cqw] rounded-[1.2cqw] bg-canvas" />
            ))}
          </div>
        </div>
      </div>
      <span className="absolute top-[44%] left-[38%] flex items-center gap-[1.4cqw] rounded-full bg-ink px-[3cqw] py-[1.6cqw] text-[2.8cqw] leading-none text-white">
        <LockIcon className="size-[3cqw]" />
        {label}
      </span>
    </div>
  );
}

/** Tarjetas de métricas sin datos todavía. */
export function SkeletonFactsTile({ variant }: { variant: 0 | 1 }) {
  return (
    <div className={cn(tile, "bg-[#ececec] p-[4.5cqw]")}>
      <div className="grid h-full grid-cols-2 grid-rows-2 gap-[2.4cqw]">
        {[0, 1, 2, 3].map((card) => (
          <div key={card} className="flex flex-col justify-between rounded-[1.4cqw] bg-surface p-[3.4cqw]">
            <span className="h-[2.4cqw] rounded-full bg-canvas" style={{ width: `${40 + ((card + variant) % 3) * 15}%` }} />
            <span className="h-[5cqw] rounded-[0.8cqw] bg-canvas" style={{ width: `${55 + ((card + variant) % 2) * 20}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}
