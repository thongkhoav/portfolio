import { FiCheck } from "react-icons/fi";
import SpotlightCard from "../../helper/spotlight-card";

// Summary of NDA client work: highlights and domains instead of links.
function ClientWorkCard({ work, t }) {
  return (
    <SpotlightCard className="group grid overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-brand/50 lg:grid-cols-[1.2fr_1fr]">
      <div className="p-6 lg:p-8">
        <p className="font-mono text-xs text-brand">00 · {work.role}</p>
        <h3 className="mt-3 text-2xl font-bold text-white">{work.name}</h3>
        <p className="mt-4 leading-relaxed text-muted">{work.description}</p>

        <p className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">{t.highlightsLabel}</p>
        <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {work.highlights.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm text-text/90">
              <FiCheck className="mt-0.5 shrink-0 text-live" />
              {item}
            </li>
          ))}
        </ul>

        {work.quote ? (
          <figure className="mt-6 border-l-2 border-brand pl-4">
            <blockquote className="text-sm italic leading-relaxed text-text/90">“{work.quote.text}”</blockquote>
            <figcaption className="mt-2 font-mono text-xs text-muted">— {work.quote.author}</figcaption>
          </figure>
        ) : null}
      </div>

      <div className="relative border-t border-line bg-ink/60 p-6 font-mono text-xs leading-6 lg:border-l lg:border-t-0 lg:p-8 lg:text-sm">
        <div className="mb-4 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="text-muted">{`// ${t.domainsLabel.toLowerCase()}`}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {work.domains.map((domain) => (
            <span
              key={domain}
              className="rounded-md border border-line bg-surface px-2 py-0.5 text-text transition-colors group-hover:border-brand/40"
            >
              {domain}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}

export default ClientWorkCard;
