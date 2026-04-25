import Link from "next/link";
import { DownloadButton } from "@/components/ui/download-button";
import { VideoButton } from "@/components/ui/video-button";

/**
 * Variante C \u2013 Vercel-Logik mit Info-Dichte.
 *
 * Above-the-Fold-Informations-Check (User-Wunsch):
 *   [1] Arbeitserleichterung fuer Dev \u2192 Stat-Kachel 1 (-90%) + H1
 *   [2] ROI                            \u2192 Stat-Kachel 2 (+9.000 \u20AC)
 *   [3] Preis                          \u2192 Stat-Kachel 3 (249 \u20AC/Monat)
 *   [4] BEHR IT                        \u2192 Beweiszeile
 *   [5] Problem + Loesung              \u2192 Sub-Line (Features bauen vs. Tickets debuggen)
 *
 * Das "grosse Logo-Visual" aus der Vercel-Optik ist raus \u2013 der Stat-Grid ist
 * jetzt das visuelle Zentrum und liefert gleichzeitig die kaufrelevanten Zahlen.
 */
export function HeroC() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg"
      aria-label="Ticketpilot Hero"
    >
      {/* Subtiles Grid + Glow im Hintergrund fuer Tiefe */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.10) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, #000 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 40%, #000 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[520px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at 50% 10%, rgba(248,181,68,0.20), transparent 70%)",
        }}
      />

      <div className="container relative pt-16 pb-16 max-tablet:pt-10 max-tablet:pb-10">
        {/* Block 1: Headline (Problem \u2192 Loesung) + Sub */}
        <div className="max-w-[1000px] mx-auto text-center">
          <h1
            className="headline tracking-tight"
            style={{
              fontSize: "clamp(40px, 5.2vw, 68px)",
              lineHeight: 1.02,
            }}
          >
            <span className="block">Dein Team ertrinkt im Ticket-Backlog.</span>
            <span className="block text-accent">Ticketpilot wirft die Leine.</span>
          </h1>
          <p
            className="text-text-muted mt-6 max-w-[680px] mx-auto"
            style={{ fontSize: "clamp(17px, 1.5vw, 19px)", lineHeight: 1.55 }}
          >
            KI-Support, den dein Dev freigibt. Ticketpilot klassifiziert,
            schreibt den Fix und l&auml;sst Tests laufen &ndash; on-prem, in
            30&ndash;60 Minuten statt 4 Stunden.
          </p>
        </div>

        {/* Block 2: Die drei Kauf-Dimensionen */}
        <div className="mt-10 max-w-[980px] mx-auto grid desktop:grid-cols-3 gap-3 max-tablet:gap-2">
          <StatTile
            kind="effort"
            kpi={"\u221290 %"}
            label="Dev-Aufwand pro Ticket"
            sub={
              "Dein Dev reviewt nur noch 10\u00a0% der Tickets selbst. Den Rest \u00fcbernimmt der Prozess."
            }
            linkHref="#proof"
            linkLabel="Zahlen ansehen"
          />
          <StatTile
            kind="roi"
            kpi={"+9.000\u00a0\u20ac"}
            label={"R\u00fcckgewinn pro Dev / Jahr"}
            sub={
              "Konservative Rechnung mit offengelegten Annahmen. Skalierung bis 20\u00a0Devs im Onepager."
            }
            linkHref="/roi-onepager"
            linkLabel="Rechnung ansehen"
            highlighted
          />
          <StatTile
            kind="price"
            kpi={"249\u00a0\u20ac"}
            label={"Fix pro Monat \u2013 ganzes Team"}
            sub={
              "Keine Per-Seat-Lizenz. 30 Tage kostenlos, monatlich k\u00fcndbar, Setup in 15 Minuten."
            }
            linkHref="#pricing"
            linkLabel="Pricing-Details"
          />
        </div>

        {/* Block 3: CTAs + Trust-Zeile */}
        <div className="mt-9 text-center">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <DownloadButton
              event="cta_hero_trial_c"
              className="inline-flex items-center justify-center h-12 px-6 rounded-btn font-bold bg-gradient-to-br from-accent to-accent-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(248,181,68,0.3)] transition-all text-black cursor-pointer"
            >
              Kostenlos starten
            </DownloadButton>
            <VideoButton
              event="cta_hero_demo_video"
              className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-btn font-bold border border-line bg-white/[0.02] text-text-primary hover:border-accent/60 hover:bg-white/[0.05] transition-all cursor-pointer"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="text-accent"
              >
                <polygon points="6 4 20 12 6 20" />
              </svg>
              Demo ansehen
              <span className="text-text-muted font-normal text-[13px]">
                &middot; 2&nbsp;Min
              </span>
            </VideoButton>
          </div>
          <p className="text-[12px] text-text-muted mt-3">
            30 Tage kostenlos &middot; Monatlich k&uuml;ndbar &middot; Setup in 15 Minuten
          </p>
        </div>

        {/* Block 4: Beweiszeile mit ProcessCube-eigenen Werten aus dem
            ersten Halbjahr Ticketpilot-Eigenbetrieb. */}
        <p
          className="mt-9 max-w-[900px] mx-auto text-center text-text-muted"
          style={{ fontSize: "clamp(14px, 1.2vw, 16px)", lineHeight: 1.55 }}
        >
          <strong className="text-text-primary font-headline uppercase tracking-wide">
            ProcessCube Support
          </strong>{" "}
          antwortet in Sekunden statt Stunden.{" "}
          <strong className="text-text-primary font-headline uppercase tracking-wide">
            90&nbsp;%
          </strong>{" "}
          Dev-Freigabe ohne Nacharbeit bei{" "}
          <strong className="text-text-primary font-headline uppercase tracking-wide">
            312 Tickets
          </strong>{" "}
          in 6 Monaten.
        </p>
      </div>
    </section>
  );
}

