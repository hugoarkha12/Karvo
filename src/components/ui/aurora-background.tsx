"use client";

import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AURORA_STOPS =
  "repeating-linear-gradient(100deg, #0052FF 0%, #8fb0ff 8%, #e9effe 16%, #f5f7fa 24%, #c9d8fb 32%, #0052FF 40%)";
const SHEEN_STOPS =
  "repeating-linear-gradient(100deg, #ffffff 0%, #ffffff 6%, transparent 9%, transparent 12%, #ffffff 15%)";

export function AuroraLayers({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute -inset-[10px] opacity-50 blur-3xl will-change-transform animate-aurora [background-size:300%_300%] [background-position:50%_50%,50%_50%] [mask-image:radial-gradient(ellipse_90%_70%_at_50%_0%,black_20%,transparent_75%)]"
        style={{ backgroundImage: AURORA_STOPS }}
      />
      <div
        className="absolute -inset-[10px] opacity-40 mix-blend-overlay will-change-transform animate-aurora [background-size:200%_100%] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black_30%,transparent_70%)]"
        style={{ backgroundImage: SHEEN_STOPS }}
      />
    </div>
  );
}

interface AuroraBackgroundProps {
  className?: string;
  children: ReactNode;
  showRadialGradient?: boolean;
}

export default function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden",
        className
      )}
    >
      <AuroraLayers />
      {showRadialGradient && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,transparent_55%,rgba(255,255,255,0.9)_100%)]" />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
