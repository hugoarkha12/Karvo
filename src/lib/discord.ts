import "server-only";
import type { Locale } from "@/i18n/config";
import { es } from "@/i18n/dictionaries/es";
import { LEAD_TABLES, type LeadKind } from "./lead-fields";

type Lead = Record<string, string | null>;

// Discord solo sirve para enterarse al instante: el mensaje lleva un resumen y
// el registro completo vive en Supabase. Los nombres de los campos salen del
// diccionario en español, así coinciden con lo que ve quien llena el formulario.
const SUMMARY: Record<LeadKind, { title: string; fields: string[]; long: string }> = {
  founder: {
    title: "Nueva aplicación de founder",
    fields: ["name", "company", "email", "stage", "revenue", "linkedin", "pitchDeck"],
    long: "whatBuilding",
  },
  diagnostic: {
    title: "Nueva solicitud de diagnóstico Karvo AI",
    fields: ["company", "contact", "email", "industry"],
    long: "challenge",
  },
};

// Límite de Discord por valor de campo en un embed.
const FIELD_LIMIT = 1024;

function label(kind: LeadKind, name: string) {
  const fields: Record<string, { label: string }> = es.forms[kind].fields;
  return fields[name]?.label ?? name;
}

function truncate(value: string | null | undefined, max = FIELD_LIMIT) {
  // Discord rechaza el mensaje entero si un campo va vacío.
  if (!value) return "—";
  return value.length > max ? `${value.slice(0, max - 1)}…` : value;
}

/**
 * Publica un aviso en el canal del equipo con un webhook de Discord. La URL
 * del webhook es secreta (quien la tenga puede escribir en el canal), por eso
 * solo se usa desde el servidor.
 */
export async function notifyDiscord(kind: LeadKind, locale: Locale, lead: Lead) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("[leads] Falta DISCORD_WEBHOOK_URL: el registro se guardó, pero no se avisó en Discord.");
    return;
  }

  const summary = SUMMARY[kind];
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      // El texto lo escriben desconocidos: que nunca pueda mencionar a
      // @everyone, a roles ni a personas del servidor.
      allowed_mentions: { parse: [] },
      embeds: [
        {
          title: summary.title,
          color: 0x0052ff,
          fields: [
            ...summary.fields.map((name) => ({
              name: label(kind, name),
              value: truncate(lead[name]),
              inline: true,
            })),
            { name: "Idioma", value: locale.toUpperCase(), inline: true },
            { name: label(kind, summary.long), value: truncate(lead[summary.long]) },
          ],
          footer: { text: `Registro completo en Supabase → ${LEAD_TABLES[kind]}` },
          timestamp: new Date().toISOString(),
        },
      ],
    }),
    signal: AbortSignal.timeout(5000),
  });

  if (!response.ok) {
    throw new Error(`Discord respondió ${response.status}: ${await response.text()}`);
  }
}
