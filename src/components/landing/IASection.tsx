"use client";

import React, { useState } from "react";
import { Translations } from "@/lib/translations";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface IASectionProps {
  t: Translations;
}

export default function IASection({ t }: IASectionProps) {
  const [selectedVector, setSelectedVector] = useState<string>("research");

  return (
    <section
      id="ia"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-neutral-50/60 text-neutral-900 border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-[10px] font-mono tracking-widest uppercase text-neutral-700 mb-4 shadow-sm">
            {t.ia.tag}
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-neutral-950 font-display leading-[1.1]">
            {t.ia.headline}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-6 font-sans leading-relaxed whitespace-pre-line">
            {t.ia.intro}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-neutral-700 bg-white border border-neutral-200 px-3 py-1.5 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-950 animate-pulse" />
            {t.ia.realityNote}
          </div>
        </div>

        {/* 6 Visual Vector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-14">
          {t.ia.vectors.map((vec, idx) => {
            const isSelected = selectedVector === vec.key;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 75} duration={650}>
                <div
                  onClick={() => setSelectedVector(vec.key)}
                  className={`p-6 rounded-2xl transition-all duration-300 border flex flex-col justify-between cursor-pointer h-full ${
                    isSelected
                      ? "bg-white border-neutral-950 shadow-xl ring-1 ring-neutral-950/15 -translate-y-1"
                      : "bg-white border-neutral-200/90 hover:border-neutral-300 hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-bold">
                        0{idx + 1} // VECTOR
                      </span>
                      <span className="text-[9px] font-mono uppercase text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                        {vec.role}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-mono tracking-wide text-neutral-950 uppercase mb-2">
                      {vec.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                      {vec.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-neutral-200 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span>METODOLOGÍA KARVO</span>
                    <span className="text-neutral-900 font-bold">ACTIVO</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Rigor & Authenticity Note */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-neutral-200/90 shadow-sm flex items-center gap-3">
          <span className="text-xs font-mono text-neutral-500 font-bold">
            [PROTOCOLO DE RESTRICCIÓN]:
          </span>
          <span className="text-xs text-neutral-600 font-sans">
            Desplegamos herramientas y capacidades de IA validadas operativamente en producción, evitando afirmaciones especulativas.
          </span>
        </div>
      </div>
    </section>
  );
}
