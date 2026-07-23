import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IndustrialPlate } from "@/components/industrial-plate";
import { StatCounter } from "@/components/stat-counter";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Proyectos y Experiencia",
  description:
    "Proyectos emblemáticos de INGELPOWER: Metro de Quito, Sherwin Williams, Aymesa, Ferrero, UCEM y más. Más de $10.0 millones de dólares en proyectos eléctricos ejecutados en Ecuador.",
};

const projects = [
  {
    sector: "Industria petroquímica",
    name: "Sherwin Williams (Pinturas Cóndor)",
    text: "Sistema de iluminación completa y montajes electromecánicos bajo normativa Clase 1 División 1. Tableros MCC 220V SIEMENS.",
    amount: "$800.000",
    image: "/assets/proyecto-sherwin-williams.webp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <path d="M4 21V9l8-6 8 6v12" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    sector: "Energía renovable",
    name: "Gas Green",
    text: "Automatización y mejoramiento de sistema SCADA para planta de generación de 5 MVA con gas natural / biogás.",
    amount: "$370.000",
    image: "/assets/proyecto-gas-green.webp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18" />
      </svg>
    ),
  },
  {
    sector: "Industria del acero",
    name: "Ideal Alambrec",
    text: "Montaje de acometida de transformador 500 kVA y suministro/instalación de tablero 3WL de 2000 A.",
    amount: "$70.000",
    image: "/assets/proyecto-ideal-alambrec.webp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 4v16M16 4v16" />
      </svg>
    ),
  },
  {
    sector: "Industria cementera",
    name: "UCEM",
    text: "Suministro, instalación y puesta en marcha de un variador de medio voltaje de 300 kW a 4.16 kV.",
    amount: "$300.000",
    image: "/assets/proyecto-ucem.webp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <path d="M3 21h18M6 21V9l3-3v15M13 21V5l3-3v19" />
      </svg>
    ),
  },
  {
    sector: "Industria automotriz",
    name: "Aymesa",
    text: "Fabricación y montaje del sistema eléctrico de la celda de soldadura para el modelo KIA Sportage.",
    amount: "$280.000",
    image: "/assets/proyecto-aymesa.webp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M5 17V6h10l4 5v6" />
      </svg>
    ),
  },
  {
    sector: "Industria alimenticia",
    name: "Ferrero del Ecuador",
    text: "Reubicación de transformador de 750 kVA. Suministro y montaje de TDP, centros de carga y acometidas subterráneas.",
    amount: "$98.000",
    image: "/assets/proyecto-ferrero.webp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <path d="M12 3c3 3 5 6 5 9a5 5 0 0 1-10 0c0-3 2-6 5-9z" />
      </svg>
    ),
  },
  {
    sector: "Industria papelera",
    name: "Familia Sancela",
    text: "Diseño y montaje del sistema eléctrico Flat Pack para la planta de producción de la papelera.",
    amount: "$180.000",
    image: "/assets/proyecto-familia-sancela.webp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <rect x="5" y="3" width="14" height="18" rx="1.5" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    ),
  },
];

const experienceTable = [
  ["Consorcio Línea 1 Metro de Quito", "Infraestructura urbana", "Sistema de mallas a tierra + acometidas de socorro 25kV", "$1.620.181,67"],
  ["Consorcio Línea 1 Metro de Quito", "Infraestructura urbana", "Tableros de transferencia automática (15 estaciones)", "$171.126,07"],
  ["Sherwin Williams (Pinturas Cóndor)", "Petroquímica", "Iluminación anti-explosión + tableros MCC", "$800.000,00"],
  ["Gasgreen", "Energía renovable", "Cableado de media tensión y SCADA", "$370.000,00"],
  ["Arca Continental (Coca-Cola)", "Bebidas", "Celdas de media tensión 25kV", "$360.000,00"],
  ["Aymesa (KIA Motors)", "Automotriz", "Celda de soldadura Sportage", "$280.000,00"],
  ["Solucionar", "Centros de salud", "Tableros y celdas de media tensión", "$255.414,74"],
  ["Consorcio Peñaherrera-Bravo", "Centros de salud", "Sistemas eléctricos y red de medio voltaje", "$240.046,24"],
  ["Constructora Vasco Cedeño", "Espacio público", "Parque Guayaquil II Etapa", "$233.033,07"],
  ["Constructora Vasco Cedeño", "Espacio público", "Parque Sesquicentenario", "$217.000,00"],
  ["Familia Sancela", "Papelera", "Sistema eléctrico Flat Pack", "$180.000,00"],
  ["Royal Flowers", "Floricultura", "Diseño y distribución de media/baja tensión", "$140.000,00"],
  ["Obraciv Cía. Ltda.", "Centros de salud", "Red de medio voltaje Jatumpamba", "$105.956,89"],
  ["Montajes y Mantenimientos Eléctricos", "Media tensión", "Celda de media tensión NEX 24kV", "$100.000,00"],
  ["Ferrero del Ecuador", "Alimenticia", "Soterramiento y reubicación de transformador", "$98.000,00"],
  ["Enkador", "Textil", "Celdas de media tensión", "$90.000,00"],
  ["Bopp del Ecuador", "Plásticos", "Programación de reconectador Schneider", "$5.000,00"],
  ["Aeropuerto Fco. de Orellana (Coca)", "Infraestructura aeroportuaria", "Red eléctrica de media y baja tensión", "$1.348.879,86"],
];

