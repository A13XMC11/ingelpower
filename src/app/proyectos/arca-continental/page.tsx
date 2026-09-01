import type { Metadata } from "next";
import { CaseStudyBody, buildCaseStudyJsonLd, buildFaqJsonLd, type CaseStudyFaq } from "@/components/case-study";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ingelpower.com";
const PAGE_URL = `${SITE_URL}/proyectos/arca-continental`;

export const metadata: Metadata = {
  title: "Caso de Éxito: Celdas de Media Tensión para Arca Continental",
  description:
    "INGELPOWER diseñó e instaló celdas de media tensión 25kV para la planta de Arca Continental (Coca-Cola) en Ecuador, garantizando continuidad de suministro para una planta de bebidas de alto consumo energético.",
  alternates: { canonical: "/proyectos/arca-continental" },
  openGraph: {
    title: "Caso de Éxito: Celdas de Media Tensión para Arca Continental | INGELPOWER",
    description:
      "Diseño e instalación de celdas de media tensión 25kV para la planta de Arca Continental (Coca-Cola) en Ecuador.",
  },
};

const faqs: CaseStudyFaq[] = [
  {
    q: "¿Qué es una celda de media tensión y para qué sirve?",
    a: "Una celda de media tensión es un gabinete metálico que aloja el equipo de maniobra, protección y medición de un circuito eléctrico entre 1kV y 36kV. Permite conectar, seccionar y proteger transformadores y líneas de forma segura, y es el punto de entrada típico de energía en plantas industriales de alto consumo como embotelladoras.",
  },
  {
    q: "¿Por qué una planta de bebidas necesita media tensión y no baja tensión directamente?",
    a: "Una planta de producción y embotellado de alto consumo (compresores, líneas de llenado, refrigeración) requiere más potencia de la que es eficiente transportar en baja tensión. Recibir la energía en media tensión (típicamente 13.8kV o 25kV en Ecuador) reduce pérdidas y permite transformarla localmente según cada área de la planta.",
  },
];

const jsonLd = buildCaseStudyJsonLd({
  siteUrl: SITE_URL,
  pageUrl: PAGE_URL,
  headline: "Celdas de media tensión para Arca Continental — Caso de éxito INGELPOWER",
  description:
    "Diseño e instalación de celdas de media tensión 25kV para la planta de Arca Continental (Coca-Cola) en Ecuador.",
  about: "Arca Continental Ecuador",
});
const faqJsonLd = buildFaqJsonLd(faqs);

export default function ArcaContinentalCasePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <CaseStudyBody
        eyebrow="Industria de bebidas"
        title="Celdas de media tensión para Arca Continental"
        heroLead="Diseño e instalación de celdas de media tensión 25kV para una de las embotelladoras de Coca-Cola más grandes de Ecuador, garantizando continuidad de suministro en una planta de alto consumo energético."
        contextTitle="Energía confiable para una operación que no puede parar"
        contextLead="Una planta embotelladora opera con líneas de producción continuas donde cada interrupción eléctrica significa pérdida de producto y tiempo de máquina. INGELPOWER diseñó e instaló el sistema de celdas de media tensión que recibe y distribuye la energía de la planta, bajo los estándares de seguridad exigidos para instalaciones industriales de alto consumo."
        bullets={[
          "Diseño de ingeniería de celdas de media tensión 25kV",
          "Suministro e instalación de celdas certificadas",
          "Coordinación de protecciones eléctricas con la red existente de la planta",
          "Pruebas y puesta en marcha bajo supervisión del cliente",
        ]}
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
            <path d="M12 3c3 3 5 6 5 9a5 5 0 0 1-10 0c0-3 2-6 5-9z" />
          </svg>
        }
        scope={[
          {
            item: "Celdas de media tensión 25kV",
            detail: "Diseño, suministro, instalación y puesta en marcha de celdas de media tensión para la planta de producción.",
            amount: "$360.000,00",
          },
        ]}
        faqs={faqs}
        ctaText="Hablemos de celdas de media tensión o distribución eléctrica para su planta."
        breadcrumbLabel="Arca Continental"
      />
    </>
  );
}
