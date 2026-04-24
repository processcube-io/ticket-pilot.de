import { EyebrowBadge } from "@/components/ui/eyebrow-badge";
import { PrimaryCta } from "@/components/ui/primary-cta";

/**
 * Hero-Variante B
 * Kernunterschied zu Variante A: Statt Terminal + Result-Karte steht rechts
 * ein 60-Sek-Produktvideo-Platzhalter. Das ist laut Best-Practice der
 * gr\u00f6\u00dfte Conversion-Hebel f\u00fcr erkl\u00e4rungsbed\u00fcrftige B2B-SaaS.
 *
 * Einbindung: video-src in VIDEO_SRC setzen (MP4/WebM) oder `<iframe>` durch
 * Loom/YouTube-Embed ersetzen.
 */
const VIDEO_SRC = ""; // z. B. "/videos/ticketpilot-60s.mp4"
const VIDEO_POSTER = "/video-poster.jpg"; // fallback-Bild

export function HeroB() {
  return (
    <section className="min-h-[calc(100dvh-64px)] flex flex-col">
      <div className="flex-1 flex items-center">
        <div className="container py-[56px] max-tablet:py-[40px]">
          <div className="grid desktop:grid-cols-[1.05fr_0.95fr] gap-[34px] items-center">
            {/* Linke Spalte */}
            <div>
              <EyebrowBadge>On-Prem &middot; BPMN-gesteuert &middot; ab 15 Min live</EyebrowBadge>
              <h1
                className="headline"
                style={{ fontSize: "clamp(56px, 10vw, 112px)", maxWidth: "820px" }}
              >
                Schluss mit Ticket-Pingpong. Deine KI fixt. Du gibst frei.
              </h1>
              <p className="font-headline uppercase tracking-[0.04em] text-accent mt-4 text-[20px] max-tablet:text-[16px]">
                Ticketpilot. KI-Support, den dein Dev freigibt.
              </p>
              <p
                className="text-text-muted max-w-[740px] mt-[22px]"
                style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
              >
                47 neue Tickets. Dein Team hat vier Leute. Statt stundenlang zu
                debuggen, l&auml;sst du die KI den Fix schreiben &ndash;
                prozessgesteuert, automatisch getestet, von deinem Dev
                freigegeben. In 30&ndash;60 Minuten. Inkl. Review.
              </p>

              <div className="mt-[34px]">
                <PrimaryCta
                  href="#lead"
                  event="cta_hero_trial_b"
                  secondary={{ href: "#vs", label: "Warum nicht einfach Copilot? \u2193" }}
                />
              </div>

              <div className="mt-5 font-medium flex gap-4 flex-wrap text-[15px]">
                {["Auf deinem Server, nicht in der Cloud", "90 % Fixes ohne Nacharbeiten", "Jederzeit k\u00fcndbar"].map(
                  (item) => (
                    <span key={item} className="before:content-['•'] before:text-accent before:mr-2">
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Rechte Spalte – Video */}
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-line rounded-[30px] p-6 shadow-card relative overflow-hidden max-tablet:p-4">
              <div className="absolute -right-[10%] -bottom-[25%] w-[260px] h-[260px] bg-[radial-gradient(circle,rgba(247,150,70,0.22),rgba(247,150,70,0))] pointer-events-none" />

              {/* Video-Container 16:9 */}
              <div className="aspect-video bg-card border border-line rounded-card overflow-hidden relative">
                {VIDEO_SRC ? (
                  <video
                    src={VIDEO_SRC}
                    poster={VIDEO_POSTER}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-center px-6">
                    <div>
                      <div className="w-[72px] h-[72px] rounded-full bg-accent grid place-items-center mx-auto mb-4">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="#000" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="font-headline uppercase tracking-[0.04em] text-[22px] text-text-primary">
                        60-Sek-Produktvideo
                      </div>
                      <p className="text-text-muted text-sm mt-2 max-w-[360px] mx-auto">
                        Hier kommt das Loom/YouTube-Embed rein: Ticket-Eingang
                        bis Fix auf Testumgebung in 60 Sekunden.
                      </p>
                      <code className="text-[11px] text-text-muted block mt-4">
                        VIDEO_SRC in hero-b.tsx setzen
                      </code>
                    </div>
                  </div>
                )}
              </div>

              {/* Mini-Caption unter dem Video */}
              <div className="flex items-center justify-between gap-4 mt-4 text-sm">
                <span className="text-text-muted">
                  Ticket &rarr; Fix auf Testumgebung
                </span>
                <span className="text-accent font-bold">30&ndash;60 Min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
