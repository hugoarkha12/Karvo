"use client";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { DIAGNOSTIC_FIELDS } from "@/lib/lead-fields";
import { DialogHeader } from "./Dialog";
import { Field } from "./Field";
import { FormFooter, SuccessState, useLeadForm } from "./lead-form";

type Copy = Dictionary["forms"]["diagnostic"];

export function DiagnosticForm({
  locale,
  copy,
  requiredHint,
  errorMessage,
  closeLabel,
  onDone,
}: {
  locale: Locale;
  copy: Copy;
  requiredHint: string;
  errorMessage: string;
  closeLabel: string;
  onDone: () => void;
}) {
  const { status, onSubmit, reset } = useLeadForm("diagnostic", locale);

  if (status === "sent") {
    return (
      <>
        <DialogHeader eyebrow={copy.eyebrow} title={copy.title} />
        <SuccessState
          title={copy.successTitle}
          message={copy.successMessage}
          closeLabel={closeLabel}
          onClose={() => {
            onDone();
            reset();
          }}
        />
      </>
    );
  }

  return (
    <form onSubmit={onSubmit} aria-label={copy.title}>
      <DialogHeader eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />

      <div className="grid gap-x-5 gap-y-6 px-6 py-8 sm:grid-cols-2 sm:px-10 sm:py-10">
        {DIAGNOSTIC_FIELDS.map((field) => (
          <Field
            key={field.name}
            config={field}
            label={copy.fields[field.name].label}
            placeholder={copy.fields[field.name].placeholder}
            requiredHint={requiredHint}
          />
        ))}
      </div>

      <FormFooter
        note={copy.confidentiality}
        submitLabel={copy.submit}
        submittingLabel={copy.submitting}
        submitting={status === "submitting"}
        error={status === "error" ? errorMessage : undefined}
      />
    </form>
  );
}
