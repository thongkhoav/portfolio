"use client";

import { useEffect, useRef, useState } from "react";

// Counts a number up from 0 the first time it scrolls into view.
// Accepts display strings like "8", "1,900+" or "53%"; anything that is not
// a plain number is rendered as-is.
const PATTERN = /^([^\d]*)([\d,]+)(.*)$/;

export default function CountUp({ value, duration = 1400, className = "" }) {
  const match = String(value).match(PATTERN);
  const target = match ? Number(match[2].replace(/,/g, "")) : null;
  const [shown, setShown] = useState(value);
  const ref = useRef(null);

  useEffect(() => {
    if (target === null || !ref.current) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const [, prefix, , suffix] = match;
    const format = (n) => `${prefix}${Math.round(n).toLocaleString("en-US")}${suffix}`;
    let frame = 0;
    let started = false;

    setShown(format(0));
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setShown(format(target * eased));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {shown}
    </span>
  );
}
