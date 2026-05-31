# Tentacle Pay — Brand & Landing Page Design Plan

> Payment infrastructure built on Sui, powering the agentic economy.
> Plan only — this document is the brief for building `packages/web/`. No site code is changed by this file.

---

## brand-design session, 2026-05-31

**Quick spec** (the skill contract — full detail follows below):

- **name:** Tentacle Pay — locked. Octopus = many arms reaching every API/service/agent at once; "tentacles" of payment across the sea. Ocean theme rhymes with Sui (sea-blue, water).
- **color palette (dark-first):**
  - background (abyss): `#0A0711`
  - surface: `#13101C` · surface-raised: `#1B1726` · surface-tech (terminal): `#08060D`
  - text: `#F6F2F8` · muted: `#ABA3B8` · subtle: `#6F6880`
  - **primary (magenta):** `#F02378` · **hot-pink:** `#FF63A5` · **pale-pink:** `#FFC4DD`
  - secondary accent (Sui "Sea"): `#4DA2FF` · deep-sea panel: `#0B1B2E`
  - live/success: `#2DD4BF` · coming-soon/warning: `#F5A623` · danger: `#FF5470`
  - CTA text on pink fills (ink): `#0A0711`
- **typography:** headings **Clash Display**; body **Inter**; mono **JetBrains Mono** (code, x402 headers, addresses, amounts).
- **logo brief:** see [§7](#7-logo--mascot).
- **tone references:** Sui's own ocean brand · Stripe (payments clarity) · Linear (dark craft) · Vercel/Resend (dev-infra polish) · bioluminescent deep-sea photography.
- **anti-references:** Coinbase-purple crypto infra · particle-field "web3 template" heroes · soulless Stripe-clones · neon-cyberpunk glow-everything.

---

## 1. Positioning

**One sentence:** Tentacle Pay is the payment infrastructure that lets AI agents pay and get paid on Sui — no human in the loop, no gas token to hold.

**The arc we sell:** agents already move at machine speed for *everything except money*. The moment a payment is involved they hit a human wall — API keys, a card, an approval, a wallet to fund with gas. Tentacle Pay removes that wall with HTTP-native payment rails settled on Sui, where listed stablecoins already move gasless and our facilitator sponsors the gas for everything else.

**What ships today vs. soon (be honest on the page):**

| Rail | Status | One-liner |
|---|---|---|
| **x402** | **LIVE** — facilitator running | A server answers a request with `402`, the agent pays, the request completes. |
| **MPP** (Merchant Payment Protocol) | Coming soon | Structured / recurring payments for agents. |
| **Across the Sea** (cross-chain x402 + MPP) | Coming soon | An agent on one chain pays a service on another — one handshake, many waters. |

**Primary CTA everywhere:** *Read the docs* → `https://docs.tentaclepay.com`. Secondary: *See how x402 works* (in-page), *Facilitator status*, GitHub, X.

**Audience:** developers building agents / agentic services, and the founders deciding what to build on. The page must earn dev credibility (real protocol detail) while staying warm enough to be memorable (the octopus).

---

## 2. Voice & messaging rules

- **Sui-native, never adversarial.** Frame Sui as *where the agent economy happens* and gasless as *the power* — never "faster/cheaper than chain X." No chain-vs-chain comparisons anywhere.
- **Show, don't boast.** Prove x402 is live with a real handshake and a status pill, not adjectives.
- **Banned words:** "revolutionary," "cutting-edge," "world-class," "leverage," "the future of payments," "reimagined," "AI-powered." (Generic-brand signals.)
- **Never write "v2"** or version the protocol on the page. We simply *show* the current header names: `PAYMENT-REQUIRED`, `PAYMENT-SIGNATURE`, `PAYMENT-RESPONSE`. No `X-*` headers anywhere in copy or code samples.
- **Headlines are specific and short.** Sentence case for body, display case for hero lines. Reserve ALL CAPS for one place only: **"ACROSS THE SEA."**
- **Numbers are facts.** Sub-second finality, gasless, one round trip — concrete, no vague superlatives.

**Tagline bank (approved directions):**
- Hero: *"Payments for the agent economy. Native to Sui."*
- Rails: *"Two rails. One ocean."*
- x402: *"HTTP 402, finally answered."*
- Gasless: *"Stablecoins move gasless. Everything else, we sponsor."*
- Sui: *"Built where it's already free."*
- Cross-chain: *"ACROSS THE SEA."*
- Footer: *"Built on Sui. Made for machines."*

---

## 3. Visual direction — "Bioluminescent Deep-Sea + Engineered"

**Chosen system (hybrid, confirmed):** a flat, dark, modern base with **two voices**.

1. **Surface voice — bioluminescent deep-sea (emotional, marketing).** Near-black ocean, deep-magenta glow used as a *focused light source* (not a full-page wash), the glossy 3D octopus as hero art, soft rising bubbles and pink filaments (the mood already set by the X banner). Rounded corners (~12px), generous space, calm.
2. **Protocol voice — engineered / technical-brutalist (credibility).** Reserved for x402 protocol surfaces, code, and the facilitator status: **monospace, hard edges (radius 0), 1px hairline borders, terminal/sequence readouts, high contrast.** This is where brutalism earns its place — it reads "real infra," not marketing.

**Why not the extremes** (recorded for future reference): full brutalism fights the glossy, cute octopus and reads cold for a *frictionless* promise; pure flat throws away the bioluminescent glow that already defines the brand. The hybrid keeps "modern + clean + flat + dark" as the base and spends brutalism only where it builds trust.

**Three rules that keep it from going generic:**
- Glow is a **light source, not decoration** — only the hero halo and the "LIVE" signal glow. Buttons use crisp fills, *not* 20px colored blurs.
- The background is **deep ink with one localized magenta light**, never a black-to-purple radial gradient.
- Magenta is **the brand**, not an accent sprinkled everywhere — primary actions and the one hero light. Sea-blue is the *only* color allowed to lead, and only in the "Why Sui" beat.

---

## 4. Color system

Dark-first. The site ships dark; there is no light mode requirement (light tokens may stay for component dev only).

### 4.1 Tokens (hex = canonical)

| Token | Hex | Role |
|---|---|---|
| `--abyss` | `#0A0711` | Page background (deep ink, faint magenta undertone — not pure black) |
| `--surface` | `#13101C` | Cards, panels |
| `--surface-raised` | `#1B1726` | Elevated cards, popovers, nav-on-scroll |
| `--surface-tech` | `#08060D` | Terminal / code / protocol panels (darkest) |
| `--text` | `#F6F2F8` | Primary text |
| `--text-muted` | `#ABA3B8` | Secondary text |
| `--text-subtle` | `#6F6880` | Labels, captions (large/decorative only — see contrast) |
| `--border` | `rgba(255,255,255,0.08)` | Hairline dividers, card edges |
| `--border-strong` | `rgba(255,255,255,0.14)` | Emphasis edges |
| `--border-tech` | `rgba(255,99,165,0.22)` | Pink hairline for protocol/terminal panels |
| **`--magenta`** | `#F02378` | **Primary** — primary buttons, hero light, x402 "live" accents |
| `--hot-pink` | `#FF63A5` | Links, small accent text, hovers, sucker-dot highlights |
| `--pale-pink` | `#FFC4DD` | Soft illustration accents, faint glints |
| `--glow` | `#FF2E86` | Bioluminescent glow color (radial / blurred layers only) |
| `--sea` | `#4DA2FF` | Sui "Sea" blue — secondary accent, "Why Sui" beat, Sui-context links |
| `--deep-sea` | `#0B1B2E` | Sui-context panel background |
| `--live` | `#2DD4BF` | Facilitator LIVE / success (teal-mint — reads "online," not neon-lime) |
| `--soon` | `#F5A623` | "COMING SOON" tags (MPP, Across the Sea) |
| `--danger` | `#FF5470` | Errors (on-brand rose) |
| `--ink` | `#0A0711` | Text *on* pink fills (for AA — see below) |

### 4.2 60-30-10

- **60% abyss** (`#0A0711`) — the ocean.
- **30% surface** (`#13101C` / `#1B1726`) — panels and cards.
- **10% magenta** (`#F02378` + glow) — primary actions and the hero light, nothing else.
- Sea-blue, teal, amber are **state/context spot colors**, not part of the 10%.

### 4.3 Contrast (WCAG, measured against `--abyss`)

| Pair | Ratio | Verdict |
|---|---|---|
| `--text` on abyss | ~16:1 | ✅ all sizes |
| `--text-muted` on abyss | ~7.5:1 | ✅ all sizes |
| `--text-subtle` on abyss | ~3.4:1 | ⚠️ large/decorative only — never body |
| `--hot-pink` on abyss | ~7.1:1 | ✅ links & small accent text |
| `--magenta` text on abyss | ~4.8:1 | ✅ normal text, but prefer for fills/large |
| `--sea` on abyss | ~7.4:1 | ✅ text & links |
| `--ink` on `--magenta` (CTA) | ~4.8:1 | ✅ **use ink text on pink buttons** |
| `--ink` on `--hot-pink` | ~7.1:1 | ✅ |
| white on `--magenta` | ~4.0:1 | ⚠️ large text only (e.g. hero button label ≥18px bold) |

**Signature move:** primary buttons are **pink fill with near-black (`--ink`) text** — punchy, accessible, and a touch of the brutalist crispness, instead of the generic white-on-glow.

---

## 5. Typography

Three distinct voices (real contrast, the anti-generic requirement).

| Role | Family | Usage | Weights |
|---|---|---|---|
| **Display / headings** | **Clash Display** | H1–H3, hero, "ACROSS THE SEA", big numbers | 600 / 700; 500 for sub-heads |
| **Body** | **Inter** (already installed) | paragraphs, UI, nav | 400 / 500; 600 for emphasis |
| **Mono** | **JetBrains Mono** | code, x402 header names, facilitator status, addresses, token amounts | 400 / 500 |

**Rules:**
- One H1 per page (the hero). Headings descend without skipping levels.
- Body ≥ 16px, line-height ≥ 1.5. Hero H1 ~ clamp(2.75rem, 6vw, 5rem), tight leading (1.05) and slight negative tracking (-0.02em).
- **All numbers use tabular figures** (`font-variant-numeric: tabular-nums`) — amounts, stats, counters never jiggle.
- Mono is the "engineered voice": every protocol artifact (`402`, `PAYMENT-REQUIRED`, txDigest, addresses) is mono. Addresses ellipsis the middle (`0x1234…abcd`) with a copy affordance.
- No indiscriminate ALL CAPS + wide tracking. Exactly one display ALL-CAPS moment: "ACROSS THE SEA."

**Loading (Astro + Tailwind v4):**
- Inter: keep `@fontsource-variable/inter`.
- JetBrains Mono: add `@fontsource-variable/jetbrains-mono`.
- Clash Display: self-host woff2 in `public/fonts/` with `@font-face` (`font-display: swap`); Fontshare CDN as fallback (`https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap`). Self-host preferred on Cloudflare (no extra DNS/round-trip).

---

## 6. Motion language (scroll storytelling)

Stack already includes `motion` (Framer Motion v12) — use it.

- **Scroll-driven parallax:** `useScroll` + `useTransform` for the octopus drift, filament drift, and glow intensity tied to scroll progress.
- **Section reveals:** `whileInView` — fade-up (`y: 24 → 0`, `opacity: 0 → 1`, `filter: blur(8px) → 0`), staggered children, `viewport={{ once: true, margin: "-15%" }}`.
- **Ambient loops:** hero glow "breathe" (slow opacity/scale), bubbles rising, "ACROSS THE SEA" shimmer. 6–10s, ease-in-out.
- **Protocol sequence:** the x402 handshake lines reveal *in order* as the section enters; `402` line flashes magenta, `200` line flashes teal.
- **LIVE pill:** the teal dot pulses gently (1.6s).
- **Easing & timing:** premium expo-out `cubic-bezier(0.16, 1, 0.3, 1)`; reveals 0.5–0.8s.
- **Performance:** animate only `transform` / `opacity` / `filter`; glow is a blurred radial layer, not a giant `box-shadow` on every element; lazy-load the heavy 3D renders; `will-change` sparingly.
- **Reduced motion (required):** honor `prefers-reduced-motion` via `useReducedMotion()` — disable parallax + loops + blur, keep instant fades, ship a static hero. The story must read fully with motion off.

---

## 7. Logo & mascot

**Three lockups, all from existing assets:**
1. **App-icon mark** — the dot-spiral octopus on rounded square (`rx ≈ 4.7%` of size; matches `tentaclepay_logo_dark.svg`). Dark on `#000`/abyss; light variant on white.
2. **Mascot render** — the glossy 3D octopus (`tentacle_1..5.png`, `octo-stablecoins.png`, `x402-mpp.png`). Hero + section art only, never as a tiny icon.
3. **Wordmark** — "tentacle pay" set in Clash Display, lowercase, used in nav + footer beside the mark.

**Mascot usage rules:**
- One mascot render per section *maximum*; it punctuates beats, it is not wallpaper.
- Always on dark with its own glow; never on a busy background.
- Keep it glossy and premium — the daisy/big-eyes charm is the warmth that offsets the technical sections, but don't let it tip into "kiddie." Pair every cute moment with a credible one (mascot + mono handshake).

**Co-brand:** "Built on Sui" lockup uses `01_Sui_Logo/Sui_Full_Logo` (or `Sui_Droplet`) in the footer and the "Why Sui" beat, in `--sea` or white. Give Sui clear space; never recolor the Sui mark to magenta.

**Logo brief (for a designer, per template):** The Tentacle Pay mark is a magenta octopus whose body is described by a spiral of circular suckers in three pinks (`#FF63A5` dots, `#F02378` body, `#FFC4DD` wave), centered in a black rounded square. Keep the dot-spiral legible down to 24px; below that, drop to a simplified single-tentacle glyph. Maintain clear space equal to one sucker-diameter on all sides. The glossy 3D render is the expressive mascot for hero/marketing; the flat dot-spiral is the functional logo for favicons, nav, and co-brand lockups. Never add an outer glow to the functional mark — glow belongs to the 3D render only.

---

## 8. Component & layout defaults

- **Grid:** 12-col, max content width ~1200px, section padding `clamp(64px, 10vh, 128px)` vertical. Spacing scale 4/8/12/16/24/32/48/64/96.
- **Buttons:**
  - *Primary* — `--magenta` fill, `--ink` text, radius 12px, hover → `--hot-pink`, active scale 0.98, visible focus ring (`--hot-pink`, 2px offset). No glow.
  - *Secondary* — ghost: transparent, `--border-strong` edge, `--text`; hover surface `--surface-raised`.
  - *Tech* — mono label, radius 0, 1px `--border-tech`, used inside protocol sections.
- **Cards:** `--surface`, 1px `--border`, radius 12px. *Protocol/code cards:* `--surface-tech`, `--border-tech`, **radius 0**, mono.
- **Status pill (LIVE):** mono, `--surface-raised`, teal dot (pulsing) + `LIVE` label. "COMING SOON" pill uses `--soon` text on faint amber tint, radius 0.
- **Links:** `--hot-pink`, underline on hover, focus-visible ring.
- **Icons:** lucide for UI; custom/asset art for the octopus + coins + Sui droplet.
- **Async/empty/error states** (for any live data, e.g. a facilitator status widget): skeleton (no layout shift), specific empty copy, error state that names the error + a retry. Don't ship a bare spinner.
- **Accessibility:** keyboard nav on every interactive element; `aria-label` on icon-only buttons; restore focus rings; `alt` text on the mascot ("Tentacle Pay octopus holding x402 and MPP coins"); honor reduced motion.

---

## 9. Landing page — section-by-section scroll story

A single scrolling page that tells one story: *the agent economy is stuck on payments → Tentacle Pay frees it on Sui → and it's reaching across every sea.* Each beat is one screen-ish.

> **0 · Nav (sticky).** Mark + "tentacle pay" wordmark · links: Docs · x402 · GitHub · X · right side: **Read the docs** (primary) + small `● LIVE` pill. Transparent over hero → solid `--abyss` with hairline border after scroll.

**1 · Hero — "Payments for the agent economy. Native to Sui."**
- Sub: "Tentacle Pay is the payment infrastructure that lets AI agents pay and get paid on Sui — no human in the loop, no gas token to hold."
- `● x402 facilitator · LIVE` pill (mono, teal pulse). CTAs: *Read the docs* + *See how x402 works*.
- Art: glossy octopus emerging from below, magenta bioluminescent halo, deep-sea gradient, filaments + rising bubbles.
- Motion: octopus parallax, glow breathe, headline fade-up stagger. Reduced-motion → static.

**2 · Tension — "Agents move at machine speed. Money doesn't."**
- Copy: an agent can call any API in milliseconds — until money is involved. Then it needs a card, an API key, a human to approve, a wallet funded with gas. The economy can't run if every payment needs a person.
- Art: dim scene, a single tentacle reaching toward a locked coin. Minimal, atmospheric.

**3 · The rails — "Two rails. One ocean."**
- Art: `x402-mpp.png` (octopus holding the x402 + MPP coins).
- Two cards: **x402** — active, magenta edge + soft glow, teal `LIVE` tag, "A server asks for payment, your agent pays, the request completes." → *Read the x402 docs*. **MPP** — dimmed, amber `COMING SOON`, "Structured & recurring payments for agents." (no link).
- Motion: cards rise + stagger; x402 glows on enter.

**4 · How x402 works — "HTTP 402, finally answered." (the engineered beat)**
- Terminal panel (`--surface-tech`, mono, radius 0, pink hairline), sequence revealed line-by-line:
  ```
  → GET /premium-data
  ← 402   PAYMENT-REQUIRED    { amount, asset, payTo, network: "sui" }
  → GET /premium-data
          PAYMENT-SIGNATURE   <agent-signed payment payload>
  ← 200   PAYMENT-RESPONSE    { settled: true, txDigest: 0x… }
  ```
- Copy: "When a server needs payment, it answers with `402` and the terms. Your agent signs and retries. Our facilitator verifies and settles on Sui — in one round trip." Reinforce: **"Our x402 facilitator is live."**
- Motion: lines reveal in order; `402` flashes magenta, `200` flashes teal. (This is how we surface the current header names — never labeled a version.)

**5 · Gasless + sponsored — "Stablecoins move gasless. Everything else, we sponsor."**
- Art: `octo-stablecoins.png` — octopus embracing the glowing Sui token, ring of stablecoins (`assets/stablecoins/`: USDC, AUSD, FDUSD, USDY, USDe, USDB, USDSUI…).
- Two points: **(a) Gasless by default** — listed stablecoins transfer with zero gas on Sui; your agent doesn't hold SUI to move USDC. **(b) Sponsored for everything else** — paying in SUI or an unlisted coin? Our facilitator sponsors the gas. Every Sui coin is payable; your agent never needs a gas balance.
- Visual cue: "gasless" coins glow; others carry a small `sponsored` tag.
- Motion: slow orbit of the coin ring, glow pulse on the Sui token. Voice: gasless = the power; **no chain comparisons.**

**6 · Why Sui — "Built where it's already free."**
- Three tiles (Sea-blue accents — the one beat where blue leads): **sub-second finality** · **parallel execution** · **native gasless stablecoin transfers**. Link the Sui gasless blog post.
- Copy celebrates Sui as where the agent economy happens. Co-brand with the Sui droplet. Numbers count up (tabular mono).

**7 · Across the sea — "ACROSS THE SEA."**
- Cross-chain x402 + MPP (amber `COMING SOON`). Big Clash Display ALL-CAPS line; octopus stretching tentacles toward faded chain logos on a horizon.
- Copy: "Today, Sui. Soon, every sea. Cross-chain x402 and MPP — an agent on one chain pays a service on another, one handshake, many waters."
- Motion: tentacles extend on scroll; horizon parallax; slow shimmer on the headline.

**8 · Build / final CTA — "Charge for your API in a few lines."**
- Mono code panel (radius 0): a minimal middleware/`curl` snippet protecting an endpoint with x402 + the facilitator (kept generic; details live in docs).
- Buttons: *Read the docs* (primary), *Facilitator status*, GitHub, X. Reassert the facilitator is live.

**9 · Footer — "Built on Sui. Made for machines."**
- Mark + wordmark + tagline; links (Website, Docs, X, GitHub); "Built on Sui" lockup; a tentacle curling up the page edge. Optional small line: "made for machines, loved by humans."

---

## 10. Implementation notes (maps to the existing stack)

Stack: Astro 6 + React 19 islands · Tailwind v4 (`@theme inline` in `src/styles/global.css`) · shadcn `base-vega` + Base UI · `motion` v12 · lucide · Cloudflare (wrangler).

**a) Make the site dark-first.** Today `:root` holds light tokens and `.dark` holds dark. Either move the dark values into `:root` (recommended — dark by default) or add `class="dark"` to `<html>` in `Layout.astro`. Set the brand palette from §4.

