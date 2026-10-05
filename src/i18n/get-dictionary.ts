import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "./config";

// Cada diccionario se carga bajo demanda y solo en el servidor: el texto del
// idioma que no se está viendo nunca llega al navegador.
const dictionaries = {
  es: () => import("./dictionaries/es").then((m) => m.es),
  en: () => import("./dictionaries/en").then((m) => m.en),
};

/** Idioma de la ruta actual (`/es`, `/en`), leído del segmento raíz `[lang]`. */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!hasLocale(value)) notFound();
  return value;
}

export async function getDictionary() {
  return dictionaries[await getLocale()]();
}
