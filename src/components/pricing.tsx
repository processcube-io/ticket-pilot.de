import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <EyebrowBadge>Pricing</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Ein Preis. Kein Risiko.
      </h2>

      <div className="bg-card border border-line rounded-card p-7 max-tablet:p-[22px] bg-gradient-to-b from-accent/[0.08] to-white/[0.02] grid gap-6">
        <div>
          <div className="flex items-end gap-2.5">
            <strong
              className="font-headline leading-[0.9] text-accent"
              style={{ fontSize: "clamp(76px, 10vw, 120px)" }}
            >
              249 €
            </strong>
            <span className="text-[22px] text-text-muted pb-3">/ Monat</span>
          </div>
          <p className="text-text-muted mt-3 max-w-[680px]" style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
            Spart Stunden manueller Arbeit, reduziert Chaos im Support und bringt
            jedes Ticket schneller in den richtigen Prozess.
          </p>
        </div>

        <div className="grid desktop:grid-cols-2 gap-5">
          <div className="bg-card border border-line rounded-card p-[22px]">
            <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
              Enthalten
            </span>
            <ul className="feature-list">
              <li>Automatische Ticketanalyse</li>
              <li>Intelligente Klassifizierung</li>
              <li>Direkte Prozessauslösung</li>
            </ul>
          </div>
          <div className="bg-card border border-line rounded-card p-[22px]">
            <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
              Wirkung
            </span>
            <ul className="feature-list">
              <li>Weniger manuelle Bearbeitung</li>
              <li>Schnellere Reaktionszeiten</li>
              <li>Klare Abläufe statt Ticket-Chaos</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-3.5">
          <Button href="#">Jetzt starten</Button>
          <Button variant="secondary" href="#demo">
            Erst Demo ansehen
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
