import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="w-[52px] h-[52px] rounded-[14px] bg-accent-soft border border-accent-border grid place-items-center text-accent mb-4"
    >
      {children}
    </div>
  );
}

function IconAlertTriangle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function IconTrendingDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}

function IconShieldOff() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.69 14A6.9 6.9 0 0 0 20 12V5l-8-3-3.16 1.18" />
      <path d="M4.73 4.73 4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export function ProblemAgitation() {
  return (
    <SectionWrapper id="problem">
      <EyebrowBadge>Das Problem</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Dein Team arbeitet hart. Aber der Backlog w&auml;chst trotzdem.
      </h2>
      <p
        className="text-text-muted max-w-[740px] mt-0"
        style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
      >
        Du hast KI-Tools eingef&uuml;hrt. Copilot, ChatGPT, Claude. Dein Team nutzt
        sie t&auml;glich. Aber irgendwas stimmt nicht. Die Tickets werden nicht
        weniger. Und wenn doch mal was schneller geht, wei&szlig; hinterher keiner,
        was die KI eigentlich gebaut hat.
      </p>

      <div className="grid desktop:grid-cols-3 gap-5 mt-9 items-stretch">
        <Card>
          <IconBadge><IconAlertTriangle /></IconBadge>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-0 mb-2.5 leading-none [text-wrap:balance]">
            &ldquo;Accept All&rdquo; und hoffen
          </h3>
          <p className="text-text-muted m-0">
            Dein Entwickler bekommt einen KI-Vorschlag. Er klickt &ldquo;Accept&rdquo;.
            Keiner reviewed. Keiner testet. Freitagabend geht der Code live.
            Montagmorgen steht das Telefon nicht still.
          </p>
        </Card>
        <Card>
          <IconBadge><IconTrendingDown /></IconBadge>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-0 mb-2.5 leading-none [text-wrap:balance]">
            Schneller, aber nicht besser
          </h3>
          <p className="text-text-muted m-0">
            Mehr Output, gleiche Qualit&auml;t. Dein Team schiebt 200+ Tickets vor sich her.
            Bugs werden gefixt, die neue Bugs erzeugen. Technische Schulden
            wachsen schneller als dein Backlog schrumpft.
          </p>
        </Card>
        <Card>
          <IconBadge><IconShieldOff /></IconBadge>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-0 mb-2.5 leading-none [text-wrap:balance]">
            Wenn es knallt, wei&szlig; keiner warum
          </h3>
          <p className="text-text-muted m-0">
            Kein Audit-Trail. Keine Nachvollziehbarkeit. Welcher Code kam von
            der KI? Wer hat ihn freigegeben? Wann? Der Gesch&auml;ftsf&uuml;hrer fragt.
            Du hast keine Antwort.
          </p>
        </Card>
      </div>

      <p className="text-text-muted text-center mt-9 max-w-[640px] mx-auto" style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
        Das Problem ist nicht die KI. Das Problem ist, dass niemand einen
        <strong className="text-text-primary"> Prozess </strong>
        daf&uuml;r gebaut hat. Bis jetzt.
      </p>

      {/* Trust-Anker: die 3 h&auml;ufigsten Einw&auml;nde direkt hier platt machen */}
      <div className="mt-9 max-w-[820px] mx-auto grid desktop:grid-cols-3 gap-5 text-sm">
        <div className="border border-line rounded-inner p-4 bg-white/[0.02]">
          <strong className="text-text-primary block mb-1">Dein Code bleibt deiner.</strong>
          <span className="text-text-muted">On-Prem auf deiner Infra. Die IP am Fix liegt bei dir.</span>
        </div>
        <div className="border border-line rounded-inner p-4 bg-white/[0.02]">
          <strong className="text-text-primary block mb-1">Dein Dev hat das letzte Wort.</strong>
          <span className="text-text-muted">Kein Auto-Deploy. Jeder Fix braucht manuelle Freigabe.</span>
        </div>
        <div className="border border-line rounded-inner p-4 bg-white/[0.02]">
          <strong className="text-text-primary block mb-1">Alles nachvollziehbar.</strong>
          <span className="text-text-muted">Audit-Trail pro Ticket: Wer, wann, welcher Fix, welche Tests.</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
