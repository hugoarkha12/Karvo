import { cn } from "@/lib/utils";

/** Símbolo de Karvo: tres píldoras verticales, la central más alta. */
export function KarvoSymbol({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 40" fill="currentColor" className={className} aria-hidden focusable={false}>
      <rect x="1" y="10" width="6" height="20" rx="3" />
      <rect x="13" y="2" width="6" height="36" rx="3" />
      <rect x="25" y="10" width="6" height="20" rx="3" />
    </svg>
  );
}

/** Wordmark K Λ R V O dibujado con trazos. */
export function KarvoWordmark({ className }: { className?: string }) {
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
      <path d="M6 4V28M6 16.5L19 4M10 12.5L20 28" />
      <path d="M32 28L44.5 4L57 28" />
      <path d="M71 4V28M71 4H82.5C86.5 4 89.5 7 89.5 11C89.5 15 86.5 17.5 82.5 17.5H71M82 17.5L90.5 28" />
      <path d="M104.5 4L117 28L129.5 4" />
      <circle cx="147" cy="16" r="11.5" />
    </svg>
  );
}

export function KarvoLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <KarvoSymbol className="h-[1.6em] w-auto" />
      <KarvoWordmark className="h-[0.95em] w-auto" />
    </span>
  );
}
