interface EyebrowBadgeProps {
  children: React.ReactNode;
}

export function EyebrowBadge({ children }: EyebrowBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2.5 bg-accent text-bg text-xs font-bold tracking-[0.16em] uppercase px-3.5 py-2.5 rounded-pill mb-6">
      {children}
    </span>
  );
}
