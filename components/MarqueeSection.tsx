const ROW_ONE = [
  { label: "Website",                 mark: "WEB", tone: "bg-amber text-ink" },
  { label: "ប្រព័ន្ធគ្រប់គ្រង",          mark: "SYS", tone: "bg-signal text-paper" },
  { label: "AI ស្វ័យប្រវត្តិកម្ម",      mark: "AI",  tone: "bg-slate text-paper" },
  { label: "Dashboard",               mark: "DB",  tone: "bg-[#146ef5] text-paper" },
  { label: "QR Ordering",             mark: "QR",  tone: "bg-amber text-ink" },
  { label: "Telegram Bot",            mark: "TG",  tone: "bg-[#0088cc] text-paper" },
  { label: "Mini App",                mark: "APP", tone: "bg-signal text-paper" },
  { label: "IoT & ESP32",             mark: "IOT", tone: "bg-slate text-paper" },
];

const ROW_TWO = [
  { label: "ABA PayWay",          mark: "ABA", tone: "bg-amber text-ink" },
  { label: "KHQR",                mark: "QR",  tone: "bg-signal text-paper" },
  { label: "Telegram",            mark: "TG",  tone: "bg-[#0088cc] text-paper" },
  { label: "Facebook",            mark: "FB",  tone: "bg-[#146ef5] text-paper" },
  { label: "Messenger",           mark: "MSG", tone: "bg-[#146ef5] text-paper" },
  { label: "API Integration",     mark: "API", tone: "bg-slate text-paper" },
  { label: "Auto Posting",        mark: "BOT", tone: "bg-signal text-paper" },
  { label: "Machine Control",     mark: "ESP", tone: "bg-amber text-ink" },
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof ROW_ONE;
  reverse?: boolean;
}) {
  const repeatedItems = [...items, ...items];

  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex w-max items-center gap-6 pr-6 sm:gap-8 sm:pr-8 ${
          reverse ? "animate-scroll-x-reverse" : "animate-scroll-x"
        }`}
      >
        {repeatedItems.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="border border-line bg-card glassVariant flex min-w-max items-center gap-3 rounded-full px-3 py-2 text-paper/76 shadow-[0_16px_50px_-34px_rgba(0,0,0,0.8)] transition-colors hover:border-amber/45 hover:bg-paper/[0.09]"
            aria-hidden={index >= items.length}
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-full text-[11px] font-bold ring-1 ring-paper/12 sm:h-14 sm:w-14 ${item.tone}`}
            >
              {item.mark}
            </span>
            <span className="text-ink pr-2 text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="relative overflow-hidden border-y border-paper/5 bg-[#0d0d1011111] py-12 sm:py-16">
      <div className="mx-auto mb-8 max-w-7xl px-6 text-center sm:mb-10">
        <p className="font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
          បង្កើតឡើងសម្រាប់
          <span className="text-amber"> អាជីវកម្មនៅកម្ពុជា</span>
        </p>

        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-link/45">
          Website • ប្រព័ន្ធគ្រប់គ្រង • ការទូទាត់ • ស្វ័យប្រវត្តិកម្ម • Dashboard
        </p>
      </div>

      <div className="space-y-5 sm:space-y-7">
        <MarqueeRow items={ROW_ONE} />
        <MarqueeRow items={ROW_TWO} reverse />
      </div>
    </section>
  );
}
