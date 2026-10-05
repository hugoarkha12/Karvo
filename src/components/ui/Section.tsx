import { cn } from "@/lib/utils";
import { Container } from "./Container";

const tones = {
  canvas: "bg-canvas text-ink",
  dark: "bg-ink text-white",
} as const;

export function Section({
  id,
  tone = "canvas",
  className,
  containerClassName,
  children,
  ...rest
}: {
  id?: string;
  tone?: keyof typeof tones;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<"section">, "className" | "children">) {
  return (
    <section
      id={id}
      className={cn("px-gutter py-section", tones[tone], className)}
      {...rest}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
