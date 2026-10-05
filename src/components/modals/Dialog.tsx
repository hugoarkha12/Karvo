"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { CloseIcon } from "@/components/ui/Icons";

/**
 * Envoltorio de `<dialog>` nativo. `showModal()` ya resuelve lo difícil:
 * atrapa el foco, vuelve inerte el resto de la página y cierra con Esc.
 * El contenido sigue montado mientras está cerrado, así un formulario a medio
 * llenar no se pierde si el visitante lo cierra sin querer.
 */
export function Dialog({
  open,
  onClose,
  closeLabel,
  size = "md",
  children,
}: {
  open: boolean;
  onClose: () => void;
  closeLabel: string;
  size?: "md" | "lg";
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const pressedBackdrop = useRef(false);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      // Cierra al hacer clic en el fondo, pero no si el clic empezó dentro del
      // panel (p. ej. al seleccionar texto de un campo arrastrando hacia afuera).
      onMouseDown={(event) => {
        pressedBackdrop.current = event.target === ref.current;
      }}
      onClick={(event) => {
        if (pressedBackdrop.current && event.target === ref.current) onClose();
      }}
      className={cn(
        "dialog-motion m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] overflow-visible bg-transparent p-0 text-ink backdrop:bg-ink/60 backdrop:backdrop-blur-[3px]",
        size === "lg" ? "max-w-[46rem]" : "max-w-[36rem]",
      )}
    >
      <div className="relative max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain rounded-card bg-surface">
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full bg-canvas text-ink transition-colors hover:bg-ink hover:text-white sm:top-6 sm:right-6"
        >
          <CloseIcon className="size-5" />
        </button>
        {children}
      </div>
    </dialog>
  );
}

/** Encabezado común de los modales. */
export function DialogHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="border-b border-line px-6 pt-7 pb-6 pr-16 sm:px-10 sm:pt-10 sm:pb-8 sm:pr-24">
      <p className="mb-4 text-eyebrow uppercase text-ink-soft">{eyebrow}</p>
      <h2 className="text-h3">{title}</h2>
      {subtitle && <p className="mt-3 text-p-sm text-ink-soft">{subtitle}</p>}
    </header>
  );
}
