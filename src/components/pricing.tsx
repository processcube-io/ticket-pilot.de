import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";
import { PrimaryCta } from "@/components/ui/primary-cta";

type Plan = {
  tag: string;
  price: string;
  priceNote: string;
  pitch: string;
  bestFor: string;
  includes: string[];
  hosting: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    tag: "Lokal",
    price: "229\u00A0\u20AC",
    priceNote: "/ Monat &middot; keine Hosting-Kosten",
    pitch: "L\u00E4uft auf deiner eigenen Hardware oder deinem eigenen Server. Du beh\u00E4ltst volle Datensouver\u00E4nit\u00E4t, brauchst aber ein:e:n DevOps-Zust\u00E4ndige:n f\u00FCr Updates.",
    bestFor: "Regulierte Branchen, strenge IT-Policy, vorhandene Server-Infra.",
    includes: [
      "Alle Konnektoren (Odoo, Jira, GitHub)",
      "BPMN-Prozesse & Templates",
      "Gef\u00FChrte Installation via Cuby",
      "E-Mail-Support (24 h Reaktionszeit)",
    ],
    hosting: [
      "Betrieb: du",
      "Updates: du (1-Klick via Cuby)",
      "Backups: du",
      "SLA: best effort",
    ],
  },
  {
    tag: "Cloud by Hetzner",
    price: "249\u00A0\u20AC",
    priceNote: "/ Monat + Hetzner-Server (ca. 15\u201340\u00A0\u20AC/Monat, direkt an Hetzner)",
    pitch: "Ticketpilot l\u00E4uft auf deinem eigenen Hetzner-Server in Deutschland. Du buchst den Server direkt bei Hetzner (eigener Vertrag, eigene Abrechnung), wir liefern den fertigen Installations-Pfad via Cuby. Schnellster Start ohne eigene DevOps-Plattform.",
    bestFor: "Teams, die DE-Hosting zu Hetzner-Preisen wollen und keine eigene K8s-/Server-Infra betreiben.",
    includes: [
      "Alle Konnektoren (Odoo, Jira, GitHub)",
      "BPMN-Prozesse & Templates",
      "Gef\u00FChrte Installation via Cuby auf Hetzner",
      "E-Mail-Support f\u00FCr Ticketpilot (24 h Reaktionszeit)",
    ],
    hosting: [
      "Server-Betrieb: du (Hetzner-Vertrag bei dir)",
      "Empfehlung: CPX21/CPX31 bei Hetzner (DE)",
      "Ticketpilot-Updates: 1-Klick via Cuby",
      "Backups & SLA: gem\u00E4\u00DF deinem Hetzner-Tarif",
    ],
    highlighted: true,
  },
  {
    tag: "Cloud K8s",
    price: "249\u00A0\u20AC",
    priceNote: "/ Monat &middot; Infra-Kosten bei euch",
    pitch: "F\u00FCr Enterprise-Teams mit eigener Kubernetes-Plattform. Deployment via Helm-Chart in eurem Cluster, HA- und Multi-Replica-Setups m\u00F6glich.",
    bestFor: "Konzerne & ScaleUps mit zentralem K8s-Betrieb, die Ticketpilot in bestehende Infra integrieren.",
    includes: [
      "Alles aus \u201ELokal\u201C",
      "Helm-Chart + Values-Beispiele",
      "HA-Setup (Multi-Replica) m\u00F6glich",
      "Support f\u00FCr eure DevOps (Slack Connect)",
    ],
    hosting: [
      "Betrieb: eure Plattform",
      "Ingress & Secrets: eure Standards",
      "Backups: euer Cluster",
      "SLA: nach Cluster-SLO",
    ],
  },
];

const DEFAULT_SHOP_HREF =
  "https://www.processcube.io/shop/category/software-abos-1?search=ticketpilot";

export function Pricing({
  ctaHref = DEFAULT_SHOP_HREF,
  ctaLabel,
}: { ctaHref?: string; ctaLabel?: string } = {}) {
  return (
    <SectionWrapper id="pricing">
      <EyebrowBadge>Pricing</EyebrowBadge>
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
        Drei Betriebsmodelle &ndash; gleicher Funktionsumfang, unterschiedliche
        Verantwortung f&uuml;r Betrieb und Support. Du w&auml;hlst, wo
        Ticketpilot l&auml;uft und wer die Infrastruktur pflegt.
      </p>

      <div className="grid desktop:grid-cols-3 gap-5 mt-9 items-stretch">
        {plans.map((plan) => (
          <Card key={plan.tag} highlighted={plan.highlighted}>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
                {plan.tag}
              </span>
              {plan.highlighted && (
                <span className="text-[11px] uppercase tracking-[0.12em] font-bold text-accent bg-accent-soft border border-accent-border px-2 py-1 rounded-pill">
                  Empfohlen
                </span>
              )}
            </div>
            <div className="flex items-end gap-2 mt-3">
              <strong
                className="font-headline text-[48px] leading-none text-accent"
                dangerouslySetInnerHTML={{ __html: plan.price }}
              />
              <span
                className="text-text-muted pb-1.5 text-sm"
                dangerouslySetInnerHTML={{ __html: plan.priceNote }}
              />
            </div>
            <p className="text-text-muted mt-3 mb-4">{plan.pitch}</p>

            <span className="text-xs uppercase tracking-[0.12em] font-bold text-text-muted">
              Enthalten
            </span>
            <ul className="feature-list">
              {plan.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <span className="text-xs uppercase tracking-[0.12em] font-bold text-text-muted mt-5 block">
              Betrieb & Verantwortung
            </span>
            <ul className="feature-list">
              {plan.hosting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="text-sm text-text-muted mt-5 pt-4 border-t border-line">
              <strong className="text-text-primary">Passt zu:</strong> {plan.bestFor}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-7 border border-accent-border bg-accent-soft rounded-inner p-5 text-center">
        <strong className="text-text-primary block">
          ROI ab Monat 2 &ndash; bei einem 4-Dev-Team.
        </strong>
        <span className="text-text-muted text-sm block mt-1">
          Konservativ 9.000&nbsp;&euro; R&uuml;ckgewinn pro Dev/Jahr gegen ca. 3.000&nbsp;&euro; Jahreskosten.{" "}
          <a href="#warum" className="underline hover:text-text-primary">
            Rechnung mit Quellen &uarr;
          </a>
        </span>
      </div>

      <div className="mt-7 flex flex-col items-center text-center">
        <PrimaryCta href={ctaHref} event="cta_pricing_trial" label={ctaLabel} />
        <p className="text-[11px] text-text-muted/40 mt-5 text-left pl-3 border-l border-line/50 leading-relaxed">
          <strong className="text-text-muted/60">Kein Abo-Automatismus ohne Hinweis:</strong>{" "}
          Zahlungsmittel wird bei Registrierung hinterlegt. 5 Tage vor Ablauf der
          30-Tage-Testphase erh&auml;ltst du eine Erinnerung per E-Mail. Ohne
          K&uuml;ndigung startet die Abrechnung am Tag 31. Monatlich k&uuml;ndbar.
          KI-Provider-Kosten (Claude, GPT, Gemini) werden direkt vom Anbieter
          abgerechnet &ndash; typisch 20&ndash;50&nbsp;&euro; / Monat pro Team.
        </p>
      </div>
    </SectionWrapper>
  );
}
