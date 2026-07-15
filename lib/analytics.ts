// ============================================================================
// ANALYTICS ABSTRACTION
// Fire-and-forget event tracking. Swap the internals of `track()` to wire up
// Google Analytics, Plausible, Meta Pixel, or all three — nothing calling
// `track()` elsewhere needs to change.
//
// TODO: add your analytics IDs / snippets in app/layout.tsx, then implement
// the corresponding branches below.
// ============================================================================

export type AnalyticsEvent =
  | "header_telegram_click"
  | "hero_telegram_click"
  | "hero_view_work_click"
  | "project_demo_click"
  | "final_telegram_click"
  | "business_type_selected";

interface EventPayload {
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: EventPayload }) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(event: AnalyticsEvent, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;

  try {
    // Google Analytics (gtag.js)
    if (typeof window.gtag === "function") {
      window.gtag("event", event, payload);
    }

    // Plausible
    if (typeof window.plausible === "function") {
      window.plausible(event, { props: payload });
    }

    // Meta Pixel
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", event, payload);
    }

    if (process.env.NODE_ENV === "development") {
      console.log("[analytics]", event, payload);
    }
  } catch {
    // Analytics should never break the page.
  }
}

// --- UTM passthrough -------------------------------------------------------------
// Preserves campaign parameters (e.g. from the Knongsrok banner) so they can
// be appended to the Telegram referral message where useful.
export function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  const result: Record<string, string> = {};
  keys.forEach((key) => {
    const value = params.get(key);
    if (value) result[key] = value;
  });
  return result;
}
