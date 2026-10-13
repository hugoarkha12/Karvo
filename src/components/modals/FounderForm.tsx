"use client";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { FOUNDER_GROUPS } from "@/lib/lead-fields";
import { DialogHeader } from "./Dialog";
import { Field } from "./Field";
import { FormFooter, SuccessState, useLeadForm } from "./lead-form";

type Copy = Dictionary["forms"]["founder"];

export function FounderForm({
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
  const { status, onSubmit, reset } = useLeadForm("founder", locale);

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

      <div className="flex flex-col gap-10 px-6 py-8 sm:px-10 sm:py-10">
        {FOUNDER_GROUPS.map((fields, index) => (
          <fieldset key={copy.groups[index]} className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
            <legend className="mb-6 flex items-baseline gap-3 text-p-md">
              <span className="text-ink-muted tabular-nums">0{index + 1}</span>
              {copy.groups[index]}
            </legend>
            {fields.map((field) => (
              <Field
                key={field.name}
                config={field}
                label={copy.fields[field.name].label}
                placeholder={copy.fields[field.name].placeholder}
                options={field.name === "stage" ? copy.stageOptions : undefined}
                requiredHint={requiredHint}
              />
            ))}
          </fieldset>
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
