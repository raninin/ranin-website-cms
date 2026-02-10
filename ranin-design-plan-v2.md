# 🏗️ RANIN INTERNATIONAL — Landing Page UI Design Plan (v2)
### *Aligned with Existing Codebase*
### *Next.js 16 · shadcn/ui (radix-lyra) · Tailwind CSS 4 · Framer Motion · GSAP · Lenis*

---

## 1. DESIGN PHILOSOPHY & CREATIVE DIRECTION

### The Concept: "Engineered Elegance"

Ranin's website should feel like a **precision-engineered machine** — every element placed with industrial intentionality, but wrapped in a cinematic, editorial skin. Think: *the confidence of a Fortune 500 annual report meets the motion language of an Awwwards SOTD.*

**Tone:** Luxury-Industrial — Dark, authoritative, and commanding, with bursts of kinetic energy. Not sterile-corporate. Not startup-playful. This is a company that builds things that *last*.

**Your codebase already enforces this:** every shadcn component uses `rounded-none`, giving the entire UI a brutalist, engineered edge. We lean into this hard — sharp corners, precise grids, mechanical motion.

**What Makes It Unforgettable:**
- A full-screen **cinematic hero with GSAP SplitText word reveal** (industrial footage playing behind split-animated typography)
- **Horizontal scroll service showcase** pinned with GSAP ScrollTrigger — feels like flipping through an engineering blueprint
- **Magnetic cursor interactions** on key CTAs and service cards
- **Odometer-style counter animations** on stats (mechanical, not simple count-up)
- A persistent **"blueprint grid"** overlay motif that subtly appears across sections

---

## 2. CODEBASE AUDIT — WHAT WE ALREADY HAVE

### ✅ Already Configured (No changes needed)
| Asset | Details |
|-------|---------|
| Framework | **Next.js 16.1.6** with App Router, React 19.2.3 |
| Styling | **Tailwind CSS 4** (`@import "tailwindcss"`) + oklch color system |
| Component Library | **shadcn/ui** `radix-lyra` style — `rounded-none` throughout |
| RTL Support | `"rtl": true` in `components.json` + `DirectionProvider` component |
| Icon Library | **Lucide React** (`lucide-react@0.563.0`) |
| CSS Animations | **tw-animate-css** already installed |
| Utilities | `cn()` helper via `clsx` + `tailwind-merge` |
| Primitives | `radix-ui@1.4.3` + `@base-ui/react@1.1.0` |

### ✅ Existing UI Components (Will reuse & extend)
| Component | Usage in Landing Page |
|-----------|----------------------|
| `Button` | CTAs (hero, CTA strip, forms) — variants: default, outline, ghost |
| `Card` + `CardHeader/Footer/Content/Action` | Service cards, project cards, value cards |
| `Badge` | Sector tags, service labels, status indicators |
| `Input` + `Textarea` + `Field/FieldGroup/FieldLabel` | Contact form |
| `Select` | Contact form "Service Needed" dropdown |
| `DropdownMenu` (full with sub-menus, checkbox, radio) | Mega menu foundation |
| `AlertDialog` | Quote request confirmation modal |
| `Combobox` | Enhanced search/filter if needed |
| `Separator` | Section dividers |
| `Label` | Form labels |
| `DirectionProvider` + `useDirection` | RTL language switching |

### 🆕 Need to Install
| Package | Purpose |
|---------|---------|
| `framer-motion` | Declarative animations, layout transitions, `whileInView`, `AnimatePresence` |
| `gsap` + `@gsap/react` | ScrollTrigger, SplitText, horizontal scroll pinning, complex timelines |
| `lenis` | Smooth scroll behavior (integrates with GSAP ScrollTrigger) |
| `next-intl` | i18n for EN/AR language support (leverages existing RTL config) |
| `react-hook-form` + `zod` + `@hookform/resolvers` | Contact form validation |
| `embla-carousel-react` | Client logo marquee, mobile service carousel |

