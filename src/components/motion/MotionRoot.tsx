"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// Mismos valores que usa highalpha.com: titulares que suben línea por línea,
// párrafos que entran desde la derecha y tarjetas escalonadas, todo al llegar
// el elemento al 85 % de la pantalla.
const START = "top 85%";
const EASE = "power3.out";

const ANIMATIONS = {
  /** Titulares: cada línea sube y aparece. */
  title: (el: HTMLElement) =>
    SplitText.create(el, {
      type: "lines",
      linesClass: "split-line",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          autoAlpha: 0,
          yPercent: 30,
          duration: 1,
          ease: EASE,
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: START, once: true },
        }),
    }),

  /** Párrafos: cada línea entra desde la derecha. */
  copy: (el: HTMLElement) =>
    SplitText.create(el, {
      type: "lines",
      linesClass: "split-line",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          autoAlpha: 0,
          x: "1rem",
          duration: 0.9,
          ease: EASE,
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: START, once: true },
        }),
    }),

  /** Bloque completo: sube un poco y aparece. */
  fade: (el: HTMLElement) =>
    gsap.from(el, {
      autoAlpha: 0,
      y: "1rem",
      duration: 0.9,
      ease: EASE,
      scrollTrigger: { trigger: el, start: START, once: true },
    }),

  /** Hijos directos en cascada (grids de tarjetas, listas). */
  stagger: (el: HTMLElement) =>
    gsap.from(el.children, {
      autoAlpha: 0,
      x: "1.25rem",
      duration: 0.9,
      ease: EASE,
      stagger: 0.1,
      scrollTrigger: { trigger: el, start: START, once: true },
    }),

  /** Imágenes: zoom lento de 110 % a 100 %. */
  zoom: (el: HTMLElement) =>
    gsap.from(el, {
      scale: 1.1,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: START, once: true },
    }),

  /** Líneas que se dibujan de izquierda a derecha. */
  draw: (el: HTMLElement) =>
    gsap.from(el, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.4,
      ease: "power3.inOut",
      scrollTrigger: { trigger: el, start: START, once: true },
    }),
} satisfies Record<string, (el: HTMLElement) => unknown>;

type AnimationName = keyof typeof ANIMATIONS;

/**
 * Un solo componente cliente anima toda la página: las secciones (Server
 * Components) solo marcan elementos con `data-anim="…"`. Sin JavaScript o con
 * "reducir movimiento" activado, el contenido se ve completo desde el inicio.
 */
export function MotionRoot() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      document.querySelectorAll<HTMLElement>("[data-anim]").forEach((el) => {
        const name = el.dataset.anim as AnimationName;
        ANIMATIONS[name]?.(el);
      });
    });

    // Las posiciones de los triggers dependen de la fuente final.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  });

  return null;
}
