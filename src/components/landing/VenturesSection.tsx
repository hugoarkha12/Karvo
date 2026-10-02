"use client";

import React from "react";
import { Translations } from "@/lib/translations";

interface VenturesSectionProps {
  t: Translations;
  onOpenArkhaModal: () => void;
}

export default function VenturesSection({
  t,
  onOpenArkhaModal,
}: VenturesSectionProps) {
  return (
    <section
      id="ventures"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-white text-neutral-900 border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-neutral-950 font-display leading-[1.1]">
              {t.ventures.headline}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-md mt-4 md:mt-0 font-sans leading-relaxed">
            {t.ventures.subtitle}
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Real Company 1: ARKHA */}
          <div className="lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-neutral-50 via-white to-neutral-50 border border-neutral-200/90 hover:border-[#0052FF]/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-[0_20px_60px_rgba(0,82,255,0.15)]">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono tracking-widest uppercase text-neutral-700 font-semibold">
                  VENTURE 01
                </span>
                <div className="inline-flex items-center gap-2 text-[11px] font-mono text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  <span>
                    {t.ventures.arkha.statusLabel}: {t.ventures.arkha.statusVal}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-neutral-950 mb-2">
                {t.ventures.arkha.name}
              </h3>

              <div className="text-xs font-mono text-neutral-600 tracking-widest uppercase mb-6 flex flex-wrap items-center gap-2">
                <span>{t.ventures.arkha.tags}</span>
              </div>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-sans max-w-xl mb-8">
                {t.ventures.arkha.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-neutral-200 text-xs font-sans text-neutral-600">
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 shadow-xs">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1 font-bold">
                    ENFOQUE TÉCNICO
                  </span>
                  Rieles de liquidación transfronteriza y contratos programables.
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 shadow-xs">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1 font-bold">
                    CORREDOR PRINCIPAL
                  </span>
                  Comercio B2B entre México, Estados Unidos y América Latina.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
              <span className="text-[11px] font-mono text-neutral-400">
                KARVO STUDIO CO-FOUNDED
              </span>
              <button
                onClick={onOpenArkhaModal}
                className="inline-flex items-center gap-2 rounded-full bg-[#0052FF] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#0043d6] shadow-[0_4px_20px_rgba(0,82,255,0.35)] transition-all font-sans cursor-pointer"
              >
                {t.ventures.arkha.cta}
              </button>
            </div>
          </div>

          {/* Stealth / Upcoming slots */}
          <div className="space-y-6 flex flex-col justify-between">
            {t.ventures.upcoming.map((slot, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-neutral-50/70 border border-neutral-200/90 hover:border-neutral-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between flex-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-bold">
                      {slot.badge}
                    </span>
                    <span className="text-[9px] font-mono text-neutral-600 bg-white border border-neutral-200 px-2 py-0.5 rounded-full shadow-xs">
                      {slot.status}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold font-sans tracking-wide text-neutral-950 mb-2">
                    {slot.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                    {slot.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 text-[10px] font-mono text-neutral-400 flex items-center justify-between">
                  <span>FASE DE INVESTIGACIÓN</span>
                  <span className="text-neutral-500 font-bold">CONFIDENCIAL</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
