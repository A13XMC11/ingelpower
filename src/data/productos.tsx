import type { ReactNode } from "react";

export interface ProductoBrand {
  name: string;
  important?: boolean;
}

export interface ProductoItem {
  slug: string;
  title: string;
  flag?: string;
  summary: string;
  lead: string;
  specs?: string[];
  items?: { name: string; description: string; image: string; imageAlt: string }[];
  brands: ProductoBrand[];
  icon: ReactNode;
  image: string;
  minHeight?: number;
}

export const productos: ProductoItem[] = [
  {
    slug: "cables",
    title: "Cables Eléctricos Especiales",
    summary:
      "Cables de instrumentación, armado, VFD y control para condiciones industriales exigentes.",
    lead: "En INGELPOWER no vendemos cable genérico. Suministramos cables de ingeniería seleccionados para condiciones extremas de temperatura, vibración, ruido eléctrico y esfuerzo mecánico. Trabajamos con las marcas líderes mundiales — Okonite, Southwire, Nexans y General Cable — y asesoramos técnicamente en la selección del cable correcto para cada aplicación.",
    items: [
      {
        name: "Cable de Instrumentación Blindado",
        description:
          "Diseñado para transmisión de señales analógicas y digitales en entornos industriales con alto ruido eléctrico. Cuenta con blindaje electromagnético (trenza o foil de aluminio) y par trenzado para cancelar interferencias. Ideal para conexión de sensores, transmisores de proceso y PLC en tableros de control.",
        image: "/assets/cable-instrumentacion.webp",
        imageAlt: "Cable de instrumentación blindado",
      },
      {
        name: "Cable Armado para Tendidos Subterráneos",
        description:
          "Construido con armadura de acero galvanizado que lo protege contra aplastamiento mecánico, humedad y roedores. Permite instalación directamente enterrado o en ductos sin protección adicional. Utilizado en acometidas eléctricas exteriores, redes de distribución en plantas industriales y alimentadores principales.",
        image: "/assets/cable-armado-subterraneo.webp",
        imageAlt: "Cable armado para tendido subterráneo",
      },
      {
        name: "Cable VFD para Variadores de Frecuencia",
        description:
          "Diseñado específicamente para soportar los pulsos de alta frecuencia y los picos de tensión (dV/dt) que generan los variadores de velocidad (VFD). Posee aislamiento reforzado XLPE o EPR y blindaje simétrico de tres conductores de tierra para prevenir interferencias y proteger el devanado del motor.",
        image: "/assets/cable-vfd.webp",
        imageAlt: "Cable VFD para variadores de frecuencia",
      },
      {
        name: "Cable de Control Multiconductor",
        description:
          "Múltiples conductores (desde 2 hasta 37 pares) para circuitos de mando, señalización y automatización. Resistente a aceites, compuestos químicos industriales y abrasión mecánica. Aplicado en tableros MCC, sistemas de automatización, mando de maquinaria y líneas de producción.",
        image: "/assets/cable-control-multiconductor.webp",
        imageAlt: "Cable de control multiconductor",
      },
    ],
    brands: [
      { name: "OKONITE" },
      { name: "SOUTHWIRE" },
      { name: "NEXANS" },
      { name: "GENERAL CABLE" },
    ],
    image: "/assets/producto-cables-especiales.webp",
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <path d="M3 12c3-4 6 4 9 0s6 4 9 0" />
      </svg>
    ),
  },
  {
    slug: "automatizacion",
    title: "Automatización Industrial",
    summary:
      "Integración de PLC, SCADA, variadores y tableros MCC para convertir su planta en un sistema controlado, eficiente y sin paradas inesperadas.",
    lead: "Una planta sin automatización depende del criterio humano en cada decisión crítica. Con INGELPOWER integramos PLC Siemens, variadores de frecuencia, sistemas SCADA y tableros MCC en un solo sistema coordinado: su proceso gana visibilidad, control y la capacidad de responder antes de que ocurra una falla. Lo hemos hecho en plantas de biogás, automotrices y proyectos de infraestructura urbana.",
    specs: [
      "Programación de PLC Siemens S7-300/400/1200/1500 para control de procesos",
      "Implementación de SCADA con visualización en tiempo real y alarmas remotas",
      "Integración de variadores de frecuencia y variadores de medio voltaje",
      "Tableros MCC con arrancadores suaves, guardamotores y comunicación Profibus/Profinet",
      "Comisionamiento, pruebas FAT/SAT y capacitación al personal de operación",
    ],
    brands: [{ name: "SIEMENS" }],
    image: "/assets/producto-automatizacion.webp",
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M9 9h6v6H9z" />
        <path d="M4 9h2M4 15h2M18 9h2M18 15h2M9 4v2M15 4v2M9 18v2M15 18v2" />
      </svg>
    ),
  },
  {
    slug: "medicion",
    title: "Instrumentos de Medición",
    summary:
      "Equipos FLUKE de precisión para certificar SPT, diagnosticar fallas eléctricas y ejecutar mantenimiento predictivo con datos reales.",
    lead: "Un diagnóstico incorrecto puede costar semanas de parada o una multa regulatoria. Comercializamos y utilizamos instrumentos FLUKE — la marca de referencia mundial en medición eléctrica — para certificar sistemas de puesta a tierra, analizar la calidad de energía de su red y detectar fallas antes de que se conviertan en averías. Los mismos equipos que usamos en nuestros proyectos están disponibles para su planta.",
    specs: [
      "Telurómetro de cuatro hilos para medición de resistividad del suelo (método Wenner)",
      "Medidor de tensiones de toque y paso para certificación de SPT bajo IEEE 80",
      "Pinzas amperimétricas y multímetros de categoría CAT IV para trabajo en media tensión",
      "Analizadores de calidad de energía para registro de armónicos, flicker y factor de potencia",
      "Cámara termográfica para mantenimiento predictivo de tableros y conexiones eléctricas",
    ],
    brands: [{ name: "FLUKE" }],
    image: "/assets/producto-instrumentos-medicion.webp",
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l4 2" />
      </svg>
    ),
  },
  {
    slug: "wetown",
    title: "Ducto de Barras — WETOWN",
    flag: "Línea insignia",
    summary:
      "Sistema de distribución eléctrica de alta densidad que reemplaza bandejas de cable con menor caída de tensión, montaje más rápido y máxima flexibilidad para ampliar su planta.",
    lead: "Cuando una planta crece, el cableado convencional se convierte en un laberinto imposible de ampliar. El ducto de barras WETOWN reemplaza esa maraña por un sistema de barras modulares de cobre o aluminio encapsuladas, que distribuye grandes cargas eléctricas con pérdidas mínimas, en menos espacio y con la posibilidad de añadir tomas de derivación donde y cuando las necesite. Es nuestra línea insignia porque cambia la forma en que sus clientes piensan la distribución eléctrica.",
    specs: [
      "Capacidad desde 100A hasta 6300A en configuraciones de baja y media tensión",
      "Barras de cobre electrolítico o aluminio con aislamiento al vacío o resina epoxi",
      "Caída de tensión hasta 60% menor que cableado equivalente en bandejas",
      "Sistema modular: ampliaciones sin parar la planta ni rehacer instalaciones",
      "Certificación IEC 61439 y UL 857; grado de protección IP54/IP65 disponible",
      "Ideal para plantas industriales, centros de datos y edificios de alta densidad de carga",
    ],
    brands: [{ name: "WETOWN", important: true }],
    image: "/assets/producto-ducto-barras.webp",
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <rect x="3" y="10" width="18" height="4" rx="1" />
        <path d="M6 10V6M10 10V6M14 10V6M18 10V6M6 14v4M10 14v4M14 14v4M18 14v4" />
      </svg>
    ),
  },
  {
    slug: "svg",
    title: "SVG — Corrección de Factor de Potencia Electrónica",
    summary:
      "Compensador estático de reactivos Circutor que corrige el factor de potencia en menos de 20ms, sin condensadores físicos ni riesgo de resonancia.",
    lead: "Los bancos de condensadores tradicionales corrigen el factor de potencia en escalones fijos y con cierto retardo. Si su planta tiene cargas que cambian rápido — motores grandes, hornos, compresores — esos escalones llegan tarde y generan sobrecorrientes o incluso resonancias que dañan equipos. El SVG de Circutor es un compensador electrónico que inyecta potencia reactiva de forma continua y con respuesta inferior a 20ms, eliminando multas y protegiendo su instalación sin partes mecánicas que desgastar.",
    specs: [
      "Respuesta dinámica < 20ms: corrige antes de que la empresa eléctrica registre la caída",
      "Rango de compensación continuo de 0 a 100% sin saltos ni transitorios",
      "Sin riesgo de resonancia con la red: apto para plantas con variadores de frecuencia",
      "Función adicional de filtrado de armónicos de orden bajo (3°, 5°, 7°)",
      "Comunicación Modbus/RS-485 para integración con SCADA y monitoreo remoto",
      "Disponible de 25 kVAR a 600 kVAR en módulos apilables",
    ],
    brands: [{ name: "CIRCUTOR" }],
    image: "/assets/producto-svg.webp",
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <path d="M3 17l6-6 4 4 8-8" />
      </svg>
    ),
  },
  {
    slug: "afq",
    title: "AFQ — Filtro Activo de Armónicos",
    summary:
      "Elimina distorsiones armónicas de cargas no lineales en tiempo real, protege equipos sensibles y evita multas por THD elevado en instalaciones industriales.",
    lead: "Los variadores de frecuencia, UPS, rectificadores y equipos de electrónica de potencia inyectan corrientes armónicas a la red que sobrecalientan transformadores, disparan protecciones sin razón aparente y reducen la vida útil de motores y condensadores. El filtro activo AFQ de Circutor detecta y cancela esas distorsiones en tiempo real, en cualquier orden armónico, sin importar cuánto varíe la carga. El resultado es una red limpia, equipos que duran más y cumplimiento de la norma IEEE 519.",
    specs: [
      "Filtrado activo hasta el armónico 50°, con prioridad programable por orden",
      "THD-I reducido por debajo del 5% según IEEE 519 y EN 61000-3-12",
      "Tiempo de respuesta < 1 ciclo de red (< 20ms a 60Hz)",
      "Función simultánea de compensación de reactivos y corrección de desequilibrios de fase",
      "Modular y escalable: varios equipos en paralelo para mayor capacidad",
      "Comunicación Modbus para monitoreo de THD, potencia activa y reactiva en tiempo real",
    ],
    brands: [{ name: "CIRCUTOR" }],
    image: "/assets/producto-afq.webp",
    minHeight: 280,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.3}>
        <path d="M3 12h4l2-7 4 14 2-7h6" />
      </svg>
    ),
  },
];

export function getProducto(slug: string): ProductoItem | undefined {
  return productos.find((p) => p.slug === slug);
}
