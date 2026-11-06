# Service site

Vietnamese service page for **Thống Khoa làm phần mềm**, separate from the personal site in the repo root. It is a static Next.js export, planned for Cloudflare Pages at `service.khoariodev.online`.

## Local

```bash
npm install
cp .env.example .env.local   # then put the real Zalo link in .env.local
npm run dev                  # http://localhost:3100
npm test
npm run build                # output in out/
```

## Cloudflare Pages

Project settings:

| Setting | Value |
|---|---|
| Repository | `thongkhoav/portfolio` |
| Root directory | `service` |
| Build command | `npm run build` |
| Output directory | `out` |
| Environment variable | `NEXT_PUBLIC_ZALO_URL` = the Zalo link |
| Custom domain | `service.khoariodev.online` |

## Demos

Content lives in `data/site.js`. Each demo is its own Cloudflare Pages project, deployed from its own repo with `npm run build` and output `dist`:

| Demo | Local folder | Planned URL |
|---|---|---|
| Nhịp Arena | `~/Documents/coding/dat-san` | `nhip-arena-demo.pages.dev` |
| Mái Hiên | `~/Documents/coding/nha-tro` | `mai-hien-demo.pages.dev` |
| Dải Lụa | `~/Documents/coding/du-lich` | `dai-lua-demo.pages.dev` |

If Cloudflare gives a different URL, update `url` in `data/site.js`.

## Content rules

`tests/content.test.mjs` enforces these:

- Never name the employer, its clients or work metrics here.
- Keep the phone number out of the repo. The repo is public.
- Label demos as demos. No invented testimonials or project counts.
- Prices are starting prices ("từ"). Source: the price table in the private `thongkhoav/marketing` repo.
