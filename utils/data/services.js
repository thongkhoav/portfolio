// Services shown in the "Services" panel. Scope: web & app development and
// AI/LLM features inside software. Prices are not published yet.
export const services = [
  {
    id: "web-app",
    tag: "For startups & product teams",
    title: "Web & mobile app development",
    pitch:
      "A production web or mobile app from requirements to launch: interface, API, database, login, payments and push notifications, built to be maintained.",
    deliverables: [
      "Next.js / React frontend, responsive by default",
      "API on FastAPI or NestJS with PostgreSQL",
      "Mobile releases on the App Store and Google Play",
      "Deployed with CI/CD and a clear hand-off",
    ],
    stack: ["Next.js", "NestJS", "FastAPI", "PostgreSQL"],
    subject: "Web & mobile app development",
  },
  {
    id: "llm-features",
    tag: "For existing products",
    title: "AI & LLM features in your software",
    pitch:
      "Add LLM-powered features — assistants, search over your documents, summaries — to an app you already run, and know what they cost.",
    deliverables: [
      "LLM feature integrated into your current stack",
      "Evals that show when answers go wrong",
      "Cost per request tracked from day one",
    ],
    stack: ["OpenAI / Anthropic APIs", "RAG", "Python", "Langfuse"],
    subject: "AI & LLM features",
  },
  {
    id: "integrations-cloud",
    tag: "For teams that need it running",
    title: "Integrations & cloud deploy",
    pitch:
      "Connect the third-party services your product depends on and put it on infrastructure that stays up.",
    deliverables: [
      "Payments, maps, social login and messaging APIs",
      "AWS environments with Terraform (ECS, RDS, S3)",
      "Monitoring and runbooks your team can follow",
    ],
    stack: ["AWS", "Terraform", "Docker", "GitHub Actions"],
    subject: "Integrations & cloud deploy",
  },
];

export const workSteps = [
  {
    step: "01",
    title: "Scope call",
    body: "30 minutes to agree on the outcome, the must-haves and what is out of scope.",
  },
  {
    step: "02",
    title: "Build in milestones",
    body: "Small, demoable milestones with a fixed scope, so you see progress every week.",
  },
  {
    step: "03",
    title: "Launch & support",
    body: "Deploy, hand-off documentation and optional monthly maintenance.",
  },
];

// Working habits shown under "How I work".
export const workPrinciples = [
  {
    id: "scope",
    title: "Scope first",
    body: "I ask questions until the scope is clear, then confirm it in writing before I start.",
  },
  {
    id: "updates",
    title: "No surprises",
    body: "Regular, plain updates. If something blocks the work, you hear about it the same day.",
  },
  {
    id: "reply",
    title: "Replies within 2 hours",
    body: "During my working hours (GMT+7), messages get a reply in under 2 hours.",
  },
  {
    id: "delivery",
    title: "Fast, on-time delivery",
    body: "Small milestones that ship on the agreed date, so the project keeps moving.",
  },
];
