# PySmith

Marketing site for **PySmith** — managed, persistent Python runtimes for autonomous agents. Fixed $/hr. No infra.

Product: PySmith (`pysmith.com`). Organisation: [Baramind](https://github.com/Baramind).

> Python that stays up for your agents.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS with Automatic Statistician colour/type tokens
- Static export (`output: 'export'`) for GitHub Pages
- Recharts on the two cited blog posts

## Local development

Node 20+ (22 is fine).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # writes static files to out/
npm start        # serves out/ (after a build)
npm run lint
```

`npm run build` must succeed. It produces a fully static site in `out/`.

## Pages

| Path | Page |
| --- | --- |
| `/` | Home (live ops board, call-mix strip, MCP gateway cards, field panels) |
| `/product/` | Product |
| `/field/` | In the field — index of evidence-led stories |
| `/field/finance/` | Decision-grade finance |
| `/field/mining/` | Shift-scale mining |
| `/field/supply/` | Living supply plans |
| `/pricing/` | Illustrative SKUs |
| `/docs/` | Getting-started stub |
| `/blog/` | Index |
| `/blog/why-agent-builders-keep-overpaying-for-servers/` | Cost / idle VMs |
| `/blog/your-agent-needs-a-desk-not-a-data-centre/` | Desk vs data centre |
| `/about/` | Founding thesis |
| (unknown) | 404 |

Australian English throughout. Chart figures are either public vendor rates or labelled assumptions; see captions and source lists on each post.

### In the field

`/field/` and the three story routes are **evidence-led concepts**, not claimed customer deployments. Every number is attributed on the page (hover-source chips plus a sources section). Copy never says “case study”. Motion modules use a violet/teal demo palette; `prefers-reduced-motion` freezes them on a static frame.

The homepage also shows:

1. **LiveOpsBoard** — uptime clock, MCP connected chip, illustrative tool-call feed.
2. **Call-mix strip** — session pattern (tool-call share). Digits labelled *Illustrative session*.
3. **Where calls land** — three platform cards. The MCP Gateway card routes `python.exec` onto the PySmith runtime and dashes-denies unsafe tools.

## GitHub Pages + custom domain

This repo is set up as a **project site** with a custom domain.

1. `next.config.ts` sets `output: 'export'` and `trailingSlash: true`. Images are unoptimised so they work without the Next image server.
2. `public/CNAME` contains `pysmith.com` and is copied into `out/CNAME` on build.
3. `.github/workflows/pages.yml` builds on push to `main` and deploys the `out/` directory with official Actions.

In the GitHub repo:

1. Settings → Pages → Source: **GitHub Actions**.
2. Settings → Pages → Custom domain: `pysmith.com` (and `www` if you use it).
3. DNS: a CNAME (or ALIAS) from `pysmith.com` to `baramind.github.io`.

No `basePath` is set, because the custom domain serves the site at `/`. If you ever publish to `https://baramind.github.io/pysmith/` without a domain, add:

```ts
basePath: "/pysmith",
```

to `next.config.ts` and rebuild.

## Brand

Use **PySmith** in product copy. Do not substitute Baramind as the product name. Baramind appears only as the organisation.

## Licence

Site source lives in this repository. Product runtime is not included.
