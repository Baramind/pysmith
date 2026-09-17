export const site = {
  name: "PySmith",
  domain: "pysmith.com",
  url: "https://pysmith.com",
  org: "Baramind",
  email: "hello@pysmith.com",
  github: "https://github.com/Baramind/pysmith",
  tagline: "Python that stays up for your agents.",
  hero: "Persistent Python for AI agents.",
  oneLiner:
    "Managed, persistent Python runtimes for autonomous agents — fixed $/hr, no infra.",
  description:
    "Spin up a fixed-rate instance. Your agents install packages, run for days, spawn more agents — model-agnostic. You don't manage servers. You buy compute that stays warm.",
} as const;

export const nav = [
  { href: "/product/", label: "Product" },
  { href: "/field/", label: "In the field" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/docs/", label: "Docs" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" },
] as const;

export const accessMailto =
  "mailto:hello@pysmith.com?subject=PySmith%20access";
