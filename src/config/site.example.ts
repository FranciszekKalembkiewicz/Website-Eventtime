/**
 * Szablon konfiguracji - skopiuj do site.ts i uzupełnij danymi firmy.
 * Plik site.ts jest w .gitignore i nie trafia do repozytorium.
 */
export const site = {
  name: 'Event Time',
  tagline: 'Czas na Twoją imprezę!',
  description:
    'Event Time - sprawdzona firma eventowa z Zielonej Góry. Ponad 20 lat animacji, dekoracji balonowych i fotobudek 360°.',
  phone: '+48 000 000 000',
  email: 'kontakt@example.com',
  location: 'Polska i Niemcy · baza: Zielona Góra',
  allegroUrl: 'https://allegro.pl',
  logo: '/images/logo.png',
  yearsOnMarket: 20,
  founder: 'Imię Nazwisko',
  // Preferowany sposób: ustaw PUBLIC_FORMSPREE_ENDPOINT w .env (patrz .env.example)
  formspreeEndpoint:
    import.meta.env.PUBLIC_FORMSPREE_ENDPOINT ?? 'https://formspree.io/f/YOUR_FORM_ID',
  siteUrl: 'https://eventtime.zgora.pl',
  social: {
    facebook: 'https://www.facebook.com/your-page',
    instagram: 'https://www.instagram.com/your-profile',
    tiktok: 'https://www.tiktok.com/@your-profile',
  },
  company: {
    legalName: 'Nazwa firmy / działalności',
    nip: '0000000000',
    regon: '000000000',
    address: 'ul. Przykładowa 1, 00-000 Miasto',
  },
} as const;

/** Kolejność: główne usługi najpierw, sklep i kontakt na końcu */
export const navItems = [
  { label: 'Strona główna', href: '/' },
  { label: 'Animacje', href: '/animacje' },
  { label: 'Dekoracje', href: '/dekoracje' },
  { label: 'Fotobudka', href: '/fotobudka' },
  { label: 'Sklep online', href: site.allegroUrl, external: true },
  { label: 'O nas', href: '/o-nas' },
] as const;
