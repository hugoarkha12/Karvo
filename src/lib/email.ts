import "server-only";
import type { Locale } from "@/i18n/config";
import { LEAD_TABLE, type Lead } from "./lead-fields";
import { LEAD_TITLE, leadEntries } from "./lead-summary";

/**
 * Envía el aviso de una solicitud nueva al correo designado por Arkha, con la
 * API de Resend (un `fetch`, sin dependencias). "Responder" en el cliente de
 * correo le escribe directo a quien llenó el formulario.
 *
 * Variables: `RESEND_API_KEY`, `LEADS_EMAIL_FROM` (remitente de un dominio
 * verificado en Resend) y `LEADS_EMAIL_TO` (uno o varios correos separados
 * por comas). Si falta alguna, la solicitud ya quedó guardada en Supabase y
 * solo se deja constancia en el log.
 */
export async function notifyEmail(locale: Locale, lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEADS_EMAIL_FROM;
  const to = process.env.LEADS_EMAIL_TO?.split(",").map((address) => address.trim()).filter(Boolean);
  if (!apiKey || !from || !to?.length) {
    console.warn("[leads] Faltan RESEND_API_KEY, LEADS_EMAIL_FROM o LEADS_EMAIL_TO: no se envió el aviso por correo.");
    return;
  }

  const lines = leadEntries(lead).map((entry) => `${entry.label}:\n${entry.value ?? "—"}`);
  const text = [
    LEAD_TITLE,
    "",
    ...lines.flatMap((line) => [line, ""]),
    `Idioma del formulario: ${locale.toUpperCase()}`,
    `Registro completo en Supabase → ${LEAD_TABLE}`,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      // Texto plano a propósito: lo escriben desconocidos y así no hay HTML
      // que escapar ni enlaces disfrazados.
      subject: `${LEAD_TITLE}: ${lead.company ?? ""}`.replace(/\s+/g, " ").slice(0, 200),
      text,
      reply_to: lead.email ?? undefined,
    }),
    signal: AbortSignal.timeout(5000),
  });

  if (!response.ok) {
    throw new Error(`Resend respondió ${response.status}: ${await response.text()}`);
  }
}
