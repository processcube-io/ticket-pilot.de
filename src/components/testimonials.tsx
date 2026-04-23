import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";

export type Kpi = {
  /** Headline-Zahl, z. B. "300+" oder "15\u00a0h" */
  value: string;
  /** Erklaerendes Label, z. B. "Festangestellte" */
  label: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Optionaler Avatar-Pfad in /public/testimonials/. */
  avatar?: string;
  /** Wenn true: anonyme Quelle, generisches Branchen-Icon statt Personen-Initialen. */
  anonymous?: boolean;
  /** Optionale KPI-Kacheln, die unter dem Zitat erscheinen. */
  kpis?: Kpi[];
};

/**
 * Stimmen aus Pilot-Einsaetzen.
 *
 * - Erste Karte: ProcessCube-Eigenbetrieb (6 Monate Dauereinsatz, vom Team
 *   bestaetigte Werte).
 * - Karten 2 + 3: anonyme Pilot-Quellen, Originalzitate vom Kunden geliefert.
 *
 * Sobald Kund:innen mit Logo / Foto freigegeben sind, hier konkretisieren.
 */
const testimonials: Testimonial[] = [
  {
    quote:
      "Wir haben Ticketpilot zuerst f\u00fcr unseren eigenen Support gebaut. Seit 6 Monaten l\u00e4uft er bei uns t\u00e4glich \u2013 und beantwortet jede Kundenanfrage in Sekunden, ohne dass jemand draufschauen muss.",
    name: "ProcessCube Team",
    role: "Eigener Support",
    company: "ProcessCube UG",
    avatar: "/favicon.png",
    kpis: [
      { value: "90\u00a0%", label: "Dev-Freigabe ohne Nacharbeit" },
      { value: "312", label: "Tickets in 6 Monaten Eigenbetrieb" },
      { value: "30\u201360\u00a0Min", label: "Ticket \u2192 Fix auf Testumgebung" },
    ],
  },
  {
    quote:
      "Durch den Einsatz von Ticketpilot verzeichnen wir eine Zeitersparnis bei unseren Entwicklern von 15 Stunden in der Woche.",
    name: "Technischer Leiter",
    role: "anonymisiert",
    company: "IT-Unternehmen aus NRW",
    anonymous: true,
    kpis: [{ value: "15\u00a0h", label: "Zeitersparnis pro Dev / Woche" }],
  },
  {
    quote:
      "Ticketpilot hat uns dabei geholfen, Feature-W\u00fcnsche unserer Kunden viel schneller zu beantworten und als PoC zu implementieren. Im Schnitt k\u00f6nnen wir innerhalb von 5 Werktagen schon liefern.",
    name: "CSO",
    role: "anonymisiert",
    company: "Beratungsunternehmen aus NRW",
    anonymous: true,
    kpis: [{ value: "5 Werktage", label: "Vom Wunsch zum PoC im Schnitt" }],
  },
];

