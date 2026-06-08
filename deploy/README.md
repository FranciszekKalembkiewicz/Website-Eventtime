# Wdrożenie strony Event Time

## Dla administratora serwera

Strona Event Time to **statyczna witryna HTML** — folder z plikami, bez bazy danych i bez Node.js na serwerze.

### Wymagania

- Dowolny serwer WWW (Apache, nginx, hosting współdzielony)
- Obsługa HTTPS (certyfikat SSL)
- Brak wymagań po stronie backendu

### Kroki wdrożenia

1. Rozpakuj archiwum `eventtime-strona.zip` do katalogu głównego strony (np. `public_html/` lub `/var/www/eventtime/`).
2. Upewnij się, że plik `index.html` znajduje się w katalogu root domeny.
3. Ustaw domenę **eventtime.zgora.pl** na ten katalog.
4. Włącz przekierowanie HTTP → HTTPS.
5. Sprawdź, czy strona działa pod `https://eventtime.zgora.pl`.

### Przekierowanie z bardzofajnyklaun.pl

Ustaw **przekierowanie 301** (stałe) z domeny `bardzofajnyklaun.pl` (oraz `www.bardzofajnyklaun.pl`) na:

```
https://eventtime.zgora.pl/animacje
```

#### Przykład nginx

```nginx
server {
    listen 443 ssl;
    server_name bardzofajnyklaun.pl www.bardzofajnyklaun.pl;
    return 301 https://eventtime.zgora.pl/animacje;
}
```

#### Przykład Apache (.htaccess)

```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^(www\.)?bardzofajnyklaun\.pl$ [NC]
RewriteRule ^(.*)$ https://eventtime.zgora.pl/animacje [R=301,L]
```

### Przykład konfiguracji nginx (eventtime.zgora.pl)

```nginx
server {
    listen 443 ssl http2;
    server_name eventtime.zgora.pl www.eventtime.zgora.pl;

    root /var/www/eventtime;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    # Cache statycznych zasobów
    location ~* \.(css|js|svg|png|jpg|jpeg|webp|ico|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}

server {
    listen 80;
    server_name eventtime.zgora.pl www.eventtime.zgora.pl;
    return 301 https://$host$request_uri;
}
```

---

## Pytania do administratora (wyślij przed wdrożeniem)

> Cześć,
>
> Przygotowujemy nową stronę firmową Event Time (zastępuje starą stronę z WebWave). Będzie to **statyczna strona HTML** — folder z plikami, bez bazy danych i bez Node.js.
>
> Proszę o informacje:
>
> 1. Jaki macie hosting? (współdzielony z FTP / VPS z SSH / inny)
> 2. Jaki serwer WWW? (Apache / nginx / inny)
> 3. Czy możecie wskazać katalog, do którego wrzucić pliki strony (np. `public_html` lub `/var/www/eventtime`)?
> 4. Czy macie dostęp do ustawień DNS domeny **eventtime.zgora.pl**?
> 5. Czy SSL (HTTPS) jest już skonfigurowany, czy trzeba go włączyć?
> 6. Czy na hostingu działa **PHP**? (opcjonalnie — formularz korzysta z zewnętrznej usługi Formspree, więc PHP nie jest wymagane)
>
> Gdy strona będzie gotowa, prześlę Wam **archiwum ZIP** z plikami do wgrania. Trzeba będzie:
>
> - wgrać pliki do katalogu strony,
> - ustawić domenę **eventtime.zgora.pl** na ten katalog,
> - upewnić się, że działa przekierowanie HTTP → HTTPS,
> - ustawić przekierowanie 301 z **bardzofajnyklaun.pl** na **https://eventtime.zgora.pl/animacje**.
>
> Stara strona na WebWave może zostać wyłączona po przełączeniu DNS.

---

## Budowanie paczki ZIP (dla developera)

```bash
npm install
npm run build
cd dist && zip -r ../eventtime-strona.zip . && cd ..
```

Gotowe archiwum: `eventtime-strona.zip` — wyślij je administratorowi serwera.

---

## Konfiguracja do aktualizacji po wdrożeniu

Plik `src/config/site.ts` zawiera dane do podmiany:

- `allegroUrl` — link do profilu Allegro
- `formspreeEndpoint` — endpoint formularza (zarejestruj się na [formspree.io](https://formspree.io) i podmień ID)
- `social` — linki do profili social media (Facebook, Instagram, TikTok)
- `email` — główny adres kontaktowy (patrz `src/config/site.ts`)
- `PUBLIC_FORMSPREE_ENDPOINT` w `.env` — endpoint formularza (opcjonalnie zamiast wpisu w `site.ts`)

Po zmianie uruchom ponownie `npm run build` i wyślij nowe ZIP.
