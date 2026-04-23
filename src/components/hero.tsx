import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { PrimaryCta } from "@/components/ui/primary-cta";

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
        <div className="container py-[56px] max-tablet:py-[40px]">
        <div className="grid desktop:grid-cols-[1.05fr_0.95fr] gap-[34px] items-center">
          {/* Linke Spalte */}
          <div>
            <EyebrowBadge>On-Prem &middot; BPMN-gesteuert &middot; ab 15 Min live</EyebrowBadge>
            <h1
              className="headline"
              style={{ fontSize: "clamp(56px, 10vw, 112px)", maxWidth: "820px" }}
            >
              Schluss mit Ticket-Pingpong. Deine KI fixt. Du gibst frei.
            </h1>
            <p className="font-headline uppercase tracking-[0.04em] text-accent mt-4 text-[20px] max-tablet:text-[16px]">
              Ticketpilot. KI-Support, den dein Dev freigibt.
            </p>
            <p
              className="text-text-muted max-w-[740px] mt-[22px]"
              style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
            >
              Es ist Montagmorgen. 47 neue Tickets. Dein Team hat vier Leute.
              Statt stundenlang zu debuggen, l&auml;sst du die KI den Fix schreiben &ndash;
              prozessgesteuert, automatisch getestet, von deinem Dev freigegeben.
              Willkommen bei Ticketpilot.
            </p>

            <div className="mt-[34px]">
              <PrimaryCta
                href="https://www.processcube.io/shop/category/software-abos-1?search=ticketpilot"
                event="cta_hero_trial"
                secondary={{ href: "#problem", label: "Warum das n\u00f6tig ist \u2193" }}
              />
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
          <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-line rounded-[30px] p-7 shadow-card relative overflow-hidden max-tablet:p-[22px]">
            {/* Glow-Effekt */}
            <div className="absolute -right-[10%] -bottom-[25%] w-[260px] h-[260px] bg-[radial-gradient(circle,rgba(247,150,70,0.22),rgba(247,150,70,0))] pointer-events-none" />

            {/* Terminal Window */}
            <div className="bg-card border border-line rounded-card p-[18px] mb-5">
              <div className="flex justify-between items-center mb-[18px] text-text-muted text-[13px]">
                <div className="flex gap-2">
                  <i className="block w-2.5 h-2.5 rounded-full bg-white/20" />
                  <i className="block w-2.5 h-2.5 rounded-full bg-white/20" />
                  <i className="block w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <span>Ticketpilot &middot; live</span>
              </div>
              <div className="p-[18px] bg-white/[0.03] border border-white/[0.06] rounded-inner">
                <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
                  Bug Report &middot; Kritisch
                </span>
                <div className="text-[22px] font-bold my-3">
                  Checkout bricht nach Zahlung ab &ndash; 12 Kunden betroffen
                </div>
                <p className="text-text-muted m-0">
                  KI kategorisiert, schreibt den Fix, l&auml;sst Tests laufen.
                  Dein Dev reviewed das Ergebnis auf der Testumgebung und gibt frei.
                </p>
              </div>
            </div>

            {/* Result Card */}
            <div className="bg-card border border-line rounded-card p-6 relative overflow-hidden">
              <span className="absolute top-[22px] right-[22px] w-3.5 h-3.5 bg-accent rounded-[4px]" />
              <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
                Ergebnis
              </span>
              <h3 className="headline text-[30px] my-2.5">
                30&ndash;60 Minuten. Nicht 4 Stunden.
              </h3>
              <p className="text-text-muted m-0 max-w-[520px]">
                Kein blindes Accept-All. Kein Pray-and-Ship. Jede Zeile
                durchl&auml;uft Linting, Tests und Security Scans &ndash;
                bevor dein Dev sie &uuml;berhaupt sieht.
              </p>
              <div className="grid grid-cols-3 max-desktop:grid-cols-1 gap-3.5 mt-[18px]">
                <StatBox value="-50%" label="Time to Resolution" />
                <StatBox value="+40%" label="Tickets pro Sprint" />
                <StatBox value="100%" label="Audit-Trail" />
              </div>
              <p className="text-[11px] text-text-muted mt-4">
                Werte aus unserem eigenen ProcessCube-Support. Eure
                Zahlen zeigen wir in der Testphase live auf deinem Dashboard.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
