import type { Dictionary } from "@/i18n/dictionaries/es";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ModalTrigger } from "@/components/modals/ModalTrigger";
import { VenturesCarousel, type SlideTiles } from "./VenturesCarousel";
import {
  BlurTile,
  ConfidentialTile,
  CorridorTile,
  FactsTile,
  ProductTile,
  SkeletonFactsTile,
  StealthTile,
  WordmarkTile,
} from "./tiles";

type Copy = Dictionary["ventures"];

/** Mosaicos de cada compañía, por `key` del diccionario. */
function tilesFor(key: string, copy: Copy): SlideTiles {
  const { mock } = copy;
  if (key === "arkha") {
    return {
      logo: <WordmarkTile name="Arkha" />,
      photo: <CorridorTile />,
      product: <ProductTile mock={mock} />,
      detail: <FactsTile facts={mock.facts} />,
    };
  }
  const variant = key === "pipeline-discovery" ? 1 : 0;
  return {
    logo: <StealthTile label={mock.stealth} />,
    photo: <BlurTile variant={variant} />,
    product: <ConfidentialTile label={mock.confidential} variant={variant} />,
    detail: <SkeletonFactsTile variant={variant} />,
  };
}

export function Ventures({
  copy,
  common,
}: {
  copy: Copy;
  common: Dictionary["common"];
}) {
  const cta = (
    <ModalTrigger modal="founder">{copy.cta}</ModalTrigger>
  );

  return (
    <Section
      id="ventures"
      containerClassName="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14"
    >
      <div className="flex flex-col">
        <Eyebrow>{copy.eyebrow}</Eyebrow>
        <h2 data-anim="title" className="text-h2 text-balance">
          {copy.headline}
        </h2>
        <p data-anim="copy" className="mt-5 text-p-xl text-ink-soft">
          {copy.subtitle}
        </p>
        <div className="mt-auto hidden pt-10 lg:block">{cta}</div>
      </div>

      <div data-anim="fade">
        <VenturesCarousel
          label={copy.carouselLabel}
          slideLabel={copy.slideLabel}
          prevLabel={common.prev}
          nextLabel={common.next}
          slides={copy.items.map((item) => ({ ...item, tiles: tilesFor(item.key, copy) }))}
        />
      </div>

      <div className="lg:hidden">{cta}</div>
    </Section>
  );
}
