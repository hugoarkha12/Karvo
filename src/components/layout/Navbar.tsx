"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { KarvoLogo } from "@/components/ui/Logo";
import { ModalTrigger } from "@/components/modals/ModalTrigger";
import { LanguageSwitch } from "./LanguageSwitch";

export function Navbar({
  locale,
  nav,
  common,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  common: Dictionary["common"];
}) {
  const [open, setOpen] = useState(false);

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
    <header className="sticky top-0 z-40 bg-canvas px-gutter">
      <div className="mx-auto flex h-(--nav-h) w-full max-w-site items-center justify-between gap-8">
        <a href="#top" aria-label={common.home} onClick={close} className="text-[1.25rem] text-ink lg:text-[1.375rem]">
          <KarvoLogo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex xl:gap-10">
          <ul className="flex items-center gap-7 text-[1.0625rem] xl:gap-9 xl:text-[1.125rem]">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitch current={locale} label={common.language} className="text-[1.0625rem] xl:text-[1.125rem]" />
          <ModalTrigger modal="founder" size="sm">
            {nav.cta}
          </ModalTrigger>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? common.closeMenu : common.openMenu}
          className="relative -mr-2 grid size-11 place-items-center lg:hidden"
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
        className="fixed inset-x-0 top-(--nav-h) bottom-0 overflow-y-auto bg-canvas px-gutter pb-8 lg:hidden"
      >
        <nav aria-label="Principal" className="flex min-h-full flex-col">
          <ul className="border-b border-line">
            {nav.links.map((link, index) => (
              <li
                key={link.href}
                className="intro-slide border-t border-line"
                style={{ "--delay": `${index * 0.05}s` } as React.CSSProperties}
              >
                <a href={link.href} onClick={close} className="block py-4 text-h4">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-6 pt-10">
            <LanguageSwitch current={locale} label={common.language} className="text-p-lg" />
            <ModalTrigger modal="founder" className="w-full justify-between">
              {nav.mobileCta}
            </ModalTrigger>
          </div>
        </nav>
      </div>
    </header>
  );
}
