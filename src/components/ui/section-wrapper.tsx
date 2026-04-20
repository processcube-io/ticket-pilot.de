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
      className={`min-h-[calc(100dvh-64px)] flex flex-col scroll-mt-[64px] ${className ?? ""}`}
    >
      <div className="flex-1 flex items-center py-[56px] max-tablet:py-[40px]">
        <div className="container">{children}</div>
      </div>
      {!hideScrollHint && (
        <div className="pb-6 flex justify-center">
          <ScrollHint />
        </div>
      )}
    </section>
  );
}
