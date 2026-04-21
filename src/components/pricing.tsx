import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <EyebrowBadge>Kein Sales-Call. Kein Geheimnis.</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Du siehst den Preis, bevor du mit jemandem reden musst.
      </h2>
      <p
        className="text-text-muted max-w-[740px] mt-0"
        style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
      >
        Drei Varianten &ndash; gleicher Funktionsumfang. Du entscheidest nur,
        wo Ticketpilot l&auml;uft. Prozesse, Konnektoren und gef&uuml;hrte
        Installation sind immer dabei.
      </p>

      <div className="grid desktop:grid-cols-3 gap-5 mt-9">
        <Card>
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Lokal
          </span>
          <div className="flex items-end gap-2 mt-3">
            <strong className="font-headline text-[48px] leading-none text-accent">229&nbsp;&euro;</strong>
            <span className="text-text-muted pb-1.5">/ Monat</span>
          </div>
          <p className="text-text-muted mt-2 mb-4">
            Installation auf deinem eigenen Server oder Rechner.
            Maximale Kontrolle, keine externen Abh&auml;ngigkeiten.
          </p>
          <ul className="feature-list">
            <li>Alle Prozesse & Konnektoren (Odoo, Jira, GitHub)</li>
            <li>Gef&uuml;hrte Installation via Cuby im Studio</li>
            <li>L&auml;uft komplett auf deiner Hardware</li>
            <li>Keine zus&auml;tzlichen Hosting-Kosten</li>
          </ul>
          <p className="text-sm text-text-muted mt-4">
            F&uuml;r Teams, die volle Datensouver&auml;nit&auml;t brauchen.
          </p>
        </Card>

        <Card highlighted>
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Cloud by Hetzner &ndash; Empfohlen
          </span>
          <div className="flex items-end gap-2 mt-3">
            <strong className="font-headline text-[48px] leading-none text-accent">249&nbsp;&euro;</strong>
            <span className="text-text-muted pb-1.5">/ Monat</span>
          </div>
          <p className="text-text-muted mt-2 mb-4">
            Gehostet bei Hetzner in Deutschland.
            Schnellster Start, wir k&uuml;mmern uns um die Infrastruktur.
          </p>
          <ul className="feature-list">
            <li>Alle Prozesse & Konnektoren (Odoo, Jira, GitHub)</li>
            <li>Gef&uuml;hrte Installation via Cuby im Studio</li>
            <li>Hosting in Deutschland (Hetzner)</li>
            <li>Ggf. zus&auml;tzliche Hetzner-Kosten</li>
          </ul>
          <p className="text-sm text-text-muted mt-4">
            Der schnellste Weg zu deinem ersten automatisierten Ticket.
          </p>
        </Card>

        <Card>
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Cloud K8s &ndash; Eigene Infra
          </span>
          <div className="flex items-end gap-2 mt-3">
            <strong className="font-headline text-[48px] leading-none text-accent">249&nbsp;&euro;</strong>
            <span className="text-text-muted pb-1.5">/ Monat</span>
          </div>
          <p className="text-text-muted mt-2 mb-4">
            Installation in eurer firmeneigenen Cloud-Infrastruktur
            (Kubernetes).
          </p>
          <ul className="feature-list">
            <li>Alle Prozesse & Konnektoren (Odoo, Jira, GitHub)</li>
            <li>Gef&uuml;hrte Installation via Cuby im Studio</li>
            <li>L&auml;uft in eurer bestehenden K8s-Umgebung</li>
            <li>Volle Kontrolle &uuml;ber eure Cloud</li>
          </ul>
          <p className="text-sm text-text-muted mt-4">
            F&uuml;r Unternehmen mit eigener DevOps-Infrastruktur.
          </p>
        </Card>
      </div>

      <div className="mt-9 text-center">
        <Button href="https://www.processcube.io/shop/category/software-abos-1?search=ticketpilot">30 Tage kostenlos testen</Button>
        <p className="text-text-muted text-sm mt-4 max-w-[640px] mx-auto">
          Zahlungsmittel wird bei Registrierung hinterlegt. Die Abrechnung beginnt
          automatisch einen Tag nach Ablauf der 30 Tage. Monatlich k&uuml;ndbar.
          KI-Provider-Kosten separat.
        </p>
      </div>
    </SectionWrapper>
  );
}
