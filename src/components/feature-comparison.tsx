import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";

export function FeatureComparison() {
  return (
    <SectionWrapper>
      <div className="grid desktop:grid-cols-2 gap-5">
        <Card>
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Gestern
          </span>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-3 mb-2.5 leading-none">
            Dienstagmorgen ohne Ticketpilot
          </h3>
          <ul className="feature-list">
            <li>09:00 &ndash; 23 neue Tickets im Sprint. Priorisierung dauert 45 Minuten</li>
            <li>10:30 &ndash; Dev debuggt seit einer Stunde. Kontext fehlt</li>
            <li>14:00 &ndash; KI-generierter Fix geht ungetestet live. &ldquo;Wird schon passen&rdquo;</li>
            <li>16:00 &ndash; Produktionsfehler. Keiner wei&szlig;, welcher Code von der KI kam</li>
            <li>17:30 &ndash; Hotfix-Meeting. Drei Leute, die eigentlich Features bauen sollten</li>
          </ul>
        </Card>
        <Card highlighted>
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Morgen
          </span>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-3 mb-2.5 leading-none">
            Dienstagmorgen mit Ticketpilot
          </h3>
          <ul className="feature-list">
            <li>09:00 &ndash; 23 Tickets gehen ein. Ticketpilot klassifiziert automatisch</li>
            <li>09:03 &ndash; KI hat f&uuml;r 8 Standard-Bugs Fixes geschrieben. Tests laufen</li>
            <li>10:00 &ndash; Dein Dev reviewed nur noch. 6 von 8 sind fehlerfrei. Go</li>
            <li>11:00 &ndash; Deployed. Tickets geschlossen. Audit-Trail dokumentiert alles</li>
            <li>14:00 &ndash; Dein Team arbeitet an Features statt an Feuerwehr&uuml;bungen</li>
          </ul>
        </Card>
      </div>
    </SectionWrapper>
  );
}
