import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Button } from "@/components/ui/button";
import { ScrollHint } from "@/components/ui/scroll-hint";

function MiniCard({
  step,
  title,
  status,
}: {
  step: string;
  title: string;
  status: string;
}) {
  return (
    <div className="bg-card border border-line rounded-card p-[18px] flex justify-between items-center gap-[18px]">
      <div>
        <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
          {step}
        </span>
        <strong className="block text-base mt-1.5">{title}</strong>
      </div>
      <span className="text-[13px] font-bold text-success bg-success-soft border border-success-border px-3 py-2 rounded-pill whitespace-nowrap">
        {status}
      </span>
    </div>
  );
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-[18px] border border-line rounded-inner bg-white/[0.02]">
      <strong className="block text-[28px] mb-1 text-accent">{value}</strong>
      <span className="text-text-muted">{label}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="min-h-[calc(100dvh-64px)] flex flex-col">
      <div className="flex-1 flex items-center">
        <div className="container">
          <div className="grid desktop:grid-cols-[1.05fr_0.95fr] gap-[34px] items-center py-[60px] max-tablet:py-[40px]">
        {/* Linke Spalte */}
        <div>
          <EyebrowBadge>Automatisierung für jeden.</EyebrowBadge>
          <h1
            className="headline"
            style={{ fontSize: "clamp(64px, 11vw, 124px)", maxWidth: "820px" }}
          >
            Support-Tickets lösen sich von selbst.
          </h1>
          <p
            className="text-text-muted max-w-[740px] mt-[22px]"
            style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
          >
            Ticketpilot versteht jedes Ticket, startet automatisch den richtigen
            Prozess und liefert direkt eine Lösung – ohne manuelle Bearbeitung.
          </p>

          <div className="flex flex-wrap gap-3.5 mt-[34px]">
            <Button href="#demo">Live Demo starten</Button>
            <Button variant="secondary" href="#pricing">
              In 2 Minuten selbst testen
            </Button>
          </div>

          <div className="mt-5 font-medium flex gap-4 flex-wrap text-[15px]">
            {["Kein Routing", "Kein Chaos", "Keine verlorenen Tickets"].map(
              (item) => (
                <span key={item} className="before:content-['•'] before:text-accent before:mr-2">
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* Rechte Spalte – Hero Visual */}
        <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-line rounded-[30px] p-7 shadow-card relative min-h-[560px] max-desktop:min-h-auto max-tablet:p-[22px]">
          {/* Glow-Effekt */}
          <div className="absolute -right-[10%] -bottom-[25%] w-[260px] h-[260px] bg-[radial-gradient(circle,rgba(247,150,70,0.22),rgba(247,150,70,0))] pointer-events-none" />

          {/* Terminal Window */}
          <div className="bg-card border border-line rounded-card p-[18px] mb-4">
            <div className="flex justify-between items-center mb-[18px] text-text-muted text-[13px]">
              <div className="flex gap-2">
                <i className="block w-2.5 h-2.5 rounded-full bg-white/20" />
                <i className="block w-2.5 h-2.5 rounded-full bg-white/20" />
                <i className="block w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <span>Neues Ticket erkannt</span>
            </div>
            <div className="p-[18px] bg-white/[0.03] border border-white/[0.06] rounded-inner">
              <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
                Bug Report
              </span>
              <div className="text-[22px] font-bold my-3">
                Checkout bricht nach Zahlungsbestätigung ab
              </div>
              <p className="text-text-muted m-0">
                Ticketpilot erkennt Priorität, klassifiziert den Fall und startet
                automatisch den passenden Prozess.
              </p>
            </div>
          </div>

          {/* Flow Steps */}
          <div className="grid gap-3.5 my-4">
            <MiniCard step="Schritt 1" title="Ticket verstehen" status="ANALYSIERT" />
            <MiniCard step="Schritt 2" title="Prozess starten" status="AUSGELÖST" />
            <MiniCard step="Schritt 3" title="Lösung ausspielen" status="ERLEDIGT" />
          </div>

          {/* Result Card */}
          <div className="bg-card border border-line rounded-card p-6 relative overflow-hidden">
            <span className="absolute top-[22px] right-[22px] w-3.5 h-3.5 bg-accent rounded-[4px]" />
            <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
              Ergebnis
            </span>
            <h3 className="headline text-[30px] my-2.5">
              Weniger manuelle Arbeit. Mehr gelöste Tickets.
            </h3>
            <p className="text-text-muted m-0 max-w-[520px]">
              Ticketpilot entscheidet nicht nur, wo ein Ticket hingeht – sondern,
              was als Nächstes passieren muss.
            </p>
            <div className="grid grid-cols-3 max-desktop:grid-cols-1 gap-3.5 mt-[18px]">
              <StatBox value="3x" label="schnellere Bearbeitung" />
              <StatBox value="0" label="manuelle Weiterleitung" />
              <StatBox value="1" label="klarer Prozess pro Ticket" />
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      <div className="pb-6 flex justify-center">
        <ScrollHint />
      </div>
    </section>
  );
}
