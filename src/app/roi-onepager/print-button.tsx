"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      type="button"
      className="plausible-event-name=roi_onepager_print inline-flex items-center justify-center min-h-[40px] px-4 rounded-md font-bold bg-neutral-900 text-white hover:bg-neutral-700"
    >
      Als PDF speichern &middot; Drucken
    </button>
  );
}
