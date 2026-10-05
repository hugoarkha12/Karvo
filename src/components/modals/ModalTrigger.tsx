"use client";

import { Button, type ButtonVariant } from "@/components/ui/Button";
import { useOpenModal, type ModalName } from "./ModalProvider";

/**
 * Botón que abre un modal. Es el único pedazo interactivo que necesitan las
 * secciones (que son Server Components) para lanzar un formulario.
 */
export function ModalTrigger({
  modal,
  variant,
  size,
  arrow = true,
  unstyled = false,
  className,
  children,
}: {
  modal: ModalName;
  variant?: ButtonVariant;
  size?: "md" | "sm";
  arrow?: boolean;
  /** Sin estilos de botón (p. ej. para usarlo como enlace del footer). */
  unstyled?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const open = useOpenModal();

  if (unstyled) {
    return (
      <button type="button" aria-haspopup="dialog" className={className} onClick={() => open(modal)}>
        {children}
      </button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      arrow={arrow}
      className={className}
      aria-haspopup="dialog"
      onClick={() => open(modal)}
    >
      {children}
    </Button>
  );
}
