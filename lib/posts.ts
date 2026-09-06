import type { Post, PostSummary } from "@/types/post";
import path from "node:path";
import fs from "node:fs";

const postsDirectory = path.join(process.cwd(), "content", "posts");
const frontmatterPattern = /^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/;

function stripMatchingQuotes(value: string) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
}

function parseFrontmatter(source: string) {
  const match = source.match(frontmatterPattern);

  if (!match) {
    throw new Error("Post is missing a valid frontmatter block.");
  }

  const [, rawFrontmatter, content] = match;
  const data: Record<string, string> = {};

  for (const line of rawFrontmatter.split(/\r?\n/)) {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = stripMatchingQuotes(line.slice(separatorIndex + 1).trim());

    if (key) {
      data[key] = value;
    }
  }

  return { data, content: content.trim() };
}

function requireField(
  data: Record<string, string>,
  field: string,
  filename: string,
) {
  const value = data[field];

  if (!value) {
    throw new Error(`Missing frontmatter field "${field}" in ${filename}.`);
  }

  return value;
}

function estimateReadingMinutes(content: string) {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.ceil(wordCount / 220));
}

function readPostFile(filename: string): Post {
  const fullPath = path.join(postsDirectory, filename);
  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseFrontmatter(source);
  const date = requireField(data, "date", filename);

  if (Number.isNaN(Date.parse(date))) {
    throw new Error(`Invalid ISO date "${date}" in ${filename}.`);
  }

  return {
    slug: filename.replace(/\.md$/, ""),
    title: requireField(data, "title", filename),
    excerpt: requireField(data, "excerpt", filename),
    date,
    coverImage: requireField(data, "coverImage", filename),
    coverAlt: requireField(data, "coverAlt", filename),
    readingMinutes: estimateReadingMinutes(content),
    content,
  };
}

export function getAllPosts(): PostSummary[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md"))
    .map(readPostFile)
    .map(({ content: _content, ...post }) => post)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function getPostBySlug(slug: string): Post | null {
  const filename = `${slug}.md`;
  const fullPath = path.join(postsDirectory, filename);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  return readPostFile(filename);
}

export function getAllPostSlugs() {
  return getAllPosts().map((post) => post.slug);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
