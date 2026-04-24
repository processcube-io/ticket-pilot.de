import { NextRequest, NextResponse } from "next/server";

/**
 * A/B-Split-Middleware
 *
 * Zweck: Den Root-Path "/" zu 50 % auf Variante A (bestehende Seite) und
 * zu 50 % auf Variante B (internal rewrite auf "/b") aufteilen.
 *
 * Verhalten:
 *   - Nur "/" wird gesplittet. "/b" und alles andere bleibt unangetastet.
 *   - Die Zuteilung wird in einem Cookie ("tp_variant") fuer 30 Tage
 *     persistiert, damit dieselbe Person immer dieselbe Variante sieht.
 *   - Ein Query-Parameter "?variant=a" oder "?variant=b" erzwingt die
 *     jeweilige Variante und setzt das Cookie entsprechend (nuetzlich
 *     fuer QA, Sales-Demos, Bug-Reports).
 *   - "/b" bleibt direkt erreichbar als permanenter Opt-in auf B.
 *
 * Deaktivieren:
 *   - Entweder die Datei loeschen
 *   - oder Environment-Variable EXPERIMENT_AB_ACTIVE=false setzen
 */

const COOKIE_NAME = "tp_variant";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 Tage
const VARIANT_B_PATH = "/b";

function assignVariant(): "a" | "b" {
  return Math.random() < 0.5 ? "a" : "b";
}

export function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;

  // Notausschalter ueber Env-Variable
  if (process.env.EXPERIMENT_AB_ACTIVE === "false") {
    return NextResponse.next();
  }

  // Force-Override via Query: ?variant=a oder ?variant=b
  const forced = nextUrl.searchParams.get("variant");
  if (forced === "a" || forced === "b") {
    const cleanUrl = nextUrl.clone();
    cleanUrl.searchParams.delete("variant");
    // Cookie setzen, Query entfernen, User auf die saubere URL zurueckschicken.
    // Danach greift der normale Split-Pfad mit persistiertem Cookie.
    const res = NextResponse.redirect(cleanUrl);
    res.cookies.set(COOKIE_NAME, forced, {
      maxAge: COOKIE_MAX_AGE,
      path: "/",
      sameSite: "lax",
    });
    return res;
  }

  // Bestehendes Cookie lesen
  const existing = cookies.get(COOKIE_NAME)?.value;
  const variant: "a" | "b" =
    existing === "a" || existing === "b" ? existing : assignVariant();

  // Nur "/" wird umgeschrieben. Alle anderen Pfade bleiben wie sie sind.
  let res: NextResponse;
  if (nextUrl.pathname === "/" && variant === "b") {
    const rewriteUrl = nextUrl.clone();
    rewriteUrl.pathname = VARIANT_B_PATH;
    res = NextResponse.rewrite(rewriteUrl);
  } else {
    res = NextResponse.next();
  }

  // Cookie (neu oder aufgefrischt) mit aktuell zugeteilter Variante setzen
  if (existing !== variant) {
    res.cookies.set(COOKIE_NAME, variant, {
      maxAge: COOKIE_MAX_AGE,
      path: "/",
      sameSite: "lax",
    });
  }

  // Header, den Plausible-Integration oder clientseitige Logik auslesen kann
  res.headers.set("x-tp-variant", variant);

  return res;
}

/**
 * matcher: Middleware NUR fuer die Root-Route triggern.
 * Alles andere (Assets, /b, /api, /roi-onepager, ...) laeuft drumherum.
 */
export const config = {
  matcher: ["/"],
};
