import { educations } from "@/utils/data/educations";
import { getDict, localize } from "@/utils/i18n/dictionary";
import { FiBookOpen } from "react-icons/fi";
import Reveal from "../../helper/reveal";

function Education({ lang = "en" }) {
  const overrides = getDict(lang).education;

  return (
    <section id="education" className="py-10">
      {educations.map((raw) => {
        const education = localize(raw, overrides?.[raw.id]);
        return (
          <Reveal
            key={education.id}
            variant="blur"
            className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-accent">
                <FiBookOpen size={20} />
              </span>
              <div>
                <p className="font-semibold text-heading">{education.title}</p>
                <p className="text-sm text-muted">
                  {education.institution} · {education.details}
                </p>
              </div>
            </div>
            <p className="font-mono text-xs text-accent sm:text-sm">{education.duration}</p>
          </Reveal>
        );
      })}
    </section>
  );
}

export default Education;
