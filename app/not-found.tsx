import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">
        404
      </p>

      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
        This article does not exist.
      </h1>

      <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
        The URL may be outdated, or the Markdown file may have been removed.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
      >
        Back to all posts
      </Link>
    </div>
  );
}
