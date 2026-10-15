import type { Dictionary } from "@/i18n/dictionaries/es";
import { cn } from "@/lib/utils";
import { ARKHA_SYMBOL_PATH } from "@/components/ui/Logo";

// Ilustración conceptual del hero: la red de Estados Unidos (arriba) y la de
// México (abajo), separadas por la frontera y conectadas por la capa de Arkha.
// Es abstracta a propósito: sin montos, estados ni contadores, para no
// sugerir que ya se procesan pagos reales.

type Node = { x: number; y: number; /** Se oculta en móvil (gráfico simplificado). */ minor?: boolean };

const W = 480;
const H = 560;
const HUB: Node = { x: 240, y: 280 };

const NORTH: Node[] = [
  { x: 80, y: 85 },
  { x: 215, y: 60 },
  { x: 350, y: 95 },
  { x: 440, y: 55, minor: true },
  { x: 130, y: 185 },
];
const NORTH_MESH: [number, number][] = [[0, 1], [1, 2], [2, 3], [0, 4], [4, 1]];

const SOUTH: Node[] = [
  { x: 90, y: 395 },
  { x: 215, y: 500 },
  { x: 345, y: 465 },
  { x: 440, y: 510, minor: true },
  { x: 70, y: 500, minor: true },
];
const SOUTH_MESH: [number, number][] = [[0, 1], [1, 2], [2, 3], [0, 4], [4, 1]];

/** Recorridos de los pulsos: nodo de México → Arkha → nodo de Estados Unidos. */
const ROUTES = [
  { from: 0, to: 2, dur: 4.6, begin: 0 },
  { from: 2, to: 0, dur: 5.2, begin: -1.7 },
  { from: 1, to: 1, dur: 4.2, begin: -3.2 },
];

/** Posición vertical (en el viewBox) de las anotaciones a la derecha del nodo. */
const CALLOUT_Y = [236, 280, 324];
const CALLOUT_X = 330;

/** Curva suave que sale y llega en vertical. */
const segment = (a: Node, b: Node) => {
  const mid = (a.y + b.y) / 2;
  return `C${a.x} ${mid} ${b.x} ${mid} ${b.x} ${b.y}`;
};
const curve = (a: Node, b: Node) => `M${a.x} ${a.y} ${segment(a, b)}`;

function Network({ nodes, mesh }: { nodes: Node[]; mesh: [number, number][] }) {
  return (
    <>
      {mesh.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a]!.x}
          y1={nodes[a]!.y}
          x2={nodes[b]!.x}
          y2={nodes[b]!.y}
          stroke="#fff"
          strokeOpacity="0.14"
          strokeDasharray="2 5"
          className={cn((nodes[a]!.minor || nodes[b]!.minor) && "max-sm:hidden")}
        />
      ))}
      {nodes.map((node) => (
        <path
          key={`${node.x}-${node.y}`}
          d={curve(node, HUB)}
          fill="none"
          stroke="#fff"
          strokeOpacity="0.2"
          className={cn(node.minor && "max-sm:hidden")}
        />
      ))}
      {nodes.map((node) => (
        <g key={`${node.x}-${node.y}`} className={cn(node.minor && "max-sm:hidden")}>
          <circle cx={node.x} cy={node.y} r="13" fill="#fff" fillOpacity="0.05" />
          <circle cx={node.x} cy={node.y} r="5" fill="#171717" stroke="#fff" strokeOpacity="0.8" strokeWidth="1.5" />
        </g>
      ))}
    </>
  );
}

const pct = (value: number, total: number) => `${(value / total) * 100}%`;

