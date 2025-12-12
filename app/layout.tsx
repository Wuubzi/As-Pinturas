import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AS Pinturas - Colores Vivos para Transformar Espacios",
  description:
    "AS Pinturas: Pinturas de alta calidad con colores vivos y brillantes. Distribuidora de pinturas, vinilos, esmaltes y anticorrosivos en Barranquilla. Crea espacios de felicidad.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/aspinturasimage.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/aspinturasimage.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/aspinturasimage.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "/aspinturasimage.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
