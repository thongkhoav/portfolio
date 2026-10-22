import { experiences } from "@/utils/data/experience";
import { experienceMetrics, formatTenure, roleMonths } from "@/utils/data/metrics";
import { getDict, localize } from "@/utils/i18n/dictionary";
import CountUp from "../../helper/count-up";
import Reveal from "../../helper/reveal";
import SectionHeading from "../../helper/section-heading";

function Experience({ lang = "en" }) {
  const t = getDict(lang).experience;

  return (
    <section id="experience" className="py-16 lg:py-24">
      <SectionHeading index="02" label={t.label} title={t.title} />

      <Reveal className="relative pl-8 sm:pl-12">
        <span className="timeline-line absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-brand via-line to-transparent sm:left-[11px]" />

        <div className="space-y-8">
          {experiences.map((raw, i) => {
            const experience = localize(raw, t.items?.[raw.id]);
            const metrics = experienceMetrics[raw.id] || [];
            return (
              <Reveal key={experience.id} variant="left" delay={i * 150} className="relative">
                <span className="absolute -left-8 top-6 grid h-4 w-4 place-items-center rounded-full border-2 border-brand bg-ink sm:-left-12 sm:h-6 sm:w-6">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand sm:h-2 sm:w-2" />
                </span>

                <article className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-brand/50 lg:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white sm:text-xl">{experience.title}</h3>
                      <p className="mt-1 text-muted">{experience.company}</p>
                    </div>
                    <p className="font-mono text-xs text-brand sm:text-right sm:text-sm">
                      {experience.duration}
                      <span className="block text-muted">{formatTenure(roleMonths(raw), lang)}</span>
                    </p>
                  </div>

                  {metrics.length ? (
                    <div className="mt-6">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{t.numbers}</p>
                      <div className="mt-3 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
                        {metrics.map(({ value, label }, m) => (
                          <Reveal key={label.en} variant="zoom" delay={250 + m * 110} className="bg-ink/70 p-4">
                            <CountUp value={value} className="font-mono text-2xl font-bold text-brand sm:text-3xl" />
                            <p className="mt-1 text-xs leading-snug text-muted sm:text-sm">{label[lang] || label.en}</p>
                          </Reveal>
                        ))}
                      </div>
                      <p className="mt-2 font-mono text-[11px] text-muted/70">{t.source}</p>
                    </div>
                  ) : null}

                  <ul className="mt-6 space-y-2.5">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-text/90 sm:text-base">
                        <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-brand/70" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

export default Experience;
