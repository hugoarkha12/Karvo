import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "KARVO // Construimos las empresas del futuro",
  description:
    "Karvo es un venture studio que utiliza inteligencia artificial, tecnología, capital y talento para descubrir oportunidades y construir compañías de alto potencial en Latinoamérica.",
  keywords: [
    "Karvo",
    "Venture Studio",
    "Mexico",
    "Latin America",
    "Tijuana",
    "Inteligencia Artificial",
    "Technology Companies",
    "Startups",
    "AI",
    "Arkha",
  ],
  openGraph: {
    title: "KARVO // Construimos las empresas del futuro",
    description:
      "Karvo es un venture studio que descubre oportunidades, construye tecnología y crea compañías diseñadas para los mercados de la próxima generación.",
    siteName: "KARVO",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth bg-white">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-neutral-900 antialiased min-h-screen selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
