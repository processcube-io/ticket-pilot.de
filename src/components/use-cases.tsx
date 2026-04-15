import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";

const useCases = [
  {
    icon: "01",
    title: "Bug Reports",
    description:
      "Fehler erkannt, priorisiert und direkt in den richtigen Prozess überführt – ohne manuelles Vorsortieren.",
  },
  {
    icon: "02",
    title: "Feature Requests",
    description:
      "Wird strukturiert erfasst, richtig eingeordnet und automatisch ins Backlog übergeben.",
  },
  {
    icon: "03",
    title: "Support-Anfragen",
    description:
      "Antwort, Weiterleitung oder Folgeprozess: Ticketpilot entscheidet selbst, was als Nächstes passieren muss.",
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
        Für genau diese Tickets gebaut
      </h2>
      <p className="text-text-muted max-w-[740px] mt-0" style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
        Nicht allgemein. Nicht theoretisch. Sondern für die Tickets, die dein Team
        heute schon aufhalten.
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
