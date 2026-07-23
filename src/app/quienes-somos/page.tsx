import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IndustrialPlate } from "@/components/industrial-plate";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Conozca a INGELPOWER: propósito, misión, visión, valores y el proceso de apoyo paso a paso que garantiza la calidad de cada proyecto eléctrico.",
};

export default function QuienesSomosPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link> / <span>Quiénes Somos</span>
          </div>
          <h1>Usamos el ingenio para convertir sus expectativas en realidades</h1>
          <p className="lead text-[#DCE6F6]">Y que la experiencia de trabajar con nosotros sea inolvidable.</p>
        </div>
      </div>

      <section>
        <div className="container split">
          <div>
            <div className="eyebrow">Nuestro propósito</div>
            <h2>Convertir expectativas en realidades</h2>
            <p className="lead">
              Usar nuestra imaginación para convertir sus expectativas en realidades y que la
              experiencia al trabajar con nosotros sea inolvidable.
            </p>
          </div>
          <Reveal>
            <IndustrialPlate minHeight={320} image="/assets/quienes-proposito.webp" imageAlt="Nuestro propósito" />
          </Reveal>
        </div>
      </section>

      <section className="bg-gray">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-7">
          <Reveal delay={0} className="card">
            <div className="eyebrow">Nuestra misión</div>
            <p className="text-[1.05rem] text-ink-800">
              Utilizamos el ingenio para generar soluciones eléctricas basadas en la eficiencia
              energética, que promuevan la tranquilidad y satisfacción de nuestros clientes. Para
              nosotros la pasión debe estar atada al más alto sentido de responsabilidad, esto nos
              permite ofrecer resultados que superan las expectativas.
            </p>
          </Reveal>
          <Reveal delay={1} className="card">
            <div className="eyebrow">Nuestra visión</div>
            <p className="text-[1.05rem] text-ink-800">
              Para nosotros no se trata de ser los más grandes, se trata de trabajar juntos con
              nuestros clientes para ser los mejores.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="eyebrow">Nuestros valores</div>
          <h2 className="max-w-[640px]">Los principios que guían cada proyecto</h2>
          <div className="values-grid mt-9">
            {[
              ["Respeto", "Practicamos un trato respetuoso."],
              ["Honestidad", "Cumplimos con lo que ofrecemos."],
              ["Calidad", "Impulsamos la competitividad e innovación."],
              ["Verdad", "Inspiramos a hacer lo correcto."],
              ["Entrega", "Trabajamos con pasión."],
              ["Responsabilidad", "Tomamos decisiones y asumimos consecuencias."],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={i} className="value-pill">
                <h4>{title}</h4>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="container">
          <div className="eyebrow">Qué nos hace diferentes</div>
          <h2>Apoyo paso a paso, en cada etapa de su proyecto</h2>
          <p className="lead">Le acompañamos desde el diseño inicial hasta la puesta en marcha de su proyecto.</p>
          <Reveal>
            <IndustrialPlate
              minHeight={240}
              className="mt-9"
              image="/assets/imagen_apoyo_proyecto.webp"
              imageAlt="Apoyo paso a paso en cada etapa del proyecto"
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 process-grid mt-10">
            <Reveal delay={0} className="process-step">
              <h4>Ingeniería</h4>
              <p>Inspección y elaboración de ingeniería básica y de detalle.</p>
            </Reveal>
            <Reveal delay={1} className="process-step">
              <h4>Procura y construcción</h4>
              <p>Cumpliendo altos estándares de calidad, ambientales y de seguridad, con sello de garantía INGELPOWER.</p>
            </Reveal>
            <Reveal delay={2} className="process-step">
              <h4>Permisos</h4>
              <p>Aprobación de permisos para proyectos con empresas eléctricas.</p>
            </Reveal>
            <Reveal delay={3} className="process-step">
              <h4>Dossier de calidad</h4>
              <p>Puesta en marcha y entrega de Dossier de Calidad en base a normativas constructivas.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.2fr] gap-7">
          <Reveal delay={0} className="card overflow-hidden">
            <div className="relative -mx-8 -mt-8 mb-5 h-40">
              <Image src="/assets/quienes-asistencia-tecnica.webp" alt="Asistencia en todo momento" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6}>
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                <path d="M12 8v4l3 2" />
              </svg>
            </div>
            <h3>Asistencia en todo momento</h3>
            <p>
              Un compromiso sin límites: nuestro equipo estará dispuesto a realizar apoyo técnico
              en línea cuando lo necesite, mucho más allá de la ejecución del proyecto.
            </p>
          </Reveal>
          <Reveal delay={1} className="card overflow-hidden">
            <div className="relative -mx-8 -mt-8 mb-5 h-40">
              <Image src="/assets/quienes-expedientes.webp" alt="Entrega de expedientes" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6}>
                <path d="M4 4h16v16H4z" />
                <path d="M8 8h8M8 12h8M8 16h5" />
              </svg>
            </div>
            <h3>Entrega de expedientes</h3>
            <p>
              Entrega de un Dossier de Calidad debidamente codificado que incluye manuales,
              estudios, catálogos, planos, informes y registros.
            </p>
          </Reveal>
          <Reveal delay={2} className="card featured overflow-hidden">
            <div className="relative -mx-8 -mt-8 mb-5 h-40">
              <Image src="/assets/quienes-garantia-calidad.webp" alt="Garantía de calidad" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6}>
                <path d="M12 2 3 7v6c0 5 4 8.5 9 9 5-.5 9-4 9-9V7l-9-5z" />
              </svg>
            </div>
            <h3>Garantía de calidad</h3>
            <p>
              Programa de certificados en servicio técnico y equipos/materiales respaldados por
              nuestras marcas hasta por 18 meses.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-gray section-tight">
        <div className="container split reverse">
          <Reveal>
            <IndustrialPlate minHeight={280} image="/assets/quienes-capacitacion.webp" imageAlt="Charlas de capacitación" />
          </Reveal>
          <div>
            <div className="eyebrow">Charlas de capacitación</div>
            <h2>Conocimiento que garantiza el óptimo funcionamiento de su proyecto</h2>
            <p className="lead">
              Charlas de capacitación del funcionamiento de los sistemas implementados, antes,
              durante y después de la puesta en marcha, para asegurar que su equipo obtenga el
              conocimiento necesario.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Para empezar un gran proyecto hace falta valentía.</h2>
              <p>Para terminarlo, hace falta perseverancia. Hablemos de su próximo proyecto.</p>
            </div>
            <Link href="/contacto" className="btn btn-outline">
              Contáctanos
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
