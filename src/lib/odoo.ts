/**
 * Schlanker Odoo-JSON-RPC-Client fuer Server-to-Server-Lead-Anlage.
 *
 * Warum JSON-RPC statt Website-Form?
 *   - Odoo's /website_form/<model>-Endpoint braucht einen CSRF-Token und
 *     setzt voraus, dass das Website-Modul aktiv ist. Von einem externen
 *     Next.js-Server aus ist JSON-RPC deutlich robuster.
 *
 * Notwendige Environment-Variablen:
 *   ODOO_URL         z. B. "https://www.processcube.io"
 *   ODOO_DB          Datenbankname (in Odoo.sh/Online meist die Subdomain)
 *   ODOO_USERNAME    Login eines Service-Users mit CRM-Recht
 *                    (Empfehlung: "Cuby" wiederverwenden mit neuem API-Key)
 *   ODOO_API_KEY     API-Key aus "Einstellungen > Benutzer > API-Keys"
 *                    (pro User koennen mehrere Keys existieren \u2013 einer mit
 *                     Namen "ticketpilot-lead-api" fuer diese Integration)
 *
 * Optional:
 *   ODOO_LEAD_SOURCE "Ticketpilot Landing" (Name fuer CRM-Source-Dropdown)
 *   ODOO_LEAD_TAG    Name eines crm.tag, der bei jedem Lead gesetzt wird
 *                    (z. B. "Ticketpilot Trial")
 *   ODOO_SALES_TEAM  Name des crm.team, dem der Lead zugeordnet wird
 *                    (z. B. "Ticketpilot Sales")
 */

export type OdooLeadInput = {
  firstName: string;
  email: string;
  company?: string;
  teamSize?: string;
  consent: boolean;
  source?: string;
  userAgent?: string;
  utm?: Record<string, string>;
};

type OdooConfig = {
  url: string;
  db: string;
  username: string;
  apiKey: string;
};

function readConfig(): OdooConfig | null {
  const url = process.env.ODOO_URL?.replace(/\/$/, "");
  const db = process.env.ODOO_DB;
  const username = process.env.ODOO_USERNAME;
  const apiKey = process.env.ODOO_API_KEY;
  if (!url || !db || !username || !apiKey) return null;
  return { url, db, username, apiKey };
}

async function jsonRpc<T>(url: string, payload: unknown): Promise<T> {
  const res = await fetch(`${url}/jsonrpc`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "call",
      params: payload,
      id: Math.floor(Math.random() * 1_000_000),
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) {
    throw new Error(`Odoo HTTP ${res.status}`);
  }
  const body = (await res.json()) as {
    result?: T;
    error?: { data?: { message?: string }; message?: string };
  };
  if (body.error) {
    const msg = body.error.data?.message ?? body.error.message ?? "unknown";
    throw new Error(`Odoo error: ${msg}`);
  }
  return body.result as T;
}

async function authenticate(cfg: OdooConfig): Promise<number> {
  const uid = await jsonRpc<number | false>(cfg.url, {
    service: "common",
    method: "authenticate",
    args: [cfg.db, cfg.username, cfg.apiKey, {}],
  });
  if (!uid) throw new Error("Odoo authentication failed (uid=null).");
  return uid;
}

async function executeKw<T>(
  cfg: OdooConfig,
  uid: number,
  model: string,
  method: string,
  args: unknown[],
  kwargs: Record<string, unknown> = {}
): Promise<T> {
  return jsonRpc<T>(cfg.url, {
    service: "object",
    method: "execute_kw",
    args: [cfg.db, uid, cfg.apiKey, model, method, args, kwargs],
  });
}

/**
 * Sucht einen Datensatz anhand seines Namens und gibt die ID zurueck.
 * Benutzt fuer Sales-Team, Source, Tag. Gibt null zurueck, wenn nichts
 * gefunden wurde \u2013 der Lead wird dann ohne diese Zuordnung erstellt.
 */
async function findIdByName(
  cfg: OdooConfig,
  uid: number,
  model: string,
  name: string
): Promise<number | null> {
  const ids = await executeKw<number[]>(
    cfg,
    uid,
    model,
    "search",
    [[["name", "=", name]]],
    { limit: 1 }
  );
  return ids && ids.length > 0 ? ids[0] : null;
}

