import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { LeadForm } from "@/components/lead-form";

export function FinalCtaB() {
  return (
    <SectionWrapper id="lead" hideScrollHint>
      <EyebrowBadge>Kostenlos testen</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        In 30 Sekunden Mail hinterlegen. Wir &uuml;bernehmen den Rest.
      </h2>
      <p
        className="text-text-muted max-w-[740px] mt-0"
        style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
      >
        Du bekommst per Mail deinen pers&ouml;nlichen Link zum Trial-Warenkorb,
        w&auml;hlst dort deine Ticketpilot-Variante und startest 30 Tage
        kostenlos. Rechnung &uuml;ber 0&thinsp;&euro;, API-Key automatisch,
        Installationsguide folgt &ndash; in dieser Reihenfolge.
      </p>

      <div className="grid desktop:grid-cols-[1.1fr_0.9fr] gap-7 mt-9 items-start">
        <LeadForm />

        <div className="grid gap-3">
          <div className="border border-line rounded-inner p-4 bg-white/[0.02]">
            <strong className="text-text-primary block mb-2">
              Was nach dem Klick passiert
            </strong>
            <ol className="list-decimal pl-5 text-sm text-text-muted grid gap-1.5 m-0">
              <li>Dein Lead wird direkt in unserem Odoo-CRM angelegt.</li>
              <li>
                Du bekommst eine Mail mit dem Link zum Trial-Warenkorb &ndash;
                mit deinen Daten vorbef&uuml;llt.
              </li>
              <li>
                Nach Kauf: Rechnung &uuml;ber 0&thinsp;&euro; f&uuml;r die
                30-Tage-Testphase, inkl. API-Key.
              </li>
              <li>
                Danach: Installationsguide f&uuml;r deine Variante (Lokal,
                Hetzner oder K8s).
              </li>
              <li>
                5 Tage vor Trial-Ende erinnern wir dich &ndash; abbrechen geht
                in einem Klick.
              </li>
            </ol>
          </div>

          <div className="border border-line rounded-inner p-4 bg-white/[0.02]">
            <strong className="text-text-primary block mb-1">
              Kein Selbst-Starter?
            </strong>
            <p className="text-sm text-text-muted m-0">
              Schreib uns an{" "}
              <a
                href="mailto:info@processcube.io?subject=Ticketpilot%20Demo-Anfrage"
                className="underline hover:text-text-primary"
              >
                info@processcube.io
              </a>
              . Wir machen in 30 Minuten eine gef&uuml;hrte Demo auf deinen
              Tickets.
            </p>
          </div>

          <div className="border border-line rounded-inner p-4 bg-white/[0.02]">
            <strong className="text-text-primary block mb-1">Deine Daten</strong>
            <p className="text-sm text-text-muted m-0">
              Wir speichern nur, was du eintippst. Kein Newsletter-Opt-in per
              default, kein Weiterverkauf. Siehe{" "}
              <a
                href="https://www.processcube.io/datenschutz"
                className="underline hover:text-text-primary"
              >
                Datenschutz
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
