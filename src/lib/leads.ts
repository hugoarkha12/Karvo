"use server";

import { after } from "next/server";
import { hasLocale, type Locale } from "@/i18n/config";
import { es } from "@/i18n/dictionaries/es";
import { en } from "@/i18n/dictionaries/en";
import {
  CONSENT_FIELD,
  ELAPSED_FIELD,
  HONEYPOT_FIELD,
  LEAD_FIELDS,
  LEAD_TABLE,
  MIN_FILL_MS,
  type FieldConfig,
  type Lead,
  type LeadResult,
  type SelectField,
} from "./lead-fields";
import { getSupabaseAdmin } from "./supabase";
import { notifyDiscord } from "./discord";
import { notifyEmail } from "./email";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Punto único de envío del formulario de socios. Es una Server Action: aunque
 * la llame un componente cliente, corre en el servidor, así que las llaves de
 * Supabase, Discord y correo nunca llegan al navegador.
 *
 * 1. Descarta en silencio los envíos que parecen spam (honeypot y tiempo).
 * 2. Valida los campos con las mismas reglas que dibujan el formulario
 *    (`lead-fields.ts`).
 * 3. Guarda el registro en Supabase. Si falla, quien llenó el formulario ve
 *    un error y puede reintentar sin perder lo que escribió.
 * 4. Avisa al equipo (Discord y correo) después de responder (`after`): los
 *    avisos no hacen esperar a nadie y, si fallan, el registro ya quedó guardado.
 */
export async function submitLead(locale: Locale, formData: FormData): Promise<LeadResult> {
  // Una Server Action es un endpoint público: cualquiera puede llamarla con
  // otros datos, así que se revisa todo lo que llega, incluso los tipos.
  if (typeof locale !== "string" || !hasLocale(locale)) return { ok: false, reason: "invalid" };

  // Al bot se le responde "ok" para no darle pistas de qué lo delató.
  if (looksLikeSpam(formData)) return { ok: true };

  const lead = parseLead(formData);
  if (!lead) return { ok: false, reason: "invalid" };

  try {
    const { error } = await getSupabaseAdmin().from(LEAD_TABLE).insert(toRow(locale, lead));
    if (error) throw error;
  } catch (error) {
    console.error("[leads] No se pudo guardar la solicitud:", error);
    return { ok: false, reason: "server" };
  }

  after(async () => {
    const results = await Promise.allSettled([notifyDiscord(locale, lead), notifyEmail(locale, lead)]);
    for (const [index, result] of results.entries()) {
      if (result.status === "rejected") {
        console.error(`[leads] Falló el aviso por ${index === 0 ? "Discord" : "correo"}:`, result.reason);
      }
    }
  });

  return { ok: true };
}

function looksLikeSpam(formData: FormData) {
  const honeypot = formData.get(HONEYPOT_FIELD);
  if (typeof honeypot === "string" && honeypot.trim() !== "") return true;
  const elapsed = Number(formData.get(ELAPSED_FIELD));
  return !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS;
}

/** Lee solo los campos conocidos; devuelve `null` si alguno no es válido. */
function parseLead(formData: FormData): Lead | null {
  // Sin aceptar el aviso de privacidad no se guarda nada.
  if (formData.get(CONSENT_FIELD) !== "on") return null;

  const lead: Lead = {};
  for (const field of LEAD_FIELDS) {
    const raw = formData.get(field.name);
    const value = typeof raw === "string" ? raw.trim() : "";
    if (!value) {
      if (field.required) return null;
      lead[field.name] = null;
      continue;
    }
    const clean = sanitize(field, value);
    if (clean === null) return null;
    lead[field.name] = clean;
  }
  return lead;
}

function sanitize(field: FieldConfig, value: string): string | null {
  // Límites amplios para texto libre: frenan basura sin cortar respuestas reales.
  if (value.length > (field.as === "textarea" ? 5000 : 300)) return null;
  if (field.as === "select") return toSpanishOption(field.name as SelectField, value);
  if (field.type === "email") return EMAIL_PATTERN.test(value) ? value : null;
  return value;
}

/**
 * Las opciones llegan en el idioma del formulario. Se guardan siempre en
 * español (la fuente de verdad) para poder filtrar sin importar en qué idioma
 * se llenó. Un valor que no está en la lista se rechaza.
 */
function toSpanishOption(field: SelectField, value: string): string | null {
  for (const dictionary of [es, en]) {
    const index = dictionary.form.options[field].indexOf(value);
    if (index !== -1) return es.form.options[field][index] ?? null;
  }
  return null;
}

/** Los campos se llaman en camelCase (`monthlyVolume`); las columnas, en snake_case. */
function toRow(locale: Locale, lead: Lead) {
  const row: Record<string, string | boolean | null> = { locale, privacy_consent: true };
  for (const [name, value] of Object.entries(lead)) {
    row[name.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)] = value;
  }
  return row;
}
