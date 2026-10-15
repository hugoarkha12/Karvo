"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { submitLead } from "@/lib/leads";
import {
  CONSENT_FIELD,
  ELAPSED_FIELD,
  HONEYPOT_FIELD,
  LEAD_FIELDS,
  type LeadResult,
  type SelectField,
} from "@/lib/lead-fields";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { Field } from "./Field";

/** `invalid` y `server` son los motivos de error que devuelve `submitLead()`. */
type Status = "idle" | "submitting" | "sent" | "invalid" | "server";

/**
 * Formulario "Conviértete en socio inicial". Envía con la Server Action
 * `submitLead()` y solo muestra el mensaje de éxito cuando el servidor confirma
 * que guardó la solicitud. Si algo falla, lo escrito se conserva.
 */
export function PartnerForm({
  locale,
  copy,
  privacyHref,
  newTabLabel,
}: {
  locale: Locale;
  copy: Dictionary["form"];
  privacyHref: string;
  newTabLabel: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const mountedAt = useRef(0);
  const successHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  // El botón de envío desaparece con el éxito: el foco pasa al mensaje para
  // que teclado y lectores de pantalla no se pierdan.
  useEffect(() => {
    if (status === "sent") successHeading.current?.focus();
  }, [status]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set(ELAPSED_FIELD, String(Date.now() - mountedAt.current));
    setStatus("submitting");
    // Un fallo de red rechaza la promesa; se trata igual que un error del servidor.
    const result = await submitLead(locale, data).catch((): LeadResult => ({ ok: false, reason: "server" }));
    if (!result.ok) {
      // Sin `form.reset()`: quien llenó el formulario puede reintentar tal cual.
      setStatus(result.reason);
      return;
    }
    form.reset();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-6 px-6 py-12 sm:px-10 sm:py-16">
        <span className="grid size-14 place-items-center rounded-full bg-accent text-white">
          <CheckIcon className="size-7" />
        </span>
        <div>
          <h3 ref={successHeading} tabIndex={-1} className="text-h4 outline-hidden">
            {copy.successTitle}
          </h3>
          <p className="mt-3 max-w-md text-p-md text-ink-soft">{copy.successMessage}</p>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";
  const error = status === "invalid" || status === "server" ? copy.errors[status] : undefined;

  return (
    <form onSubmit={onSubmit} aria-labelledby="partner-form-title" className="relative">
      <header className="border-b border-line px-6 pt-7 pb-6 sm:px-10 sm:pt-10 sm:pb-8">
        <h3 id="partner-form-title" className="text-h3">
          {copy.title}
        </h3>
        <p className="mt-3 text-p-sm text-ink-soft">{copy.subtitle}</p>
      </header>

      <div className="grid gap-x-5 gap-y-6 px-6 py-8 sm:grid-cols-2 sm:px-10 sm:py-10">
        {LEAD_FIELDS.map((field) => (
          <Field
            key={field.name}
            config={field}
            label={copy.fields[field.name].label}
            placeholder={field.as === "select" ? copy.selectPlaceholder : copy.fields[field.name].placeholder}
            options={field.as === "select" ? copy.options[field.name as SelectField] : undefined}
            requiredHint={copy.requiredHint}
          />
        ))}

        <label className="flex items-start gap-3 text-p-sm text-ink-soft sm:col-span-2">
          <input
            type="checkbox"
            name={CONSENT_FIELD}
            required
            className="mt-0.5 size-5 shrink-0 accent-accent"
          />
          <span>
            {copy.consent.before}
            <a
              href={privacyHref}
              target="_blank"
              rel="noopener"
              className="text-ink underline underline-offset-[0.2em] transition-colors hover:text-accent"
            >
              {copy.consent.link}
              <span className="sr-only"> {newTabLabel}</span>
            </a>
            {copy.consent.after}
            <span className="text-accent" title={copy.requiredHint}>
              {" "}*<span className="sr-only"> ({copy.requiredHint})</span>
            </span>
          </span>
        </label>

        {/* Honeypot: fuera de la pantalla y del orden de tabulación. Una persona
            nunca lo llena; un bot que completa todos los campos, sí. */}
        <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden">
          <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>
      </div>

      <div className="border-t border-line px-6 py-6 sm:px-10">
        {/* Siempre montado: los lectores de pantalla anuncian el texto al aparecer. */}
        <p role="alert" className="mb-4 text-p-sm text-danger empty:hidden">
          {error}
        </p>
        <div className="flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.9375rem] text-ink-muted">{copy.sensitiveNote}</p>
          <Button type="submit" variant="accent" arrow={!submitting} disabled={submitting}>
            {submitting ? copy.submitting : copy.submit}
          </Button>
        </div>
      </div>
    </form>
  );
}
