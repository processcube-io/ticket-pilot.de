"use client";

import { useRef } from "react";

export function ScrollHint() {
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    const section = ref.current?.closest("section");
    const next = section?.nextElementSibling as HTMLElement | null;
    if (next) {
      const top = next.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className="flex flex-col items-center gap-1 text-text-muted/40 hover:text-accent/70 transition-colors cursor-pointer scroll-hint"
    >
      <span className="text-[11px] uppercase tracking-[0.15em] font-medium">
        Weiter
      </span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}
