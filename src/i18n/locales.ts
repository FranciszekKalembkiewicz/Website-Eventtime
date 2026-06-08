export const defaultLocale = 'pl' as const;

export const locales = ['pl', 'de', 'en', 'uk'] as const;
export type Locale = (typeof locales)[number];

/** Pełne nazwy języków — używane w aria-label i tooltipach (nie skrótów typu UK). */
export const localeNames: Record<Locale, string> = {
  pl: 'Polski',
  de: 'Deutsch',
  en: 'English',
  uk: 'Українська',
};

export const htmlLang: Record<Locale, string> = {
  pl: 'pl',
  de: 'de',
  en: 'en',
  uk: 'uk',
};

export const ogLocale: Record<Locale, string> = {
  pl: 'pl_PL',
  de: 'de_DE',
  en: 'en_GB',
  uk: 'uk_UA',
};
