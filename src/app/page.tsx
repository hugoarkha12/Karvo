"use client";

import React, { useState, useEffect } from "react";
import { translations, Language } from "@/lib/translations";
import { detectLanguageFromIpAndBrowser } from "@/lib/geo";
import KarvoHeroBanner from "@/components/KarvoHeroBanner";

export default function Home() {
  const [lang, setLang] = useState<Language>("es");
  const [geoInfo, setGeoInfo] = useState<{
    country?: string;
    city?: string;
    source?: "saved" | "ip" | "browser";
  }>({});

  // Automatic IP and Browser language detection
  useEffect(() => {
    // 1. Instant check from localStorage or navigator
    const saved = localStorage.getItem("karvo_lang") as Language | null;
    if (saved === "en" || saved === "es") {
      setLang(saved);
      document.documentElement.lang = saved;
    } else if (typeof navigator !== "undefined" && navigator.language) {
      const initial = navigator.language.toLowerCase().startsWith("es")
        ? "es"
        : "en";
      setLang(initial);
      document.documentElement.lang = initial;
    }

    // 2. IP Geolocation Lookup
    detectLanguageFromIpAndBrowser().then((result) => {
      setLang(result.lang);
      document.documentElement.lang = result.lang;
      setGeoInfo({
        country: result.country,
        city: result.city,
        source: result.source,
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
    <main className="min-h-screen bg-black">
      <KarvoHeroBanner
        t={t}
        lang={lang}
        onLanguageChange={changeLanguage}
        geoInfo={geoInfo}
      />
    </main>
  );
}
