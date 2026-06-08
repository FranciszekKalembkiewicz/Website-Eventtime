import type { Translations } from './index';

const PLACEHOLDER = '/images/placeholders';

const partyImages: Record<string, string | null> = {
  urodziny: null,
  komunie: null,
  wesela: null,
  firmowe: null,
  pikniki: null,
  inne: null,
};

const attractionImages: Record<string, string | null> = {
  klaun: '/images/attr-klaun.jpg',
  banki: '/images/attr-banki.jpg',
  malowanie: '/images/gallery-30.jpg',
  konkursy: '/images/gallery-28.jpg',
  warkoczyki: '/images/gallery-23.jpg',
  tatuaze: '/images/gallery-21.jpg',
  modelinowe: '/images/gallery-32.jpg',
  wataPopcorn: null,
  dmuchance: null,
};

const partyPlaceholders: Record<string, string> = {
  urodziny: `${PLACEHOLDER}/party-urodziny.svg`,
  komunie: `${PLACEHOLDER}/party-komunie.svg`,
  wesela: `${PLACEHOLDER}/party-wesela.svg`,
  firmowe: `${PLACEHOLDER}/party-firmowe.svg`,
  pikniki: `${PLACEHOLDER}/party-pikniki.svg`,
  inne: `${PLACEHOLDER}/party-inne.svg`,
};

const attractionPlaceholders: Record<string, string> = {
  klaun: `${PLACEHOLDER}/attr-klaun.svg`,
  banki: `${PLACEHOLDER}/attr-banki.svg`,
  malowanie: `${PLACEHOLDER}/attr-malowanie.svg`,
  konkursy: `${PLACEHOLDER}/attr-konkursy.svg`,
  warkoczyki: `${PLACEHOLDER}/attr-inne.svg`,
  tatuaze: `${PLACEHOLDER}/attr-malowanie.svg`,
  modelinowe: `${PLACEHOLDER}/attr-inne.svg`,
  wataPopcorn: `${PLACEHOLDER}/attr-inne.svg`,
  dmuchance: `${PLACEHOLDER}/attr-dmuchance.svg`,
};

const decoImages: Record<string, string> = {
  luki: '/images/gallery-29.jpg',
  urodziny: '/images/gallery-5.jpg',
  sluby: '/images/gallery-36.jpg',
  cekinowe: '/images/gallery-20.jpg',
  liczbyLed: '/images/gallery-25.jpg',
  kwiatowe: '/images/gallery-18.jpg',
  firmowe: `${PLACEHOLDER}/deco-firmowe.svg`,
  inne: '/images/party-komunie.jpg',
};

export function getAnimacjeData(t: Translations) {
  const ids = Object.keys(partyImages);
  const attrIds = Object.keys(attractionImages);

  return {
    intro: t.animacje.intro,
    partyTypes: ids.map((id) => ({
      id,
      ...t.animacje.partyTypes[id as keyof typeof t.animacje.partyTypes],
      image: partyImages[id] ?? partyPlaceholders[id],
    })),
    attractions: attrIds.map((id) => ({
      id,
      ...t.animacje.attractions[id as keyof typeof t.animacje.attractions],
      image: attractionImages[id] ?? attractionPlaceholders[id],
    })),
    testimonials: t.animacje.testimonials.map((item, i) => ({ id: String(i + 1), ...item })),
  };
}

export function getDekoracjeData(t: Translations) {
  const ids = Object.keys(decoImages);
  return {
    intro: t.dekoracje.intro,
    categories: ids.map((id) => {
      const cat = t.dekoracje.categories[id as keyof typeof t.dekoracje.categories];
      return {
        id,
        title: cat.title,
        description: cat.description,
        detail: cat.detail,
        image: decoImages[id],
      };
    }),
  };
}
