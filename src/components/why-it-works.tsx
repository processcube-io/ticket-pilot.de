import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";
import { OnepagerButton } from "@/components/ui/onepager-button";

export function WhyItWorks() {
  return (
    <SectionWrapper id="warum">
      <EyebrowBadge>ROI-Rechnung</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        249 &euro;/Monat. Konservativ 9.000 &euro; zur&uuml;ck. Pro Dev. Pro Jahr.
      </h2>
      <p
        className="text-text-muted max-w-[740px] mt-0"
        style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
      >
        Keine Marketingzahl. Eine Rechnung mit offengelegten Annahmen &ndash;
        unten drunter. Setz deine eigenen Werte ein, wenn dein Team teurer
        oder g&uuml;nstiger ist.
      </p>

      <div className="grid desktop:grid-cols-3 gap-5 mt-9 items-stretch">
        <Card>
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Annahme 1
          </span>
          <strong className="block text-[44px] font-headline leading-none text-accent mt-3">
            75k&euro;
          </strong>
          <span className="text-text-muted block mt-2">
            Vollkosten pro Dev / Jahr (DE, Median)
          </span>
          <p className="text-text-muted m-0 mt-4 text-sm">
            Bruttogehalt ca.&nbsp;60&nbsp;k&euro; laut Stack Overflow Developer
            Survey 2024 (DE, Median Backend), plus ca.&nbsp;25&nbsp;% Lohnnebenkosten
            und Arbeitsplatzkosten. Spanne in der Praxis: 60&ndash;110&nbsp;k&euro;.
          </p>
        </Card>
        <Card>
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Annahme 2
          </span>
          <strong className="block text-[44px] font-headline leading-none text-accent mt-3">
            17h
          </strong>
          <span className="text-text-muted block mt-2">
            pro Woche f&uuml;r Debug, Maintenance, Bad Code
          </span>
          <p className="text-[10px] text-text-muted/40 m-0 mt-auto pt-4 border-t border-line/30 leading-relaxed">
            Quelle: Stripe &bdquo;Developer Coefficient&ldquo; (2018, n&nbsp;=&nbsp;1.062 Devs).
            42&nbsp;% der Arbeitszeit. Konservativ mit 30&nbsp;% gerechnet.
          </p>
        </Card>
        <Card highlighted>
          <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
            Ergebnis (konservativ)
          </span>
          <strong className="block text-[44px] font-headline leading-none text-accent mt-3">
            9k&euro;
          </strong>
          <span className="text-text-muted block mt-2">
            R&uuml;ckgewinn pro Dev / Jahr
          </span>
          <p className="text-text-muted m-0 mt-4 text-sm">
            75k &middot; 30&nbsp;% &middot; 40&nbsp;% Automatisierungsquote
            = 9.000&nbsp;&euro;. Bei 4 Devs: 36.000&nbsp;&euro;. Ticketpilot kostet
            davon ca.&nbsp;3.000&nbsp;&euro;/Jahr. ROI ab Monat&nbsp;2.
          </p>
        </Card>
      </div>

      <div className="mt-7 border border-line rounded-inner p-4 bg-white/[0.02] flex items-center justify-between gap-4 flex-wrap">
        <div>
          <strong className="text-text-primary block">
            Zum Weitergeben an CFO / Einkauf
          </strong>
          <span className="text-text-muted text-sm">
            Druckoptimierter Onepager mit Formel, Quellen und Skalierung auf 1&ndash;20 Devs.
          </span>
        </div>
        <OnepagerButton
          className="plausible-event-name=cta_roi_onepager inline-flex items-center justify-center min-h-[44px] px-5 rounded-btn font-bold bg-transparent text-text-primary border border-line hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 shrink-0"
        >
          Onepager &ouml;ffnen &rarr;
        </OnepagerButton>
      </div>

      <p className="text-[11px] text-text-muted/40 mt-5 pl-3 border-l border-line/50 leading-relaxed">
        <strong className="text-text-muted/60">Transparenz:</strong>{" "}
        Die Zahlen sind Annahmen, keine Garantie. Die 40&nbsp;%
        Automatisierungsquote basiert auf unserem eigenen ProcessCube-Support
        &ndash; euer Team-Mix (Bug vs. Feature vs. Rechnungsfrage) kann h&ouml;her
        oder niedriger liegen. Quellen:{" "}
        <a
          href="https://survey.stackoverflow.co/2024/"
          className="underline hover:text-text-muted/60"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stack Overflow Developer Survey 2024
        </a>
        ,{" "}
        <a
          href="https://stripe.com/files/reports/the-developer-coefficient.pdf"
          className="underline hover:text-text-muted/60"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stripe Developer Coefficient 2018
        </a>
        .
      </p>
    </SectionWrapper>
  );
}
