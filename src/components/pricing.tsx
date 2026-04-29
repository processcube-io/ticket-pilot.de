"use client";

import { useEffect, useState } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { Card } from "@/components/ui/card";
import { DownloadButton } from "@/components/ui/download-button";

/**
 * Pricing-Sektion fuer Ticketpilot.
 *
 * Inhalte werden zur Laufzeit aus dem ProcessCube-Marketplace geladen.
 * Editorial bleibt: Reihenfolge, Tag-Beschriftung, Empfohlen-Hervorhebung
 * und der Plausible-Event-Name pro Karte. Alles andere (Name, Preis,
 * Beschreibung, Icon) kommt aus der API.
 *
 * Wenn die API offline ist, blendet die Sektion eine kurze Meldung ein
 * und versteckt den Karten-Bereich, statt die Seite zu blockieren.
 */

const API_URL =
  "https://marketplace.processcube.io/public_api/featured_products?campaign=Ticketpilot";
const CTA_LABEL = "Kostenlos starten";

interface ApiProduct {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: number;
  currency: string;
}

interface PlanMeta {
  id: string;
  tag: string;
  ctaEvent: string;
  highlighted?: boolean;
}

const PLAN_META: PlanMeta[] = [
  { id: "ticketpilot-lokal", tag: "Lokal", ctaEvent: "cta_pricing_lokal" },
  {
    id: "ticketpilot-hetzner",
    tag: "Cloud by Hetzner",
    ctaEvent: "cta_pricing_hetzner",
    highlighted: true,
  },
  { id: "ticketpilot-k8s", tag: "Cloud K8s", ctaEvent: "cta_pricing_k8s" },
];

/**
 * Entfernt das eingebettete YouTube-Setup-Video und die zugehoerige
 * Lead-Zeile aus der Marketplace-Beschreibung. Beide passen nicht in das
 * Karten-Layout und werden auf der Landingpage anders erzaehlt.
 */
function cleanDescription(html: string): string {
  return html
    .replace(/<div[^>]*data-embedded[^>]*>[\s\S]*?<\/div>/g, "")
    .replace(/<div>\s*<br\s*\/?>\s*<\/div>/g, "")
    .replace(/<p>[^<]*Schaue hier[^<]*<br\s*\/?>\s*<\/p>/gi, "")
    .trim();
}

const CURRENCY_SYMBOL: Record<string, string> = { EUR: "\u20AC" };

