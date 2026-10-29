// UI copy and Vietnamese overrides for the portfolio. English data lives in
// utils/data/*; Vietnamese overrides are keyed by the same ids, so data and
// translations cannot drift apart silently (see tests/i18n.test.mjs).

export const LANGS = ["en", "vi"];
export const pathFor = (lang) => (lang === "vi" ? "/vi" : "/");

const en = {
  meta: {
    title: "Vo Thong Khoa | Software Engineer",
    description:
      "Software Engineer in Ho Chi Minh City building production web applications and AI/LLM features with Next.js, NestJS, FastAPI, PostgreSQL and AWS.",
  },
  nav: {
    about: "About",
    services: "Services",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    cta: "Work with me",
    open: "Open menu",
    close: "Close menu",
    switchTo: "Tiếng Việt",
  },
  hero: {
    name: "Vo Thong Khoa",
    hi: "Hi, I'm",
    designation: "Software Engineer.",
    headline:
      "I build web applications end to end — and the AI features inside them that actually ship.",
    availability: "Open to web & app projects",
    ctaPrimary: "See what I can build",
    ctaResume: "Get resume",
    whoami: "full-stack · web · llm integration",
    portraitAlt: "Vo Thong Khoa by the Saigon River at night",
  },
  about: {
    label: "about",
    title: "Who I am",
    description:
      "Software Engineer based in Ho Chi Minh City, building production web applications with Next.js, NestJS, FastAPI, PostgreSQL, and AWS. I focus on end-to-end delivery, third-party integrations, cloud infrastructure, and AI-assisted engineering, turning product requirements into reliable and maintainable systems.",
    values: [
      {
        title: "Ships end to end",
        body: "From product requirement to a running service: API, UI, integrations and deploy.",
      },
      {
        title: "Owns the infrastructure",
        body: "Designs and operates AWS environments with Terraform and CI, and keeps an eye on the bill.",
      },
      {
        title: "Works with AI agents daily",
        body: "Uses Claude Code and Codex in real delivery, with tests and reviews to keep output trustworthy.",
      },
    ],
    gallery: [
      "Coding at the office desk",
      "Working remotely from a café in my hometown",
      "Working from my home desk in the Mekong Delta",
    ],
  },
  services: {
    label: "services",
    title: "What I can build for you",
    intro:
      "Web and app development, from the first screen to production — including AI and LLM features where they earn their place.",
    ask: "Ask about this",
    subjectPrefix: "[Project]",
    howIWork: "How I work",
    workingWithMe: "Working with me",
  },
  experience: {
    label: "experience",
    title: "Where I have worked",
    numbers: "By the numbers",
    source: "Counted from git history across client repositories, Oct 2026.",
  },
  projects: {
    label: "projects",
    title: "Selected work",
    demo: "Live demo",
    demoOffline: "Demo is being redeployed",
    source: "source",
    more: "More experiments and tools on GitHub",
    clientWork: {
      highlightsLabel: "What these projects covered",
      domainsLabel: "Domains",
    },
  },
  skills: { label: "skills", title: "Tools I use every week" },
  contact: {
    label: "contact",
    title: "Have a web or app project in mind?",
    body: "Tell me what you want to build and when you need it. A few lines is enough to start.",
    zalo: "Add me on Zalo",
    resume: "Resume",
    note: "Email is best for project briefs and quotes. For a quick chat, add me on Zalo.",
  },
  band: {
    title: "Like what you see?",
    body: "Tell me what you want to build. I will reply with questions, a rough plan and a timeline.",
    cta: "Start a conversation",
  },
  footer: { rights: "Ho Chi Minh City, Viet Nam" },
};

