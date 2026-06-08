// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://eventtime.zgora.pl',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'de', 'en', 'uk'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pl',
        locales: {
          pl: 'pl-PL',
          de: 'de-DE',
          en: 'en-GB',
          uk: 'uk-UA',
        },
      },
    }),
  ],
});
