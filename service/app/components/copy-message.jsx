"use client";

import { useState } from "react";

export default function CopyMessage({ text }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="min-h-11 rounded-full border border-term-text/40 px-4 font-mono text-sm text-term-text transition-colors hover:border-mint hover:text-mint"
    >
      <span aria-live="polite">{copied ? "Đã copy ✓" : "Copy mẫu này"}</span>
    </button>
  );
}
