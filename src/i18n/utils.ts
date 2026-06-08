import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from './locales';
import { locales } from './locales';

export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ''));
}

/** Ścieżka bieżącej strony bez prefiksu języka, np. /animacje */
export function getPathKey(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    segments.shift();
  }
  return segments.length ? `/${segments.join('/')}` : '/';
}

export function localizedUrl(locale: Locale, pathKey: string): string {
  const path = pathKey === '/' ? undefined : pathKey.replace(/^\//, '');
  return getRelativeLocaleUrl(locale, path);
}

export function isNavActive(pathname: string, pathKey: string, locale: string | undefined): boolean {
  const current = getPathKey(pathname);
  return current === pathKey || current === `${pathKey}/`;
}
