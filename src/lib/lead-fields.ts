import type { Dictionary } from "@/i18n/dictionaries/es";

// Campos de los formularios de contacto. Viven aquí (y no dentro de los
// componentes) porque los usan dos lados: el navegador para dibujar el
// formulario y el servidor (`leads.ts`) para validar lo que llega. Así un campo
// nuevo o un `required` se cambia en un solo lugar.

export type LeadKind = "founder" | "diagnostic";

/** Tabla de Supabase donde se guarda cada formulario (`supabase/migrations/`). */
export const LEAD_TABLES = {
  founder: "founder_applications",
  diagnostic: "diagnostic_requests",
} as const satisfies Record<LeadKind, string>;

export type FieldConfig<Name extends string = string> = {
  name: Name;
  as?: "input" | "textarea" | "select";
  type?: "text" | "email" | "url";
  required?: boolean;
  autoComplete?: string;
  /** Ocupa las dos columnas en pantallas medianas. */
  wide?: boolean;
};

type FounderField = keyof Dictionary["forms"]["founder"]["fields"];
type DiagnosticField = keyof Dictionary["forms"]["diagnostic"]["fields"];

// Orden y reglas de los 16 campos, agrupados igual que los títulos de
// `forms.founder.groups`.
export const FOUNDER_GROUPS: FieldConfig<FounderField>[][] = [
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

export const DIAGNOSTIC_FIELDS: FieldConfig<DiagnosticField>[] = [
  { name: "company", required: true, autoComplete: "organization", wide: true },
  { name: "contact", required: true, autoComplete: "name" },
  { name: "email", type: "email", required: true, autoComplete: "email" },
  { name: "industry", required: true, wide: true },
  { name: "challenge", as: "textarea", required: true, wide: true },
];

export const LEAD_FIELDS: Record<LeadKind, FieldConfig[]> = {
  founder: FOUNDER_GROUPS.flat(),
  diagnostic: DIAGNOSTIC_FIELDS,
};
