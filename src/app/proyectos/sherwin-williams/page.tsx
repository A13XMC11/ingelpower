import type { Metadata } from "next";
import { CaseStudyBody, buildCaseStudyJsonLd, buildFaqJsonLd, type CaseStudyFaq } from "@/components/case-study";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ingelpower.com";
const PAGE_URL = `${SITE_URL}/proyectos/sherwin-williams`;

export const metadata: Metadata = {
  title: "Caso de Éxito: Iluminación Clase 1 División 1 para Sherwin Williams",
  description:
    "INGELPOWER ejecutó el sistema de iluminación completa y montajes electromecánicos bajo normativa Clase 1 División 1 para Sherwin Williams (Pinturas Cóndor), con tableros MCC 220V SIEMENS.",
  alternates: { canonical: "/proyectos/sherwin-williams" },
  openGraph: {
    title: "Caso de Éxito: Iluminación Clase 1 División 1 para Sherwin Williams | INGELPOWER",
    description:
      "Sistema de iluminación y montajes electromecánicos bajo normativa Clase 1 División 1 para Sherwin Williams (Pinturas Cóndor).",
    images: ["/assets/proyecto-sherwin-williams.webp"],
  },
};

const faqs: CaseStudyFaq[] = [
  {
    q: "¿Qué es la normativa Clase 1 División 1 y por qué aplica a una planta de pinturas?",
    a: "Clase 1 División 1 es una clasificación de áreas peligrosas (NEC/NFPA) para ambientes donde vapores o gases inflamables están presentes de forma continua o frecuente en condiciones normales de operación, como sucede en zonas de mezcla y almacenamiento de solventes en una planta de pinturas. Los equipos eléctricos instalados en estas áreas deben ser antiexplosivos, certificados para no generar chispas ni superficies calientes que puedan encender la atmósfera.",
  },
  {
    q: "¿Qué diferencia tiene una instalación eléctrica antiexplosiva de una convencional?",
    a: "Usa luminarias, tableros y canalizaciones herméticos y certificados para atmósferas explosivas, con sellos anti-flama, prensaestopas especiales y procedimientos de instalación que evitan cualquier fuente de ignición. Es una disciplina distinta al montaje eléctrico industrial estándar y exige personal certificado en instalaciones de áreas clasificadas.",
  },
];

const jsonLd = buildCaseStudyJsonLd({
  siteUrl: SITE_URL,
  pageUrl: PAGE_URL,
  headline: "Iluminación Clase 1 División 1 para Sherwin Williams — Caso de éxito INGELPOWER",
  description:
    "Sistema de iluminación completa y montajes electromecánicos bajo normativa Clase 1 División 1 para Sherwin Williams (Pinturas Cóndor), con tableros MCC 220V SIEMENS.",
  image: "/assets/proyecto-sherwin-williams.webp",
  about: "Sherwin Williams / Pinturas Cóndor Ecuador",
});
const faqJsonLd = buildFaqJsonLd(faqs);

export default function SherwinWilliamsCasePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <CaseStudyBody
        eyebrow="Industria petroquímica"
        title="Iluminación Clase 1 División 1 para Sherwin Williams"
        heroLead="Sistema de iluminación completa y montajes electromecánicos bajo normativa de áreas clasificadas Clase 1 División 1, con tableros MCC 220V SIEMENS, para la planta de Pinturas Cóndor (Sherwin Williams)."
        contextTitle="Electricidad segura donde un chispazo no es una opción"
        contextLead="En una planta de pinturas y solventes, cualquier instalación eléctrica convencional representa un riesgo de ignición. INGELPOWER diseñó e instaló el sistema de iluminación y los tableros MCC bajo normativa de áreas clasificadas Clase 1 División 1, con equipos certificados para atmósferas explosivas."
        bullets={[
          "Sistema de iluminación completa bajo normativa de áreas clasificadas",
          "Montajes electromecánicos certificados para atmósferas explosivas",
          "Tableros MCC 220V SIEMENS",
          "Cumplimiento de estándares NEC/NFPA para Clase 1 División 1",
        ]}
        image="/assets/proyecto-sherwin-williams.webp"
        imageAlt="Instalación eléctrica en planta Sherwin Williams"
        scope={[
          {
            item: "Iluminación y montajes electromecánicos",
            detail: "Sistema de iluminación completa y montajes bajo normativa Clase 1 División 1, con tableros MCC 220V SIEMENS.",
            amount: "$800.000,00",
          },
        ]}
        faqs={faqs}
        ctaText="Hablemos de instalaciones eléctricas para áreas clasificadas o plantas con riesgo de atmósfera explosiva."
        breadcrumbLabel="Sherwin Williams"
      />
    </>
  );
}
