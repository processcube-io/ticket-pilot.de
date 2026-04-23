import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";
import { PrimaryCta } from "@/components/ui/primary-cta";

const demoSteps = [
  {
    time: "0:00",
    title: "Ticket geht ein",
    description: "Kunde meldet \u00FCber das Supportformular: \u201EExport liefert leere CSV.\u201C",
    tag: "Eingang",
  },
  {
    time: "0:02",
    title: "Kunde bekommt direkt eine Antwort",
    description: "Ticketpilot klassifiziert (Bug Report, nicht Sales/Feature/Rechnung) und schickt dem Kunden automatisch eine Eingangsbest\u00E4tigung mit Status. Keine Wartezeit.",
    tag: "Kunden-Ack",
  },
  {
    time: "0:05",
    title: "Odoo-Phase aktualisiert",
    description: "Ticket wird automatisch in die richtige Phase im Support-System verschoben. Null Klicks.",
    tag: "Odoo",
  },
  {
    time: "2:00",
    title: "Coding Task erstellt, Claude Code startet",
    description: "In VibeKanban wird ein Task angelegt. Claude Code analysiert den Bug, schreibt den Fix, f\u00FChrt Tests aus.",
    tag: "Coding",
  },
  {
    time: "25:00",
    title: "Tests bestanden, Folgefehler gepr\u00FCft",
    description: "Claude Code erkennt Folgefehler, behebt sie, testet erneut. Bei Bedarf geht es in Interaktion mit dem Entwickler.",
    tag: "Auto-QA",
  },
  {
    time: "45:00",
    title: "Fix reviewed & auf Testumgebung deployed",
    description: "Der Entwickler \u00F6ffnet die Testumgebung, pr\u00FCft das Ergebnis, gibt die Abnahme. 90\u00A0% der F\u00E4lle gehen ohne Nacharbeiten durch. Fertig.",
    tag: "Abnahme",
  },
];

const DEFAULT_SHOP_HREF =
  "https://www.processcube.io/shop/category/software-abos-1?search=ticketpilot";

export function LiveDemo({
  ctaHref = DEFAULT_SHOP_HREF,
  ctaLabel,
}: { ctaHref?: string; ctaLabel?: string } = {}) {
  return (
    <SectionWrapper id="demo">
      <EyebrowBadge>Der Beweis</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        30&ndash;60 Minuten. Von &ldquo;Ticket rein&rdquo; bis &ldquo;Fix auf Testumgebung&rdquo;.
      </h2>
      <p className="text-text-muted max-w-[740px] mt-0" style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
        Kein hypothetisches Szenario. So sieht es aus, wenn bei uns ein
        Bug-Report &uuml;ber das Supportformular eingeht. Die Kundenr&uuml;ckmeldung
        geht direkt nach dem Eingang raus, die eigentliche L&ouml;sung inkl. Review
        dauert in der Regel 30&ndash;60 Minuten. Wir nutzen Ticketpilot f&uuml;r unseren
        eigenen ProcessCube-Support.
      </p>

      <div className="grid desktop:grid-cols-[1.1fr_0.9fr] gap-5 mt-9">
        <Card>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-0 mb-4 leading-none">
            Echtes Ticket &ndash; Echtzeit
          </h3>
          <div className="grid gap-3">
            {demoSteps.map((step) => (
              <div
                key={step.tag}
                className="border border-line bg-white/[0.02] rounded-inner p-[16px] flex justify-between gap-[14px] items-start"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-accent font-bold text-sm">{step.time}</span>
                    <strong className="text-base">{step.title}</strong>
                  </div>
                  <div className="text-text-muted text-sm">{step.description}</div>
                </div>
                <span className="text-accent font-bold tracking-[0.08em] uppercase text-xs whitespace-nowrap mt-1">
                  {step.tag}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Was dein Entwickler in der Zeit gemacht hat
          </span>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-3 mb-2.5 leading-none">
            Etwas anderes. Etwas Wichtigeres.
          </h3>
          <p className="text-text-muted">
            W&auml;hrend Ticketpilot den Bug kategorisiert, den Fix schreibt,
            testet und auf die Testumgebung deployed &ndash; hat dein Entwickler
            an einem Feature gearbeitet. Oder Architektur reviewed. Oder Kaffee
            getrunken. Der Punkt ist: Er musste nicht debuggen.
          </p>
          <p className="text-text-muted mt-3">
            Nach 15 Minuten &ouml;ffnet er die Testumgebung, pr&uuml;ft das
            Ergebnis und gibt die Abnahme.
            <strong className="text-text-primary"> Das ist alles, was er tun muss.</strong>
          </p>
          <div className="mt-6">
            <PrimaryCta href={ctaHref} event="cta_demo_trial" label={ctaLabel} />
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
