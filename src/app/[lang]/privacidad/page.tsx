import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { LegalPage, legalMetadata } from "@/components/layout/LegalPage";

const PATH = "/privacidad";

export async function generateMetadata(): Promise<Metadata> {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  return legalMetadata(locale, PATH, dict.legal.privacy);
}

export default async function PrivacyPage() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  return <LegalPage locale={locale} path={PATH} dict={dict} document={dict.legal.privacy} />;
}
