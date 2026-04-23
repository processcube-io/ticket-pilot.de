import Link from "next/link";
import { PrintButton } from "./print-button";

export const metadata = {
  title: "Ticketpilot ROI-Onepager zum Weitergeben",
  description:
    "Druckoptimierte ROI-Rechnung: Annahmen, Formel, Ergebnis. Als PDF speichern via Browser-Druck.",
};

export default function RoiOnepager() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen print:bg-white">
      {/* Toolbar: nur Bildschirm, nicht im Print */}
      <div className="print:hidden border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-[900px] mx-auto px-8 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="text-sm text-neutral-600">
            Druckoptimierte Ansicht &middot;{" "}
            <Link href="/" className="underline hover:text-neutral-900">
              Zur&uuml;ck zur Landingpage
            </Link>
          </div>
          <PrintButton />
        </div>
      </div>

      <article className="max-w-[760px] mx-auto px-8 py-12 print:px-0 print:py-6 print:max-w-full">
        <header className="border-b-2 border-neutral-900 pb-6 mb-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="text-xs uppercase tracking-[0.18em] font-bold text-neutral-500">
              Ticketpilot &middot; ROI-Onepager
            </div>
            <div className="text-xs text-neutral-500">
              Stand:{" "}
              {new Date().toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
          <h1
            className="font-bold text-[40px] leading-[1.05] mt-4 mb-3"
            style={{ fontFamily: "Barlow Condensed, Impact, sans-serif" }}
          >
            249&nbsp;&euro;/Monat. Konservativ 9.000&nbsp;&euro; zur&uuml;ck.
            Pro Dev. Pro Jahr.
          </h1>
          <p className="text-[15px] text-neutral-700 m-0 max-w-[600px]">
            Onepager zum Weitergeben an CFO oder Einkauf. Alle Annahmen sind
            offengelegt, Quellen sind verlinkt.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-[20px] font-bold mb-2">Die Formel</h2>
          <div className="bg-neutral-50 border border-neutral-200 rounded-md p-5 text-[15px]">
            <code className="block text-neutral-900 font-mono">
              Vollkosten &middot; Ticket-Routine-Anteil &middot;
              Automatisierungsquote = R&uuml;ckgewinn pro Dev / Jahr
            </code>
            <code className="block text-neutral-900 font-mono mt-2">
              75.000 &euro; &middot; 30 % &middot; 40 % = 9.000 &euro;
            </code>
          </div>
        </section>

        <section className="mb-8 grid grid-cols-3 gap-4 print:gap-2">
          <div className="border border-neutral-200 rounded-md p-4">
            <div className="text-xs uppercase tracking-[0.12em] font-bold text-neutral-500">
              Annahme 1
            </div>
            <div className="text-[28px] font-bold mt-1">75k &euro;</div>
            <div className="text-[13px] text-neutral-700 mt-1">
              Vollkosten Dev/Jahr (DE, Median)
            </div>
          </div>
          <div className="border border-neutral-200 rounded-md p-4">
            <div className="text-xs uppercase tracking-[0.12em] font-bold text-neutral-500">
              Annahme 2
            </div>
            <div className="text-[28px] font-bold mt-1">30 %</div>
            <div className="text-[13px] text-neutral-700 mt-1">
              Ticket-Routine-Anteil (konservativ; Stripe: 42 %)
            </div>
          </div>
          <div className="border border-neutral-200 rounded-md p-4">
            <div className="text-xs uppercase tracking-[0.12em] font-bold text-neutral-500">
              Annahme 3
            </div>
            <div className="text-[28px] font-bold mt-1">40 %</div>
            <div className="text-[13px] text-neutral-700 mt-1">
              Automatisierungsquote (ProcessCube-Support)
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-[20px] font-bold mb-3">Ergebnis skaliert</h2>
          <table className="w-full text-[15px] border-collapse">
            <thead>
              <tr className="border-b-2 border-neutral-900">
                <th className="text-left py-2 font-bold">Team-Gr&ouml;&szlig;e</th>
                <th className="text-right py-2 font-bold">
                  R&uuml;ckgewinn/Jahr
                </th>
                <th className="text-right py-2 font-bold">
                  Ticketpilot-Kosten/Jahr
                </th>
                <th className="text-right py-2 font-bold">Netto-Return</th>
              </tr>
            </thead>
            <tbody>
              {[
                { devs: 1, gain: 9000 },
                { devs: 4, gain: 36000 },
                { devs: 10, gain: 90000 },
                { devs: 20, gain: 180000 },
              ].map((r) => {
                const cost = 249 * 12; // unabhaengig von Teamgroesse
                const net = r.gain - cost;
                return (
                  <tr key={r.devs} className="border-b border-neutral-200">
                    <td className="py-2">
                      {r.devs} Dev{r.devs > 1 ? "s" : ""}
                    </td>
                    <td className="py-2 text-right">
                      {r.gain.toLocaleString("de-DE")} &euro;
                    </td>
                    <td className="py-2 text-right">
                      {cost.toLocaleString("de-DE")} &euro;
                    </td>
                    <td className="py-2 text-right font-bold">
                      +{net.toLocaleString("de-DE")} &euro;
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="text-[12px] text-neutral-500 mt-3 m-0">
            Ticketpilot kostet 249&thinsp;&euro;/Monat unabh&auml;ngig von der
            Teamgr&ouml;&szlig;e (keine Per-Seat-Lizenz). KI-Provider-Kosten
            separat, typisch 20&ndash;50&thinsp;&euro; pro Monat.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-[20px] font-bold mb-3">Payback-Zeit</h2>
          <p className="text-[15px] text-neutral-800 m-0">
            Bei einem <strong>1-Dev-Team</strong>: Payback nach{" "}
            <strong>4 Monaten</strong>. Bei einem{" "}
            <strong>4-Dev-Team</strong>: Payback nach{" "}
            <strong>ca. 5 Wochen</strong>. Bei einem{" "}
            <strong>10-Dev-Team</strong>: Payback nach{" "}
            <strong>ca. 2 Wochen</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-[20px] font-bold mb-3">Quellen</h2>
          <ul className="list-disc pl-5 text-[14px] text-neutral-700 space-y-1">
            <li>
              Stack Overflow Developer Survey 2024 (DE, Median Backend-Gehalt
              ca. 60k &euro;):{" "}
              <a
                href="https://survey.stackoverflow.co/2024/"
                className="underline break-words"
              >
                survey.stackoverflow.co/2024/
              </a>
            </li>
            <li>
              Stripe &bdquo;The Developer Coefficient&ldquo; (2018,
              n&nbsp;=&nbsp;1.062): Devs verbringen ca. 42&nbsp;% ihrer Zeit
              mit Debug/Maintenance/Bad Code.{" "}
              <a
                href="https://stripe.com/files/reports/the-developer-coefficient.pdf"
                className="underline break-words"
              >
                stripe.com/files/reports/the-developer-coefficient.pdf
              </a>
            </li>
            <li>
              Automatisierungsquote: ProcessCube-internes Support-Team, 6
              Monate, n&nbsp;=&nbsp;312 Tickets. Referenzzahlen live im
              Trial-Dashboard sichtbar.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-[20px] font-bold mb-3">Risikobetrachtung</h2>
          <ul className="list-disc pl-5 text-[14px] text-neutral-700 space-y-1">
            <li>
              <strong>30 Tage kostenlos testen</strong> &ndash; keine
              Vorabzahlung.
            </li>
            <li>
              <strong>Monatlich k&uuml;ndbar</strong> &ndash; keine
              Mindestlaufzeit.
            </li>
            <li>
              <strong>On-Prem-Betrieb m&ouml;glich</strong> &ndash; kein
              Vendor-Lock-in, keine Cloud-Abh&auml;ngigkeit.
            </li>
            <li>
              <strong>Open-Source-Kern</strong> &ndash; ProcessCube-Engine ist
              quelloffen, Audit durch eigene IT jederzeit m&ouml;glich.
            </li>
          </ul>
        </section>

        <footer className="border-t border-neutral-300 pt-5 text-[12px] text-neutral-600 flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div>ProcessCube UG (haftungsbeschr&auml;nkt)</div>
            <div>info@processcube.io &middot; ticket-pilot.de</div>
          </div>
          <div className="text-right">
            <div>ticket-pilot.de/roi-onepager</div>
            <div>Onepager v1 &middot; Stand {new Date().getFullYear()}</div>
          </div>
        </footer>
      </article>
    </div>
  );
}
