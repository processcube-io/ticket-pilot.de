import { NextRequest, NextResponse } from "next/server";
import { createOdooLead, type OdooLeadInput } from "@/lib/odoo";

// Diese Route nimmt Lead-Submissions von der Landingpage entgegen und
// schreibt sie ins Odoo-CRM (crm.lead). Die Odoo-Anbindung ist optional:
// wenn die ODOO_*-Environment-Variablen nicht gesetzt sind, laeuft die Route
// trotzdem durch und loggt das Lead nur lokal. So bleibt die Seite in Dev
// und Staging funktionsfaehig.
type LeadPayload = {
  firstName?: string;
  email?: string;
  company?: string;
  teamSize?: string;
  consent?: boolean;
  source?: string;
  utm?: Record<string, string>;
};

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidName = (name: string) =>
  name.length >= 2 && name.length <= 80 && /^[^<>@]+$/.test(name);

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadPayload;

    const firstName = (body.firstName ?? "").trim();
    const email = (body.email ?? "").trim();
    const company = body.company?.trim() || undefined;
    const teamSize = body.teamSize?.trim() || undefined;
    const consent = body.consent === true;
    const source = body.source ?? "landing";

    if (!isValidName(firstName)) {
      return NextResponse.json(
        { ok: false, error: "Bitte einen g\u00fcltigen Vornamen angeben." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Bitte eine g\u00fcltige E-Mail-Adresse angeben." },
        { status: 400 }
      );
    }
    if (!consent) {
      return NextResponse.json(
        {
          ok: false,
          error: "DSGVO-Einwilligung erforderlich, damit wir dich kontaktieren d\u00fcrfen.",
        },
        { status: 400 }
      );
    }

    const utm = body.utm && typeof body.utm === "object" ? body.utm : undefined;

    const logRecord = {
      firstName,
      email,
      company,
      teamSize,
      consent,
      source,
      utm,
      timestamp: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") ?? undefined,
      ip: req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? undefined,
    };
    console.log("[lead] captured", logRecord);

    // Odoo-CRM-Anlage. Fehlschlag blockt den User NICHT \u2013 wir fangen
    // Netzwerk-/Auth-Probleme ab und loggen sie, der User sieht trotzdem
    // die Erfolgs-Seite. So geht bei Odoo-Downtime kein Lead verloren.
    const odooInput: OdooLeadInput = {
      firstName,
      email,
      company,
      teamSize,
      consent,
      source,
      utm,
      userAgent: logRecord.userAgent,
    };

    let odooId: number | null = null;
    let odooError: string | null = null;
    try {
      odooId = await createOdooLead(odooInput);
      if (odooId) {
        console.log(`[lead] odoo crm.lead created id=${odooId}`);
      } else {
        console.log("[lead] odoo not configured, skipping crm.lead creation");
      }
    } catch (err) {
      odooError = (err as Error).message;
      console.error(
        "[lead] odoo failed \u2013 lead nur lokal geloggt. Fehler:",
        odooError
      );
      // TODO optional: Fallback-Kanal (Slack / Mail / n8n), damit das Lead
      // trotzdem sichtbar wird, wenn Odoo ausfaellt.
    }

    // Shop-Link mit vorbelegter E-Mail + Firmenname fuer schnellen Checkout.
    // Wenn das Odoo-Website-Modul die Query-Parameter akzeptiert, spart das
    // dem Kunden das nochmalige Eintippen.
    const shopUrl = new URL(
      "https://www.processcube.io/shop/category/software-abos-1"
    );
    shopUrl.searchParams.set("search", "ticketpilot");
    shopUrl.searchParams.set("partner_email", email);
    if (company) shopUrl.searchParams.set("partner_company", company);
    if (odooId) shopUrl.searchParams.set("lead_id", String(odooId));

    return NextResponse.json({
      ok: true,
      redirect: shopUrl.toString(),
      odooLeadId: odooId,
      odooError,
      message: `Danke, ${firstName}. Wir schicken dir in den n\u00e4chsten Minuten eine Mail an ${email} mit dem Link zum Trial-Warenkorb. Du wirst jetzt direkt dorthin weitergeleitet \u2013 dort kannst du gleich starten.`,
    });
  } catch (err) {
    console.error("[lead] error", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Unerwarteter Fehler. Bitte sp\u00e4ter erneut versuchen.",
      },
      { status: 500 }
    );
  }
}
