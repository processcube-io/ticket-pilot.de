"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

const OnepagerCtx = createContext<{ open: () => void }>({ open: () => {} });

const TRACKING_URL = "https://www.processcube.io/r/c0k";

export function useOnepager() {
  return useContext(OnepagerCtx);
}

/* ------------------------------------------------------------------ */
/*  Provider + Modal                                                   */
/* ------------------------------------------------------------------ */

export function OnepagerProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  const open = useCallback(() => {
    setVisible(true);
    if (typeof window === "undefined") return;
    // Tracking-Hit absetzen, ohne den Nutzer umzuleiten.
    // no-cors + keepalive: Klick wird auch beim schnellen Schliessen gezaehlt.
    try {
      fetch(TRACKING_URL, {
        method: "GET",
        mode: "no-cors",
        credentials: "omit",
        referrerPolicy: "no-referrer-when-downgrade",
        keepalive: true,
        cache: "no-store",
      });
    } catch {
      // Tracking-Fehler duerfen das Onepager-Erlebnis nicht blockieren.
    }
  }, []);
  const close = useCallback(() => setVisible(false), []);

  // Close on Escape
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, close]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  return (
    <OnepagerCtx.Provider value={{ open }}>
      {children}

      {visible && (
        <div
          className="fixed inset-0 z-[100] flex flex-col"
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Toolbar */}
          <div
            className="relative z-10 bg-bg border-b-2 border-accent/30 px-4 tablet:px-6 py-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Zeile 1: Logo + Titel + Close */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img src="/favicon.png" alt="" width={28} height={28} className="rounded-md shrink-0" />
                <span className="text-[14px] font-bold text-text-primary truncate hidden tablet:inline">
                  ProcessCube &middot; ticketpilot
                </span>
                <div className="h-5 w-px bg-line hidden tablet:block shrink-0" />
                <div className="min-w-0">
                  <span className="font-headline text-[16px] tablet:text-[18px] uppercase tracking-[0.04em] text-accent block leading-tight truncate">
                    ROI-Onepager
                  </span>
                  <span className="text-text-muted text-[11px] leading-tight hidden tablet:block">
                    Zum Weitergeben an CFO / Einkauf
                  </span>
                </div>
              </div>
              <button
                onClick={close}
                className="inline-flex items-center justify-center w-9 h-9 rounded-btn text-text-muted hover:text-text-primary hover:bg-white/5 border border-line transition-colors cursor-pointer shrink-0"
                aria-label="Schliessen"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Zeile 2: Actions */}
            <div className="flex items-center gap-2 mt-2.5">
              <button
                onClick={() => {
                  const iframe = document.querySelector<HTMLIFrameElement>('iframe[title="ROI-Onepager"]');
                  if (iframe?.contentWindow) iframe.contentWindow.print();
                }}
                className="inline-flex items-center gap-1.5 h-8 px-3 tablet:px-4 rounded-btn text-[12px] tablet:text-[13px] font-bold bg-gradient-to-br from-accent to-accent-hover text-black hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
                PDF / Drucken
              </button>
              <a
                href="/roi-onepager"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 h-8 px-3 tablet:px-4 rounded-btn text-[12px] tablet:text-[13px] text-text-muted border border-line hover:bg-white/5 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Neuer Tab
              </a>
            </div>
          </div>

          {/* Content */}
          <div
            className="relative z-10 flex-1 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="/roi-onepager"
              title="ROI-Onepager"
              className="w-full h-full border-0"
              style={{ minHeight: "100%" }}
            />
          </div>
        </div>
      )}
    </OnepagerCtx.Provider>
  );
}
