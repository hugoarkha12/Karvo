import type { Dictionary } from "@/i18n/dictionaries/es";

// Campos del formulario de socios. Viven aquí (y no dentro del componente)
// porque los usan dos lados: el navegador para dibujar el formulario y el
// servidor (`leads.ts`) para validar lo que llega. Así un campo nuevo o un
// `required` se cambia en un solo lugar.

type FormCopy = Dictionary["form"];
export type LeadField = keyof FormCopy["fields"];
/** Campos de lista cerrada: sus opciones viven en `form.options`. */
export type SelectField = keyof FormCopy["options"];

/** Tabla de Supabase donde se guarda cada solicitud (`supabase/migrations/`). */
export const LEAD_TABLE = "partner_requests";

/** Solicitud ya validada: nombre del campo → valor (o `null` si se dejó vacío). */
export type Lead = Record<string, string | null>;

/** Respuesta de `submitLead()`. El motivo decide qué error ve el visitante. */
export type LeadResult = { ok: true } | { ok: false; reason: "invalid" | "server" };

export type FieldConfig = {
  name: LeadField;
  as?: "input" | "textarea" | "select";
  type?: "text" | "email";
  required?: boolean;
  autoComplete?: string;
  /** Ocupa las dos columnas en pantallas medianas. */
  wide?: boolean;
};

export const LEAD_FIELDS: FieldConfig[] = [
  { name: "name", required: true, autoComplete: "name" },
  { name: "email", type: "email", required: true, autoComplete: "email" },
  { name: "company", required: true, autoComplete: "organization" },
  { name: "country", required: true, autoComplete: "country-name" },
  { name: "companyType", as: "select", required: true, wide: true },
  { name: "monthlyVolume", as: "select", required: true, wide: true },
  { name: "interest", as: "textarea", wide: true },
];

/** Casilla obligatoria de aceptación del aviso de privacidad. */
export const CONSENT_FIELD = "consent";

/**
 * Protección contra spam sin servicios externos:
 * - Honeypot: campo invisible para personas. Los bots que llenan todos los
 *   campos lo completan y se delatan.
 * - Tiempo mínimo: nadie llena el formulario en un segundo; un script sí.
 */
export const HONEYPOT_FIELD = "arkha_check";
export const ELAPSED_FIELD = "elapsed_ms";
export const MIN_FILL_MS = 1500;
