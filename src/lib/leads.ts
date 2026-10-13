"use server";

import { after } from "next/server";
import { hasLocale, type Locale } from "@/i18n/config";
import { es } from "@/i18n/dictionaries/es";
import { en } from "@/i18n/dictionaries/en";
import { LEAD_FIELDS, LEAD_TABLES, type FieldConfig, type LeadKind } from "./lead-fields";
import { getSupabaseAdmin } from "./supabase";
import { notifyDiscord } from "./discord";

type Lead = Record<string, string | null>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Punto único de envío de los formularios (aplicación de founders y
 * diagnóstico de empresas). Es una Server Action: aunque la llame un
 * componente cliente, corre en el servidor, así que las llaves de Supabase y
 * la URL del webhook de Discord nunca llegan al navegador.
 *
 * 1. Valida los campos con las mismas reglas que dibujan el formulario
 *    (`lead-fields.ts`).
 * 2. Guarda el registro en Supabase. Si falla, quien llenó el formulario ve
 *    un error y puede reintentar sin perder lo que escribió.
 * 3. Avisa en Discord después de responder (`after`): la notificación no hace
 *    esperar a nadie y, si Discord falla, el registro ya quedó guardado.
 */
export async function submitLead(
  kind: LeadKind,
  locale: Locale,
  formData: FormData,
): Promise<{ ok: boolean }> {
  // Una Server Action es un endpoint público: cualquiera puede llamarla con
  // otros datos, así que se revisa todo lo que llega, incluso los tipos.
  if (!Object.hasOwn(LEAD_TABLES, kind) || !hasLocale(locale)) return { ok: false };

  const lead = parseLead(kind, formData);
  if (!lead) return { ok: false };

  try {
    const { error } = await getSupabaseAdmin().from(LEAD_TABLES[kind]).insert(toRow(locale, lead));
    if (error) throw error;
  } catch (error) {
    console.error(`[leads] No se pudo guardar el formulario "${kind}":`, error);
    return { ok: false };
  }

  after(async () => {
    try {
      await notifyDiscord(kind, locale, lead);
    } catch (error) {
      console.error(`[leads] No se pudo avisar en Discord del formulario "${kind}":`, error);
    }
  });

  return { ok: true };
}

/** Lee solo los campos conocidos; devuelve `null` si alguno no es válido. */
function parseLead(kind: LeadKind, formData: FormData): Lead | null {
  const lead: Lead = {};
  for (const field of LEAD_FIELDS[kind]) {
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
  if (value.length > (field.as === "textarea" ? 5000 : 500)) return null;
  if (field.name === "stage") return toSpanishStage(value);
  if (field.type === "email") return EMAIL_PATTERN.test(value) ? value : null;
  if (field.type === "url") return isWebUrl(value) ? value : null;
  return value;
}

/**
 * La etapa llega en el idioma del formulario. Se guarda siempre en español
 * (la fuente de verdad) para poder filtrar por etapa sin importar en qué
 * idioma se aplicó.
 */
function toSpanishStage(value: string): string | null {
  for (const dictionary of [es, en]) {
    const index = dictionary.forms.founder.stageOptions.indexOf(value);
    if (index !== -1) return es.forms.founder.stageOptions[index] ?? null;
  }
  return null;
}

/**
 * `type="url"` del navegador también acepta `javascript:` y otros esquemas.
 * Aquí solo pasan enlaces web, porque el equipo los abre desde Discord.
 */
function isWebUrl(value: string) {
  try {
    const { protocol } = new URL(value);
    return protocol === "https:" || protocol === "http:";
  } catch {
    return false;
  }
}

/** Los campos se llaman en camelCase (`pitchDeck`); las columnas, en snake_case. */
function toRow(locale: Locale, lead: Lead) {
  const row: Lead = { locale };
  for (const [name, value] of Object.entries(lead)) {
    row[name.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)] = value;
  }
  return row;
}
