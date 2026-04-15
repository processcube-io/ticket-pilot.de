import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    title: "Ticket kommt rein",
    description:
      "Per E-Mail, Odoo oder API. Ticketpilot übernimmt sofort und erkennt, worum es wirklich geht.",
  },
  {
    number: 2,
    title: "Ticketpilot entscheidet",
    description:
      "Inhalt, Kontext und nächste Aktion werden automatisch bestimmt – ohne manuelles Triaging.",
  },
  {
    number: 3,
    title: "Lösung wird umgesetzt",
    description:
      "Der passende Prozess startet selbst. Routing, Antwort oder Folgeaktion laufen automatisch.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper id="funktion">
      <EyebrowBadge>So funktioniert&apos;s</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Ein Ticket. Drei Schritte. Fertig.
      </h2>
      <p className="text-text-muted max-w-[740px] mt-0" style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
        Keine technische Erklärung. Kein Prozessdiagramm. Nur das, was zählt: Ein
        eingehendes Ticket wird automatisch verstanden, entschieden und gelöst.
      </p>

      <div className="grid desktop:grid-cols-3 gap-5 mt-9">
        {steps.map((step) => (
          <Card key={step.number}>
            <div className="w-[54px] h-[54px] rounded-full bg-accent text-bg grid place-items-center font-headline text-[28px] font-black">
              {step.number}
            </div>
            <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-3 mb-2.5 leading-none">
              {step.title}
            </h3>
            <p className="text-text-muted m-0">{step.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