### 📝 Font Changes Required in `layout.tsx`
Currently loaded: `Inter`, `Geist`, `Geist_Mono` — all via `next/font/google`.

**Updated font strategy (see Section 3 below):**
- **Add:** `Bebas_Neue` from `next/font/google` (display/hero)
- **Keep:** `Inter` as body/UI font (`--font-sans`)
- **Keep:** `Geist_Mono` as technical/label font (`--font-geist-mono`)
- **Remove:** `Geist` sans — redundant with `Inter` already being the primary sans. Frees up a font slot.

---

## 3. BRAND SYSTEM & DESIGN TOKENS

### Color Palette (oklch — matching your existing system)

Your codebase uses oklch throughout. We extend the existing `:root` and `.dark` variables with Ranin's brand colors:

```css
/* NEW: Add to :root in globals.css alongside existing shadcn tokens */
:root {
  /* --- Ranin Brand Tokens --- */
  --ranin-navy:     oklch(0.15 0.03 250);    /* #0A1628 — primary dark bg */
  --ranin-blue:     oklch(0.30 0.06 250);    /* #1E3A5F — secondary surfaces */
  --ranin-accent:   oklch(0.55 0.15 240);    /* #2E86DE — CTAs, links (from logo) */
  --ranin-red:      oklch(0.50 0.18 25);     /* #C0392B — hover accents (from logo) */
  --ranin-steel:    oklch(0.62 0.02 250);    /* #8395A7 — muted text on dark */
  --ranin-light:    oklch(0.96 0.005 250);   /* #F0F3F7 — light section bg */
  --ranin-gold:     oklch(0.72 0.12 80);     /* #D4A853 — Vision 2030 accent */
}

/* Then OVERRIDE shadcn dark theme tokens to map to Ranin brand */
.dark {
  --background:           var(--ranin-navy);
  --card:                 var(--ranin-blue);
  --primary:              var(--ranin-accent);
  --primary-foreground:   oklch(1 0 0);
  --accent:               var(--ranin-blue);
  --accent-foreground:    oklch(0.985 0 0);
  --muted-foreground:     var(--ranin-steel);
  /* ...rest inherit from existing dark theme */
}
```

**Approach:** We add custom `--ranin-*` tokens but also wire them into shadcn's existing `--primary`, `--accent`, etc. so all existing components (Button, Card, Badge) automatically pick up the brand colors without modifying component code.

### Typography (All Open Source — Google Fonts / OFL)

| Role | Font | License | Variable | Weight | Size Range |
|------|------|---------|----------|--------|------------|
| Display / H1 | **Bebas Neue** | OFL (Google Fonts) | `--font-display` | 400 (single weight) | 64–120px |
| Headlines / H2–H4 | **Inter** *(already loaded)* | OFL | `--font-sans` | 600–700 | 32–56px |
| Body / Paragraphs | **Inter** *(already loaded)* | OFL | `--font-sans` | 400–500 | 16–18px |
| Labels / Captions / Numbers | **Geist Mono** *(already loaded)* | OFL | `--font-geist-mono` | 400 | 12–14px |

**Why Bebas Neue:**
- 100% open source (SIL Open Font License) via Google Fonts
- Tall, condensed, all-caps by nature — perfect for industrial/construction authority
- Pairs beautifully with Inter's clean geometry
- Single weight (400) = tiny file size, fast loading
- The sharp, vertical letterforms match your `rounded-none` component aesthetic

**Updated `layout.tsx`:**
```tsx
import { Bebas_Neue, Inter, Geist_Mono } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// In <html>:
<html lang="en" className={`${bebasNeue.variable} ${inter.variable} ${geistMono.variable}`}>
```

**Updated `globals.css` `@theme inline`:**
```css
@theme inline {
  --font-sans: var(--font-sans);
  --font-mono: var(--font-geist-mono);
  --font-display: var(--font-display);  /* NEW */
}
```

