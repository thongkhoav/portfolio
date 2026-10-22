"use client";

import { useEffect } from "react";

// The root layout is shared by every route, so each page sets <html lang>.
export default function HtmlLang({ lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