export default function ProyectosPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> / <span>Proyectos</span>
          </div>
          <h1>Proyectos emblemáticos y nuestra experiencia</h1>
          <p className="lead text-[#DCE6F6] max-w-[660px]">
            Hemos trabajado en sectores petroquímico, automotriz, alimenticio, papelero,
            cementero, de infraestructura urbana y aeroportuaria, en baja y media tensión.
          </p>
        </div>
      </div>

      <div className="stats-bar">
        <div className="container grid grid-cols-1 sm:grid-cols-3 gap-7">
          <StatCounter countTo={10.0} decimals={1} prefix="$" suffixAccent="M+" label="USD en proyectos ejecutados" />
          <StatCounter countTo={100} label="Contratos documentados" />
          <StatCounter countTo={18} prefix="+" label="Años de experiencia" />
        </div>
      </div>

      <section>
        <div className="container split">
          <div>
            <div className="eyebrow">Proyecto icono</div>
            <h2>Metro de Quito — nuestro esfuerzo en el corazón de los quiteños</h2>
            <p className="lead">
              3 años de trabajo continuo con el Consorcio Línea 1 Metro de Quito (ACCIONA), bajo
              diseños y estándares europeos.
            </p>
            <ul className="spec-list grid-cols-1">
              <li>Armado y montaje del sistema de mallas a tierra (SPT) en diversas estaciones y pozos</li>
              <li>Suministro e instalación de acometidas eléctricas de socorro 25kV en las 15 estaciones</li>
              <li>Provisión de tableros de transferencia automática para las 15 estaciones</li>
              <li>Certificación del óptimo funcionamiento del SPT con equipo de medición toque y paso (Metrel)</li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6.5">
              <div className="card p-5">
                <div className="eyebrow mb-1.5">SPT + Acometidas de socorro</div>
                <div className="font-display font-extrabold text-2xl text-blue-700">$1.620.181,67</div>
              </div>
              <div className="card p-5">
                <div className="eyebrow mb-1.5">Tableros de transferencia</div>
                <div className="font-display font-extrabold text-2xl text-blue-700">$171.126,07</div>
              </div>
            </div>
          </div>
          <Reveal>
            <IndustrialPlate minHeight={420} image="/assets/proyecto-metro-destacado.webp" imageAlt="Metro de Quito" />
          </Reveal>
        </div>
      </section>

      <section className="bg-gray">
        <div className="container">
          <div className="eyebrow">Proyectos emblemáticos</div>
          <h2 className="max-w-[640px]">Casos que representan nuestra forma de trabajar</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-9">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i} className="project-card">
                <div className="project-media industrial-plate">
                  <Image src={project.image} alt={project.name} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="project-body">
                  <div className="sector">{project.sector}</div>
                  <h3>{project.name}</h3>
                  <p className="text-[.9rem]">{project.text}</p>
                  <div className="amount">
                    <span>Monto invertido</span>
                    <strong>{project.amount}</strong>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="eyebrow">Nuestra experiencia</div>
          <h2 className="max-w-[640px]">Clientes y montos de inversión documentados</h2>
          <p className="lead">
            A continuación, un resumen de los proyectos en los que hemos trabajado, con el
            alcance certificado por cada cliente.
          </p>

          <div className="table-wrap mt-7.5">
            <table className="exp-table">
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Sector</th>
                  <th>Alcance</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                {experienceTable.map((row) => (
                  <tr key={row[0] + row[2]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td className="amount">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="form-note mt-4">
            Montos según certificaciones y contratos suscritos con cada cliente. Documentación
            disponible bajo solicitud.
          </p>
        </div>
      </section>

      <div className="brand-strip">
        <div className="container">
          <div className="brand-track">
            {["ARCA CONTINENTAL", "SHERWIN WILLIAMS", "AYMESA", "FERRERO", "ENKADOR", "METRO DE QUITO", "FAMILIA"].map(
              (brand) => (
                <span key={brand} className="brand-pill">
                  {brand}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <section className="section-tight">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Su próximo proyecto puede ser el siguiente caso de éxito.</h2>
              <p>Cuéntenos qué necesita y armemos juntos la propuesta técnica.</p>
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
