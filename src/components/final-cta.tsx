import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <SectionWrapper id="finale" className="pb-[110px]" hideScrollHint>
      <EyebrowBadge>Finale Entscheidung</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Wie viele Tickets bearbeitet dein Team noch manuell?
      </h2>
      <p className="text-text-muted max-w-[740px] mt-0" style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
        Finde es heraus – und ersetze Ticket-Chaos durch automatische Lösungen.
      </p>
      <div className="flex flex-wrap gap-3.5 mt-[34px]">
        <Button href="#">Ticketpilot testen</Button>
        <Button variant="secondary" href="#demo">
          Live Demo ansehen
        </Button>
      </div>
    </SectionWrapper>
  );
}
