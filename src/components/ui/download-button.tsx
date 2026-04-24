"use client";

import { useDownload } from "@/components/download-modal";

interface DownloadButtonProps {
  children: React.ReactNode;
  className?: string;
  event?: string;
}

export function DownloadButton({ children, className, event }: DownloadButtonProps) {
  const { open } = useDownload();

  return (
    <button
      onClick={open}
      className={`${event ? `plausible-event-name=${event} ` : ""}${className ?? ""}`}
    >
      {children}
    </button>
  );
}
