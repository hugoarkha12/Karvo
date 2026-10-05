"use client";

import type { Dictionary } from "@/i18n/dictionaries/es";
import { DialogHeader } from "./Dialog";
import { Field, type FieldConfig } from "./Field";
import { FormFooter, SuccessState, useLeadForm } from "./lead-form";

type Copy = Dictionary["forms"]["founder"];
type FieldName = keyof Copy["fields"];

// Orden y reglas de los 16 campos, agrupados igual que los títulos de
// `copy.groups`.
const GROUPS: FieldConfig<FieldName>[][] = [
  [
    { name: "name", required: true, autoComplete: "name" },
    { name: "email", type: "email", required: true, autoComplete: "email" },
    { name: "linkedin", type: "url", required: true },
    { name: "company", required: true, autoComplete: "organization" },
    { name: "website", type: "url", wide: true },
  ],
  [
    { name: "whatBuilding", as: "textarea", required: true, wide: true },
    { name: "problemSolving", as: "textarea", required: true, wide: true },
    { name: "whoCustomer", required: true, wide: true },
  ],
  [
    { name: "stage", as: "select", required: true },
    { name: "revenue", required: true },
    { name: "traction", as: "textarea", required: true, wide: true },
    { name: "team", required: true, wide: true },
  ],
  [
    { name: "capitalRaised" },
    { name: "capitalSought" },
    { name: "whyKarvo", as: "textarea", required: true, wide: true },
    { name: "pitchDeck", type: "url", required: true, wide: true },
  ],
];

export function FounderForm({
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
  const { status, onSubmit, reset } = useLeadForm("founder");

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
        {GROUPS.map((fields, index) => (
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
      />
    </form>
  );
}
