"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

const OnepagerCtx = createContext<{ open: () => void }>({ open: () => {} });

export function useOnepager() {
  return useContext(OnepagerCtx);
}

/* ------------------------------------------------------------------ */
/*  Provider + Modal                                                   */
/* ------------------------------------------------------------------ */

export function OnepagerProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  const open = useCallback(() => setVisible(true), []);
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
            className="relative z-10 flex items-center justify-between px-6 py-4 bg-bg border-b-2 border-accent/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4">
              <a href="#top" className="flex items-center gap-3 shrink-0">
                <img src="/favicon.png" alt="" width={32} height={32} className="rounded-md" />
                <span className="text-[15px] font-bold text-text-primary hidden tablet:inline">
                  ProcessCube &middot; ticketpilot
                </span>
              </a>
              <div className="h-6 w-px bg-line hidden tablet:block" />
              <div className="hidden tablet:block">
                <span className="font-headline text-[18px] uppercase tracking-[0.04em] text-accent block leading-tight">
                  ROI-Onepager
                </span>
                <span className="text-text-muted text-[12px] leading-tight">
                  Zum Weitergeben an CFO / Einkauf
                </span>
              </div>
              <span className="tablet:hidden font-headline text-[16px] uppercase tracking-[0.04em] text-accent">
                ROI-Onepager
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const iframe = document.querySelector<HTMLIFrameElement>('iframe[title="ROI-Onepager"]');
                  if (iframe?.contentWindow) iframe.contentWindow.print();
                }}
                className="inline-flex items-center gap-1.5 h-9 px-4 rounded-btn text-[13px] font-bold bg-gradient-to-br from-accent to-accent-hover text-black hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                className="inline-flex items-center gap-1.5 h-9 px-4 rounded-btn text-[13px] text-text-muted border border-line hover:bg-white/5 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Neuer Tab
              </a>
              <button
                onClick={close}
                className="inline-flex items-center justify-center w-9 h-9 rounded-btn text-text-muted hover:text-text-primary hover:bg-white/5 border border-line transition-colors cursor-pointer"
                aria-label="Schliessen"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
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
