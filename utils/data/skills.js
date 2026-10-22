export const skillsData = [
  "Javascript",
  "Typescript",
  "Python",
  "React",
  "Next JS",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Git",
  "Tailwind",
];

// Grouped view used by the Skills panel. `icon` is the skillsImage() key;
// items without an icon render as a text chip.
export const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "TypeScript", icon: "Typescript" },
      { name: "JavaScript", icon: "Javascript" },
      { name: "React", icon: "React" },
      { name: "Next.js", icon: "Next JS" },
      { name: "Tailwind CSS", icon: "Tailwind" },
    ],
  },
  {
    title: "Backend & data",
    items: [
      { name: "Python", icon: "Python" },
      { name: "FastAPI" },
      { name: "NestJS" },
      { name: "PostgreSQL", icon: "PostgreSQL" },
      { name: "MongoDB", icon: "MongoDB" },
    ],
  },
  {
    title: "Cloud & delivery",
    items: [
      { name: "AWS", icon: "AWS" },
      { name: "Docker", icon: "Docker" },
      { name: "Terraform" },
      { name: "GitHub Actions" },
      { name: "Git", icon: "Git" },
    ],
  },
  {
    title: "AI & LLM integration",
    items: [
      { name: "OpenAI & Anthropic APIs" },
      { name: "RAG" },
      { name: "LLM evals & tracing" },
      { name: "Claude Code / Codex" },
    ],
  },
];
