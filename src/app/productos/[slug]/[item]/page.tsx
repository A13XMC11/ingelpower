import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IndustrialPlate } from "@/components/industrial-plate";
import { Reveal } from "@/components/reveal";
import { CatalogSideNav } from "@/components/catalog-side-nav";
import { getProductoSubItem, productos } from "@/data/productos";

interface ProductoItemPageProps {
  params: Promise<{ slug: string; item: string }>;
}

export function generateStaticParams() {
  return productos.flatMap((producto) =>
    (producto.items ?? []).map((item) => ({ slug: producto.slug, item: item.slug }))
  );
}

export async function generateMetadata({ params }: ProductoItemPageProps): Promise<Metadata> {
  const { slug, item: itemSlug } = await params;
  const found = getProductoSubItem(slug, itemSlug);
  if (!found) return {};

  return {
    title: `${found.item.name} | ${found.producto.title} | Productos INGELPOWER`,
    description: found.item.summary,
  };
}

export default async function ProductoItemPage({ params }: ProductoItemPageProps) {
  const { slug, item: itemSlug } = await params;
  const found = getProductoSubItem(slug, itemSlug);
  if (!found) notFound();
  const { producto, item } = found;

  const sideNavItems = productos.map((p) => ({
    href: `/productos/${p.slug}`,
    label: p.title,
  }));

  const otherItems = (producto.items ?? []).filter((i) => i.slug !== item.slug);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> / <Link href="/productos">Productos</Link> /{" "}
            <Link href={`/productos/${producto.slug}`}>{producto.title}</Link> /{" "}
            <span>{item.name}</span>
          </div>
          <h1>{item.name}</h1>
          <p className="lead text-[#DCE6F6] max-w-[660px]">{item.summary}</p>
        </div>
      </div>

      <section className="section-tight">
        <div className="container layout-with-side">
          <CatalogSideNav title="Productos" items={sideNavItems} activeHref={`/productos/${producto.slug}`} />

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
                  <div className="brand-tags">
                    {producto.brands.map((brand) => (
                      <span key={brand.name} className={`brand-tag${brand.important ? " important" : ""}`}>
                        {brand.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="cta-banner">
              <div>
                <h2>¿Necesita {item.name.toLowerCase()}?</h2>
                <p>Cuéntenos las condiciones de su proyecto y le enviamos disponibilidad, ficha técnica y cotización.</p>
              </div>
              <Link href="/contacto" className="btn btn-outline">
                Solicitar cotización
              </Link>
            </Reveal>

            {otherItems.length > 0 ? (
              <Reveal className="mt-14">
                <h3 className="mb-5">Otros cables de esta línea</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {otherItems.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/productos/${producto.slug}/${other.slug}`}
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