export function Pricing() {
  const [products, setProducts] = useState<ApiProduct[] | null>(null);
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(API_URL)
      .then((r) => {
        if (!r.ok) throw new Error(r.statusText);
        return r.json();
      })
      .then((data: ApiProduct[]) => {
        if (!cancelled) setProducts(data);
      })
      .catch(() => {
        if (!cancelled) setOffline(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <SectionWrapper id="pricing">
      <EyebrowBadge>Pricing</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Du siehst den Preis, bevor du mit jemandem reden musst.
      </h2>
      <p
        className="text-text-muted max-w-[740px] mt-0"
        style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
      >
        Drei Betriebsmodelle &ndash; gleicher Funktionsumfang, unterschiedliche
        Verantwortung f&uuml;r Betrieb und Support. Du w&auml;hlst, wo
        Ticketpilot l&auml;uft und wer die Infrastruktur pflegt.
      </p>

      {offline && (
        <div className="mt-9 border border-line rounded-card p-6 text-center text-text-muted">
          <strong className="text-text-primary block mb-1">
            Preise gerade nicht verf&uuml;gbar
          </strong>
          Der ProcessCube-Marketplace ist aktuell nicht erreichbar. Bitte
          versuche es in ein paar Minuten erneut.
        </div>
      )}

      {!offline && !products && (
        <div className="mt-9 grid desktop:grid-cols-3 gap-5 items-stretch">
          {PLAN_META.map((meta) => (
            <Card key={meta.id} highlighted={meta.highlighted}>
              <div className="animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-white/[0.06]" />
                  <div className="h-3 w-24 rounded bg-white/[0.06]" />
                </div>
                <div className="h-12 w-32 rounded bg-white/[0.06] mt-5" />
                <div className="grid gap-2 mt-6">
                  <div className="h-3 w-full rounded bg-white/[0.04]" />
                  <div className="h-3 w-11/12 rounded bg-white/[0.04]" />
                  <div className="h-3 w-9/12 rounded bg-white/[0.04]" />
                  <div className="h-3 w-10/12 rounded bg-white/[0.04] mt-3" />
                  <div className="h-3 w-8/12 rounded bg-white/[0.04]" />
                </div>
                <div className="h-[54px] w-full rounded-btn bg-white/[0.05] mt-8" />
              </div>
            </Card>
          ))}
        </div>
      )}

      {!offline && products && (
        <div className="grid desktop:grid-cols-3 gap-5 mt-9 items-stretch">
          {PLAN_META.map((meta) => {
            const p = products.find((x) => x.id === meta.id);
            if (!p) return null;
            const symbol = CURRENCY_SYMBOL[p.currency] ?? p.currency;
            return (
              <Card key={meta.id} highlighted={meta.highlighted}>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`data:image/webp;base64,${p.icon}`}
                      alt=""
                      width={36}
                      height={36}
                      className="rounded-md shrink-0"
                    />
                    <span className="text-xs uppercase tracking-[0.12em] font-bold text-accent">
                      {meta.tag}
                    </span>
                  </div>
                  {meta.highlighted && (
                    <span className="text-[11px] uppercase tracking-[0.12em] font-bold text-accent bg-accent-soft border border-accent-border px-2 py-1 rounded-pill">
                      Empfohlen
                    </span>
                  )}
                </div>

                <div className="flex items-end gap-2 mt-4">
                  <strong className="font-headline text-[48px] leading-none text-accent">
                    {p.price}&nbsp;{symbol}
                  </strong>
                  <span className="text-text-muted pb-1.5 text-sm">
                    / Monat
                  </span>
                </div>

                <div
                  className="api-description text-text-muted mt-4"
                  dangerouslySetInnerHTML={{
                    __html: cleanDescription(p.description),
                  }}
                />

                <div className="mt-auto pt-6">
                  <DownloadButton
                    event={meta.ctaEvent}
                    className={
                      meta.highlighted
                        ? "w-full inline-flex items-center justify-center min-h-[60px] px-[22px] rounded-btn font-bold text-[17px] transition-all duration-200 bg-gradient-to-br from-accent to-accent-hover text-black shadow-[0_8px_24px_rgba(248,181,68,0.35)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(248,181,68,0.5)] cursor-pointer"
                        : "w-full inline-flex items-center justify-center min-h-[54px] px-[22px] rounded-btn font-bold transition-all duration-200 bg-transparent border border-accent/60 text-accent hover:bg-accent-soft hover:border-accent cursor-pointer"
                    }
                  >
                    {CTA_LABEL}
                  </DownloadButton>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      <div className="mt-7 border border-accent-border bg-accent-soft rounded-inner p-5 text-center">
        <strong className="text-text-primary block">
          ROI ab Monat 2 &ndash; bei einem 4-Dev-Team.
        </strong>
        <span className="text-text-muted text-sm block mt-1">
          Konservativ 9.000&nbsp;&euro; R&uuml;ckgewinn pro Dev/Jahr gegen ca.
          3.000&nbsp;&euro; Jahreskosten.{" "}
          <a href="#warum" className="underline hover:text-text-primary">
            Rechnung mit Quellen &uarr;
          </a>
        </span>
      </div>

      <p className="text-[11px] text-text-muted/40 mt-7 text-left pl-3 border-l border-line/50 leading-relaxed max-w-[820px]">
        <strong className="text-text-muted/60">
          Kein Abo-Automatismus ohne Hinweis:
        </strong>{" "}
        Zahlungsmittel wird bei Registrierung hinterlegt. 5 Tage vor Ablauf der
        30-Tage-Testphase erh&auml;ltst du eine Erinnerung per E-Mail. Ohne
        K&uuml;ndigung startet die Abrechnung am Tag 31. Monatlich k&uuml;ndbar.
        KI-Provider-Kosten (Claude, GPT, Gemini) werden direkt vom Anbieter
        abgerechnet &ndash; typisch 20&ndash;50&nbsp;&euro; / Monat pro Team.
      </p>
    </SectionWrapper>
  );
}
