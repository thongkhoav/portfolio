import { channels } from "@/utils/data/channels";
import { proofStats } from "@/utils/data/metrics";
import { personalData } from "@/utils/data/personal-data";
import { getDict } from "@/utils/i18n/dictionary";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsTiktok, BsYoutube } from "react-icons/bs";
import { MdArrowOutward, MdDownload } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import CountUp from "../../helper/count-up";
import Parallax from "../../helper/parallax";
import Reveal from "../../helper/reveal";

const SOCIALS = [
  { label: "GitHub", href: personalData.github, Icon: BsGithub },
  { label: "LinkedIn", href: personalData.linkedIn, Icon: BsLinkedin },
  { label: "LeetCode", href: personalData.leetcode, Icon: SiLeetcode },
  { label: "TikTok", href: channels.tiktok.url, Icon: BsTiktok },
  { label: "YouTube", href: channels.youtube.url, Icon: BsYoutube },
];

function HeroSection({ lang = "en" }) {
  const t = getDict(lang).hero;
  const [portrait] = personalData.profileImages;

  return (
    <section className="relative pb-16 pt-10 lg:pb-24 lg:pt-16">
      <div className="bg-grid pointer-events-none absolute inset-x-[-50vw] top-[-6rem] -z-10 h-[38rem]" />
      <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Reveal immediate>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
              </span>
              {t.availability} · {getDict(lang).footer.rights}
            </span>
          </Reveal>

          <Reveal immediate delay={80}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              {t.hi} {t.name}
              <span className="text-muted"> ({personalData.nickname})</span>.
              <span className="mt-2 block text-brand">{t.designation}</span>
            </h1>
          </Reveal>

          <Reveal immediate delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{t.headline}</p>
          </Reveal>

          <Reveal immediate delay={240} className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {t.ctaPrimary}
              <MdArrowOutward className="transition-transform group-hover:rotate-45" />
            </Link>
            <Link
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-brand hover:text-brand"
            >
              {t.ctaResume}
              <MdDownload />
            </Link>
          </Reveal>

          <Reveal immediate delay={320} className="mt-8 flex items-center gap-2">
            {SOCIALS.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                <Icon size={18} />
              </Link>
            ))}
          </Reveal>
        </div>

        <Reveal immediate variant="zoom" delay={120} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface">
            <Parallax speed={-0.06} className="absolute inset-[-8%]">
              <Image
                src={portrait}
                alt={t.portraitAlt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 36vw"
                className="object-cover object-[50%_35%]"
              />
            </Parallax>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          </div>

          <div className="animate-float absolute -bottom-6 -left-4 rounded-xl border border-line bg-surface/95 px-4 py-3 font-mono text-xs shadow-2xl backdrop-blur sm:-left-8">
            <p className="text-muted">$ whoami</p>
            <p className="cursor mt-1 text-white">{t.whoami}</p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
        {proofStats.map(({ value, label }) => (
          <div key={label.en} className="bg-ink px-5 py-5 sm:px-6">
            <CountUp value={value} className="font-mono text-3xl font-bold text-brand" />
            <p className="mt-1 text-sm text-muted">{label[lang] || label.en}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export default HeroSection;
