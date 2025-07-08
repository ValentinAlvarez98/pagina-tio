import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
      variable: "--font-geist-sans",
      subsets: ["latin"],
});

const geistMono = Geist_Mono({
      variable: "--font-geist-mono",
      subsets: ["latin"],
});

export const metadata: Metadata = {
      title: "FPV Rasante",
      description: "Capturamos la esencia y elegancia de propiedades excepcionales a través de cinematografía aérea con drones FPV de última generación.",
      keywords: [
            "FPV",
            "Cinematografía Aérea",
            "Drones",
            "Inmobiliaria",
            "Fotografía Inmobiliaria",
            "Video Inmobiliario",
            "Propiedades",
            "Arquitectura",
            "Diseño",
            "Fotografía",
            "Video",
            "Calidad",
            "Innovación",
            "Tecnología",
            "Creatividad",
            "Experiencia",
            "Drones FPV",
            "Drones",
            "Cinematografía",
            "Fotografía Aérea",
            "Video Aéreo",
            "Producción de Video",
            "Producción de Fotografía",
            "Servicios de Drones",
            "Servicios Inmobiliarios",
            "Marketing Inmobiliario",
            "Marketing"
      ]
};

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      return (
            <html lang="es">
                  <body
                        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                  >
                        {children}
                  </body>
            </html>
      );
}
