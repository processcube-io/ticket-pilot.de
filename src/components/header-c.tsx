"use client";

import { useEffect, useState } from "react";
import { DownloadButton } from "@/components/ui/download-button";

/**
 * Header fuer Variante C (Final).
 *
 * Aufbau:
 *   - Logo (links)
 *   - Section-Links (zentriert, ab Desktop sichtbar) \u2013 gleiche Anker
 *     wie die gelben Eyebrows der Sektionen, damit Nutzer sich wiederfinden.
 *   - Rechts: Demo (mailto) + Kostenlos starten (Primary)
 *   - Mobile: Burger-Menue mit allen Section-Links
 *
 * Aktive Section wird per IntersectionObserver getrackt und mit einem
 * Accent-Underline markiert.
 */

type NavLink = { href: string; label: string };

const navLinks: NavLink[] = [
  { href: "#problem", label: "Das Problem" },
  { href: "#vs", label: "vs. Copilot" },
  { href: "#proof", label: "Eigene Zahlen" },
  { href: "#warum", label: "ROI" },
  { href: "#compliance", label: "Compliance" },
  { href: "#faq", label: "FAQ" },
  { href: "#pricing", label: "Pricing" },
];

const DOWNLOAD_URL = "https://www.processcube.io/download";

export function HeaderC() {
  const [activeId, setActiveId] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-80px 0px -50% 0px" }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1100px)");
    const close = () => mq.matches && setMobileOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-line/50">
      <div className="container">
        <nav className="flex items-center h-[64px] gap-4">
          <a href="#top" className="flex items-center gap-3 font-bold shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/favicon.png"
              alt="Ticketpilot Logo"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="text-[15px] max-tablet:hidden">
              ProcessCube &middot; ticketpilot
            </span>
            <span className="text-[15px] tablet:hidden">ticketpilot</span>
          </a>

          {/* Section-Links (Desktop) */}
          <div className="hidden desktop:flex items-center gap-5 text-text-muted text-[14px] ml-6 mr-auto">
            {navLinks.map((l) => {
              const id = l.href.slice(1);
              const isActive = activeId === id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`transition-colors pb-1 border-b-2 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 ${
                    isActive
                      ? "text-text-primary border-accent"
                      : "border-transparent hover:text-text-primary"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </div>

          {/* Mobile: Spacer */}
          <div className="desktop:hidden flex-1" />

          {/* Actions rechts */}
          <div className="flex items-center gap-1 tablet:gap-2 shrink-0">
            <DownloadButton
              event="cta_header_trial_c"
              className="hidden tablet:inline-flex items-center h-9 px-4 rounded-btn text-[14px] font-bold bg-gradient-to-br from-accent to-accent-hover hover:-translate-y-0.5 transition-transform text-black cursor-pointer"
            >
              Kostenlos starten
            </DownloadButton>

            {/* Burger (Mobile) */}
            <button
              type="button"
              aria-label={mobileOpen ? "Men\u00fc schlie\u00dfen" : "Men\u00fc \u00f6ffnen"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-c"
              onClick={() => setMobileOpen((o) => !o)}
              className="desktop:hidden inline-grid place-items-center w-10 h-10 rounded-md border border-line text-text-primary hover:bg-white/[0.04] ml-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile-Nav-Overlay */}
        {mobileOpen && (
          <div
            id="mobile-nav-c"
            className="desktop:hidden pb-4 flex flex-col gap-1 text-text-muted text-[16px] border-t border-line pt-2"
          >
            {navLinks.map((l) => {
              const id = l.href.slice(1);
              const isActive = activeId === id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-3 rounded-md hover:bg-white/[0.04] ${
                    isActive ? "text-text-primary bg-white/[0.03]" : ""
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
