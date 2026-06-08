import type { Locale } from './locales';
import { defaultLocale } from './locales';
import pl from './translations/pl.json';
import de from './translations/de.json';
import en from './translations/en.json';
import uk from './translations/uk.json';

export type Translations = typeof pl;

const dictionaries: Record<Locale, Translations> = { pl, de, en, uk };

export function getTranslations(locale: string | undefined): Translations {
  const key = (locale ?? defaultLocale) as Locale;
  return dictionaries[key] ?? dictionaries[defaultLocale];
}

export function t(locale: string | undefined) {
  return getTranslations(locale);
}
