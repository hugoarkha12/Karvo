"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { submitLead } from "@/lib/leads";
import type { LeadKind } from "@/lib/lead-fields";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";

type Status = "idle" | "submitting" | "sent" | "error";

/** Estado compartido de los formularios de contacto. */
export function useLeadForm(kind: LeadKind, locale: Locale) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    // Un fallo de red rechaza la promesa; se trata igual que un error del servidor.
    const { ok } = await submitLead(kind, locale, new FormData(form)).catch(() => ({ ok: false }));
    if (!ok) {
      // Sin `form.reset()`: quien llenó el formulario puede reintentar tal cual.
      setStatus("error");
      return;
    }
    form.reset();
    setStatus("sent");
  }

  return { status, onSubmit, reset: () => setStatus("idle") };
}

export function SuccessState({
  title,
  message,
  closeLabel,
  onClose,
}: {
  title: string;
  message: string;
  closeLabel: string;
  onClose: () => void;
}) {
  return (
    <div role="status" className="flex flex-col items-start gap-6 px-6 py-12 sm:px-10 sm:py-16">
      <span className="grid size-14 place-items-center rounded-full bg-accent text-white">
        <CheckIcon className="size-7" />
      </span>
      <div>
        <h3 className="text-h4">{title}</h3>
        <p className="mt-3 max-w-md text-p-sm text-ink-soft">{message}</p>
      </div>
      <Button variant="dark" onClick={onClose}>
        {closeLabel}
      </Button>
    </div>
  );
}

export function FormFooter({
  note,
  submitLabel,
  submittingLabel,
  submitting,
  error,
}: {
  note: string;
  submitLabel: string;
  submittingLabel: string;
  submitting: boolean;
  /** Mensaje si el último envío falló. */
  error?: string;
}) {
  return (
    <div className="border-t border-line px-6 py-6 sm:px-10">
      {/* Siempre montado: los lectores de pantalla anuncian el texto al aparecer. */}
      <p role="alert" className="text-p-sm text-danger empty:hidden mb-4">
        {error}
      </p>
      <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.9375rem] text-ink-muted">{note}</p>
        <Button type="submit" variant="accent" arrow={!submitting} disabled={submitting}>
          {submitting ? submittingLabel : submitLabel}
        </Button>
      </div>
    </div>
  );
}
