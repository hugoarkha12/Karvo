"use client";

import React, { useState, useEffect } from "react";
import KarvoHeroBanner from "@/components/KarvoHeroBanner";
import { translations, Language } from "@/lib/translations";
import { detectLanguageFromIpAndBrowser } from "@/lib/geo";

const HeroDemo = () => {
  const [lang, setLang] = useState<Language>("es");
  const [geoInfo, setGeoInfo] = useState<{
    country?: string;
    city?: string;
    source?: "saved" | "ip" | "browser";
  }>({});

  useEffect(() => {
    const saved = localStorage.getItem("karvo_lang") as Language | null;
    if (saved === "en" || saved === "es") {
      setLang(saved);
    } else if (typeof navigator !== "undefined" && navigator.language) {
      setLang(navigator.language.toLowerCase().startsWith("es") ? "es" : "en");
    }

    detectLanguageFromIpAndBrowser().then((res) => {
      setLang(res.lang);
      setGeoInfo({
        country: res.country,
        city: res.city,
        source: res.source,
      });
    });
  }, []);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("karvo_lang", newLang);
  };

  const t = translations[lang];

  return (
    <KarvoHeroBanner
      t={t}
      lang={lang}
      onLanguageChange={changeLanguage}
      geoInfo={geoInfo}
    />
  );
};

export default HeroDemo;
