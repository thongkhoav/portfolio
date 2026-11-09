#!/bin/sh
# Builds the service page and deploys it to Cloudflare Pages from a temporary
# copy. Requires `npx wrangler login` and NEXT_PUBLIC_ZALO_URL in .env.local.
set -eu

PROJECT="${PROJECT:-thongkhoa-service}"
SERVICE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
WORK_DIR="$(mktemp -d)"
trap 'rm -rf "$WORK_DIR"' EXIT

grep -q '^NEXT_PUBLIC_ZALO_URL=http' "$SERVICE_DIR/.env.local" || {
  echo "Set NEXT_PUBLIC_ZALO_URL in .env.local first." >&2
  exit 1
}

(cd "$SERVICE_DIR" && npm run build)
cp -R "$SERVICE_DIR/out" "$WORK_DIR/site"

# Run wrangler outside the project: inside a Next.js folder it would try to
# rewrite that project for Workers.
cd "$WORK_DIR"
# Without --force, wrangler turns a new Pages project into a Worker and
# registers a workers.dev subdomain. It fails harmlessly if the project exists.
npx --yes wrangler@4.158.0 pages project create "$PROJECT" --production-branch main --force || true
npx --yes wrangler@4.158.0 pages deploy "$WORK_DIR/site" --project-name "$PROJECT" --branch main --commit-dirty=true
