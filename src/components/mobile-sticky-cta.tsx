"use client";

import { useEffect, useState } from "react";

interface MobileStickyCtaProps {
  /** Ziel des Primary-CTAs (Anker oder externe URL). */
  primaryHref: string;
  /** Plausible-Event-Name fuer den Primary-CTA. */
  primaryEvent?: string;
  /** Label des Primary-CTAs. */
  primaryLabel?: string;
  /** Ziel des Secondary-CTAs (z. B. mailto: oder Demo-Anker). */
  secondaryHref?: string;
  /** Plausible-Event-Name fuer den Secondary-CTA. */
  secondaryEvent?: string;
  /** Label des Secondary-CTAs. */
  secondaryLabel?: string;
  /** Nach wieviel Pixel Scrolltiefe erscheint die Leiste (Default: 600). */
  showAfter?: number;
}

/**
 * Bottom-Bar, die nur auf Mobile/Tablet sichtbar ist und erst erscheint,
 * wenn der Nutzer \u00fcber die Hero-Sektion hinausgescrollt hat.
 * Baymard Institute: +10\u201315 % Conversion in Mobile-B2B-Funnels.
 */
export function MobileStickyCta({
  primaryHref,
  primaryEvent,
  primaryLabel = "30 Tage kostenlos testen",
  secondaryHref = "mailto:info@processcube.io?subject=Ticketpilot%20Demo-Anfrage",
  secondaryEvent,
  secondaryLabel = "Demo",
  showAfter = 600,
}: MobileStickyCtaProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfter);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const primaryClass = [
    "plausible-event-name=" + (primaryEvent ?? "cta_mobile_sticky_primary"),
    "flex-1 inline-flex items-center justify-center min-h-[48px] px-4 rounded-btn font-bold bg-gradient-to-br from-accent to-accent-hover text-black shadow-[0_2px_8px_rgba(0,0,0,0.25)] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
  ].join(" ");

  const secondaryClass = [
    "plausible-event-name=" + (secondaryEvent ?? "cta_mobile_sticky_secondary"),
    "inline-flex items-center justify-center min-h-[48px] px-4 rounded-btn font-bold border border-line text-text-primary bg-bg/90 backdrop-blur focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
  ].join(" ");

  return (
    <div
      aria-hidden={!visible}
      className={`desktop:hidden fixed left-0 right-0 bottom-0 z-40 p-3 bg-bg/95 backdrop-blur border-t border-line transition-transform duration-200 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      role="region"
      aria-label="Kostenlos testen"
    >
      <div className="flex gap-2 items-center max-w-[640px] mx-auto">
        <a href={primaryHref} className={primaryClass}>
          {primaryLabel}
        </a>
        <a href={secondaryHref} className={secondaryClass}>
          {secondaryLabel}
        </a>
      </div>
      <p className="text-[11px] text-text-muted text-center mt-1.5 m-0">
        Monatlich k&uuml;ndbar &middot; Erinnerung 5 Tage vor Abrechnung
      </p>
    </div>
  );
}
