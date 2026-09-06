"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-700">
        Something went wrong
      </p>

      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
        The blog could not be rendered.
      </h1>

      <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
        Try rendering the route again. If the problem persists, check the
        Markdown frontmatter for missing or invalid fields.
      </p>

      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
      >
        Try again
      </button>
    </div>
  );
}
