import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";

/**
 * Customer-Logo-Slots. Leer lassen bis echte Pilotkunden da sind.
 * Sobald verf\u00fcgbar: `logo` als SVG/PNG in /public legen und hier verkabeln.
 */
const pilotLogos: { name: string; logo?: string }[] = [
  // Beispiel nach Freigabe des Kunden:
  // { name: "Beispiel GmbH", logo: "/logos/beispiel.svg" },
];

export function SocialProof() {
  return (
    <SectionWrapper id="proof">
      <EyebrowBadge>Eigene Zahlen</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Wir sind der erste Kunde von Ticketpilot.
      </h2>
      <p
        className="text-text-muted max-w-[740px] mt-0"
        style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
      >
        Bevor wir es verkauft haben, haben wir es sechs Monate lang selbst
        eingesetzt &ndash; f&uuml;r den ProcessCube-Support. Die Zahlen unten
        sind keine Marketing-Versprechen, sondern unser eigener Durchschnitt
        aus diesem Zeitraum.
      </p>

      <div className="grid desktop:grid-cols-3 gap-5 mt-9 items-stretch">
        <Card>
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Eigene Tickets
          </span>
          <strong className="block text-[44px] font-headline leading-none text-accent mt-3">
            312
          </strong>
          <span className="text-text-muted block mt-2">
            Tickets durch Ticketpilot, letzte 6 Monate
          </span>
          <p className="text-text-muted m-0 mt-4 text-sm">
            Alles real aus dem ProcessCube-Support &ndash; Bug-Reports,
            Feature-Requests, Rechnungsfragen gemischt.
          </p>
        </Card>
        <Card highlighted>
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Dev-Freigabe-Quote
          </span>
          <strong className="block text-[44px] font-headline leading-none text-accent mt-3">
            90 %
          </strong>
          <span className="text-text-muted block mt-2">
            der KI-Fixes gehen ohne Nacharbeiten durch Review
          </span>
          <p className="text-text-muted m-0 mt-4 text-sm">
            Die restlichen 10&nbsp;% landen in der Interaktions-Schleife mit dem
            Entwickler &ndash; kein Auto-Deploy, immer Human-in-the-Loop.
          </p>
        </Card>
        <Card>
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Erste Kundenantwort
          </span>
          <strong className="block text-[44px] font-headline leading-none text-accent mt-3">
            direkt
          </strong>
          <span className="text-text-muted block mt-2">
            nach Ticket-Eingang &ndash; klassifiziert &amp; best&auml;tigt
          </span>
          <p className="text-text-muted m-0 mt-4 text-sm">
            Ticketpilot antwortet dem Kunden automatisch Sekunden nach dem
            Eingang &ndash; mit der Kategorisierung und dem Status. Der Fix
            l&auml;uft im Hintergrund weiter.
          </p>
        </Card>
      </div>

      <p className="text-[11px] text-text-muted/40 mt-7 pl-3 border-l border-line/50 leading-relaxed">
        <strong className="text-text-muted/60">Transparenz:</strong>{" "}
        Zahlen aus unserem ProcessCube-Support, 6 Monate Laufzeit, n&nbsp;=&nbsp;312
        Tickets. L&ouml;sungen dauern bei uns in der Regel 30&ndash;60 Minuten inkl. Review.
        Euer Team-Mix kann h&ouml;her oder niedriger liegen &ndash; wir zeigen
        dir die realen Zahlen deines Teams live auf dem Dashboard, sobald dein
        Trial l&auml;uft.
      </p>

      {pilotLogos.length > 0 && (
        <div className="mt-10 pt-8 border-t border-line">
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-text-muted block mb-4">
            Pilotkunden
          </span>
          <div className="flex flex-wrap items-center gap-8">
            {pilotLogos.map((c) => (
              <div
                key={c.name}
                className="h-8 text-text-muted hover:text-text-primary transition-colors"
              >
                {c.logo ? (
                  // Monochromes Logo; Farb-Override per CSS-Filter falls gewünscht
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.logo} alt={c.name} className="h-full w-auto" />
                ) : (
                  <span className="font-bold">{c.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
