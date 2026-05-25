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
- `ventures` — Building section (Substrate)
- `work` — Work grid
- `notes` — long-form essays rendered at `/notes/[slug]`

Deck content lives in [`app/deck/page.tsx`](app/deck/page.tsx).
