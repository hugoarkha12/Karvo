import "server-only";
import { createClient } from "@supabase/supabase-js";
import type { LEAD_TABLE } from "./lead-fields";

type Value = string | boolean | null;

type LeadTable = {
  Row: Record<string, unknown>;
  Insert: Record<string, Value>;
  Update: Record<string, Value>;
  Relationships: [];
};

/**
 * Esquema mínimo para supabase-js: qué tablas existen y qué tipo de valores
 * aceptan. Las columnas concretas están en `supabase/migrations/`.
 */
type Database = {
  public: {
    Tables: Record<typeof LEAD_TABLE, LeadTable>;
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
};

let client: ReturnType<typeof createClient<Database>> | undefined;

/**
 * Cliente de Supabase con la llave secreta (`sb_secret_…`). Esa llave se salta
 * Row Level Security, por eso solo existe en el servidor: `server-only` rompe
 * el build si algún componente cliente llega a importar este archivo.
 *
 * La tabla tiene RLS activo y sin políticas (ver `supabase/migrations/`): con
 * la llave pública nadie puede leerla ni escribir en ella.
 */
export function getSupabaseAdmin() {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;
  if (!url || !secretKey) {
    throw new Error("Faltan SUPABASE_URL o SUPABASE_SECRET_KEY (ver .env.example).");
  }

  client = createClient<Database>(url, secretKey, {
    // Es un cliente de servidor: no hay sesión de usuario que guardar.
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}