### Spacing & Grid (Uses existing Tailwind 4 spacing)
- **12-column grid** with `gap-6` (24px) gutters on desktop, 4-column on mobile
- **Max content width:** `max-w-7xl` (1280px) for content, hero sections go full-bleed
- **Section padding:** `py-32` to `py-40` (128–160px) desktop, `py-20` (80px) mobile
- **Component spacing rhythm:** Tailwind's 8px base already in play (2, 4, 6, 8, 12, 16, 24, 32)

---

## 4. PAGE STRUCTURE — SECTION-BY-SECTION BREAKDOWN

The landing page (Home `/`) is structured as **10 distinct sections**, each with its own animation choreography. All sections use existing shadcn components where possible.

---

### SECTION 1: NAVIGATION BAR
**Component:** `<Navbar />`
**Reuses:** `Button` (CTA), `DropdownMenu` primitives (mega menu base), `Badge` (language toggle)

**Layout:**
- Fixed top, transparent on hero → solid `--ranin-navy` on scroll
- Left: Ranin logo (SVG, animated stroke draw-on at load)
- Center: Nav links — Home · About · Services (mega dropdown) · Projects · Contact
- Right: "Request a Quote" `<Button>` + Language toggle EN/AR `<Badge variant="outline">`

**Interactions & Animations:**
- Logo SVG path draws in on page load (GSAP `strokeDashoffset` animation)
- Nav background transitions with `backdrop-blur-xl` + opacity on scroll (Framer Motion `useScroll` + `useTransform`)
- Nav links: **clip-path underline reveal** on hover (pure CSS)
- Services link triggers a **mega menu** — built on existing `DropdownMenuContent` / `DropdownMenuGroup` components, restyled to full-width panel with 3x2 service card grid
- Each mega menu item reuses `Card` component (compact `size="sm"` variant)
- Mobile: Hamburger → full-screen overlay with staggered text reveals (Framer `AnimatePresence`)
- CTA `<Button>`: subtle gradient shimmer on idle (CSS `@keyframes`), scale + glow on hover

**Technical Notes:**
- Language toggle dispatches to `next-intl` and triggers `DirectionProvider` for RTL
- Mega menu extends existing `DropdownMenu` components — no new primitives needed

---

### SECTION 2: HERO
**Component:** `<Hero />`
**Reuses:** `Button` (CTAs, default + outline variants)

**Layout:**
- Full viewport height (100dvh), full bleed
- Layered composition:
  - **Layer 0:** Looping `<video>` background (industrial footage) with dark gradient overlay
  - **Layer 1:** Animated SVG blueprint grid overlay (subtle, pulsing opacity)
  - **Layer 2:** Content centered vertically:
    - Label: `SINCE 2010 · KINGDOM OF SAUDI ARABIA` — `font-mono` (Geist Mono), `tracking-[0.3em]`, `text-xs`
    - H1: `"INDUSTRIAL & CONSTRUCTION SOLUTIONS DELIVERED WITH EXCELLENCE"` — `font-display` (Bebas Neue), ~80–100px, **GSAP SplitText word-by-word reveal**
    - Subheading: Inter, `text-lg`, `text-ranin-steel`, fades in after H1
    - Two `<Button>` CTAs: `variant="default"` ("Request a Quote") + `variant="outline"` ("Explore Services")
  - **Layer 3:** Scroll indicator at bottom — animated bouncing chevron (Lucide `ChevronDown`)

**Animation Choreography (GSAP Timeline):**
1. `0.0s` — Video fades in from black
2. `0.3s` — Blueprint grid overlay fades in
3. `0.5s` — Label fades up (Framer Motion, 30px travel)
4. `0.8s` — H1 words split-reveal (GSAP SplitText, 60px from below, 0.08s stagger, `power4.out`)
5. `1.6s` — Subheading fades up (Framer Motion, 40px travel)
6. `2.0s` — CTAs slide in from bottom (Framer Motion spring)
7. `2.5s` — Scroll indicator pulses in