**b) Tailwind v4 tokens (`@theme inline`):** add
```css
--font-display: "Clash Display", sans-serif;
--font-heading: var(--font-display);   /* was var(--font-sans) — that's the anti-generic fix */
--font-sans: "Inter Variable", sans-serif;
--font-mono: "JetBrains Mono Variable", ui-monospace, monospace;
--color-abyss: #0A0711;
--color-magenta: #F02378;
--color-hot-pink: #FF63A5;
--color-sea: #4DA2FF;
--color-live: #2DD4BF;
/* …expose the rest of §4 so bg-magenta / text-hot-pink / border-tech utilities work */
```
Set shadcn semantics: `--primary` → magenta, `--primary-foreground` → `--ink` (`#0A0711`) for AA on buttons. (The existing oklch primary is already a magenta hue, so this is a nudge, not a rewrite.)

**c) Fonts:** add `@fontsource-variable/jetbrains-mono`; self-host Clash Display woff2 in `public/fonts/` + `@font-face` (Fontshare CDN fallback); `@import` both in `global.css`.

**d) Motion:** build a `<Reveal>` wrapper (whileInView fade-up) and `useScroll`-based parallax hooks; gate everything behind `useReducedMotion()`.

**e) Assets:** move the renders into `packages/web/src/assets/` (or `public/`) and export optimized `webp/avif` — the 3D PNGs are heavy; lazy-load below the fold. Use `tentacle_1..5`, `octo-stablecoins`, `x402-mpp`, `stablecoins/*`, `01_Sui_Logo/*`, and the `tentaclepay_logo_*` marks.

