"use client";

import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { LOCALE_COOKIE, locales, type Locale } from "@/i18n/config";

const NAMES: Record<Locale, string> = { es: "Español", en: "English" };

/**
 * Cambia de idioma navegando a /es o /en (páginas estáticas distintas) y
 * guarda la elección en una cookie para que `/` recuerde la preferencia.
 */
export function LanguageSwitch({
  current,
  label,
  tone = "dark",
  className,
}: {
  current: Locale;
  label: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div role="group" aria-label={label} className={cn("flex items-center gap-1.5", className)}>
      {locales.map((locale, index) => {
        const isCurrent = locale === current;
        return (
          <Fragment key={locale}>
            {index > 0 && (
              <span aria-hidden className={tone === "dark" ? "text-ink-muted" : "text-on-dark-muted"}>
                /
              </span>
            )}
            <a
              href={`/${locale}`}
              hrefLang={locale}
              lang={locale}
              aria-label={NAMES[locale]}
              aria-current={isCurrent ? "true" : undefined}
              onClick={() => {
                document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
              }}
              className={cn(
                "transition-colors",
                tone === "dark"
                  ? isCurrent
                    ? "text-ink"
                    : "text-ink-muted hover:text-ink"
                  : isCurrent
                    ? "text-white"
                    : "text-on-dark-muted hover:text-white",
              )}
            >
              {locale.toUpperCase()}
            </a>
          </Fragment>
        );
      })}
    </div>
  );
}