**Micro-interactions:**
- Both `<Button>` CTAs wrapped in `<MagneticButton>` (cursor-following effect via `useMotionValue`)
- Default CTA: gradient shift on hover. Outline CTA: fill from left via `clip-path`
- Parallax: video layer moves at 0.5x scroll speed vs text (GSAP ScrollTrigger `useTransform`)

---

### SECTION 3: TRUST METRICS BAR
**Component:** `<TrustBar />`

**Layout:**
- Narrow horizontal strip, `bg-ranin-navy` with `border-t border-b border-ranin-blue`
- 4 metrics in a row: `15+ Years` · `500+ Projects` · `6 Core Services` · `24/7 Support`
- Number: `font-display` (Bebas Neue), `text-5xl` + label below: `font-sans` (Inter), `text-sm`, `text-ranin-steel`
- Separated by `<Separator orientation="vertical" />` (existing component, styled with gradient opacity)

**Animations:**
- Numbers: **odometer/mechanical counter** — digits roll in from top (custom Framer component or GSAP)
- Triggered on scroll-into-view (`whileInView`)
- Each counter staggers 0.15s after previous
- Bar slides up from behind hero with slight overlap (GSAP ScrollTrigger)

---

### SECTION 4: SERVICES SHOWCASE
**Component:** `<ServicesShowcase />`
**Reuses:** `Button` (Learn More links), `Badge` (service number tags)

**Layout — THE SIGNATURE SECTION:**
**Horizontal scroll section pinned to viewport.** User scrolls vertically, 6 service cards scroll horizontally. Each card ~80vw wide.

**Card Design (extends `Card` component styling):**
- Each card is a full-height panel (60vh):
  - Left 40%: `<Badge variant="outline">` with service number (01–06) + H3 title + description + `<Button variant="ghost">` "Learn More →"
  - Right 60%: Full-bleed photo with **diagonal `clip-path`** edge
- Background alternates `--ranin-navy` / `--ranin-blue` per card
- Active card indicator: thin accent progress bar at bottom

**The 6 Cards:**
1. Industrial & Construction Manpower Services
2. Industrial & Construction Materials Supply
3. Operation & Maintenance
4. Fabrication Work
5. Sandblasting, Painting & Galvanizing
6. Printing Press Services

**Animations:**
- **GSAP ScrollTrigger** pins container, maps vertical scroll → horizontal translation
- Cards scale 0.95 → 1.0 on becoming "active"
- Service number: stroke-dasharray draw effect per card entry
- Photos: Ken Burns zoom (1.0 → 1.05) while card is in view
- "Learn More" arrow extends on hover with spring physics (Framer)
- Progress bar fills proportionally with GSAP scroll progress

**Mobile Fallback:**
- Vertical card stack with `whileInView` fade-up
- Alternative: swipeable carousel via Embla
- Each card uses full-width single-column layout

---

### SECTION 5: ABOUT / COMPANY OVERVIEW
**Component:** `<AboutPreview />`
**Reuses:** `Card` (value cards), `Button` ("About Us →" link)

**Layout:**
- `bg-ranin-light` — contrast shift from dark services section
- Two-column `md:grid-cols-2`:
  - Left (50%): Large editorial photo with **block-wipe reveal** (accent-colored block slides left→right, revealing photo)
  - Right (50%):
    - Section label: `font-mono`, `text-ranin-accent`, `tracking-[0.2em]`, `text-xs uppercase` — "WHO WE ARE"
    - H2: `font-display` (Bebas Neue), `text-4xl md:text-5xl` — "BUILDING SAUDI ARABIA'S INDUSTRIAL FUTURE SINCE 2010"
    - 2 paragraphs, `font-sans`, `text-base`, `text-ranin-steel`
    - `<Button variant="ghost">` "About Us →" with animated underline
