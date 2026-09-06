---
title: "Server Components Fit Content Sites Naturally"
excerpt: "App Router pages are Server Components by default, which means filesystem content can be read without shipping parsing logic to the browser."
date: "2026-08-09"
coverImage: "/images/server-components.svg"
coverAlt: "Diagram showing server-rendered content flowing to a browser"
---

The App Router treats pages and layouts as Server Components unless a file opts into client rendering with the `"use client"` directive.

## Keep content work on the server

This blog reads Markdown through Node.js filesystem APIs. That code belongs on the server, where it can run during the build and never become part of the browser bundle.

The result is a useful separation:

- **Server Components** read posts, render metadata, and generate article markup.
- **Client Components** are only necessary for interactive behavior such as stateful controls or browser APIs.

This project barely needs client JavaScript at all. The error boundary is the only Client Component because its retry button needs an event handler.

## Smaller browser responsibilities

For a content-first site, the browser should mainly display the already-rendered document and handle navigation. The server-side build does the expensive content preparation once, rather than repeating it for every visitor.
