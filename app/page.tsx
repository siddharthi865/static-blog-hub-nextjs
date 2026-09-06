import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-700">
            Markdown-first publishing
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">
            A small blog that turns local Markdown into fast, static pages.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Every article is read from the repository at build time, converted
            to HTML on the server, and pre-rendered for predictable performance
            and simple deployment.
          </p>
        </div>
      </section>

      <section
        id="posts"
        className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20"
      >
        <div className="mb-9 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-indigo-700">
              Latest writing
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Articles
            </h2>
          </div>

          <p className="text-sm text-slate-500">
            {posts.length} {posts.length === 1 ? "post" : "posts"}
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
            No posts yet. Add a Markdown file to <code>content/posts</code> and
            rebuild the site.
          </div>
        )}
      </section>
    </>
  );
}
