import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IndustrialPlate } from "@/components/industrial-plate";
import { Reveal } from "@/components/reveal";
import { CatalogSideNav } from "@/components/catalog-side-nav";
import { getProducto, productos } from "@/data/productos";

interface ProductoPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return productos.map((producto) => ({ slug: producto.slug }));
}

export async function generateMetadata({ params }: ProductoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const producto = getProducto(slug);
  if (!producto) return {};

  return {
    title: `${producto.title} | Productos INGELPOWER`,
    description: producto.summary,
  };
}

export default async function ProductoDetailPage({ params }: ProductoPageProps) {
  const { slug } = await params;
  const producto = getProducto(slug);
  if (!producto) notFound();

  const sideNavItems = productos.map((p) => ({
    href: `/productos/${p.slug}`,
    label: p.title,
  }));

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> / <Link href="/productos">Productos</Link> /{" "}
            <span>{producto.title}</span>
          </div>
          <h1>{producto.title}</h1>
          <p className="lead text-[#DCE6F6] max-w-[660px]">{producto.lead}</p>
        </div>
      </div>

      <section className="section-tight">
        <div className="container layout-with-side">
          <CatalogSideNav title="Productos" items={sideNavItems} activeHref={`/productos/${producto.slug}`} />

          <div>
            <Reveal className="detail-block" id={producto.slug}>
              {producto.flag ? <span className="detail-flag">{producto.flag}</span> : null}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                <div>
                  <ul className="spec-list">
                    {producto.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
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
                <IndustrialPlate
                  minHeight={producto.minHeight ?? 280}
                  image={producto.image}
                  imageAlt={producto.title}
                  icon={producto.image ? undefined : producto.icon}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>¿Busca un producto específico para su planta?</h2>
              <p>Cuéntenos qué necesita y le enviamos disponibilidad, ficha técnica y cotización.</p>
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