const vi = {
  meta: {
    title: "Võ Thống Khoa | Kỹ sư phần mềm",
    description:
      "Kỹ sư phần mềm ở TP.HCM, làm web app production và tính năng AI/LLM với Next.js, NestJS, FastAPI, PostgreSQL và AWS.",
  },
  nav: {
    about: "Giới thiệu",
    services: "Dịch vụ",
    experience: "Kinh nghiệm",
    projects: "Dự án",
    skills: "Kỹ năng",
    contact: "Liên hệ",
    cta: "Làm việc với mình",
    open: "Mở menu",
    close: "Đóng menu",
    switchTo: "English",
  },
  hero: {
    name: "Võ Thống Khoa",
    hi: "Chào, mình là",
    designation: "Kỹ sư phần mềm.",
    headline: "Mình làm web app từ đầu đến cuối — và đưa tính năng AI vào phần mềm chạy thật.",
    availability: "Nhận dự án web và app",
    ctaPrimary: "Xem mình làm được gì",
    ctaResume: "Tải CV",
    whoami: "full-stack · web · tích hợp llm",
    portraitAlt: "Võ Thống Khoa bên sông Sài Gòn buổi tối",
  },
  about: {
    label: "giới thiệu",
    title: "Mình là ai",
    description:
      "Kỹ sư phần mềm ở TP.HCM, làm web app production với Next.js, NestJS, FastAPI, PostgreSQL và AWS. Mình tập trung vào việc giao sản phẩm trọn vẹn, tích hợp dịch vụ bên thứ ba, hạ tầng cloud và lập trình cùng AI, biến yêu cầu sản phẩm thành hệ thống ổn định, dễ bảo trì.",
    values: [
      {
        title: "Làm trọn từ đầu đến cuối",
        body: "Từ yêu cầu sản phẩm tới dịch vụ chạy thật: API, giao diện, tích hợp và deploy.",
      },
      {
        title: "Tự lo hạ tầng",
        body: "Thiết kế và vận hành môi trường AWS bằng Terraform và CI, để mắt tới cả hoá đơn cloud.",
      },
      {
        title: "Làm việc cùng AI agent hằng ngày",
        body: "Dùng Claude Code và Codex trong dự án thật, có test và review để kết quả đáng tin.",
      },
    ],
    gallery: [
      "Code ở bàn làm việc văn phòng",
      "Làm việc từ xa ở quán cà phê dưới quê",
      "Làm việc ở bàn tại nhà dưới quê miền Tây",
    ],
  },
  services: {
    label: "dịch vụ",
    title: "Mình có thể làm gì cho bạn",
    intro:
      "Phát triển web và app, từ màn hình đầu tiên tới lúc chạy production — kể cả tính năng AI/LLM khi nó thật sự cần.",
    ask: "Hỏi về gói này",
    subjectPrefix: "[Dự án]",
    howIWork: "Cách mình làm việc",
    workingWithMe: "Khi làm việc với mình",
    items: {
      "web-app": {
        tag: "Cho startup và đội sản phẩm",
        title: "Phát triển web & mobile app",
        pitch:
          "Một web hoặc mobile app chạy production từ yêu cầu tới ra mắt: giao diện, API, database, đăng nhập, thanh toán và thông báo đẩy, dễ bảo trì về sau.",
        deliverables: [
          "Frontend Next.js / React, chạy tốt trên điện thoại",
          "API bằng FastAPI hoặc NestJS với PostgreSQL",
          "Phát hành app lên App Store và Google Play",
          "Deploy có CI/CD và tài liệu bàn giao rõ ràng",
        ],
      },
      "llm-features": {
        tag: "Cho sản phẩm đang chạy",
        title: "Tính năng AI & LLM trong phần mềm",
        pitch:
          "Thêm tính năng dùng LLM — trợ lý, tìm kiếm trong tài liệu, tóm tắt — vào app bạn đang có, và biết rõ nó tốn bao nhiêu.",
        deliverables: [
          "Tính năng LLM tích hợp vào stack hiện tại",
          "Bộ eval cho biết khi nào câu trả lời sai",
          "Theo dõi chi phí mỗi request ngay từ đầu",
        ],
      },
      "integrations-cloud": {
        tag: "Cho đội cần hệ thống chạy ổn",
        title: "Tích hợp & triển khai cloud",
        pitch:
          "Kết nối các dịch vụ bên thứ ba mà sản phẩm cần, và đưa nó lên hạ tầng chạy ổn định.",
        deliverables: [
          "API thanh toán, bản đồ, đăng nhập mạng xã hội, nhắn tin",
          "Môi trường AWS bằng Terraform (ECS, RDS, S3)",
          "Giám sát và runbook để đội bạn tự vận hành",
        ],
      },
    },
    steps: {
      "01": {
        title: "Gọi trao đổi phạm vi",
        body: "30 phút để thống nhất kết quả cần có, việc bắt buộc và việc nằm ngoài phạm vi.",
      },
      "02": {
        title: "Làm theo từng mốc",
        body: "Các mốc nhỏ, demo được, phạm vi cố định, để bạn thấy tiến độ mỗi tuần.",
      },
      "03": {
        title: "Ra mắt & hỗ trợ",
        body: "Deploy, tài liệu bàn giao và bảo trì hằng tháng nếu cần.",
      },
    },
    principles: {
      scope: {
        title: "Rõ phạm vi trước",
        body: "Mình hỏi tới khi phạm vi đã rõ, rồi xác nhận lại bằng văn bản trước khi bắt tay vào làm.",
      },
      updates: {
        title: "Không có bất ngờ",
        body: "Cập nhật tiến độ đều đặn, dễ hiểu. Có vấn đề làm chậm việc thì bạn biết ngay trong ngày.",
      },
      reply: {
        title: "Trả lời trong 2 giờ",
        body: "Trong giờ làm việc (GMT+7), tin nhắn được trả lời trong vòng 2 giờ.",
      },
      delivery: {
        title: "Giao nhanh, đúng hạn",
        body: "Chia mốc nhỏ và giao đúng ngày đã hẹn, để dự án luôn tiến lên.",
      },
    },
  },
  experience: {
    label: "kinh nghiệm",
    title: "Kinh nghiệm làm việc",
    numbers: "Bằng con số",
    source: "Đếm từ lịch sử git trên các repo khách hàng, 10/2026.",
    items: {
      1: {
        title: "Kỹ sư phần mềm",
        duration: "11/2024 - nay",
        highlights: [
          "Giao hơn năm web app production với FastAPI, NestJS, React và Next.js.",
          "Thiết kế và vận hành hạ tầng AWS gồm VPC, EC2, ECS, ECR, RDS, S3 và IAM.",
          "Tích hợp dịch vụ bên thứ ba và của Hàn Quốc như NHN Cloud, Kakao Login, Naver Map và Payple.",
          "Làm việc trực tiếp với PM nói tiếng Anh để giao tính năng từ đầu đến cuối.",
        ],
      },
      2: {
        title: "Thực tập sinh lập trình web",
        duration: "05/2023 - 09/2023",
        highlights: [
          "Phát triển tính năng web app với Node.js và Angular cho khách hàng Nhật Bản.",
          "Review requirements cùng đội trước khi code để làm rõ phạm vi và các trường hợp biên.",
          "Họp daily stand-up mỗi ngày để báo tiến độ, nêu vướng mắc và thống nhất ưu tiên.",
          "Làm trong đội Agile/Scrum đa chức năng, giao việc đúng hạn.",
        ],
      },
    },
  },
  projects: {
    label: "dự án",
    title: "Dự án tiêu biểu",
    demo: "Xem demo",
    demoOffline: "Demo đang được deploy lại",
    source: "mã nguồn",
    more: "Thêm thử nghiệm và công cụ trên GitHub",
    clientWork: {
      highlightsLabel: "Các dự án này có gì",
      domainsLabel: "Lĩnh vực",
      name: "Sản phẩm cho khách hàng (NDA)",
      role: "Kỹ sư phần mềm",
      description:
        "16 sản phẩm thật cho khách hàng, làm và duy trì cùng đội ở công việc toàn thời gian. Tên, mã nguồn và ảnh chụp được giữ kín.",
      highlights: [
        "App phát hành trên App Store và Google Play",
        "Thông báo đẩy và thanh toán trong app",
        "Web và app hơn 70 màn hình",
        "Tối ưu trải nghiệm ở các luồng người dùng dùng hằng ngày",
      ],
      domains: ["Đồ ăn", "Thương mại điện tử", "Giáo dục", "Blog", "Landing page", "Quản lý kho"],
    },
    items: {
      1: {
        name: "Ứng dụng quản lý công việc",
        role: "Lập trình viên full-stack",
        description:
          "Nền tảng quản lý công việc theo nhóm: thành viên theo phòng, giao việc, cập nhật trạng thái thời gian thực, đăng nhập Google, nhắc việc bằng Redis và thông báo đẩy qua Firebase.",
        codeLabels: { Frontend: "Frontend", Backend: "Backend" },
      },
      2: {
        name: "Trợ lý AI cho doanh nghiệp",
        role: "Dự án cá nhân",
        description:
          "Chatbot RAG trả lời từ file PDF, DOCX và Markdown đã tải lên, trích đúng đoạn và số trang PDF, và nói \"không biết\" khi tài liệu không có câu trả lời. Router LangGraph chuyển câu hỏi số liệu sang công cụ database và yêu cầu tạo ticket sang công cụ ticket.",
        codeLabels: { GitHub: "GitHub" },
      },
    },
  },
  skills: {
    label: "kỹ năng",
    title: "Công cụ mình dùng hằng tuần",
    groups: {
      Frontend: "Frontend",
      "Backend & data": "Backend & dữ liệu",
      "Cloud & delivery": "Cloud & triển khai",
      "AI & LLM integration": "Tích hợp AI & LLM",
    },
  },
  education: {
    1: {
      title: "Cử nhân Kỹ thuật phần mềm",
      institution: "Đại học FPT",
      duration: "09/2020 - 09/2024",
    },
  },
  contact: {
    label: "liên hệ",
    title: "Bạn có dự án web hoặc app?",
    body: "Kể mình nghe bạn muốn làm gì và cần khi nào. Vài dòng là đủ để bắt đầu.",
    zalo: "Kết bạn Zalo",
    resume: "CV",
    note: "Nhắn Zalo là nhanh nhất. Cần gửi tài liệu hoặc nhận báo giá thì gửi email.",
  },
  band: {
    title: "Thấy phù hợp?",
    body: "Kể mình nghe bạn muốn làm gì. Mình sẽ trả lời bằng vài câu hỏi, hướng làm sơ bộ và thời gian dự kiến.",
    cta: "Nhắn Zalo cho mình",
  },
  footer: { rights: "TP. Hồ Chí Minh, Việt Nam" },
};

const dictionaries = { en, vi };

export function getDict(lang) {
  return dictionaries[lang] || en;
}

// Merge a Vietnamese override (if any) onto an English data item.
export function localize(item, override) {
  return override ? { ...item, ...override } : item;
}
