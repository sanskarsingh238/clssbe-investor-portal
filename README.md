# CLSSBE Investor & CSR Portal

A single-page React + Vite + Tailwind investor/CSR portal for the **Canis Lupus Society Of
Skill Based Education (CLSSBE)**, built in the style of institutional investor sites like
Invest India.

## Design system

- **Palette:** deep emerald (`#0B4433`), rust/action orange (`#C1521A`), cream backgrounds
  (`#F7F3E9`), charcoal text (`#1F2420`), a restrained gold accent (`#B8902E`) used only for the
  seal mark and compliance detailing.
- **Type:** Fraunces (display), Inter (body), IBM Plex Mono (data, badges, "registry" eyebrows).
- **Signature element:** a certificate-style seal (`SealMark`), built from a low-poly wolf mark
  and circular registry text, reused in the navbar, hero, and every compliance badge so brand
  and "we are legitimately registered" read as one continuous idea.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (defaults to http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Connecting real Supabase

The Auth side-sheet and the partnership Query form both run against
`src/lib/supabaseClient.js`. Out of the box, with no environment variables set, they use an
in-memory **mock** backend (clearly labelled "Demo mode" in the UI) so the app works
immediately with no setup.

To go live:

1. Create a Supabase project.
2. Create the query table:

   ```sql
   create table client_queries (
     id uuid primary key default gen_random_uuid(),
     name text not null,
     organization text not null,
     email text not null,
     investment_tier text not null,
     message text,
     created_at timestamptz default now()
   );
   ```

3. Copy `.env.example` to `.env` and fill in your project's URL and anon key:

   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

4. Restart `npm run dev`. The app automatically switches from the mock client to the real
   Supabase client — no other code changes needed.

## Project structure

```
src/
  components/       All page sections + the SealMark signature element
  data/content.js   Single source of truth for org details, verticals, events, badges
  lib/supabaseClient.js  Real/mock Supabase switch
  App.jsx           Page composition
  index.css         Tailwind + base styles (focus rings, reduced-motion, eyebrow/cert utilities)
```

## Notes & next steps

- The "Download Pitch Deck" button opens a pre-filled `mailto:` request — swap in a direct PDF
  link once a deck exists at a stable URL.
- The 80G tax-benefit calculator is illustrative only (standard 50% deduction assumption) and
  says so in the UI — it is not tax advice.
- Event data, compliance badges, and contact details all live in `src/data/content.js` — edit
  that one file to update copy across the whole site.
