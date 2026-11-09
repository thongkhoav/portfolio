# Service site

Vietnamese service page for **Thống Khoa làm phần mềm**, separate from the personal site in the repo root. It is a static Next.js export on Cloudflare Pages, project `thongkhoa-service`. The planned custom domain is `service.khoariodev.online`.

## Local

```bash
npm install
cp .env.example .env.local   # then put the real Zalo link in .env.local
npm run dev                  # http://localhost:3100
npm test
npm run build                # output in out/
```

## Cloudflare Pages

Deploys are direct uploads from this machine, not Git-connected, so the Zalo link stays out of the repo and out of Cloudflare's build settings.

```bash
npx wrangler login
sh scripts/deploy-site.sh    # builds with .env.local, deploys thongkhoa-service
```

`public/_headers` keeps the `pages.dev` copy out of search. The custom domain is not affected.

Run wrangler only through these scripts. In a Next.js folder it rewrites the project for Workers, and without `--force` on `pages project create` it makes a Worker instead of a Pages project.

## Demos

Content lives in `data/site.js`. Each demo is its own Cloudflare Pages project. Run `npm run build` in each demo folder, then:

```bash
sh scripts/deploy-demos.sh
```

The script deploys a temporary copy with a visible demo label and a noindex header. The demo repos are not changed.

| Demo | Local folder | URL |
|---|---|---|
| Nhịp Arena | `~/Documents/coding/dat-san` | `nhip-arena-demo.pages.dev` |
| Mái Hiên | `~/Documents/coding/nha-tro` | `mai-hien-demo.pages.dev` |
| Dải Lụa | `~/Documents/coding/du-lich` | `dai-lua-demo.pages.dev` |

## Content rules

`tests/content.test.mjs` enforces these:

- Never name the employer, its clients or work metrics here.
- Keep the phone number out of the repo. The repo is public.
- Label demos as demos. No invented testimonials or project counts.
- Prices are starting prices ("từ"). Source: the price table in the private `thongkhoav/marketing` repo.
