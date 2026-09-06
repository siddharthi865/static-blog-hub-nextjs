# Static Blog Hub

A small App Router blog that reads local Markdown files and pre-renders every article at build time.

## Requirements

- Node.js 20.9 or newer
- npm

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run typecheck
npm run build
npm start
```

## Adding a post

Create a `.md` file in `content/posts` with this frontmatter shape:

```text
---
title: "Post title"
excerpt: "Short summary"
date: "2026-08-14"
coverImage: "/images/static-generation.svg"
coverAlt: "Accessible image description"
---
```

The filename becomes the route slug. For example, `hello-world.md` becomes `/blog/hello-world`.

All content is repository-controlled and treated as trusted Markdown. If content is later accepted from untrusted authors or an external API, sanitize the generated HTML before rendering it.
