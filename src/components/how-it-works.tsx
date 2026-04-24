import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    title: "Docker starten",
    description:
      "Ein Befehl. ProcessCube + Ticketpilot laufen auf deinem Server. Keine Cloud, keine Abh\u00E4ngigkeit, deine Daten bleiben bei dir.",
  },
  {
    number: 2,
    title: "Systeme verbinden",
    description:
      "Odoo oder Jira als Ticket-Quelle. Claude Code, GPT oder Gemini als KI. Dein Repo als Ziel. Drei Felder ausf\u00FCllen, fertig.",
  },
  {
    number: 3,
    title: "Erstes Ticket durchlaufen lassen",
    description:
      "BPMN-Template aktivieren, erstes Ticket einwerfen, zusehen wie es durch den Prozess l\u00E4uft. Ab jetzt l\u00E4uft das automatisch.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper id="funktion">
      <EyebrowBadge>So funktioniert&rsquo;s</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Du bist schneller fertig als dein Kaffee kalt wird.
      </h2>
      <p className="text-text-muted max-w-[740px] mt-0" style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
        Keine Beraterfirma. Kein 6-Monats-Projekt. Kein Steering Committee.
        Dein DevOps startet morgens den Container und mittags l&auml;uft
        das erste Ticket automatisch durch.
      </p>

      <div className="grid desktop:grid-cols-3 gap-5 mt-9 items-stretch">
        {steps.map((step) => (
          <Card key={step.number}>
            <div className="w-[60px] h-[60px] rounded-[16px] bg-accent-soft border border-accent-border grid place-items-center text-accent font-black font-headline text-[26px]">
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
