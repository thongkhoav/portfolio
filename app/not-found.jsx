import Link from "next/link";
import SiteShell from "./components/site-shell";

export default function NotFound() {
  return (
    <SiteShell>
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <p className="font-mono text-sm text-brand">&gt; 404 · not found</p>
        <h1 className="mt-4 text-5xl font-bold text-white">This page does not exist.</h1>
        <p className="mt-3 text-muted">The link may be old, or it was never deployed.</p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
        >
          Go to home
        </Link>
      </div>
    </SiteShell>
  );
}
