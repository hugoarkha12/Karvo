import { cn } from "@/lib/utils";
import { ArrowIcon } from "./Icons";

const variants = {
  accent: "bg-accent text-white hover:bg-accent-strong",
  dark: "bg-ink text-white hover:bg-black",
  light: "bg-surface text-ink hover:bg-canvas",
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
  "outline-light": "border border-white/60 text-white hover:bg-white hover:text-ink",
} as const;

const sizes = {
  md: "min-h-12 gap-[1.1em] px-[1.2em] py-[0.6em] text-p-md",
  sm: "min-h-10 gap-[0.9em] px-[1.05em] py-[0.5em] text-[1rem]",
} as const;

export type ButtonVariant = keyof typeof variants;

type OwnProps = {
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
  /** Muestra la flecha animada al final. */
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type AsLink = OwnProps &
  Omit<React.ComponentPropsWithoutRef<"a">, keyof OwnProps> & { href: string };
type AsButton = OwnProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof OwnProps> & { href?: undefined };

export function buttonClasses({
  variant = "accent",
  size = "md",
  className,
}: Pick<OwnProps, "variant" | "size" | "className">) {
  return cn(
    "group/btn inline-flex shrink-0 items-center justify-center rounded-full leading-[1.1] whitespace-nowrap transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50",
    sizes[size],
    variants[variant],
    className,
  );
}

/**
 * Botón píldora del sistema. Con `href` se renderiza como enlace; sin él,
 * como `<button>`. La flecha sale por la derecha y entra una nueva desde la
 * izquierda al hacer hover.
 */
export function Button(props: AsLink | AsButton) {
  const { variant, size, arrow, className, children, ...rest } = props;
  const classes = buttonClasses({ variant, size, className });

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="relative inline-block size-[1.15em] shrink-0 overflow-hidden" aria-hidden>
          <ArrowIcon className="absolute inset-0 size-full transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-[130%]" />
          <ArrowIcon className="absolute inset-0 size-full -translate-x-[130%] transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-0" />
        </span>
      )}
    </>
  );

  if (rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as React.ComponentPropsWithoutRef<"a">)}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as React.ComponentPropsWithoutRef<"button">)}
    >
      {content}
    </button>
  );
}
