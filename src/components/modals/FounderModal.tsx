"use client";

import React, { useEffect, useState } from "react";
import { Translations } from "@/lib/translations";

interface FounderModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
}

export default function FounderModal({ isOpen, onClose, t }: FounderModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    company: "",
    website: "",
    whatBuilding: "",
    problemSolving: "",
    whoCustomer: "",
    stage: t.founders.stageOptions[0],
    traction: "",
    revenue: "",
    team: "",
    capitalRaised: "",
    capitalSought: "",
    whyKarvo: "",
    pitchDeck: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-md animate-fade-slide-in-1">
      <div className="relative w-full max-w-3xl my-auto rounded-3xl bg-white border border-neutral-200 shadow-2xl text-neutral-900 overflow-hidden">
        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-neutral-950" />

        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-neutral-200 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono tracking-widest uppercase text-neutral-700 mb-2 font-semibold">
              KARVO VENTURES // INTAKE
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 font-sans">
              {t.founders.formTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 font-sans">
              {t.founders.formSubtitle}
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

        {submitted ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-950">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-950 font-sans">
              {t.founders.successTitle}
            </h3>
            <p className="text-sm text-neutral-600 max-w-md mx-auto mt-2 font-sans leading-relaxed">
              {t.founders.successMessage}
            </p>
            <div className="mt-8">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-neutral-950 text-white font-semibold text-xs tracking-wider uppercase font-sans hover:bg-neutral-800 transition-all cursor-pointer"
              >
                {t.modals.close}
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6"
          >
            {/* Section 1: Contact & Company */}
            <div>
              <h4 className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3 flex items-center gap-2 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
                01. Datos del Founder y Empresa
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.name} *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                    placeholder="Ej. Mateo Rivera"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.email} *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                    placeholder="mateo@startup.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.linkedin} *
                  </label>
                  <input
                    required
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.company} *
                  </label>
                  <input
                    required
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                    placeholder="Nombre de la empresa o proyecto"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.website}
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                    placeholder="https://tuempresa.com (si aplica)"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Product & Problem */}
            <div className="pt-4 border-t border-neutral-200">
              <h4 className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3 flex items-center gap-2 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
                02. La Oportunidad y el Producto
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.whatBuilding} *
                  </label>
                  <textarea
                    required
                    rows={2}
                    name="whatBuilding"
                    value={formData.whatBuilding}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                    placeholder="Describe en pocas oraciones la tecnología o producto..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.problemSolving} *
                  </label>
                  <textarea
                    required
                    rows={2}
                    name="problemSolving"
                    value={formData.problemSolving}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                    placeholder="¿Cuál es la ineficiencia económica, operativa o estructural que estás atacando?"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.whoCustomer} *
                  </label>
                  <input
                    required
                    type="text"
                    name="whoCustomer"
                    value={formData.whoCustomer}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                    placeholder="Ej. Empresas medianas de logística en México, exportadores agrícolas, etc."
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Metrics & Execution */}
            <div className="pt-4 border-t border-neutral-200">
              <h4 className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3 flex items-center gap-2 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
                03. Etapa, Tracción y Equipo
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.stage} *
                  </label>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                  >
                    {t.founders.stageOptions.map((opt, i) => (
                      <option key={i} value={opt} className="bg-white text-neutral-900">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.revenue} *
                  </label>
                  <input
                    required
                    type="text"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                    placeholder="Ej. Pre-ingresos / $5k USD MRR / $120k ARR"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.traction} *
                  </label>
                  <textarea
                    required
                    rows={2}
                    name="traction"
                    value={formData.traction}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                    placeholder="Métricas clave, pilotos en curso, cartas de intención o volumen transaccionado..."
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.team} *
                  </label>
                  <input
                    required
                    type="text"
                    name="team"
                    value={formData.team}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                    placeholder="Ej. 2 co-founders técnicos tiempo completo, 1 lead comercial"
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Capital & Alignment */}
            <div className="pt-4 border-t border-neutral-200">
              <h4 className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3 flex items-center gap-2 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
                04. Capital, Por Qué Karvo y Deck
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.capitalRaised}
                  </label>
                  <input
                    type="text"
                    name="capitalRaised"
                    value={formData.capitalRaised}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                    placeholder="Bootstrapped / $50k FF / etc."
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.capitalSought}
                  </label>
                  <input
                    type="text"
                    name="capitalSought"
                    value={formData.capitalSought}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                    placeholder="Ej. $150k - $300k USD para acelerar producto e IA"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.whyKarvo} *
                  </label>
                  <textarea
                    required
                    rows={2}
                    name="whyKarvo"
                    value={formData.whyKarvo}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                    placeholder="¿Por qué construir con Karvo? ¿Qué valor esperas de nuestro estudio y capacidad técnica?"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {t.founders.fields.pitchDeck} *
                  </label>
                  <input
                    required
                    type="url"
                    name="pitchDeck"
                    value={formData.pitchDeck}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                    placeholder="https://docsend.com/... o enlace público de Google Drive"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-neutral-200">
              <span className="text-[11px] text-neutral-400 font-mono">
                INTAKE: STRICT CONFIDENTIALITY
              </span>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-7 py-3 text-xs font-semibold text-white hover:bg-neutral-800 disabled:opacity-50 transition-all font-sans shadow-md cursor-pointer"
              >
                {submitting ? t.founders.submitting : t.founders.submitButton}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
