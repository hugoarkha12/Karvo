import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Encabezado estándar de sección: eyebrow + titular a la izquierda y texto de
 * apoyo a la derecha (en móvil, uno debajo del otro).
 */
export function SectionHeader({
  eyebrow,
  headline,
  tone = "light",
  aside,
  className,
}: {
  eyebrow: string;
  headline: string;
  tone?: "light" | "dark";
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-8 lg:grid-cols-12 lg:gap-12", className)}>
      <div className="lg:col-span-6">
        <Eyebrow className={tone === "dark" ? "text-on-dark-soft" : undefined}>{eyebrow}</Eyebrow>
        <h2 data-anim="title" className="text-h2 text-balance">
          {headline}
        </h2>
      </div>
      {aside && (
        <div className="flex flex-col gap-5 lg:col-span-5 lg:col-start-8 lg:pt-12">{aside}</div>
      )}
    </div>
  );
}
