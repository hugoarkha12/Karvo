"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Tag } from "@/components/ui/Tag";
import { ArrowIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/Icons";
import { ModalTrigger } from "@/components/modals/ModalTrigger";

export type SlideTiles = Record<"logo" | "photo" | "product" | "detail", React.ReactNode>;

export type Slide = {
  key: string;
  name: string;
  tag: string;
  status: string;
  oneLiner: string;
  cta: string;
  tiles: SlideTiles;
};

const SWIPE_THRESHOLD = 40;

/**
 * Mosaico de 4 imágenes que cambian juntas (como el portafolio de High
 * Alpha). Los mosaicos llegan ya renderizados desde el servidor; este
 * componente solo decide cuál se ve.
 */
export function VenturesCarousel({
  slides,
  label,
  slideLabel,
  prevLabel,
  nextLabel,
}: {
  slides: Slide[];
  label: string;
  slideLabel: string;
  prevLabel: string;
  nextLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const total = slides.length;
  const current = slides[index];

  const go = (next: number) => setIndex(Math.min(total - 1, Math.max(0, next)));

  const slot = (name: keyof SlideTiles, className: string) => (
    <div className={cn("@container relative overflow-hidden rounded-card bg-line", className)}>
      {slides.map((slide, i) => (
        <div
          key={slide.key}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-[opacity,scale] duration-700 ease-out-expo",
            i === index ? "scale-100 opacity-100" : "pointer-events-none scale-[1.04] opacity-0",
          )}
        >
          {slide.tiles[name]}
        </div>
      ))}
    </div>
  );

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") go(index - 1);
        if (event.key === "ArrowRight") go(index + 1);
      }}
    >
      <div
        className="grid aspect-[320/223] touch-pan-y grid-cols-[8fr_9fr] gap-2 select-none sm:gap-4 lg:gap-5"
        onPointerDown={(event) => {
          pointerStart.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (pointerStart.current === null) return;
          const delta = event.clientX - pointerStart.current;
          pointerStart.current = null;
          if (Math.abs(delta) > SWIPE_THRESHOLD) go(index + (delta < 0 ? 1 : -1));
        }}
      >
        <div className="flex flex-col gap-2 sm:gap-4 lg:gap-5">
          {slot("logo", "flex-[38]")}
          {slot("photo", "flex-[62]")}
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 lg:gap-5">
          {slot("product", "flex-[58]")}
          {slot("detail", "flex-[42]")}
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6 sm:mt-6">
        <div aria-live="polite" aria-atomic="true" className="min-w-0">
          <p className="sr-only">
            {slideLabel.replace("{current}", String(index + 1)).replace("{total}", String(total))}
          </p>
          <div key={current.key} className="intro-slide [--delay:0s]">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3 className="text-p-xl">{current.name}</h3>
              <Tag variant="white">{current.tag}</Tag>
              <Tag variant="soft" className="text-ink-soft">
                {current.status}
              </Tag>
            </div>
            <p className="mt-2 text-p-sm text-ink-soft">{current.oneLiner}</p>
            {current.cta && (
              <ModalTrigger
                modal="arkha"
                unstyled
                className="group/cta mt-4 inline-flex items-center gap-2 text-p-sm"
              >
                <span className="link-underline">{current.cta}</span>
                <ArrowIcon className="size-4 transition-transform duration-500 ease-out-expo group-hover/cta:translate-x-1" />
              </ModalTrigger>
            )}
          </div>
        </div>

        <div className="flex shrink-0 gap-2.5">
          <button
            type="button"
            aria-label={prevLabel}
            disabled={index === 0}
            onClick={() => go(index - 1)}
            className="grid size-10 place-items-center rounded-full bg-ink text-white transition-colors hover:bg-accent disabled:cursor-default disabled:bg-line disabled:hover:bg-line"
          >
            <ChevronLeftIcon className="size-5" />
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            disabled={index === total - 1}
            onClick={() => go(index + 1)}
            className="grid size-10 place-items-center rounded-full bg-ink text-white transition-colors hover:bg-accent disabled:cursor-default disabled:bg-line disabled:hover:bg-line"
          >
            <ChevronRightIcon className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
