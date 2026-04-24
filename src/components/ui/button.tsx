interface ButtonProps {
  variant?: "primary" | "secondary";
  href: string;
  children: React.ReactNode;
  /**
   * Plausible-Event-Name (optional). Wird als `data-event` gesetzt und vom
   * Plausible-Script als Custom Event erfasst, sobald
   * NEXT_PUBLIC_PLAUSIBLE_DOMAIN gesetzt ist.
   */
  event?: string;
}

export function Button({ variant = "primary", href, children, event }: ButtonProps) {
  const isExternal = /^https?:\/\//i.test(href);
  // Plausible Custom-Event: Klasse `plausible-event-name=<event>` wird vom
  // Plausible-Script automatisch getrackt, sobald das Script geladen ist.
  const plausibleClass = event ? `plausible-event-name=${event}` : "";

  const base =
    "inline-flex items-center justify-center min-h-[54px] px-[22px] rounded-btn font-bold transition-all duration-200 border border-transparent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";
  const variantCls =
    variant === "primary"
      ? "bg-gradient-to-br from-accent to-accent-hover hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(248,181,68,0.3)]"
      : "bg-transparent text-text-primary border-line hover:bg-white/5";

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={[base, variantCls, plausibleClass].filter(Boolean).join(" ")}
      style={variant === "primary" ? { color: "#000" } : undefined}
    >
      {children}
    </a>
  );
}
