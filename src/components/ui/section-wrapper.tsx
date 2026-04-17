import { ScrollHint } from "@/components/ui/scroll-hint";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  hideScrollHint?: boolean;
}

export function SectionWrapper({ id, children, className, hideScrollHint }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${className ?? ""}`}
    >
      <div className="py-[56px] max-tablet:py-[40px]">
        <div className="container">{children}</div>
      </div>
      {/* ScrollHint removed for compact layout */}
    </section>
  );
}
