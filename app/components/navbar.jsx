"use client";

import { getDict, pathFor } from "@/utils/i18n/dictionary";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FlagGB, FlagVN } from "./helper/flags";
import ThemeToggle from "./helper/theme-toggle";

const SECTION_IDS = ["services", "experience", "projects", "about", "skills"];
const LANG_OPTIONS = [
  { lang: "en", label: "EN", Flag: FlagGB },
  { lang: "vi", label: "VI", Flag: FlagVN },
];

function Navbar({ lang = "en" }) {
  const t = getDict(lang).nav;
  const base = pathFor(lang);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the section that sits in the middle band of the viewport.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of [...SECTION_IDS, "contact"]) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  // Switch language but stay on the same section.
  const switchLang = (event, target) => {
    event.preventDefault();
    setOpen(false);
    if (target !== lang) router.push(`${pathFor(target)}${window.location.hash}`);
  };

  const href = (id) => (base === "/" ? `/#${id}` : `${base}#${id}`);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line/70 bg-ink/80 backdrop-blur-lg"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex items-center justify-between px-5 py-3.5 sm:px-8 lg:max-w-[70rem] xl:max-w-[76rem]">
        <Link href={base} className="flex items-center gap-2.5 font-mono text-sm font-semibold text-heading">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-brand text-on-brand">TK</span>
          <span className="hidden sm:inline">{getDict(lang).hero.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {SECTION_IDS.map((id) => (
            <li key={id}>
              <Link
                href={href(id)}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active === id ? "bg-brand-soft text-accent" : "text-muted hover:text-heading"
                }`}
              >
                {t[id]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle labels={{ dark: t.themeDark, light: t.themeLight }} />
          <div
            role="group"
            aria-label={lang === "vi" ? "Ngôn ngữ" : "Language"}
            className="inline-flex h-10 items-center rounded-full border border-line p-1 font-mono text-xs font-semibold"
          >
            {LANG_OPTIONS.map(({ lang: code, label, Flag }) => {
              const current = code === lang;
              return (
                <Link
                  key={code}
                  href={pathFor(code)}
                  hrefLang={code}
                  onClick={(event) => switchLang(event, code)}
                  aria-current={current ? "true" : undefined}
                  className={`inline-flex h-full items-center gap-1.5 rounded-full px-2.5 transition-colors ${
                    current ? "bg-brand text-on-brand" : "text-muted hover:text-heading"
                  }`}
                >
                  <Flag className="h-3 w-[18px] shrink-0 rounded-[2px] shadow-[0_0_0_1px_rgba(255,255,255,0.15)]" />
                  {label}
                </Link>
              );
            })}
          </div>
          <Link
            href={href("contact")}
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-on-brand transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            {t.cta}
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-heading md:hidden"
            aria-label={open ? t.close : t.open}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX size={20} /> : <HiOutlineMenuAlt3 size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="min-h-0 px-5 sm:px-8">
          {[...SECTION_IDS, "contact"].map((id) => (
            <li key={id} className="border-t border-line/60">
              <Link
                href={href(id)}
                onClick={() => setOpen(false)}
                className={`block py-3 text-base ${active === id ? "text-accent" : "text-text"}`}
              >
                {t[id]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
