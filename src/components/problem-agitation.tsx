import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";

export function ProblemAgitation() {
  return (
    <SectionWrapper id="problem">
      <EyebrowBadge>Kommt dir das bekannt vor?</EyebrowBadge>
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

      <div className="grid desktop:grid-cols-3 gap-5 mt-9">
        <Card>
          <span className="text-[42px] leading-none mb-3 block">&#x1F62C;</span>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-0 mb-2.5 leading-none">
            &ldquo;Accept All&rdquo; und hoffen
          </h3>
          <p className="text-text-muted m-0">
            Dein Entwickler bekommt einen KI-Vorschlag. Er klickt &ldquo;Accept&rdquo;.
            Keiner reviewed. Keiner testet. Freitagabend geht der Code live.
            Montagmorgen steht das Telefon nicht still.
          </p>
        </Card>
        <Card>
          <span className="text-[42px] leading-none mb-3 block">&#x1F4C9;</span>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-0 mb-2.5 leading-none">
            Schneller, aber nicht besser
          </h3>
          <p className="text-text-muted m-0">
            Mehr Output, gleiche Qualit&auml;t. Dein Team schiebt 200+ Tickets vor sich her.
            Bugs werden gefixt, die neue Bugs erzeugen. Technische Schulden
            wachsen schneller als dein Backlog schrumpft.
          </p>
        </Card>
        <Card>
          <span className="text-[42px] leading-none mb-3 block">&#x1F6A8;</span>
          <h3 className="font-headline text-[28px] uppercase tracking-[0.02em] mt-0 mb-2.5 leading-none">
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
    </SectionWrapper>
  );
}
