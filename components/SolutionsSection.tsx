"use client";

import { motion } from "framer-motion";
import {
  Globe,
  LayoutDashboard,
  Sparkles,
  Bot,
  QrCode,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { SOLUTIONS, SOLUTIONS_HEADING, SOLUTIONS_SUBHEADING } from "@/lib/config";

const ICONS: Record<string, LucideIcon> = {
  Globe,
  LayoutDashboard,
  Sparkles,
  Bot,
  QrCode,
  Cpu,
};

export default function SolutionsSection() {
  return (
    <section id="solutions" className="border-t border-line bg-card/55">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
            {SOLUTIONS_HEADING}
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">{SOLUTIONS_SUBHEADING}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution, index) => {
            const Icon = ICONS[solution.icon];
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: (index % 3) * 0.06 }}
                className="rounded-2xl border border-line bg-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate/10">
                  <Icon className="h-5 w-5 text-slate" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {solution.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {solution.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="rounded-full border border-line bg-paper px-2.5 py-1 text-xs text-ink-soft"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
