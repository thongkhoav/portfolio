import { skillGroups } from "@/utils/data/skills";
import { getDict } from "@/utils/i18n/dictionary";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Reveal from "../../helper/reveal";
import SectionHeading from "../../helper/section-heading";

function Skills({ lang = "en" }) {
  const t = getDict(lang).skills;

  return (
    <section id="skills" className="py-16 lg:py-24">
      <SectionHeading index="05" label={t.label} title={t.title} />

      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} variant="tilt" delay={(i % 2) * 140} className="rounded-2xl border border-line bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              {t.groups?.[group.title] || group.title}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map(({ name, icon }, k) => {
                const image = icon ? skillsImage(icon) : null;
                return (
                  <Reveal
                    as="li"
                    key={name}
                    variant="zoom"
                    delay={(i % 2) * 140 + 200 + k * 60}
                    className="flex items-center gap-2 rounded-lg border border-line bg-ink/60 px-3 py-2 text-sm text-text transition-colors hover:border-brand/50"
                  >
                    {image?.src ? (
                      <Image src={image.src} alt="" width={18} height={18} className="h-[18px] w-[18px]" />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    )}
                    {name}
                  </Reveal>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
