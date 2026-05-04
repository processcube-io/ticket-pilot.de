"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const YOUTUBE_ID = "cs9y9t8bXss";
const DEEP_LINK_PARAM = "demo";
const TRACKING_URL = "https://www.processcube.io/r/Voc";

const VideoCtx = createContext<{ open: () => void }>({ open: () => {} });

export function useVideo() {
  return useContext(VideoCtx);
}

export function VideoProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  const open = useCallback(() => {
    setVisible(true);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (url.searchParams.get(DEEP_LINK_PARAM) !== "1") {
        url.searchParams.set(DEEP_LINK_PARAM, "1");
        window.history.pushState({ videoOpen: true }, "", url.toString());
      }
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
        // Tracking-Fehler duerfen das Video-Erlebnis nicht blockieren.
      }
    }
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (url.searchParams.has(DEEP_LINK_PARAM)) {
        url.searchParams.delete(DEEP_LINK_PARAM);
        const search = url.searchParams.toString();
        window.history.replaceState(
          {},
          "",
          url.pathname + (search ? `?${search}` : "") + url.hash,
        );
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get(DEEP_LINK_PARAM) === "1") setVisible(true);
  }, []);

  useEffect(() => {
    const onPop = () => {
      const params = new URLSearchParams(window.location.search);
      setVisible(params.get(DEEP_LINK_PARAM) === "1");
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, close]);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <VideoCtx.Provider value={{ open }}>
      {children}

      {visible && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 tablet:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          onClick={close}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <div
            className="relative w-full max-w-[960px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3 gap-3">
              <h2
                id="video-modal-title"
                className="font-headline text-[18px] tablet:text-[22px] uppercase tracking-[0.04em] text-text-primary m-0 leading-tight"
              >
                Ticketpilot &ndash; Live-Demo
              </h2>
              <button
                onClick={close}
                className="inline-flex items-center justify-center w-9 h-9 rounded-btn text-text-muted hover:text-text-primary hover:bg-white/10 border border-line transition-colors cursor-pointer shrink-0"
                aria-label="Schliessen"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div
              className="relative w-full overflow-hidden rounded-card border border-line bg-black shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
              style={{ aspectRatio: "16 / 9" }}
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Ticketpilot Live-Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            <p className="text-[11px] text-text-muted/70 mt-3 text-center m-0">
              Eingebettet via youtube-nocookie.com &middot; Beim Abspielen werden
              Daten an Google &uuml;bertragen.
            </p>
          </div>
        </div>
      )}
    </VideoCtx.Provider>
  );
}
