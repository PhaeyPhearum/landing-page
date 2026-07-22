"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  DEFAULT_TELEGRAM_URL,
  PROJECTS,
  VIEW_DEMO_LABEL,
  WORK_HEADING,
  WORK_SUBHEADING,
  WORK_SUPPORT_LINE,
} from "@/lib/config";
import { track } from "@/lib/analytics";

export default function WorkSection() {
  const [featuredProject, ...supportingProjects] = PROJECTS;

  return (
    <section id="work" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
              {WORK_SUPPORT_LINE}
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-ink sm:text-4xl">
              {WORK_HEADING}
            </h2>
          </div>
          <p className="leading-relaxed text-ink-soft lg:max-w-xl lg:justify-self-end">
            {WORK_SUBHEADING}
          </p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-9 grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-card shadow-[0_24px_70px_-48px_rgba(18,24,26,0.62)] lg:grid-cols-2"
        >
          <div className="relative min-h-[260px] overflow-hidden bg-ink sm:min-h-[380px]">
            <Image
              src={featuredProject.image}
              alt={`រូបភាពគម្រោង ${featuredProject.title}`}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
            <span className="absolute left-5 top-5 rounded-full border border-paper/16 bg-ink/58 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber backdrop-blur">
              Featured
            </span>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold tracking-[0.14em] text-signal">
                {featuredProject.category}
              </span>
              {featuredProject.status ? (
                <span className="rounded-full border border-signal/18 bg-signal/8 px-2.5 py-1 text-[11px] font-medium text-signal">
                  {featuredProject.status}
                </span>
              ) : null}
            </div>

            <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              {featuredProject.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              {featuredProject.solution}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {featuredProject.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium text-ink-soft"
                >
                  {capability}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#final-cta"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-signal px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-signal-dark"
              >
                មើលគម្រោង
                <ArrowUpRight className="h-4 w-4" />
              </a>
              {featuredProject.demoUrl ? (
                <a
                  href={featuredProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("project_demo_click", { project: featuredProject.title })}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-line bg-paper px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-slate"
                >
                  {VIEW_DEMO_LABEL}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <a
                  href={DEFAULT_TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-line bg-paper px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-slate"
                >
                  សួរព័ត៌មានតាម Telegram
                </a>
              )}
            </div>
          </div>
        </motion.article>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {supportingProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-line bg-card shadow-[0_18px_48px_-38px_rgba(18,24,26,0.45)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-paper">
                <Image
                  src={project.image}
                  alt={`រូបភាពគម្រោង ${project.title}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold tracking-[0.12em] text-signal">
                    {project.category}
                  </span>
                  {project.status ? (
                    <span className="rounded-full bg-paper px-2 py-0.5 text-[10px] font-medium text-ink-soft">
                      {project.status}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-2 font-display text-base font-semibold leading-snug text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.solution}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.capabilities.slice(0, 4).map((capability) => (
                    <li
                      key={capability}
                      className="rounded-full border border-line bg-paper px-2.5 py-1 text-xs text-ink-soft"
                    >
                      {capability}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.demoUrl || "#final-cta"}
                  target={project.demoUrl ? "_blank" : undefined}
                  rel={project.demoUrl ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-signal hover:text-signal-dark"
                >
                  មើលគម្រោង
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
