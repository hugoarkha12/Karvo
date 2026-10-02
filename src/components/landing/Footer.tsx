"use client";

import React from "react";
import { Translations } from "@/lib/translations";
import KarvoLogo from "@/components/ui/KarvoLogo";

interface FooterProps {
  t: Translations;
  onOpenFounderModal: () => void;
  onOpenArkhaModal: () => void;
}

export default function Footer({
  t,
  onOpenFounderModal,
  onOpenArkhaModal,
}: FooterProps) {
  return (
    <footer className="w-full bg-white text-neutral-900 border-t border-neutral-200 pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-200">
          {/* Brand & Geographic Statement */}
          <div className="md:col-span-4">
            <div className="mb-3">
              <KarvoLogo size="md" showWordmark={true} showSubtitle={true} subtitleText="VENTURE STUDIO" />
            </div>
            <p className="text-sm text-neutral-600 font-sans max-w-xs leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="text-xs font-mono text-neutral-400 uppercase mt-4 tracking-wider">
              {t.footer.location}
            </p>
          </div>

          {/* Quick Direct Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {t.footer.columns.map((col, idx) => (
              <div key={idx}>
                <h4 className="text-[11px] font-mono font-bold tracking-widest text-neutral-400 uppercase mb-3">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="text-xs text-neutral-600 hover:text-[#0052FF] transition-colors font-sans"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Specific Direct Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#modelos" className="hover:text-[#0052FF] transition-colors">
              Studio
            </a>
            <a href="#ventures" className="hover:text-[#0052FF] transition-colors">
              Ventures
            </a>
            <a href="#karvo-ai" className="hover:text-[#0052FF] transition-colors">
              Karvo AI
            </a>
            <button
              onClick={onOpenArkhaModal}
              className="hover:text-[#0052FF] transition-colors cursor-pointer"
            >
              Arkha
            </button>
            <a href="#network" className="hover:text-[#0052FF] transition-colors">
              Network
            </a>
            <a href="#tesis" className="hover:text-[#0052FF] transition-colors">
              Nosotros
            </a>
            <button
              onClick={onOpenFounderModal}
              className="hover:text-[#0052FF] transition-colors cursor-pointer font-semibold text-neutral-800"
            >
              Aplicar
            </button>
          </div>

          <div>{t.footer.copyright}</div>
        </div>
      </div>
    </footer>
  );
}
