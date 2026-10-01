"use client";

import React from "react";
import { Translations } from "@/lib/translations";

interface ModelosSectionProps {
  t: Translations;
  onOpenFounderModal: () => void;
}

export default function ModelosSection({
  t,
  onOpenFounderModal,
}: ModelosSectionProps) {
  return (
    <section
      id="modelos"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-white text-neutral-900 border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono tracking-widest uppercase text-neutral-700 mb-4 shadow-sm">
            {t.models.tag}
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-neutral-950 font-display leading-[1.1]">
            {t.models.headline}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-4 font-sans leading-relaxed">
            {t.models.subtitle}
          </p>
        </div>

        {/* Dual Cards Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Path 1: Karvo Studio */}
          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50/80 border border-neutral-200/90 flex flex-col justify-between hover:border-neutral-300 hover:shadow-lg transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-[10px] font-mono tracking-wider uppercase text-neutral-700 mb-6 shadow-xs">
                {t.models.studio.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-sans text-neutral-950 mb-2">
                {t.models.studio.title}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-neutral-800 font-mono mb-4">
                {t.models.studio.subhead}
              </p>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans mb-8">
                {t.models.studio.desc}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-neutral-200">
                {t.models.studio.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-700 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-neutral-200">
              <a
                href="#como-construimos"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-neutral-100 border border-neutral-300 px-6 py-3.5 text-xs font-semibold text-neutral-900 shadow-sm transition-all font-sans"
              >
                {t.models.studio.cta}
              </a>
            </div>
          </div>

          {/* Path 2: Karvo Ventures */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 shadow-xl transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-neutral-950 font-bold text-[10px] font-mono tracking-wider uppercase mb-6 shadow-xs">
                {t.models.ventures.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white mb-2">
                {t.models.ventures.title}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-white/90 font-mono mb-4">
                {t.models.ventures.subhead}
              </p>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans mb-8">
                {t.models.ventures.desc}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/15">
                {t.models.ventures.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-white/80 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/15">
              <button
                onClick={onOpenFounderModal}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-neutral-100 px-6 py-3.5 text-xs font-semibold text-neutral-950 shadow-md transition-all font-sans cursor-pointer"
              >
                {t.models.ventures.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
