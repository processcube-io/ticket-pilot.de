"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#funktion", label: "So funktioniert's" },
  { href: "#usecases", label: "Use Cases" },
  { href: "#demo", label: "Live Moment" },
  { href: "#warum", label: "Warum das funktioniert" },
  { href: "#integration", label: "Integration" },
  { href: "#pricing", label: "Pricing" },
  { href: "#finale", label: "Finale Entscheidung" },
];

export function Header() {
  const [activeId, setActiveId] = useState("");

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
                className={`hover:text-text-primary transition-colors pb-1 ${
                  activeId === link.href.slice(1)
                    ? "text-text-primary border-b-2 border-accent"
                    : "border-b-2 border-transparent"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
