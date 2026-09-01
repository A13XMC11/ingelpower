import type { Metadata } from "next";
import { CaseStudyBody, buildCaseStudyJsonLd, buildFaqJsonLd, type CaseStudyFaq } from "@/components/case-study";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ingelpower.com";
const PAGE_URL = `${SITE_URL}/proyectos/aymesa`;

export const metadata: Metadata = {
  title: "Caso de Éxito: Celda de Soldadura para Aymesa (KIA Motors)",
  description:
    "INGELPOWER fabricó y montó el sistema eléctrico de la celda de soldadura para el modelo KIA Sportage en la planta de Aymesa, Ecuador.",
  alternates: { canonical: "/proyectos/aymesa" },
  openGraph: {
    title: "Caso de Éxito: Celda de Soldadura para Aymesa (KIA Motors) | INGELPOWER",
    description:
      "Fabricación y montaje del sistema eléctrico de la celda de soldadura para el modelo KIA Sportage en Aymesa.",
    images: ["/assets/proyecto-aymesa.webp"],
  },
};

const faqs: CaseStudyFaq[] = [
  {
    q: "¿Qué es una celda de soldadura en una planta automotriz?",
    a: "Es una estación robotizada o semiautomática donde se sueldan piezas de la carrocería de un vehículo. Requiere un sistema eléctrico dedicado que soporte la alta demanda de corriente de los equipos de soldadura por resistencia, junto con los controles de seguridad y automatización que sincronizan el proceso.",
  },
  {
    q: "¿Qué exige el sistema eléctrico de una celda de soldadura automotriz?",
    a: "Debe soportar picos de corriente altos y repetitivos sin afectar la calidad de la soldadura ni el resto de la instalación, incluir protecciones dimensionadas para esa carga, y coordinarse con los sistemas de control y seguridad de la línea de producción (paros de emergencia, enclavamientos, señalización).",
  },
];

const jsonLd = buildCaseStudyJsonLd({
  siteUrl: SITE_URL,
  pageUrl: PAGE_URL,
  headline: "Celda de soldadura para Aymesa (KIA Motors) — Caso de éxito INGELPOWER",
  description:
    "Fabricación y montaje del sistema eléctrico de la celda de soldadura para el modelo KIA Sportage en la planta de Aymesa.",
  image: "/assets/proyecto-aymesa.webp",
  about: "Aymesa / KIA Motors Ecuador",
});
const faqJsonLd = buildFaqJsonLd(faqs);

export default function AymesaCasePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <CaseStudyBody
        eyebrow="Industria automotriz"
        title="Celda de soldadura para Aymesa (KIA Motors)"
        heroLead="Fabricación y montaje del sistema eléctrico de la celda de soldadura para el modelo KIA Sportage, en la planta de ensamblaje de Aymesa."
        contextTitle="Precisión eléctrica para una línea de producción que no admite fallas"
        contextLead="Una celda de soldadura automotriz exige un sistema eléctrico dimensionado para picos de corriente altos y repetitivos, coordinado con los controles de seguridad de la línea. INGELPOWER fabricó y montó el sistema eléctrico completo de la celda para el modelo KIA Sportage en la planta de Aymesa."
        bullets={[
          "Fabricación del sistema eléctrico de la celda de soldadura",
          "Montaje y conexionado de equipos de soldadura por resistencia",
          "Coordinación de protecciones para picos de corriente altos",
          "Integración con sistemas de control y seguridad de la línea",
        ]}
        image="/assets/proyecto-aymesa.webp"
        imageAlt="Celda de soldadura en planta Aymesa"
        scope={[
          {
            item: "Sistema eléctrico de celda de soldadura",
            detail: "Fabricación y montaje del sistema eléctrico de la celda de soldadura para el modelo KIA Sportage.",
            amount: "$280.000,00",
          },
        ]}
        faqs={faqs}
        ctaText="Hablemos del sistema eléctrico de su línea de producción o celda de manufactura."
        breadcrumbLabel="Aymesa"
      />
    </>
  );
}
