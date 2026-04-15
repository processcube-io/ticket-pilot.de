interface ButtonProps {
  variant?: "primary" | "secondary";
  href: string;
  children: React.ReactNode;
}

export function Button({ variant = "primary", href, children }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center min-h-[54px] px-[22px] rounded-btn font-bold transition-all duration-200 border border-transparent ${
        variant === "primary"
          ? "bg-gradient-to-br from-accent to-accent-hover text-bg hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(248,181,68,0.3)]"
          : "bg-transparent text-text-primary border-line hover:bg-white/5"
      }`}
    >
      {children}
    </a>
  );
}
