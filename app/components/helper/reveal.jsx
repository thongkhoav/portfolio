"use client";

import { useEffect, useRef } from "react";

// One shared observer for every <Reveal>. Elements animate once, the first
// time they enter the viewport. Styles live in globals.scss ([data-reveal]).
let observer;

function getObserver() {
  if (observer || typeof window === "undefined") return observer;
  document.documentElement.classList.add("js-reveal");
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );
  return observer;
}

// `immediate`: play a CSS entrance on first paint instead of waiting for scroll.
// Use it for above-the-fold content so it never waits for hydration.
export default function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  immediate = false,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (immediate) return undefined;
    const node = ref.current;
    const io = getObserver();
    if (!node || !io) return undefined;
    io.observe(node);
    return () => io.unobserve(node);
  }, [immediate]);

  return (
    <Tag
      ref={ref}
      data-reveal={immediate ? undefined : variant}
      data-enter={immediate ? "" : undefined}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
