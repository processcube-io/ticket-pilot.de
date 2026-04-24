interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-[64px] border-t border-line py-20 desktop:py-28 ${className ?? ""}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}
