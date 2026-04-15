import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const demoSteps = [
  {
    title: "Ticket eingegangen",
    description: "\u201EKunde kann Bestellung nicht abschlie\u00DFen\u201C",
    arrow: "Neu",
  },
  {
    title: "Automatisch klassifiziert",
    description: "Bug • hohe Relevanz • Checkout",
    arrow: "Analyse",
  },
  {
    title: "Prozess gestartet",
    description: "Entwicklerfluss, Priorisierung und Rückmeldung",
    arrow: "Flow",
  },
  {
    title: "Ergebnis ausgeliefert",
    description: "Richtige Aktion wurde ohne manuelle Übergabe ausgeführt",
    arrow: "Done",
  },
];

export function LiveDemo() {
  return (
    <SectionWrapper id="demo">
      <EyebrowBadge>Live Moment</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Sieh zu, wie ein Ticket sich selbst löst
      </h2>
      <p className="text-text-muted max-w-[740px] mt-0" style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
        Der stärkste Beweis ist kein Text. Es ist der Moment, in dem aus einem
        Ticket automatisch ein Ergebnis wird.
      </p>

      <div className="grid desktop:grid-cols-[1.05fr_0.95fr] gap-5 mt-9">
        <Card>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-0 mb-4 leading-none">
            Demo-Flow
          </h3>
          <div className="grid gap-3.5">
            {demoSteps.map((step) => (
              <div
                key={step.arrow}
                className="border border-line bg-white/[0.02] rounded-inner p-[18px] flex justify-between gap-[18px] items-center"
              >
                <div>
                  <strong className="block text-base">{step.title}</strong>
                  <div className="text-text-muted">{step.description}</div>
                </div>
                <span className="text-accent font-bold tracking-[0.08em] uppercase text-xs whitespace-nowrap">
                  {step.arrow}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Der Unterschied
          </span>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-3 mb-2.5 leading-none">
            Nicht besseres Ticketing. Bessere Ergebnisse.
          </h3>
          <p className="text-text-muted">
            Ticketpilot organisiert Tickets nicht nur. Ticketpilot sorgt dafür,
            dass automatisch das Richtige passiert.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-6">
            <Button href="#pricing">Demo anfragen</Button>
            <Button variant="secondary" href="#integration">
              Integration ansehen
            </Button>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
