import { getDict } from "@/utils/i18n/dictionary";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Reveal from "../../helper/reveal";
import { contactChannels } from "./channels";

// Mid-page call to action, placed right after the proof (experience + projects)
// so a convinced visitor does not have to scroll to the bottom to reach out.
export default function ContactBand({ lang = "en" }) {
  const t = getDict(lang).band;
  const [primary] = contactChannels(lang);

  return (
    <Reveal
      variant="zoom"
      className="relative my-6 overflow-hidden rounded-2xl border border-brand/40 bg-gradient-to-r from-brand/15 via-surface to-surface p-6 sm:p-8"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-bold text-white sm:text-2xl">{t.title}</p>
          <p className="mt-1 max-w-xl text-sm text-muted sm:text-base">{t.body}</p>
        </div>
        <Link
          href={primary.href}
          {...(primary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-brand px-5 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5 sm:self-auto"
        >
          {t.cta}
          <MdArrowOutward className="transition-transform group-hover:rotate-45" />
        </Link>
      </div>
    </Reveal>
  );
}
