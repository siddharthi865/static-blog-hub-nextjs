import type { PostSummary } from "@/types/post";
import { formatPostDate } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  post: PostSummary;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            unoptimized
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>

        <div className="p-6">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} min read</span>
          </div>

          <h2 className="text-xl font-bold tracking-tight text-slate-950 transition group-hover:text-indigo-700">
            {post.title}
          </h2>

          <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>

          <span className="mt-5 inline-flex items-center text-sm font-semibold text-indigo-700">
            Read article
            <span aria-hidden="true" className="ml-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
