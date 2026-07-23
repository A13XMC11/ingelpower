import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IndustrialPlate } from "@/components/industrial-plate";
import { Reveal } from "@/components/reveal";
import { CatalogSideNav } from "@/components/catalog-side-nav";
import { ServicioItems } from "@/components/servicio-items";
import { getServicio, servicios } from "@/data/servicios";

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

  return (
    <>
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
