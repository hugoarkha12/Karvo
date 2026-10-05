import { cn } from "@/lib/utils";

export type GlyphKind = "studio" | "ventures" | "ai";

const bar = "origin-center animate-glyph-bar [transform-box:fill-box]";

/**
 * Animaciones pequeñas de las tarjetas del hero (High Alpha usa Lottie en ese
 * lugar). Son SVG + CSS: no cargan JavaScript.
 */
export function CardGlyph({ kind, className }: { kind: GlyphKind; className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="currentColor" className={cn(className)} aria-hidden focusable={false}>
      {kind === "studio" && (
        <>
          <rect className={bar} x="14" y="24" width="12" height="32" rx="6" />
          <rect className={bar} style={{ animationDelay: "-0.8s" }} x="34" y="8" width="12" height="64" rx="6" />
          <rect className={bar} style={{ animationDelay: "-1.6s" }} x="54" y="24" width="12" height="32" rx="6" />
        </>
      )}

      {kind === "ventures" && (
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="30" cy="40" r="20" />
          <circle className="animate-glyph-orbit" cx="46" cy="40" r="20" />
        </g>
      )}

      {kind === "ai" &&
        [0, 1, 2].flatMap((row) =>
          [0, 1, 2].map((col) => (
            <circle
              key={`${row}-${col}`}
              className="animate-glyph-dot"
              style={{ animationDelay: `${(row + col) * 0.25}s` }}
              cx={16 + col * 24}
              cy={16 + row * 24}
              r="5"
            />
          )),
        )}
    </svg>
  );
}
