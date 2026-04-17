import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Button } from "@/components/ui/button";

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
    <section>
      <div className="container py-[56px] max-tablet:py-[40px]">
        <div className="grid desktop:grid-cols-[1.05fr_0.95fr] gap-[34px] items-center">
          {/* Linke Spalte */}
          <div>
            <EyebrowBadge>Bekannt aus unseren Social-Media-Kan&auml;len</EyebrowBadge>
            <h1
              className="headline"
              style={{ fontSize: "clamp(56px, 10vw, 112px)", maxWidth: "820px" }}
            >
              Schluss mit Ticket-Pingpong. Deine KI fixt. Du gibst frei.
            </h1>
            <p
              className="text-text-muted max-w-[740px] mt-[22px]"
              style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
            >
              Es ist Montagmorgen. 47 neue Tickets. Dein Team hat vier Leute.
              Statt stundenlang zu debuggen, l&auml;sst du die KI den Fix schreiben &ndash;
              prozessgesteuert, automatisch getestet, von deinem Dev freigegeben.
              Willkommen bei Ticketpilot.
            </p>

            <div className="flex flex-wrap gap-3.5 mt-[34px]">
              <Button href="#pricing">30 Tage kostenlos testen &ndash; ohne Risiko</Button>
              <Button variant="secondary" href="#problem">
                Warum das n&ouml;tig ist ↓
              </Button>
            </div>

            <div className="mt-5 font-medium flex gap-4 flex-wrap text-[15px]">
              {["Auf deinem Server, nicht in der Cloud", "Erstes Ticket in 15 Minuten", "Jederzeit k\u00FCndbar"].map(
                (item) => (
                  <span key={item} className="before:content-['•'] before:text-accent before:mr-2">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Rechte Spalte – Hero Visual */}
          <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-line rounded-[30px] p-7 shadow-card relative overflow-hidden min-h-[560px] max-desktop:min-h-auto max-tablet:p-[22px]">
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
                  Bug Report &middot; Kritisch
                </span>
                <div className="text-[22px] font-bold my-3">
                  Checkout bricht nach Zahlung ab &ndash; 12 Kunden betroffen
                </div>
                <p className="text-text-muted m-0">
                  Fr&uuml;her: 3 Stunden Debugging. Jetzt: KI schreibt den Fix in
                  90 Sekunden. Tests laufen. Dein Dev gibt frei. Deployed.
                </p>
              </div>
            </div>

            {/* Flow Steps */}
            <div className="grid gap-3.5 my-4">
              <MiniCard step="0:00" title="Ticket geht ein, KI startet" status="ERKANNT" />
              <MiniCard step="1:32" title="Fix geschrieben, 14 Tests bestanden" status="BEREIT" />
              <MiniCard step="4:17" title="Dev gibt Go, Code ist live" status="DEPLOYED" />
            </div>

            {/* Result Card */}
            <div className="bg-card border border-line rounded-card p-6 relative overflow-hidden">
              <span className="absolute top-[22px] right-[22px] w-3.5 h-3.5 bg-accent rounded-[4px]" />
              <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
                Ergebnis
              </span>
              <h3 className="headline text-[30px] my-2.5">
                4 Minuten. Nicht 4 Stunden.
              </h3>
              <p className="text-text-muted m-0 max-w-[520px]">
                Kein blindes Accept-All. Kein Pray-and-Ship. Jede Zeile
                durchl&auml;uft Linting, Tests und Security Scans &ndash;
                bevor dein Dev sie &uuml;berhaupt sieht.
              </p>
              <div className="grid grid-cols-3 max-desktop:grid-cols-1 gap-3.5 mt-[18px]">
                <StatBox value="-50%" label="Time to Resolution" />
                <StatBox value="+40%" label="Mehr Tickets pro Sprint" />
                <StatBox value="100%" label="Audit-Trail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
