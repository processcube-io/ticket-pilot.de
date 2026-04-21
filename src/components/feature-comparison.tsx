import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";

export function FeatureComparison() {
  return (
    <SectionWrapper id="vergleich">
      <EyebrowBadge>Der Unterschied</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Zwei Dienstage. Eine Entscheidung.
      </h2>
      <p
        className="text-text-muted max-w-[740px] mt-0"
        style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
      >
        Dasselbe Team. Dieselben 23 Tickets im Sprint. Einmal mit KI-Ping-Pong,
        einmal mit Ticketpilot. Der Unterschied liegt nicht in der KI &ndash;
        sondern darin, ob ein Prozess dahintersteht.
      </p>

      <div className="grid desktop:grid-cols-2 gap-5 mt-9">
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
