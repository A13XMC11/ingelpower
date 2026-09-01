import Link from "next/link";
import { IndustrialPlate } from "@/components/industrial-plate";
import { Reveal } from "@/components/reveal";

export interface CaseStudyScopeRow {
  item: string;
  detail: string;
  amount: string;
}

export interface CaseStudyFaq {
  q: string;
  a: string;
}

export interface CaseStudyBodyProps {
  eyebrow: string;
  title: string;
  heroLead: string;
  contextTitle: string;
  contextLead: string;
  bullets: string[];
  image?: string;
  imageAlt?: string;
  icon?: React.ReactNode;
  scope: CaseStudyScopeRow[];
  faqs: CaseStudyFaq[];
  ctaText: string;
  breadcrumbLabel: string;
}

export function CaseStudyBody({
  eyebrow,
  title,
  heroLead,
  contextTitle,
  contextLead,
  bullets,
  image,
  imageAlt,
  icon,
  scope,
  faqs,
  ctaText,
  breadcrumbLabel,
}: CaseStudyBodyProps) {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> / <Link href="/proyectos">Proyectos</Link> /{" "}
            <span>{breadcrumbLabel}</span>
          </div>
          <h1>{title}</h1>
          <p className="lead text-[#DCE6F6] max-w-[660px]">{heroLead}</p>
        </div>
      </div>

      <section>
        <div className="container split">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h2>{contextTitle}</h2>
            <p className="lead">{contextLead}</p>
            <ul className="spec-list grid-cols-1">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
          <Reveal>
            <IndustrialPlate minHeight={380} image={image} imageAlt={imageAlt} icon={image ? undefined : icon} />
          </Reveal>
        </div>
      </section>

      <section className="bg-gray">
        <div className="container">
          <div className="eyebrow">Alcance certificado</div>
          <h2 className="max-w-[640px]">Lo que se ejecutó, en cifras</h2>
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
            Montos según certificaciones y contratos suscritos con el cliente. Documentación
            disponible bajo solicitud.
          </p>
        </div>
      </section>

      {faqs.length > 0 ? (
        <section>
          <div className="container">
            <div className="eyebrow">Preguntas frecuentes</div>
            <h2 className="max-w-[640px]">Sobre este proyecto</h2>
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
      ) : null}

      <section className="bg-navy section-tight">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>¿Su próximo proyecto necesita este mismo nivel de exigencia?</h2>
              <p>{ctaText}</p>
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

export function buildCaseStudyJsonLd({
  siteUrl,
  pageUrl,
  headline,
  description,
  image,
  about,
}: {
  siteUrl: string;
  pageUrl: string;
  headline: string;
  description: string;
  image?: string;
  about: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline,
    description,
    image: image ? `${siteUrl}${image}` : undefined,
    author: { "@type": "Organization", name: "INGELPOWER", url: siteUrl },
    publisher: { "@type": "Organization", name: "INGELPOWER", url: siteUrl },
    mainEntityOfPage: pageUrl,
    about,
  };
}

export function buildFaqJsonLd(faqs: CaseStudyFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
