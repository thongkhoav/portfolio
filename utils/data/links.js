import { channels } from "./channels.js";
import { personalData } from "./personal-data.js";

// Content for /links — the page behind the TikTok bio link.
// Rules from reports/Link in bio cho TikTok.md:
// - no public phone number: contact goes through a Zalo QR friend link,
//   which does not contain the number (Rio's choice, 2026-10-22);
// - affiliate/Shopee links do not go here — use a separate /uses page later,
//   each labelled as affiliate (Law on Advertising 75/2025);
// - keep it to about 8 primary links, most important first.

const mail = (subject) =>
  `mailto:${personalData.email}?subject=${encodeURIComponent(subject)}`;

export const linksPage = {
  tagline: "Dev full-stack ở Sài Gòn · quê miền Tây",
  intro: "Mình làm web app từ đầu đến cuối, và đưa tính năng AI/LLM vào phần mềm chạy thật.",
  primary: {
    label: "Liên hệ hợp tác",
    sub: "Gửi vài dòng mô tả việc bạn cần",
    href: mail("[Hợp tác] Từ TikTok"),
  },
  // Zalo row sits right under the primary button.
  zalo: {
    label: "Kết bạn Zalo",
    sub: "Nhắn tin nhanh qua Zalo",
    href: personalData.zalo,
  },
  services: [
    {
      title: "Làm web app trọn gói",
      sub: "Từ yêu cầu tới lúc chạy thật: giao diện, API, database, deploy",
      href: mail("[Hợp tác] Làm web app"),
    },
    {
      title: "Tích hợp AI/LLM vào phần mềm",
      sub: "Trợ lý, tìm kiếm tài liệu, tóm tắt — có đo độ chính xác và chi phí",
      href: mail("[Hợp tác] Tích hợp AI/LLM"),
    },
    {
      title: "Tích hợp dịch vụ & triển khai cloud",
      sub: "Thanh toán, bản đồ, đăng nhập; AWS và CI/CD",
      href: mail("[Hợp tác] Tích hợp và cloud"),
    },
  ],
  more: [
    { label: "Portfolio", sub: "Kinh nghiệm, dự án, dịch vụ", href: "/vi", kind: "portfolio" },
    { label: "YouTube", sub: "Bản dài của các video", href: channels.youtube.url, kind: "youtube" },
    { label: "GitHub", sub: "Code và công cụ mình viết", href: personalData.github, kind: "github" },
  ],
  socials: [
    { label: "TikTok", href: channels.tiktok.url, kind: "tiktok" },
    { label: "YouTube", href: channels.youtube.url, kind: "youtube" },
    { label: "LinkedIn", href: personalData.linkedIn, kind: "linkedin" },
    { label: "GitHub", href: personalData.github, kind: "github" },
    { label: "Email", href: `mailto:${personalData.email}`, kind: "email" },
  ],
  disclosure: "Trang này hiện không có link quảng cáo hay affiliate.",
};
