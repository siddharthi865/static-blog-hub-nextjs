import { formatPostDate, getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { marked } from "marked";
import Image from "next/image";
import Link from "next/link";

import styles from "./post.module.css";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const html = marked.parse(post.content, {
    async: false,
  }) as string;

  return (
    <article className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20">
      <Link
        href="/"
        className="inline-flex items-center text-sm font-semibold text-indigo-700 transition hover:text-indigo-900"
      >
        <span aria-hidden="true" className="mr-2">
          ←
        </span>
        All posts
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingMinutes} min read</span>
        </div>

        <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
          {post.title}
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          {post.excerpt}
        </p>
      </header>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          fill
          priority
          unoptimized
          sizes="(min-width: 1024px) 896px, 100vw"
          className="object-cover"
        />
      </div>

      <div
        className={`${styles.prose} mt-12`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
