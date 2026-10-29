import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import SpotlightCard from "../../helper/spotlight-card";

function ProjectCard({ project, index = 0, t }) {
  return (
    <SpotlightCard className="group grid overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-brand/50 lg:grid-cols-[1.2fr_1fr]">
      <div className="p-6 lg:p-8">
        <p className="font-mono text-xs text-accent">
          {String(index + 1).padStart(2, "0")} · {project.role}
        </p>
        <h3 className="mt-3 text-2xl font-bold text-heading">{project.name}</h3>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demoOnline ? (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-on-brand transition-transform hover:-translate-y-0.5"
            >
              <FiExternalLink />
              {t.demo}
            </Link>
          ) : project.demo ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-4 py-2 text-sm text-muted">
              {t.demoOffline}
            </span>
          ) : null}
          {project.code.map((source) => (
            <Link
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-heading transition-colors hover:border-brand hover:text-accent"
            >
              <FaGithub />
              {project.codeLabels?.[source.label] || source.label} {t.source}
            </Link>
          ))}
        </div>
      </div>

      <div className="relative border-t border-line bg-ink/60 p-6 font-mono text-xs leading-6 lg:border-l lg:border-t-0 lg:p-8 lg:text-sm">
        <div className="mb-4 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="text-muted">{"// stack"}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-line bg-surface px-2 py-0.5 text-text transition-colors group-hover:border-brand/40"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}

export default ProjectCard;
