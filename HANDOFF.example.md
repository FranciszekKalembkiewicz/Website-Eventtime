# Event Time — handoff (szablon)

> **Uwaga:** Ten plik to szablon. Pełna checklista z danymi firmy jest w lokalnym `HANDOFF.md` (poza repozytorium — patrz `.gitignore`).

## Checklist przed publikacją

1. **Formspree** — załóż konto, skopiuj endpoint do `.env` jako `PUBLIC_FORMSPREE_ENDPOINT`
2. **Allegro** — podmień `allegroUrl` w `src/config/site.ts`
3. **Social media** — zweryfikuj linki w `site.ts`
4. **Domena** — wgraj `dist/` na hosting, włącz HTTPS
5. **Przekierowanie** — ustaw 301 ze starej domeny (jeśli dotyczy)
6. **Zdjęcia** — uzupełnij brakujące sloty (patrz lokalny HANDOFF.md)

Szczegóły wdrożenia: [deploy/README.md](deploy/README.md)
