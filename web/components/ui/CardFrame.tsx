import { ReactNode } from "react";

interface CardFrameProps {
  children: ReactNode;
  className?: string;
  styleSvg?: string
}

export default function CardFrame({
  children,
  className = "",
  styleSvg = ""
}: CardFrameProps) {
  return (
    <div
      className={`
        relative overflow-hidden
        border border-zinc-200
        bg-white
        shadow-sm
        ${className}
      `}
    >
      {/* Corner Decoration */}
      <img
        src="/card-frame.svg"
        alt=""
        aria-hidden="true"
        className=
        {`
          pointer-events-none
          absolute
          top-0
          right-0
          h-auto
          select-none
          ${styleSvg}
          `}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}