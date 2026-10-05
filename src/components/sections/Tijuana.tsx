import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import tijuanaOffice from "@/assets/tijuana-office.png";

export function Tijuana({ copy }: { copy: Dictionary["tijuana"] }) {
  return (
    <Section id="tijuana" tone="dark">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow className="text-on-dark-soft">{copy.eyebrow}</Eyebrow>
          <h2 data-anim="title" className="text-h2 text-balance">
            {copy.headline}
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {copy.body.map((paragraph) => (
              <p key={paragraph} data-anim="copy" className="text-p-lg text-on-dark-soft">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <figure className="relative aspect-[16/10] overflow-hidden rounded-card lg:col-span-7 lg:aspect-auto lg:min-h-[30rem]">
          <Image
            data-anim="zoom"
            src={tijuanaOffice}
            alt={copy.imageAlt}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/10 to-transparent" />
          <figcaption className="absolute right-5 bottom-5 left-5 text-eyebrow uppercase text-on-dark-soft sm:right-8 sm:bottom-7 sm:left-8">
            {copy.visionTag}
          </figcaption>
        </figure>
      </div>

      {/* Corredor Tijuana → México → Latam → Global */}
      <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-8">
        <span
          aria-hidden
          data-anim="draw"
          className="absolute top-[0.4375rem] right-0 left-0 hidden h-px bg-graphite lg:block"
        />
        {copy.corridor.map((stop, index) => (
          <li key={stop.name} className="relative">
            <span
              aria-hidden
              className={cn(
                "relative z-10 block size-3.5 rounded-full border-2",
                index === 0 ? "border-accent bg-accent" : "border-white bg-ink",
              )}
            />
            <h3 className="mt-6 flex items-baseline gap-3 text-h3">
              <span className="text-p-sm text-on-dark-muted tabular-nums">0{index + 1}</span>
              {stop.name}
            </h3>
            <p className="mt-3 text-p-sm text-on-dark-soft">{stop.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
