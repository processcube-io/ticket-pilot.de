"use client";

import { useDownload } from "@/components/download-modal";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href: string;
  children: React.ReactNode;
  event?: string;
}

const DOWNLOAD_TRIGGER = "https://www.processcube.io/download";

export function Button({ variant = "primary", href, children, event }: ButtonProps) {
  const { open } = useDownload();
  const isDownload = href === DOWNLOAD_TRIGGER;
  const isExternal = !isDownload && /^https?:\/\//i.test(href);
  const plausibleClass = event ? `plausible-event-name=${event}` : "";

  const base =
    "inline-flex items-center justify-center min-h-[54px] px-[22px] rounded-btn font-bold transition-all duration-200 border border-transparent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";
  const variantCls =
    variant === "primary"
      ? "bg-gradient-to-br from-accent to-accent-hover hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(248,181,68,0.3)]"
      : "bg-transparent text-text-primary border-line hover:bg-white/5";

  const cls = [base, variantCls, plausibleClass].filter(Boolean).join(" ");

  if (isDownload) {
    return (
      <button
        onClick={open}
        className={`${cls} cursor-pointer`}
        style={variant === "primary" ? { color: "#000" } : undefined}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cls}
      style={variant === "primary" ? { color: "#000" } : undefined}
    >
      {children}
    </a>
  );
}
