"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Sendet bei jedem Pageview auf "/" oder "/b" ein Custom-Event
 * "variant_view" an Plausible mit der Property { variant: "a" | "b" }.
 *
 * Die Variante wird in dieser Reihenfolge bestimmt:
 *   1. Pfad "/b"            -> "b"  (direkter Opt-in, zaehlt unabhaengig vom Cookie)
 *   2. Cookie "tp_variant"  -> "a" oder "b"  (A/B-Split durch Middleware)
 *   3. Fallback             -> "a"
 *
 * Plausible wird per Event-Queue aufgerufen, damit der Call auch funktioniert,
 * wenn das Script noch nicht geladen ist.
 */
export function VariantTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Nur auf den Landingpage-Routen tracken, nicht auf /roi-onepager, /api etc.
    if (pathname !== "/" && pathname !== "/b") return;

    let variant: "a" | "b" = "a";
    if (pathname === "/b") {
      variant = "b";
    } else {
      const match = document.cookie.match(/(?:^|;\s*)tp_variant=([ab])/);
      if (match) variant = match[1] as "a" | "b";
    }

    // Plausible-Queue-Init: sammelt Calls auch vor Script-Load
    type PlausibleFn = (
      event: string,
      opts?: { props?: Record<string, string> }
    ) => void;
    type PlausibleWindow = Window & {
      plausible?: PlausibleFn & { q?: unknown[] };
    };
    const w = window as PlausibleWindow;
    if (!w.plausible) {
      const queue: unknown[] = [];
      const stub = ((...args: unknown[]) => {
        queue.push(args);
      }) as PlausibleFn & { q?: unknown[] };
      stub.q = queue;
      w.plausible = stub;
    }
    w.plausible("variant_view", { props: { variant } });
  }, [pathname]);

  return null;
}
