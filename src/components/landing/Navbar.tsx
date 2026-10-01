"use client";

import React from "react";
import { Translations, Language } from "@/lib/translations";
import KarvoLogo from "@/components/ui/KarvoLogo";

interface NavbarProps {
  t: Translations;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenFounderModal: () => void;
  geoInfo?: {
    country?: string;
    city?: string;
  };
}

export default function Navbar({
  lang,
  onLanguageChange,
  onOpenFounderModal,
  geoInfo,
}: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 pt-4 px-4 sm:px-8 pointer-events-none transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Logo - Clean, Transparent, No Background Capsule */}
        <div className="flex items-center py-1">
          <KarvoLogo size="sm" showWordmark={true} showSubtitle={true} subtitleText="VENTURE STUDIO" isLink={true} />
        </div>

        {/* Right Action: Language Switcher & Quick CTA */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div
            className="flex items-center rounded-full bg-white/90 p-0.5 border border-neutral-200/90 backdrop-blur-xl shadow-xs font-mono text-[11px]"
            title={geoInfo?.country ? `IP: ${geoInfo.country}` : "Idioma"}
          >
            <button
              type="button"
              onClick={() => onLanguageChange("es")}
              className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                lang === "es"
                  ? "bg-neutral-950 text-white font-bold"
                  : "text-neutral-500 hover:text-neutral-950"
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange("en")}
              className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                lang === "en"
                  ? "bg-neutral-950 text-white font-bold"
                  : "text-neutral-500 hover:text-neutral-950"
              }`}
            >
              EN
            </button>
          </div>

          {/* Quick Apply CTA */}
          <button
            onClick={onOpenFounderModal}
            className="inline-flex items-center gap-1 rounded-full bg-neutral-950 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-neutral-800 shadow-sm cursor-pointer transition-all"
          >
            <span>{lang === "es" ? "Construir" : "Build"}</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </header>
  );
}
