import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";

function Check() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-accent"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function Compliance() {
  return (
    <SectionWrapper id="compliance">
      <EyebrowBadge>Compliance</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Dein Compliance-Officer kann durchatmen.
      </h2>
      <p
        className="text-text-muted max-w-[740px] mt-0"
        style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
      >
        Ticketpilot l&auml;uft auf deiner Infrastruktur in Deutschland
        (oder deinem eigenen Server weltweit). Kein US-Egress f&uuml;r
        Ticketdaten, AVV auf Anfrage, jede KI-Interaktion protokolliert.
      </p>

      <div className="grid desktop:grid-cols-2 gap-5 mt-9">
        <Card>
          <h3 className="font-headline text-[24px] uppercase tracking-[0.02em] mt-0 mb-4 leading-none">
            Datenschutz & Rechtliches
          </h3>
          <ul className="list-none p-0 m-0 grid gap-3">
            <li className="flex gap-3 items-start">
              <Check />
              <div>
                <strong className="text-text-primary block">DSGVO-konform</strong>
                <span className="text-text-muted text-sm">
                  Ticketdaten verlassen deine Infrastruktur nie. Kein
                  Drittlandtransfer f&uuml;r Kern-Workflows.
                </span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Check />
              <div>
                <strong className="text-text-primary block">AVV auf Anfrage</strong>
                <span className="text-text-muted text-sm">
                  Auftragsverarbeitungsvertrag f&uuml;r Cloud-by-Hetzner und
                  Cloud-K8s-Betrieb verf&uuml;gbar. Lokal-Installation braucht
                  keinen AVV.
                </span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Check />
              <div>
                <strong className="text-text-primary block">
                  BDSG § 26 &amp; Betriebsrat
                </strong>
                <span className="text-text-muted text-sm">
                  Keine Leistungs- oder Verhaltenskontrolle von Mitarbeitenden.
                  Audit-Trail bezieht sich auf Tickets, nicht auf Personen.
                </span>
              </div>
            </li>
          </ul>
        </Card>

        <Card highlighted>
          <h3 className="font-headline text-[24px] uppercase tracking-[0.02em] mt-0 mb-4 leading-none">
            Technische Kontrolle
          </h3>
          <ul className="list-none p-0 m-0 grid gap-3">
            <li className="flex gap-3 items-start">
              <Check />
              <div>
                <strong className="text-text-primary block">
                  Kein US-Egress f&uuml;r Ticketdaten
                </strong>
                <span className="text-text-muted text-sm">
                  Klassifizierung, Prozess-Engine &amp; Speicherung l&auml;uft
                  on-prem. Nur die KI-Prompts gehen zum gew&auml;hlten Provider
                  &ndash; oder bleiben lokal (Ollama, vLLM).
                </span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Check />
              <div>
                <strong className="text-text-primary block">
                  Prompt-Redaction konfigurierbar
                </strong>
                <span className="text-text-muted text-sm">
                  Personenbezogene Daten (Namen, E-Mails, IBAN) werden vor
                  dem Versand an die KI maskiert. Regex-Regeln pro Prozess.
                </span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Check />
              <div>
                <strong className="text-text-primary block">
                  Open Source Kern
                </strong>
                <span className="text-text-muted text-sm">
                  ProcessCube-Engine ist quelloffen. Kein Black-Box-Risiko,
                  keine Vendor-Lock-in-Falle. Audit durch deine IT jederzeit
                  m&ouml;glich.
                </span>
              </div>
            </li>
          </ul>
        </Card>
      </div>

      <p className="text-text-muted text-sm mt-6 max-w-[820px]">
        <strong className="text-text-primary">Noch eine Frage offen?</strong>{" "}
        Dein Datenschutz- oder Security-Team darf direkt mit uns sprechen.
        Schreib uns an{" "}
        <a
          href="mailto:info@processcube.io?subject=Ticketpilot%20Compliance-Anfrage"
          className="underline hover:text-text-primary"
        >
          info@processcube.io
        </a>
        .
      </p>
    </SectionWrapper>
  );
}
