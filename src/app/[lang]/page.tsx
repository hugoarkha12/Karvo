import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Technology } from "@/components/sections/Technology";
import { Market } from "@/components/sections/Market";
import { Vision } from "@/components/sections/Vision";
import { WhyArkha } from "@/components/sections/WhyArkha";
import { Solutions } from "@/components/sections/Solutions";
import { Partners } from "@/components/sections/Partners";
import { Investors } from "@/components/sections/Investors";
import { Faq } from "@/components/sections/Faq";

export default async function HomePage() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <>
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
        <Problem copy={dict.problem} />
        <Platform copy={dict.platform} />
        <HowItWorks copy={dict.howItWorks} />
        <Technology copy={dict.technology} />
        <Market copy={dict.market} />
        <Vision copy={dict.vision} />
        <WhyArkha copy={dict.why} />
        <Solutions copy={dict.solutions} />
        <Partners locale={locale} copy={dict.partners} form={dict.form} newTabLabel={dict.common.newTab} />
        <Investors copy={dict.investors} />
        <Faq copy={dict.faq} />
      </main>

      <Footer locale={locale} copy={dict.footer} common={dict.common} />
      <MotionRoot />
    </>
  );
}
