import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { contactChannels } from "../app/components/homepage/contact/channels.js";
import { experiences } from "../utils/data/experience.js";
import { formatTenure, proofStats, roleMonths, totalExperienceMonths } from "../utils/data/metrics.js";

const readSource = (p) => readFile(new URL(p, import.meta.url), "utf8");

test("years of experience are computed from role dates, not hard-coded", () => {
  const oct2026 = new Date(2026, 9, 22);
  assert.equal(roleMonths(experiences[0], oct2026), 24); // Nov 2024 – Oct 2026
  assert.equal(roleMonths(experiences[1], oct2026), 5); // May – Sep 2023
  assert.equal(totalExperienceMonths(oct2026), 29);
  assert.match(proofStats[0].value, /^\d+\+$/);
  assert.equal(formatTenure(24), "2 yrs");
  assert.equal(formatTenure(5, "vi"), "5 tháng");
});

test("internship mentions the Japanese client, requirement reviews and daily stand-ups", () => {
  const text = experiences[1].highlights.join(" ");
  assert.match(text, /Japanese client/);
  assert.match(text, /requirements/i);
  assert.match(text, /daily stand-up/i);
});

test("contact leads with email in English and with Zalo in Vietnamese", () => {
  assert.equal(contactChannels("en")[0].kind, "email");
  assert.equal(contactChannels("vi")[0].kind, "zalo");
});

test("page puts the offer and proof before the personal story", async () => {
  const src = await readSource("../app/components/home-page.jsx");
  const order = ["<HeroSection", "<Services", "<Experience", "<Projects", "<ContactBand", "<AboutSection", "<ContactSection"];
  const positions = order.map((tag) => src.indexOf(tag));
  assert.ok(positions.every((p) => p >= 0), "all sections present");
  assert.deepEqual([...positions].sort((a, b) => a - b), positions);
});

// Reads width/height from a JPEG's SOF marker (no native tools needed).
function jpegSize(buf) {
  let i = 2;
  while (i < buf.length) {
    const marker = buf[i + 1];
    const len = buf.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return [buf.readUInt16BE(i + 7), buf.readUInt16BE(i + 5)];
    }
    i += 2 + len;
  }
  throw new Error("no SOF marker");
}

test("about gallery photos share one 4:3 size so the tiles are equal", async () => {
  const { personalData } = await import("../utils/data/personal-data.js");
  for (const src of personalData.profileImages.slice(1, 4)) {
    const buf = await readFile(new URL(`../public${src}`, import.meta.url));
    assert.deepEqual(jpegSize(buf), [1600, 1200], src);
  }
});
