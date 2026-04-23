import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";

const useCases = [
  {
    icon: "01",
    title: "Der n\u00E4chtliche Bug",
    description:
      "Freitagabend, 22 Uhr. Ein Kunde meldet: \u201ENichts geht mehr.\u201C Ticketpilot hat den Fix geschrieben, bevor dein Team Montagmorgen den Laptop aufklappt. Dein Dev reviewed, gibt Go, deployed. Vor dem ersten Kaffee.",
  },
  {
    icon: "02",
    title: "Die Feature-Flut",
    description:
      "Dein Produktmanager hat 30 Feature-Requests priorisiert. Dein Team schafft 8 pro Sprint. Mit Ticketpilot werden Standard-Features vorproduziert \u2013 dein Team reviewed und verfeinert nur noch. 12 statt 8. Gleiche Mannschaft.",
  },
  {
    icon: "03",
    title: "Der Tech-Debt-Berg",
    description:
      "Seit zwei Jahren sagst du: \u201EDas refactoren wir irgendwann.\u201C Ticketpilot arbeitet Refactoring-Tickets nachts ab. Automatische Tests als Sicherheitsnetz. Morgens ist der Code sauberer als gestern.",
  },
];

export function UseCases() {
  return (
    <SectionWrapper id="usecases">
      <EyebrowBadge>Use Cases</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Drei Szenarien. Null Theorie.
      </h2>
      <p className="text-text-muted max-w-[740px] mt-0" style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
        Das hier sind keine Marketingversprechen. Das sind Situationen, die jedes
        Entwicklerteam im Mittelstand kennt &ndash; und wie Ticketpilot sie ver&auml;ndert.
      </p>

      <div className="grid desktop:grid-cols-3 gap-5 mt-9">
        {useCases.map((uc) => (
          <Card key={uc.icon}>
            <div className="w-[60px] h-[60px] rounded-[16px] bg-accent-soft border border-accent-border grid place-items-center text-accent font-black font-headline text-[26px]">
              {uc.icon}
            </div>
            <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-3 mb-2.5 leading-none">
              {uc.title}
            </h3>
            <p className="text-text-muted m-0">{uc.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
