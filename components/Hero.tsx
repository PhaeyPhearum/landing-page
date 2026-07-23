"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { DEFAULT_TELEGRAM_URL } from "@/lib/config";
import { track } from "@/lib/analytics";

const HERO_TAGS = [
  "Website",
  "ប្រព័ន្ធគ្រប់គ្រង",
  "AI Automation",
  "QR Ordering",
  "Telegram Bot",
  "ABA PayWay / KHQR",
  "Dashboard",
  "IoT & ESP32",
];

const PROJECT_PREVIEWS = [
  {
    category: "RESTAURANT SYSTEM",
    title: "QR Menu & Ordering",
    image: "/qrmenu.jpeg",
    alt: "អតិថិជនស្កេន QR menu នៅលើតុភោជនីយដ្ឋាន",
    badge: "QR + PAY",
  },
  {
    category: "RENTAL SYSTEM",
    title: "Rental Management",
    image: "/work/rental-placeholder.svg",
    alt: "ផ្ទាំងគ្រប់គ្រងបន្ទប់ជួល និងវិក្កយបត្រប្រចាំខែ",
    badge: "BILLING",
  },
  {
    category: "LAUNDRY SYSTEM",
    title: "Laundry Automation",
    image: "/laundry.png",
    alt: "ប្រព័ន្ធបោកគក់ជ្រើសរើសម៉ាស៊ីន និង QR payment",
    badge: "IOT",
  },
  {
    category: "MARKET DATA",
    title: "Cambodia Gold Platform",
    image: "/gold.png",
    alt: "ផ្ទាំងទិន្នន័យទីផ្សារ និងតម្លៃមាស",
    badge: "DATA",
  },
];

const CARD_POSITIONS = [
  "z-40 translate-x-0 translate-y-0 scale-100 opacity-100 rotate-0",
  "z-30 translate-x-5 -translate-y-5 scale-[0.96] opacity-80 rotate-[1deg]",
  "z-20 translate-x-10 -translate-y-10 scale-[0.91] opacity-60 rotate-[6deg]",
  "z-10 translate-x-14 -translate-y-14 scale-[0.86] opacity-40 rotate-[10deg]",
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || isPaused) return;

    const interval = window.setInterval(() => {
      if (!document.hidden) {
        setActiveIndex((current) => (current + 1) % PROJECT_PREVIEWS.length);
      }
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const orderedProjects = useMemo(
    () =>
      PROJECT_PREVIEWS.map((_, offset) => {
        const index = (activeIndex + offset) % PROJECT_PREVIEWS.length;
        return { ...PROJECT_PREVIEWS[index], originalIndex: index };
      }),
    [activeIndex],
  );

  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="darkRedVariant opacity-70 absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(232,163,61,0.22),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(14,107,92,0.24),transparent_30%),linear-gradient(135deg,#101719_0%,#182124_46%,#0d1113_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-paper to-transparent"/>
      
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-14 sm:pb-38 sm:pt-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <div>
          <span className="text-xs font-medium text-amber">
            បច្ចេកវិទ្យាសម្រាប់អាជីវកម្មកម្ពុជា
          </span>

          <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.35] text-paper sm:text-5xl lg:text-[3.1rem]">
            យើងបង្កើតប្រព័ន្ធដែលជួយ
            <br />
            អាជីវកម្មរបស់អ្នកធ្វើការលឿន
            <br />
            និងរីកចម្រើនជាងមុន
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/72 sm:text-lg">
            យើងបង្កើត Website, ប្រព័ន្ធកម្មង់, Dashboard គ្រប់គ្រង, ការទូទាត់ ABA/KHQR,
            Telegram automation និងឧបករណ៍ភ្ជាប់អាជីវកម្មដែលប្រើបានពិត។
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {HERO_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-paper/14 bg-paper/8 px-3 py-1 text-xs font-medium text-paper/78 backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={DEFAULT_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("hero_telegram_click")}
              className="vh-btn-gold inline-flex items-center justify-center gap-2 rounded-2xl bg-amber px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_rgba(232,163,61,0.24)] transition-colors hover:bg-amber-dark"
            >
              <MessageCircle className="h-4 w-4" />
              ពិភាក្សាគម្រោងតាម Telegram
            </a>
            <a
              href="#work"
              onClick={() => track("hero_view_work_click")}
              className="vh-btn-blue inline-flex items-center justify-center rounded-2xl border border-paper/18 bg-paper/8 px-8 py-4 text-sm font-semibold text-paper transition-colors hover:bg-paper/14"
            >
              មើលគម្រោងរបស់យើង
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          className="relative mx-auto h-[330px] w-full max-w-[620px] outline-none sm:h-[430px] lg:h-[500px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          tabIndex={0}
          aria-label="Product preview carousel"
        >
          <div className="absolute inset-x-0 bottom-0 top-8 sm:top-12 -translate-x-4">
            {orderedProjects.map((project, stackIndex) => {
              const isActive = stackIndex === 0;

              return (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setActiveIndex(project.originalIndex)}
                  aria-label={`បង្ហាញ ${project.title}`}
                  className={`absolute left-0 top-8 block w-full overflow-hidden rounded-2xl border border-paper/14 bg-paper text-left shadow-[0_28px_80px_-45px_rgba(0,0,0,0.86)] transition-all duration-700 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber sm:left-2 ${CARD_POSITIONS[stackIndex]} ${
                    isActive ? "pointer-events-auto" : "pointer-events-auto hover:opacity-90"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      priority={isActive}
                      sizes="(min-width: 1024px) 560px, 92vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/86 to-transparent p-4">
                      <span className="rounded-full border border-paper/16 bg-paper/12 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-amber backdrop-blur">
                        {project.category}
                      </span>
                      <div className="mt-2 flex items-center justify-between gap-3">
                        <h2 className="font-display text-lg font-semibold text-paper sm:text-2xl">
                          {project.title}
                        </h2>
                        <span className="shrink-0 rounded-full bg-signal px-2.5 py-1 text-[10px] font-bold text-paper">
                          {project.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="absolute inset-x-0 bottom-0 z-50 flex justify-center gap-2">
            {PROJECT_PREVIEWS.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`ទៅកាន់ ${project.title}`}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-7 bg-amber" : "w-2 bg-paper/28 hover:bg-paper/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
