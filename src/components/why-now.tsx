import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { PrimaryCta } from "@/components/ui/primary-cta";

/**
 * Urgency ohne Fake-Scarcity.
 * Die wochenweise Opportunity-Cost-Rechnung leitet sich aus der
 * ROI-Rechnung (WhyItWorks) ab: 9.000 \u20AC / 52 Wochen \u2248 173 \u20AC pro Dev pro Woche.
 *
 * ctaHref: Default zeigt auf den Lead-Form-Anker (#lead) der Variante B.
 * Variante C (kein Formular) uebergibt die Shop-URL direkt.
 */
export function WhyNow({
  ctaHref = "#lead",
  ctaLabel,
}: { ctaHref?: string; ctaLabel?: string } = {}) {
  return (
    <SectionWrapper id="why-now">
      <EyebrowBadge>Warum jetzt</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Jede Woche Warten kostet dich 173&nbsp;&euro;. Pro Dev.
      </h2>
      <p
        className="text-text-muted max-w-[740px] mt-0"
        style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
      >
        Nicht k&uuml;nstlich. Die Zahl kommt direkt aus der ROI-Rechnung:
        9.000&nbsp;&euro; R&uuml;ckgewinn pro Dev pro Jahr, verteilt auf
        52 Wochen. Jede Woche, die du das Projekt vertagst, geht diese
        Produktivit&auml;t ungenutzt verloren.
      </p>

      <div className="mt-9 grid desktop:grid-cols-3 gap-5">
        <div className="border border-line rounded-card p-6 bg-white/[0.02]">
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-text-muted">
            1 Woche Warten
          </span>
          <strong className="block text-[40px] font-headline leading-none text-text-primary mt-3">
            &minus;&thinsp;173&nbsp;&euro;
          </strong>
          <p className="text-text-muted text-sm mt-3 m-0">
            pro Dev. Bei 4 Devs: &minus;&thinsp;692&nbsp;&euro;/Woche.
          </p>
        </div>
        <div className="border border-line rounded-card p-6 bg-white/[0.02]">
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-text-muted">
            1 Monat Warten
          </span>
          <strong className="block text-[40px] font-headline leading-none text-text-primary mt-3">
            &minus;&thinsp;750&nbsp;&euro;
          </strong>
          <p className="text-text-muted text-sm mt-3 m-0">
            pro Dev. Bei 4 Devs: &minus;&thinsp;3.000&nbsp;&euro;/Monat.
          </p>
        </div>
        <div className="border border-accent-border rounded-card p-6 bg-accent-soft">
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Entscheidung heute
          </span>
          <strong className="block text-[40px] font-headline leading-none text-accent mt-3">
            +&thinsp;9.000&nbsp;&euro;
          </strong>
          <p className="text-text-muted text-sm mt-3 m-0">
            pro Dev pro Jahr. Installation dauert 15 Minuten, Trial 30 Tage,
            Entscheidung jederzeit reversibel.
          </p>
        </div>
      </div>

      <div className="mt-9 max-w-[820px] border border-line rounded-card p-6 bg-white/[0.02]">
        <h3 className="font-headline text-[22px] uppercase tracking-[0.02em] m-0 mb-3 leading-none">
          Der asymmetrische Deal
        </h3>
        <p className="text-text-muted m-0">
          Kauf heute = 249&nbsp;&euro; Risiko (erster Monat, monatlich
          k&uuml;ndbar). Nicht-Kauf heute = bis zu 750&nbsp;&euro; entgangener
          R&uuml;ckgewinn pro Dev im selben Zeitraum. Das Downside-Risiko ist
          drei Mal kleiner als die Opportunity-Cost &ndash; und du kannst
          jederzeit aussteigen.
        </p>
        <div className="mt-5">
          <PrimaryCta
            href={ctaHref}
            event="cta_whynow_trial"
            label={ctaLabel}
            secondary={{ href: "#warum", label: "Rechnung nachvollziehen \u2191" }}
          />
        </div>
      </div>

      <div className="mt-7 max-w-[820px] border border-line rounded-card p-6 bg-white/[0.02]">
        <h3 className="font-headline text-[22px] uppercase tracking-[0.02em] m-0 mb-3 leading-none">
          Der externe Trigger, den du nicht verschieben kannst
        </h3>
        <p className="text-text-muted m-0 text-sm">
          <strong className="text-text-primary">NIS2-Umsetzungsgesetz</strong>{" "}
          zwingt ab 2024/25 auch mittelst&auml;ndische Unternehmen zu
          dokumentierten Security-Incident-Prozessen. Wer Tickets ohne
          Audit-Trail abarbeitet, erf&uuml;llt die Nachweispflicht nicht.
          Ticketpilot liefert den Audit-Trail ab Tag 1 &ndash; jedes Ticket,
          jeder Fix, jeder Reviewer dokumentiert.
        </p>
        <p className="text-[11px] text-text-muted mt-3 m-0">
          Quelle: Richtlinie (EU) 2022/2555 &bdquo;NIS2&ldquo;, Umsetzung in
          DE durch NIS2UmsuCG (in Gesetzgebung).
        </p>
      </div>

      <p className="text-text-muted text-sm mt-6 max-w-[820px]">
        <strong className="text-text-primary">Hinweis:</strong> Die 173&nbsp;&euro;
        sind Opportunity Cost, keine Kosten, die dir jemand in Rechnung stellt.
        Konservativ gerechnet (75k&thinsp;&euro; Dev-Vollkosten &middot;
        30&nbsp;% Ticket-Routine &middot; 40&nbsp;% Automatisierungsquote).
        Eigene Annahmen verwenden? Nimm die{" "}
        <a href="#warum" className="underline hover:text-text-primary">
          ROI-Rechnung
        </a>{" "}
        und ersetze die Zahlen.
      </p>
    </SectionWrapper>
  );
}
