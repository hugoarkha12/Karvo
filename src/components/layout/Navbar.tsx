"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { ArkhaLogo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSwitch } from "./LanguageSwitch";

// El menú completo aparece desde `xl`: con el botón principal ("Conviértete en
// socio de Arkha") no cabe en una sola fila a 1024 px. Debajo, menú móvil.

export function Navbar({
  locale,
  nav,
  common,
  path = "",
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  common: Dictionary["common"];
  /** Ruta actual sin idioma (p. ej. `/privacidad`), para el selector de idioma. */
  path?: string;
}) {
  const [open, setOpen] = useState(false);
  // Enlaces con idioma (`/es#plataforma`): en la landing solo desplazan la
  // página y desde las páginas legales llevan de vuelta a la sección.
  const home = `/${locale}`;

  // Con el menú móvil abierto: bloquea el scroll del fondo y cierra con Esc.
  useEffect(() => {
    if (!open) return;
    document.documentElement.toggleAttribute("data-menu-open", true);
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.toggleAttribute("data-menu-open", false);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-canvas/85 px-gutter backdrop-blur-md">
      <div className="mx-auto flex h-(--nav-h) w-full max-w-site items-center justify-between gap-8">
        <a href={`${home}#top`} aria-label={common.home} onClick={close} className="text-[1.375rem] text-ink lg:text-[1.5rem]">
          <ArkhaLogo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 xl:flex">
          <ul className="flex items-center gap-8 text-[1.0625rem]">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={`${home}${link.href}`} className="link-underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitch current={locale} label={common.language} path={path} className="text-[1.0625rem]" />
          <a href={`${home}#contacto`} className="link-underline text-[1.0625rem]">
            {nav.secondary}
          </a>
          <Button href={`${home}#contacto`} size="sm" arrow>
            {nav.primary}
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? common.closeMenu : common.openMenu}
          className="relative -mr-2 grid size-11 place-items-center xl:hidden"
        >
          <span
            className={cn(
              "absolute h-[1.5px] w-6 bg-ink transition-transform duration-500 ease-out-expo",
              open ? "rotate-45" : "-translate-y-[4px]",
            )}
          />
          <span
            className={cn(
              "absolute h-[1.5px] w-6 bg-ink transition-transform duration-500 ease-out-expo",
              open ? "-rotate-45" : "translate-y-[4px]",
            )}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-(--nav-h) bottom-0 overflow-y-auto bg-canvas px-gutter pb-8 xl:hidden"
      >
        <nav aria-label="Principal" className="mx-auto flex min-h-full max-w-site flex-col">
          <ul className="border-b border-line">
            {nav.links.map((link, index) => (
              <li
                key={link.href}
                className="intro-slide border-t border-line"
                style={{ "--delay": `${index * 0.05}s` } as React.CSSProperties}
              >
                <a href={`${home}${link.href}`} onClick={close} className="block py-4 text-h4">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-10">
            <LanguageSwitch current={locale} label={common.language} path={path} className="mb-3 text-p-lg" />
            <Button href={`${home}#contacto`} onClick={close} arrow className="w-full justify-between">
              {nav.primary}
            </Button>
            <Button href={`${home}#contacto`} onClick={close} variant="outline" className="w-full justify-between">
              {nav.secondary}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
