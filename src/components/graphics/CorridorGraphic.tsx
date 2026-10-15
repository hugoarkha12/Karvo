import type { Dictionary } from "@/i18n/dictionaries/es";

// El corredor México ⇄ Estados Unidos como mercado objetivo (no como servicio
// disponible): dos nodos, la frontera y una ruta con un pulso.

const W = 480;
const H = 260;
const NODES = [
  { x: 96, y: 176, code: "MX" },
  { x: 384, y: 176, code: "US" },
] as const;
const ROUTE = "M96 176C150 50 330 50 384 176";

export function CorridorGraphic({ copy }: { copy: Dictionary["market"]["corridor"] }) {
  const labels = [copy.origin, copy.destination];

  return (
    <figure
      data-anim="fade"
      className="relative aspect-[24/13] overflow-hidden rounded-card border border-line bg-mist [background-image:radial-gradient(rgb(23_23_23/0.1)_1px,transparent_1.2px)] [background-size:20px_20px]"
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full" aria-hidden focusable={false}>
        <defs>
          <linearGradient id="market-route-stroke" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#171717" />
            <stop offset="1" stopColor="#0052ff" />
          </linearGradient>
        </defs>
        <line x1={W / 2} y1="24" x2={W / 2} y2={H - 24} stroke="#171717" strokeOpacity="0.25" strokeDasharray="4 6" />
        <path d="M96 176C160 110 320 110 384 176" fill="none" stroke="#171717" strokeOpacity="0.2" strokeDasharray="3 5" />
        <path id="market-route" d={ROUTE} fill="none" stroke="url(#market-route-stroke)" strokeWidth="1.75" />
        {NODES.map((node) => (
          <g key={node.code}>
            <circle cx={node.x} cy={node.y} r="34" fill="#0052ff" fillOpacity="0.08" />
            <circle cx={node.x} cy={node.y} r="21" fill="#fff" stroke="#171717" strokeWidth="1.5" />
            <text
              x={node.x}
              y={node.y + 4.5}
              textAnchor="middle"
              fontSize="13"
              letterSpacing="1"
              fill="#171717"
              fontFamily="inherit"
            >
              {node.code}
            </text>
          </g>
        ))}
        <g className="motion-reduce:hidden">
          <circle r="5" fill="#0052ff">
            <animateMotion dur="3.6s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1" keyTimes="0;1" keySplines="0.65 0 0.35 1">
              <mpath href="#market-route" />
            </animateMotion>
          </circle>
        </g>
      </svg>

      <span className="absolute top-4 left-4 rounded-card bg-ink px-3 py-2 text-[0.875rem] leading-none text-white sm:top-5 sm:left-5">
        {copy.tag}
      </span>
      <figcaption>
        {NODES.map((node, index) => (
          <span
            key={node.code}
            className="absolute bottom-3 -translate-x-1/2 text-[0.875rem] whitespace-nowrap sm:bottom-5 sm:text-p-sm"
            style={{ left: `${(node.x / W) * 100}%` }}
          >
            {labels[index]}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
