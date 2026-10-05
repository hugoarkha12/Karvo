import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { ModalProvider } from "@/components/modals/ModalProvider";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Thesis } from "@/components/sections/Thesis";
import { Method } from "@/components/sections/Method";
import { ArtificialIntelligence } from "@/components/sections/ArtificialIntelligence";
import { Models } from "@/components/sections/Models";
import { KarvoAI } from "@/components/sections/KarvoAI";
import { Ventures } from "@/components/sections/ventures/Ventures";
import { Latam } from "@/components/sections/Latam";
import { Tijuana } from "@/components/sections/Tijuana";
import { Network } from "@/components/sections/Network";
import { Join } from "@/components/sections/Join";
import { FinalCta } from "@/components/sections/FinalCta";

export default async function HomePage() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <ModalProvider forms={dict.forms} closeLabel={dict.common.close}>
      <a
        href="#contenido"
        className="sr-only z-50 rounded-full bg-ink px-5 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {dict.common.skipToContent}
      </a>
      <span id="top" />
      <Navbar locale={locale} nav={dict.nav} common={dict.common} />

      <main id="contenido" tabIndex={-1} className="outline-hidden">
        <Hero copy={dict.hero} />
        <Thesis copy={dict.thesis} />
        <Method copy={dict.method} />
        <ArtificialIntelligence copy={dict.ai} />
        <Models copy={dict.models} />
        <KarvoAI copy={dict.karvoAi} />
        <Ventures copy={dict.ventures} common={dict.common} />
        <Latam copy={dict.latam} />
        <Tijuana copy={dict.tijuana} />
        <Network copy={dict.network} />
        <Join founders={dict.founders} companies={dict.companies} />
        <FinalCta copy={dict.finalCta} />
      </main>

      <Footer locale={locale} copy={dict.footer} common={dict.common} />
      <MotionRoot />
    </ModalProvider>
  );
}
