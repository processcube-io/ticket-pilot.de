interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
}

export function Card({ children, className, highlighted }: CardProps) {
  return (
    <div
      className={`bg-card border rounded-card p-7 max-tablet:p-[22px] ${
        highlighted
          ? "border-accent/35 bg-gradient-to-b from-accent/[0.09] to-card"
          : "border-line"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
