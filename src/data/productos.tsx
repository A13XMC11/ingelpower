import type { ReactNode } from "react";

export interface ProductoBrand {
  name: string;
  important?: boolean;
}

export interface ProductoSubItem {
  slug: string;
  name: string;
  summary: string;
  description: string;
  applications: string[];
  image: string;
  imageAlt: string;
}

export interface ProductoItem {
  slug: string;
  title: string;
  flag?: string;
  summary: string;
  lead: string;
  pitch?: string;
  specs?: string[];
  applications?: string[];
  items?: ProductoSubItem[];
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
        slug: "instrumentacion-blindado",
        name: "Cable de Instrumentación Blindado",
        summary: "Blindaje electromagnético para señales limpias en plantas con alto ruido eléctrico.",
        description:
          "Diseñado para transmisión de señales analógicas y digitales en entornos industriales con alto ruido eléctrico. Cuenta con blindaje electromagnético (trenza o foil de aluminio) y par trenzado para cancelar interferencias, evitando lecturas erráticas en sus lazos de control.",
        applications: [
          "Conexión de sensores y transmisores de proceso (presión, nivel, temperatura, flujo)",
          "Cableado de entradas y salidas analógicas/digitales hacia PLC",
          "Tableros de control e instrumentación en plantas industriales",
        ],
        image: "/assets/producto-cables-especiales.webp",
        imageAlt: "Cable de instrumentación blindado",
      },
      {
        slug: "armado-subterraneo",
        name: "Cable Armado para Tendidos Subterráneos",
        summary: "Armadura de acero galvanizado que protege contra aplastamiento, humedad y roedores.",
        description:
          "Construido con armadura de acero galvanizado que lo protege contra aplastamiento mecánico, humedad y roedores. Permite instalación directamente enterrado o en ductos sin protección adicional, reduciendo costos de obra civil.",
        applications: [
          "Acometidas eléctricas exteriores enterradas",
          "Redes de distribución en plantas industriales",
          "Alimentadores principales entre subestaciones y tableros",
        ],
        image: "/assets/producto-cables-especiales.webp",
        imageAlt: "Cable armado para tendido subterráneo",
      },
      {
        slug: "vfd-variadores",
        name: "Cable VFD para Variadores de Frecuencia",
        summary: "Aislamiento reforzado y blindaje simétrico para soportar los picos de un variador.",
        description:
          "Diseñado específicamente para soportar los pulsos de alta frecuencia y los picos de tensión (dV/dt) que generan los variadores de velocidad (VFD). Posee aislamiento reforzado XLPE o EPR y blindaje simétrico de tres conductores de tierra para prevenir interferencias y proteger el devanado del motor.",
        applications: [
          "Alimentación de motores controlados por variadores de frecuencia",
          "Instalaciones con alta interferencia electromagnética",
          "Protección del devanado del motor frente a picos de tensión",
        ],
        image: "/assets/producto-cables-especiales.webp",
        imageAlt: "Cable VFD para variadores de frecuencia",
      },
      {
        slug: "control-multiconductor",
        name: "Cable de Control Multiconductor",
        summary: "De 2 a 37 pares para circuitos de mando, señalización y automatización.",
        description:
          "Múltiples conductores (desde 2 hasta 37 pares) para circuitos de mando, señalización y automatización. Resistente a aceites, compuestos químicos industriales y abrasión mecánica.",
        applications: [
          "Tableros MCC y sistemas de automatización",
          "Mando y señalización de maquinaria industrial",
          "Líneas de producción con múltiples puntos de control",
        ],
        image: "/assets/producto-cables-especiales.webp",
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
    pitch:
      "Lleve el control de su planta a otro nivel: visibilidad total y respuesta inmediata ante cualquier falla. Cuéntenos su proceso y le proponemos la solución.",
    specs: [
      "Programación de PLC Siemens S7-300/400/1200/1500 para control de procesos",
      "Implementación de SCADA con visualización en tiempo real y alarmas remotas",
      "Integración de variadores de frecuencia y variadores de medio voltaje",
      "Tableros MCC con arrancadores suaves, guardamotores y comunicación Profibus/Profinet",
      "Comisionamiento, pruebas FAT/SAT y capacitación al personal de operación",
    ],
    applications: [
      "Control de procesos biológicos variables en plantas de biogás y tratamiento de aguas",
      "Coordinación de estaciones robotizadas en líneas de producción automotriz",
      "Supervisión remota de bombeo y redes de infraestructura urbana desde una sala de control",
      "Modernización de tableros de control obsoletos sin detener la producción existente",
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
    lead: "Un diagnóstico incorrecto puede costar semanas de parada o una multa regulatoria. Comercializamos y utilizamos instrumentos FLUKE — la marca de referencia mundial en medición eléctrica — para certificar sistemas de mallas a tierra, analizar la calidad de energía de su red y detectar fallas antes de que se conviertan en averías. Los mismos equipos que usamos en nuestros proyectos están disponibles para su planta.",
    pitch:
      "Diagnostique, certifique y prevenga fallas con la misma tecnología FLUKE que usamos en nuestros proyectos. Cuéntenos qué necesita medir y le cotizamos el equipo exacto.",
    specs: [
      "Telurómetro de cuatro hilos para medición de resistividad del suelo (método Wenner)",
      "Medidor de tensiones de toque y paso para certificación de SPT bajo IEEE 80",
      "Pinzas amperimétricas y multímetros de categoría CAT IV para trabajo en media tensión",
      "Analizadores de calidad de energía para registro de armónicos, flicker y factor de potencia",
      "Cámara termográfica para mantenimiento predictivo de tableros y conexiones eléctricas",
    ],
    applications: [
      "Certificación anual de sistemas de mallas a tierra exigida en subestaciones y plantas industriales",
      "Diagnóstico de fallas intermitentes en tableros de distribución antes de que causen una parada",
      "Auditorías de calidad de energía para sustentar reclamos o evitar penalizaciones de la empresa eléctrica",
      "Rutinas de mantenimiento predictivo con termografía durante paradas de planta programadas",
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
    pitch:
      "Distribuya más energía en menos espacio y con menor pérdida. Descubra por qué WETOWN es nuestra línea insignia y pida una propuesta a la medida de su planta.",
    specs: [
      "Capacidad desde 100A hasta 6300A en configuraciones de baja y media tensión",
      "Barras de cobre electrolítico o aluminio con aislamiento al vacío o resina epoxi",
      "Caída de tensión hasta 60% menor que cableado equivalente en bandejas",
      "Sistema modular: ampliaciones sin parar la planta ni rehacer instalaciones",
      "Certificación IEC 61439 y UL 857; grado de protección IP54/IP65 disponible",
      "Ideal para plantas industriales, centros de datos y edificios de alta densidad de carga",
    ],
    applications: [
      "Distribución de energía en centros de datos con alta densidad de carga por rack",
      "Alimentación de líneas de producción que se reconfiguran o amplían con frecuencia",
      "Reemplazo de bandejas de cable saturadas durante la ampliación de una planta existente",
      "Distribución vertical en edificios de gran altura donde el espacio de ductos es limitado",
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
    pitch:
      "Corrija el factor de potencia en milisegundos y evite multas, sin condensadores que desgastar. Solicite un dimensionamiento gratuito para su planta.",
    specs: [
      "Respuesta dinámica < 20ms: corrige antes de que la empresa eléctrica registre la caída",
      "Rango de compensación continuo de 0 a 100% sin saltos ni transitorios",
      "Sin riesgo de resonancia con la red: apto para plantas con variadores de frecuencia",
      "Función adicional de filtrado de armónicos de orden bajo (3°, 5°, 7°)",
      "Comunicación Modbus/RS-485 para integración con SCADA y monitoreo remoto",
      "Disponible de 25 kVAR a 600 kVAR en módulos apilables",
    ],
    applications: [
      "Plantas con motores grandes de arranque frecuente, como compresores o trituradoras",
      "Líneas con hornos de inducción o equipos de soldadura que generan fluctuaciones bruscas de carga",
      "Instalaciones penalizadas por bajo factor de potencia en la facturación eléctrica",
      "Plantas con variadores de frecuencia, donde un banco de condensadores tradicional arriesga resonancia",
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
    pitch:
      "Proteja sus equipos y cumpla la norma eliminando armónicos en tiempo real. Pida un diagnóstico de calidad de energía para su instalación.",
    specs: [
      "Filtrado activo hasta el armónico 50°, con prioridad programable por orden",
      "THD-I reducido por debajo del 5% según IEEE 519 y EN 61000-3-12",
      "Tiempo de respuesta < 1 ciclo de red (< 20ms a 60Hz)",
      "Función simultánea de compensación de reactivos y corrección de desequilibrios de fase",
      "Modular y escalable: varios equipos en paralelo para mayor capacidad",
      "Comunicación Modbus para monitoreo de THD, potencia activa y reactiva en tiempo real",
    ],
    applications: [
      "Centros de datos y hospitales con UPS y cargas críticas sensibles a la distorsión de la red",
      "Plantas con múltiples variadores de frecuencia que sobrecalientan transformadores y disparan protecciones",
      "Cumplimiento de límites de THD exigidos por la empresa eléctrica o por contrato con el cliente final",
      "Protección de bancos de condensadores existentes frente al riesgo de resonancia armónica",
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

export function getProductoSubItem(
  productoSlug: string,
  itemSlug: string
): { producto: ProductoItem; item: ProductoSubItem } | undefined {
  const producto = getProducto(productoSlug);
  const item = producto?.items?.find((i) => i.slug === itemSlug);
  if (!producto || !item) return undefined;
  return { producto, item };
}