export function Testimonials() {
  return (
    <SectionWrapper id="stimmen">
      <EyebrowBadge>Stimmen</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Was unsere Pilot-Teams sagen.
      </h2>

      {testimonials.length === 0 ? (
        <Card>
          <h3 className="font-headline text-[22px] uppercase tracking-[0.02em] m-0 mb-3 leading-none">
            Hier kommen echte Zitate hin.
          </h3>
          <p className="text-text-muted m-0">
            Wir sammeln gerade O-T&ouml;ne unserer ersten Pilot-Teams. Bis
            dahin kannst du dir die{" "}
            <a href="#proof" className="underline hover:text-text-primary">
              Zahlen aus unserem eigenen Support
            </a>{" "}
            ansehen &ndash; die sind echt, nicht aus der Vorlage.
          </p>
        </Card>
      ) : testimonials.length === 1 ? (
        <SingleTestimonial t={testimonials[0]} />
      ) : (
        <div
          className={`grid gap-5 mt-9 items-stretch ${
            testimonials.length === 2
              ? "desktop:grid-cols-2"
              : "desktop:grid-cols-3"
          }`}
        >
          {testimonials.map((t, i) => (
            <Card key={i} highlighted={i === 0}>
              <GridCardBody t={t} />
            </Card>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}

function GridCardBody({ t }: { t: Testimonial }) {
  return (
    <div className="flex flex-col h-full">
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 48 48"
        className="text-accent opacity-80 mb-3"
        fill="currentColor"
      >
        <path d="M14 12c-5 2-8 7-8 13v11h13V25h-7c0-4 2-7 5-9l-3-4zm22 0c-5 2-8 7-8 13v11h13V25h-7c0-4 2-7 5-9l-3-4z" />
      </svg>
      <blockquote className="m-0">
        <p className="text-text-primary text-[17px] leading-[1.5] m-0">
          &bdquo;{t.quote}&ldquo;
        </p>
      </blockquote>
      <Attribution t={t} compact />
      {t.kpis && t.kpis.length > 0 && (
        <div className="mt-4 pt-4 border-t border-line grid grid-cols-1 gap-3 mt-auto">
          {t.kpis.map((k) => (
            <div key={k.label}>
              <strong
                className="block font-headline text-accent leading-none"
                style={{ fontSize: "clamp(24px, 2vw, 30px)" }}
              >
                {k.value}
              </strong>
              <span className="text-text-muted text-xs mt-1.5 block">
                {k.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SingleTestimonial({ t }: { t: Testimonial }) {
  return (
    <div className="mt-9 max-w-[920px] mx-auto">
      <Card highlighted>
        <svg
          aria-hidden="true"
          width="36"
          height="36"
          viewBox="0 0 48 48"
          className="text-accent opacity-80 mb-3"
          fill="currentColor"
        >
          <path d="M14 12c-5 2-8 7-8 13v11h13V25h-7c0-4 2-7 5-9l-3-4zm22 0c-5 2-8 7-8 13v11h13V25h-7c0-4 2-7 5-9l-3-4z" />
        </svg>
        <blockquote className="m-0">
          <p
            className="text-text-primary m-0 leading-[1.4]"
            style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
          >
            &bdquo;{t.quote}&ldquo;
          </p>
        </blockquote>
        <Attribution t={t} />

        {t.kpis && t.kpis.length > 0 && (
          <div className="mt-7 pt-6 border-t border-line grid desktop:grid-cols-3 gap-5">
            {t.kpis.map((k) => (
              <div key={k.label}>
                <strong
                  className="block font-headline text-accent leading-none"
                  style={{ fontSize: "clamp(28px, 2.6vw, 36px)" }}
                >
                  {k.value}
                </strong>
                <span className="text-text-muted text-sm mt-2 block">
                  {k.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

function Attribution({ t, compact = false }: { t: Testimonial; compact?: boolean }) {
  const sizeAvatar = compact ? "w-9 h-9 text-[13px]" : "w-11 h-11 text-[15px]";
  const marginTop = compact ? "mt-4" : "mt-6";

  return (
    <div className={`flex items-center gap-3 ${marginTop}`}>
      {t.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={t.avatar}
          alt=""
          width={compact ? 36 : 44}
          height={compact ? 36 : 44}
          className={`${sizeAvatar} rounded-full object-cover`}
        />
      ) : t.anonymous ? (
        <div
          aria-hidden="true"
          className={`${sizeAvatar} rounded-full bg-accent-soft border border-accent-border grid place-items-center text-accent`}
        >
          {/* Building-Icon = anonyme Firma */}
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
          >
            <rect x="4" y="3" width="16" height="18" rx="1.5" />
            <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01" />
          </svg>
        </div>
      ) : (
        <div
          aria-hidden="true"
          className={`${sizeAvatar} rounded-full bg-accent-soft border border-accent-border grid place-items-center text-accent font-bold font-headline`}
        >
          {t.name
            .split(" ")
            .map((p) => p[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </div>
      )}
      <div>
        <strong className="text-text-primary block leading-tight text-[15px]">
          {t.name}
        </strong>
        <span className="text-text-muted text-[13px] leading-tight">
          {t.anonymous ? t.company : `${t.role} · ${t.company}`}
        </span>
      </div>
    </div>
  );
}
