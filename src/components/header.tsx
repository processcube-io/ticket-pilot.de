"use client";

import { useEffect, useState } from "react";

export type NavLink = { href: string; label: string };

// Reihenfolge MUSS der Scroll-Reihenfolge auf der jeweiligen Seite entsprechen,
// sonst springt die aktive Unterlinie beim Scrollen vor und zur\u00fcck.
const defaultNavLinks: NavLink[] = [
  { href: "#problem", label: "Das Problem" },
  { href: "#funktion", label: "So funktioniert's" },
  { href: "#demo", label: "Der Beweis" },
  { href: "#proof", label: "Eigene Zahlen" },
  { href: "#warum", label: "ROI-Rechnung" },
  { href: "#faq", label: "FAQ" },
  { href: "#pricing", label: "Pricing" },
  { href: "#finale", label: "Kostenlos testen" },
];

export function Header({ navLinks = defaultNavLinks }: { navLinks?: NavLink[] } = {}) {
  const [activeId, setActiveId] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));

    // Erkennungszone: von knapp unter dem Header (80px) bis zur Mitte des Viewports.
    // So wird eine Section "aktiv", sobald ihr oberer Rand den Header passiert
    // und bleibt aktiv, bis die naechste Section diese Zone erreicht.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -50% 0px" }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [navLinks]);

  // Schließe Mobile-Menü, sobald Desktop erreicht wird
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1100px)");
    const close = () => mq.matches && setMobileOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-line/50">
      <div className="container">
        <nav className="flex justify-between items-center h-[64px]">
          <a href="#" className="flex items-center gap-3.5 font-bold">
            <img
              src="/favicon.png"
              alt="Ticketpilot Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span>ProcessCube® | ticketpilot</span>
          </a>
          <div className="hidden desktop:flex items-center gap-6 text-text-muted text-[15px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`hover:text-text-primary transition-colors pb-1 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 ${
                  activeId === link.href.slice(1)
                    ? "text-text-primary border-b-2 border-accent"
                    : "border-b-2 border-transparent"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
            className="desktop:hidden inline-grid place-items-center w-10 h-10 rounded-md border border-line text-text-primary hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
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
        </nav>
        {mobileOpen && (
          <div
            id="mobile-nav"
            className="desktop:hidden pb-4 flex flex-col gap-1 text-text-muted text-[16px]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-3 rounded-md hover:bg-white/[0.04] ${
                  activeId === link.href.slice(1)
                    ? "text-text-primary bg-white/[0.03]"
                    : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
