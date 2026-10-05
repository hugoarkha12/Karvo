import type { Dictionary } from "@/i18n/dictionaries/es";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tag } from "@/components/ui/Tag";

export function Latam({ copy }: { copy: Dictionary["latam"] }) {
  return (
    <Section id="latam">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h2 data-anim="title" className="text-h2 text-balance">
            {copy.headline}
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {copy.body.map((paragraph) => (
              <p key={paragraph} data-anim="copy" className="text-p-lg text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>
          <blockquote data-anim="fade" className="mt-10 border-l-2 border-accent pl-6 text-p-xl">
            {copy.visionNote}
          </blockquote>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ul data-anim="stagger" className="border-b border-line">
            {copy.countries.map((country) => (
              <li
                key={country.name}
                className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 border-t border-line py-5 sm:grid-cols-[minmax(0,12rem)_1fr_auto] lg:py-6"
              >
                <h3 className="text-h4">{country.name}</h3>
                <p className="col-span-full row-start-2 text-p-sm text-ink-soft sm:col-span-1 sm:row-start-auto">
                  {country.role}
                </p>
                <Tag
                  variant={country.core ? "accent" : "outline"}
                  className="col-start-2 row-start-1 justify-self-end sm:col-start-3"
                >
                  {country.tag}
                </Tag>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.9375rem] text-ink-muted">{copy.disclaimer}</p>
        </div>
      </div>
    </Section>
  );
}
