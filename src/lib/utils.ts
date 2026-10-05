import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// La escala tipográfica personalizada (globals.css → @theme) usa nombres que
// tailwind-merge no conoce. Sin registrarlos, `text-h2` y `text-ink` se
// tratarían como la misma utilidad y una de las dos se descartaría.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "display-xxl",
        "display",
        "h2",
        "h3",
        "h4",
        "p-xl",
        "p-lg",
        "p-md",
        "p-sm",
        "eyebrow",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
