"use client";

import React from "react";
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
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200/90 shadow-sm">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono tracking-widest uppercase text-neutral-700 mb-4 shadow-xs">
              {t.companies.tag}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-neutral-950 font-display leading-[1.1]">
              {t.companies.headline}
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 mt-6 font-sans leading-relaxed">
              {t.companies.body}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {t.companies.pills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 font-sans shadow-2xs"
                >
                  ✓ {pill}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenDiagnosticModal}
                className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-8 py-3.5 text-xs sm:text-sm font-semibold text-white hover:bg-neutral-800 shadow-md transition-all font-sans cursor-pointer"
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
