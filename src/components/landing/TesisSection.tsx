"use client";

import React from "react";
import { Translations } from "@/lib/translations";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface TesisSectionProps {
  t: Translations;
}

export default function TesisSection({ t }: TesisSectionProps) {
  return (
    <section
      id="tesis"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-neutral-50/60 text-neutral-900 border-t border-neutral-200"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-[10px] font-mono tracking-widest uppercase text-neutral-700 mb-6 shadow-sm">
          {t.thesis.tag}
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-neutral-950 font-display max-w-4xl leading-[1.1]">
          {t.thesis.headline}
        </h2>

        {/* Lead sentence */}
        <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mt-6 font-sans leading-relaxed">
          {t.thesis.intro}
        </p>

        {/* The 5 Paradigm Shifts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-12">
          {t.thesis.shifts.map((shift, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 80} duration={650}>
              <div
                className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-neutral-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <span className="font-mono text-xs text-neutral-400 font-bold block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-neutral-950 font-sans mb-2">
                    {shift.title}
                  </h3>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans mt-2">
                  {shift.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Synthesis Narrative */}
        <ScrollReveal direction="up" delay={150} duration={700}>
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-sm max-w-4xl">
            <p className="text-base sm:text-lg text-neutral-800 font-sans leading-relaxed">
              {t.thesis.conclusion}
            </p>
          </div>
        </ScrollReveal>

        {/* The Karvo Equation + Anti-pattern Contrast Matrix */}
        <div className="mt-14 pt-12 border-t border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Karvo Formula */}
          <div className="lg:col-span-7">
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-3 font-semibold">
              {t.thesis.equationTitle}
            </span>
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0052FF] to-[#0033aa] text-white shadow-[0_8px_30px_rgba(0,82,255,0.35)]">
              <span className="text-base sm:text-lg md:text-xl font-mono font-bold tracking-wide block">
                {t.thesis.equationFormula}
              </span>
            </div>
          </div>

          {/* Explicit Anti-patterns */}
          <div className="lg:col-span-5">
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-3 font-semibold">
              {t.thesis.notListTitle}
            </span>
            <div className="flex flex-wrap gap-2">
              {t.thesis.notList.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-mono text-neutral-600 shadow-sm flex items-center gap-1.5"
                >
                  <span className="text-neutral-400 text-[10px]">✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
