import Link from "next/link";
import { HeroCarousel, type HeroSlide } from "@/components/hero-carousel";
import { StatCounter } from "@/components/stat-counter";
import { IndustrialPlate } from "@/components/industrial-plate";
import { Reveal } from "@/components/reveal";

const slides: HeroSlide[] = [
  {
    tag: "+18 años de experiencia en Ecuador",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-3.5 h-3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 14.5 8.5 21 9.5 16.5 14 17.8 20.5 12 17.3 6.2 20.5 7.5 14 3 9.5 9.5 8.5z" />
      </svg>
    ),
    title: (
      <>
        Hago servicios y vendo productos especiales, <em>no para todo el mundo</em>.
      </>
    ),
    lead: "En INGELPOWER diseñamos, procuramos y construimos soluciones eléctricas de media y baja tensión para la industria que no puede darse el lujo de fallar: mallas a tierra, tableros, corrección de factor de potencia y proyectos de alta exigencia técnica.",
    image: "/assets/obreros_caja.webp",
  },
  {
    tag: "Proyecto Icono — Metro de Quito",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-3.5 h-3.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="14" rx="4" />
        <path d="M4 13h16M8 21l1.5-4M16 21l-1.5-4M8 8h.01M16 8h.01" />
      </svg>
    ),
    title: (
      <>
        3 años construyendo la <em>columna eléctrica</em> del Metro de Quito.
      </>
    ),
    lead: "Sistemas de puesta a tierra, acometidas de socorro 25kV y tableros de transferencia automática en las 15 estaciones, bajo estándares europeos de ACCIONA España.",
    image: "/assets/obreros_caja.webp",
  },
  {
    tag: "Confían en nosotros",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-3.5 h-3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21V10l5 3V9l5 3V6l5 3v12z" />
        <path d="M3 21h18" />
      </svg>
    ),
    title: "Arca Continental, Ferrero, Aymesa, Sherwin Williams y más.",
    lead: "Más de $6.6 millones de dólares en proyectos ejecutados en sectores petroquímico, automotriz, alimenticio, cementero y de infraestructura urbana.",
    image: "/assets/obreros_caja.webp",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel
        slides={slides}
        ctas={
          <div className="btn-row">
            <Link href="/servicios" className="btn btn-primary">
              Ver Servicios
            </Link>
            <Link href="/productos" className="btn btn-outline">
              Ver Productos
            </Link>
          </div>
        }
      />

      <div className="stats-bar">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-7">
          <StatCounter countTo={18} prefix="+" label="Años de experiencia" />
          <StatCounter countTo={6.6} decimals={1} prefix="$" suffixAccent="M+" label="USD en proyectos ejecutados" />
          <StatCounter countTo={16} suffixAccent="+" label="Clientes industriales" />
          <StatCounter countTo={15} label="Estaciones Metro de Quito" />
        </div>
      </div>

      <section>
        <div className="container split">
          <Reveal>
            <IndustrialPlate
              minHeight={420}
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.4}>
                  <path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z" fill="rgba(255,255,255,0.14)" />
                </svg>
              }
            />
          </Reveal>
          <div>
            <div className="eyebrow">Quiénes somos</div>
            <h2>Usamos el ingenio para convertir sus expectativas en realidades.</h2>
            <p className="lead">
              Trabajamos con soluciones eléctricas basadas en eficiencia energética, atadas al más
              alto sentido de responsabilidad. Para nosotros no se trata de ser los más grandes,
              se trata de trabajar junto a nuestros clientes para ser los mejores.
            </p>
            <div className="values-grid grid-cols-2 mt-6">
              <Reveal delay={0} className="value-pill">
                <h4>Honestidad</h4>
                <p>Cumplimos con lo que ofrecemos.</p>
              </Reveal>
              <Reveal delay={1} className="value-pill">
                <h4>Calidad</h4>
                <p>Impulsamos la competitividad e innovación.</p>
              </Reveal>
              <Reveal delay={2} className="value-pill">
                <h4>Entrega</h4>
                <p>Trabajamos con pasión.</p>
              </Reveal>
              <Reveal delay={3} className="value-pill">
                <h4>Responsabilidad</h4>
                <p>Asumimos las consecuencias de cada decisión.</p>
              </Reveal>
            </div>
            <div className="btn-row">
              <Link href="/quienes-somos" className="btn btn-blue">
                Conocer más
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray">
        <div className="container">
          <div className="eyebrow">Lo que hacemos</div>
          <h2 className="max-w-[640px]">Servicios por los que nos destacamos</h2>
          <p className="lead">
            Especialistas en los sistemas eléctricos más exigentes de la industria: desde la
            puesta a tierra hasta la media tensión.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 mt-10">
            <Reveal delay={0} className="service-card">
              <span className="num">01</span>
              <h3>Sistemas de Mallas a Tierra</h3>
              <p>
                Diseño, suministro y montaje de sistemas de puesta a tierra bajo estándares
                internacionales, con certificación mediante equipo de medición toque y paso.
              </p>
            </Reveal>
            <Reveal delay={1} className="service-card">
              <span className="num">02</span>
              <h3>Tableros Eléctricos y Banco de Condensadores</h3>
              <p>
                Fabricación e instalación de tableros MCC, de transferencia automática y bancos
                de condensadores para optimizar su sistema eléctrico.
              </p>
            </Reveal>
            <Reveal delay={2} className="service-card">
              <span className="num">03</span>
              <h3>Corrección de Factor de Potencia</h3>
              <p>
                Evite multas por bajo factor de potencia con soluciones de compensación reactiva
                a la medida de su planta.
              </p>
            </Reveal>
            <Reveal delay={3} className="service-card">
              <span className="num">04</span>
              <h3>Proyectos de Media Tensión</h3>
              <p>
                Ingeniería, procura y construcción de celdas, acometidas y redes de media tensión
                con personal calificado.
              </p>
            </Reveal>
          </div>
          <div className="btn-row">
            <Link href="/servicios" className="btn btn-primary">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="eyebrow">Lo que vendemos</div>
          <h2 className="max-w-[640px]">Productos y marcas por las que nos destacamos</h2>
          <p className="lead">
            Representamos y comercializamos marcas líderes a nivel mundial en cables,
            automatización, medición y corrección de energía.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-7 mt-10">
            <Reveal delay={0} className="card featured">
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6}>
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <h3>Ducto de Barras — WETOWN</h3>
              <p>Distribución de energía en alta densidad para plantas industriales. Nuestra línea insignia.</p>
              <span className="tag">Ver catálogo →</span>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-7">
              <Reveal delay={1} className="card featured">
                <div className="icon-box">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6}>
                    <path d="M4 8h16M4 16h16M8 4v16M16 4v16" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Cables Eléctricos Especiales</h3>
                <p>Instrumentación, armado, VFD y control. Marcas Okonite, Southwire, Nexans y General Cable.</p>
                <span className="tag">Ver catálogo →</span>
              </Reveal>
              <Reveal delay={2} className="card featured">
                <div className="icon-box">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6}>
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v4l3 2" />
                  </svg>
                </div>
                <h3>Instrumentos de Medición — FLUKE</h3>
                <p>Equipos de precisión para diagnóstico, mantenimiento y puesta en marcha eléctrica.</p>
                <span className="tag">Ver catálogo →</span>
              </Reveal>
            </div>
          </div>
          <div className="btn-row">
            <Link href="/productos" className="btn btn-blue">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

      <div className="brand-strip">
        <div className="container">
          <div className="brand-track">
            {["OKONITE", "SIEMENS", "FLUKE", "WETOWN", "CIRCUTOR", "NEXANS", "GENERAL CABLE"].map((brand) => (
              <span key={brand} className="brand-pill">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-navy">
        <div className="container split reverse">
          <Reveal>
            <IndustrialPlate
              minHeight={380}
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
                  <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                </svg>
              }
            />
          </Reveal>
          <div>
            <div className="eyebrow">Proyecto icono</div>
            <h2>Metro de Quito — 3 años de trabajo continuo</h2>
            <p>
              Nuestro esfuerzo en el corazón de los quiteños: armado y montaje del sistema de
              puesta a tierra (SPT) en diversas estaciones y pozos, suministro e instalación de
              acometidas eléctricas de socorro 25kV y tableros de transferencia automática en las
              15 estaciones del Metro de Quito, bajo diseños y estándares europeos de ACCIONA
              España.
            </p>
            <ul className="spec-list grid-cols-1">
              <li>Sistema de puesta a tierra en estaciones y pozos</li>
              <li>Acometidas de socorro 25kV en las 15 estaciones</li>
              <li>Tableros de transferencia automática por estación</li>
              <li>Certificación mediante equipo de medición toque y paso (Metrel)</li>
            </ul>
            <div className="btn-row">
              <Link href="/proyectos" className="btn btn-outline">
                Ver caso completo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="eyebrow">Qué nos hace diferentes</div>
          <h2 className="max-w-[640px]">Apoyo paso a paso, desde el diseño hasta la puesta en marcha</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 process-grid mt-10">
            <Reveal delay={0} className="process-step">
              <h4>Ingeniería</h4>
              <p>Inspección y elaboración de ingeniería básica y de detalle.</p>
            </Reveal>
            <Reveal delay={1} className="process-step">
              <h4>Procura y construcción</h4>
              <p>Altos estándares de calidad ambiental y de seguridad, con sello de garantía INGELPOWER.</p>
            </Reveal>
            <Reveal delay={2} className="process-step">
              <h4>Permisos</h4>
              <p>Aprobación de permisos para proyectos ante empresas eléctricas.</p>
            </Reveal>
            <Reveal delay={3} className="process-step">
              <h4>Puesta en marcha</h4>
              <p>Entrega de Dossier de Calidad en base a normativas constructivas.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>¿Listo para un proyecto que sí funcione?</h2>
              <p>Hablemos de su próximo sistema eléctrico o requerimiento de suministro industrial.</p>
            </div>
            <Link href="/contacto" className="btn btn-outline">
              Contáctanos ahora
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
