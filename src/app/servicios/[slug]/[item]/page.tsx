import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IndustrialPlate } from "@/components/industrial-plate";
import { Reveal } from "@/components/reveal";
import { CatalogSideNav } from "@/components/catalog-side-nav";
import { getServicioSubItem, servicios } from "@/data/servicios";

interface ServicioItemPageProps {
  params: Promise<{ slug: string; item: string }>;
}

export function generateStaticParams() {
  return servicios.flatMap((servicio) =>
    (servicio.items ?? []).map((item) => ({ slug: servicio.slug, item: item.slug }))
  );
}

export async function generateMetadata({ params }: ServicioItemPageProps): Promise<Metadata> {
  const { slug, item: itemSlug } = await params;
  const found = getServicioSubItem(slug, itemSlug);
  if (!found) return {};

  return {
    title: `${found.item.name} | ${found.servicio.title} | Servicios INGELPOWER`,
    description: found.item.summary,
  };
}

export default async function ServicioItemPage({ params }: ServicioItemPageProps) {
  const { slug, item: itemSlug } = await params;
  const found = getServicioSubItem(slug, itemSlug);
  if (!found) notFound();
  const { servicio, item } = found;

  const sideNavItems = servicios.map((s) => ({
    href: `/servicios/${s.slug}`,
    label: s.title,
  }));

  const otherItems = (servicio.items ?? []).filter((i) => i.slug !== item.slug);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> / <Link href="/servicios">Servicios</Link> /{" "}
            <Link href={`/servicios/${servicio.slug}`}>{servicio.title}</Link> /{" "}
            <span>{item.name}</span>
          </div>
          <h1>{item.name}</h1>
          <p className="lead text-[#DCE6F6] max-w-[660px]">{item.summary}</p>
        </div>
      </div>

      <section className="section-tight">
        <div className="container layout-with-side">
          <CatalogSideNav title="Servicios" items={sideNavItems} activeHref={`/servicios/${servicio.slug}`} />

          <div>
            <Reveal className="detail-block">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-center">
                <div>
                  <h2 className="mb-2">{item.name}</h2>
                  <p className="lead text-ink-800 mb-6">{item.description}</p>
                  <IndustrialPlate minHeight={340} image={item.image} imageAlt={item.imageAlt} />
                </div>
                <div>
                  <ul className="spec-list">
                    {item.applications.map((application) => (
                      <li key={application}>{application}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal className="cta-banner">
              <div>
                <h2>¿Necesita alquilar el {item.name.toLowerCase()}?</h2>
                <p>Cuéntenos la fecha y duración que necesita y le enviamos disponibilidad y cotización.</p>
              </div>
              <Link href="/contacto" className="btn btn-outline">
                Solicitar cotización
              </Link>
            </Reveal>

            {otherItems.length > 0 ? (
              <Reveal className="mt-14">
                <h3 className="mb-5">Otros equipos disponibles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {otherItems.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/servicios/${servicio.slug}/${other.slug}`}
                      className="card h-full flex flex-col"
                    >
                      <h3>{other.name}</h3>
                      <p>{other.summary}</p>
                      <span className="tag mt-auto">Ver detalle →</span>
                    </Link>
                  ))}
                </div>
              </Reveal>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
