"use client";

import { BRAND, NAV_LINKS, HEADER_CTA, DEFAULT_TELEGRAM_URL } from "@/lib/config";
import { track } from "@/lib/analytics";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-ink">
          {BRAND.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="ម៉ឺនុយចម្បង">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={DEFAULT_TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("header_telegram_click")}
          className="rounded-full bg-signal px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-signal-dark md:px-5"
        >
          {HEADER_CTA}
        </a>
      </div>
    </header>
  );
}
