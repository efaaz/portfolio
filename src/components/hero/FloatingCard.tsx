import type { ReactNode } from "react";

type FloatingCardProps = {
  children: ReactNode;
  className?: string;
  delay?: string;
};

export default function FloatingCard({
  children,
  className = "",
  delay = "0s",
}: FloatingCardProps) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`
        absolute
        z-20
        animate-floating
        rounded-2xl
        border border-white/8
        bg-white/4
        px-4 py-3
        shadow-[0_12px_40px_rgba(0,0,0,0.25)]
        backdrop-blur-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}