# Decisions — Bikult Redesign
_Why we chose X over Y. AI reads this before suggesting alternatives._

---

## Framework
**Next.js 14 App Router** — not Pages Router, not Vite, not Remix
- Vercel native, best DX for deployment
- App Router = future-proof, server components ready

## Styling
**Tailwind CSS** — not CSS Modules, not styled-components, not Sass
- Faster iteration, no context switching between files
- Copilot autocomplete works great with Tailwind

## Language
**TypeScript** — not plain JS
- Catches errors before runtime
- Better Copilot suggestions with types

## Content
**TS constants in /content folder** — not a CMS, not hardcoded in components
- Easy to edit without touching components
- No database needed for a small nonprofit site
- Can migrate to a CMS later if needed

## Images
**next/image** — not plain <img>
- Automatic optimization and lazy loading
- Required for Vercel performance

## Deployment
**Vercel** — not Netlify, not self-hosted
- Zero config with Next.js
- Free tier sufficient for nonprofit

## Navigation
**Shared layout component** — not per-page nav
- Single source of truth
- Active state handled in one place

## Design
**Warm teal + amber** — not the original site's colors
- Teal = education, trust, culture
- Amber = warmth, community
- Avoids generic blue corporate look

---
_Add new decisions here as the project evolves._
_Format: ## Topic → **Choice** — not alternative → reason_