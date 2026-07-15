# Business Technology Landing Page

A single-page Next.js site built for a one-week campaign: cold traffic from a
Cambodian news site banner → qualified Telegram conversation.

## ⚠️ Before you launch: get the Khmer copy reviewed

The copy in `lib/config.ts` is Khmer-first (see the comment block at the top
of that file for why). **It was drafted by an AI and has not been checked by
a native Khmer speaker.** Have someone fluent read through it — especially
the hero headline, the final CTA, and the Telegram message templates — before
this goes live on the banner. Natural phrasing matters more than literal
correctness here.

Common English/loanwords (Website, AI, QR, Telegram, ESP32, Demo, App) are
kept in Latin script on purpose, since that's how people actually say them —
don't "fix" those back into Khmer.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · lucide-react

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # run the production build locally
```

> Note: `next/font/google` needs network access to fonts.googleapis.com at
> build time. If you're building in a sandboxed/offline environment and it
> fails, that's a network restriction — it will build fine on your machine,
> in CI, or on Vercel.

## Deploying

The fastest path is [Vercel](https://vercel.com): push this to a GitHub repo,
import it in Vercel, done. No special config needed.

## Before you launch — replace these

Everything editable lives in **`lib/config.ts`**. You should not need to touch
component code to update copy, links, or contact info.

| What | Where | Notes |
|---|---|---|
| Brand name & domain | `lib/config.ts` → `BRAND` | Shows in header, footer, meta tags |
| Telegram username | `lib/config.ts` → `CONTACT.telegramUsername` | No `@`, no URL — just the handle |
| Contact email | `lib/config.ts` → `CONTACT.email` | Used in footer + `mailto:` link |
| Project screenshots | `public/work/*.svg` | Replace the 4 placeholder SVGs with real screenshots (same filenames, or update paths in `PROJECTS`) |
| Demo links | `lib/config.ts` → `PROJECTS[].demoUrl` | Leave blank (`""`) to hide the "View demo" link on that card |
| OG image | `public/og-image.png` | Add a real 1200×630 image; referenced in `lib/config.ts` → `SEO.ogImage` |
| Favicon | `app/favicon.ico` | Currently the default Next.js icon |
| Analytics | `app/layout.tsx` + `lib/analytics.ts` | See below |

Search the codebase for `TODO` comments — every placeholder that needs a real
value before launch is flagged with one.

## Adding analytics

`lib/analytics.ts` exports a single `track(event, payload)` function used
everywhere a CTA is clicked. It already knows how to forward events to
`window.gtag`, `window.plausible`, and `window.fbq` if they exist.

To wire one up:

1. Add the provider's script tag to `app/layout.tsx` (e.g. the GA4 snippet,
   or the Plausible `<script>` tag).
2. That's it — no other file needs to change. Events already firing:
   - `header_telegram_click`
   - `hero_telegram_click`
   - `hero_view_work_click`
   - `project_demo_click`
   - `final_telegram_click`
   - `business_type_selected`

## UTM tracking

`lib/analytics.ts` also exports `getUtmParams()`, which reads
`utm_source` / `utm_medium` / `utm_campaign` / `utm_content` / `utm_term` from
the URL. Use it if you want to pass campaign parameters into the Telegram
message or into analytics event payloads.

## Folder structure

```
app/
  layout.tsx        — fonts, metadata, Open Graph
  page.tsx          — assembles all sections in order
  globals.css       — design tokens (colors, focus states, reduced-motion)
components/
  Header.tsx
  Hero.tsx
  StatusPanel.tsx       — the rotating "systems status" hero visual
  ProblemsSection.tsx
  SolutionsSection.tsx
  WorkSection.tsx
  WhyUsSection.tsx
  FinalCtaSection.tsx   — includes the business-type selector
  Footer.tsx
lib/
  config.ts         — all editable content lives here
  analytics.ts       — tracking abstraction
public/
  work/             — project screenshot placeholders (replace before launch)
```

## Design notes

- Colors, type, and the signature "live systems status" panel are documented
  inline in `app/globals.css` and `components/StatusPanel.tsx`.
- Reduced-motion is respected globally (see `globals.css`).
- The status panel animation and section reveal animations are the only
  motion in the page — intentionally restrained.
# landing-page
