# Dr. Maya Reynolds, PsyD - Homepage Clone & Redesign

Stage 2 assignment for the Grow My Therapy front-end internship: clone a Squarespace therapy homepage, then redesign it for a (fictional) Santa Monica psychologist using the same layout.

| | |
|---|---|
| **Redesign** | _add Vercel URL_ → `/` |
| **Template clone** | _add Vercel URL_ → `/clone` |
| **Video walkthrough** | _add Loom link_ |
| **Original template** | https://www.conejovalleycounseling.com/home |

## What's here

- **`/clone`** recreates the Conejo Valley Family Counseling homepage: same section order, grid, spacing, type scale and breakpoints, with the original copy and images. It's `noindex`.
- **`/`** is the same layout rebuilt for Dr. Maya Reynolds: a new palette, SEO copy written only from her profile, new imagery, a new **Our Office** section and an FAQ.
- Both pages share the header (desktop dropdowns and a full-screen mobile menu), footer, and every section component.

## How it's built

**One set of components, two content files, two themes.**

```
content/clone.ts ─┐                          ┌─ [data-theme="clone"]
                  ├─▶ <HomePage content /> ◀─┤
content/maya.ts  ─┘                          └─ [data-theme="maya"]
```

- **Components hold layout only.** Words and images come from a typed content file (`content/types.ts`), and colors come from CSS variables. Switching the theme attribute re-skins the whole page.
- **Layout matches the template.** Squarespace's Fluid Engine places each block on an 8-column (mobile) or 24-column (desktop) grid. `components/ui/Fluid.tsx` does the same with CSS grid, using the original block coordinates, so overlaps and proportions match. I pulled the coordinates from the live page's markup and computed styles with Playwright.
- **Type scale is the template's own formula.** Sizes scale with viewport width on desktop and cap at 1800px. On the redesign, phones use a width-based scale so text stays comfortable from an iPhone SE up.
- **Inline rich text:** in content strings, `*word*` renders the handwritten script accent (e.g. "finally feel *at ease*") and `_text_` renders italics.

### Stack

Next.js 16 (App Router, fully static), React 19, TypeScript, Tailwind CSS v4, `next/font`, `next/image`, and lucide-react for icons. Playwright is used for the visual QA scripts only.

## Design decisions (redesign)

**Palette: "Santa Monica Morning."** The colors come from Maya's own office photos, so the site feels like her space.

| Role | Color | Where it comes from |
|---|---|---|
| Primary | Sage `#56705F` / deep sage `#4A6152` | the olive tree |
| Secondary | Linen `#F8F4EE`, sage mist `#DDE5DF` | the curtains, soft daylight |
| Accent | Terracotta `#B5694A` | the exposed brick |
| Text | Forest charcoal `#2F3A34` | |

Every text pairing meets WCAG AA. Terracotta is only used for large script words, where the 3:1 large-text threshold applies.

**Type.** The template uses Beaufort Pro and a licensed script font. I matched them with open fonts: Spectral Light for headings (picked by comparing line wraps against the original), Babylonica for the script accents, and Mulish (formerly Muli) for body text.

**Copy.** Every claim traces back to the profile: adults, anxiety, panic, trauma and burnout; CBT, EMDR, mindfulness and body-oriented work; in-person in Santa Monica plus telehealth across California. The H1 and several headings carry "anxiety & trauma therapy" and "Santa Monica". The phone number and email aren't in the profile, so they're placeholders (flagged in `content/maya.ts`).

**Section mapping.** Maya only works with adults, so the template's Adults / Couples / Children cards became her three services. Its four specialties became her four methods. Our Office sits right after her bio, so the page moves from person to place to method. It reuses the hero's overlapping-photo layout, mirrored, with her two office photos.

## SEO, accessibility, performance

- Title and meta description targeting "anxiety & trauma therapist in Santa Monica". One H1, a clean heading outline, and descriptive alt text on every image.
- JSON-LD for `MedicalBusiness`, `Person` and `FAQPage`, plus a sitemap, robots.txt and an Open Graph image. `/clone` is excluded from indexing.
- Keyboard-friendly navigation: dropdowns open on hover, focus or click and close on Esc. While the mobile menu is open, scroll is locked and the page behind it is inert. There's a skip link, and reduced motion is respected.
- Lighthouse (mobile, production build): Performance 93, Accessibility 100, Best Practices 100, SEO 100.
- Tested from iPhone SE (320px) to 2560px monitors, in Chromium and WebKit, with no horizontal overflow at any size.

## Running locally

Requires Node 20.9 or newer.

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build && npm run start   # production build
npm run lint
```

Set `NEXT_PUBLIC_SITE_URL` in production so canonical links, the sitemap and structured data use the real domain. On Vercel, the production URL is picked up automatically if it isn't set.

### QA scripts

```bash
npx tsx scripts/measure.ts                                   # capture the original template's screenshots and computed styles
npx tsx scripts/screenshot.ts http://localhost:3000/clone    # compare section heights with the original
npx tsx scripts/interactions.ts http://localhost:3000/ Office   # header, menu and keyboard checks
```

## Project structure

```
app/            routes (/, /clone), global styles and themes, metadata, sitemap, robots, OG image
components/
  layout/       Header, Footer
  sections/     Hero, Intro, CardTrio, QuoteBanner, TagCloud, Feature, Office, StatementBanner,
                SpecialtyGrid, Faq, ScheduleCta
  ui/           Fluid grid, Button, FluidImage, RichText, Wordmark
  seo/          JSON-LD
content/        types.ts, clone.ts, maya.ts
public/images/  clone/ (template assets), maya/ (profile photos + stock)
scripts/        Playwright QA scripts
docs/           PRD, technical design, implementation plan, image credits
```
