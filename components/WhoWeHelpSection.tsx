"use client";

import {
  Building2,
  HeartPulse,
  Settings2,
  Shirt,
  Store,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { WHO_WE_HELP, WHO_WE_HELP_HEADING } from "@/lib/config";

const ICONS: Record<string, LucideIcon> = {
  Utensils,
  Building2,
  Shirt,
  Store,
  HeartPulse,
  Settings2,
};

export default function WhoWeHelpSection() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12">
        <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
          {WHO_WE_HELP_HEADING}
        </h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {WHO_WE_HELP.map((item) => {
            const Icon = ICONS[item.icon];

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-line bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/25 hover:shadow-[0_16px_42px_-34px_rgba(14,107,92,0.45)]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-signal/10">
                  <Icon className="h-4 w-4 text-signal" strokeWidth={1.8} />
                </div>
                <h3 className="mt-3 font-display text-sm font-semibold leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