- Below: row of 3 `<Card size="sm">` value cards (Safety · Integrity · Excellence) with Lucide icons

**Animations:**
- Image reveal: solid `bg-ranin-accent` block slides across (GSAP ScrollTrigger)
- Text content staggers from right (Framer `staggerChildren`, 0.1s)
- Value cards: staggered pop (scale 0→1, spring transition, 0.15s stagger)

---

### SECTION 6: SECTORS WE SERVE
**Component:** `<Sectors />`
**Reuses:** `Card`, `Badge` (sector tags)

**Layout:**
- `bg-ranin-navy`, full-width
- Section label + H2 centered top
- 5 sector cards in a row (each ~300px tall):
  - Oil & Gas · Petrochemical · Power & Utilities · Construction & EPC · Infrastructure
- Each card: Lucide line-art icon + sector name + short description on hover/expand

**Animations:**
- Cards enter with stagger from bottom (Framer `whileInView`)
- Hover: `translateY -8px` + `border` glow with `--ranin-accent` (CSS transition)
- Expanded state: Framer Motion `layout` for smooth height transition
- Icons: subtle continuous float (translateY oscillation, 3s loop, CSS `@keyframes`)

---

### SECTION 7: VISION 2030 ALIGNMENT
**Component:** `<Vision2030 />`

**Layout:**
- Gradient background (navy → dark teal), visual break section
- Centered:
  - Gold accent line (`bg-ranin-gold`, animates width on scroll)
  - H2: `font-display`, "ALIGNED WITH SAUDI VISION 2030"
  - Supporting paragraph
  - Vision 2030 watermark (10% opacity, large, positioned off-center)

**Animations:**
- Text: word-by-word reveal (GSAP SplitText)
- Gold line: draws from center outward (CSS width animation triggered by scroll)
- Watermark: very slow drift/rotation (0.5deg over 10s)

---

### SECTION 8: CLIENTS & PROJECT HIGHLIGHTS
**Component:** `<ClientsProjects />`
**Reuses:** `Card`, `Badge` (sector/location tags), `Button` ("View All")

**Layout:**
- `bg-ranin-light` section
- **A) Client Logo Marquee:**
  - Infinite auto-scrolling dual rows (opposite directions)
  - Grayscale logos → color on hover
  - Label: `font-mono`, "TRUSTED BY INDUSTRY LEADERS"
- **B) Project Highlights:**
  - Grid of 3 `<Card>` with full-bleed images, dark gradient overlay
  - `<Badge>` for sector + location tags
  - Hover: image zooms, overlay lightens, "View Project →" appears
  - `<Button variant="outline">` "View All Projects →"

**Animations:**
- Marquee: CSS `@keyframes` infinite scroll (no JS, performant)
- Logos: CSS `filter: grayscale(1)` → `grayscale(0)` on hover
- Project cards: staggered **clip-path circle reveal** on scroll
- Card hover: image scale 1.0→1.08 + overlay opacity shift

---

### SECTION 9: CTA STRIP
**Component:** `<CTAStrip />`
**Reuses:** `Button` (two variants)

**Layout:**
- Full-width, `bg-ranin-accent` — bold visual punctuation
- Centered:
  - H2: `font-display`, "HAVE A PROJECT IN MIND?"
  - Sub: `font-sans`, "Get a tailored proposal within 24–48 hours"
  - `<Button variant="secondary">` "Request a Quote" + `<Button variant="outline">` "Call Us Now"
- Decorative background: large translucent gear icon (Lucide `Settings`), off-center

**Animations:**
- Section: horizontal wipe reveal (bg color left→right, then text fades in)
- Buttons: magnetic cursor effect (same wrapper as hero)
- Background: subtle diagonal line pattern moving slowly (CSS `@keyframes`)

---

### SECTION 10: FOOTER
**Component:** `<Footer />`
**Reuses:** `Button` (back-to-top), `Separator`, `Badge` (social icons)

