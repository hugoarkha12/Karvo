import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { LegalPage, legalMetadata } from "@/components/layout/LegalPage";

const PATH = "/terminos";

export async function generateMetadata(): Promise<Metadata> {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  return legalMetadata(locale, PATH, dict.legal.terms);
}

export default async function TermsPage() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  return <LegalPage locale={locale} path={PATH} dict={dict} document={dict.legal.terms} />;
}
