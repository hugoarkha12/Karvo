// Diccionario base. `en.ts` debe tener exactamente la misma forma: el tipo
// `Dictionary` se deriva de este archivo y TypeScript marca cualquier
// diferencia entre idiomas.

export const es = {
  meta: {
    title: "Karvo — Construimos las empresas del futuro",
    description:
      "Karvo es un venture studio que utiliza inteligencia artificial, tecnología, capital y talento para descubrir oportunidades y construir compañías de alto potencial en Latinoamérica.",
    ogDescription:
      "Karvo es un venture studio que descubre oportunidades, construye tecnología y crea compañías diseñadas para los mercados de la próxima generación.",
    keywords: [
      "Karvo",
      "Venture Studio",
      "México",
      "Latinoamérica",
      "Tijuana",
      "Inteligencia Artificial",
      "Startups",
      "Arkha",
    ],
  },

  common: {
    close: "Cerrar",
    prev: "Anterior",
    next: "Siguiente",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    skipToContent: "Saltar al contenido",
    home: "Karvo, inicio",
    backToTop: "Volver arriba",
  },

  nav: {
    links: [
      { label: "Tesis", href: "#tesis" },
      { label: "Cómo construimos", href: "#como-construimos" },
      { label: "Ventures", href: "#ventures" },
      { label: "Karvo AI", href: "#karvo-ai" },
      { label: "Empresas", href: "#empresas" },
    ],
    cta: "Construir",
    mobileCta: "Construir con Karvo",
  },

  hero: {
    location: "México · Latinoamérica",
    line1: "Construimos las empresas",
    line2: "del futuro.",
    subheadline:
      "Karvo es un venture studio que descubre oportunidades, construye tecnología y crea compañías diseñadas para los mercados de la próxima generación.",
    cards: [
      {
        key: "studio",
        title: "Karvo Studio",
        desc: "Identificamos oportunidades y construimos compañías desde cero.",
        href: "#studio",
      },
      {
        key: "ventures",
        title: "Karvo Ventures",
        desc: "Construimos junto a founders excepcionales con tecnología, IA y capital.",
        href: "#karvo-ventures",
      },
      {
        key: "ai",
        title: "Karvo AI",
        desc: "Llevamos la IA a empresas reales y convertimos sus fricciones en nuevas compañías.",
        href: "#karvo-ai",
      },
    ],
  },

  thesis: {
    eyebrow: "Nuestra tesis",
    headline: "Las grandes compañías comienzan con grandes oportunidades.",
    intro:
      "Creemos que las próximas grandes compañías de Latinoamérica se construirán de una manera diferente.",
    shifts: [
      {
        title: "Equipos más pequeños.",
        desc: "Equipos hiperdensos en talento ejecutan con mayor velocidad y menor fricción burocrática.",
      },
      {
        title: "Tecnología más poderosa.",
        desc: "Infraestructura moderna que permite a pocos ingenieros lograr lo que antes tomaba cientos.",
      },
      {
        title: "Inteligencia artificial desde el núcleo.",
        desc: "La IA concebida como cimiento operativo y motor de producto, no como un agregado cosmético.",
      },
      {
        title: "Experimentación más rápida.",
        desc: "Ciclos de validación e iteración reducidos drásticamente de trimestres a días.",
      },
      {
        title: "Ambición global.",
        desc: "Nacer en la frontera con mentalidad internacional y estándares técnicos mundiales.",
      },
    ],
    conclusion:
      "Karvo combina tecnología, talento, capital y conocimiento de mercado para convertir oportunidades reales en compañías.",
    equationTitle: "Karvo es la combinación de",
    equation: ["Venture Studio", "AI", "Tecnología", "Capital", "Network"],
    notTitle: "Qué no somos",
    notList: [
      "Una consultora",
      "Una agencia de IA",
      "Una aceleradora tradicional",
      "Una escuela",
      "Un VC tradicional",
    ],
  },

  method: {
    eyebrow: "Cómo construimos",
    headline: "De una oportunidad a una compañía.",
    subtitle:
      "Un proceso metódico, disciplinado e implacable para transformar hipótesis en organizaciones sostenibles.",
    steps: [
      {
        title: "Descubrir",
        desc: "Identificamos problemas, mercados y oportunidades que valen la pena construir.",
        tags: ["Exploración", "Análisis"],
      },
      {
        title: "Validar",
        desc: "Trabajamos con clientes y mercados reales para comprobar que la oportunidad existe.",
        tags: ["Evidencia directa"],
      },
      {
        title: "Construir",
        desc: "Combinamos talento, ingeniería e inteligencia artificial para crear el producto.",
        tags: ["Ingeniería", "IA"],
      },
      {
        title: "Lanzar",
        desc: "Convertimos oportunidades validadas en compañías y reunimos al equipo necesario para llevarlas adelante.",
        tags: ["Founding team", "Spinout"],
      },
      {
        title: "Escalar",
        desc: "Aportamos capital, tecnología, talento, estrategia y red para acelerar su crecimiento.",
        tags: ["Aceleración global"],
      },
    ],
  },

  ai: {
    eyebrow: "Inteligencia artificial",
    headline: "La inteligencia artificial es nuestro multiplicador.",
    intro: [
      "La IA está cambiando radicalmente la economía de construir una compañía.",
      "Permite investigar más rápido, desarrollar productos con equipos más pequeños, automatizar operaciones y experimentar a una velocidad que antes no era posible.",
    ],
    realityNote: "Karvo está construido alrededor de esta nueva realidad.",
    vectors: [
      {
        title: "Research",
        role: "Exploración y datos",
        desc: "Análisis acelerado de mercados, síntesis de normativas y detección profunda de fricciones operativas.",
      },
      {
        title: "Product",
        role: "Diseño y UX",
        desc: "Definición ágil de arquitectura funcional, generación de prototipos y pruebas de interacción continuas.",
      },
      {
        title: "Engineering",
        role: "Código y sistemas",
        desc: "Desarrollo asistido, generación automatizada de pruebas y despliegue continuo de software robusto.",
      },
      {
        title: "Operations",
        role: "Eficiencia de flujo",
        desc: "Automatización de flujos administrativos, conciliación de datos y orquestación de procesos internos.",
      },
      {
        title: "Growth",
        role: "Distribución",
        desc: "Segmentación algorítmica, experimentación en canales de adquisición y análisis de cohortes en tiempo real.",
      },
      {
        title: "Intelligence",
        role: "Decisión estratégica",
        desc: "Modelos integrados en la toma de decisiones estratégicas y monitoreo proactivo de señales de mercado.",
      },
    ],
    note: "Desplegamos herramientas y capacidades de IA validadas operativamente en producción, evitando afirmaciones especulativas.",
  },

  models: {
    eyebrow: "Dos formas de construir",
    headline: "Dos caminos. Una misma misión.",
    subtitle:
      "Diseñamos dos mecanismos complementarios para crear compañías tecnológicas de alto impacto.",
    studio: {
      badge: "Construcción interna",
      title: "Karvo Studio",
      subhead: "Construimos desde cero.",
      desc: "Identificamos oportunidades, validamos mercados y construimos nuevas compañías desde cero.",
      cta: "Conoce cómo construimos",
      highlights: [
        "Ideación y validación interna",
        "Arquitectura de software y prototipado propio",
        "Reclutamiento de co-founders operadores",
        "Capital semilla de incubación",
      ],
    },
    ventures: {
      badge: "Co-building con founders",
      title: "Karvo Ventures",
      subhead: "Construimos junto a founders excepcionales.",
      desc: "Trabajamos con emprendedores ambiciosos aportando tecnología, IA, capital, estrategia y red para construir compañías extraordinarias.",
      cta: "Aplica a Karvo",
      highlights: [
        "Acompañamiento a founders ambiciosos",
        "Inyección de capacidad técnica e IA",
        "Validación acelerada de mercado",
        "Acceso a red institucional y capital",
      ],
    },
  },

  karvoAi: {
    eyebrow: "Karvo AI",
    headline: "La transformación de empresas revela las oportunidades del futuro.",
    body: [
      "Trabajamos con empresas y PYMEs para identificar dónde la inteligencia artificial puede transformar sus operaciones, productos y modelos de negocio.",
      "Al estar cerca de empresas reales, podemos identificar problemas que se repiten en diferentes industrias y que pueden convertirse en nuevas oportunidades de negocio.",
    ],
    flowTitle: "El ciclo de descubrimiento a nuevas compañías",
    flow: [
      { name: "Empresa", desc: "Operaciones del mundo real con fricciones complejas." },
      { name: "AI Assessment", desc: "Diagnóstico profundo de viabilidad tecnológica y automatización." },
      { name: "Problema", desc: "Identificación del cuello de botella crítico y repetible." },
      { name: "Oportunidad", desc: "Validación de mercado multi-empresa e impacto económico." },
      { name: "Nueva compañía", desc: "Desarrollo y spinout de una solución tecnológica escalable." },
    ],
    note: "No somos una agencia ni cobramos horas de consultoría. Diseñamos soluciones que resuelven fricciones reales y las convertimos en compañías independientes.",
    cta: "Explora Karvo AI",
  },

  ventures: {
    eyebrow: "Ventures",
    headline: "Compañías construidas por Karvo.",
    subtitle:
      "Mostramos únicamente iniciativas y proyectos reales en desarrollo activo.",
    cta: "Construir con Karvo",
    carouselLabel: "Compañías construidas por Karvo",
    slideLabel: "{current} de {total}",
    items: [
      {
        key: "arkha",
        name: "Arkha",
        tag: "Studio",
        status: "Prototipo / Investigación",
        oneLiner: "Infraestructura financiera programable para el comercio global.",
        cta: "Conoce Arkha",
      },
      {
        key: "pipeline-validation",
        name: "Próximamente",
        tag: "Studio pipeline",
        status: "En validación",
        oneLiner: "Iniciativa en etapa de validación de mercado y arquitectura de IA.",
        cta: "",
      },
      {
        key: "pipeline-discovery",
        name: "Próximamente",
        tag: "Discovery stage",
        status: "En investigación",
        oneLiner: "Exploración de ineficiencias en operaciones transfronterizas.",
        cta: "",
      },
    ],
    mock: {
      app: "Liquidación transfronteriza",
      send: "Envías",
      receive: "Recibe",
      rate: "Tipo de cambio",
      steps: ["Fondeo", "Conversión", "Liquidación"],
      live: "En curso",
      concept: "Interfaz conceptual",
      facts: [
        { label: "Corredor", value: "MX ⇄ US" },
        { label: "Liquidación", value: "Programable" },
        { label: "Rieles", value: "B2B" },
        { label: "Estado", value: "Prototipo" },
      ],
      stealth: "Stealth",
      confidential: "Confidencial",
    },
  },

  latam: {
    eyebrow: "Latinoamérica",
    headline: "Nacidos en Latinoamérica. Construidos para el mundo.",
    body: [
      "Latinoamérica está llena de problemas enormes, mercados desatendidos y talento extraordinario.",
      "Karvo quiere construir desde aquí las compañías que puedan competir globalmente.",
    ],
    visionNote:
      "México es nuestro punto de partida. Latinoamérica es nuestro mercado. El mundo es nuestra ambición.",
    countries: [
      { name: "México", role: "Punto de partida y hub transfronterizo", tag: "HQ", core: true },
      { name: "Brasil", role: "Mayor escala de mercado regional", tag: "Mercado objetivo", core: false },
      { name: "Colombia", role: "Hub de talento dinámico y desarrollo", tag: "Mercado objetivo", core: false },
      { name: "Argentina", role: "Densidad técnica e ingeniería de clase mundial", tag: "Mercado objetivo", core: false },
      { name: "Chile", role: "Ecosistema institucional y estabilidad", tag: "Mercado objetivo", core: false },
      { name: "Perú", role: "Mercados en expansión y adopción ágil", tag: "Mercado objetivo", core: false },
    ],
    disclaimer:
      "Karvo opera desde México e interactúa con talento y mercados de la región. No afirmamos presencia física en sedes donde aún no se hayan constituido entidades operativas.",
  },

  tijuana: {
    eyebrow: "Tijuana",
    headline: "Nacidos en Tijuana. Conectados con el mundo.",
    body: [
      "Karvo nace en Tijuana, una ciudad en la frontera entre México y Estados Unidos.",
      "Desde aquí queremos construir compañías capaces de crecer primero en México, después en Latinoamérica y eventualmente competir a nivel global.",
    ],
    visionTag: "Visión del corredor binacional · Zona Río",
    imageAlt: "Espacio de trabajo con vista a Tijuana al atardecer",
    corridor: [
      {
        name: "Tijuana",
        desc: "Frontera más transitada del mundo, dinamismo industrial y conexión inmediata con California.",
      },
      {
        name: "México",
        desc: "Base de validación nacional, manufactura avanzada y adopción de tecnología corporativa.",
      },
      {
        name: "Latam",
        desc: "Expansión en economías conectadas por retos e idiomas comunes.",
      },
      {
        name: "Global",
        desc: "Soluciones de infraestructura y software con competitividad internacional.",
      },
    ],
  },

  network: {
    eyebrow: "Network",
    headline: "Las grandes compañías las construyen grandes personas.",
    body: "Construir una compañía requiere mucho más que capital. Karvo está creando una red de personas capaces de construirlas.",
    nodes: [
      { name: "Founders", role: "Emprendedores obsesionados con problemas reales." },
      { name: "Engineers", role: "Arquitectos de software y científicos de IA." },
      { name: "Operators", role: "Líderes de producto, crecimiento y ejecución táctica." },
      { name: "Investors", role: "Capital paciente con alineación a largo plazo." },
      { name: "Companies", role: "Organizaciones que aportan validación y desafíos reales." },
      { name: "Talent", role: "Profesionales de alto rendimiento en toda la región." },
      { name: "Universities", role: "Vínculos con investigación académica y jóvenes talentos." },
      { name: "Partners", role: "Ecosistema tecnológico y aliados institucionales." },
    ],
    note: "Conectamos capacidades complementarias para maximizar las probabilidades de éxito.",
  },

  founders: {
    eyebrow: "Founders",
    headline: "¿Estás construyendo algo extraordinario?",
    body: "Buscamos founders ambiciosos que estén construyendo compañías tecnológicas con potencial para transformar mercados.",
    bullets: [
      "Inyección de capacidad técnica e IA",
      "Capital inicial y acompañamiento operativo",
      "Red de distribución binacional y global",
    ],
    cta: "Aplicar a Karvo",
    meta: ["16 preguntas", "3–5 minutos", "Estricta confidencialidad"],
  },

  companies: {
    eyebrow: "Empresas",
    headline: "¿Quieres construir con IA?",
    body: "Si eres una startup, PYME o empresa establecida, podemos ayudarte a descubrir dónde la inteligencia artificial puede generar verdadero valor.",
    pills: [
      "Diagnóstico de viabilidad tecnológica",
      "Automatización de operaciones críticas",
      "Detección de productos de software derivados",
    ],
    cta: "Diagnosticar mi empresa",
  },

  finalCta: {
    eyebrow: "El futuro comienza hoy",
    headline: "La próxima gran compañía de Latinoamérica podría comenzar aquí.",
    subheadline: "Construyámosla.",
    primary: "Construir con Karvo",
    secondary: "Diagnosticar mi empresa",
  },

  footer: {
    tagline: "Construimos las empresas del futuro.",
    location: "Tijuana · México · Latinoamérica",
    columns: [
      {
        title: "Studio",
        links: [
          { label: "Nuestra tesis", href: "#tesis" },
          { label: "Cómo construimos", href: "#como-construimos" },
          { label: "Inteligencia artificial", href: "#ia" },
          { label: "Modelos de trabajo", href: "#modelos" },
        ],
      },
      {
        title: "Ventures",
        links: [
          { label: "Arkha", href: "#ventures" },
          { label: "Pipeline en validación", href: "#ventures" },
          { label: "Karvo AI", href: "#karvo-ai" },
        ],
      },
      {
        title: "Ecosistema",
        links: [
          { label: "Latinoamérica", href: "#latam" },
          { label: "Tijuana", href: "#tijuana" },
          { label: "Network", href: "#network" },
        ],
      },
    ],
    access: {
      title: "Acceso",
      founder: "Aplicar como founder",
      diagnostic: "Diagnosticar mi empresa",
    },
    rights: "Todos los derechos reservados.",
  },

  forms: {
    requiredHint: "Obligatorio",
    founder: {
      eyebrow: "Karvo Ventures",
      title: "Aplicación para founders",
      subtitle: "Evaluamos rigor técnico, claridad de problema y velocidad de ejecución.",
      groups: [
        "Datos del founder y empresa",
        "La oportunidad y el producto",
        "Etapa, tracción y equipo",
        "Capital, por qué Karvo y deck",
      ],
      fields: {
        name: { label: "Nombre completo", placeholder: "Ej. Mateo Rivera" },
        email: { label: "Email de contacto", placeholder: "mateo@startup.com" },
        linkedin: { label: "Perfil de LinkedIn", placeholder: "https://linkedin.com/in/…" },
        company: { label: "Nombre de la empresa o proyecto", placeholder: "Nombre de la empresa o proyecto" },
        website: { label: "Sitio web o demo (si existe)", placeholder: "https://tuempresa.com" },
        whatBuilding: {
          label: "¿Qué estás construyendo?",
          placeholder: "Describe en pocas oraciones la tecnología o producto…",
        },
        problemSolving: {
          label: "¿Qué problema estás resolviendo?",
          placeholder: "¿Cuál es la ineficiencia económica, operativa o estructural que estás atacando?",
        },
        whoCustomer: {
          label: "¿Quién es tu cliente?",
          placeholder: "Ej. Empresas medianas de logística en México, exportadores agrícolas…",
        },
        stage: { label: "Etapa actual", placeholder: "" },
        revenue: { label: "Ingresos (MRR / ARR actual)", placeholder: "Ej. Pre-ingresos / $5k USD MRR / $120k ARR" },
        traction: {
          label: "Tracción actual (usuarios, pilotos, etc.)",
          placeholder: "Métricas clave, pilotos en curso, cartas de intención o volumen transaccionado…",
        },
        team: {
          label: "Equipo (founders, roles clave y dedicación)",
          placeholder: "Ej. 2 co-founders técnicos tiempo completo, 1 lead comercial",
        },
        capitalRaised: { label: "Capital levantado hasta la fecha", placeholder: "Bootstrapped / $50k FF / etc." },
        capitalSought: {
          label: "Capital buscado o necesidades inmediatas",
          placeholder: "Ej. $150k – $300k USD para acelerar producto e IA",
        },
        whyKarvo: {
          label: "¿Por qué Karvo?",
          placeholder: "¿Qué valor esperas de nuestro estudio y capacidad técnica?",
        },
        pitchDeck: {
          label: "Enlace al pitch deck (Google Drive, DocSend, etc.)",
          placeholder: "https://docsend.com/… o enlace público de Google Drive",
        },
      },
      stageOptions: [
        "Idea / Conceptualización",
        "Prototipo / MVP funcional",
        "Primeros clientes / Pilotos",
        "Tracción / Crecimiento",
      ],
      submit: "Enviar aplicación",
      submitting: "Enviando aplicación…",
      successTitle: "Aplicación recibida",
      successMessage:
        "Nuestro equipo revisará tu aplicación y nos pondremos en contacto contigo si hay alineación estratégica.",
      confidentiality: "Estricta confidencialidad",
    },
    diagnostic: {
      eyebrow: "Karvo AI",
      title: "Diagnóstico Karvo AI",
      subtitle:
        "Descubramos cómo la IA puede optimizar tus procesos críticos y abrir nuevas oportunidades de negocio.",
      fields: {
        company: { label: "Nombre de la empresa", placeholder: "Nombre de la empresa u organización" },
        contact: { label: "Persona de contacto y cargo", placeholder: "Ej. Sofía Morales, COO" },
        email: { label: "Correo electrónico corporativo", placeholder: "sofia@empresa.com" },
        industry: { label: "Sector / Industria", placeholder: "Logística, manufactura, retail, servicios financieros…" },
        challenge: {
          label: "¿Qué proceso u operación presenta mayor fricción o costo?",
          placeholder: "Describe brevemente la fricción operativa, el volumen de tareas manuales o el cuello de botella a resolver…",
        },
      },
      submit: "Solicitar diagnóstico",
      submitting: "Enviando…",
      successTitle: "Solicitud recibida",
      successMessage: "Un miembro de nuestro equipo te contactará pronto.",
      confidentiality: "Confidencialidad garantizada",
    },
    arkha: {
      eyebrow: "Venture 01 · Karvo Studio",
      title: "Arkha",
      subtitle: "AI × Blockchain × Infraestructura financiera",
      statusLabel: "Estado",
      status: "Prototipo / Investigación",
      desc: "Infraestructura financiera programable para el comercio global.",
      details:
        "Arkha desarrolla rieles financieros programables diseñados específicamente para agilizar y asegurar pagos y liquidaciones en operaciones de comercio exterior entre México, Estados Unidos y América Latina.",
      facts: [
        { label: "Enfoque técnico", value: "Rieles de liquidación transfronteriza y contratos programables." },
        { label: "Corredor principal", value: "Comercio B2B entre México, Estados Unidos y América Latina." },
      ],
      footnote: "Desarrollo activo en Karvo Studio",
    },
  },

  notFound: {
    title: "Página no encontrada",
    body: "La página que buscas no existe o cambió de lugar.",
    cta: "Volver al inicio",
  },
};

export type Dictionary = typeof es;
