import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { Button } from "@/components/ui/Button";
import { KarvoLogo } from "@/components/ui/Logo";

export default async function NotFound() {
  const [locale, { notFound }] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <main className="flex min-h-svh flex-col justify-between px-gutter py-8">
      <a href={`/${locale}`} className="text-[1.375rem]">
        <KarvoLogo />
      </a>
      <div className="max-w-2xl">
        <p className="mb-6 text-eyebrow uppercase text-ink-soft">404</p>
        <h1 className="text-display">{notFound.title}</h1>
        <p className="mt-6 text-p-lg text-ink-soft">{notFound.body}</p>
        <Button href={`/${locale}`} arrow className="mt-10">
          {notFound.cta}
        </Button>
      </div>
      <span />
    </main>
  );
}
