export type PostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  coverAlt: string;
  readingMinutes: number;
};

export type Post = PostSummary & {
  content: string;
};
