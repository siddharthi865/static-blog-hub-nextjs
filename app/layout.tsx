import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Static Blog Hub",
    template: "%s | Static Blog Hub",
  },
  description:
    "A statically generated Next.js blog powered by local Markdown files.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <SiteHeader />

        <main>{children}</main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500 lg:px-8">
            Built with statically rendered Markdown and the Next.js App Router.
          </div>
        </footer>
      </body>
    </html>
  );
}
