import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";

type Row = {
  criterion: string;
  copilot: string;
  ticketpilot: string;
  ticketpilotHighlight?: boolean;
};

const rows: Row[] = [
  {
    criterion: "Wer triggert den Fix?",
    copilot: "Dev muss Ticket lesen, Kontext aufbauen, KI fragen",
    ticketpilot: "Ticket l\u00f6st automatisch den Prozess aus",
    ticketpilotHighlight: true,
  },
  {
    criterion: "Process-Owner",
    copilot: "keiner \u2013 jeder Dev macht es anders",
    ticketpilot: "BPMN-Prozess, versioniert, auditierbar",
    ticketpilotHighlight: true,
  },
  {
    criterion: "Audit-Trail",
    copilot: "Git-Commit-Autor ist der Dev",
    ticketpilot: "Wer, wann, welcher KI-Vorschlag, welche Tests, wer freigegeben",
    ticketpilotHighlight: true,
  },
  {
    criterion: "Kategorisierung / Eingangsbest\u00e4tigung",
    copilot: "manuell",
    ticketpilot: "automatisch, Kundenantwort in Sekunden",
    ticketpilotHighlight: true,
  },
  {
    criterion: "Tests laufen vor dem Review",
    copilot: "nur wenn Dev sie manuell triggert",
    ticketpilot: "automatisch als Prozess-Schritt",
    ticketpilotHighlight: true,
  },
  {
    criterion: "On-Prem",
    copilot: "nur in Enterprise-Tarifen (sehr teuer)",
    ticketpilot: "Standard, auch bei 249\u00a0\u20ac/Monat",
    ticketpilotHighlight: true,
  },
  {
    criterion: "KI-Provider w\u00e4hlbar",
    copilot: "eingeschr\u00e4nkt (GitHub-Modelle)",
    ticketpilot: "Claude, GPT, Gemini oder lokal",
    ticketpilotHighlight: true,
  },
  {
    criterion: "Preis",
    copilot: "19\u201339\u00a0$/Seat \u2013 pro Dev",
    ticketpilot: "249\u00a0\u20ac/Monat fix \u2013 f\u00fcrs ganze Team",
    ticketpilotHighlight: false,
  },
];

export function VsCopilot() {
  return (
    <SectionWrapper id="vs">
      <EyebrowBadge>vs. Copilot</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        &bdquo;Haben wir nicht schon Copilot?&ldquo;
      </h2>
      <p
        className="text-text-muted max-w-[740px] mt-0"
        style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
      >
        Copilot &amp; Cursor helfen dem Dev, schneller Code zu schreiben.
        Ticketpilot nimmt dem Dev den Ticket-Workflow ab. Das sind zwei
        Probleme &ndash; beide l&ouml;sbar, aber nicht vom selben Tool.
      </p>

      <div className="mt-9 border border-line rounded-card overflow-hidden">
        {/* Desktop-Tabelle */}
        <div className="max-desktop:hidden">
          <div className="grid grid-cols-[1.1fr_1.2fr_1.2fr] text-sm">
            <div className="p-5 bg-white/[0.02] border-b border-line">
              <span className="text-xs uppercase tracking-[0.12em] font-bold text-text-muted">
                Kriterium
              </span>
            </div>
            <div className="p-5 bg-white/[0.02] border-b border-l border-line">
              <span className="text-xs uppercase tracking-[0.12em] font-bold text-text-muted">
                Copilot / Cursor
              </span>
            </div>
            <div className="p-5 bg-accent-soft border-b border-l border-accent-border">
              <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
                Ticketpilot
              </span>
            </div>
            {rows.map((row, i) => (
              <div key={row.criterion} className="contents">
                <div
                  className={`p-5 font-bold ${
                    i < rows.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  {row.criterion}
                </div>
                <div
                  className={`p-5 text-text-muted border-l border-line ${
                    i < rows.length - 1 ? "border-b" : ""
                  }`}
                >
                  {row.copilot}
                </div>
                <div
                  className={`p-5 border-l ${
                    row.ticketpilotHighlight
                      ? "text-text-primary bg-accent-soft/40 border-accent-border"
                      : "text-text-primary border-line"
                  } ${i < rows.length - 1 ? "border-b" : ""}`}
                >
                  {row.ticketpilot}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Stack pro Kriterium */}
        <div className="desktop:hidden divide-y divide-line">
          {rows.map((row) => (
            <div key={row.criterion} className="p-5">
              <strong className="block mb-3">{row.criterion}</strong>
              <div className="grid gap-2 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-[0.12em] font-bold text-text-muted block mb-1">
                    Copilot / Cursor
                  </span>
                  <span className="text-text-muted">{row.copilot}</span>
                </div>
                <div className="mt-2 pt-3 border-t border-line">
                  <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent block mb-1">
                    Ticketpilot
                  </span>
                  <span>{row.ticketpilot}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-text-muted text-sm mt-6 max-w-[820px]">
        <strong className="text-text-primary">Kurz gesagt:</strong>{" "}
        Wenn dein Team Copilot bereits nutzt &ndash; super. Ticketpilot sitzt
        eine Ebene dar&uuml;ber: es entscheidet, welches Ticket &uuml;berhaupt
        zu Code werden soll, orchestriert den Lauf und sorgt daf&uuml;r, dass
        dein Dev am Ende nur noch reviewed statt selbst zu tippen.
      </p>
    </SectionWrapper>
  );
}
