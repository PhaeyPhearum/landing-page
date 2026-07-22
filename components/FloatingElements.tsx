"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  Building2,
  ExternalLink,
  MenuSquare,
  MessageCircle,
  Shirt,
  X,
} from "lucide-react";

type FloatingItem = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  iconTone: string;
  external?: boolean;
};

const FLOATING_ITEMS: FloatingItem[] = [
  {
    id: "qr-ordering",
    eyebrow: "គម្រោងពិសេស",
    title: "QR Menu & Ordering",
    description: "ទទួលការកុម្ម៉ង់ពីអតិថិជន និងបុគ្គលិកបានងាយស្រួល។",
    href: "#selected-work",
    actionLabel: "មើលគម្រោង",
    icon: MenuSquare,
    accent: "from-amber-400/25 via-amber-300/5 to-transparent",
    iconTone: "bg-amber-400 text-[#111918]",
  },
  {
    id: "rental",
    eyebrow: "ប្រព័ន្ធគ្រប់គ្រង",
    title: "Rental Management",
    description: "គ្រប់គ្រងបន្ទប់ អ្នកជួល វិក្កយបត្រ និងការទូទាត់។",
    href: "#selected-work",
    actionLabel: "មើលគម្រោង",
    icon: Building2,
    accent: "from-emerald-400/20 via-emerald-300/5 to-transparent",
    iconTone: "bg-emerald-500 text-white",
  },
  {
    id: "laundry",
    eyebrow: "Smart Automation",
    title: "Laundry Platform",
    description: "QR Payment, ESP32 និងការគ្រប់គ្រងម៉ាស៊ីនដោយស្វ័យប្រវត្តិ។",
    href: "#selected-work",
    actionLabel: "មើលគម្រោង",
    icon: Shirt,
    accent: "from-sky-400/20 via-sky-300/5 to-transparent",
    iconTone: "bg-sky-500 text-white",
  },
  {
    id: "gold-platform",
    eyebrow: "Live Data Platform",
    title: "Gold Price Auto Post",
    description: "ទិន្នន័យតម្លៃផ្ទាល់ និងបង្ហោះទៅ Telegram ដោយស្វ័យប្រវត្តិ។",
    href: "https://goldprice.qrtag.shop",
    actionLabel: "មើល Live Demo",
    icon: Bot,
    accent: "from-yellow-400/25 via-yellow-300/5 to-transparent",
    iconTone: "bg-yellow-400 text-[#111918]",
    external: true,
  },
];

const ROTATION_INTERVAL = 7000;

