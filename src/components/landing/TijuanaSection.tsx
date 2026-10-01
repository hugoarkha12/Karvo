"use client";

import React from "react";
import { Translations } from "@/lib/translations";

interface TijuanaSectionProps {
  t: Translations;
}

export default function TijuanaSection({ t }: TijuanaSectionProps) {
  return (
    <section
      id="tijuana"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-white text-neutral-900 border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono tracking-widest uppercase text-neutral-700 mb-4 shadow-sm">
            {t.tijuana.tag}
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-neutral-950 font-display leading-[1.1]">
            {t.tijuana.headline}
          </h2>
          <div className="mt-6 space-y-3 text-base sm:text-lg text-neutral-600 font-sans leading-relaxed">
            <p>{t.tijuana.body1}</p>
            <p className="text-neutral-700">{t.tijuana.body2}</p>
          </div>
        </div>

        {/* Visual: Zona Río Futuristic Vision & Technical Corridor */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-lg relative">
          {/* Architectural Skyline Atmosphere Canvas */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-gradient-to-b from-neutral-100 via-neutral-200/40 to-neutral-100">
            {/* Background Image / Ambient Lighting */}
            <img
              src="/hero-bg.png"
              alt="Tijuana Zona Río Vision"
              className="w-full h-full object-cover object-bottom opacity-15 filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(0,0,0,0.04)_0%,transparent_100%)]" />

            {/* Technical HUD Overlays */}
            <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-800 bg-white/95 px-3 py-1 rounded-md border border-neutral-200 shadow-sm backdrop-blur-md font-semibold">
                  {t.tijuana.visionTag}
                </span>
                <p className="text-xs font-mono text-neutral-500 mt-1 pl-1">
                  LAT: 32.5149° N · LON: 117.0382° W · CORREDOR FRONTERIZO
                </p>
              </div>
              <span className="hidden sm:inline-block text-[10px] font-mono text-neutral-500 bg-white/80 border border-neutral-200 px-2.5 py-0.5 rounded shadow-xs font-medium">
                KV-TJ-01
              </span>
            </div>

            {/* Monumental Center Corridor Flow */}
            <div className="absolute inset-x-0 bottom-8 px-6 text-center">
              <div className="inline-block p-3 sm:p-4 rounded-2xl bg-white/95 border border-neutral-300 shadow-xl backdrop-blur-xl">
                <span className="font-mono text-xs sm:text-base md:text-lg font-bold tracking-widest text-neutral-950 uppercase">
                  {t.tijuana.corridor}
                </span>
              </div>
            </div>
          </div>

          {/* 4 Milestones Progression Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 bg-white border-t border-neutral-200">
            {t.tijuana.milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-neutral-50/70 border border-neutral-200/90 hover:border-neutral-300 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-neutral-400 font-bold">
                    STAGE {m.code}
                  </span>
                  {idx < 3 && (
                    <span className="text-neutral-300 text-xs font-mono">→</span>
                  )}
                </div>
                <h4 className="text-sm font-bold font-mono tracking-wide text-neutral-950 uppercase mb-1.5">
                  {m.name}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