/**
 * Erstellt im Odoo-CRM einen neuen crm.lead-Datensatz.
 * Gibt die Odoo-ID des Leads zurueck oder `null`, wenn Odoo nicht konfiguriert ist.
 * Wirft bei Netzwerk-/Auth-/API-Fehlern, damit der Caller entscheiden kann,
 * ob dem User trotzdem Erfolg zurueckgemeldet wird.
 */
export async function createOdooLead(lead: OdooLeadInput): Promise<number | null> {
  const cfg = readConfig();
  if (!cfg) return null;

  const uid = await authenticate(cfg);

  // Optionale Zuordnungen (Team, Source, Tag) per Name aufloesen, damit
  // der Odoo-Admin im UI einfach umbenennen/zuweisen kann, ohne dass wir
  // hier IDs haerten muessen.
  const [teamId, sourceId, tagId] = await Promise.all([
    process.env.ODOO_SALES_TEAM
      ? findIdByName(cfg, uid, "crm.team", process.env.ODOO_SALES_TEAM)
      : Promise.resolve(null),
    process.env.ODOO_LEAD_SOURCE
      ? findIdByName(cfg, uid, "utm.source", process.env.ODOO_LEAD_SOURCE)
      : Promise.resolve(null),
    process.env.ODOO_LEAD_TAG
      ? findIdByName(cfg, uid, "crm.tag", process.env.ODOO_LEAD_TAG)
      : Promise.resolve(null),
  ]);

  // Name des crm.lead nach Odoo-Konvention: kurz und sprechend
  const title = lead.company
    ? `Ticketpilot Trial \u2013 ${lead.company}`
    : `Ticketpilot Trial \u2013 ${lead.firstName}`;

  // Freitext-Beschreibung fuer alles, was keinen eigenen Feld-Slot hat
  const descriptionLines = [
    "Trial-Anfrage via ticket-pilot.de",
    "",
    `Vorname:         ${lead.firstName}`,
    `E-Mail:          ${lead.email}`,
    lead.company ? `Firma:           ${lead.company}` : null,
    lead.teamSize ? `Team-Gr\u00f6\u00dfe:     ${lead.teamSize} Devs` : null,
    `DSGVO-Einwilligung: ${lead.consent ? "ja" : "nein"}`,
    `Quelle:          ${lead.source ?? "landing"}`,
    lead.utm && Object.keys(lead.utm).length > 0
      ? `UTM:             ${Object.entries(lead.utm)
          .map(([k, v]) => `${k}=${v}`)
          .join(", ")}`
      : null,
    lead.userAgent ? `User-Agent:      ${lead.userAgent}` : null,
    `Eingegangen:     ${new Date().toISOString()}`,
  ].filter(Boolean);

  const values: Record<string, unknown> = {
    name: title,
    email_from: lead.email,
    contact_name: lead.firstName,
    partner_name: lead.company ?? undefined,
    description: descriptionLines.join("\n"),
    type: "lead",
  };
  if (teamId) values.team_id = teamId;
  if (sourceId) values.source_id = sourceId;
  if (tagId) values.tag_ids = [[6, 0, [tagId]]]; // Odoo-Syntax: replace tag list

  // UTM-Campaign-Feld: wenn utm_campaign mitgeliefert wurde, Campaign per
  // Name nachschlagen; sonst weglassen, damit wir keine Fake-Zuordnung bauen.
  if (lead.utm?.utm_campaign) {
    const campaignId = await findIdByName(
      cfg,
      uid,
      "utm.campaign",
      lead.utm.utm_campaign
    );
    if (campaignId) values.campaign_id = campaignId;
  }
  if (lead.utm?.utm_medium) {
    const mediumId = await findIdByName(
      cfg,
      uid,
      "utm.medium",
      lead.utm.utm_medium
    );
    if (mediumId) values.medium_id = mediumId;
  }

  const createdIds = await executeKw<number[]>(
    cfg,
    uid,
    "crm.lead",
    "create",
    [[values]]
  );
  return Array.isArray(createdIds) ? createdIds[0] : null;
}

/**
 * Prueft, ob Odoo erreichbar und der API-Key gueltig ist.
 * Benutzbar fuer einen Health-Check-Endpoint.
 */
export async function pingOdoo(): Promise<{
  ok: boolean;
  uid?: number;
  error?: string;
}> {
  const cfg = readConfig();
  if (!cfg) return { ok: false, error: "ODOO_* env variables not set" };
  try {
    const uid = await authenticate(cfg);
    return { ok: true, uid };
  } catch (err) {
    return { ok: false, error: (err as Error).message };
  }
}
