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
| `/` | Home |
| `/product/` | Product |
| `/pricing/` | Illustrative SKUs |
| `/docs/` | Getting-started stub |
| `/blog/` | Index |
| `/blog/why-agent-builders-keep-overpaying-for-servers/` | Cost / idle VMs |
| `/blog/your-agent-needs-a-desk-not-a-data-centre/` | Desk vs data centre |
| `/about/` | Founding thesis |
| (unknown) | 404 |

Australian English throughout. Chart figures are either public vendor rates or labelled assumptions; see captions and source lists on each post.

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
