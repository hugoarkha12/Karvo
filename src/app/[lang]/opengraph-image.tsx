import { ImageResponse } from "next/og";
import { locales } from "@/i18n/config";
import { es } from "@/i18n/dictionaries/es";
import { en } from "@/i18n/dictionaries/en";
import { ARKHA_SYMBOL_PATH, ARKHA_WORDMARK_PATHS } from "@/components/ui/Logo";

// Imagen que muestran WhatsApp, LinkedIn, X, etc. al compartir el enlace. Se
// genera en el build (una por idioma) a partir del logo y del titular del hero.

export const alt = "Arkha";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Una imagen por idioma, generada en el build (sin esto se generaría en cada petición).
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { hero } = lang === "en" ? en : es;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#171717",
        color: "#ffffff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <svg width="78" height="72" viewBox="0 0 100 92.8" fill="#ffffff">
          <path d={ARKHA_SYMBOL_PATH} />
        </svg>
        <svg width="232" height="34" viewBox="0 0 1258 186" fill="#ffffff">
          <path fillRule="evenodd" d={ARKHA_WORDMARK_PATHS.outlined} />
          <path d={ARKHA_WORDMARK_PATHS.solid} />
        </svg>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 84, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
        <span>{hero.line1}</span>
        <span style={{ color: "rgba(255,255,255,0.6)" }}>{hero.line2}</span>
      </div>
      <div style={{ display: "flex", fontSize: 24, letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)" }}>
        {hero.eyebrow.toUpperCase()}
      </div>
    </div>,
    size,
  );
}
