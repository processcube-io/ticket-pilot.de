"use client";

import { useEffect, useState } from "react";
import { DownloadButton } from "@/components/ui/download-button";

interface MobileStickyCtaProps {
  primaryHref: string;
  primaryEvent?: string;
  primaryLabel?: string;
  showAfter?: number;
}

export function MobileStickyCta({
  primaryHref,
  primaryEvent,
  primaryLabel = "Kostenlos starten",
  showAfter = 600,
}: MobileStickyCtaProps) {
  const [visible, setVisible] = useState(false);
  const isDownload = primaryHref === "https://www.processcube.io/download";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfter);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const btnClass = `plausible-event-name=${primaryEvent ?? "cta_mobile_sticky_primary"} flex items-center justify-center min-h-[48px] px-4 rounded-btn font-bold bg-gradient-to-br from-accent to-accent-hover text-black shadow-[0_2px_8px_rgba(0,0,0,0.25)] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2`;

  return (
    <div
      aria-hidden={!visible}
      className={`desktop:hidden fixed left-0 right-0 bottom-0 z-40 p-3 bg-bg/95 backdrop-blur border-t border-line transition-transform duration-200 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      role="region"
      aria-label="Kostenlos starten"
    >
      <div className="max-w-[640px] mx-auto">
        {isDownload ? (
          <DownloadButton event={primaryEvent} className={`${btnClass} w-full cursor-pointer`}>
            {primaryLabel}
          </DownloadButton>
        ) : (
          <a href={primaryHref} className={btnClass}>
            {primaryLabel}
          </a>
        )}
      </div>
      <p className="text-[11px] text-text-muted/50 text-center mt-1.5 m-0">
        Monatlich k&uuml;ndbar &middot; Erinnerung 5 Tage vor Abrechnung
      </p>
    </div>
  );
}
