import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";

export function WhyItWorks() {
  return (
    <SectionWrapper id="warum">
      <EyebrowBadge>Die Rechnung, die dein Chef sehen will</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        249 &euro;/Monat. 15.000 &euro; zur&uuml;ck.
      </h2>
      <p
        className="text-text-muted max-w-[740px] mt-0"
        style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
      >
        Ein durchschnittlicher Entwickler kostet 60.000 &euro; im Jahr. Davon gehen
        rund 25% f&uuml;r Fehlersuche, Ticket-Kontext aufbauen und manuelles Debugging
        drauf. Das sind 15.000 &euro; &ndash; pro Entwickler, pro Jahr. Verschwendet.
      </p>

      <div className="grid desktop:grid-cols-3 gap-5 mt-9">
        <Card>
          <strong className="block text-[48px] font-headline leading-none text-accent">
            60k&euro;
          </strong>
          <span className="text-text-muted block mt-2">
            kostet ein Entwickler pro Jahr
          </span>
          <p className="text-text-muted m-0 mt-4 text-sm">
            Gehalt, Sozialabgaben, Arbeitsplatz. Und mindestens ein Viertel davon
            geht f&uuml;r T&auml;tigkeiten drauf, die eine KI in Sekunden erledigt.
          </p>
        </Card>
        <Card>
          <strong className="block text-[48px] font-headline leading-none text-accent">
            249&euro;
          </strong>
          <span className="text-text-muted block mt-2">
            kostet Ticketpilot pro Monat
          </span>
          <p className="text-text-muted m-0 mt-4 text-sm">
            Weniger als ein Mittagessen pro Arbeitstag. Daf&uuml;r bekommt
            dein Team einen KI-Prozess, der Tickets automatisch analysiert,
            Fixes generiert und testet.
          </p>
        </Card>
        <Card highlighted>
          <strong className="block text-[48px] font-headline leading-none text-accent">
            15k&euro;
          </strong>
          <span className="text-text-muted block mt-2">
            Produktivit&auml;t zur&uuml;ck &ndash; pro Entwickler
          </span>
          <p className="text-text-muted m-0 mt-4 text-sm">
            25% weniger Zeitverschwendung. Dein Entwickler arbeitet an dem,
            wof&uuml;r du ihn eingestellt hast: Features bauen, nicht Bugs jagen.
            Bei 4 Entwicklern sind das 60.000 &euro; im Jahr.
          </p>
        </Card>
      </div>
    </SectionWrapper>
  );
}