interface StatTileProps {
  kind: "effort" | "roi" | "price";
  kpi: string;
  label: string;
  sub: string;
  linkHref: string;
  linkLabel: string;
  highlighted?: boolean;
}

function StatTile({
  kind,
  kpi,
  label,
  sub,
  linkHref,
  linkLabel,
  highlighted,
}: StatTileProps) {
  const icons: Record<StatTileProps["kind"], React.ReactNode> = {
    effort: (
      <path d="M4 12h14M10 6l-6 6 6 6" />
    ),
    roi: (
      <>
        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
        <polyline points="16 7 22 7 22 13" />
      </>
    ),
    price: (
      <>
        <path d="M6 3h12l4 6-10 13L2 9z" />
        <path d="M11 3 8 9l4 13 4-13-3-6" />
      </>
    ),
  };

  const labels: Record<StatTileProps["kind"], string> = {
    effort: "Arbeitserleichterung",
    roi: "ROI",
    price: "Preis",
  };

  return (
    <div
      className={`relative rounded-card p-5 border ${
        highlighted
          ? "bg-accent-soft border-accent-border"
          : "bg-white/[0.02] border-line"
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="text-accent"
        >
          {icons[kind]}
        </svg>
        <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-text-muted">
          {labels[kind]}
        </span>
      </div>
      <div
        className="font-headline text-accent"
        style={{ fontSize: "clamp(34px, 3.5vw, 44px)", lineHeight: 1 }}
      >
        {kpi}
      </div>
      <div className="text-text-primary mt-2 font-bold text-[15px]">
        {label}
      </div>
      <p className="text-text-muted text-[13px] mt-1 leading-snug m-0">
        {sub}
      </p>
      <Link
        href={linkHref}
        className="text-[12px] text-text-primary hover:text-accent transition-colors inline-flex items-center gap-1 mt-3"
      >
        {linkLabel}
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
}