export default function FloatingElements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showConsultation, setShowConsultation] = useState(false);

  const currentItem = useMemo(
    () => FLOATING_ITEMS[activeIndex],
    [activeIndex],
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Show after the visitor starts scrolling.
      setIsVisible(scrollY > 180);

      // Near the bottom, replace project promotion with Telegram CTA.
      setShowConsultation(pageHeight > 0 && scrollY / pageHeight > 0.72);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isPaused || isDismissed || showConsultation) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % FLOATING_ITEMS.length);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(interval);
  }, [isPaused, isDismissed, showConsultation]);

  const handleProjectClick = () => {
    if (!currentItem.href.startsWith("#")) return;

    const target = document.querySelector(currentItem.href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (isDismissed) return null;

  const telegramUsername = "@yourTelegramUsername";

  const telegramMessage = encodeURIComponent(
    "សួស្តី ខ្ញុំបានឃើញសេវាកម្មរបស់អ្នក ហើយចង់ពិភាក្សាអំពីគម្រោងសម្រាប់អាជីវកម្មរបស់ខ្ញុំ។",
  );

  const telegramUrl = `https://t.me/${telegramUsername}?text=${telegramMessage}`;

  return (
    <>
    <div
    className={[
        "pointer-events-none fixed inset-x-0 bottom-0 z-[9994]",
        "px-3 pb-[calc(env(safe-area-inset-bottom)+12px)]",
        "sm:px-6 sm:pb-6",
        "transition-all duration-500 ease-out",
        isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-5 opacity-0",
    ].join(" ")}
    >
    <div className="mx-auto flex w-full max-w-[1600px] items-end justify-between gap-3">
        {/* Left promotional element */}
        <div
        id="floating-elements-left"
        className={[
            "pointer-events-auto relative shrink-0",
            "transition-all duration-300",
            isPaused ? "scale-[1.02]" : "scale-100",
        ].join(" ")}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
        >
        <button
            type="button"
            aria-label="មើលការផ្តល់ជូនពិសេស"
            className={[
            "group relative flex items-center gap-2",
            "rounded-2xl border border-white/15",
            "bg-[#101817]/90 p-2 pr-3",
            "shadow-[0_16px_45px_rgba(0,0,0,0.28)]",
            "backdrop-blur-xl",
            "transition-all duration-300",
            "hover:-translate-y-1",
            "hover:border-amber-300/35",
            "hover:shadow-[0_20px_60px_rgba(0,0,0,0.34)]",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-amber-300",
            "sm:p-2.5 sm:pr-4",
            ].join(" ")}
        >
            {/* Soft glow */}
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <span className="absolute -left-6 -top-8 h-20 w-20 rounded-full bg-amber-300/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </span>

            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 shadow-[0_8px_24px_rgba(245,180,40,0.28)] sm:h-14 sm:w-14">
            <img
                src="https://rexusdomain.com/images/rexus-flash-sale.png"
                alt=""
                className={[
                "h-10 w-10 object-contain sm:h-12 sm:w-12",
                "drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]",
                "transition-transform duration-300",
                "group-hover:scale-110 group-hover:-rotate-3",
                ].join(" ")}
                loading="lazy"
                decoding="async"
            />
            </span>

            <span className="relative hidden min-w-0 text-left sm:block">
            <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-amber-300">
                សេវាកម្មពិសេស
            </span>

            <span className="mt-0.5 block whitespace-nowrap text-xs font-semibold text-white">
                ពិគ្រោះគម្រោងឥតគិតថ្លៃ
            </span>
            </span>

            {/* Notification badge */}
            <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-45" />

            <span className="relative inline-flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-[#101817] bg-red-600 px-1 text-[9px] font-bold text-white shadow-lg">
                NEW
            </span>
            </span>
        </button>
        </div>

        {/* Right project / Telegram card */}
        <div
        id="floating-elements-right"
        className={[
            "pointer-events-auto min-w-0 flex-1",
            "max-w-[360px]",
            "transition-all duration-300",
            "sm:max-w-[340px]",
        ].join(" ")}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
        >
            <div
                className={[
                "relative overflow-hidden rounded-2xl",
                "border border-white/15",
                "bg-[#101817]/92",
                "shadow-[0_18px_60px_rgba(0,0,0,0.32)]",
                "backdrop-blur-xl",
                "transition-all duration-300",
                "hover:-translate-y-1",
                "hover:border-amber-300/25",
                "hover:shadow-[0_24px_75px_rgba(0,0,0,0.38)]",
                ].join(" ")}
            >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-300/15 via-transparent to-emerald-400/10" />

                <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                {/* Your existing right-side content */}
                
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#101817]/90 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                    <div
                    className={[
                        "pointer-events-none absolute inset-0 bg-gradient-to-br",
                        showConsultation
                        ? "from-amber-400/20 via-emerald-400/5 to-transparent"
                        : currentItem.accent,
                    ].join(" ")}
                    />

                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                    <button
                    type="button"
                    aria-label="បិទ"
                    onClick={() => setIsDismissed(true)}
                    className="absolute right-2.5 top-2.5 z-20 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/60 transition hover:bg-white/10 hover:text-white"
                    >
                    <X className="h-3.5 w-3.5" />
                    </button>

                    {showConsultation ? (
                    <a
                        href={telegramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative z-10 flex items-center gap-3 p-4 pr-11"
                    >
                        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#229ED9] text-white shadow-lg shadow-[#229ED9]/20">
                        <span className="absolute inset-0 animate-ping rounded-xl bg-[#229ED9] opacity-20" />
                        <MessageCircle className="relative h-5 w-5" />
                        </span>

                        <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                            ពិគ្រោះដោយឥតគិតថ្លៃ
                        </span>

                        <span className="mt-1 block font-semibold text-white">
                            មានគម្រោងសម្រាប់អាជីវកម្ម?
                        </span>

                        <span className="mt-1 block text-xs leading-5 text-white/65">
                            ប្រាប់យើងពីបញ្ហារបស់អ្នកតាម Telegram។
                        </span>
                        </span>

                        <ArrowRight className="h-4 w-4 shrink-0 text-amber-300 transition-transform group-hover:translate-x-1" />
                    </a>
                    ) : (
                    <div className="relative z-10 p-4 pr-11">
                        <div className="flex items-start gap-3">
                            <div
                                className={[
                                "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-lg",
                                currentItem.iconTone,
                                ].join(" ")}
                            >
                                <currentItem.icon className="h-5 w-5" />
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                                {currentItem.eyebrow}
                                </p>

                                <h3 className="mt-1 truncate text-sm font-semibold text-white">
                                {currentItem.title}
                                </h3>

                                <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/65">
                                {currentItem.description}
                                </p>
                            </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between gap-3">
                            <div
                                className="flex items-center gap-1.5"
                                aria-label="Project carousel navigation"
                            >
                                {FLOATING_ITEMS.map((item, index) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    aria-label={`បង្ហាញ ${item.title}`}
                                    onClick={() => setActiveIndex(index)}
                                    className={[
                                    "h-1.5 rounded-full transition-all duration-300",
                                    index === activeIndex
                                        ? "w-5 bg-amber-300"
                                        : "w-1.5 bg-white/25 hover:bg-white/50",
                                    ].join(" ")}
                                />
                                ))}
                            </div>

                            {currentItem.external ? (
                                <a
                                href={currentItem.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition hover:border-amber-300/40 hover:bg-amber-300 hover:text-[#111918]"
                                >
                                {currentItem.actionLabel}
                                <ExternalLink className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                            ) : (
                                <button
                                type="button"
                                onClick={handleProjectClick}
                                className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition hover:border-amber-300/40 hover:bg-amber-300 hover:text-[#111918]"
                                >
                                {currentItem.actionLabel}
                                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                                </button>
                            )}
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}