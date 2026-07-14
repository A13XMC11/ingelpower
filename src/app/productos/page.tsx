import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { productos } from "@/data/productos";

export const metadata: Metadata = {
  title: "Productos | Cables, WETOWN, SIEMENS, FLUKE y CIRCUTOR",
  description:
    "Catálogo de productos INGELPOWER: cables eléctricos especiales Okonite, Southwire, Nexans y General Cable; automatización SIEMENS; instrumentos FLUKE; ducto de barras WETOWN; corrección electrónica y filtro activo de armónicos CIRCUTOR.",
};

export default function ProductosPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> / <span>Productos</span>
          </div>
          <h1>Productos y marcas por los que nos destacamos</h1>
          <p className="lead text-[#DCE6F6] max-w-[660px]">
            Representamos marcas líderes a nivel mundial para llevar a su planta cables,
            automatización, medición y corrección de energía de la más alta calidad. Explore el
            catálogo y entre al detalle de cada producto.
          </p>
        </div>
      </div>

      <section className="section-tight">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {productos.map((producto, i) => (
              <Reveal key={producto.slug} delay={i % 3}>
                <Link href={`/productos/${producto.slug}`} className="card featured h-full flex flex-col">
                  <div className="icon-box">{producto.icon}</div>
                  {producto.flag ? <span className="detail-flag">{producto.flag}</span> : null}
                  <h3>{producto.title}</h3>
                  <p>{producto.summary}</p>
                  <div className="brand-tags">
                    {producto.brands.map((brand) => (
                      <span key={brand.name} className={`brand-tag${brand.important ? " important" : ""}`}>
                        {brand.name}
                      </span>
                    ))}
                  </div>
                  <span className="tag mt-auto">Ver detalle →</span>
                </Link>
              </Reveal>
            ))}
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
