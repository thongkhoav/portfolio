#!/bin/sh
# Deploys the 3 demos to Cloudflare Pages from a temporary copy of each dist/.
# The copy gets a visible "demo" label on every page and a noindex header, so
# nobody mistakes a fictional business for a real one. The demo repos are not
# changed. Requires `npx wrangler login` and a fresh `npm run build` per demo.
set -eu

CODE_DIR="${CODE_DIR:-$HOME/Documents/coding}"
WORK_DIR="$(mktemp -d)"
trap 'rm -rf "$WORK_DIR"' EXIT
# Run wrangler outside any project: inside a Next.js folder it would try to
# rewrite that project for Workers.
cd "$WORK_DIR"

LABEL='<div aria-label="Bản demo" style="position:fixed;left:8px;bottom:84px;z-index:2147483647;pointer-events:none;padding:4px 8px;border-radius:6px;background:#10201a;color:#d9efe4;font:12px/1.3 ui-monospace,monospace">BẢN DEMO · dữ liệu giả · không đặt được thật</div>'

deploy() {
  folder="$1"
  project="$2"
  target="$WORK_DIR/$project"
  cp -R "$CODE_DIR/$folder/dist" "$target"
  # Dải Lụa's CMS admin only works with its repo, so it is not published.
  rm -rf "$target/admin"
  find "$target" -name '*.html' -print | while IFS= read -r page; do
    LABEL="$LABEL" perl -0pi -e 's#</body>#$ENV{LABEL}</body>#i' "$page"
  done
  printf '/*\n  X-Robots-Tag: noindex\n' > "$target/_headers"
  # Without --force, wrangler turns a new Pages project into a Worker and
  # registers a workers.dev subdomain. It fails harmlessly if the project exists.
  npx --yes wrangler@4.158.0 pages project create "$project" --production-branch main --force || true
  npx --yes wrangler@4.158.0 pages deploy "$target" --project-name "$project" --branch main --commit-dirty=true
}

deploy dat-san nhip-arena-demo
deploy nha-tro mai-hien-demo
deploy du-lich dai-lua-demo
