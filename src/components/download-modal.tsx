"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Download-URLs                                                      */
/* ------------------------------------------------------------------ */

const BASE = "https://marketplace.processcube.io/studio_download";
const VERSION = "3.0.0";

type Platform = "macos-arm" | "macos-x64" | "windows";

const PLATFORMS: { id: Platform; label: string; sub: string }[] = [
  { id: "macos-arm", label: "macOS (Apple Silicon)", sub: "M1 / M2 / M3 / M4" },
  { id: "macos-x64", label: "macOS (Intel)", sub: "x86-64" },
  { id: "windows", label: "Windows", sub: "64-Bit" },
];

function downloadUrl(platform: Platform): string {
  switch (platform) {
    case "macos-arm":
      return `${BASE}/processcube-studio-${VERSION}-arm64.dmg`;
    case "macos-x64":
      return `${BASE}/processcube-studio-${VERSION}-x64.dmg`;
    case "windows":
      return `${BASE}/processcube-studio-${VERSION}.exe`;
  }
}

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "macos-arm";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("win")) return "windows";
  if (ua.includes("mac")) {
    // Apple Silicon detection: WebGL renderer or CPU cores heuristic
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl");
      if (gl) {
        const dbg = gl.getExtension("WEBGL_debug_renderer_info");
        if (dbg) {
          const renderer = gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL);
          if (renderer && /apple/i.test(renderer)) return "macos-arm";
        }
      }
    } catch { /* ignore */ }
    // Fallback: navigator.platform check (deprecated but useful)
    if (/arm/i.test(navigator.platform)) return "macos-arm";
    return "macos-arm"; // Default to ARM since most modern Macs are Apple Silicon
  }
  return "macos-arm";
}

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

const DownloadCtx = createContext<{ open: () => void }>({ open: () => {} });

export function useDownload() {
  return useContext(DownloadCtx);
}

/* ------------------------------------------------------------------ */
/*  Provider + Modal                                                   */
/* ------------------------------------------------------------------ */

type Step = "closed" | "select" | "done";

export function DownloadProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<Step>("closed");
  const [platform, setPlatform] = useState<Platform>("macos-arm");

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const open = useCallback(() => setStep("select"), []);

  // Close on Escape
  useEffect(() => {
    if (step === "closed") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setStep("closed");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  function handleDownload() {
    window.open(downloadUrl(platform), "_self");
    setStep("done");
  }

  return (
    <DownloadCtx.Provider value={{ open }}>
      {children}

      {/* Backdrop */}
      {step !== "closed" && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setStep("closed")}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative bg-card border border-line rounded-card p-8 max-w-[460px] w-full shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setStep("closed")}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              aria-label="Schliessen"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {step === "select" && (
              <>
                <div className="flex items-center gap-3 mb-5">
                  <img src="/favicon.png" alt="" width={32} height={32} className="rounded-md" />
                  <h3 className="font-headline text-[22px] uppercase tracking-[0.02em] leading-none m-0">
                    Studio herunterladen
                  </h3>
                </div>

                <p className="text-text-muted text-sm m-0 mb-6">
                  Zur Installation wird das ProcessCube&reg; Studio ben&ouml;tigt.
                  Bitte w&auml;hle dein Betriebssystem.
                </p>

                {/* Platform selection */}
                <div className="grid gap-2.5 mb-6">
                  {PLATFORMS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPlatform(p.id)}
                      className={`flex items-center gap-3 p-3.5 rounded-inner border text-left transition-all cursor-pointer ${
                        platform === p.id
                          ? "border-accent bg-accent-soft"
                          : "border-line bg-white/[0.02] hover:border-text-muted/30"
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
                        platform === p.id ? "border-accent" : "border-line"
                      }`}>
                        {platform === p.id && (
                          <span className="w-2 h-2 rounded-full bg-accent" />
                        )}
                      </span>
                      <div>
                        <strong className="text-text-primary text-[15px] block leading-tight">
                          {p.label}
                        </strong>
                        <span className="text-text-muted text-[12px]">{p.sub}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleDownload}
                  className="w-full inline-flex items-center justify-center h-12 rounded-btn font-bold bg-gradient-to-br from-accent to-accent-hover text-black hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(248,181,68,0.3)] transition-all cursor-pointer"
                >
                  Herunterladen
                </button>

                <p className="text-[11px] text-text-muted/50 text-center mt-3 m-0">
                  Version {VERSION} &middot; Kostenlos &middot; Keine Registrierung
                </p>
              </>
            )}

            {step === "done" && (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-success-soft border border-success-border grid place-items-center mx-auto mb-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <h3 className="font-headline text-[22px] uppercase tracking-[0.02em] leading-none m-0 mb-3">
                  Download gestartet
                </h3>

                <p className="text-text-muted text-sm m-0 mb-2">
                  {platform === "windows"
                    ? "Oeffne die .exe-Datei nach dem Download."
                    : "Oeffne die .dmg-Datei nach dem Download."}
                </p>

                <div className="border border-line rounded-inner p-4 bg-white/[0.02] text-left mt-5 mb-5">
                  <strong className="text-text-primary text-sm block mb-2">
                    N&auml;chste Schritte:
                  </strong>
                  <ol className="list-decimal pl-5 text-sm text-text-muted grid gap-1.5 m-0">
                    <li>
                      ProcessCube Studio {platform === "windows" ? "installieren und " : ""}starten
                    </li>
                    <li>
                      Ticketpilot-Extension aus dem Marketplace installieren
                    </li>
                    <li>
                      30-Tage-Trial aktivieren &ndash; fertig!
                    </li>
                  </ol>
                </div>

                <button
                  onClick={() => setStep("closed")}
                  className="w-full inline-flex items-center justify-center h-12 rounded-btn font-bold bg-gradient-to-br from-accent to-accent-hover text-black hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  Verstanden
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </DownloadCtx.Provider>
  );
}
