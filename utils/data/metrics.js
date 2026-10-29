import { experiences } from "./experience.js";

// Months worked in a role, counting both the first and last month.
export function roleMonths({ start, end }, now = new Date()) {
  const [sy, sm] = start.split("-").map(Number);
  const [ey, em] = end ? end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
  return (ey - sy) * 12 + (em - sm) + 1;
}

export function totalExperienceMonths(now = new Date()) {
  return experiences.reduce((sum, role) => sum + roleMonths(role, now), 0);
}

// "2 yrs", "1 yr 11 mos", "5 mos" / "2 năm", "5 tháng"
export function formatTenure(months, lang = "en") {
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (lang === "vi") return [y && `${y} năm`, m && `${m} tháng`].filter(Boolean).join(" ");
  return [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`].filter(Boolean).join(" ");
}

// Proof numbers. Source: `git log` across the company repositories on Rio's
// machine, counted by author name, measured 2026-10-22. Client names are
// deliberately not published. Re-measure before changing a number.
export const proofStats = [
  {
    value: `${Math.floor(totalExperienceMonths() / 12)}+`,
    label: { en: "years of professional experience", vi: "năm kinh nghiệm làm việc" },
  },
  { value: "16", label: { en: "client products contributed to", vi: "sản phẩm khách hàng đã tham gia" } },
  { value: "1,900+", label: { en: "commits in the last 12 months", vi: "commit trong 12 tháng gần nhất" } },
  { value: "7", label: { en: "AWS services run in production", vi: "dịch vụ AWS vận hành production" } },
];

// Metric tiles per experience entry, keyed by experience id.
export const experienceMetrics = {
  1: [
    { value: "1,900+", label: { en: "commits, Oct 2025 – Oct 2026", vi: "commit, 10/2025 – 10/2026" } },
    { value: "16", label: { en: "client products shipped or maintained", vi: "sản phẩm khách hàng đã làm hoặc duy trì" } },
    { value: "4", label: { en: "products where I was the top committer (53–100% of commits)", vi: "sản phẩm mình commit nhiều nhất (53–100% số commit)" } },
    { value: "4", label: { en: "Korean & third-party integrations: NHN Cloud, Kakao, Naver Map, Payple", vi: "tích hợp dịch vụ Hàn Quốc và bên thứ ba: NHN Cloud, Kakao, Naver Map, Payple" } },
  ],
};
