# Yassin Al-Yassin Personal Site

Founder site for Yassin Al-Yassin. Next.js 15, React 19, TypeScript, Tailwind CSS v4, Motion, self-hosted Geist + Fraunces.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Routes

- `/` — main page (Hero, Building, Work, Notes, Footer)
- `/deck` — Substrate pitch deck
- `/notes/[slug]` — long-form notes

## Content

All copy lives in [`lib/content.ts`](lib/content.ts):

- `profile` — name, tagline, meta, socials
- `ventures` — Building section (currently Substrate only)
- `work` — Work grid (8 entries, 4×2)
- `notes` — long-form essays rendered at `/notes/[slug]`
- `deckAgents`, `deckEvidence` — `/deck` page

Edit there; components read from it.
