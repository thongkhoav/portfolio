import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { channels } from "../utils/data/channels.js";
import { linksPage } from "../utils/data/links.js";
import { personalData } from "../utils/data/personal-data.js";
import { services } from "../utils/data/services.js";

const readSource = (relativePath) =>
  readFile(new URL(relativePath, import.meta.url), "utf8");

const allLinkHrefs = () => [
  linksPage.primary.href,
  linksPage.zalo.href,
  ...linksPage.services.map((s) => s.href),
  ...linksPage.more.map((m) => m.href),
  ...linksPage.socials.map((s) => s.href),
];

test("bio page keeps to at most 8 primary links", () => {
  const primaryCount = 2 + linksPage.services.length + linksPage.more.length;
  assert.ok(primaryCount <= 8, `found ${primaryCount} primary links`);
});

test("bio page has no phone number or marketplace affiliate link", () => {
  for (const href of allLinkHrefs()) {
    assert.doesNotMatch(href, /^tel:|zalo\.me\/\d|shopee|lazada|tiki\.vn/i, href);
  }
  assert.equal(linksPage.zalo.href, personalData.zalo);
});

test("services stay on web/app work and AI/LLM integration only", () => {
  const text = JSON.stringify(services) + JSON.stringify(linksPage.services);
  assert.doesNotMatch(text, /zalo|video|remotion|whisper|ffmpeg/i);
});

test("bio page carries an advertising/affiliate disclosure line", () => {
  assert.match(linksPage.disclosure, /quảng cáo|affiliate/i);
});

test("bio and footer link to the real creator channels", () => {
  assert.equal(channels.tiktok.url, "https://www.tiktok.com/@thongkhoa.rio");
  assert.equal(channels.youtube.url, "https://www.youtube.com/@thongkhoa_rio");
});

test("services publish no prices until they are validated", () => {
  const text = JSON.stringify(services);
  assert.doesNotMatch(text, /\$\s?\d|\d\s?(usd|vnd|đ|triệu)/i);
});

test("/t short link redirects to /links with TikTok UTM tags", async () => {
  const config = await readSource("../next.config.js");
  assert.match(config, /source: '\/t'/);
  assert.match(config, /\/links\?utm_source=tiktok&utm_medium=bio/);
});

test("new pages and sections publish no phone number or excluded socials", async () => {
  const sources = await Promise.all(
    [
      "../app/links/page.jsx",
      "../utils/data/links.js",
      "../app/components/homepage/services/index.jsx",
      "../app/components/homepage/contact/index.jsx",
      "../app/components/site-shell.jsx",
    ].map(readSource),
  );
  assert.doesNotMatch(sources.join("\n"), /facebook|twitter|tel:|0857422833/i);
});
