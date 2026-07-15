"use client";

import { motion } from "framer-motion";
import { Users, Workflow, LayoutDashboard, Cable, type LucideIcon } from "lucide-react";
import { PROBLEMS, PROBLEMS_HEADING } from "@/lib/config";

const ICONS: Record<string, LucideIcon> = {
  Users,
  Workflow,
  LayoutDashboard,
  Cable,
};

export default function ProblemsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="max-w-2xl">
        <h2 className="font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
          {PROBLEMS_HEADING}
        </h2>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEMS.map((problem, index) => {
          const Icon = ICONS[problem.icon];
          return (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
              className="rounded-2xl border border-line bg-card p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal/10">
                <Icon className="h-5 w-5 text-signal" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {problem.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
