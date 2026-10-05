export type LeadKind = "founder" | "diagnostic";

/**
 * Punto único de envío de los formularios (aplicación de founders y
 * diagnóstico de empresas).
 *
 * TODO(backend): hoy solo simula el envío; los datos NO se guardan ni se
 * mandan a ningún lado (igual que en la versión anterior del sitio). Al
 * decidir el destino (correo con Resend, CRM, base de datos…), conviértelo en
 * una Server Action con validación en el servidor y conéctalo aquí: los
 * formularios ya llaman a esta función.
 */
export async function submitLead(
  kind: LeadKind,
  data: Record<string, FormDataEntryValue>,
): Promise<void> {
  void kind;
  void data;
  await new Promise((resolve) => setTimeout(resolve, 800));
}
