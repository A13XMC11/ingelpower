import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IndustrialPlate } from "@/components/industrial-plate";
import { Reveal } from "@/components/reveal";
import { CatalogSideNav } from "@/components/catalog-side-nav";
import { ServicioItems } from "@/components/servicio-items";
import { getServicio, servicios } from "@/data/servicios";
import { buildFaqJsonLd } from "@/components/case-study";

interface ServicioPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servicios.map((servicio) => ({ slug: servicio.slug }));
}

export async function generateMetadata({ params }: ServicioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const servicio = getServicio(slug);
  if (!servicio) return {};

  return {
    title: `${servicio.title} | Servicios INGELPOWER`,
    description: servicio.summary,
  };
}

export default async function ServicioDetailPage({ params }: ServicioPageProps) {
  const { slug } = await params;
  const servicio = getServicio(slug);
  if (!servicio) notFound();

  const sideNavItems = servicios.map((s) => ({
    href: `/servicios/${s.slug}`,
    label: s.title,
  }));

  const faqJsonLd = servicio.faqs && servicio.faqs.length > 0 ? buildFaqJsonLd(servicio.faqs) : null;

  return (
    <>
      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}

      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> / <Link href="/servicios">Servicios</Link> /{" "}
            <span>{servicio.title}</span>
          </div>
          <h1>{servicio.title}</h1>
          <p className="lead text-[#DCE6F6] max-w-[640px]">{servicio.lead}</p>
        </div>
      </div>

      <section className="section-tight">
        <div className="container layout-with-side">
          <CatalogSideNav title="Servicios" items={sideNavItems} activeHref={`/servicios/${servicio.slug}`} />

          <div>
            <Reveal className="detail-block" id={servicio.slug}>
              {servicio.flag ? <span className="detail-flag">{servicio.flag}</span> : null}
              {servicio.items ? (
                <div>
                  <h2 className="mb-2">{servicio.title}</h2>
                  <p className="lead text-ink-800 mb-6">{servicio.summary}</p>
                  <ul className="spec-list mb-2">
                    {servicio.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                  <ServicioItems servicioSlug={servicio.slug} items={servicio.items} />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                  <div>
                    <h2 className="mb-2">{servicio.title}</h2>
                    <p className="lead text-ink-800 mb-6">{servicio.summary}</p>
                    <IndustrialPlate
                      minHeight={servicio.minHeight ?? 280}
                      image={servicio.image}
                      imageAlt={servicio.title}
                      icon={servicio.image ? undefined : servicio.icon}
                    />
                  </div>
                  <div>
                    <ul className="spec-list">
                      {servicio.specs.map((spec) => (
                        <li key={spec}>{spec}</li>
                      ))}
                    </ul>
                    {servicio.note ? (
                      <p className="mt-4.5 text-[.9rem] text-ink-500">{servicio.note}</p>
                    ) : null}
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {servicio.galeria ? (
        <section className="section-tight bg-gray">
          <div className="container flex flex-col gap-16 md:gap-20">
            {servicio.galeria.map((tablero, index) => (
              <Reveal
                key={tablero.name}
                className={`split${index % 2 === 1 ? " reverse" : ""}`}
              >
                <IndustrialPlate
                  minHeight={320}
                  image={tablero.image}
                  imageAlt={tablero.imageAlt}
                />
                <div>
                  <h3 className="mb-3">{tablero.name}</h3>
                  <p className="text-ink-700 leading-relaxed">{tablero.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {servicio.faqs && servicio.faqs.length > 0 ? (
        <section className="bg-gray section-tight">
          <div className="container">
            <div className="eyebrow">Preguntas frecuentes</div>
            <h2 className="max-w-[640px]">Sobre {servicio.title.toLowerCase()}</h2>
            <div className="grid grid-cols-1 gap-6 mt-9 max-w-[760px]">
              {servicio.faqs.map((faq) => (
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
              <h2>¿Necesita resolver un problema eléctrico crítico?</h2>
              <p>Cuéntenos su requerimiento y le proponemos la mejor solución técnica.</p>
            </div>
            <Link href="/contacto" className="btn btn-outline">
              Solicitar cotización
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
