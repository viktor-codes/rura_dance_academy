import type { ReactNode } from "react";

type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedGroup({ children, className = "" }: AnimatedGroupProps) {
  return (
    <div
      className={`flex flex-col gap-6 [&>*:not(:nth-child(4))]:animate-in [&>*:not(:nth-child(4))]:fade-in [&>*:not(:nth-child(4))]:duration-500 [&>*:not(:nth-child(4))]:fill-mode-forwards [&>*:nth-child(1)]:delay-0 [&>*:nth-child(2)]:delay-150 [&>*:nth-child(3)]:delay-300 [&>*:nth-child(4)]:animate-fade-in-blur-up [&>*:nth-child(4)]:fill-mode-forwards [&>*:nth-child(4)]:[animation-delay:450ms] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
