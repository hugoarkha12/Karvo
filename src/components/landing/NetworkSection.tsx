"use client";

import React, { useState } from "react";
import { Translations } from "@/lib/translations";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface NetworkSectionProps {
  t: Translations;
}

export default function NetworkSection({ t }: NetworkSectionProps) {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section
      id="network"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-neutral-50/60 text-neutral-900 border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-[10px] font-mono tracking-widest uppercase text-neutral-700 mb-4 shadow-sm">
            {t.network.tag}
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-neutral-950 font-display leading-[1.1]">
            {t.network.headline}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-6 font-sans leading-relaxed">
            {t.network.body}
          </p>
        </div>

        {/* Network Nodes Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {t.network.nodes.map((node, idx) => {
            const isActive = activeNode === idx;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 60} duration={600}>
                <div
                  onMouseEnter={() => setActiveNode(idx)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 border flex flex-col justify-between cursor-pointer h-full ${
                    isActive
                      ? "bg-white border-[#0052FF]/60 shadow-xl shadow-[#0052FF]/10 -translate-y-1 ring-1 ring-[#0052FF]/20"
                      : "bg-white border-neutral-200/90 hover:border-neutral-300 shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-neutral-400 font-bold">
                        NODE 0{idx + 1}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]/60" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold font-mono tracking-wider text-neutral-950 uppercase mb-2">
                      {node.name}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed font-sans mt-3">
                    {node.role}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Network Ecosystem Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-neutral-900 tracking-wider uppercase font-semibold">
              RED ACTIVA // TIJUANA · LATAM · GLOBAL
            </span>
          </div>
          <span className="text-xs text-neutral-500 font-sans text-center sm:text-right">
            Conectamos capacidades complementarias para maximizar probabilidades de éxito.
          </span>
        </div>
      </div>
    </section>
  );
}
