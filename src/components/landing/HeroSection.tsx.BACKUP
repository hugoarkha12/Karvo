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

  return (
    <section className="relative w-full isolate min-h-[100dvh] overflow-hidden text-neutral-900 flex flex-col justify-between pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6">
      <AuroraLayers />

      {/* Hero Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex-1 flex flex-col justify-center my-auto">
        {/* Minimalist Top Location Badge - Transparent without background capsule */}
        <div className="mb-6 inline-flex items-center gap-2 animate-fade-slide-in-1 mx-auto py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-600 font-medium">
            {t.hero.locationBadge}
          </span>
        </div>

        {/* Monumental Typography Styled Exactly Like Reference Image */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[-0.038em] text-neutral-950 font-display animate-fade-slide-in-2 leading-[1.05]">
          <span>{t.hero.headlineLine1 || "Construimos las empresas"}</span>{" "}
          <br className="hidden sm:inline" />
          <span className="text-[#0052FF]">
            {t.hero.headlineLine2 || "del futuro."}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mt-6 animate-fade-slide-in-3 font-sans leading-relaxed font-normal">
          {t.hero.subheadline}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 items-center justify-center animate-fade-slide-in-4">
          <button
            onClick={onOpenFounderModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-white bg-[#0052FF] hover:bg-[#0043d6] rounded-full py-3.5 px-8 font-sans transition-all duration-200 hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,82,255,0.35)] cursor-pointer"
          >
            {t.hero.ctaPrimary}
          </button>
          <a
            href="#ventures"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-neutral-50 px-7 py-3.5 text-xs sm:text-sm font-medium text-neutral-800 font-sans transition-all border border-neutral-200/90 shadow-sm"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Small Location Label */}
        <p className="mt-8 text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
          {t.hero.smallLocation}
        </p>
      </div>

      {/* MINIMALIST PROCESS VISUAL: OPORTUNIDAD → TECNOLOGÍA → PRODUCTO → COMPAÑÍA */}
      <div className="relative z-10 max-w-5xl mx-auto w-full mt-12 pt-8 border-t border-neutral-200">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 font-medium">
            {t.hero.processTitle}
          </span>
          <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline-block">
            01 // PIPELINE DE CONSTRUCCIÓN
          </span>
        </div>

        {/* Interactive Desktop & Mobile Pipeline */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {t.hero.processSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative group p-4 sm:p-5 rounded-2xl transition-all duration-300 border text-left cursor-pointer ${
                  isActive
                    ? "bg-white border-[#0052FF]/50 shadow-md ring-1 ring-[#0052FF]/20 -translate-y-0.5"
                    : "bg-neutral-50/70 border-neutral-200/90 hover:bg-white hover:border-neutral-300 shadow-sm"
                }`}
              >
                {/* Step Header */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-neutral-400 group-hover:text-neutral-600 font-bold">
                    {step.num}
                  </span>
                  {idx < 3 && (
                    <span className="hidden md:inline-block text-neutral-300 text-xs font-mono">
                      →
                    </span>
                  )}
                </div>

                {/* Step Title */}
                <h3 className="text-xs sm:text-sm font-bold tracking-wider text-neutral-950 font-mono uppercase mb-1.5">
                  {step.label}
                </h3>

                {/* Step Description */}
                <p className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed font-sans">
                  {step.desc}
                </p>

                {/* Active indicator bar */}
                <div
                  className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300 ${
                    isActive ? "bg-[#0052FF]" : "bg-transparent"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
