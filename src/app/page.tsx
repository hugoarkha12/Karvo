"use client";

import React, { useState, useEffect } from "react";
import { translations, Language } from "@/lib/translations";
import { detectLanguageFromIpAndBrowser } from "@/lib/geo";

// Landing components
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TesisSection from "@/components/landing/TesisSection";
import ComoConstruimosSection from "@/components/landing/ComoConstruimosSection";
import IASection from "@/components/landing/IASection";
import ModelosSection from "@/components/landing/ModelosSection";
import KarvoAISection from "@/components/landing/KarvoAISection";
import VenturesSection from "@/components/landing/VenturesSection";
import LatamSection from "@/components/landing/LatamSection";
import TijuanaSection from "@/components/landing/TijuanaSection";
import NetworkSection from "@/components/landing/NetworkSection";
import FoundersSection from "@/components/landing/FoundersSection";
import EmpresasSection from "@/components/landing/EmpresasSection";
import CtaFinalSection from "@/components/landing/CtaFinalSection";
import Footer from "@/components/landing/Footer";

// UI Enhancements
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Modals
import FounderModal from "@/components/modals/FounderModal";
import DiagnosticModal from "@/components/modals/DiagnosticModal";
import ArkhaModal from "@/components/modals/ArkhaModal";

export default function Home() {
  const [lang, setLang] = useState<Language>("es");
  const [geoInfo, setGeoInfo] = useState<{
    country?: string;
    city?: string;
  }>({});

  // Modals state
  const [founderModalOpen, setFounderModalOpen] = useState(false);
  const [diagnosticModalOpen, setDiagnosticModalOpen] = useState(false);
  const [arkhaModalOpen, setArkhaModalOpen] = useState(false);

  useEffect(() => {
    // 1. Check localStorage first
    const saved = localStorage.getItem("karvo_lang") as Language | null;
    if (saved === "en" || saved === "es") {
      setLang(saved);
      document.documentElement.lang = saved;
    } else {
      // Default to 'es' as requested
      setLang("es");
      document.documentElement.lang = "es";
    }

    // 2. Geo detection
    detectLanguageFromIpAndBrowser().then((result) => {
      if (!saved) {
        setLang(result.lang);
        document.documentElement.lang = result.lang;
      }
      setGeoInfo({
        country: result.country,
        city: result.city,
      });
    });
  }, []);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("karvo_lang", newLang);
    document.documentElement.lang = newLang;
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Top Scroll Reading Progress Line */}
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar
        t={t}
        lang={lang}
        onLanguageChange={changeLanguage}
        onOpenFounderModal={() => setFounderModalOpen(true)}
        geoInfo={geoInfo}
      />

      <main className="w-full">
        {/* 1. HERO (Immediate entrance animation) */}
        <HeroSection
          t={t}
          onOpenFounderModal={() => setFounderModalOpen(true)}
        />

        {/* 2. NUESTRA TESIS */}
        <ScrollReveal direction="up" threshold={0.06} duration={800}>
          <TesisSection t={t} />
        </ScrollReveal>

        {/* 3. CÓMO CONSTRUIMOS */}
        <ScrollReveal direction="up" threshold={0.06} duration={800}>
          <ComoConstruimosSection t={t} />
        </ScrollReveal>

        {/* 4. IA */}
        <ScrollReveal direction="up" threshold={0.06} duration={800}>
          <IASection t={t} />
        </ScrollReveal>

        {/* 5. DOS FORMAS DE CONSTRUIR */}
        <ScrollReveal direction="up" threshold={0.06} duration={800}>
          <ModelosSection
            t={t}
            onOpenFounderModal={() => setFounderModalOpen(true)}
          />
        </ScrollReveal>

        {/* 6. KARVO AI */}
        <ScrollReveal direction="up" threshold={0.06} duration={800}>
          <KarvoAISection
            t={t}
            onOpenDiagnosticModal={() => setDiagnosticModalOpen(true)}
          />
        </ScrollReveal>

        {/* 7. VENTURES */}
        <ScrollReveal direction="up" threshold={0.06} duration={800}>
          <VenturesSection
            t={t}
            onOpenArkhaModal={() => setArkhaModalOpen(true)}
          />
        </ScrollReveal>

        {/* 8. LATINOAMÉRICA */}
        <ScrollReveal direction="up" threshold={0.06} duration={800}>
          <LatamSection t={t} />
        </ScrollReveal>

        {/* 9. TIJUANA */}
        <ScrollReveal direction="up" threshold={0.06} duration={800}>
          <TijuanaSection t={t} />
        </ScrollReveal>

        {/* 10. NETWORK */}
        <ScrollReveal direction="up" threshold={0.06} duration={800}>
          <NetworkSection t={t} />
        </ScrollReveal>

        {/* 11. FOUNDERS */}
        <ScrollReveal direction="up" threshold={0.06} duration={800}>
          <FoundersSection
            t={t}
            onOpenFounderModal={() => setFounderModalOpen(true)}
          />
        </ScrollReveal>

        {/* 12. EMPRESAS */}
        <ScrollReveal direction="up" threshold={0.06} duration={800}>
          <EmpresasSection
            t={t}
            onOpenDiagnosticModal={() => setDiagnosticModalOpen(true)}
          />
        </ScrollReveal>

        {/* 13. CTA FINAL */}
        <ScrollReveal direction="scale" threshold={0.06} duration={900}>
          <CtaFinalSection
            t={t}
            onOpenFounderModal={() => setFounderModalOpen(true)}
          />
        </ScrollReveal>
      </main>

      {/* FOOTER */}
      <Footer
        t={t}
        onOpenFounderModal={() => setFounderModalOpen(true)}
        onOpenArkhaModal={() => setArkhaModalOpen(true)}
      />

      {/* INTERACTIVE MODALS */}
      <FounderModal
        isOpen={founderModalOpen}
        onClose={() => setFounderModalOpen(false)}
        t={t}
      />

      <DiagnosticModal
        isOpen={diagnosticModalOpen}
        onClose={() => setDiagnosticModalOpen(false)}
        t={t}
      />

      <ArkhaModal
        isOpen={arkhaModalOpen}
        onClose={() => setArkhaModalOpen(false)}
        t={t}
      />
    </div>
  );
}
