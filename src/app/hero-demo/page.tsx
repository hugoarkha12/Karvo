import React from "react";
import HeroDemo from "@/components/ui/hero-demo";

export const metadata = {
  title: "Responsive Hero Banner Demo | Space",
  description: "Preview of the ResponsiveHeroBanner component",
};

export default function HeroDemoPage() {
  return (
    <main className="w-full min-h-screen bg-black">
      <HeroDemo />
    </main>
  );
}
