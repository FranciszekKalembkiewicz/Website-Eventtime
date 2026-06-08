# Event Time - Corporate Website

Wielojęzyczna strona firmowa dla **Event Time** - firmy eventowej z Zielonej Góry (animacje, dekoracje balonowe, fotobudki 360°). Projekt został zbudowany od podstaw jako prezent na potrzeby rodzinnej działalności.

**Strona:** [https://eventtime.zgora.pl](https://eventtime.zgora.pl/)

## Informacje o projekcie

| Pole | Wartość |
|------|---------|
| **Typ** | Statyczna strona wizytówkowa (SSG) |
| **Domena** | [eventtime.zgora.pl](https://eventtime.zgora.pl/) |
| **Języki** | Polski (domyślny), niemiecki, angielski, ukraiński |
| **Podstrony** | Strona główna, Animacje, Dekoracje, Fotobudka, O nas (+ kontakt) |
| **Status** | Gotowa do wdrożenia - checklista publikacji w [HANDOFF.md](HANDOFF.md) |

## Stack technologiczny

| Warstwa | Technologia |
|---------|-------------|
| Framework | [Astro](https://astro.build/) 6.x |
| Stylowanie | [Tailwind CSS](https://tailwindcss.com/) 4.x (`@tailwindcss/vite`) |
| Język | TypeScript (konfiguracja, dane, i18n) |
| SEO | `@astrojs/sitemap`, meta tagi, `hreflang`, `canonical` |
| Formularz | [Formspree](https://formspree.io) (bez backendu na serwerze) |
| Hosting | Dowolny hosting statyczny (nginx, Apache, Netlify, Cloudflare Pages) |

**Wymagania środowiska:** Node.js ≥ 22.12.0

## Funkcjonalności

- **Routing wielojęzyczny** - 4 locale z prefiksem URL (`/de/`, `/en/`, `/uk/`) i polskim jako domyślnym bez prefiksu
- **Sekcje usług** - karty z obrazami, galerie portfolio z filtrowaniem po tagach
- **Dekoracje** - siatka 8 kategorii z modalem i podglądem realizacji
- **Animacje** - rodzaje imprez i atrakcje z mapowaniem zdjęć / placeholderów
- **Mapa zasięgu** - ilustracja SVG (Polska, Niemcy) bez zewnętrznego API mapowego
- **Lightbox** - powiększanie zdjęć w galerii
- **Responsywność** - layout mobilny i desktopowy
- **Przełącznik języka** - flagi z pełnymi nazwami w `aria-label`

## Struktura repozytorium

```
├── public/images/          # Grafiki produkcyjne (zoptymalizowane pod web)
├── src/
│   ├── components/         # Komponenty UI (Hero, Gallery, Navbar, …)
│   ├── config/site.ts      # Dane firmy, kontakt, linki, Formspree
│   ├── data/               # gallery.json, service-area-map.ts
│   ├── i18n/
│   │   ├── translations/   # pl.json, de.json, en.json, uk.json
│   │   ├── data.ts         # Mapowanie zdjęć atrakcji i dekoracji
│   │   └── utils.ts        # localizedUrl, fmt, getPathKey
│   ├── layouts/            # BaseLayout (SEO, lightbox, nawigacja)
│   ├── pages/              # Entrypointy Astro (+ de/, en/, uk/)
│   ├── styles/global.css   # Tailwind theme, animacje, utility
│   └── views/              # Logika stron (HomePage, AnimacjePage, …)
├── deploy/README.md        # Instrukcja wdrożenia dla administratora
├── HANDOFF.example.md      # Szablon checklisty (pełna wersja lokalnie)
├── src/config/site.example.ts  # Szablon konfiguracji firmy
├── .env.example            # Szablon zmiennych środowiskowych
└── astro.config.mjs
```

## Bezpieczeństwo i dane wrażliwe

Repozytorium **nie zawiera** poniższych plików (są w `.gitignore`):

| Plik / folder | Powód |
|---------------|--------|
| `src/config/site.ts` | Telefon, e-mail, NIP, REGON, adres firmy |
| `.env`, `.env.*` | Klucze API (np. Formspree) |
| `EventTime/` | Surowe zdjęcia źródłowe |
| `HANDOFF.md` | Wewnętrzna checklista z danymi kontaktowymi |
| `*.zip`, `dist/` | Artefakty buildu / paczki wdrożeniowe |

### Pierwsza konfiguracja po sklonowaniu

```bash
cp src/config/site.example.ts src/config/site.ts   # uzupełnij dane firmy
cp .env.example .env                               # wklej endpoint Formspree
npm install
npm run dev
```

**Formspree:** prawdziwy endpoint trzymaj w `.env` jako `PUBLIC_FORMSPREE_ENDPOINT` - nigdy w commicie.

### Materiały w repozytorium

Do repozytorium trafiają przetworzone grafiki w `public/images/` (widoczne na opublikowanej stronie). Surowe materiały z folderu `EventTime/` pozostają lokalnie.

## Wersje językowe

| Locale | Kod | Przykład URL |
|--------|-----|--------------|
| Polski | `pl` | `/animacje` |
| Niemiecki | `de` | `/de/animacje` |
| Angielski | `en` | `/en/animacje` |
| Ukraiński | `uk` | `/uk/animacje` |

**Zasada edycji treści:** źródłem prawdy jest `src/i18n/translations/pl.json`. Zmiany należy przenosić do `de.json`, `en.json` i `uk.json` z zachowaniem identycznej struktury kluczy. Szczegóły: [src/i18n/README.md](src/i18n/README.md).

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Aplikacja deweloperska: `http://localhost:4321`

## Build i podgląd produkcyjny

```bash
npm run build
npm run preview
```

Wynik buildu: katalog `dist/` - gotowy do wgrania na serwer WWW.

## Konfiguracja

Skopiuj `src/config/site.example.ts` → `src/config/site.ts` i uzupełnij:

| Klucz | Opis |
|-------|------|
| `phone`, `email`, `company` | Dane kontaktowe i firmowe |
| `allegroUrl` | Link do sklepu Allegro |
| `siteUrl` | URL kanoniczny (`https://eventtime.zgora.pl`) |
| `social` | Facebook, Instagram, TikTok |

### Formularz kontaktowy (Formspree)

1. Załóż konto na [formspree.io](https://formspree.io).
2. Utwórz formularz i skopiuj endpoint (`https://formspree.io/f/…`).
3. Wklej go w `.env` → `PUBLIC_FORMSPREE_ENDPOINT` (nie commituj tego pliku).
4. Zbuduj projekt ponownie (`npm run build`) i wgraj `dist/`.

Dopóki endpoint zawiera placeholder `YOUR_FORM_ID`, formularz nie wysyła wiadomości.

## Rozszerzanie projektu

### Nowa atrakcja (Animacje)

1. Dodaj klucz w `src/i18n/translations/pl.json` → `animacje.attractions`
2. Przetłumacz ten sam klucz w `de.json`, `en.json`, `uk.json`
3. Dodaj wpis w `src/i18n/data.ts` → `attractionImages` / `attractionPlaceholders`

### Nowe zdjęcie w galerii

1. Umieść plik w `public/images/`
2. Dodaj wpis w `src/data/gallery.json` (pole `tags` steruje filtrowaniem na podstronach)

## Wdrożenie

Instrukcja dla administratora serwera (nginx, Apache, HTTPS, przekierowania): **[deploy/README.md](deploy/README.md)**

Tymczasowy podgląd online (bez własnej domeny): Netlify Drop, Cloudflare Pages lub Vercel - build command: `npm run build`, output: `dist`.

## Checklista przed publikacją

Szablon: **[HANDOFF.example.md](HANDOFF.example.md)**. Pełna wersja z listą zdjęć jest w lokalnym `HANDOFF.md` (poza repozytorium).

## Autor

Projekt osobisty - strona firmowa stworzona jako prezent dla rodzinnej firmy eventowej. Repozytorium służy dokumentacji technicznej i prezentacji umiejętności frontendowych (Astro, TypeScript, i18n, responsywny UI).

## Licencja

Kod źródłowy udostępniony w celach portfolio. Treści marketingowe, zdjęcia realizacji i identyfikacja wizualna marki Event Time pozostają własnością firmy Event Time.
