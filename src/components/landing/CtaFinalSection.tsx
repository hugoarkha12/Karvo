"use client";

import React from "react";
import { Translations } from "@/lib/translations";
import { AuroraLayers } from "@/components/ui/aurora-background";

interface CtaFinalSectionProps {
  t: Translations;
  onOpenFounderModal: () => void;
}

export default function CtaFinalSection({
  t,
  onOpenFounderModal,
}: CtaFinalSectionProps) {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-center items-center py-24 sm:py-32 px-4 sm:px-6 bg-white text-neutral-900 border-t border-neutral-200 text-center overflow-hidden">
      <AuroraLayers className="opacity-70" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono tracking-widest uppercase text-neutral-700 shadow-sm">
          {t.ctaFinal.tag}
        </div>

        {/* Clean, Massive Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[-0.038em] text-neutral-950 font-display max-w-4xl leading-[1.05]">
          <span>La próxima gran compañía de Latinoamérica</span>{" "}
          <br className="hidden sm:inline" />
          <span className="text-[#0052FF]">podría comenzar aquí.</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-600 mt-6 font-sans italic">
          {t.ctaFinal.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 items-center justify-center w-full sm:w-auto">
          <button
            onClick={onOpenFounderModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-white bg-[#0052FF] hover:bg-[#0043d6] rounded-full py-4 px-9 font-sans transition-all duration-200 hover:scale-[1.02] shadow-[0_4px_25px_rgba(0,82,255,0.4)] cursor-pointer"
          >
            {t.ctaFinal.ctaPrimary}
          </button>
          <button
            onClick={onOpenFounderModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 px-8 py-4 text-xs sm:text-sm font-semibold text-neutral-900 transition-all font-sans cursor-pointer shadow-xs"
          >
            {t.ctaFinal.ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
}