**Layout:**
- `bg-ranin-navy`, generous `py-32` top padding
- 4-column grid:
  - **Col 1:** White logo SVG + tagline + social icon `<Badge variant="outline">` row
  - **Col 2:** Quick Links (Home, About, Services, Projects, Contact)
  - **Col 3:** All 6 service links
  - **Col 4:** Contact — address, phone, email, Google Maps link
- `<Separator />` then bottom bar: copyright left, legal links right

**Animations:**
- Content fades in staggered on scroll into view
- Social badges: hover scale + color transition
- Links: clip-path underline (same as navbar)
- Floating "back to top" `<Button size="icon">` with `ChevronUp` icon appears on footer view

---

## 5. GLOBAL ANIMATION PATTERNS

### Scroll-Triggered Reveals (Default)
```
- Every section: `whileInView` (Framer Motion) or GSAP ScrollTrigger
- Default entrance: opacity 0→1, translateY 60→0, duration 0.8s, ease: easeOut
- Stagger children: 0.1s–0.15s between siblings
- Threshold: trigger when 20% visible
- ALL animations respect `prefers-reduced-motion`
```

### Text Animation Hierarchy
```
- H1 (Hero only):     GSAP SplitText, word-by-word, from bottom + rotation → font-display
- H2 (Section titles): Framer Motion, line-by-line reveal, fade + slide up → font-display
- Body text:           Simple fade-in, 0.3s delay after heading → font-sans
- Labels/Captions:     Fade-in + letterSpacing wide→normal → font-mono
```

### Hover Micro-Interactions
```
- <Button>:     magnetic cursor + gradient shift / fill reveal
- <Card>:       translateY -8px + shadow expansion + border accent
- Links:        clip-path underline expand from left
- Images:       scale 1.0→1.05 + brightness shift
- Icons:        rotate 5deg + color transition
```

### Page Transitions (Between Routes)
```
- Exit:  content fades out + slides up 30px (0.3s)
- Enter: content fades in + slides up from 30px (0.5s, staggered)
- Framer Motion AnimatePresence wrapping page layout
```

### Preloader (Initial Page Load)
```
- Dark navy screen
- Ranin logo SVG: stroke draws in → fills with color
- Thin accent progress bar below
- Screen wipes up to reveal hero
- Duration: ~2.5s (or until critical assets loaded)
```

---

## 6. RESPONSIVE STRATEGY

| Breakpoint | Tailwind | Columns | Notes |
|------------|----------|---------|-------|
| Mobile | `default` (< 768px) | 1 col (4-col grid) | Stacked, hamburger nav, vertical services |
| Tablet | `md:` (768–1024px) | 2 cols (8-col grid) | Two-column where possible, reduced padding |
| Desktop | `lg:` (1025–1440px) | 3+ cols (12-col grid) | Full design expression |
| Wide | `2xl:` (> 1440px) | 12-col, centered | Content `max-w-7xl`, hero full-bleed |

### Mobile-Specific:
- Hero: video → optimized static poster image (performance)
- Services: horizontal scroll → vertical stack or Embla swipeable carousel
- Trust bar: `grid-cols-2` instead of `grid-cols-4`
- About: single column, image stacked above text
- Footer: single column, accordion link groups
- All horizontal scroll sections → vertical on mobile

---

## 7. PERFORMANCE BUDGET

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.5s |
| Total Blocking Time | < 200ms |
| Cumulative Layout Shift | < 0.1 |
| Bundle Size (JS) | < 250KB gzipped |
| Lighthouse Score | 90+ |

### Strategies:
- **Video:** Lazy-load hero video, `poster` frame, H.265/VP9 compression
- **Images:** `next/image` with `sizes`, WebP/AVIF, blur placeholders
- **Fonts:** Already optimized via `next/font/google` — only adding Bebas Neue (single weight, ~20KB)
- **GSAP:** Dynamic import via `next/dynamic` — only load client-side
- **Animations:** `will-change: transform, opacity` only — GPU-accelerated, no layout thrashing
- **Code Split:** Each section is a lazy-loaded component with `Suspense` boundary

