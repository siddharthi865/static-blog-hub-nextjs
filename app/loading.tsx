export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8" aria-live="polite">
      <div className="animate-pulse space-y-5">
        <div className="h-4 w-32 rounded bg-slate-200" />
        <div className="h-10 max-w-xl rounded bg-slate-200" />
        <div className="h-5 max-w-2xl rounded bg-slate-200" />
        <div className="h-5 max-w-lg rounded bg-slate-200" />
      </div>

      <span className="sr-only">Loading content</span>
    </div>
  );
}
