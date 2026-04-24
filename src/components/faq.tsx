"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EyebrowBadge } from "@/components/ui/eyebrow-badge";

const faqs = [
  {
    question: "Moment \u2013 ersetzt das meine Entwickler?",
    answer:
      "Nein. Und das ist der Punkt. Ticketpilot nimmt deinen Entwicklern die stumpfe Arbeit ab: Fehler suchen, Kontext aufbauen, Boilerplate schreiben. Dein QA-Dev beh\u00E4lt das letzte Wort. Die KI ist das Werkzeug \u2013 dein Team bleibt der Entscheider.",
  },
  {
    question: "Wir haben sensiblen Code. Geht das trotzdem?",
    answer:
      "Ja. ProcessCube l\u00E4uft on-prem, auf deinem Server. Dein Code verlässt nie deine Infrastruktur. Du w\u00E4hlst sogar den KI-Provider selbst \u2013 lokal ist m\u00F6glich. Kein Lock-in, keine Cloud-Pflicht.",
  },
  {
    question: "Wem geh\u00F6rt der Code, den die KI schreibt?",
    answer:
      "Dir. Punkt. Du nutzt die KI, du generierst den Code, dein Dev reviewed ihn. Die IP-Rechte liegen bei dir als Anwender. Wir stellen den Prozess bereit, nicht den Code.",
  },
  {
    question: "Welche KI muss ich nutzen? Ist die dabei?",
    answer:
      "Du w\u00E4hlst deinen Provider selbst: Claude Code, GPT, Gemini, oder ein lokales Modell. Die KI-Kosten tr\u00E4gst du direkt beim Anbieter \u2013 typischerweise zwischen 20\u201350\u20AC/Monat. ProcessCube orchestriert nur den Prozess.",
  },
  {
    question: "Wie lange dauert es, bis das l\u00E4uft?",
    answer:
      "15 Minuten. Docker-Container starten, Konnektor konfigurieren, BPMN-Template aktivieren. Kein Consultant, kein Projekt, kein Genehmigungsprozess.",
  },
  {
    question: "Was, wenn es mir nicht gef\u00E4llt?",
    answer:
      "30 Tage kostenlos testen. Monatlich k\u00FCndbar. Keine Mindestlaufzeit, kein Kleingedrucktes. Wenn es nichts f\u00FCr euch ist, k\u00FCndigt ihr. Fertig.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-line rounded-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-[22px] flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
      >
        <span className="font-headline text-[22px] uppercase tracking-[0.02em] leading-tight">
          {question}
        </span>
        <span className="text-accent text-2xl shrink-0">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="px-[22px] pb-[22px] text-text-muted">
          {answer}
        </div>
      )}
    </div>
  );
}

export function Faq() {
  // Schema.org FAQPage-Markup: Google kann daraus Featured Snippets bauen.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <SectionWrapper id="faq">
      <EyebrowBadge>FAQ</EyebrowBadge>
      <h2
        className="headline max-w-[820px] mb-5"
        style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
      >
        Ja, wir kennen deine Bedenken.
      </h2>

      <div className="grid gap-3.5 mt-9 max-w-[820px]">
        {faqs.map((faq) => (
          <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </SectionWrapper>
  );
}
