import { cn } from "@/lib/utils";

const variants = {
  soft: "bg-line/60 text-ink",
  white: "bg-surface text-ink",
  dark: "bg-ink text-white",
  accent: "bg-accent text-white",
  outline: "border border-ink/80 text-ink",
  "outline-light": "border border-white/50 text-white",
} as const;

export type TagVariant = keyof typeof variants;

/** Etiqueta pequeña con radio de 6px (estados, categorías, capacidades). */
export function Tag({
  variant = "soft",
  className,
  children,
}: {
  variant?: TagVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-card px-[0.75em] py-[0.375em] text-[0.9375rem] leading-none whitespace-nowrap",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
