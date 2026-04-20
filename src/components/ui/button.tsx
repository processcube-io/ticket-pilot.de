interface ButtonProps {
  variant?: "primary" | "secondary";
  href: string;
  children: React.ReactNode;
}

export function Button({ variant = "primary", href, children }: ButtonProps) {
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center min-h-[54px] px-[22px] rounded-btn font-bold transition-all duration-200 border border-transparent ${
        variant === "primary"
          ? "bg-gradient-to-br from-accent to-accent-hover hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(248,181,68,0.3)]"
          : "bg-transparent text-text-primary border-line hover:bg-white/5"
      }`}
      style={variant === "primary" ? { color: "#000" } : undefined}
    >
      {children}
    </a>
  );
}
