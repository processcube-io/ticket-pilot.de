import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <SectionWrapper id="finale">
      <EyebrowBadge>Eine letzte Frage</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Was macht dein Team morgen fr&uuml;h mit den 47 neuen Tickets?
      </h2>
      <p className="text-text-muted max-w-[740px] mt-0" style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
        Gleiche Antwort wie letzte Woche? Manuell priorisieren, stundenlang
        debuggen, hoffen dass nichts kaputtgeht?
      </p>
      <p className="text-text-muted max-w-[740px] mt-3" style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
        Oder: Du startest heute Ticketpilot. Morgen fr&uuml;h hat die KI die
        Standard-Bugs schon gefixt. Dein Team reviewed nur noch.
        <strong className="text-text-primary"> Der erste Sprint, in dem der
        Backlog schrumpft statt w&auml;chst.</strong>
      </p>
      <div className="flex flex-wrap gap-3.5 mt-[34px]">
        <Button href="#">Jetzt kostenlos starten &ndash; in 15 Minuten l&auml;uft es</Button>
      </div>
      <p className="text-text-muted text-sm mt-4">
        30 Tage kostenlos. Monatlich k&uuml;ndbar. Kein Sales-Call.
      </p>
    </SectionWrapper>
  );
}
