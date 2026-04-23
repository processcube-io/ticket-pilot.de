import { NextResponse } from "next/server";
import { pingOdoo } from "@/lib/odoo";

/**
 * Health-Check fuer die Odoo-Anbindung.
 * Nur GET, keine Parameter. Antwort:
 *   { ok: true,  uid: 42 }            \u2192 Auth ok, Odoo erreichbar
 *   { ok: false, error: "..." }       \u2192 Details im Fehlertext (ENV fehlt, Auth fehlgeschlagen, Netz)
 *
 * Beispiel:
 *   curl https://ticket-pilot.de/api/lead/odoo-health
 *
 * Im Dashboard einmal aufrufen, bevor ihr Live geht. Danach nicht mehr
 * noetig \u2013 der Endpunkt ist ohnehin harmlos (keine Writes).
 */
export async function GET() {
  const result = await pingOdoo();
  return NextResponse.json(result, {
    status: result.ok ? 200 : 503,
    headers: { "Cache-Control": "no-store" },
  });
}
