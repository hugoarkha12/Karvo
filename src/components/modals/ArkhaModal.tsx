"use client";

import React, { useEffect } from "react";
import { Translations } from "@/lib/translations";

interface ArkhaModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
}

export default function ArkhaModal({ isOpen, onClose, t }: ArkhaModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-md animate-fade-slide-in-1">
      <div className="relative w-full max-w-xl my-auto rounded-3xl bg-white border border-neutral-200 shadow-2xl text-neutral-900 overflow-hidden">
        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0052FF] via-neutral-950 to-[#0052FF]" />

        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-neutral-200 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono tracking-widest uppercase text-neutral-700 mb-2 font-semibold">
              VENTURE 01 // KARVO PORTFOLIO
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-sans text-neutral-950">
              {t.modals.arkhaTitle}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-neutral-600 mt-1 uppercase tracking-wider">
              {t.modals.arkhaSubtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-950 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052FF]"
            aria-label={t.modals.close}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-5">
          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1 font-bold">
              ESTADO DEL PROYECTO
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wide text-neutral-900">
                PROTOTIPO / INVESTIGACIÓN
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2 font-bold">
              DESCRIPCIÓN DE LA VENTURE
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed font-sans">
              {t.ventures.arkha.desc}
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed font-sans mt-3">
              {t.modals.arkhaDetails}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
              <span className="text-[10px] font-mono uppercase text-neutral-400 block font-bold">
                CORREDOR PRIMARIO
              </span>
              <span className="text-xs font-semibold text-neutral-900 mt-0.5 block">
                México · EE.UU. · LatAm
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
              <span className="text-[10px] font-mono uppercase text-neutral-400 block font-bold">
                ARQUITECTURA
              </span>
              <span className="text-xs font-semibold text-neutral-900 mt-0.5 block">
                Smart Contracts & Rieles B2B
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
            <span className="text-[10px] font-mono text-neutral-400">
              DESARROLLO ACTIVO EN KARVO STUDIO
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-neutral-950 text-white font-semibold text-xs tracking-wider uppercase font-sans hover:bg-neutral-800 transition-all cursor-pointer"
            >
              {t.modals.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
