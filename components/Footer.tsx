import { BRAND, CONTACT, FOOTER } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-display text-base font-semibold text-ink">{BRAND.name}</span>
          <p className="mt-1 text-sm text-ink-soft">{FOOTER.positioning}</p>
        </div>

        <div className="flex flex-col gap-1 text-sm text-ink-soft sm:items-end">
          <a
            href={`https://t.me/${CONTACT.telegramUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            Telegram: @{CONTACT.telegramUsername}
          </a>
          {/* TODO: replace with real email */}
          <a href={`mailto:${CONTACT.email}`} className="hover:text-ink">
            {CONTACT.email}
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {FOOTER.copyrightName}។ រក្សាសិទ្ធិគ្រប់យ៉ាង។
          </span>
          <div className="flex gap-4">
            {/* TODO: link to real privacy/terms pages when available */}
            <a href="#" className="hover:text-ink">
              គោលការណ៍ភាពឯកជន
            </a>
            <a href="#" className="hover:text-ink">
              លក្ខខណ្ឌប្រើប្រាស់
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
