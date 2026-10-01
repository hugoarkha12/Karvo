"use client";

import React, { useState } from "react";
import { Translations } from "@/lib/translations";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ComoConstruimosProps {
  t: Translations;
}

export default function ComoConstruimosSection({ t }: ComoConstruimosProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="como-construimos"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-white text-neutral-900 border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono tracking-widest uppercase text-neutral-700 mb-4 shadow-sm">
              {t.methodology.tag}
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-neutral-950 font-display max-w-2xl leading-[1.1]">
              {t.methodology.headline}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-md mt-4 md:mt-0 font-sans leading-relaxed">
            {t.methodology.subtitle}
          </p>
        </div>

        {/* 5 Sequential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {t.methodology.steps.map((step, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 90} duration={650}>
                <div
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`relative p-6 rounded-2xl transition-all duration-300 border flex flex-col justify-between min-h-[260px] h-full ${
                    isHovered
                      ? "bg-white border-neutral-950 shadow-xl -translate-y-1.5 ring-1 ring-neutral-950/10"
                      : "bg-neutral-50/80 border-neutral-200/90 hover:border-neutral-300 hover:bg-white shadow-sm"
                  }`}
                >
                  <div>
                    {/* Step Num & Indicator */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-sm font-bold text-neutral-400">
                        {step.step}
                      </span>
                      <span className="text-[9px] font-mono tracking-wider text-neutral-600 bg-white border border-neutral-200 px-2 py-0.5 rounded-full shadow-xs">
                        {step.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold font-mono tracking-wide text-neutral-950 uppercase mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom subtle progress status */}
                  <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span>FASE {step.step}</span>
                    <span className="text-neutral-600 font-semibold">
                      {idx < 4 ? "→ SIGUIENTE" : "COMPLETO"}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
