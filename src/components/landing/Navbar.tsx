"use client";

import React, { useState } from "react";
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
  t,
  lang,
  onLanguageChange,
  onOpenFounderModal,
  geoInfo,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t.nav.methodology, href: "#como-construimos", delay: "0.02s" },
    { label: t.nav.ia, href: "#ia", delay: "0.08s" },
    { label: t.nav.ventures, href: "#ventures", delay: "0.14s" },
    { label: t.nav.companies, href: "#empresas", delay: "0.2s" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-5 sm:px-10 pt-4 sm:pt-5">
      <nav className="max-w-7xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center">
        <div
          className="hidden lg:flex items-center gap-8 justify-self-start px-8 py-6 bg-black/[0.13] backdrop-blur-[18px]"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link animate-link-in"
              style={{ animationDelay: link.delay }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="justify-self-start lg:justify-self-center animate-link-in" style={{ animationDelay: "0.04s" }}>
          <KarvoLogo size="sm" showWordmark={true} showSubtitle={true} subtitleText="VENTURE STUDIO" isLink={true} />
        </div>

        <div className="flex items-center gap-2 justify-self-end">
          <div
            className="hidden sm:flex items-center bg-white/80 p-0.5 border border-neutral-200 backdrop-blur-xl text-[11px] font-semibold tracking-wide"
            title={geoInfo?.country ? `IP: ${geoInfo.country}` : "Idioma"}
          >
            <button
              type="button"
              onClick={() => onLanguageChange("es")}
              className={`px-2.5 py-1 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052FF] ${
                lang === "es"
                  ? "bg-neutral-950 text-white"
                  : "text-neutral-500 hover:text-neutral-950"
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange("en")}
              className={`px-2.5 py-1 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052FF] ${
                lang === "en"
                  ? "bg-neutral-950 text-white"
                  : "text-neutral-500 hover:text-neutral-950"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={onOpenFounderModal}
            className="btn-wipe btn-wipe--blue hidden sm:inline-flex items-center gap-[18px] h-[58px] pl-[22px] pr-[10px] py-3 bg-[#0052FF] text-white text-base font-medium tracking-[-0.015em] whitespace-nowrap animate-wipe-right focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052FF]"
            style={{ animationDelay: "0.16s" }}
          >
            <span>{lang === "es" ? "Construir" : "Build"}</span>
            <span className="inline-flex items-center justify-center w-9 h-9 bg-[#0043d6] text-white transition-colors">
              <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 10h10.2M10.4 5.6 15.2 10l-4.8 4.4" />
              </svg>
            </span>
          </button>

          <button
            type="button"
            className="lg:hidden inline-flex flex-col items-center justify-center gap-[5px] w-9 h-9 animate-link-in"
            style={{ animationDelay: "0.16s" }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="block w-[18px] h-[1.5px] bg-neutral-950" />
            <span className="block w-[18px] h-[1.5px] bg-neutral-950" />
            <span className="block w-[18px] h-[1.5px] bg-neutral-950" />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="lg:hidden max-w-7xl mx-auto flex-col gap-5 px-1 pt-5 pb-2 flex"
      >
        <div className="flex flex-col gap-3.5 px-5 py-4 bg-black/[0.13] backdrop-blur-[18px]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-[1.05rem] font-medium text-neutral-950"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => {
            closeMenu();
            onOpenFounderModal();
          }}
          className="btn-wipe btn-wipe--blue inline-flex items-center justify-center gap-3 h-[58px] bg-[#0052FF] text-white text-base font-medium"
        >
          <span>{lang === "es" ? "Construir" : "Build"}</span>
          <span>→</span>
        </button>
      </div>
    </header>
  );
}
