import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ingelpower.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "INGELPOWER | Ingeniería Eléctrica y Media Tensión en Ecuador",
    template: "%s | INGELPOWER",
  },
  description:
    "INGELPOWER — Energía que trasciende. +18 años de experiencia en mallas a tierra, tableros eléctricos, corrección de factor de potencia y proyectos de media tensión.",
  icons: {
    icon: "/assets/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    siteName: "INGELPOWER",
    url: SITE_URL,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalUtility",
  "@id": `${SITE_URL}/#organization`,
  name: "INGELPOWER",
  legalName: "INGELPOWER S.A.",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.svg`,
  image: `${SITE_URL}/assets/hero-collage-4.webp`,
  description:
    "Ingeniería eléctrica, media tensión, mallas a tierra, tableros eléctricos, corrección de factor de potencia y cables especiales en Ecuador. +18 años de experiencia.",
  telephone: "+593984255690",
  email: "ingenieria@ingelpower.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Quito",
    addressCountry: "EC",
  },
  areaServed: "EC",
  slogan: "Energía que trasciende",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${plusJakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