---

## 8. SEO & METADATA

- **Metadata API:** Next.js built-in `generateMetadata` per route
- **Structured Data:** `Organization` + `LocalBusiness` JSON-LD on every page
- **Open Graph:** Auto-generated OG images per page
- **Sitemap:** `next-sitemap` auto-generation
- **Analytics:** Vercel Analytics + Google Tag Manager

---

## 9. ACCESSIBILITY

- All animations respect `prefers-reduced-motion` (disable GSAP timelines + Framer animations)
- Color contrast: WCAG AA minimum (already strong with oklch system)
- Keyboard-navigable mega menu (`aria-expanded`, `aria-controls`) — extends existing `DropdownMenu` a11y
- Skip-to-content link
- All images: descriptive `alt` text
- Forms: existing `Field`/`FieldLabel` components already handle label association
- Focus indicators: existing shadcn `focus-visible:ring` styles preserved
- RTL: already configured via `DirectionProvider` + `components.json`

---

## 10. DEVELOPMENT PHASES

### Phase 1: Foundation (Week 1)
- Install new deps: `framer-motion`, `gsap`, `@gsap/react`, `lenis`, `next-intl`, `react-hook-form`, `zod`, `embla-carousel-react`
- Add Bebas Neue to `layout.tsx`, add `--font-display` to Tailwind theme
- Extend `globals.css` with `--ranin-*` color tokens + dark theme override
- Build: `Navbar`, `Footer`, `Preloader`, page shell with `AnimatePresence`
- Setup Lenis smooth scroll provider

### Phase 2: Hero & Core Sections (Week 2)
- Hero section: video, GSAP SplitText, magnetic CTAs
- Trust Metrics Bar: odometer counters
- Services horizontal scroll (GSAP ScrollTrigger pinning)
- Mobile responsive for above

### Phase 3: Content Sections (Week 3)
- About preview: image block-wipe reveal
- Sectors grid with expand interactions
- Vision 2030 section
- Clients marquee (CSS `@keyframes`) + project cards
- CTA strip

### Phase 4: Polish & Launch (Week 4)
- Page transitions (Framer `AnimatePresence`)
- All micro-interactions finalized
- Performance optimization: lazy loading, code splitting, image optimization
- SEO metadata, structured data, sitemap
- Accessibility audit + `prefers-reduced-motion` testing
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Arabic RTL pass (leveraging existing `DirectionProvider` + `next-intl`)

---

## 11. UPDATED FILE STRUCTURE

