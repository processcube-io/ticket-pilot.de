"use client";

import { useEffect } from "react";

/**
 * Markiert alle externen Links (anderer Host als die aktuelle Seite) mit
 * `target="_blank"` und sicherem `rel`. Beruecksichtigt auch dynamisch
 * eingefuegte Links (z. B. die HTML-Beschreibung der Pricing-Karten, die zur
 * Laufzeit aus dem Marketplace nachgeladen wird).
 */
export function ExternalLinks() {
  useEffect(() => {
    const currentHost = window.location.host;

    function patch(anchor: HTMLAnchorElement) {
      const raw = anchor.getAttribute("href");
      if (!raw) return;
      if (
        raw.startsWith("#") ||
        raw.startsWith("mailto:") ||
        raw.startsWith("tel:") ||
        raw.startsWith("javascript:")
      )
        return;

      let url: URL;
      try {
        url = new URL(raw, window.location.origin);
      } catch {
        return;
      }
      if (url.host === currentHost) return;

      anchor.setAttribute("target", "_blank");
      const rel = (anchor.getAttribute("rel") ?? "").split(/\s+/).filter(Boolean);
      if (!rel.includes("noopener")) rel.push("noopener");
      if (!rel.includes("noreferrer")) rel.push("noreferrer");
      anchor.setAttribute("rel", rel.join(" "));
    }

    function patchAll(root: ParentNode) {
      root.querySelectorAll<HTMLAnchorElement>("a[href]").forEach(patch);
    }

    patchAll(document);

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          const el = node as Element;
          if (el.tagName === "A") patch(el as HTMLAnchorElement);
          else patchAll(el);
        });
        if (
          m.type === "attributes" &&
          m.target.nodeType === Node.ELEMENT_NODE &&
          (m.target as Element).tagName === "A"
        ) {
          patch(m.target as HTMLAnchorElement);
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href"],
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
