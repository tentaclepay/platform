/**
 * Site-wide metadata — single source of truth for SEO, social cards, and the
 * web manifest. Consumed by `src/layouts/Layout.astro`.
 */
export const SITE = {
  name: "Tentacle Pay",
  title: "Tentacle Pay — Let your agents transact",
  description:
    "Payment infrastructure for autonomous agents on Sui. x402 micropayments, gasless stablecoins, and one wallet that pays across every chain.",
  url: "https://tentaclepay.com",
  /** 1200×630 social card, served from /public. */
  ogImage: "/og.jpg",
  /** Used for twitter:site and twitter:creator. */
  twitter: "@tentaclepay",
  locale: "en_US",
  /** `.dark` --background token from global.css (≈ zinc-950). */
  themeColor: "#09090b",
} as const;
