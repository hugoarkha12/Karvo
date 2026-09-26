export type Language = "en" | "es";

export const SPANISH_COUNTRIES = new Set([
  "MX", "ES", "AR", "CO", "CL", "PE", "EC", "GT", "CU", "BO",
  "DO", "HN", "PY", "SV", "NI", "CR", "PA", "UY", "PR", "GQ"
]);

export interface Translations {
  nav: {
    ventures: string;
    thesis: string;
    methodology: string;
    about: string;
    contact: string;
    presentCompany: string;
  };
  hero: {
    badge: string;
    badgeLabel: string;
    badgeText: string;
    headline: string;
    headlineLine1: string;
    headlineLine2: string;
    subtitle: string;
    secondaryNote: string;
    ctaThesis: string;
    ctaWork: string;
    partnersTitle: string;
    sysRef: string;
    coreHub: string;
    activeDeployments: string;
    nodeDiscover: string;
    nodeScale: string;
    calibrated: string;
  };
  manifesto: {
    tag: string;
    secTitle: string;
    quote: string;
    quoteSub: string;
    body: string;
    foundationalBadge: string;
    foundationalBody: string;
  };
  taxonomy: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      num: string;
      category: string;
      title: string;
      description: string;
      meta: string;
    }[];
  };
  methodology: {
    badge: string;
    title: string;
    subtitle: string;
    stages: {
      stage: string;
      title: string;
      desc: string;
      gate: string;
    }[];
  };
  portfolio: {
    badge: string;
    title: string;
    standards: string;
    arkha: {
      category: string;
      status: string;
      name: string;
      desc: string;
      stageLabel: string;
      stageVal: string;
      focusLabel: string;
      focusVal: string;
      corridorLabel: string;
      corridorVal: string;
      studioNote: string;
      specLink: string;
    };
    stealth1: {
      codename: string;
      badge: string;
      title: string;
      desc: string;
      status: string;
      access: string;
    };
    stealth2: {
      codename: string;
      badge: string;
      title: string;
      desc: string;
      status: string;
      gate: string;
    };
  };
  about: {
    badge: string;
    title: string;
    desc1: string;
    desc2: string;
    pillarsTitle: string;
    pillars: {
      num: string;
      title: string;
      code: string;
    }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    expectTitle: string;
    expectDesc: string;
    protocol: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    projectLabel: string;
    projectPlaceholder: string;
    problemLabel: string;
    problemPlaceholder: string;
    stageLabel: string;
    stageOptions: { val: string; label: string }[];
    deckLabel: string;
    deckPlaceholder: string;
    disclaimer: string;
    submitBtn: string;
    ackText: string;
  };
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    btn: string;
  };
  footer: {
    tagline: string;
    location: string;
    navTitle: string;
    studioTitle: string;
    legalTitle: string;
    terms: string;
    dataGov: string;
    copyright: string;
    cohorts: string;
    bottomTag: string;
    bottomDesc: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      ventures: "Ventures",
      thesis: "Thesis",
      methodology: "Methodology",
      about: "About",
      contact: "Contact",
      presentCompany: "Present your company",
    },
    hero: {
      badge: "VENTURE STUDIO · MEXICO · LATIN AMERICA",
      badgeLabel: "STAGE-00",
      badgeText: "Building the next generation of companies",
      headline: "Building Enduring Companies From Day Zero",
      headlineLine1: "Building Enduring Companies",
      headlineLine2: "From Day Zero",
      subtitle:
        "A technology venture studio that uncovers opportunities, builds companies, and engineers solutions for global markets.",
      secondaryNote:
        "We identify structural opportunities, architect high-conviction products, and develop enduring companies with long-term vision.",
      ctaThesis: "Explore our thesis",
      ctaWork: "Work with Karvo",
      partnersTitle: "Ventures & technical architecture powered by Karvo Studio",
      sysRef: "KV-ARCH-2026",
      coreHub: "TIJUANA // CROSS-BORDER",
      activeDeployments: "STAGE-00 FOUNDRY",
      nodeDiscover: "NODE_01 // DISCOVER",
      nodeScale: "NODE_04 // SCALE",
      calibrated: "CALIBRATED",
    },
    manifesto: {
      tag: "[K-V.01 // MANIFESTO]",
      secTitle: "SEC_01 // THE ARCHITECTURE OF CONVICTION",
      quote: "“We don't just invest in the future.",
      quoteSub: "We help build it.”",
      body: "Karvo combines technology, strategic execution, talent and capital to turn important problems into enduring companies.",
      foundationalBadge: "FOUNDATIONAL COUPLING",
      foundationalBody:
        "From day zero, we embed alongside operators to eliminate early architectural drift, establishing technical scale prior to external capital injection.",
    },
    taxonomy: {
      badge: "02 // TAXONOMY",
      title: "Companies built around real problems.",
      subtitle:
        "Karvo explores sectors where technology can unlock enduring structural value.",
      items: [
        {
          num: "01",
          category: "SYSTEMS",
          title: "Artificial Intelligence",
          description:
            "Software and intelligent systems engineered for enterprises and essential industrial sectors.",
          meta: "INFRA · DECISION ENGINES",
        },
        {
          num: "02",
          category: "CAPITAL TECH",
          title: "Financial Infrastructure",
          description:
            "New-generation rails for cross-border payments, commerce, and liquidity services.",
          meta: "CROSS-BORDER SETTLEMENTS",
        },
        {
          num: "03",
          category: "OPERATIONS",
          title: "Enterprise Technology",
          description:
            "Technology platforms that modernize mission-critical operations across large-scale enterprises.",
          meta: "INDUSTRIAL WORKFLOWS",
        },
        {
          num: "04",
          category: "FRONTIER",
          title: "Emerging Opportunities",
          description:
            "New venture categories engineered from acute economic friction and underserved enterprise needs.",
          meta: "UNSERVED FRICTION",
        },
      ],
    },
    methodology: {
      badge: "03 // METHODOLOGY",
      title: "From insight to company.",
      subtitle: "A disciplined, four-stage venture building architecture.",
      stages: [
        {
          stage: "STAGE 01",
          title: "Discover",
          desc: "We pinpoint structural problems and high-potential, underserved market inefficiencies.",
          gate: "GATE // EVIDENCE",
        },
        {
          stage: "STAGE 02",
          title: "Validate",
          desc: "We engage directly with operators, clients, and industry authorities to verify acute demand.",
          gate: "GATE // INTERVIEWS",
        },
        {
          stage: "STAGE 03",
          title: "Build",
          desc: "We engineer software, assemble founding teams, and stand up independent venture operating systems.",
          gate: "GATE // MVP & CODE",
        },
        {
          stage: "STAGE 04",
          title: "Scale",
          desc: "We accelerate momentum through executive talent, institutional capital, and cross-border distribution.",
          gate: "GATE // SPINOUT",
        },
      ],
    },
    portfolio: {
      badge: "04 // PORTFOLIO",
      title: "Ventures built from day zero.",
      standards: "STANDARDS: INSTITUTIONAL RESTRAINT",
      arkha: {
        category: "Financial Infrastructure",
        status: "BUILDING",
        name: "ARKHA PAY",
        desc: "Building the future of trusted B2B payments and financial infrastructure for international trade.",
        stageLabel: "STAGE",
        stageVal: "System Prototype",
        focusLabel: "FOCUS",
        focusVal: "B2B Settlements",
        corridorLabel: "CORRIDOR",
        corridorVal: "US-MX LatAm",
        studioNote: "STUDIO CO-FOUNDED // 2025",
        specLink: "SPECIFICATION ARCHIVE",
      },
      stealth1: {
        codename: "CODENAME // KV-02",
        badge: "INCUBATION",
        title: "[ Venture in stealth / incubation ]",
        desc: "Decoupled telemetry & automated compliance engine for modern logistics chains across northern manufacturing corridors.",
        status: "STATUS: INTERNAL PROTOTYPING",
        access: "RESTRICTED ACCESS",
      },
      stealth2: {
        codename: "CODENAME // KV-03",
        badge: "EVALUATION",
        title: "[ Problem Discovery Pipeline ]",
        desc: "Synthesizing enterprise bottlenecks in industrial robotics maintenance workflows into scalable enterprise software.",
        status: "STATUS: USER VALIDATION",
        gate: "GATE-02",
      },
    },
    about: {
      badge: "05 // GEOGRAPHY & REACH",
      title: "Born in Tijuana.\nBuilt for the world.",
      desc1:
        "Karvo is being built from Tijuana, Mexico, with a broader ambition: to create technology companies that can operate and compete across Mexico, Latin America and global markets.",
      desc2:
        "Our presence at the world’s most dynamic border corridor connects us directly to deep engineering talent, bi-national industrial scale, and global venture corridors without losing grounded operational focus.",
      pillarsTitle: "STRATEGIC ADVANTAGE PILLARS",
      pillars: [
        {
          num: "01",
          title: "Technology & Software Architecture",
          code: "CORE_STACK",
        },
        {
          num: "02",
          title: "Advanced Industry & Fabrication",
          code: "FABRICATION",
        },
        {
          num: "03",
          title: "Cross-Border Trade Corridors",
          code: "BORDER_FLOW",
        },
        {
          num: "04",
          title: "High-Calibre Engineering Talent",
          code: "EXPONENTIAL",
        },
        {
          num: "05",
          title: "Patient, Conviction Capital",
          code: "PATIENT_GOVERNANCE",
        },
      ],
    },
    contact: {
      badge: "06 // FOUNDER ADMISSION",
      title: "Have a problem worth solving?",
      subtitle:
        "We are interested in ambitious founders, overlooked opportunities and problems that deserve better solutions.",
      expectTitle: "WHAT TO EXPECT",
      expectDesc:
        "Direct technical and operational assessment within five business days. We do not require polished slide decks—we evaluate structural clarity, unfair insight, and execution velocity.",
      protocol: "INTAKE PROTOCOL: 2026.Q1 ACTIVE",
      nameLabel: "Name (Full Name) *",
      namePlaceholder: "e.g. Mateo Rivera",
      emailLabel: "Email (Institutional or personal) *",
      emailPlaceholder: "mateo@domain.com",
      projectLabel: "Company or Project *",
      projectPlaceholder: "Project codename or legal entity",
      problemLabel: "Problem being solved *",
      problemPlaceholder:
        "Detail the operational friction, economic inefficiency, or unserved customer need...",
      stageLabel: "Current Stage *",
      stageOptions: [
        { val: "idea", label: "Idea / Conceptual" },
        { val: "prototipo", label: "Prototype / Working Demo" },
        { val: "validacion", label: "Validation / User Pilot" },
        { val: "construccion", label: "Build / Active Development" },
      ],
      deckLabel: "Link to deck / brief (Optional)",
      deckPlaceholder: "https://drive.google.com/...",
      disclaimer:
        "Submitting an idea does not guarantee investment or partnership.",
      submitBtn: "Submit your idea",
      ackText: "Receipt acknowledged. Dossier queued for architecture review.",
    },
    cta: {
      badge: "CALL FOR OPERATORS // 2026",
      title: "Let's build what comes next.",
      subtitle:
        "Karvo is looking for exceptional people, meaningful problems and opportunities worth pursuing.",
      btn: "Get in touch",
    },
    footer: {
      tagline: "Building the next generation of companies.",
      location: "VENTURE STUDIO · TIJUANA · LATIN AMERICA",
      navTitle: "NAVIGATION",
      studioTitle: "STUDIO",
      legalTitle: "LEGAL",
      terms: "Terms of Architecture",
      dataGov: "Data Governance",
      copyright: "© 2026 Karvo. All rights reserved.",
      cohorts: "LATAM COHORTS // CONTINUOUS PROTOCOL",
      bottomTag: "KARVO STUDIO // SYS_ARCH",
      bottomDesc:
        "Engineering institutional-grade venture platforms with architectural precision.",
    },
  },
  es: {
    nav: {
      ventures: "Empresas",
      thesis: "Tesis",
      methodology: "Metodología",
      about: "Nosotros",
      contact: "Contacto",
      presentCompany: "Presenta tu empresa",
    },
    hero: {
      badge: "VENTURE STUDIO · MÉXICO · LATINOAMÉRICA",
      badgeLabel: "STAGE-00",
      badgeText: "Construyendo la próxima generación de compañías",
      headline: "Construyendo Empresas Extraordinarias Desde el Día Cero",
      headlineLine1: "Construyendo Empresas",
      headlineLine2: "Desde el Día Cero",
      subtitle:
        "Un venture studio tecnológico que descubre oportunidades, construye compañías y desarrolla soluciones para mercados globales.",
      secondaryNote:
        "Identificamos oportunidades, construimos productos y desarrollamos compañías con visión de largo plazo.",
      ctaThesis: "Explorar nuestra tesis",
      ctaWork: "Trabajar con Karvo",
      partnersTitle: "Empresas pioneras y arquitectura técnica impulsadas por Karvo Studio",
      sysRef: "KV-ARCH-2026",
      coreHub: "TIJUANA // CORREDOR TRANSFRONTERIZO",
      activeDeployments: "STAGE-00 FOUNDRY",
      nodeDiscover: "NODO_01 // DESCUBRIR",
      nodeScale: "NODO_04 // ESCALAR",
      calibrated: "CALIBRADO",
    },
    manifesto: {
      tag: "[K-V.01 // MANIFIESTO]",
      secTitle: "SEC_01 // LA ARQUITECTURA DE LA CONVICCIÓN",
      quote: "“No solo invertimos en el futuro.",
      quoteSub: "Ayudamos a construirlo.”",
      body: "Karvo combina tecnología, ejecución estratégica, talento y capital para convertir problemas clave en compañías duraderas.",
      foundationalBadge: "ACOPLAMIENTO FUNDACIONAL",
      foundationalBody:
        "Desde el día cero, nos integramos con operadores para eliminar desviaciones tempranas, consolidando la escala técnica antes de inyecciones de capital externo.",
    },
    taxonomy: {
      badge: "02 // TAXONOMÍA",
      title: "Empresas construidas en torno a problemas reales.",
      subtitle:
        "Karvo explora sectores donde la tecnología puede desbloquear valor estructural duradero.",
      items: [
        {
          num: "01",
          category: "SISTEMAS",
          title: "Inteligencia Artificial",
          description:
            "Software y sistemas inteligentes para empresas e industrias esenciales.",
          meta: "INFRA · MOTORES DE DECISIÓN",
        },
        {
          num: "02",
          category: "CAPITAL TECH",
          title: "Infraestructura Financiera",
          description:
            "Nuevas herramientas para pagos, comercio y servicios financieros transfronterizos.",
          meta: "LIQUIDACIONES TRANSFRONTERIZAS",
        },
        {
          num: "03",
          category: "OPERACIONES",
          title: "Tecnología Empresarial",
          description:
            "Tecnología que moderniza procesos esenciales y operativos de las empresas.",
          meta: "FLUJOS INDUSTRIALES",
        },
        {
          num: "04",
          category: "FRONTERA",
          title: "Oportunidades Emergentes",
          description:
            "Nuevas categorías creadas a partir de problemas reales y fricciones desatendidas.",
          meta: "FRICCIÓN DESATENDIDA",
        },
      ],
    },
    methodology: {
      badge: "03 // METODOLOGÍA",
      title: "Del hallazgo a la compañía.",
      subtitle:
        "Una arquitectura disciplinada de cuatro etapas de creación de empresas.",
      stages: [
        {
          stage: "ETAPA 01",
          title: "Descubrir",
          desc: "Encontramos problemas relevantes y oportunidades poco exploradas en industrias clave.",
          gate: "PUERTA // EVIDENCIA",
        },
        {
          stage: "ETAPA 02",
          title: "Validar",
          desc: "Hablamos con usuarios, empresas y expertos para validar la necesidad real.",
          gate: "PUERTA // ENTREVISTAS",
        },
        {
          stage: "ETAPA 03",
          title: "Construir",
          desc: "Desarrollamos productos, equipos y sistemas para convertir la oportunidad en una compañía independiente.",
          gate: "PUERTA // MVP Y CÓDIGO",
        },
        {
          stage: "ETAPA 04",
          title: "Escalar",
          desc: "Ayudamos a desarrollar la empresa mediante talento, estrategia, capital y distribución transfronteriza.",
          gate: "PUERTA // SPINOUT",
        },
      ],
    },
    portfolio: {
      badge: "04 // PORTAFOLIO",
      title: "Empresas construidas desde el día cero.",
      standards: "ESTÁNDARES: RIGOR INSTITUCIONAL",
      arkha: {
        category: "Infraestructura Financiera",
        status: "CONSTRUYENDO",
        name: "ARKHA PAY",
        desc: "Construyendo el futuro de pagos B2B confiables e infraestructura financiera para el comercio internacional.",
        stageLabel: "ETAPA",
        stageVal: "Prototipo de Sistema",
        focusLabel: "ENFOQUE",
        focusVal: "Liquidaciones B2B",
        corridorLabel: "CORREDOR",
        corridorVal: "EE.UU.-MX LatAm",
        studioNote: "CO-FUNDADA EN EL STUDIO // 2025",
        specLink: "ARCHIVO DE ESPECIFICACIÓN",
      },
      stealth1: {
        codename: "NOMBRE CLAVE // KV-02",
        badge: "INCUBACIÓN",
        title: "[ Empresa en fase confidencial / incubación ]",
        desc: "Telemetría desacoplada y motor de cumplimiento automatizado para cadenas logísticas modernas en corredores de manufactura del norte.",
        status: "ESTADO: PROTOTIPADO INTERNO",
        access: "ACCESO RESTRINGIDO",
      },
      stealth2: {
        codename: "NOMBRE CLAVE // KV-03",
        badge: "EVALUACIÓN",
        title: "[ Línea de Descubrimiento de Problemas ]",
        desc: "Sintetizando cuellos de botella empresariales en mantenimiento de robótica industrial en software empresarial escalable.",
        status: "ESTADO: VALIDACIÓN DE USUARIOS",
        gate: "PUERTA-02",
      },
    },
    about: {
      badge: "05 // GEOGRAFÍA Y ALCANCE",
      title: "Nacidos en Tijuana.\nCreados para el mundo.",
      desc1:
        "Karvo se está construyendo desde Tijuana, México, con una ambición mayor: crear compañías de tecnología capaces de operar y competir en México, Latinoamérica y mercados globales.",
      desc2:
        "Nuestra presencia en el corredor fronterizo más dinámico del mundo nos conecta directamente con talento de ingeniería profundo, escala industrial binacional y corredores globales de capital, sin perder el enfoque operativo en terreno.",
      pillarsTitle: "PILARES DE VENTAJA ESTRATÉGICA",
      pillars: [
        {
          num: "01",
          title: "Tecnología & Software",
          code: "CORE_STACK",
        },
        {
          num: "02",
          title: "Industria & Manufactura Avanzada",
          code: "FABRICACIÓN",
        },
        {
          num: "03",
          title: "Comercio Transfronterizo",
          code: "FLUJO_FRONTERIZO",
        },
        {
          num: "04",
          title: "Talento de Ingeniería",
          code: "EXPONENCIAL",
        },
        {
          num: "05",
          title: "Capital de Largo Plazo",
          code: "GOBERNANZA_PACIENTE",
        },
      ],
    },
    contact: {
      badge: "06 // ADMISIÓN DE FUNDADORES",
      title: "¿Tienes un problema que valga la pena resolver?",
      subtitle:
        "Nos interesan fundadores ambiciosos, oportunidades ignoradas y problemas que merecen mejores soluciones.",
      expectTitle: "QUÉ ESPERAR",
      expectDesc:
        "Evaluación técnica y operativa directa en un plazo de cinco días hábiles. No exigimos presentaciones pulidas: evaluamos claridad estructural, ventajas diferenciales y velocidad de ejecución.",
      protocol: "PROTOCOLO DE INGRESO: 2026.Q1 ACTIVO",
      nameLabel: "Nombre (Nombre completo) *",
      namePlaceholder: "ej. Mateo Rivera",
      emailLabel: "Correo (Institucional o personal) *",
      emailPlaceholder: "mateo@empresa.com",
      projectLabel: "Empresa o Proyecto *",
      projectPlaceholder: "Nombre clave o denominación legal",
      problemLabel: "Problema que estás resolviendo *",
      problemPlaceholder:
        "Detalla la fricción operativa, ineficiencia económica o necesidad no atendida...",
      stageLabel: "Etapa actual *",
      stageOptions: [
        { val: "idea", label: "Idea / Conceptual" },
        { val: "prototipo", label: "Prototipo / Demo Operativa" },
        { val: "validacion", label: "Validación / Piloto con Usuarios" },
        { val: "construccion", label: "Construcción / Desarrollo Activo" },
      ],
      deckLabel: "Enlace a presentación / brief (Opcional)",
      deckPlaceholder: "https://drive.google.com/...",
      disclaimer:
        "El envío de una propuesta no garantiza inversión o asociación.",
      submitBtn: "Enviar tu idea",
      ackText:
        "Recibo confirmado. Expediente en cola para revisión arquitectónica.",
    },
    cta: {
      badge: "CONVOCATORIA PARA OPERADORES // 2026",
      title: "Construyamos lo que viene.",
      subtitle:
        "Karvo busca personas excepcionales, problemas trascendentes y oportunidades que valga la pena perseguir.",
      btn: "Ponerse en contacto",
    },
    footer: {
      tagline: "Construyendo la próxima generación de compañías.",
      location: "VENTURE STUDIO · TIJUANA · LATINOAMÉRICA",
      navTitle: "NAVEGACIÓN",
      studioTitle: "STUDIO",
      legalTitle: "LEGAL",
      terms: "Términos de Arquitectura",
      dataGov: "Gobernanza de Datos",
      copyright: "© 2026 Karvo. Todos los derechos reservados.",
      cohorts: "COHORTES LATAM // PROTOCOLO CONTINUO",
      bottomTag: "KARVO STUDIO // SYS_ARCH",
      bottomDesc:
        "Ingeniería de plataformas venture de grado institucional con precisión arquitectónica.",
    },
  },
};
