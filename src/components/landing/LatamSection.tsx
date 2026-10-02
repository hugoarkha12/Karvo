"use client";

import React, { useState } from "react";
import { Translations } from "@/lib/translations";

interface LatamSectionProps {
  t: Translations;
}

export default function LatamSection({ t }: LatamSectionProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>("MÉXICO");

  const nodes = [
    {
      id: "MX",
      name: "MÉXICO",
      role: "Punto de partida & Hub transfronterizo",
      x: 28,
      y: 24,
      isCore: true,
      tag: "HQ // CORE",
    },
    {
      id: "CO",
      name: "COLOMBIA",
      role: "Hub de talento dinámico y desarrollo",
      x: 44,
      y: 43,
      isCore: false,
      tag: "MERCADO OBJETIVO",
    },
    {
      id: "PE",
      name: "PERÚ",
      role: "Mercados en expansión y adopción ágil",
      x: 42,
      y: 57,
      isCore: false,
      tag: "MERCADO OBJETIVO",
    },
    {
      id: "BR",
      name: "BRASIL",
      role: "Mayor escala de mercado regional",
      x: 68,
      y: 60,
      isCore: false,
      tag: "MERCADO OBJETIVO",
    },
    {
      id: "CL",
      name: "CHILE",
      role: "Ecosistema institucional y estabilidad",
      x: 45,
      y: 82,
      isCore: false,
      tag: "MERCADO OBJETIVO",
    },
    {
      id: "AR",
      name: "ARGENTINA",
      role: "Densidad técnica e ingeniería de clase mundial",
      x: 52,
      y: 85,
      isCore: false,
      tag: "MERCADO OBJETIVO",
    },
  ];

  return (
    <section
      id="latam"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-neutral-50/60 text-neutral-900 border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-[10px] font-mono tracking-widest uppercase text-neutral-700 mb-4 shadow-sm">
            {t.latam.tag}
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-neutral-950 font-display leading-[1.1]">
            {t.latam.headline}
          </h2>
          <div className="mt-6 space-y-3 text-base sm:text-lg text-neutral-600 font-sans leading-relaxed">
            <p>{t.latam.body1}</p>
            <p className="text-neutral-700">{t.latam.body2}</p>
          </div>
        </div>

        {/* Vision Statement Box */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm max-w-3xl">
          <p className="text-base sm:text-xl font-medium text-neutral-950 font-sans tracking-tight">
            “{t.latam.visionNote}”
          </p>
        </div>

        {/* Two-Column Grid: Map Visual & Country Matrix */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Minimalist Interactive Map Visualization */}
          <div className="lg:col-span-7 relative p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-md overflow-hidden flex flex-col items-center justify-center min-h-[460px]">
            {/* Subtle Granite Texture Background */}
            <div className="absolute inset-0 bg-[url('/granite-texture.jpg')] bg-repeat bg-[size:350px_350px] opacity-75" />

            {/* Radar / Corridor SVG Visualization */}
            <div className="relative w-full max-w-[420px] aspect-[4/5]">
              <svg
                viewBox="0 0 100 110"
                className="w-full h-full filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
              >
                {/* Simplified Minimalist Continental Landform Silhouettes */}
                {/* Mexico / Mesoamerica */}
                <path
                  d="M18,12 L35,16 L40,28 L36,36 L24,30 L16,20 Z"
                  fill="rgba(0,0,0,0.04)"
                  stroke="rgba(0,0,0,0.18)"
                  strokeWidth="0.8"
                />
                {/* Central America connection */}
                <path
                  d="M36,36 L43,40 L45,44 L39,41 Z"
                  fill="rgba(0,0,0,0.03)"
                  stroke="rgba(0,0,0,0.14)"
                  strokeWidth="0.6"
                />
                {/* South America continent */}
                <path
                  d="M42,43 L52,42 L72,48 L82,58 L78,74 L60,88 L50,102 L44,98 L38,72 L36,54 Z"
                  fill="rgba(0,0,0,0.04)"
                  stroke="rgba(0,0,0,0.18)"
                  strokeWidth="0.8"
                />

                {/* Connecting Corridor Ray Lines from Mexico to nodes */}
                <line
                  x1="28"
                  y1="24"
                  x2="44"
                  y2="43"
                  stroke="rgba(0,0,0,0.25)"
                  strokeWidth="0.7"
                  strokeDasharray="1.5,1.5"
                />
                <line
                  x1="44"
                  y1="43"
                  x2="68"
                  y2="60"
                  stroke="rgba(0,0,0,0.2)"
                  strokeWidth="0.7"
                  strokeDasharray="1.5,1.5"
                />
                <line
                  x1="44"
                  y1="43"
                  x2="42"
                  y2="57"
                  stroke="rgba(0,0,0,0.2)"
                  strokeWidth="0.7"
                  strokeDasharray="1.5,1.5"
                />
                <line
                  x1="42"
                  y1="57"
                  x2="45"
                  y2="82"
                  stroke="rgba(0,0,0,0.2)"
                  strokeWidth="0.7"
                  strokeDasharray="1.5,1.5"
                />
                <line
                  x1="45"
                  y1="82"
                  x2="52"
                  y2="85"
                  stroke="rgba(0,0,0,0.2)"
                  strokeWidth="0.7"
                  strokeDasharray="1.5,1.5"
                />

                {/* Interactive Country Node Points */}
                {nodes.map((node) => {
                  const isSelected = selectedCountry === node.name;
                  return (
                    <g
                      key={node.id}
                      className="cursor-pointer transition-all duration-200"
                      onClick={() => setSelectedCountry(node.name)}
                    >
                      {/* Pulse Ring */}
                      {node.isCore && (
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="5"
                          fill="none"
                          stroke="rgba(0,82,255,0.45)"
                          strokeWidth="0.6"
                          className="animate-ping"
                          style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                        />
                      )}

                      {/* Main Node Point */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isSelected ? "3.2" : "2.2"}
                        fill={node.isCore ? "#0052FF" : isSelected ? "#0052FF" : "#52525b"}
                        stroke="#ffffff"
                        strokeWidth="0.8"
                      />

                      {/* Label */}
                      <text
                        x={node.x + 3.5}
                        y={node.y + 1.2}
                        fontSize="3.2"
                        fontFamily="monospace"
                        fontWeight={isSelected ? "bold" : "normal"}
                        fill={isSelected ? "#000000" : "#52525b"}
                        letterSpacing="0.08em"
                      >
                        {node.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[10px] font-mono text-neutral-500 pt-2 border-t border-neutral-100">
              <span className="flex items-center gap-1.5 font-semibold text-neutral-800">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
                MÉXICO (CORE HUB)
              </span>
              <span>ALCANCE: LATAM & GLOBAL</span>
            </div>
          </div>

          {/* Country Cards Matrix */}
          <div className="lg:col-span-5 space-y-3">
            {t.latam.countries.map((c, idx) => {
              const isSelected = selectedCountry === c.name;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedCountry(c.name)}
                  className={`p-4 rounded-xl transition-all duration-200 border cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-white border-[#0052FF]/60 shadow-md shadow-[#0052FF]/10 ring-1 ring-[#0052FF]/20"
                      : "bg-white border-neutral-200/90 hover:border-neutral-300 shadow-sm"
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold font-mono tracking-wider text-neutral-950 block">
                      {c.name}
                    </span>
                    <span className="text-[11px] text-neutral-600 font-sans mt-0.5 block">
                      {c.role}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-neutral-600 bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded-full">
                    {c.tag}
                  </span>
                </div>
              );
            })}

            {/* Institutional Restraint Disclaimer */}
            <div className="pt-2 text-[10px] font-mono text-neutral-400 leading-relaxed">
              * Nota: Karvo opera desde México e interactúa con talento y mercados de la región. No afirmamos presencia física en sedes donde aún no se hayan constituido entidades operativas.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
