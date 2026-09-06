---
title: "A Practical Markdown Publishing Workflow"
excerpt: "A tiny content convention can provide titles, descriptions, dates, images, and readable article bodies without introducing a CMS."
date: "2026-08-04"
coverImage: "/images/markdown-workflow.svg"
coverAlt: "Markdown document connected to metadata and a finished article card"
---

A repository-backed blog works best when every post follows the same small contract.

## Frontmatter defines the page metadata

Each file in `content/posts` begins with these fields:

```text
---
title: "Post title"
excerpt: "Short summary"
date: "2026-08-04"
coverImage: "/images/static-generation.svg"
coverAlt: "Accessible image description"
---
```

The rest of the file is ordinary Markdown. The application validates the required fields while reading the file, computes an estimated reading time, and sorts the post index by date.

## Filenames become routes

A file named `markdown-workflow.md` maps to `/blog/markdown-workflow`. `generateStaticParams` returns all known slugs so Next.js can pre-render every article during the production build.

This is deliberately small. If the publishing workflow later needs previews, editorial permissions, or collaborative authoring, a CMS can be introduced then without changing the basic route design.
