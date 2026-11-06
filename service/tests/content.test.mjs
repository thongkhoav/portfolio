import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { demos, faqs, pains, promises, services, steps } from "../data/site.js";

const readSource = (p) => readFile(new URL(p, import.meta.url), "utf8");

const allText = async () =>
  [
    JSON.stringify({ demos, faqs, pains, promises, services, steps }),
    await readSource("../app/page.jsx"),
    await readSource("../app/layout.jsx"),
  ].join("\n");

test("page never names the employer, its clients or work metrics", async () => {
  assert.doesNotMatch(await allText(), /cigro|kakao|naver|nhn cloud|payple|client products|hàn quốc/i);
});

test("no phone number is committed; the Zalo link comes from the environment", async () => {
  const text = await allText();
  assert.doesNotMatch(text, /\b0\d{9}\b/);
  assert.match(await readSource("../app/page.jsx"), /process\.env\.NEXT_PUBLIC_ZALO_URL/);
});

test("every demo is labelled as a demo on the page", async () => {
  assert.match(await readSource("../app/page.jsx"), /BẢN DEMO · dữ liệu giả/);
  assert.equal(demos.length, 3);
  for (const demo of demos) assert.ok(demo.url.startsWith("https://"), demo.name);
});

test("prices are starting prices, not promised totals", () => {
  for (const service of services) assert.match(service.price, /^từ /, service.name);
});

test("no invented proof: no testimonials or project counts", async () => {
  assert.doesNotMatch(await allText(), /\d+\+?\s*(dự án|khách hàng|năm kinh nghiệm)/i);
});
