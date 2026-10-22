import { channels } from "@/utils/data/channels";
import { linksPage } from "@/utils/data/links";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsTiktok, BsYoutube } from "react-icons/bs";
import { FiBriefcase } from "react-icons/fi";
import { SiZalo } from "react-icons/si";
import { MdAlternateEmail, MdArrowOutward } from "react-icons/md";
import Reveal from "../components/helper/reveal";

export const metadata = {
  title: `${personalData.nickname} · ${personalData.name} — links`,
  description: linksPage.intro,
  openGraph: {
    title: `${personalData.nickname} · ${personalData.name}`,
    description: linksPage.intro,
    images: [{ url: "/image/avatar-front-of-laptop.jpg", width: 1080, height: 1920 }],
  },
};

const ICONS = {
  tiktok: BsTiktok,
  youtube: BsYoutube,
  linkedin: BsLinkedin,
  github: BsGithub,
  email: MdAlternateEmail,
  portfolio: FiBriefcase,
};

const isExternal = (href) => href.startsWith("http");
const linkProps = (href) =>
  isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};

function Row({ href, title, sub, Icon, delay }) {
  return (
    <Reveal immediate delay={delay} className="min-w-0">
      <Link
        href={href}
        {...linkProps(href)}
        className="group flex items-center gap-4 rounded-2xl border border-line bg-surface px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-brand/60 active:scale-[0.99]"
      >
        {Icon ? (
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-text">
            <Icon size={18} />
          </span>
        ) : null}
        <span className="min-w-0 flex-1">
          <span className="block font-semibold text-white">{title}</span>
          {sub ? <span className="mt-0.5 block text-sm leading-snug text-muted">{sub}</span> : null}
        </span>
        <MdArrowOutward className="shrink-0 text-muted transition-all group-hover:rotate-45 group-hover:text-brand" />
      </Link>
    </Reveal>
  );
}

export default function LinksPage() {
  const { tagline, intro, primary, zalo, services, more, socials, disclosure } = linksPage;
  // Stagger: each block enters STEP ms after the previous one.
  const STEP = 60;
  const servicesAt = 3 * STEP;
  const moreAt = servicesAt + (services.length + 1) * STEP;
  const socialsAt = moreAt + (more.length + 1) * STEP;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-80" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />

      <main className="mx-auto flex max-w-md flex-col px-4 pb-10 pt-12">
        <Reveal immediate className="flex flex-col items-center text-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-brand">
            <Image
              src="/image/avatar-front-of-laptop.jpg"
              alt={personalData.name}
              fill
              priority
              sizes="96px"
              className="object-cover object-[50%_28%]"
            />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-white">
            {personalData.nickname} · {personalData.name}
          </h1>
          <p className="mt-1 font-mono text-xs text-brand">{channels.tiktok.handle}</p>
          <p className="mt-3 text-sm text-muted">{tagline}</p>
          <p className="mt-2 text-balance text-base text-text">{intro}</p>
        </Reveal>

        <Reveal immediate delay={STEP} className="mt-7">
          <Link
            href={primary.href}
            className="group flex items-center justify-between rounded-2xl bg-brand px-5 py-4 text-ink transition-transform hover:-translate-y-0.5 active:scale-[0.99]"
          >
            <span>
              <span className="block text-lg font-bold">{primary.label}</span>
              <span className="block text-sm text-ink/70">{primary.sub}</span>
            </span>
            <MdArrowOutward size={22} className="transition-transform group-hover:rotate-45" />
          </Link>
        </Reveal>

        <div className="mt-2.5 grid">
          <Row href={zalo.href} title={zalo.label} sub={zalo.sub} Icon={SiZalo} delay={2 * STEP} />
        </div>

        <Reveal immediate delay={servicesAt} as="p" className="mb-3 mt-8 font-mono text-xs uppercase tracking-wider text-muted">
          &gt; mình có thể làm
        </Reveal>
        <div className="grid gap-2.5">
          {services.map((s, i) => (
            <Row key={s.title} href={s.href} title={s.title} sub={s.sub} delay={servicesAt + (i + 1) * STEP} />
          ))}
        </div>

        <Reveal immediate delay={moreAt} as="p" className="mb-3 mt-8 font-mono text-xs uppercase tracking-wider text-muted">
          &gt; xem thêm
        </Reveal>
        <div className="grid gap-2.5">
          {more.map((m, i) => (
            <Row key={m.label} href={m.href} title={m.label} sub={m.sub} Icon={ICONS[m.kind]} delay={moreAt + (i + 1) * STEP} />
          ))}
        </div>

        <Reveal immediate delay={socialsAt} className="mt-10 flex justify-center gap-2">
          {socials.map(({ label, href, kind }) => {
            const Icon = ICONS[kind];
            return (
              <Link
                key={label}
                href={href}
                {...linkProps(href)}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-brand hover:text-brand"
              >
                <Icon size={18} />
              </Link>
            );
          })}
        </Reveal>

        <p className="mt-8 text-center font-mono text-[11px] leading-5 text-muted/70">
          {disclosure}
          <br />© {new Date().getFullYear()} {personalData.name}
        </p>
      </main>
    </div>
  );
}
