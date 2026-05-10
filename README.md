# Djordje Boris Portfolio

React + TypeScript + Tailwind portfolio sa više stranica, projektima, blog bilješkama i kontakt sekcijom.

## Pokretanje

```bash
npm install
npm run dev
```

Otvori lokalni URL koji Vite prikaže u terminalu, najčešće:

```bash
http://127.0.0.1:5173/
```

## Step by step uređivanje

1. Uredi osnovne podatke u `src/App.tsx`
   - ime i inicijale u navigaciji
   - titulu ispod imena
   - email, GitHub i LinkedIn linkove
   - tekst u hero sekciji

2. Dodaj svoje projekte u `src/data/portfolio.ts`
   - `title`
   - `summary`
   - `details`
   - `stack`
   - `link`
   - `next`

3. Popuni stranice
   - `/about` za biografiju
   - `/projects` za listu projekata
   - `/projects/:slug` za detalje projekta
   - `/skills` za tehnologije
   - `/experience` za iskustvo, praksu ili kurseve
   - `/blog` za bilješke
   - `/contact` za kontakt

4. Provjeri projekat

```bash
npm run lint
npm run build
```

5. Deploy
   - Vercel: importuj GitHub repo i deploy će raditi automatski
   - Netlify: build command `npm run build`, publish folder `dist`
   - GitHub Pages: koristi Vite GitHub Pages setup

## Struktura

```txt
src/
  App.tsx
  index.css
  data/
    portfolio.ts
```

`App.tsx` sadrži layout, routing i stranice. `portfolio.ts` sadrži podatke koje najčešće mijenjaš.
