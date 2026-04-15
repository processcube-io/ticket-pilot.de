import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";

export function WhyItWorks() {
  return (
    <SectionWrapper id="warum">
      <EyebrowBadge>Warum das funktioniert</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Ticketpilot denkt in Prozessen – nicht in Tickets
      </h2>

      <div className="grid desktop:grid-cols-2 gap-5 mt-9">
        <Card>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-0 mb-2.5 leading-none">
            Versteht Kontext
          </h3>
          <p className="text-text-muted m-0">
            Nicht nur Schlagwörter. Ticketpilot erkennt, was das Ticket wirklich
            bedeutet und welche Reaktion sinnvoll ist.
          </p>
        </Card>
        <Card>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-0 mb-2.5 leading-none">
            Handelt automatisch
          </h3>
          <p className="text-text-muted m-0">
            Nicht nur Assistenz. Ticketpilot startet den passenden Prozess und
            bringt das Ticket konsequent Richtung Lösung.
          </p>
        </Card>
      </div>
    </SectionWrapper>
  );
}
