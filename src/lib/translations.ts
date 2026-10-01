export type Language = "es" | "en";

export const SPANISH_COUNTRIES = new Set([
  "MX", "ES", "AR", "CO", "CL", "PE", "EC", "GT", "CU", "BO",
  "DO", "HN", "PY", "SV", "NI", "CR", "PA", "UY", "PR", "GQ"
]);

export interface Translations {
  nav: {
    studio: string;
    thesis: string;
    methodology: string;
    ia: string;
    karvoAi: string;
    ventures: string;
    latam: string;
    tijuana: string;
    network: string;
    founders: string;
    companies: string;
    ctaPrimary: string;
  };
  hero: {
    locationBadge: string;
    headline: string;
    headlineLine1: string;
    headlineLine2: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    smallLocation: string;
    processTitle: string;
    processSteps: {
      num: string;
      label: string;
      desc: string;
    }[];
  };
  thesis: {
    tag: string;
    headline: string;
    intro: string;
    shifts: {
      title: string;
      desc: string;
    }[];
    conclusion: string;
    equationTitle: string;
    equationFormula: string;
    notListTitle: string;
    notList: string[];
  };
  methodology: {
    tag: string;
    headline: string;
    subtitle: string;
    steps: {
      step: string;
      title: string;
      desc: string;
      badge: string;
    }[];
  };
  ia: {
    tag: string;
    headline: string;
    intro: string;
    realityNote: string;
    vectors: {
      key: string;
      title: string;
      desc: string;
      role: string;
    }[];
  };
  models: {
    tag: string;
    headline: string;
    subtitle: string;
    studio: {
      badge: string;
      title: string;
      subhead: string;
      desc: string;
      cta: string;
      highlights: string[];
    };
    ventures: {
      badge: string;
      title: string;
      subhead: string;
      desc: string;
      cta: string;
      highlights: string[];
    };
  };
  karvoAi: {
    tag: string;
    headline: string;
    body1: string;
    body2: string;
    flowTitle: string;
    flowSteps: {
      name: string;
      desc: string;
    }[];
    cta: string;
  };
  ventures: {
    tag: string;
    headline: string;
    subtitle: string;
    arkha: {
      name: string;
      tags: string;
      desc: string;
      statusLabel: string;
      statusVal: string;
      cta: string;
    };
    upcoming: {
      badge: string;
      name: string;
      desc: string;
      status: string;
    }[];
  };
  latam: {
    tag: string;
    headline: string;
    body1: string;
    body2: string;
    visionNote: string;
    countries: {
      name: string;
      role: string;
      tag: string;
    }[];
  };
  tijuana: {
    tag: string;
    headline: string;
    body1: string;
    body2: string;
    corridor: string;
    visionTag: string;
    milestones: {
      code: string;
      name: string;
      desc: string;
    }[];
  };
  network: {
    tag: string;
    headline: string;
    body: string;
    nodes: {
      name: string;
      role: string;
    }[];
  };
  founders: {
    tag: string;
    headline: string;
    body: string;
    cta: string;
    formTitle: string;
    formSubtitle: string;
    fields: {
      name: string;
      email: string;
      linkedin: string;
      company: string;
      website: string;
      whatBuilding: string;
      problemSolving: string;
      whoCustomer: string;
      stage: string;
      traction: string;
      revenue: string;
      team: string;
      capitalRaised: string;
      capitalSought: string;
      whyKarvo: string;
      pitchDeck: string;
    };
    stageOptions: string[];
    submitButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
  };
  companies: {
    tag: string;
    headline: string;
    body: string;
    cta: string;
    pills: string[];
  };
  ctaFinal: {
    tag: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    brand: string;
    tagline: string;
    location: string;
    columns: {
      title: string;
      links: { label: string; href: string }[];
    }[];
    copyright: string;
  };
  modals: {
    close: string;
    arkhaTitle: string;
    arkhaSubtitle: string;
    arkhaDetails: string;
    diagnosticTitle: string;
    diagnosticSubtitle: string;
    diagnosticCompany: string;
    diagnosticContact: string;
    diagnosticEmail: string;
    diagnosticIndustry: string;
    diagnosticChallenge: string;
    diagnosticSubmit: string;
    diagnosticSuccess: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      studio: "Studio",
      thesis: "Tesis",
      methodology: "Cómo Construimos",
      ia: "IA",
      karvoAi: "Karvo AI",
      ventures: "Ventures",
      latam: "Latinoamérica",
      tijuana: "Tijuana",
      network: "Network",
      founders: "Founders",
      companies: "Empresas",
      ctaPrimary: "Construir con Karvo →",
    },
    hero: {
      locationBadge: "MÉXICO · LATINOAMÉRICA",
      headline: "Construimos las empresas del futuro.",
      headlineLine1: "Construimos las empresas",
      headlineLine2: "del futuro.",
      subheadline:
        "Karvo es un venture studio que descubre oportunidades, construye tecnología y crea compañías diseñadas para los mercados de la próxima generación.",
      ctaPrimary: "Construir con Karvo →",
      ctaSecondary: "Conoce nuestras ventures →",
      smallLocation: "MÉXICO · LATINOAMÉRICA",
      processTitle: "PROCESO SISTÉMICO",
      processSteps: [
        {
          num: "01",
          label: "OPORTUNIDAD",
          desc: "Identificación de fricciones estructurales y mercados desatendidos.",
        },
        {
          num: "02",
          label: "TECNOLOGÍA",
          desc: "Desarrollo de software, modelos de IA y arquitectura escalable.",
        },
        {
          num: "03",
          label: "PRODUCTO",
          desc: "Validación ágil con clientes reales y refinamiento funcional.",
        },
        {
          num: "04",
          label: "COMPAÑÍA",
          desc: "Equipo fundador, gobernanza, capital y aceleración institucional.",
        },
      ],
    },
    thesis: {
      tag: "02 // NUESTRA TESIS",
      headline: "LAS GRANDES COMPAÑÍAS COMIENZAN CON GRANDES OPORTUNIDADES.",
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
      equationTitle: "KARVO ES LA COMBINACIÓN DE:",
      equationFormula:
        "Venture Studio + AI + Tecnología + Capital + Network",
      notListTitle: "QUÉ NO SOMOS:",
      notList: [
        "Una consultora",
        "Una agencia de IA",
        "Una aceleradora tradicional",
        "Una escuela",
        "Un VC tradicional",
      ],
    },
    methodology: {
      tag: "03 // CÓMO CONSTRUIMOS",
      headline: "DE UNA OPORTUNIDAD A UNA COMPAÑÍA.",
      subtitle:
        "Un proceso metódico, disciplinado e implacable para transformar hipótesis en organizaciones sostenibles.",
      steps: [
        {
          step: "01",
          title: "DESCUBRIR",
          desc: "Identificamos problemas, mercados y oportunidades que valen la pena construir.",
          badge: "EXPLORACIÓN & ANÁLISIS",
        },
        {
          step: "02",
          title: "VALIDAR",
          desc: "Trabajamos con clientes y mercados reales para comprobar que la oportunidad existe.",
          badge: "EVIDENCIA DIRECTA",
        },
        {
          step: "03",
          title: "CONSTRUIR",
          desc: "Combinamos talento, ingeniería e inteligencia artificial para crear el producto.",
          badge: "INGENIERÍA & IA",
        },
        {
          step: "04",
          title: "LANZAR",
          desc: "Convertimos oportunidades validadas en compañías y reunimos al equipo necesario para llevarlas adelante.",
          badge: "FOUNDING TEAM & SPINOUT",
        },
        {
          step: "05",
          title: "ESCALAR",
          desc: "Aportamos capital, tecnología, talento, estrategia y red para acelerar su crecimiento.",
          badge: "ACELERACIÓN GLOBAL",
        },
      ],
    },
    ia: {
      tag: "04 // INTELIGENCIA ARTIFICIAL",
      headline: "LA INTELIGENCIA ARTIFICIAL ES NUESTRO MULTIPLICADOR.",
      intro:
        "La IA está cambiando radicalmente la economía de construir una compañía.\n\nPermite investigar más rápido, desarrollar productos con equipos más pequeños, automatizar operaciones y experimentar a una velocidad que antes no era posible.",
      realityNote: "Karvo está construido alrededor de esta nueva realidad.",
      vectors: [
        {
          key: "research",
          title: "Research",
          desc: "Análisis acelerado de mercados, síntesis de normativas y detección profunda de fricciones operativas.",
          role: "Exploración & Datos",
        },
        {
          key: "product",
          title: "Product",
          desc: "Definición ágil de arquitectura funcional, generación de prototipos y pruebas de interacción continuas.",
          role: "Diseño & UX",
        },
        {
          key: "engineering",
          title: "Engineering",
          desc: "Desarrollo asistido, generación automatizada de pruebas y despliegue continuo de software robusto.",
          role: "Código & Sistemas",
        },
        {
          key: "operations",
          title: "Operations",
          desc: "Automatización de flujos administrativos, conciliación de datos y orquestación de procesos internos.",
          role: "Eficiencia de Flujo",
        },
        {
          key: "growth",
          title: "Growth",
          desc: "Segmentación algorítmica, experimentación en canales de adquisición y análisis de cohortes en tiempo real.",
          role: "Distribución",
        },
        {
          key: "intelligence",
          title: "Intelligence",
          desc: "Modelos integrados en la toma de decisiones estratégicas y monitoreo proactivo de señales de mercado.",
          role: "Decisión Estratégica",
        },
      ],
    },
    models: {
      tag: "05 // DOS FORMAS DE CONSTRUIR",
      headline: "DOS CAMINOS. UNA MISMA MISIÓN.",
      subtitle:
        "Diseñamos dos mecanismos complementarios para crear compañías tecnológicas de alto impacto.",
      studio: {
        badge: "CONSTRUCCIÓN INTERNA",
        title: "KARVO STUDIO",
        subhead: "Construimos desde cero.",
        desc: "Identificamos oportunidades, validamos mercados y construimos nuevas compañías desde cero.",
        cta: "Conoce Karvo Studio →",
        highlights: [
          "Ideación y validación interna",
          "Arquitectura de software y prototipado propio",
          "Reclutamiento de co-founders operadores",
          "Capital semilla de incubación",
        ],
      },
      ventures: {
        badge: "CO-BUILDING CON FOUNDERS",
        title: "KARVO VENTURES",
        subhead: "Construimos junto a founders excepcionales.",
        desc: "Trabajamos con emprendedores ambiciosos aportando tecnología, IA, capital, estrategia y red para construir compañías extraordinarias.",
        cta: "Aplica a Karvo →",
        highlights: [
          "Acompañamiento a founders ambiciosos",
          "Inyección de capacidad técnica e IA",
          "Validación acelerada de mercado",
          "Acceso a red institucional y capital",
        ],
      },
    },
    karvoAi: {
      tag: "06 // KARVO AI",
      headline:
        "LA TRANSFORMACIÓN DE EMPRESAS REVELA LAS OPORTUNIDADES DEL FUTURO.",
      body1:
        "Trabajamos con empresas y PYMEs para identificar dónde la inteligencia artificial puede transformar sus operaciones, productos y modelos de negocio.",
      body2:
        "Al estar cerca de empresas reales, podemos identificar problemas que se repiten en diferentes industrias y que pueden convertirse en nuevas oportunidades de negocio.",
      flowTitle: "EL CICLO DE DESCUBRIMIENTO A NUEVAS COMPAÑÍAS",
      flowSteps: [
        {
          name: "EMPRESA",
          desc: "Operaciones del mundo real con fricciones complejas.",
        },
        {
          name: "AI ASSESSMENT",
          desc: "Diagnóstico profundo de viabilidad tecnológica y automatización.",
        },
        {
          name: "PROBLEMA",
          desc: "Identificación del cuello de botella crítico y repetible.",
        },
        {
          name: "OPORTUNIDAD",
          desc: "Validación de mercado multi-empresa e impacto económico.",
        },
        {
          name: "NUEVA COMPAÑÍA",
          desc: "Desarrollo y spinout de una solución tecnológica escalable.",
        },
      ],
      cta: "Explora Karvo AI →",
    },
    ventures: {
      tag: "07 // VENTURES",
      headline: "COMPAÑÍAS CONSTRUIDAS POR KARVO.",
      subtitle:
        "Mostramos únicamente iniciativas y proyectos reales en desarrollo activo.",
      arkha: {
        name: "ARKHA",
        tags: "AI × BLOCKCHAIN × INFRAESTRUCTURA FINANCIERA",
        desc: "Infraestructura financiera programable para el comercio global.",
        statusLabel: "ESTADO",
        statusVal: "PROTOTIPO / INVESTIGACIÓN",
        cta: "Conoce Arkha →",
      },
      upcoming: [
        {
          badge: "STUDIO PIPELINE",
          name: "PRÓXIMAMENTE",
          desc: "Iniciativa en etapa de validación de mercado y arquitectura de IA.",
          status: "EN VALIDACIÓN",
        },
        {
          badge: "DISCOVERY STAGE",
          name: "PRÓXIMAMENTE",
          desc: "Exploración de ineficiencias en operaciones transfronterizas.",
          status: "EN INVESTIGACIÓN",
        },
      ],
    },
    latam: {
      tag: "08 // LATINOAMÉRICA",
      headline: "NACIDOS EN LATINOAMÉRICA. CONSTRUIDOS PARA EL MUNDO.",
      body1:
        "Latinoamérica está llena de problemas enormes, mercados desatendidos y talento extraordinario.",
      body2:
        "Karvo quiere construir desde aquí las compañías que puedan competir globalmente.",
      visionNote:
        "México es nuestro punto de partida. Latinoamérica es nuestro mercado. El mundo es nuestra ambición.",
      countries: [
        { name: "MÉXICO", role: "Punto de partida & Hub transfronterizo", tag: "HQ // CORE" },
        { name: "BRASIL", role: "Mayor escala de mercado regional", tag: "MERCADO OBJETIVO" },
        { name: "COLOMBIA", role: "Hub de talento dinámico y desarrollo", tag: "MERCADO OBJETIVO" },
        { name: "ARGENTINA", role: "Densidad técnica e ingeniería de clase mundial", tag: "MERCADO OBJETIVO" },
        { name: "CHILE", role: "Ecosistema institucional y estabilidad", tag: "MERCADO OBJETIVO" },
        { name: "PERÚ", role: "Mercados en expansión y adopción ágil", tag: "MERCADO OBJETIVO" },
      ],
    },
    tijuana: {
      tag: "09 // TIJUANA",
      headline: "NACIDOS EN TIJUANA. CONECTADOS CON EL MUNDO.",
      body1:
        "Karvo nace en Tijuana, una ciudad en la frontera entre México y Estados Unidos.",
      body2:
        "Desde aquí queremos construir compañías capaces de crecer primero en México, después en Latinoamérica y eventualmente competir a nivel global.",
      corridor: "TIJUANA → MÉXICO → LATAM → GLOBAL",
      visionTag: "VISIÓN DEL CORREDOR BINACIONAL // ZONA RÍO",
      milestones: [
        {
          code: "01",
          name: "TIJUANA",
          desc: "Frontera más transitada del mundo, dinamismo industrial y conexión inmediata con California.",
        },
        {
          code: "02",
          name: "MÉXICO",
          desc: "Base de validación nacional, manufactura avanzada y adopción de tecnología corporativa.",
        },
        {
          code: "03",
          name: "LATAM",
          desc: "Expansión en economías conectadas por retos e idiomas comunes.",
        },
        {
          code: "04",
          name: "GLOBAL",
          desc: "Soluciones de infraestructura y software con competitividad internacional.",
        },
      ],
    },
    network: {
      tag: "10 // NETWORK",
      headline: "LAS GRANDES COMPAÑÍAS LAS CONSTRUYEN GRANDES PERSONAS.",
      body: "Construir una compañía requiere mucho más que capital. Karvo está creando una red de personas capaces de construirlas.",
      nodes: [
        { name: "FOUNDERS", role: "Emprendedores obsesionados con problemas reales." },
        { name: "ENGINEERS", role: "Arquitectos de software y científicos de IA." },
        { name: "OPERATORS", role: "Líderes de producto, crecimiento y ejecución táctica." },
        { name: "INVESTORS", role: "Capital paciente con alineación a largo plazo." },
        { name: "COMPANIES", role: "Organizaciones que aportan validación y desafíos reales." },
        { name: "TALENT", role: "Profesionales de alto rendimiento en toda la región." },
        { name: "UNIVERSITIES", role: "Vínculos con investigación académica y jóvenes talentos." },
        { name: "PARTNERS", role: "Ecosistema tecnológico y aliados institucionales." },
      ],
    },
    founders: {
      tag: "11 // FOUNDERS",
      headline: "¿ESTÁS CONSTRUYENDO ALGO EXTRAORDINARIO?",
      body: "Buscamos founders ambiciosos que estén construyendo compañías tecnológicas con potencial para transformar mercados.",
      cta: "Aplicar a Karvo →",
      formTitle: "APLICACIÓN PARA FOUNDERS",
      formSubtitle: "Evaluamos rigor técnico, claridad de problema y velocidad de ejecución.",
      fields: {
        name: "Nombre completo",
        email: "Email de contacto",
        linkedin: "Perfil de LinkedIn",
        company: "Nombre de la empresa o proyecto",
        website: "Sitio web o demo (si existe)",
        whatBuilding: "¿Qué estás construyendo?",
        problemSolving: "¿Qué problema estás resolviendo?",
        whoCustomer: "¿Quién es tu cliente?",
        stage: "Etapa actual",
        traction: "Tracción actual (usuarios, pilotos, etc.)",
        revenue: "Ingresos (MRR / ARR actual)",
        team: "Equipo (founders, roles clave y dedicación)",
        capitalRaised: "Capital levantado hasta la fecha",
        capitalSought: "Capital buscado o necesidades inmediatas",
        whyKarvo: "¿Por qué Karvo?",
        pitchDeck: "Enlace al Pitch Deck (Google Drive, DocSend, etc.)",
      },
      stageOptions: [
        "Idea / Conceptualización",
        "Prototipo / MVP Funcional",
        "Primeros Clientes / Pilotos",
        "Tracción / Crecimiento",
      ],
      submitButton: "Enviar aplicación a Karvo",
      submitting: "Enviando expediente...",
      successTitle: "Aplicación recibida con éxito",
      successMessage:
        "Nuestro equipo revisará tu aplicación y nos pondremos en contacto contigo si hay alineación estratégica.",
    },
    companies: {
      tag: "12 // EMPRESAS",
      headline: "¿QUIERES CONSTRUIR CON IA?",
      body: "Si eres una startup, PYME o empresa establecida, podemos ayudarte a descubrir dónde la inteligencia artificial puede generar verdadero valor.",
      cta: "Diagnosticar mi empresa →",
      pills: [
        "Diagnóstico de viabilidad tecnológica",
        "Automatización de operaciones críticas",
        "Detección de productos de software derivados",
      ],
    },
    ctaFinal: {
      tag: "13 // EL FUTURO COMIENZA HOY",
      headline: "LA PRÓXIMA GRAN COMPAÑÍA DE LATINOAMÉRICA PODRÍA COMENZAR AQUÍ.",
      subheadline: "Construyámosla.",
      ctaPrimary: "Construir con Karvo →",
      ctaSecondary: "Aplicar como founder →",
    },
    footer: {
      brand: "KARVO",
      tagline: "Construimos las empresas del futuro.",
      location: "Tijuana · México · Latinoamérica",
      columns: [
        {
          title: "STUDIO",
          links: [
            { label: "Nuestra Tesis", href: "#tesis" },
            { label: "Cómo Construimos", href: "#como-construimos" },
            { label: "Inteligencia Artificial", href: "#ia" },
            { label: "Modelos de Trabajo", href: "#modelos" },
          ],
        },
        {
          title: "VENTURES",
          links: [
            { label: "Arkha Pay", href: "#ventures" },
            { label: "Pipeline en Validación", href: "#ventures" },
            { label: "Karvo AI", href: "#karvo-ai" },
          ],
        },
        {
          title: "ECOSISTEMA",
          links: [
            { label: "Latinoamérica", href: "#latam" },
            { label: "Tijuana Hub", href: "#tijuana" },
            { label: "Network", href: "#network" },
          ],
        },
        {
          title: "ACCESO",
          links: [
            { label: "Aplicar como Founder", href: "#founders" },
            { label: "Diagnosticar Empresa", href: "#empresas" },
          ],
        },
      ],
      copyright: "© 2026 KARVO VENTURE STUDIO. TODOS LOS DERECHOS RESERVADOS.",
    },
    modals: {
      close: "Cerrar",
      arkhaTitle: "ARKHA",
      arkhaSubtitle: "AI × Blockchain × Infraestructura Financiera",
      arkhaDetails:
        "Arkha desarrolla rieles financieros programables diseñados específicamente para agilizar y asegurar pagos y liquidaciones en operaciones de comercio exterior entre México, Estados Unidos y América Latina.",
      diagnosticTitle: "DIAGNÓSTICO KARVO AI",
      diagnosticSubtitle:
        "Descubramos cómo la IA puede optimizar tus procesos críticos y abrir nuevas oportunidades de negocio.",
      diagnosticCompany: "Nombre de la empresa",
      diagnosticContact: "Persona de contacto y cargo",
      diagnosticEmail: "Correo electrónico corporativo",
      diagnosticIndustry: "Sector / Industria",
      diagnosticChallenge: "¿Qué proceso u operación consideras que presenta mayor fricción o costo?",
      diagnosticSubmit: "Solicitar diagnóstico con Karvo AI",
      diagnosticSuccess: "Solicitud de diagnóstico recibida. Un miembro de nuestro equipo te contactará pronto.",
    },
  },
  en: {
    nav: {
      studio: "Studio",
      thesis: "Thesis",
      methodology: "How We Build",
      ia: "AI",
      karvoAi: "Karvo AI",
      ventures: "Ventures",
      latam: "Latin America",
      tijuana: "Tijuana",
      network: "Network",
      founders: "Founders",
      companies: "Enterprises",
      ctaPrimary: "Build with Karvo →",
    },
    hero: {
      locationBadge: "MEXICO · LATIN AMERICA",
      headline: "Building the companies of the future.",
      headlineLine1: "Building the companies",
      headlineLine2: "of the future.",
      subheadline:
        "Karvo is a venture studio that discovers opportunities, engineers technology, and builds companies designed for next-generation markets.",
      ctaPrimary: "Build with Karvo →",
      ctaSecondary: "Explore our ventures →",
      smallLocation: "MEXICO · LATIN AMERICA",
      processTitle: "SYSTEMIC PROCESS",
      processSteps: [
        {
          num: "01",
          label: "OPPORTUNITY",
          desc: "Pinpointing structural frictions and underserved markets.",
        },
        {
          num: "02",
          label: "TECHNOLOGY",
          desc: "Architecting software, AI systems, and scalable infrastructure.",
        },
        {
          num: "03",
          label: "PRODUCT",
          desc: "Rapid validation with real customers and functional refinement.",
        },
        {
          num: "04",
          label: "COMPANY",
          desc: "Founding team, governance, capital, and institutional scale.",
        },
      ],
    },
    thesis: {
      tag: "02 // OUR THESIS",
      headline: "GREAT COMPANIES BEGIN WITH GREAT OPPORTUNITIES.",
      intro:
        "We believe Latin America’s next generation of great companies will be built differently.",
      shifts: [
        {
          title: "Smaller teams.",
          desc: "Hyper-dense talent executing with surgical velocity and zero bureaucracy.",
        },
        {
          title: "More powerful technology.",
          desc: "Modern infrastructure allowing lean teams to achieve what previously required hundreds.",
        },
        {
          title: "Artificial intelligence at the core.",
          desc: "AI engineered as the operational foundation, not a superficial veneer.",
        },
        {
          title: "Faster experimentation.",
          desc: "Validation and iteration cycles compressed from quarters into days.",
        },
        {
          title: "Global ambition.",
          desc: "Born at the frontier with an international mindset and world-class standards.",
        },
      ],
      conclusion:
        "Karvo combines technology, talent, capital, and market intelligence to transform real opportunities into enduring companies.",
      equationTitle: "KARVO IS THE CONVERGENCE OF:",
      equationFormula:
        "Venture Studio + AI + Technology + Capital + Network",
      notListTitle: "WHAT WE ARE NOT:",
      notList: [
        "A consultancy",
        "An AI agency",
        "A traditional accelerator",
        "A school",
        "A traditional VC",
      ],
    },
    methodology: {
      tag: "03 // HOW WE BUILD",
      headline: "FROM AN OPPORTUNITY TO A COMPANY.",
      subtitle:
        "A disciplined, methodical, and repeatable architecture to transform acute problems into sustainable tech enterprises.",
      steps: [
        {
          step: "01",
          title: "DISCOVER",
          desc: "We pinpoint structural problems, overlooked markets, and opportunities worth building.",
          badge: "EXPLORATION & RESEARCH",
        },
        {
          step: "02",
          title: "VALIDATE",
          desc: "We engage directly with real clients and markets to prove acute demand exists.",
          badge: "DIRECT EVIDENCE",
        },
        {
          step: "03",
          title: "BUILD",
          desc: "We unite elite talent, software engineering, and artificial intelligence to create the product.",
          badge: "ENGINEERING & AI",
        },
        {
          step: "04",
          title: "LAUNCH",
          desc: "We turn validated opportunities into companies and assemble the founding team to run them.",
          badge: "FOUNDING TEAM & SPINOUT",
        },
        {
          step: "05",
          title: "SCALE",
          desc: "We provide capital, technology, talent, strategy, and network to accelerate growth.",
          badge: "GLOBAL ACCELERATION",
        },
      ],
    },
    ia: {
      tag: "04 // ARTIFICIAL INTELLIGENCE",
      headline: "ARTIFICIAL INTELLIGENCE IS OUR MULTIPLIER.",
      intro:
        "AI is radically reshaping the economics of building a company.\n\nIt enables faster research, product engineering with leaner teams, automated operations, and experimentation at an unprecedented velocity.",
      realityNote: "Karvo is engineered around this new reality.",
      vectors: [
        {
          key: "research",
          title: "Research",
          desc: "Accelerated market analysis, regulatory synthesis, and deep identification of operational friction.",
          role: "Exploration & Data",
        },
        {
          key: "product",
          title: "Product",
          desc: "Rapid functional specifications, instant UI prototypes, and continuous user loop validations.",
          role: "Design & UX",
        },
        {
          key: "engineering",
          title: "Engineering",
          desc: "Assisted development, automated test generation, and continuous deployment of resilient systems.",
          role: "Code & Architecture",
        },
        {
          key: "operations",
          title: "Operations",
          desc: "Workflow automation, data reconciliation, and internal pipeline orchestration.",
          role: "Operational Velocity",
        },
        {
          key: "growth",
          title: "Growth",
          desc: "Algorithmic segmentation, acquisition experimentation, and real-time cohort analytics.",
          role: "Distribution",
        },
        {
          key: "intelligence",
          title: "Intelligence",
          desc: "Integrated models supporting executive strategic decisions and proactive market telemetry.",
          role: "Strategic Decision",
        },
      ],
    },
    models: {
      tag: "05 // TWO WAYS OF BUILDING",
      headline: "TWO PATHS. ONE MISSION.",
      subtitle:
        "We engineered two complementary models to catalyze and build exceptional technology companies.",
      studio: {
        badge: "IN-HOUSE INCUBATION",
        title: "KARVO STUDIO",
        subhead: "We build from day zero.",
        desc: "We identify opportunities, validate markets, and engineer new companies from the ground up.",
        cta: "Explore Karvo Studio →",
        highlights: [
          "Proprietary insight discovery",
          "Internal software architecture & prototyping",
          "Recruiting executive co-founders",
          "Foundational incubation capital",
        ],
      },
      ventures: {
        badge: "CO-BUILDING WITH FOUNDERS",
        title: "KARVO VENTURES",
        subhead: "We build alongside exceptional founders.",
        desc: "We partner with ambitious entrepreneurs, injecting technology, AI, capital, strategy, and network to build extraordinary companies.",
        cta: "Apply to Karvo →",
        highlights: [
          "Hands-on co-building with top founders",
          "Direct injection of AI & engineering horsepower",
          "Rapid market validation & pilots",
          "Access to institutional capital & distribution",
        ],
      },
    },
    karvoAi: {
      tag: "06 // KARVO AI",
      headline:
        "ENTERPRISE TRANSFORMATION REVEALS TOMORROW'S OPPORTUNITIES.",
      body1:
        "We work alongside enterprises and SMEs to pinpoint exactly where artificial intelligence can transform their operations, products, and business models.",
      body2:
        "By being deeply embedded in real business operations, we identify recurring industrial bottlenecks that can be spun out into new scalable tech companies.",
      flowTitle: "FROM ENTERPRISE FRICTION TO NEW VENTURES",
      flowSteps: [
        {
          name: "ENTERPRISE",
          desc: "Real-world operations with acute, high-cost friction.",
        },
        {
          name: "AI ASSESSMENT",
          desc: "Rigorous diagnostic on technical feasibility & automation.",
        },
        {
          name: "PROBLEM",
          desc: "Isolating the critical, repeatable systemic bottleneck.",
        },
        {
          name: "OPPORTUNITY",
          desc: "Cross-industry market size & economic validation.",
        },
        {
          name: "NEW COMPANY",
          desc: "Engineering and spinning out a standalone software venture.",
        },
      ],
      cta: "Explore Karvo AI →",
    },
    ventures: {
      tag: "07 // VENTURES",
      headline: "COMPANIES BUILT BY KARVO.",
      subtitle:
        "We display only genuine initiatives and companies under active development.",
      arkha: {
        name: "ARKHA",
        tags: "AI × BLOCKCHAIN × FINANCIAL INFRASTRUCTURE",
        desc: "Programmable financial infrastructure for cross-border global trade.",
        statusLabel: "STATUS",
        statusVal: "PROTOTYPE / RESEARCH",
        cta: "Explore Arkha →",
      },
      upcoming: [
        {
          badge: "STUDIO PIPELINE",
          name: "COMING SOON",
          desc: "Initiative in market validation and specialized AI architecture.",
          status: "IN VALIDATION",
        },
        {
          badge: "DISCOVERY STAGE",
          name: "COMING SOON",
          desc: "Exploration of cross-border operational efficiencies.",
          status: "IN RESEARCH",
        },
      ],
    },
    latam: {
      tag: "08 // LATIN AMERICA",
      headline: "BORN IN LATIN AMERICA. BUILT FOR THE WORLD.",
      body1:
        "Latin America is full of massive problems, underserved markets, and extraordinary talent.",
      body2:
        "Karvo aims to build companies from here that compete on the global stage.",
      visionNote:
        "Mexico is our launchpad. Latin America is our market. The world is our ambition.",
      countries: [
        { name: "MEXICO", role: "Launchpad & Cross-border Corridor", tag: "HQ // CORE" },
        { name: "BRAZIL", role: "Largest market scale in the region", tag: "TARGET MARKET" },
        { name: "COLOMBIA", role: "Vibrant innovation & engineering hub", tag: "TARGET MARKET" },
        { name: "ARGENTINA", role: "World-class technical & software talent", tag: "TARGET MARKET" },
        { name: "CHILE", role: "Institutional stability & enterprise tech", tag: "TARGET MARKET" },
        { name: "PERU", role: "Expanding economy & agile digital adoption", tag: "TARGET MARKET" },
      ],
    },
    tijuana: {
      tag: "09 // TIJUANA",
      headline: "BORN IN TIJUANA. CONNECTED WITH THE WORLD.",
      body1:
        "Karvo is born in Tijuana, a vibrant city on the border between Mexico and the United States.",
      body2:
        "From here, we build companies capable of growing first in Mexico, expanding across Latin America, and ultimately competing globally.",
      corridor: "TIJUANA → MEXICO → LATAM → GLOBAL",
      visionTag: "CROSS-BORDER CORRIDOR VISION // ZONA RÍO",
      milestones: [
        {
          code: "01",
          name: "TIJUANA",
          desc: "World's most crossed international border, industrial dynamism, direct link to California.",
        },
        {
          code: "02",
          name: "MEXICO",
          desc: "National validation testing ground, advanced manufacturing, and enterprise adoption.",
        },
        {
          code: "03",
          name: "LATAM",
          desc: "Scale across economies unified by structural inefficiencies and shared language.",
        },
        {
          code: "04",
          name: "GLOBAL",
          desc: "Software and financial infrastructure competing at global standards.",
        },
      ],
    },
    network: {
      tag: "10 // NETWORK",
      headline: "GREAT COMPANIES ARE BUILT BY GREAT PEOPLE.",
      body: "Building a company requires far more than capital. Karvo is cultivating a network of individuals capable of building them.",
      nodes: [
        { name: "FOUNDERS", role: "Entrepreneurs obsessed with real problems." },
        { name: "ENGINEERS", role: "Software architects and AI practitioners." },
        { name: "OPERATORS", role: "Product, growth, and tactical execution leaders." },
        { name: "INVESTORS", role: "Patient capital aligned with long-term vision." },
        { name: "COMPANIES", role: "Enterprises providing real validation & workflows." },
        { name: "TALENT", role: "High-caliber operators across the Americas." },
        { name: "UNIVERSITIES", role: "Academic research bridges & emerging minds." },
        { name: "PARTNERS", role: "Global tech platforms & ecosystem allies." },
      ],
    },
    founders: {
      tag: "11 // FOUNDERS",
      headline: "ARE YOU BUILDING SOMETHING EXTRAORDINARY?",
      body: "We look for ambitious founders building technology companies with the potential to transform markets.",
      cta: "Apply to Karvo →",
      formTitle: "FOUNDER APPLICATION",
      formSubtitle: "We assess technical rigor, problem depth, and execution velocity.",
      fields: {
        name: "Full Name",
        email: "Contact Email",
        linkedin: "LinkedIn Profile",
        company: "Company or Project Name",
        website: "Website or Demo (if available)",
        whatBuilding: "What are you building?",
        problemSolving: "What problem are you solving?",
        whoCustomer: "Who is your customer?",
        stage: "Current Stage",
        traction: "Traction (users, pilots, waitlist, etc.)",
        revenue: "Revenue (current MRR / ARR)",
        team: "Team (founders, core roles, full-time status)",
        capitalRaised: "Capital raised to date",
        capitalSought: "Capital sought or immediate needs",
        whyKarvo: "Why Karvo?",
        pitchDeck: "Pitch Deck Link (Google Drive, DocSend, etc.)",
      },
      stageOptions: [
        "Idea / Conceptual",
        "Prototype / Functional MVP",
        "First Users / Paid Pilots",
        "Traction / Growth",
      ],
      submitButton: "Submit Application to Karvo",
      submitting: "Submitting application...",
      successTitle: "Application Received Successfully",
      successMessage:
        "Our investment and architecture team will review your application and reach out if there is strategic alignment.",
    },
    companies: {
      tag: "12 // ENTERPRISES",
      headline: "DO YOU WANT TO BUILD WITH AI?",
      body: "Whether you are a startup, SME, or established enterprise, we can help you uncover where artificial intelligence creates genuine economic value.",
      cta: "Diagnose my company →",
      pills: [
        "Technical feasibility diagnostics",
        "Core operations automation",
        "Spinout software product identification",
      ],
    },
    ctaFinal: {
      tag: "13 // THE FUTURE STARTS HERE",
      headline: "LATIN AMERICA'S NEXT GREAT COMPANY COULD START HERE.",
      subheadline: "Let's build it.",
      ctaPrimary: "Build with Karvo →",
      ctaSecondary: "Apply as Founder →",
    },
    footer: {
      brand: "KARVO",
      tagline: "We build the companies of the future.",
      location: "Tijuana · Mexico · Latin America",
      columns: [
        {
          title: "STUDIO",
          links: [
            { label: "Our Thesis", href: "#tesis" },
            { label: "How We Build", href: "#como-construimos" },
            { label: "Artificial Intelligence", href: "#ia" },
            { label: "Two Ways of Building", href: "#modelos" },
          ],
        },
        {
          title: "VENTURES",
          links: [
            { label: "Arkha Pay", href: "#ventures" },
            { label: "Validation Pipeline", href: "#ventures" },
            { label: "Karvo AI", href: "#karvo-ai" },
          ],
        },
        {
          title: "ECOSYSTEM",
          links: [
            { label: "Latin America", href: "#latam" },
            { label: "Tijuana Hub", href: "#tijuana" },
            { label: "Network", href: "#network" },
          ],
        },
        {
          title: "ACCESS",
          links: [
            { label: "Apply as Founder", href: "#founders" },
            { label: "Diagnose Company", href: "#empresas" },
          ],
        },
      ],
      copyright: "© 2026 KARVO VENTURE STUDIO. ALL RIGHTS RESERVED.",
    },
    modals: {
      close: "Close",
      arkhaTitle: "ARKHA",
      arkhaSubtitle: "AI × Blockchain × Financial Infrastructure",
      arkhaDetails:
        "Arkha engineers programmable financial rails designed specifically to streamline and secure cross-border settlements and corporate payments across Mexico, the United States, and Latin America.",
      diagnosticTitle: "KARVO AI DIAGNOSTIC",
      diagnosticSubtitle:
        "Let us uncover where AI can automate critical bottlenecks and unlock new commercial opportunities for your company.",
      diagnosticCompany: "Company name",
      diagnosticContact: "Contact person & title",
      diagnosticEmail: "Corporate email",
      diagnosticIndustry: "Sector / Industry",
      diagnosticChallenge: "Which process or operational workflow represents your greatest friction or cost?",
      diagnosticSubmit: "Request Karvo AI Diagnostic",
      diagnosticSuccess: "Diagnostic request received. A member of our team will contact you shortly.",
    },
  },
};
