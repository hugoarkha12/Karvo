import "server-only";
import type { Locale } from "@/i18n/config";
import { LEAD_TABLE, type Lead } from "./lead-fields";
import { LEAD_TITLE, LONG_FIELD, leadEntries } from "./lead-summary";

// Límite de Discord por valor de campo en un embed.
const FIELD_LIMIT = 1024;

function truncate(value: string | null, max = FIELD_LIMIT) {
  // Discord rechaza el mensaje entero si un campo va vacío.
  if (!value) return "—";
  return value.length > max ? `${value.slice(0, max - 1)}…` : value;
}

/**
 * Publica un aviso en el canal del equipo con un webhook de Discord. La URL
 * del webhook es secreta (quien la tenga puede escribir en el canal), por eso
 * solo se usa desde el servidor. Discord solo sirve para enterarse al
 * instante: el registro completo vive en Supabase.
 */
export async function notifyDiscord(locale: Locale, lead: Lead) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("[leads] Falta DISCORD_WEBHOOK_URL: la solicitud se guardó, pero no se avisó en Discord.");
    return;
  }

  const entries = leadEntries(lead);
  const short = entries.filter((entry) => entry.name !== LONG_FIELD);
  const long = entries.find((entry) => entry.name === LONG_FIELD);

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      // El texto lo escriben desconocidos: que nunca pueda mencionar a
      // @everyone, a roles ni a personas del servidor.
      allowed_mentions: { parse: [] },
      embeds: [
        {
          title: LEAD_TITLE,
          color: 0x0052ff,
          fields: [
            ...short.map((entry) => ({ name: entry.label, value: truncate(entry.value), inline: true })),
            { name: "Idioma", value: locale.toUpperCase(), inline: true },
            ...(long ? [{ name: long.label, value: truncate(long.value) }] : []),
          ],
          footer: { text: `Registro completo en Supabase → ${LEAD_TABLE}` },
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
