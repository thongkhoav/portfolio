import { personalData } from "@/utils/data/personal-data";
import { projectsData } from "@/utils/data/projects-data";
import { getDict, localize } from "@/utils/i18n/dictionary";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import Reveal from "../../helper/reveal";
import SectionHeading from "../../helper/section-heading";
import ProjectCard from "./project-card";

const Projects = ({ lang = "en" }) => {
  const t = getDict(lang).projects;

  return (
    <section id="projects" className="py-16 lg:py-24">
      <SectionHeading index="03" label={t.label} title={t.title} />

      <div className="grid gap-5">
        {projectsData.map((raw, index) => (
          <Reveal key={raw.id} variant="tilt" delay={index * 120}>
            <ProjectCard project={localize(raw, t.items?.[raw.id])} index={index} t={t} />
          </Reveal>
        ))}

        <Reveal variant="blur">
          <Link
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-dashed border-line px-6 py-5 text-muted transition-colors hover:border-brand hover:text-white"
          >
            <span className="flex items-center gap-3">
              <BsGithub size={20} />
              {t.more}
            </span>
            <MdArrowOutward className="transition-transform group-hover:rotate-45" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