**f) Deploy:** already wired to Cloudflare via `astro build && wrangler deploy`.

---

## 11. Anti-generic self-check (passes)

- ✅ Primary is **magenta `#F02378`** (the real brand color) — not purple, not blue, not neon-green.
- ✅ Background is **deep ink + one localized magenta light** — not a black-to-purple radial gradient.
- ✅ Glow is **reserved** for the hero halo and the LIVE signal — buttons use crisp pink fills, not 20px colored blurs.
- ✅ Headings in **Clash Display**, body in **Inter**, protocol in **JetBrains Mono** — three voices with real contrast (not default-Inter).
- ✅ All numbers **tabular**.
- ✅ Taglines are **specific** ("HTTP 402, finally answered," "Stablecoins move gasless") — no "future of X." CTAs are contextual ("Read the docs," "See how x402 works") — no bare "Launch app."
- ✅ **Anti-references named** (§ quick spec).
- ✅ **The detail no template would generate:** a glossy bioluminescent octopus mascot *and* a brutalist HTTP-402 terminal handshake showing the real `PAYMENT-REQUIRED → PAYMENT-SIGNATURE → PAYMENT-RESPONSE` round trip.

---

## 12. Open follow-ups (not blocking)

- Confirm the exact stablecoin set to show in §5 (assets present: USDC, AUSD, FDUSD, USDY, USDe/SUI_USDE, USDB, USDSUI).
- Decide whether the "Facilitator status" link is a live status widget or a docs anchor for v1.
- Source/confirm the chain logos for §7's "Across the Sea" horizon (coming-soon, can be abstract silhouettes to avoid implying live support).
