import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";

const integrations = [
  {
    icon: "O",
    title: "Odoo",
    description: "Direkt mit bestehenden Support-Prozessen verbinden.",
  },
  {
    icon: "A",
    title: "API",
    description: "Einfach an vorhandene Systeme und Eingangskanäle anbinden.",
  },
  {
    icon: "P",
    title: "ProcessCube®",
    description:
      "Automatisierung, Entscheidung und Prozessausführung in einer Plattform.",
  },
];

export function Integration() {
  return (
    <SectionWrapper id="integration">
      <EyebrowBadge>Integration</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        In Minuten integriert
      </h2>
      <p className="text-text-muted max-w-[740px] mt-0" style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
        Kein unnötiger Overhead. Ticketpilot dockt dort an, wo deine Tickets heute
        schon entstehen.
      </p>

      <div className="grid desktop:grid-cols-3 gap-5 mt-9">
        {integrations.map((item) => (
          <div
            key={item.icon}
            className="bg-card border border-line rounded-card p-7 max-tablet:p-[22px] flex items-center gap-4"
          >
            <div className="w-[60px] h-[60px] shrink-0 rounded-[16px] bg-accent-soft border border-accent-border grid place-items-center text-accent font-black font-headline text-[26px]">
              {item.icon}
            </div>
            <div>
              <h3 className="font-headline text-[26px] uppercase tracking-[0.02em] m-0 mb-1.5 leading-none">
                {item.title}
              </h3>
              <p className="text-text-muted m-0">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
