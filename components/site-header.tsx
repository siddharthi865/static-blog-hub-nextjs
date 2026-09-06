import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-slate-950 transition hover:text-indigo-700"
        >
          Static Blog Hub
        </Link>

        <nav aria-label="Primary navigation">
          <Link
            href="/#posts"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Articles
          </Link>
        </nav>
      </div>
    </header>
  );
}
