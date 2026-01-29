import type { ReactNode } from "react";

type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedGroup({ children, className = "" }: AnimatedGroupProps) {
  return (
    <div
      className={`flex flex-col gap-6 [&>*]:animate-in [&>*]:fade-in [&>*]:duration-500 [&>*]:fill-mode-forwards [&>*:nth-child(1)]:delay-0 [&>*:nth-child(2)]:delay-150 [&>*:nth-child(3)]:delay-300 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
