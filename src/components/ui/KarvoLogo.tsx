import React from "react";

interface KarvoLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean;
  showSubtitle?: boolean;
  subtitleText?: string;
  color?: string;
  isLink?: boolean;
}

export const KarvoSymbol: React.FC<{
  className?: string;
  color?: string;
  height?: number;
}> = ({ className = "h-6 w-auto", color = "currentColor", height = 36 }) => {
  return (
    <svg
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ height: height ? `${height}px` : undefined }}
      aria-hidden="true"
    >
      {/* Left Pill */}
      <rect
        x="1"
        y="10"
        width="6"
        height="20"
        rx="3"
        fill={color}
      />
      {/* Center Pill (Tallest) */}
      <rect
        x="13"
        y="2"
        width="6"
        height="36"
        rx="3"
        fill={color}
      />
      {/* Right Pill */}
      <rect
        x="25"
        y="10"
        width="6"
        height="20"
        rx="3"
        fill={color}
      />
    </svg>
  );
};

export const KarvoWordmark: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = "h-5 w-auto", color = "currentColor" }) => {
  return (
    <svg
      viewBox="0 0 160 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="KARVO"
    >
      {/* K */}
      <path
        d="M6 4V28M6 16.5L19 4M10 12.5L20 28"
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Λ (A without crossbar) */}
      <path
        d="M32 28L44.5 4L57 28"
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* R */}
      <path
        d="M71 4V28M71 4H82.5C86.5 4 89.5 7 89.5 11C89.5 15 86.5 17.5 82.5 17.5H71M82 17.5L90.5 28"
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* V */}
      <path
        d="M104.5 4L117 28L129.5 4"
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* O */}
      <circle
        cx="147"
        cy="16"
        r="11.5"
        stroke={color}
        strokeWidth="3.4"
      />
    </svg>
  );
};

export default function KarvoLogo({
  className = "",
  size = "md",
  showWordmark = true,
  showSubtitle = true,
  subtitleText = "VENTURE STUDIO",
  color = "#000000",
  isLink = true,
}: KarvoLogoProps) {
  const sizeMap = {
    sm: { symbolH: 20, wordmarkH: "h-3.5", text: "text-[8px]" },
    md: { symbolH: 26, wordmarkH: "h-4.5", text: "text-[9px]" },
    lg: { symbolH: 32, wordmarkH: "h-5.5", text: "text-[10px]" },
    xl: { symbolH: 40, wordmarkH: "h-7", text: "text-xs" },
  };

  const currentSize = sizeMap[size];

  const content = (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Symbol (3 vertical pills) */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <KarvoSymbol height={currentSize.symbolH} color={color} />
      </div>

      {/* Wordmark (K Λ R V O) */}
      {showWordmark && (
        <div className="flex-shrink-0 flex items-center">
          <KarvoWordmark className={`${currentSize.wordmarkH} w-auto`} color={color} />
        </div>
      )}

      {/* Subtitle / Tag (e.g. VENTURE STUDIO) */}
      {showSubtitle && subtitleText && (
        <span className={`hidden sm:inline-block font-mono ${currentSize.text} text-neutral-500 border-l border-neutral-300 pl-2 tracking-widest uppercase select-none`}>
          {subtitleText}
        </span>
      )}
    </div>
  );

  if (isLink) {
    return (
      <a
        href="#"
        className="group inline-flex items-center transition-opacity hover:opacity-85"
        aria-label="KARVO Venture Studio Home"
      >
        {content}
      </a>
    );
  }

  return content;
}
