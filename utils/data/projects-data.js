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
];