export function NetworkGraphic({ copy, className }: { copy: Dictionary["hero"]["graphic"]; className?: string }) {
  return (
    <div
      role="img"
      aria-label={copy.label}
      className={cn("relative aspect-[6/7] overflow-hidden rounded-card bg-ink text-white", className)}
    >
      <div
        aria-hidden
        className="absolute inset-0 [background-image:radial-gradient(rgb(255_255_255/0.07)_1px,transparent_1.2px)] [background-size:20px_20px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgb(0_82_255/0.38),transparent_42%)]"
      />

      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full" aria-hidden focusable={false}>
        {/* La frontera. */}
        <line x1="24" y1={HUB.y} x2={W - 24} y2={HUB.y} stroke="#fff" strokeOpacity="0.16" strokeDasharray="4 6" />

        {/* Anillos de la capa inteligente. */}
        <circle cx={HUB.x} cy={HUB.y} r="138" fill="none" stroke="#fff" strokeOpacity="0.05" />
        <circle cx={HUB.x} cy={HUB.y} r="90" fill="none" stroke="#fff" strokeOpacity="0.1" strokeDasharray="2 4" />

        <Network nodes={NORTH} mesh={NORTH_MESH} />
        <Network nodes={SOUTH} mesh={SOUTH_MESH} />

        {ROUTES.map((route, index) => {
          const id = `hero-route-${index}`;
          const timing = { dur: `${route.dur}s`, begin: `${route.begin}s`, repeatCount: "indefinite" } as const;
          return (
            <g key={id} className="motion-reduce:hidden">
              <path id={id} d={`${curve(SOUTH[route.from]!, HUB)} ${segment(HUB, NORTH[route.to]!)}`} fill="none" />
              <g opacity="0">
                <circle r="9" fill="#9db8ff" fillOpacity="0.25" />
                <circle r="3.5" fill="#9db8ff" />
                <animateMotion {...timing} calcMode="spline" keyPoints="0;1" keyTimes="0;1" keySplines="0.45 0 0.55 1">
                  <mpath href={`#${id}`} />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" {...timing} />
              </g>
            </g>
          );
        })}

        {/* Conectores hacia las anotaciones (solo en pantallas anchas). */}
        <g className="hidden xl:block" fill="none" stroke="#9db8ff" strokeOpacity="0.55">
          <path d={`M${HUB.x + 46} ${HUB.y}H${CALLOUT_X - 24}`} />
          {CALLOUT_Y.map((y) => (
            <path key={y} d={`M${CALLOUT_X - 24} ${HUB.y}C${CALLOUT_X - 14} ${HUB.y} ${CALLOUT_X - 14} ${y} ${CALLOUT_X - 4} ${y}`} />
          ))}
        </g>

        {/* Arkha: la capa que conecta ambos lados. */}
        <circle cx={HUB.x} cy={HUB.y} r="46" fill="#171717" stroke="#0052ff" strokeOpacity="0.7" />
        <circle
          cx={HUB.x}
          cy={HUB.y}
          r="34"
          fill="none"
          stroke="#0052ff"
          strokeWidth="2"
          className="origin-center animate-hub-pulse [transform-box:fill-box] motion-reduce:hidden"
        />
        <circle cx={HUB.x} cy={HUB.y} r="34" fill="#0052ff" />
        <path d={ARKHA_SYMBOL_PATH} fill="#fff" transform={`translate(${HUB.x - 14} ${HUB.y - 14.5}) scale(0.28)`} />
      </svg>

      <ul aria-hidden className="hidden xl:block">
        {copy.chips.map((chip, index) => (
          <li
            key={chip}
            className="absolute -translate-y-1/2 rounded-full border border-white/15 bg-ink/70 px-3 py-1.5 text-[0.8125rem] leading-none whitespace-nowrap text-white/85 backdrop-blur-sm"
            style={{ left: pct(CALLOUT_X, W), top: pct(CALLOUT_Y[index] ?? HUB.y, H) }}
          >
            {chip}
          </li>
        ))}
      </ul>

      <p aria-hidden className="absolute top-5 left-5 text-[0.8125rem] tracking-[0.12em] text-on-dark-soft uppercase sm:top-7 sm:left-7">
        {copy.destination}
      </p>
      <div
        aria-hidden
        className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-[0.8125rem] sm:inset-x-7 sm:bottom-7"
      >
        <span className="tracking-[0.12em] text-on-dark-soft uppercase">{copy.origin}</span>
        <span className="text-on-dark-muted">{copy.caption}</span>
      </div>
    </div>
  );
}
