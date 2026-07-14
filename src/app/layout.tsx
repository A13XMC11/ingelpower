import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

// A fresh CSP nonce is generated per-request in src/proxy.ts; Next.js needs
// dynamic rendering to apply it to its inline hydration scripts.
export const dynamic = "force-dynamic";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "INGELPOWER | Ingeniería Eléctrica y Media Tensión en Ecuador",
    template: "%s | INGELPOWER",
  },
  description:
    "INGELPOWER — Energía que trasciende. +18 años de experiencia en mallas a tierra, tableros eléctricos, corrección de factor de potencia y proyectos de media tensión.",
  icons: {
    icon: "/assets/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${plusJakarta.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
