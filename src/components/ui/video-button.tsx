"use client";

import { useVideo } from "@/components/video-modal";

interface VideoButtonProps {
  children: React.ReactNode;
  className?: string;
  event?: string;
  ariaLabel?: string;
}

export function VideoButton({
  children,
  className,
  event,
  ariaLabel,
}: VideoButtonProps) {
  const { open } = useVideo();

  return (
    <button
      type="button"
      onClick={open}
      aria-label={ariaLabel}
      className={`${event ? `plausible-event-name=${event} ` : ""}${className ?? ""}`}
    >
      {children}
    </button>
  );
}
