import "server-only";
import { es } from "@/i18n/dictionaries/es";
import { LEAD_FIELDS, type Lead } from "./lead-fields";

// Resumen común de los avisos (Discord y correo). Las etiquetas salen del
// diccionario en español, así coinciden con lo que ve quien llena el formulario.

export const LEAD_TITLE = "Nueva solicitud de socio — Arkha";

/** Campo de texto libre: va aparte porque puede ser largo. */
export const LONG_FIELD = "interest";

/** Campos en el orden del formulario, con su etiqueta. */
export function leadEntries(lead: Lead) {
  return LEAD_FIELDS.map(({ name }) => ({
    name,
    label: es.form.fields[name].label,
    value: lead[name] ?? null,
  }));
}
