import assert from "node:assert/strict";
import test from "node:test";

import { experiences } from "../utils/data/experience.js";
import { educations } from "../utils/data/educations.js";
import { experienceMetrics, proofStats } from "../utils/data/metrics.js";
import { projectsData } from "../utils/data/projects-data.js";
import { services, workSteps } from "../utils/data/services.js";
import { skillGroups } from "../utils/data/skills.js";
import { getDict } from "../utils/i18n/dictionary.js";

const en = getDict("en");
const vi = getDict("vi");

const keysDeep = (obj, prefix = "") =>
  Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === "object" && !Array.isArray(v) ? keysDeep(v, `${prefix}${k}.`) : [`${prefix}${k}`],
  );

test("every English UI string has a Vietnamese counterpart", () => {
  const viKeys = new Set(keysDeep(vi));
  const missing = keysDeep(en).filter((k) => !viKeys.has(k));
  assert.deepEqual(missing, []);
});

test("every data item has a Vietnamese override with the same list lengths", () => {
  for (const s of services) {
    const o = vi.services.items[s.id];
    assert.ok(o, `service ${s.id}`);
    assert.equal(o.deliverables.length, s.deliverables.length, `service ${s.id} deliverables`);
  }
  for (const step of workSteps) assert.ok(vi.services.steps[step.step], `step ${step.step}`);
  for (const e of experiences) {
    const o = vi.experience.items[e.id];
    assert.ok(o, `experience ${e.id}`);
    assert.equal(o.highlights.length, e.highlights.length, `experience ${e.id} highlights`);
  }
  for (const p of projectsData) assert.ok(vi.projects.items[p.id], `project ${p.id}`);
  for (const ed of educations) assert.ok(vi.education[ed.id], `education ${ed.id}`);
  for (const g of skillGroups) assert.ok(vi.skills.groups[g.title], `skill group ${g.title}`);
  assert.equal(en.about.values.length, vi.about.values.length);
});

test("every metric label exists in both languages", () => {
  const all = [...proofStats, ...Object.values(experienceMetrics).flat()];
  for (const m of all) {
    assert.ok(m.label.en && m.label.vi, m.value);
  }
});
