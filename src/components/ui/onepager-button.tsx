"use client";

import { useOnepager } from "@/components/onepager-modal";

interface OnepagerButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function OnepagerButton({ children, className }: OnepagerButtonProps) {
  const { open } = useOnepager();

  return (
    <button onClick={open} className={`cursor-pointer ${className ?? ""}`}>
      {children}
    </button>
  );
}
