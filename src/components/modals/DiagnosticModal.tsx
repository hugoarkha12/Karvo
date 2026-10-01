"use client";

import React, { useState } from "react";
import { Translations } from "@/lib/translations";

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
}

export default function DiagnosticModal({
  isOpen,
  onClose,
  t,
}: DiagnosticModalProps) {
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    industry: "",
    challenge: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      <div className="relative w-full max-w-xl my-auto rounded-3xl bg-white border border-neutral-200 shadow-2xl text-neutral-900 overflow-hidden">
        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-neutral-950" />

        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-neutral-200 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono tracking-widest uppercase text-neutral-700 mb-2 font-semibold">
              KARVO AI // ASSESSMENT
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 font-sans">
              {t.modals.diagnosticTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 font-sans">
              {t.modals.diagnosticSubtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-950 transition-colors cursor-pointer"
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
              {t.modals.diagnosticSuccess}
            </h3>
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
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                {t.modals.diagnosticCompany} *
              </label>
              <input
                required
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                placeholder="Nombre de la empresa u organización"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  {t.modals.diagnosticContact} *
                </label>
                <input
                  required
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                  placeholder="Ej. Sofía Morales, COO"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  {t.modals.diagnosticEmail} *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                  placeholder="sofia@empresa.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                {t.modals.diagnosticIndustry} *
              </label>
              <input
                required
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                placeholder="Logística, manufactura, retail, servicios financieros, etc."
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                {t.modals.diagnosticChallenge} *
              </label>
              <textarea
                required
                rows={3}
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-900 transition-colors font-sans"
                placeholder="Describe brevemente la fricción operativa, volumen de tareas manuales o cuello de botella a resolver..."
              />
            </div>

            <div className="pt-3 flex items-center justify-between border-t border-neutral-200">
              <span className="text-[10px] text-neutral-400 font-mono">
                NON-DISCLOSURE GUARANTEED
              </span>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-2.5 text-xs font-semibold text-white hover:bg-neutral-800 disabled:opacity-50 transition-all font-sans shadow-md cursor-pointer"
              >
                {submitting ? "Enviando..." : t.modals.diagnosticSubmit}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
