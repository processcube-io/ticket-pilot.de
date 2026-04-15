import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";

export function FeatureComparison() {
  return (
    <SectionWrapper>
      <div className="grid desktop:grid-cols-2 gap-5">
        <Card>
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Klassisch
          </span>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-3 mb-2.5 leading-none">
            Tickets verwalten
          </h3>
          <ul className="feature-list">
            <li>Tickets lesen und interpretieren</li>
            <li>Manuell priorisieren und weiterleiten</li>
            <li>Zwischen Teams hin- und herschieben</li>
            <li>Rückfragen stellen und warten</li>
            <li>Am Ende doch wieder manuell lösen</li>
          </ul>
        </Card>
        <Card highlighted>
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Ticketpilot
          </span>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-3 mb-2.5 leading-none">
            Tickets eliminieren
          </h3>
          <ul className="feature-list">
            <li>Versteht Inhalt, Kontext und Dringlichkeit</li>
            <li>Trifft automatisch die richtige Entscheidung</li>
            <li>Startet den passenden Prozess selbst</li>
            <li>Leitet nur weiter, wenn es sinnvoll ist</li>
            <li>Liefert direkt ein Ergebnis statt nur Status</li>
          </ul>
        </Card>
      </div>
    </SectionWrapper>
  );
}
