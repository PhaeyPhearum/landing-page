"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, WORK_HEADING, WORK_SUBHEADING, VIEW_DEMO_LABEL } from "@/lib/config";
import { track } from "@/lib/analytics";

export default function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <h2 className="font-display font-semibold leading-snug text-ink text-2xl sm:text-4xl">
          {WORK_HEADING}
        </h2>
        <p className="leading-relaxed text-ink-soft lg:max-w-xl lg:justify-self-end">{WORK_SUBHEADING}</p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-6">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: (index % 3) * 0.06 }}
            className={`group overflow-hidden rounded-2xl border border-line bg-card shadow-[0_18px_48px_-34px_rgba(18,24,26,0.5)] transition-transform duration-300 hover:-translate-y-1 ${
              "lg:col-span-3"
            }`}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-paper">
              <Image
                src={project.image}
                alt={`រូបភាពសាកល្បងនៃប្រព័ន្ធ ${project.title}`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div className="p-6">
              <span className="text-xs font-medium text-signal">{project.category}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.solution}</p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="rounded-full border border-line bg-paper px-2.5 py-1 text-xs text-ink-soft"
                  >
                    {cap}
                  </li>
                ))}
              </ul>

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("project_demo_click", { project: project.title })}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-signal hover:text-signal-dark"
                >
                  {VIEW_DEMO_LABEL}
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
