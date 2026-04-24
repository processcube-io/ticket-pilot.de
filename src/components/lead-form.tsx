"use client";

import { useEffect, useRef, useState } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "error"; message: string }
  | { kind: "success"; message: string; redirect: string };

/**
 * Lead-Formular fuer Variante B/C.
 * Felder bewusst knapp gehalten (Customer Effort Score): nur Vorname + Mail
 * sind Pflicht. Firma und Team-Groesse dienen Sales-Routing in Odoo.
 *
 * Zusaetzlich:
 *   - DSGVO-Opt-in (Pflicht, serverseitig validiert)
 *   - Honeypot-Feld "website" (versteckt, Spam-Bots fuellen es aus)
 *   - UTM-Parameter werden lautlos mitgeschickt fuer Kampagnen-Attribution
 */
export function LeadForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [teamSize, setTeamSize] = useState("2-5");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const honeypotRef = useRef<HTMLInputElement>(null);
  const utmRef = useRef<Record<string, string>>({});

  // UTM-Parameter bei Mount aus der URL auslesen, falls vorhanden
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utms: Record<string, string> = {};
    for (const key of [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ]) {
      const v = params.get(key);
      if (v) utms[key] = v;
    }
    utmRef.current = utms;
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot-Check: wenn ein Bot das versteckte Feld ausgefuellt hat,
    // geben wir eine Fake-Success zurueck, um ihn nicht zu alarmieren.
    if (honeypotRef.current?.value) {
      setStatus({
        kind: "success",
        message:
          "Danke! Die Trial-Mail ist unterwegs.",
        redirect: "#",
      });
      return;
    }

    if (!consent) {
      setStatus({
        kind: "error",
        message: "Bitte best\u00e4tige die Einwilligung zur Kontaktaufnahme.",
      });
      return;
    }

    setStatus({ kind: "loading" });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          email,
          company,
          teamSize,
          consent: true,
          source: "landing_variant_b_final_cta",
          utm: utmRef.current,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus({
          kind: "error",
          message: data.error ?? "Das hat nicht geklappt.",
        });
        return;
      }
      setStatus({
        kind: "success",
        message: data.message,
        redirect: data.redirect,
      });
      // Nach 4 Sekunden weiterleiten, damit der Nutzer die Bestaetigung lesen kann.
      setTimeout(() => {
        window.location.href = data.redirect;
      }, 4000);
    } catch {
      setStatus({
        kind: "error",
        message: "Netzwerkfehler. Bitte versuche es nochmal.",
      });
    }
  }

  if (status.kind === "success") {
    return (
      <div className="border border-accent-border bg-accent-soft rounded-card p-6">
        <div className="flex items-start gap-3">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="text-accent shrink-0 mt-1"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <div>
            <strong className="text-text-primary block mb-1">
              {firstName
                ? `${firstName}, deine Trial-Mail ist unterwegs.`
                : "Angekommen. Die Trial-Mail ist unterwegs."}
            </strong>
            <p className="text-text-muted m-0 text-sm">{status.message}</p>
            <a
              href={status.redirect}
              className="underline text-text-primary hover:text-accent text-sm mt-3 inline-block"
            >
              Nicht weitergeleitet? Direkt zum Shop &rarr;
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-line rounded-card p-6 bg-white/[0.02] grid gap-4"
      noValidate
    >
      {/* Honeypot: visuell versteckt, fuer Screenreader ausgeblendet */}
      <div aria-hidden="true" className="sr-only" style={{ position: "absolute", left: "-9999px" }}>
        <label htmlFor="lead-website">Website (nicht ausf&uuml;llen)</label>
        <input
          id="lead-website"
          ref={honeypotRef}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          name="website"
        />
      </div>

      <div className="grid tablet:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="lead-firstname"
            className="text-xs uppercase tracking-[0.12em] font-bold text-text-muted block mb-2"
          >
            Vorname *
          </label>
          <input
            id="lead-firstname"
            type="text"
            required
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Felix"
            className="w-full bg-card border border-line rounded-inner px-4 py-3 text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label
            htmlFor="lead-email"
            className="text-xs uppercase tracking-[0.12em] font-bold text-text-muted block mb-2"
          >
            Firmen-E-Mail *
          </label>
          <input
            id="lead-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="vorname.nachname@firma.de"
            className="w-full bg-card border border-line rounded-inner px-4 py-3 text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="grid tablet:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="lead-company"
            className="text-xs uppercase tracking-[0.12em] font-bold text-text-muted block mb-2"
          >
            Firma (optional)
          </label>
          <input
            id="lead-company"
            type="text"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme GmbH"
            className="w-full bg-card border border-line rounded-inner px-4 py-3 text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label
            htmlFor="lead-team"
            className="text-xs uppercase tracking-[0.12em] font-bold text-text-muted block mb-2"
          >
            Team-Gr&ouml;&szlig;e
          </label>
          <select
            id="lead-team"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            className="w-full bg-card border border-line rounded-inner px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
          >
            <option value="1">1 Dev</option>
            <option value="2-5">2&ndash;5 Devs</option>
            <option value="6-15">6&ndash;15 Devs</option>
            <option value="16+">16+ Devs</option>
          </select>
        </div>
      </div>

      {/* DSGVO-Opt-in */}
      <label className="flex items-start gap-3 text-[13px] text-text-muted leading-snug cursor-pointer select-none">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-[3px] w-4 h-4 accent-accent cursor-pointer shrink-0"
          aria-describedby="consent-desc"
        />
        <span id="consent-desc">
          Ich stimme zu, dass mich ProcessCube per E-Mail rund um meinen
          Ticketpilot-Trial kontaktiert (Welcome-Mail, Installationsguide,
          Erinnerung vor Trial-Ende). Jederzeit widerrufbar via Abmeldelink.
          Details in der{" "}
          <a
            href="https://www.processcube.io/datenschutz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-text-primary"
          >
            Datenschutzerkl&auml;rung
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status.kind === "loading"}
        className="plausible-event-name=cta_lead_submit inline-flex items-center justify-center min-h-[54px] px-[22px] rounded-btn font-bold transition-all duration-200 bg-gradient-to-br from-accent to-accent-hover text-black hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(248,181,68,0.3)] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none"
      >
        {status.kind === "loading"
          ? "Wird gespeichert \u2026"
          : "30 Tage kostenlos starten"}
      </button>

      {status.kind === "error" && (
        <p className="text-sm text-red-400 m-0" role="alert">
          {status.message}
        </p>
      )}

      <p className="text-xs text-text-muted m-0">
        Mit dem Klick startest du{" "}
        <strong className="text-text-primary">keinen Kauf</strong>. Du bekommst
        per Mail den Link zum Trial-Warenkorb, w&auml;hlst dort deine Variante
        (Lokal / Cloud / K8s) und startest 30 Tage kostenlos. Rechnung &uuml;ber
        0&thinsp;&euro;, API-Key folgt automatisch.
      </p>
    </form>
  );
}
