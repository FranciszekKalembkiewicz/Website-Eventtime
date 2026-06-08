# Tłumaczenia strony Event Time

## Zasada: polski jest źródłem prawdy

1. **Zawsze edytuj najpierw** [`translations/pl.json`](translations/pl.json)
2. Potem przenieś zmiany do: `de.json`, `en.json`, `uk.json`
3. Struktura kluczy musi być identyczna we wszystkich plikach

## Języki i adresy URL

| Język | Kod | Przykład URL |
|-------|-----|--------------|
| Polski (domyślny) | `pl` | `/animacje` |
| Niemiecki | `de` | `/de/animacje` |
| Angielski | `en` | `/en/animacje` |
| Ukraiński | `uk` | `/uk/animacje` |

## Zmienne w tekstach

Używaj `{years}`, `{phone}` w JSON i funkcji `fmt()` w komponentach:

```ts
import { fmt } from '../i18n/utils';
fmt(tr.hero.badgeYears, { years: site.yearsOnMarket });
```

## Struktura plików stron

Polski (domyślny) — `src/pages/`. Pozostałe języki — `src/pages/de/`, `en/`, `uk/`.
Logika stron jest w `src/views/`; pliki w `pages/` to cienkie wrappery wymagane przez Astro.

Przy dodawaniu nowej strony:
1. Utwórz widok w `src/views/`
2. Dodaj wrapper w `src/pages/` (PL)
3. Dodaj ten sam wrapper w `de/`, `en/`, `uk/`

## Dodawanie nowego tekstu

1. Dodaj klucz w `pl.json`
2. Dodaj ten sam klucz w `de.json`, `en.json`, `uk.json`
3. Użyj `tr.sekcja.klucz` w komponencie `.astro`

## Zdjęcia i dane strukturalne

- Obrazki atrakcji/imprez: [`data.ts`](data.ts) — ID wspólne, teksty z tłumaczeń
- Galeria: [`../data/gallery.json`](../data/gallery.json) — na razie wspólna (alt do rozbudowy)
