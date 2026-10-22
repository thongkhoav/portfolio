import { channels } from "@/utils/data/channels";
import { personalData } from "@/utils/data/personal-data";
import { getDict } from "@/utils/i18n/dictionary";
import Link from "next/link";

const LINKS = [
  { label: "GitHub", href: personalData.github },
  { label: "LinkedIn", href: personalData.linkedIn },
  { label: "TikTok", href: channels.tiktok.url },
  { label: "YouTube", href: channels.youtube.url },
];

function Footer({ lang = "en" }) {
  const t = getDict(lang);
  return (
    <footer className="mt-16 border-t border-line/70">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 px-5 py-8 text-center sm:px-8 md:flex-row md:text-left lg:max-w-[70rem] xl:max-w-[76rem]">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {t.hero.name} · {t.footer.rights}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {LINKS.map(({ label, href }) => (
            <Link
              key={label}
              target="_blank"
              rel="noopener noreferrer"
              href={href}
              className="text-sm text-muted transition-colors hover:text-brand"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
