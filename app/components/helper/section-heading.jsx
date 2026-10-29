import Reveal from "./reveal";

// Section header: terminal eyebrow that types itself ("> 02 · services"),
// a title that rises word by word, an accent line that draws, then the intro.
export default function SectionHeading({ index, label, title, intro, align = "left" }) {
  const centered = align === "center";
  const words = title.split(" ");

  return (
    <Reveal className={`mb-10 lg:mb-14 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
        <span className="type inline-block">
          &gt; {index} · {label}
        </span>
      </p>
      <h2 className="rise mt-3 text-3xl font-bold tracking-tight text-heading sm:text-5xl">
        {words.map((word, i) => (
          <span key={`${word}-${i}`}>
            <span style={{ "--w": i }}>
              {word}
              {i < words.length - 1 ? " " : ""}
            </span>
          </span>
        ))}
      </h2>
      <span
        className={`draw-line mt-5 block h-[3px] w-16 rounded-full bg-brand ${centered ? "mx-auto origin-center" : ""}`}
      />
      {intro ? <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{intro}</p> : null}
    </Reveal>
  );
}
