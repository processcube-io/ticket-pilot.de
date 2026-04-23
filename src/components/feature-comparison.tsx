import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";

export function FeatureComparison() {
  return (
    <SectionWrapper id="vergleich">
      <EyebrowBadge>Vergleich</EyebrowBadge>
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
            <li>09:00 &ndash; 23 Tickets gehen ein. Ticketpilot klassifiziert und best&auml;tigt Kunden direkt</li>
            <li>09:02 &ndash; KI startet Fixes f&uuml;r Standard-Bugs. Tests laufen automatisch</li>
            <li>09:45 &ndash; Erste Fixes auf Testumgebung. Dein Dev reviewed &ndash; 90&nbsp;% gehen ohne Nacharbeiten durch</li>
            <li>10:30 &ndash; Tickets geschlossen. Audit-Trail dokumentiert jeden Schritt</li>
            <li>14:00 &ndash; Dein Team arbeitet an Features statt an Feuerwehr&uuml;bungen</li>
          </ul>
          <p className="text-[11px] text-text-muted mt-4 pt-3 border-t border-line">
            90&nbsp;%-Freigabequote und 30&ndash;60&nbsp;Min/Ticket aus unserem eigenen
            ProcessCube-Support (n&nbsp;=&nbsp;312 Tickets, 6 Monate).{" "}
            <a href="#proof" className="underline hover:text-text-primary">
              Details hier.
            </a>
          </p>
        </Card>
      </div>
    </SectionWrapper>
  );
}