```
ranin/                                   ← YOUR EXISTING PROJECT ROOT
├── app/
│   ├── layout.tsx                       ← MODIFY: add Bebas Neue, Lenis provider, AnimatePresence
│   ├── globals.css                      ← MODIFY: add --ranin-* tokens, --font-display
│   ├── page.tsx                         ← REPLACE: landing page with section composition
│   ├── about/page.tsx                   ← NEW
│   ├── services/
│   │   ├── page.tsx                     ← NEW: services hub
│   │   └── [slug]/page.tsx             ← NEW: individual service pages
│   ├── projects/page.tsx                ← NEW
│   ├── contact/page.tsx                 ← NEW
│   └── blog/
│       ├── page.tsx                     ← NEW
│       └── [slug]/page.tsx             ← NEW
├── components/
│   ├── layout/
│   │   ├── navbar.tsx                   ← NEW
│   │   ├── mega-menu.tsx                ← NEW (extends existing DropdownMenu)
│   │   ├── footer.tsx                   ← NEW
│   │   └── preloader.tsx                ← NEW
│   ├── sections/
│   │   ├── hero.tsx                     ← NEW
│   │   ├── trust-bar.tsx                ← NEW
│   │   ├── services-showcase.tsx        ← NEW
│   │   ├── about-preview.tsx            ← NEW
│   │   ├── sectors.tsx                  ← NEW
│   │   ├── vision-2030.tsx              ← NEW
│   │   ├── clients-projects.tsx         ← NEW
│   │   └── cta-strip.tsx                ← NEW
│   ├── animations/
│   │   ├── split-text.tsx               ← NEW: GSAP SplitText wrapper
│   │   ├── magnetic-button.tsx          ← NEW: cursor-following CTA wrapper
│   │   ├── scroll-reveal.tsx            ← NEW: reusable whileInView wrapper
│   │   ├── counter.tsx                  ← NEW: odometer number animation
│   │   └── image-reveal.tsx             ← NEW: block-wipe image reveal
│   ├── shared/
│   │   ├── section-label.tsx            ← NEW: mono section labels
│   │   └── animated-link.tsx            ← NEW: underline animation link
│   ├── ui/                              ← EXISTING: all shadcn components stay untouched
│   │   ├── alert-dialog.tsx             ✅ keep
│   │   ├── badge.tsx                    ✅ keep
│   │   ├── button.tsx                   ✅ keep
│   │   ├── card.tsx                     ✅ keep
│   │   ├── combobox.tsx                 ✅ keep
│   │   ├── direction.tsx                ✅ keep (RTL)
│   │   ├── dropdown-menu.tsx            ✅ keep (mega menu base)
│   │   ├── field.tsx                    ✅ keep (forms)
│   │   ├── input.tsx                    ✅ keep
│   │   ├── input-group.tsx              ✅ keep
│   │   ├── label.tsx                    ✅ keep
│   │   ├── select.tsx                   ✅ keep
│   │   ├── separator.tsx                ✅ keep
│   │   └── textarea.tsx                 ✅ keep
│   └── example.tsx                      ← REMOVE: demo component
├── lib/
│   ├── utils.ts                         ✅ keep (cn helper)
│   ├── gsap.ts                          ← NEW: GSAP registration + ScrollTrigger config
│   ├── lenis.ts                         ← NEW: smooth scroll provider
│   └── fonts.ts                         ← NEW (optional): font config centralized
├── content/
│   ├── services.ts                      ← NEW: service data objects
│   ├── projects.ts                      ← NEW: project data
│   └── clients.ts                       ← NEW: client logo paths
├── public/
│   ├── videos/                          ← NEW: hero video
│   └── images/                          ← NEW: optimized images, client logos
├── components.json                      ✅ keep (radix-lyra, rtl: true)
├── package.json                         ← MODIFY: add new dependencies
├── tailwind.config.ts                   ← may not exist (Tailwind 4 uses CSS config)
├── postcss.config.mjs                   ✅ keep
├── tsconfig.json                        ✅ keep
└── next.config.ts                       ← MODIFY: i18n config for next-intl
```

**Key principle: zero modifications to existing `components/ui/*` files.** All brand theming flows through CSS custom properties. New sections compose existing components.

---

## 12. INSPIRATION ANALYSIS — WHAT WE'RE TAKING

| Site | What We Borrow | Our Twist |
|------|---------------|-----------|
| **Orascom** | Clean mega-menu hierarchy, corporate authority | Extend existing `DropdownMenu` + more scroll-driven animation |
| **Group Amana** | Bold stats, structured service display | Odometer counters (Bebas Neue), horizontal scroll vs static grid |
| **UNEC** | Cinematic video heroes, dark premium feel | SplitText reveal (Bebas Neue ALL-CAPS), magnetic CTAs |
| **Hassan Allam** | Numbered services, project grid, stats bar | Mechanical counter aesthetic, diagonal image clip-paths |
| **ALEC** | Full-screen experience, modern motion language | SVG logo draw, parallax layers, `rounded-none` brutalist edge |

---