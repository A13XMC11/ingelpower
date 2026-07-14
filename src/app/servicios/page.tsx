import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { servicios } from "@/data/servicios";

export const metadata: Metadata = {
  title: "Servicios | Mallas a Tierra, Tableros, Factor de Potencia y Media Tensión",
  description:
    "Catálogo de servicios INGELPOWER: sistemas de mallas a tierra, tableros eléctricos y banco de condensadores, corrección de factor de potencia, proyectos de media tensión, acometidas eléctricas y alquiler de equipos de medición.",
};

export default function ServiciosPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> / <span>Servicios</span>
          </div>
          <h1>Servicios por los que nos destacamos</h1>
          <p className="lead text-[#DCE6F6] max-w-[640px]">
            Ingeniería, procura y construcción eléctrica de media y baja tensión, con un enfoque
            especializado en los sistemas más críticos de su planta. Explore el catálogo y
            entre al detalle de cada servicio.
          </p>
        </div>
      </div>

      <section className="section-tight">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {servicios.map((servicio, i) => (
              <Reveal key={servicio.slug} delay={i % 3}>
                <Link href={`/servicios/${servicio.slug}`} className="card featured h-full flex flex-col">
                  <div className="icon-box">{servicio.icon}</div>
                  {servicio.flag ? <span className="detail-flag">{servicio.flag}</span> : null}
                  <h3>{servicio.title}</h3>
                  <p>{servicio.summary}</p>
                  <span className="tag mt-auto">Ver detalle →</span>
                </Link>
              </Reveal>
            ))}
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
