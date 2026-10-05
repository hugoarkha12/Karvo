"use client";

import type { Dictionary } from "@/i18n/dictionaries/es";
import { DialogHeader } from "./Dialog";
import { Field, type FieldConfig } from "./Field";
import { FormFooter, SuccessState, useLeadForm } from "./lead-form";

type Copy = Dictionary["forms"]["diagnostic"];

const FIELDS: FieldConfig<keyof Copy["fields"]>[] = [
  { name: "company", required: true, autoComplete: "organization", wide: true },
  { name: "contact", required: true, autoComplete: "name" },
  { name: "email", type: "email", required: true, autoComplete: "email" },
  { name: "industry", required: true, wide: true },
  { name: "challenge", as: "textarea", required: true, wide: true },
];

export function DiagnosticForm({
  copy,
  requiredHint,
  closeLabel,
  onDone,
}: {
  copy: Copy;
  requiredHint: string;
  closeLabel: string;
  onDone: () => void;
}) {
  const { status, onSubmit, reset } = useLeadForm("diagnostic");

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
        {FIELDS.map((field) => (
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
      />
    </form>
  );
}
