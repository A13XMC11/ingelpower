import type { Metadata } from "next";
import { CaseStudyBody, buildCaseStudyJsonLd, buildFaqJsonLd, type CaseStudyFaq } from "@/components/case-study";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ingelpower.com";
const PAGE_URL = `${SITE_URL}/proyectos/ucem`;

export const metadata: Metadata = {
  title: "Caso de Éxito: Variador de Medio Voltaje para UCEM",
  description:
    "INGELPOWER suministró, instaló y puso en marcha un variador de medio voltaje de 300 kW a 4.16 kV para la planta cementera UCEM en Ecuador.",
  alternates: { canonical: "/proyectos/ucem" },
  openGraph: {
    title: "Caso de Éxito: Variador de Medio Voltaje para UCEM | INGELPOWER",
    description:
      "Suministro, instalación y puesta en marcha de un variador de medio voltaje de 300 kW a 4.16 kV para UCEM.",
    images: ["/assets/proyecto-ucem.webp"],
  },
};

const faqs: CaseStudyFaq[] = [
  {
    q: "¿Qué es un variador de medio voltaje y para qué se usa en una cementera?",
    a: "Un variador de medio voltaje (VMV) controla la velocidad de motores grandes que operan directamente en media tensión (por ejemplo 4.16 kV), sin necesidad de transformarla a baja tensión. En una planta cementera se usa para controlar molinos, ventiladores y otros equipos de alta potencia, reduciendo el consumo energético y el desgaste mecánico frente al arranque directo.",
  },
  {
    q: "¿Qué beneficio da instalar un variador en lugar de un arranque directo?",
    a: "Reduce picos de corriente en el arranque, permite ajustar la velocidad del motor según la demanda real del proceso (con el consiguiente ahorro energético), y disminuye el desgaste mecánico de acoples, rodamientos y estructura del equipo, extendiendo su vida útil.",
  },
];

const jsonLd = buildCaseStudyJsonLd({
  siteUrl: SITE_URL,
  pageUrl: PAGE_URL,
  headline: "Variador de medio voltaje para UCEM — Caso de éxito INGELPOWER",
  description:
    "Suministro, instalación y puesta en marcha de un variador de medio voltaje de 300 kW a 4.16 kV para la planta cementera UCEM.",
  image: "/assets/proyecto-ucem.webp",
  about: "UCEM Ecuador",
});
const faqJsonLd = buildFaqJsonLd(faqs);

export default function UcemCasePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <CaseStudyBody
        eyebrow="Industria cementera"
        title="Variador de medio voltaje para UCEM"
        heroLead="Suministro, instalación y puesta en marcha de un variador de medio voltaje de 300 kW a 4.16 kV, para optimizar el consumo energético y reducir el desgaste mecánico de equipos críticos de la planta."
        contextTitle="Control de potencia donde cada kW cuenta"
        contextLead="Los equipos de alta potencia de una planta cementera —molinos, ventiladores— consumen energía de forma constante si arrancan directo. INGELPOWER suministró e instaló un variador de medio voltaje de 300 kW a 4.16 kV que permite controlar la velocidad del equipo según la demanda real del proceso, con ahorro energético medible."
        bullets={[
          "Suministro del variador de medio voltaje 300 kW / 4.16 kV",
          "Instalación y conexionado en media tensión",
          "Coordinación de protecciones con el sistema eléctrico existente",
          "Puesta en marcha y pruebas de funcionamiento",
        ]}
        image="/assets/proyecto-ucem.webp"
        imageAlt="Variador de medio voltaje instalado en planta UCEM"
        scope={[
          {
            item: "Variador de medio voltaje 300 kW / 4.16 kV",
            detail: "Suministro, instalación y puesta en marcha del variador de medio voltaje para la planta.",
            amount: "$300.000,00",
          },
        ]}
        faqs={faqs}
        ctaText="Hablemos de variadores de medio voltaje o eficiencia energética para su planta."
        breadcrumbLabel="UCEM"
      />
    </>
  );
}
