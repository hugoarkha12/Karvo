"use client";

import React from "react";
import { Check } from "lucide-react";
import { Translations } from "@/lib/translations";

interface EmpresasSectionProps {
  t: Translations;
  onOpenDiagnosticModal: () => void;
}

export default function EmpresasSection({
  t,
  onOpenDiagnosticModal,
}: EmpresasSectionProps) {
  return (
    <section
      id="empresas"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-neutral-50/60 text-neutral-900 border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#0052FF]/25 shadow-[0_20px_60px_rgba(0,82,255,0.10)]">
          <div className="max-w-3xl">
            <div className="glass-badge mb-4">
              {t.companies.tag}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.038em] text-neutral-950 font-display leading-[1.1]">
              {t.companies.headline}
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 mt-6 font-sans leading-relaxed">
              {t.companies.body}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {t.companies.pills.map((pill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 font-sans shadow-2xs"
                >
                  <Check className="w-3 h-3 text-[#0052FF]" strokeWidth={3} /> {pill}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenDiagnosticModal}
                className="btn-wipe btn-wipe--blue inline-flex items-center gap-2 bg-[#0052FF] px-8 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,82,255,0.35)] transition-all font-sans cursor-pointer"
              >
                {t.companies.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
