import { cn } from "@/lib/utils";

/** Símbolo de Arkha: tres píldoras verticales, la central más alta. */
export function ArkhaSymbol({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 40" fill="currentColor" className={className} aria-hidden focusable={false}>
      <rect x="1" y="10" width="6" height="20" rx="3" />
      <rect x="13" y="2" width="6" height="36" rx="3" />
      <rect x="25" y="10" width="6" height="20" rx="3" />
    </svg>
  );
}

/** Wordmark A R K H A dibujado con trazos. */
export function ArkhaWordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      focusable={false}
    >
      <path d="M6 28L18.5 4L31 28M11 19H26" />
      <path d="M45 4V28M45 4H56.5C60.5 4 63.5 7 63.5 11C63.5 15 60.5 17.5 56.5 17.5H45M56 17.5L64.5 28" />
      <path d="M78 4V28M78 16.5L91 4M82 12.5L92 28" />
      <path d="M106 4V28M122 4V28M106 16H122" />
      <path d="M134 28L146 4L158 28M139 19H153" />
    </svg>
  );
}

export function ArkhaLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <ArkhaSymbol className="h-[1.6em] w-auto" />
      <ArkhaWordmark className="h-[0.95em] w-auto" />
    </span>
  );
}
