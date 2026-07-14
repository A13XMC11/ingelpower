import type { Metadata } from "next";
import Link from "next/link";
import { IndustrialPlate } from "@/components/industrial-plate";
import { Reveal } from "@/components/reveal";
import { SideNav } from "@/components/side-nav";

export const metadata: Metadata = {
  title: "Servicios | Mallas a Tierra, Tableros, Factor de Potencia y Media Tensión",
  description:
    "Servicios de INGELPOWER: especialistas en sistemas de mallas a tierra, tableros eléctricos y banco de condensadores, corrección de factor de potencia, proyectos de media tensión, acometidas eléctricas y alquiler de equipos de medición.",
};

const sideNavItems = [
  { href: "#mallas-a-tierra", label: "Mallas a Tierra" },
  { href: "#tableros-electricos", label: "Tableros / Banco de Condensadores" },
  { href: "#factor-potencia", label: "Corrección de Factor de Potencia" },
  { href: "#media-tension", label: "Proyectos de Media Tensión" },
  { href: "#acometidas", label: "Acometidas Eléctricas" },
  { href: "#alquiler-equipos", label: "Alquiler de Equipos" },
];

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
            especializado en los sistemas más críticos de su planta.
          </p>
        </div>
      </div>

      <section className="section-tight">
        <div className="container layout-with-side">
          <SideNav title="Servicios" items={sideNavItems} />

          <div>
            <Reveal className="detail-block" id="mallas-a-tierra">
              <span className="detail-flag">Servicio principal</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                <div>
                  <h2>Especialistas en Sistemas de Mallas a Tierra</h2>
                  <p className="lead">
                    Diseñamos, suministramos y montamos sistemas de puesta a tierra (SPT) que
                    protegen personas, equipos y edificaciones frente a descargas atmosféricas y
                    fallas eléctricas.
                  </p>
                  <ul className="spec-list">
                    <li>Diseño de malla a tierra bajo estándares europeos</li>
                    <li>Suministro y montaje de conductores y electrodos</li>
                    <li>Sistema de protección contra descargas atmosféricas</li>
                    <li>Certificación con equipo de medición toque y paso (Metrel)</li>
                  </ul>
                  <p className="mt-4.5 text-[.9rem] text-ink-500">
                    Caso destacado: suministro y montaje de malla a tierra para las estaciones del
                    Metro de Quito, bajo diseños de ACCIONA España.
                  </p>
                </div>
                <IndustrialPlate
                  minHeight={280}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
                      <path d="M12 2v10M6 22h12M8 22c0-3 4-4 4-8M16 22c0-3-4-4-4-8" />
                    </svg>
                  }
                />
              </div>
            </Reveal>

            <Reveal className="detail-block" id="tableros-electricos">
              <span className="detail-flag">Servicio principal</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                <IndustrialPlate
                  minHeight={280}
                  order="last"
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
                      <rect x="4" y="3" width="16" height="18" rx="1" />
                      <path d="M8 7h8M8 11h8M8 15h5" />
                    </svg>
                  }
                />
                <div>
                  <h2>Tableros Eléctricos y Banco de Condensadores</h2>
                  <p className="lead">
                    Fabricamos y montamos tableros de distribución, MCC y de transferencia
                    automática, además de bancos de condensadores para optimizar el consumo de su
                    instalación.
                  </p>
                  <ul className="spec-list">
                    <li>Tableros MCC bajo norma NEMA</li>
                    <li>Tableros de transferencia automática 4 polos</li>
                    <li>Bancos de condensadores para compensación reactiva</li>
                    <li>Equipamiento explosion proof para áreas clasificadas</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal className="detail-block" id="factor-potencia">
              <span className="detail-flag">Servicio principal</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                <div>
                  <h2>Corrección de Factor de Potencia</h2>
                  <p className="lead">
                    Un bajo factor de potencia genera multas y sobrecostos en su planilla
                    eléctrica. Diseñamos soluciones de compensación reactiva —convencionales y
                    electrónicas— para eliminar esas penalizaciones y mejorar la eficiencia de su
                    instalación.
                  </p>
                  <ul className="spec-list">
                    <li>Diagnóstico de factor de potencia en planta</li>
                    <li>Bancos de condensadores automáticos</li>
                    <li>Corrección electrónica con equipos SVG (Circutor)</li>
                    <li>Filtrado de armónicos con equipos AFQ (Circutor)</li>
                  </ul>
                </div>
                <IndustrialPlate
                  minHeight={280}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
                      <path d="M3 12h4l3-8 4 16 3-8h4" />
                    </svg>
                  }
                />
              </div>
            </Reveal>

            <Reveal className="detail-block" id="media-tension">
              <span className="detail-flag">Servicio principal</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                <IndustrialPlate
                  minHeight={280}
                  order="last"
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
                      <path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z" />
                    </svg>
                  }
                />
                <div>
                  <h2>Proyectos de Media Tensión</h2>
                  <p className="lead">
                    Ejecutamos proyectos integrales de media tensión: desde el diseño eléctrico
                    hasta el comisionamiento, con personal calificado y coordinación de
                    protecciones.
                  </p>
                  <ul className="spec-list">
                    <li>Celdas de media tensión 15kV, 17.5kV y 25kV</li>
                    <li>Coordinación de protecciones con software ETAP</li>
                    <li>Cámaras de transformación y redes de media voltaje</li>
                    <li>Variadores de medio voltaje y arrancadores</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal className="detail-block" id="acometidas">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                <div>
                  <h2>Acometidas Eléctricas</h2>
                  <p className="lead">
                    Ingeniería, procura y construcción de acometidas eléctricas de socorro y de
                    servicio normal, en fases de nivel básico, conceptual y de detalle.
                  </p>
                  <ul className="spec-list">
                    <li>Ingeniería básica, conceptual y de detalle</li>
                    <li>Acometidas de socorro en media tensión</li>
                    <li>Soterramiento de cables y cajas pad mounted</li>
                    <li>Reubicación de transformadores</li>
                  </ul>
                </div>
                <IndustrialPlate
                  minHeight={240}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
                      <path d="M4 20h16M6 20V10l6-6 6 6v10" />
                    </svg>
                  }
                />
              </div>
            </Reveal>

            <Reveal className="detail-block" id="alquiler-equipos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                <IndustrialPlate
                  minHeight={240}
                  order="last"
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
                      <rect x="3" y="7" width="18" height="10" rx="2" />
                      <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                    </svg>
                  }
                />
                <div>
                  <h2>Alquiler de Equipos de Medición</h2>
                  <p className="lead">
                    Ponemos a su disposición equipo especializado para mediciones y
                    certificaciones de campo.
                  </p>
                  <ul className="spec-list">
                    <li>Telurómetro para medición de resistividad</li>
                    <li>Medidor de toque y paso</li>
                    <li>Soporte técnico durante la medición</li>
                  </ul>
                </div>
              </div>
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
