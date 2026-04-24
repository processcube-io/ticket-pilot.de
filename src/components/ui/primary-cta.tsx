import { Button } from "@/components/ui/button";

interface PrimaryCtaProps {
  href: string;
  event?: string;
  /** Override CTA-Text. Default: "30 Tage kostenlos testen". */
  label?: string;
  /** Trust-Zeile direkt unter dem Button. Auf `null` setzen, um sie zu verstecken. */
  trust?: string | null;
  /** Optional zusaetzlicher sekundaerer CTA rechts neben dem primaeren. */
  secondary?: { href: string; label: string; event?: string };
}

const DEFAULT_LABEL = "30 Tage kostenlos testen";
const DEFAULT_TRUST =
  "Monatlich k\u00fcndbar \u00b7 Erinnerung 5 Tage vor Abrechnung";

/**
 * Einheitliches Primary-CTA-Paket.
 * Nach Byron Sharp / Ehrenberg-Bass lebt Mental Availability von wiederholter,
 * identischer Formulierung. Daher der feste Default-Label-Text und die
 * konsistente Trust-Zeile.
 */
export function PrimaryCta({
  href,
  event,
  label = DEFAULT_LABEL,
  trust = DEFAULT_TRUST,
  secondary,
}: PrimaryCtaProps) {
  return (
    <div className="inline-flex flex-col items-center gap-2 max-tablet:w-full">
      <div className="flex flex-wrap gap-3 items-center justify-center max-tablet:flex-col max-tablet:items-stretch">
        <Button href={href} event={event}>
          {label}
        </Button>
        {secondary && (
          <Button variant="secondary" href={secondary.href} event={secondary.event}>
            {secondary.label}
          </Button>
        )}
      </div>
      {trust && (
        <span className="text-[11px] text-text-muted/50 leading-snug text-center mt-1">
          {trust}
        </span>
      )}
    </div>
  );
}
