import { personalData } from "@/utils/data/personal-data";
import { getDict } from "@/utils/i18n/dictionary";
import Image from "next/image";
import { FiActivity, FiCloud, FiCpu } from "react-icons/fi";
import Reveal from "../../helper/reveal";
import SectionHeading from "../../helper/section-heading";

const ICONS = [FiActivity, FiCloud, FiCpu];

// Real photos, all exported at 4:3 so the three tiles are the same size on
// desktop (flex-grow = ratio) and the same height in the phone swipe row.
// Keep new gallery photos at 1600x1200 to preserve that.
const GALLERY = [
  { src: personalData.profileImages[1], ratio: 1600 / 1200, w: 1600, h: 1200 },
  { src: personalData.profileImages[2], ratio: 1600 / 1200, w: 1600, h: 1200 },
  { src: personalData.profileImages[3], ratio: 1600 / 1200, w: 1600, h: 1200 },
];

function AboutSection({ lang = "en" }) {
  const t = getDict(lang).about;

  return (
    <section id="about" className="py-16 lg:py-24">
      <SectionHeading index="04" label={t.label} title={t.title} />

      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <Reveal variant="blur">
          <p className="text-lg leading-relaxed text-text/90 lg:text-xl">{t.description}</p>
        </Reveal>

        <div className="grid gap-4">
          {t.values.map(({ title, body }, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal
                key={title}
                variant="right"
                delay={i * 120}
                className="flex gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand/50"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 md:mx-0 md:gap-4 md:overflow-visible md:px-0 md:pb-0">
        {GALLERY.map(({ src, ratio, w, h }, i) => (
          <Reveal
            key={src}
            as="figure"
            variant="wipe"
            delay={i * 150}
            className="group relative h-72 shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-surface sm:h-80 md:h-auto md:shrink md:[flex:var(--ar)_1_0%]"
            style={{ aspectRatio: ratio, "--ar": ratio, "--reveal-delay": `${i * 150}ms` }}
          >
            <Image
              src={src}
              alt={t.gallery[i]}
              width={w}
              height={h}
              sizes="(max-width: 768px) 80vw, 40vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-4 pb-3 pt-10 text-sm text-text opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {t.gallery[i]}
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
