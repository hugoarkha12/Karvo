"use client";

import React, { useState } from "react";
import { Translations } from "@/lib/translations";
import { AuroraLayers } from "@/components/ui/aurora-background";

interface HeroSectionProps {
  t: Translations;
  onOpenFounderModal: () => void;
}

export default function HeroSection({
  t,
  onOpenFounderModal,
}: HeroSectionProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const line2 = t.hero.headlineLine2 || "del futuro.";

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden text-neutral-900 flex flex-col px-5 sm:px-10 pt-28 sm:pt-36 pb-10">
      <AuroraLayers />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex-1 flex flex-col">
        <div className="glass-badge animate-wipe-left" style={{ animationDelay: "0.18s" }}>
          <span className="inline-block w-3.5 h-3.5 bg-white border-2 border-[#0052FF]" aria-hidden="true" />
          <span>{t.hero.locationBadge}</span>
        </div>

        <h1 className="mt-6 sm:mt-9 font-semibold text-neutral-950 leading-[1.18] tracking-[-0.038em] text-[calc(clamp(2.9rem,5.9vw,5rem)+3px)]">
          <span className="mask-line">
            <span className="block animate-type-rise" style={{ animationDelay: "0.26s" }}>
              {t.hero.headlineLine1 || "Construimos las empresas"}
            </span>
          </span>
          <span className="mask-line">
            <span className="block animate-type-rise" style={{ animationDelay: "0.4s" }}>
              <span className="accent-paint font-semibold" data-text={line2}>
                {line2}
              </span>
            </span>
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 mt-8 sm:mt-10">
          <button
            onClick={onOpenFounderModal}
            className="btn-wipe btn-wipe--blue inline-flex items-center gap-[18px] h-[58px] pl-[22px] pr-[10px] py-3 bg-[#0052FF] text-white text-base font-medium tracking-[-0.015em] whitespace-nowrap animate-wipe-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052FF]"
            style={{ animationDelay: "0.56s" }}
          >
            <span>{t.hero.ctaPrimary}</span>
            <span className="inline-flex items-center justify-center w-9 h-9 bg-[#0043d6] text-white transition-colors">
              <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 10h10.2M10.4 5.6 15.2 10l-4.8 4.4" />
              </svg>
            </span>
          </button>
          <a
            href="#ventures"
            className="btn-wipe btn-wipe--ghost inline-flex items-center h-[58px] px-[26px] py-3 bg-white/55 backdrop-blur-3xl text-neutral-950 text-base font-medium tracking-[-0.015em] whitespace-nowrap animate-wipe-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052FF]"
            style={{ animationDelay: "0.66s" }}
          >
            <span>{t.hero.ctaSecondary}</span>
          </a>
        </div>

        <p className="mt-6 text-[10px] font-medium tracking-[0.18em] text-neutral-500 uppercase overflow-hidden">
          <span className="block animate-type-rise" style={{ animationDelay: "0.7s", animationDuration: "0.9s" }}>
            {t.hero.smallLocation}
          </span>
        </p>

        <p className="mt-auto pt-10 max-w-[700px] text-[clamp(17px,1.8vw,20px)] font-light leading-[1.5] tracking-[-0.01em] text-neutral-800 overflow-hidden">
          <span className="block animate-type-rise" style={{ animationDelay: "0.78s", animationDuration: "0.9s" }}>
            {t.hero.subheadline}
          </span>
        </p>

        <div className="mt-8 pt-6 border-t border-neutral-900/10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-neutral-600">
              {t.hero.processTitle}
            </span>
            <span className="text-[10px] text-neutral-400 hidden sm:inline-block tracking-[0.14em]">
              01 // PIPELINE DE CONSTRUCCIÓN
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {t.hero.processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`relative group p-4 sm:p-5 transition-all duration-300 border text-left cursor-pointer bg-white/60 backdrop-blur-[18px] ${
                    isActive
                      ? "border-[#0052FF]/50 shadow-[0_12px_40px_rgba(0,82,255,0.15)] -translate-y-0.5"
                      : "border-neutral-900/10 hover:border-[#0052FF]/40 hover:bg-white/80"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-neutral-400 group-hover:text-neutral-600 font-bold">
                      {step.num}
                    </span>
                    {idx < 3 && (
                      <span className="hidden md:inline-block text-neutral-300 text-xs">
                        →
                      </span>
                    )}
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold tracking-[0.08em] text-neutral-950 uppercase mb-1.5">
                    {step.label}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>

                  <div
                    className={`absolute bottom-0 left-4 right-4 h-[3px] transition-all duration-300 ${
                      isActive ? "bg-[#0052FF]" : "bg-transparent"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
