"use client";

import React from "react";
import { Translations } from "@/lib/translations";

interface KarvoAISectionProps {
  t: Translations;
  onOpenDiagnosticModal: () => void;
}

export default function KarvoAISection({
  t,
  onOpenDiagnosticModal,
}: KarvoAISectionProps) {
  return (
    <section
      id="karvo-ai"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-neutral-50/60 text-neutral-900 border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.038em] text-neutral-950 font-display leading-[1.1]">
            {t.karvoAi.headline}
          </h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg text-neutral-600 font-sans leading-relaxed">
            <p>{t.karvoAi.body1}</p>
            <p className="text-neutral-700">{t.karvoAi.body2}</p>
          </div>
        </div>

        {/* VISUAL PROCESS FLOW: EMPRESA ↓ AI ASSESSMENT ↓ PROBLEMA ↓ OPORTUNIDAD ↓ NUEVA COMPAÑÍA */}
        <div className="mt-14 p-6 sm:p-10 rounded-3xl bg-white border border-neutral-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-semibold">
              {t.karvoAi.flowTitle}
            </span>
            <span className="text-[10px] font-mono text-neutral-600 bg-neutral-100 border border-neutral-200 px-2.5 py-0.5 rounded-full">
              VENTURE SPINOUT PIPELINE
            </span>
          </div>

          {/* Desktop Horizontal / Mobile Vertical Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {t.karvoAi.flowSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200 group-hover:border-[#0052FF]/50 group-hover:bg-white group-hover:shadow-[0_8px_30px_rgba(0,82,255,0.12)] transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        0{idx + 1}
                      </span>
                      {idx < 4 && (
                        <span className="hidden md:inline-block text-neutral-300 text-xs font-mono">
                          →
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold font-mono tracking-wider text-neutral-950 uppercase mb-2">
                      {step.name}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Mobile downward indicator arrow */}
                {idx < 4 && (
                  <div className="md:hidden flex justify-center my-1 text-neutral-400 text-xs">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Action Area */}
          <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-600 font-sans max-w-xl text-center sm:text-left">
              No somos una agencia ni cobramos horas de consultoría. Diseñamos soluciones que resuelven fricciones reales y las convertimos en compañías independientes.
            </div>
            <button
              onClick={onOpenDiagnosticModal}
              className="btn-wipe btn-wipe--blue w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0052FF] px-7 py-3 text-xs font-semibold text-white shadow-[0_4px_20px_rgba(0,82,255,0.35)] transition-all font-sans cursor-pointer whitespace-nowrap"
            >
              {t.karvoAi.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
