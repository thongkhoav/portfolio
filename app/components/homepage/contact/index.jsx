import { personalData } from "@/utils/data/personal-data";
import { getDict } from "@/utils/i18n/dictionary";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail, MdArrowOutward, MdDownload } from "react-icons/md";
import { SiZalo } from "react-icons/si";
import Reveal from "../../helper/reveal";
import { contactChannels } from "./channels";

function ContactSection({ lang = "en" }) {
  const t = getDict(lang).contact;
  const secondary = [
    { label: "LinkedIn", href: personalData.linkedIn, Icon: BiLogoLinkedin },
    { label: "GitHub", href: personalData.github, Icon: IoLogoGithub },
    { label: t.resume, href: personalData.resume, Icon: MdDownload },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24">
      <Reveal
        variant="zoom"
        className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface-2 via-surface to-ink p-8 text-center sm:p-12 lg:p-16"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />

        <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-brand sm:text-sm">
          <span className="type inline-block">&gt; 06 · {t.label}</span>
        </p>
        <h2 className="rise relative mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {t.title.split(" ").map((word, i, all) => (
            <span key={`${word}-${i}`}>
              <span style={{ "--w": i }}>
                {word}
                {i < all.length - 1 ? " " : ""}
              </span>
            </span>
          ))}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-muted sm:text-lg">{t.body}</p>

        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          {contactChannels(lang).map(({ kind, href, external }, i) => (
            <Link
              key={kind}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-all sm:text-lg ${
                i === 0
                  ? "bg-brand text-ink hover:-translate-y-0.5"
                  : "border border-brand/60 text-brand hover:bg-brand hover:text-ink"
              }`}
            >
              {kind === "zalo" ? <SiZalo size={22} /> : <MdAlternateEmail />}
              {kind === "zalo" ? t.zalo : personalData.email}
              {i === 0 ? <MdArrowOutward className="transition-transform group-hover:rotate-45" /> : null}
            </Link>
          ))}
        </div>
        <p className="relative mx-auto mt-4 max-w-md text-sm text-muted">{t.note}</p>

        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          {secondary.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-text transition-colors hover:border-brand hover:text-brand"
            >
              <Icon />
              {label}
            </Link>
          ))}
        </div>

        <p className="relative mt-8 font-mono text-xs text-muted">{getDict(lang).footer.rights} · GMT+7</p>
      </Reveal>
    </section>
  );
}

export default ContactSection;
