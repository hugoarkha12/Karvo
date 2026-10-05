import { cn } from "@/lib/utils";

/** Etiqueta en mayúsculas espaciadas que precede a los titulares. */
export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      data-anim="fade"
      className={cn("mb-6 text-eyebrow uppercase text-ink-soft", className)}
    >
      {children}
    </p>
  );
}
