import type { ReactNode } from "react";

type TextEffectProps = {
  children: ReactNode;
  className?: string;
};

export function TextEffect({ children, className = "" }: TextEffectProps) {
  return <span className={`animate-fade-in-blur ${className}`.trim()}>{children}</span>;
}
