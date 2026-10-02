import React from "react";
import { Translations } from "@/lib/translations";

interface FoundersSectionProps {
  t: Translations;
  onOpenFounderModal: () => void;
}

export default function FoundersSection({
  t,
  onOpenFounderModal,
}: FoundersSectionProps) {
  return (
    <section
      id="founders"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-white text-neutral-900 border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Thesis & Invitation */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.038em] text-neutral-950 font-display leading-[1.1]">
              {t.founders.headline}
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 mt-6 font-sans leading-relaxed">
              {t.founders.body}
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
                <span>INYECCIÓN DE CAPACIDAD TÉCNICA E IA</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
                <span>CAPITAL INICIAL Y ACOMPAÑAMIENTO OPERATIVO</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
                <span>RED DE DISTRIBUCIÓN BINACIONAL Y GLOBAL</span>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={onOpenFounderModal}
                className="btn-wipe btn-wipe--blue inline-flex items-center gap-2 bg-[#0052FF] px-8 py-4 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,82,255,0.35)] transition-all font-sans cursor-pointer"
              >
                {t.founders.cta}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Quick-Start & 16-Field Intake Trigger */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-neutral-50/80 border border-neutral-200/90 shadow-lg relative overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-[#0052FF]/20 via-[#0052FF] to-[#0052FF]/20 absolute top-0 left-0 right-0" />

            <div className="mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 font-semibold">
                  EXPEDIENTE OFICIAL DE FOUNDERS
                </span>
                <span className="text-[10px] font-mono text-neutral-400">
                  16 CAMPOS // REVISIÓN DIRECTA
                </span>
              </div>
              <h3 className="text-lg font-bold font-sans text-neutral-950 mt-1">
                {t.founders.formTitle}
              </h3>
              <p className="text-xs text-neutral-600 font-sans mt-0.5">
                {t.founders.formSubtitle}
              </p>
            </div>

            {/* List of the 16 evaluated fields */}
            <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-xs mb-6">
              <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-2 font-bold">
                CAMPOS DEL FORMULARIO DE EVALUACIÓN:
              </span>
              <div className="grid grid-cols-2 gap-1.5 text-[11px] font-sans text-neutral-700">
                <span>1. {t.founders.fields.name}</span>
                <span>2. {t.founders.fields.email}</span>
                <span>3. {t.founders.fields.linkedin}</span>
                <span>4. {t.founders.fields.company}</span>
                <span>5. {t.founders.fields.website}</span>
                <span>6. {t.founders.fields.whatBuilding}</span>
                <span>7. {t.founders.fields.problemSolving}</span>
                <span>8. {t.founders.fields.whoCustomer}</span>
                <span>9. {t.founders.fields.stage}</span>
                <span>10. {t.founders.fields.traction}</span>
                <span>11. {t.founders.fields.revenue}</span>
                <span>12. {t.founders.fields.team}</span>
                <span>13. {t.founders.fields.capitalRaised}</span>
                <span>14. {t.founders.fields.capitalSought}</span>
                <span>15. {t.founders.fields.whyKarvo}</span>
                <span>16. {t.founders.fields.pitchDeck}</span>
              </div>
            </div>

            <button
              onClick={onOpenFounderModal}
              className="btn-wipe btn-wipe--blue w-full inline-flex items-center justify-center gap-2 bg-[#0052FF] py-3.5 px-6 text-xs font-semibold text-white font-sans shadow-[0_4px_20px_rgba(0,82,255,0.35)] transition-all cursor-pointer"
            >
              Completar Formulario de Aplicación (16 Campos) →
            </button>

            <p className="text-[10px] text-center text-neutral-400 font-mono mt-3">
              TIEMPO ESTIMADO: 3-5 MINUTOS · ESTRICTA CONFIDENCIALIDAD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
