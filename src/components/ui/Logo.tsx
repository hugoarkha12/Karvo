import { cn } from "@/lib/utils";

// Logos de Arkha vectorizados a partir de los archivos de marca (PNG). Usan
// `currentColor`, así el mismo SVG sirve sobre fondo claro, oscuro o azul.

/** Símbolo: una "Λ" de patas rectas con el vértice exterior redondeado. */
export const ARKHA_SYMBOL_PATH =
  "M0 92.8 45.53 2.75A5 5 0 0 1 54.47 2.75L100 92.8H80.08L50 28.53 19.92 92.8Z";

export function ArkhaSymbol({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 92.8" fill="currentColor" className={className} aria-hidden focusable={false}>
      <path d={ARKHA_SYMBOL_PATH} />
    </svg>
  );
}

/** Trazos del wordmark (viewBox 0 0 1258 186). */
export const ARKHA_WORDMARK_PATHS = {
  /** Contornos con hueco (las dos A y el ojo de la R): van con `evenodd`. */
  outlined:
    "M0 186 98.5 0h20L217 186h-27l-25.42-48H52.42L27 186Zm108.5-153.9L153.46 117H63.54ZM1041 186 1139.5 0h20L1258 186h-27l-25.42-48h-112.16L1068 186Zm108.5-153.9 44.96 84.9h-89.92ZM302 0h95a58 58 0 0 1 0 116h-95Zm25 22v72h70a36 36 0 0 0 0-72Z",
  /** Astas, brazos y piernas. */
  solid:
    "M302 0h25v186h-25ZM362.2 100h31L466 186h-32ZM555 0h25v186h-25ZM680.5 0h34L567 141.8v-32.7ZM591.9 85.2 609.2 68.5 719.8 186h-33ZM807 0h25v186h-25ZM940 0h25v186h-25ZM807 86h158v23H807Z",
};

/** Wordmark A R K H A, con el espaciado amplio del original. */
export function ArkhaWordmark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1258 186" fill="currentColor" className={className} aria-hidden focusable={false}>
      <path fillRule="evenodd" d={ARKHA_WORDMARK_PATHS.outlined} />
      <path d={ARKHA_WORDMARK_PATHS.solid} />
    </svg>
  );
}

export function ArkhaLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-[0.6em]", className)}>
      <ArkhaSymbol className="h-[1.15em] w-auto" />
      <ArkhaWordmark className="h-[0.62em] w-auto" />
    </span>
  );
}
