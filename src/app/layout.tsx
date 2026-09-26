import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "KARVO // Venture Studio · Mexico · Latin America",
  description:
    "Karvo partners with exceptional people to build technology companies that solve meaningful problems. Born in Tijuana. Built for the world.",
  keywords: [
    "Karvo",
    "Venture Studio",
    "Mexico",
    "Latin America",
    "Tijuana",
    "Technology Companies",
    "Startups",
    "AI",
    "Financial Infrastructure",
  ],
  openGraph: {
    title: "KARVO // Building the next generation of companies",
    description:
      "Karvo partners with exceptional people to build technology companies that solve meaningful problems.",
    siteName: "KARVO",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-primary selection:text-on-primary min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
