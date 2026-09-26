"use client";

import React, { useState } from "react";
import { Translations, Language } from "@/lib/translations";

interface KarvoHeroBannerProps {
  t: Translations;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  geoInfo: {
    country?: string;
    city?: string;
    source?: "saved" | "ip" | "browser";
  };
}

export default function KarvoHeroBanner({
  t,
  lang,
  onLanguageChange,
  geoInfo,
}: KarvoHeroBannerProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ventures = [
    {
      name: "ARKHA PAY",
      sub: "B2B SETTLEMENTS",
      tag: "FINTECH",
      icon: (
        <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
      ),
    },
    {
      name: "TELEMETRY-X",
      sub: "LOGISTICS FLOW",
      tag: "INFRA",
      icon: (
        <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      name: "KINETIC AI",
      sub: "DECISION ENGINES",
      tag: "SYSTEMS",
      icon: (
        <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
    {
      name: "FOUNDRY-00",
      sub: "STAGE-ZERO INCUBATION",
      tag: "VENTURE",
      icon: (
        <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      name: "BORDER LABS",
      sub: "TIJUANA // SAN DIEGO",
      tag: "CORRIDOR",
      icon: (
        <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" x2="22" y1="12" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full isolate min-h-screen overflow-hidden relative bg-black text-white flex flex-col justify-between">
      {/* Executive Penthouse Skyline Sunset Background */}
      <img
        src="/hero-bg.png"
        alt="Karvo Studio Skyline"
        className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 pointer-events-none select-none object-center"
      />
      {/* Cinematic dark gradient + radial wash for crystal-clear typography */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />

      {/* HEADER / NAVIGATION PILL */}
      <header className="z-30 relative top-0 xl:top-3 pt-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Wordmark */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-mono text-base sm:text-lg font-bold tracking-widest text-white uppercase group-hover:text-white/90 transition-colors">
              KARVO
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono text-white/50 border-l border-white/20 pl-2 tracking-wider uppercase">
              VENTURE STUDIO
            </span>
          </a>

          {/* Desktop Glass Navigation Pill */}
          <nav className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-gradient-to-b from-white/[0.22] via-white/[0.12] to-white/[0.06] p-1.5 border border-white/35 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6),inset_0_1.5px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(255,255,255,0.15),0_0_25px_rgba(255,255,255,0.08)] transition-all">
              <a
                href="#ventures"
                className="px-3.5 py-1.5 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all font-sans"
              >
                {t.nav.ventures}
              </a>
              <a
                href="#thesis"
                className="px-3.5 py-1.5 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all font-sans"
              >
                {t.nav.thesis}
              </a>
              <a
                href="#methodology"
                className="px-3.5 py-1.5 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all font-sans"
              >
                {t.nav.methodology}
              </a>
              <a
                href="#about"
                className="px-3.5 py-1.5 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all font-sans"
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                className="px-3.5 py-1.5 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all font-sans"
              >
                {t.nav.contact}
              </a>

              {/* Present Company White Pill Button with Specular Glow */}
              <a
                href="#contact"
                className="ml-1.5 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-neutral-950 hover:bg-white/90 shadow-[0_2px_14px_rgba(255,255,255,0.35)] transition-all font-sans"
              >
                {t.nav.presentCompany}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </div>
          </nav>

          {/* Right Action: Language Switcher + Telemetry */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher with Glass Style */}
            <div
              className="flex items-center rounded-full bg-gradient-to-b from-white/[0.18] to-white/[0.06] p-1 border border-white/25 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.45),inset_0_1px_1px_0_rgba(255,255,255,0.35)] font-mono text-[11px]"
              title={
                geoInfo.country
                  ? `IP Auto-detected: ${geoInfo.country}`
                  : "Language Switcher"
              }
            >
              <button
                type="button"
                onClick={() => onLanguageChange("en")}
                className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-white text-neutral-950 font-bold shadow-sm"
                    : "text-white/70 hover:text-white"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange("es")}
                className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                  lang === "es"
                    ? "bg-white text-neutral-950 font-bold shadow-sm"
                    : "text-white/70 hover:text-white"
                }`}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-white/[0.18] to-white/[0.06] border border-white/25 backdrop-blur-xl text-white shadow-[0_4px_20px_0_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.35)]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 rounded-2xl bg-neutral-950/95 ring-1 ring-white/15 p-5 backdrop-blur-xl animate-fade-slide-in-1">
            <nav className="flex flex-col gap-3 font-sans">
              <a
                href="#ventures"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-white py-1"
              >
                {t.nav.ventures}
              </a>
              <a
                href="#thesis"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-white py-1"
              >
                {t.nav.thesis}
              </a>
              <a
                href="#methodology"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-white py-1"
              >
                {t.nav.methodology}
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-white py-1"
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-white py-1"
              >
                {t.nav.contact}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900"
              >
                {t.nav.presentCompany}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* CENTER HERO CONTENT */}
      <div className="z-10 relative flex-1 flex flex-col justify-center px-6 pt-16 pb-12 sm:pt-20 md:pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glass Top Badge with Live IP Indicator */}
          <div className="mb-6 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/15 backdrop-blur animate-fade-slide-in-1">
            <span className="inline-flex items-center text-[11px] font-bold text-neutral-950 bg-white/95 rounded-full py-0.5 px-2.5 font-mono tracking-wider">
              {t.hero.badgeLabel}
            </span>
            <span className="text-xs sm:text-sm font-medium text-white/90 font-sans tracking-tight">
              {t.hero.badgeText}
            </span>
            {geoInfo.country && (
              <span className="hidden sm:inline-block font-mono text-[10px] text-white/60 bg-white/10 px-1.5 py-0.5 rounded-full border border-white/10">
                IP: {geoInfo.country}
              </span>
            )}
          </div>

          {/* Majestic Instrument Serif Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] tracking-tight text-white font-instrument-serif font-normal animate-fade-slide-in-2 drop-shadow-sm">
            {t.hero.headlineLine1}
            <br className="hidden sm:block" />{" "}
            <span className="italic font-light text-white/95">
              {t.hero.headlineLine2}
            </span>
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mt-6 mx-auto animate-fade-slide-in-3 font-sans leading-relaxed font-normal">
            {t.hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row sm:gap-4 mt-8 sm:mt-10 gap-3 items-center justify-center animate-fade-slide-in-4">
            <a
              href="#thesis"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 ring-white/20 ring-1 rounded-full py-3.5 px-7 font-sans transition-all duration-200 hover:scale-[1.02] shadow-lg backdrop-blur"
            >
              {t.hero.ctaThesis}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-transparent hover:bg-white/10 px-6 py-3.5 text-sm font-medium text-white/90 hover:text-white font-sans transition-all"
            >
              {t.hero.ctaWork}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
              </svg>
            </a>
          </div>


        </div>
      </div>

      {/* VENTURES & TECHNICAL ARCHITECTURE ECOSYSTEM STRIP */}
      <div className="z-10 relative pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="animate-fade-slide-in-1 text-[11px] font-mono uppercase tracking-widest text-white/50 text-center mb-5">
            {t.hero.partnersTitle}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 animate-fade-slide-in-2">
            {ventures.map((v, index) => (
              <a
                key={index}
                href="#ventures"
                className="group flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-white/20 transition-all backdrop-blur-sm text-center"
              >
                <div className="flex items-center gap-1.5 mb-1 text-white/70 group-hover:text-white transition-colors">
                  {v.icon}
                  <span className="font-mono text-xs font-bold tracking-wider text-white">
                    {v.name}
                  </span>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase group-hover:text-white/70 transition-colors">
                  {v.sub}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
