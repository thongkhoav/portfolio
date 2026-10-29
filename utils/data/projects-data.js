export const projectsData = [
  {
    id: 1,
    name: "Task Management App",
    description:
      "A collaborative task management platform with room-based membership, task assignment, real-time status updates, Google authentication, Redis-backed reminders, and Firebase push notifications.",
    tools: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Socket.io",
      "Firebase",
      "Docker",
      "AWS",
    ],
    role: "Full-stack Developer",
    code: [
      {
        label: "Frontend",
        url: "https://github.com/thongkhoav/fe_task_nextjs",
      },
      {
        label: "Backend",
        url: "https://github.com/thongkhoav/be_task_nestjs",
      },
    ],
    demo: "https://fe-task-nextjs.vercel.app",
    // Vercel returns DEPLOYMENT_NOT_FOUND (checked 2026-10-22). Set to true
    // after redeploying so the "Live demo" button shows again.
    demoOnline: false,
  },
  {
    id: 2,
    name: "Enterprise AI Assistant",
    description:
      "A RAG chatbot that answers from uploaded PDFs, DOCX and Markdown, cites the exact passage and PDF page, and says \"I don't know\" when the documents don't cover the question. A LangGraph router sends metric questions to a database tool and ticket requests to a ticket tool.",
    tools: ["Python", "FastAPI", "LangGraph", "Chroma", "React", "TypeScript", "OpenAI API", "Docker"],
    role: "Personal project",
    code: [
      {
        label: "GitHub",
        url: "https://github.com/thongkhoav/enterprise-ai-assistant",
      },
    ],
    // No public deployment yet; the card shows only the source link.
    demo: null,
    demoOnline: false,
  },
];

// Client work done at my full-time job. Names, code and screenshots stay
// private (NDA), so this is a summary card instead of project cards.
export const clientWork = {
  name: "Client products (under NDA)",
  role: "Software Engineer",
  description:
    "16 real products for clients, built and maintained with the team at my full-time job. Names, code and screenshots stay private.",
  highlights: [
    "Mobile apps released to the App Store and Google Play",
    "Push notifications and in-app payments",
    "Web and app products with 70+ screens",
    "UX improvements on the flows users rely on every day",
  ],
  domains: ["Food","E-commerce", "Education", "Blog", "Landing pages", "Inventory management"],
};
