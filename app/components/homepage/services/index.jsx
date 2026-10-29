import { personalData } from "@/utils/data/personal-data";
import { services, workPrinciples, workSteps } from "@/utils/data/services";
import { getDict, localize } from "@/utils/i18n/dictionary";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import Reveal from "../../helper/reveal";
import SectionHeading from "../../helper/section-heading";
import SpotlightCard from "../../helper/spotlight-card";

function Services({ lang = "en" }) {
  const t = getDict(lang).services;
  const mailto = (subject) =>
    `mailto:${personalData.email}?subject=${encodeURIComponent(`${t.subjectPrefix} ${subject}`)}`;

  return (
    <section id="services" className="py-16 lg:py-24">
      <SectionHeading index="01" label={t.label} title={t.title} intro={t.intro} />

      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((raw, i) => {
          const service = localize(raw, t.items?.[raw.id]);
          return (
            <Reveal key={service.id} variant="tilt" delay={i * 140} className="h-full">
              <SpotlightCard className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-xs uppercase tracking-wider text-brand">{service.tag}</p>
                  <span className="font-mono text-xs text-muted/60">0{i + 1}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.pitch}</p>

                <ul className="mt-5 space-y-2.5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-text/90">
                      <FiCheck className="mt-0.5 shrink-0 text-live" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {service.stack.map((tool) => (
                    <span key={tool} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                      {tool}
                    </span>
                  ))}
                </div>

                <Link
                  href={mailto(service.title)}
                  className="mt-auto inline-flex items-center gap-1.5 self-start pt-6 text-sm font-semibold text-brand"
                >
                  {t.ask}
                  <MdArrowOutward className="transition-transform group-hover:rotate-45" />
                </Link>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl border border-dashed border-line p-6 lg:p-8">
        <Reveal as="p" variant="blur" className="font-mono text-xs uppercase tracking-wider text-muted">
          {t.howIWork}
        </Reveal>
        <ol className="mt-5 grid gap-6 md:grid-cols-3">
          {workSteps.map((raw, i) => {
            const { step, title, body } = localize(raw, t.steps?.[raw.step]);
            return (
              <Reveal as="li" key={step} variant="left" delay={i * 160} className="flex gap-4">
                <span className="font-mono text-2xl font-bold text-brand">{step}</span>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <Reveal as="p" variant="blur" className="mt-10 font-mono text-xs uppercase tracking-wider text-muted">
          {t.workingWithMe}
        </Reveal>
        <ul className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workPrinciples.map((raw, i) => {
            const { id, title, body } = localize(raw, t.principles?.[raw.id]);
            return (
              <Reveal as="li" key={id} variant="left" delay={i * 120} className="flex gap-3">
                <FiCheck className="mt-1 shrink-0 text-live" />
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Services;
