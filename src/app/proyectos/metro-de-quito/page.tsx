import type { Metadata } from "next";
import Link from "next/link";
import { IndustrialPlate } from "@/components/industrial-plate";
import { Reveal } from "@/components/reveal";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ingelpower.com";
const PAGE_URL = `${SITE_URL}/proyectos/metro-de-quito`;

export const metadata: Metadata = {
  title: "Caso de Éxito: Sistema Eléctrico del Metro de Quito",
  description:
    "Cómo INGELPOWER ejecutó el sistema de mallas a tierra, acometidas de socorro 25kV y tableros de transferencia automática en las 15 estaciones del Metro de Quito, bajo estándares europeos ACCIONA.",
  alternates: { canonical: "/proyectos/metro-de-quito" },
  openGraph: {
    title: "Caso de Éxito: Sistema Eléctrico del Metro de Quito | INGELPOWER",
    description:
      "3 años de trabajo continuo: mallas a tierra, acometidas de socorro 25kV y tableros de transferencia automática en las 15 estaciones del Metro de Quito.",
    images: ["/assets/proyecto-metro-destacado.webp"],
  },
};

const scope = [
  {
    item: "Sistema de mallas a tierra (SPT)",
    detail:
      "Armado y montaje de mallas a tierra en estaciones y pozos de ventilación, con certificación de resistencia y potenciales de paso/toque.",
    amount: "$1.620.181,67",
  },
  {
    item: "Tableros de transferencia automática",
    detail:
      "Suministro e instalación de tableros de transferencia automática en las 15 estaciones de la Línea 1, garantizando continuidad eléctrica ante fallas de la red pública.",
    amount: "$171.126,07",
  },
];

const faqs = [
  {
    q: "¿Qué hizo INGELPOWER en el Metro de Quito?",
    a: "INGELPOWER ejecutó, durante 3 años continuos, el armado y montaje del sistema de mallas a tierra (SPT) en estaciones y pozos, el suministro e instalación de acometidas eléctricas de socorro de 25kV en las 15 estaciones de la Línea 1, y la provisión de tableros de transferencia automática, todo bajo estándares europeos del Consorcio Línea 1 Metro de Quito (ACCIONA).",
  },
  {
    q: "¿Qué es un sistema de mallas a tierra (SPT) y por qué es crítico en un metro?",
    a: "Un sistema de mallas a tierra (SPT) es una red de conductores enterrados que dispersa corrientes de falla y descargas eléctricas de forma segura, protegiendo personas y equipos. En infraestructura como un metro, es crítico porque una falla mal aterrizada puede generar tensiones de paso y contacto peligrosas para pasajeros y personal técnico en espacios subterráneos.",
  },
  {
    q: "¿Cómo se certifica un sistema de mallas a tierra?",
    a: "Se certifica midiendo la resistencia de puesta a tierra y los potenciales de paso y contacto con equipos especializados, como el medidor Metrel utilizado en este proyecto, comparando los resultados contra los límites máximos establecidos por la normativa aplicable.",
  },
  {
    q: "¿Qué es una acometida eléctrica de socorro?",
    a: "Es una conexión eléctrica secundaria de respaldo que entra en operación cuando falla la acometida principal, garantizando que instalaciones críticas —como estaciones de metro— no pierdan suministro eléctrico.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline: "Sistema eléctrico del Metro de Quito — Caso de éxito INGELPOWER",
  description:
    "Sistema de mallas a tierra, acometidas de socorro 25kV y tableros de transferencia automática en las 15 estaciones del Metro de Quito, ejecutado por INGELPOWER bajo estándares europeos ACCIONA.",
  image: `${SITE_URL}/assets/proyecto-metro-destacado.webp`,
  author: { "@type": "Organization", name: "INGELPOWER", url: SITE_URL },
  publisher: { "@type": "Organization", name: "INGELPOWER", url: SITE_URL },
  mainEntityOfPage: PAGE_URL,
  about: "Metro de Quito, Línea 1",
};

export default function MetroDeQuitoCasePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> / <Link href="/proyectos">Proyectos</Link> /{" "}
            <span>Metro de Quito</span>
          </div>
          <h1>Sistema eléctrico del Metro de Quito</h1>
          <p className="lead text-[#DCE6F6] max-w-[660px]">
            3 años de trabajo continuo en el corazón de los quiteños: mallas a tierra, acometidas
            de socorro 25kV y tableros de transferencia automática en las 15 estaciones de la
            Línea 1, bajo estándares europeos del Consorcio ACCIONA.
          </p>
        </div>
      </div>

      <section>
        <div className="container split">
          <div>
            <div className="eyebrow">El proyecto</div>
            <h2>Infraestructura crítica, cero margen de error</h2>
            <p className="lead">
              El Metro de Quito es la primera línea de metro de Ecuador: 15 estaciones subterráneas
              que dependen de un suministro eléctrico continuo e ininterrumpido las 24 horas.
              INGELPOWER fue responsable de tres sistemas eléctricos críticos en toda la línea,
              trabajando bajo la supervisión técnica del Consorcio Línea 1 Metro de Quito, liderado
              por la constructora española ACCIONA, y sus estándares europeos de seguridad y
              calidad.
            </p>
            <ul className="spec-list grid-cols-1">
              <li>Armado y montaje del sistema de mallas a tierra (SPT) en estaciones y pozos</li>
              <li>Suministro e instalación de acometidas eléctricas de socorro 25kV en las 15 estaciones</li>
              <li>Provisión de tableros de transferencia automática para las 15 estaciones</li>
              <li>Certificación del funcionamiento del SPT con equipo de medición toque y paso (Metrel)</li>
            </ul>
          </div>
          <Reveal>
            <IndustrialPlate minHeight={420} image="/assets/proyecto-metro-destacado.webp" imageAlt="Sistema eléctrico del Metro de Quito" />
          </Reveal>
        </div>
      </section>

      <section className="bg-gray">
        <div className="container">
          <div className="eyebrow">Alcance certificado</div>
          <h2 className="max-w-[640px]">Dos contratos, un mismo estándar de calidad</h2>
          <div className="table-wrap mt-7.5">
            <table className="exp-table">
              <thead>
                <tr>
                  <th>Alcance</th>
                  <th>Detalle</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                {scope.map((row) => (
                  <tr key={row.item}>
                    <td>{row.item}</td>
                    <td>{row.detail}</td>
                    <td className="amount">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="form-note mt-4">
            Montos según certificaciones y contratos suscritos con el Consorcio Línea 1 Metro de
            Quito. Documentación disponible bajo solicitud.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="eyebrow">Preguntas frecuentes</div>
          <h2 className="max-w-[640px]">Sobre mallas a tierra y acometidas de socorro</h2>
          <div className="grid grid-cols-1 gap-6 mt-9 max-w-[760px]">
            {faqs.map((faq) => (
              <Reveal key={faq.q} className="card p-6">
                <h3 className="mb-2 text-[1.05rem]">{faq.q}</h3>
                <p className="text-[.95rem] text-ink-700 m-0">{faq.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy section-tight">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>¿Su próximo proyecto necesita este mismo nivel de exigencia?</h2>
              <p>Hablemos de mallas a tierra, acometidas o tableros para su infraestructura crítica.</p>
            </div>
            <Link href="/contacto" className="btn btn-outline">
              Hablar con un especialista
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
