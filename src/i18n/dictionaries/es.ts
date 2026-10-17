// Diccionario base. `en.ts` debe tener exactamente la misma forma: el tipo
// `Dictionary` se deriva de este archivo y TypeScript marca cualquier
// diferencia entre idiomas.
//
// Arkha está en etapa inicial: ningún texto debe presentar funciones planeadas
// como si ya estuvieran operando (por eso los "evaluará", "podrá", "busca").

export const es = {
  meta: {
    title: "Arkha — Pagos globales impulsados por IA",
    description:
      "Arkha está desarrollando infraestructura de pagos internacionales que combina inteligencia artificial, tecnología blockchain y procesos financieros programables.",
    ogDescription: "Pagos globales. Conectados inteligentemente.",
    keywords: [
      "Arkha",
      "pagos internacionales",
      "pagos transfronterizos",
      "pagos empresariales",
      "México",
      "Estados Unidos",
      "inteligencia artificial",
      "blockchain",
      "stablecoins",
      "infraestructura financiera",
    ],
  },

  common: {
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    skipToContent: "Saltar al contenido",
    home: "Arkha, inicio",
    backToTop: "Volver arriba",
    newTab: "(se abre en una pestaña nueva)",
  },

  nav: {
    links: [
      { label: "Plataforma", href: "#plataforma" },
      { label: "Tecnología", href: "#tecnologia" },
      { label: "Casos de uso", href: "#casos-de-uso" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Soluciones", href: "#soluciones" },
    ],
    primary: "Conviértete en socio de Arkha",
    secondary: "Contáctanos",
  },

  hero: {
    eyebrow: "Pagos globales impulsados por IA",
    line1: "Pagos globales.",
    line2: "Conectados inteligentemente.",
    body: [
      "Arkha está desarrollando una nueva forma de gestionar pagos empresariales internacionales, combinando inteligencia artificial, infraestructura blockchain y tecnología financiera programable en una experiencia unificada.",
      "Comenzamos con México y Estados Unidos. Construimos con una visión global.",
    ],
    primary: "Conviértete en socio de Arkha",
    secondary: "Explora nuestra plataforma",
    note: "Construyendo la próxima generación de infraestructura para pagos internacionales.",
    graphic: {
      label: "Ilustración conceptual: una red digital abstracta que conecta México y Estados Unidos.",
      origin: "México",
      destination: "Estados Unidos",
      caption: "Ilustración conceptual",
      chips: ["Análisis de rutas", "Controles de autorización", "Seguimiento"],
    },
    // Principios de marca del documento maestro.
    principles: [
      "Visión global desde el inicio",
      "IA integrada en el producto",
      "Blockchain cuando aporta una ventaja medible",
      "Seguridad y cumplimiento desde el diseño",
    ],
  },

  problem: {
    eyebrow: "El desafío",
    headline: "El comercio global avanza más rápido que la experiencia de los pagos tradicionales.",
    body: [
      "Las empresas que operan entre distintos países pueden enfrentarse a proveedores de pago fragmentados, costos cambiarios, sistemas desconectados y visibilidad limitada sobre el estado de sus transferencias internacionales.",
      "A medida que las compañías se expanden, gestionar pagos entre distintas monedas, instituciones y sistemas financieros puede volverse cada vez más complejo.",
    ],
    cards: [
      {
        title: "Infraestructura fragmentada",
        desc: "Las empresas suelen depender de distintos proveedores y sistemas para gestionar sus pagos internacionales.",
      },
      {
        title: "Visibilidad limitada",
        desc: "Comprender los costos totales, el estado de una transferencia y su tiempo estimado de llegada puede ser complicado cuando intervienen varios proveedores.",
      },
      {
        title: "Complejidad operativa",
        desc: "Los procesos de cambio de divisas, documentación, conciliación y coordinación de pagos pueden generar trabajo innecesario.",
      },
    ],
    note: "La experiencia varía según la empresa, el proveedor y el corredor de pago.",
  },

  platform: {
    eyebrow: "Una nueva forma de conectar los pagos",
    headline: "Una capa inteligente para los pagos internacionales.",
    body: [
      "Arkha busca conectar los procesos de pago, la automatización inteligente y la infraestructura financiera moderna mediante una plataforma unificada.",
      "Nuestra propuesta está diseñada para ayudar a las empresas a evaluar opciones de pago, automatizar procesos operativos y conectarse con redes financieras compatibles desde una experiencia más sencilla.",
    ],
    diagram: {
      caption: "Arquitectura conceptual",
      company: "Tu empresa",
      layer: "Capa inteligente",
      layerChips: ["IA", "Reglas programables", "Conectividad"],
      networks: ["Proveedores de pago", "Sistemas financieros", "Redes de activos digitales"],
    },
    capabilities: [
      {
        title: "Inteligencia para pagos",
        desc: "Analizar las rutas disponibles, los costos, las monedas y los requisitos de cada operación para ayudar a las empresas a tomar decisiones informadas.",
      },
      {
        title: "Procesos financieros programables",
        desc: "Utilizar reglas, permisos y contratos inteligentes cuando sean apropiados para coordinar operaciones financieras previamente definidas.",
      },
      {
        title: "Infraestructura financiera conectada",
        desc: "Integrarse con proveedores de pago y sistemas de activos digitales compatibles, sin depender necesariamente de una sola red.",
      },
    ],
    closing: ["La complejidad permanece en la infraestructura.", "La experiencia es sencilla."],
  },

  howItWorks: {
    eyebrow: "Cómo funciona",
    headline: "De la solicitud a la ejecución financiera.",
    steps: [
      {
        title: "Iniciar",
        desc: "La empresa especifica el destinatario, el importe, la moneda y los requisitos del pago.",
      },
      {
        title: "Analizar",
        desc: "La capa de inteligencia de Arkha evaluará las rutas disponibles, los costos estimados, los requisitos y la información operativa relevante.",
      },
      {
        title: "Coordinar",
        desc: "La plataforma coordinará el proceso seleccionado con infraestructura de pago compatible y aplicará los controles de autorización correspondientes.",
      },
      {
        title: "Dar seguimiento",
        desc: "La empresa podrá consultar el estado del pago y acceder a la información relevante de la transacción, según las integraciones disponibles.",
      },
    ],
    note: "Este flujo representa la dirección prevista del producto. Las rutas de pago, monedas, funciones y capacidades de ejecución dependerán de las integraciones futuras, los socios disponibles y la regulación aplicable.",
  },

  technology: {
    eyebrow: "Diseñado para las finanzas programables",
    headline: "Inteligencia artificial y blockchain, trabajando en conjunto.",
    body: [
      "Arkha explora cómo combinar inteligencia artificial y tecnología blockchain para simplificar las operaciones de pago internacionales.",
      "Creemos que cada tecnología debe tener una función clara: mejorar la toma de decisiones, habilitar procesos programables y conectar sistemas financieros compatibles.",
    ],
    cards: [
      {
        key: "ai",
        title: "Inteligencia artificial",
        desc: "Análisis inteligente de información de pagos, rutas disponibles, requisitos operativos y posibles anomalías.",
      },
      {
        key: "stablecoins",
        title: "Infraestructura de stablecoins",
        desc: "Explorar opciones de liquidación con activos digitales vinculados a monedas tradicionales cuando aporten beneficios concretos y su utilización sea legalmente viable.",
      },
      {
        key: "contracts",
        title: "Contratos inteligentes",
        desc: "Reglas programables para operaciones predefinidas, permisos y condiciones de transacción, cuando la red utilizada lo permita.",
      },
      {
        key: "integrations",
        title: "Integraciones financieras",
        desc: "Conectividad con proveedores de pagos y otras infraestructuras financieras mediante APIs y alianzas adecuadas.",
      },
    ],
    note: "La tecnología y las integraciones de Arkha están en desarrollo. Las capacidades relacionadas con blockchain, stablecoins y contratos inteligentes se incorporarán únicamente cuando sean apropiadas y hayan sido validadas técnica y legalmente.",
  },

  market: {
    eyebrow: "Nuestro primer mercado",
    headline: "Conectando los pagos empresariales entre México y Estados Unidos.",
    body: [
      "Arkha comienza explorando los procesos de pago transfronterizos de las empresas que operan entre México y Estados Unidos.",
      "Nos enfocamos en comprender cómo las empresas gestionan sus pagos internacionales, evalúan las rutas disponibles y coordinan sus operaciones financieras entre ambos países.",
    ],
    corridor: {
      origin: "México",
      destination: "Estados Unidos",
      tag: "Mercado objetivo",
    },
    useCasesTitle: "Casos de uso",
    useCases: [
      {
        title: "Importadores y distribuidores",
        desc: "Empresas que pagan regularmente a proveedores al otro lado de la frontera.",
      },
      {
        title: "Fabricantes y proveedores",
        desc: "Compañías que gestionan pagos recurrentes en cadenas de suministro internacionales.",
      },
      {
        title: "Fintechs y plataformas de pago",
        desc: "Empresas tecnológicas que buscan integrar procesos de pago programables y nuevas soluciones de infraestructura financiera.",
      },
    ],
    closing: "Nuestro enfoque inicial es específico por diseño. Nuestra ambición a largo plazo es global.",
  },

  vision: {
    eyebrow: "Una visión más amplia",
    headline: "Construyendo un sistema financiero más conectado.",
    body: [
      "Nuestra visión a largo plazo es hacer que las operaciones financieras internacionales sean más accesibles, programables e interoperables.",
      "Comenzamos explorando los pagos empresariales entre México y Estados Unidos. Con el tiempo, Arkha podría expandirse a otros corredores, servicios financieros programables y nuevas aplicaciones de infraestructura financiera digital.",
    ],
    stages: [
      {
        when: "Hoy",
        title: "Validar",
        desc: "Comprender las necesidades de los clientes, probar el concepto del producto y establecer las alianzas tecnológicas y financieras adecuadas.",
      },
      {
        when: "Después",
        title: "Conectar",
        desc: "Desarrollar integraciones de pago, procesos inteligentes y una experiencia confiable para las empresas.",
      },
      {
        when: "A largo plazo",
        title: "Expandir",
        desc: "Explorar nuevos mercados, activos y servicios financieros programables conforme lo permitan el negocio y el entorno regulatorio.",
      },
    ],
  },

  why: {
    eyebrow: "¿Por qué Arkha?",
    headline: "La infraestructura financiera debe sentirse sencilla.",
    items: [
      {
        title: "Inteligencia desde el diseño",
        desc: "Utilizar IA para reducir la complejidad y ayudar a las empresas a tomar decisiones mejor informadas sobre sus pagos.",
      },
      {
        title: "Diseñado para la interoperabilidad",
        desc: "Conectar sistemas financieros existentes sin exigir que todos los participantes adopten una nueva red.",
      },
      {
        title: "Programable cuando aporta valor",
        desc: "Utilizar blockchain y contratos inteligentes únicamente cuando ofrezcan un beneficio claro y medible.",
      },
      {
        title: "Cumplimiento desde el diseño",
        desc: "Construir procesos que consideren permisos, requisitos de los socios y obligaciones regulatorias aplicables.",
      },
    ],
  },

  // Apartado de servicios tecnológicos para empresas.
  solutions: {
    eyebrow: "Soluciones",
    headline: "Soluciones tecnológicas para empresas que quieren avanzar",
    body: [
      "Ayudamos a las empresas a automatizar procesos, conectar sus sistemas y desarrollar soluciones de inteligencia artificial que convierten tareas manuales en operaciones más eficientes.",
      "Diseñamos e implementamos tecnología adaptada a las necesidades de cada negocio, desde automatizaciones puntuales hasta sistemas de software completos.",
    ],
    tagline: "Menos trabajo manual. Más capacidad para crecer.",
    primary: "Agenda una consulta",
    secondary: "Explora nuestros servicios",
    servicesTitle: "Nuestros servicios",
    services: [
      {
        key: "automation",
        title: "Automatización de procesos con IA",
        desc: "Automatizamos tareas repetitivas para que tu equipo dedique menos tiempo a procesos manuales y más a actividades de valor.",
        items: [
          "Automatización de tareas administrativas y operativas.",
          "Procesamiento de documentos y extracción de datos.",
          "Clasificación de información y generación de reportes.",
          "Flujos de trabajo automatizados entre herramientas.",
          "Agentes de IA para ejecutar tareas específicas.",
        ],
      },
      {
        key: "agents",
        title: "Agentes de IA para empresas",
        desc: "Desarrollamos asistentes inteligentes que ayudan a los equipos a acceder a información, atender solicitudes y ejecutar tareas dentro de sus procesos de trabajo.",
        items: [
          "Asistentes empresariales conectados a documentos y bases de conocimiento.",
          "Agentes para atención al cliente y soporte interno.",
          "Automatización de seguimiento comercial.",
          "Asistentes para ventas y operaciones.",
          "Integración de modelos de IA en sistemas existentes.",
        ],
      },
      {
        key: "software",
        title: "Desarrollo de software a medida",
        desc: "Convertimos necesidades empresariales en productos digitales diseñados para resolver problemas reales.",
        items: [
          "Aplicaciones web y plataformas empresariales.",
          "Portales para clientes y proveedores.",
          "Paneles administrativos y sistemas internos.",
          "MVP para startups y nuevos productos digitales.",
          "Desarrollo de APIs y servicios backend.",
        ],
      },
      {
        key: "integrations",
        title: "Integración de sistemas y APIs",
        desc: "Conectamos las herramientas que tu empresa ya utiliza para reducir la duplicación de información y mejorar el flujo de trabajo entre sistemas.",
        items: [
          "Integración de CRM, ERP y plataformas comerciales.",
          "Conexiones entre aplicaciones mediante APIs.",
          "Sincronización de datos entre sistemas.",
          "Automatización de procesos entre múltiples herramientas.",
          "Integración de servicios de terceros.",
        ],
      },
      {
        key: "sales",
        title: "Automatización comercial y atención al cliente",
        desc: "Ayudamos a los equipos comerciales a responder más rápido, organizar sus oportunidades y mantener un seguimiento consistente.",
        items: [
          "Captura y clasificación de prospectos.",
          "Seguimientos automatizados por correo y otros canales compatibles.",
          "Asignación y actualización de oportunidades en el CRM.",
          "Automatización de agendas y recordatorios.",
          "Reportes de actividad y rendimiento comercial.",
        ],
      },
      {
        key: "consulting",
        title: "Consultoría e implementación de IA",
        desc: "Identificamos oportunidades reales para aplicar inteligencia artificial y acompañamos su implementación, desde la evaluación inicial hasta la puesta en producción.",
        items: [
          "Diagnóstico de procesos y oportunidades de automatización.",
          "Diseño de soluciones de IA.",
          "Selección e integración de herramientas tecnológicas.",
          "Desarrollo de pruebas de concepto.",
          "Implementación, evaluación y mejora de soluciones.",
        ],
      },
    ],
    processTitle: "Cómo trabajamos",
    process: [
      { title: "Entendemos el problema.", desc: "Analizamos tus procesos, herramientas y objetivos." },
      { title: "Diseñamos la solución.", desc: "Definimos el alcance, la tecnología y los resultados que se medirán." },
      { title: "Desarrollamos e integramos.", desc: "Construimos la solución y la conectamos con tus sistemas." },
      { title: "Medimos y mejoramos.", desc: "Evaluamos el funcionamiento y optimizamos la implementación." },
    ],
    cta: {
      headline: "¿Tienes un proceso que debería funcionar mejor?",
      body: "Cuéntanos qué necesita tu empresa. Evaluaremos el problema y te propondremos una solución tecnológica acorde con tus objetivos.",
      button: "Hablemos de tu proyecto",
      note: "Cada proyecto se define según su alcance, viabilidad técnica y objetivos. Las funcionalidades, integraciones y resultados se acuerdan antes de comenzar.",
    },
  },

  partners: {
    eyebrow: "Construye con nosotros",
    headline: "Ayúdanos a construir el futuro de los pagos internacionales.",
    body: "Arkha se encuentra en una etapa inicial de desarrollo. Buscamos conectar con empresas, fintechs, proveedores de infraestructura de pagos y socios tecnológicos interesados en explorar nuevas formas de gestionar operaciones financieras internacionales.",
    audience: ["Empresas", "Fintechs", "Infraestructura de pagos", "Socios tecnológicos", "Inversionistas"],
  },

  form: {
    title: "Conviértete en socio inicial",
    subtitle: "Conversemos. Ayúdanos a validar el problema y dar forma al producto.",
    requiredHint: "Obligatorio",
    selectPlaceholder: "Selecciona una opción",
    fields: {
      name: { label: "Nombre completo", placeholder: "Ej. Sofía Morales" },
      email: { label: "Correo electrónico empresarial", placeholder: "sofia@empresa.com" },
      company: { label: "Nombre de la empresa", placeholder: "Nombre de tu empresa" },
      country: { label: "País", placeholder: "Ej. México" },
      companyType: { label: "Tipo de empresa", placeholder: "" },
      monthlyVolume: { label: "Volumen mensual aproximado de pagos internacionales", placeholder: "" },
      interest: {
        label: "¿Qué te gustaría explorar con Arkha?",
        placeholder: "Cuéntanos sobre tus pagos internacionales, el problema que quieres resolver o el tipo de alianza que te interesa.",
      },
    },
    options: {
      companyType: [
        "Empresa importadora, distribuidora o comercializadora",
        "Fabricante o proveedor",
        "Fintech o empresa de pagos",
        "Proveedor de infraestructura financiera",
        "Socio tecnológico",
        "Inversionista",
        "Otro",
      ],
      monthlyVolume: [
        "Menos de US$25,000",
        "US$25,000–US$100,000",
        "US$100,000–US$500,000",
        "US$500,000–US$2 millones",
        "Más de US$2 millones",
        "No aplica / estoy explorando",
      ],
    },
    consent: {
      before: "He leído y acepto el ",
      link: "Aviso de privacidad",
      after: ".",
    },
    sensitiveNote: "No compartas documentos de identidad ni datos bancarios en este formulario.",
    submit: "Enviar solicitud",
    submitting: "Enviando…",
    successTitle: "Solicitud recibida",
    successMessage: "Gracias por tu interés en Arkha. Hemos recibido tu información.",
    errors: {
      invalid: "Revisa que todos los campos obligatorios estén completos y que el correo sea válido.",
      server: "No pudimos enviar tu solicitud. Tu información sigue aquí: inténtalo de nuevo en unos minutos.",
    },
  },

  investors: {
    eyebrow: "Inversionistas y socios",
    headline: "Construyendo la próxima generación de infraestructura financiera.",
    body: [
      "Estamos explorando la tecnología, las alianzas y el modelo de negocio necesarios para construir una plataforma de pagos transfronterizos impulsada por inteligencia artificial.",
      "Nos interesa conversar con inversionistas en etapas tempranas, fundadores de fintechs, proveedores de infraestructura financiera y potenciales clientes piloto.",
    ],
    cta: "Contacta al equipo fundador",
  },

  faq: {
    headline: "Preguntas frecuentes",
    more: "¿Tienes otra pregunta?",
    moreCta: "Escríbenos",
    items: [
      {
        question: "¿Qué es Arkha?",
        answer:
          "Arkha es un proyecto en etapa inicial que está desarrollando un enfoque basado en inteligencia artificial para los pagos empresariales internacionales, con una visión a largo plazo de infraestructura financiera programable.",
      },
      {
        question: "¿Arkha ya procesa pagos?",
        answer:
          "Arkha se encuentra en una etapa inicial de desarrollo. La disponibilidad de los pagos dependerá del producto, las integraciones, los socios y los requisitos regulatorios aplicables.",
      },
      {
        question: "¿Las empresas tendrán que utilizar criptomonedas?",
        answer:
          "La experiencia prevista busca ocultar la complejidad técnica innecesaria. Arkha podría utilizar stablecoins e infraestructura blockchain cuando resulte apropiado, pero la disponibilidad dependerá de la ruta de pago y de los requisitos legales.",
      },
      {
        question: "¿Los destinatarios necesitarán una cuenta de Arkha?",
        answer:
          "La visión del producto contempla procesos en los que los destinatarios puedan recibir fondos a través de proveedores financieros existentes sin utilizar necesariamente la interfaz de Arkha. Esto dependerá de la ruta y de las integraciones disponibles.",
      },
      {
        question: "¿Qué países admitirá Arkha?",
        answer:
          "El mercado inicial objetivo es México y Estados Unidos. Se evaluarán otros corredores conforme avance el producto.",
      },
      {
        question: "¿Cómo utilizará Arkha la inteligencia artificial?",
        answer:
          "Arkha planea utilizar IA para analizar información de pagos, comparar opciones disponibles, automatizar procesos operativos y detectar anomalías. Las acciones financieras sensibles estarán sujetas a controles y autorizaciones apropiados.",
      },
      {
        question: "¿Arkha emitirá su propia criptomoneda?",
        answer:
          "Arkha no emite actualmente una criptomoneda propia. La estrategia inicial consiste en evaluar redes blockchain y stablecoins existentes, en lugar de lanzar un token propio.",
      },
      {
        question: "¿Arkha es un banco?",
        answer:
          "Arkha se está desarrollando como una plataforma tecnológica financiera. La estructura jurídica y los servicios concretos determinarán las autorizaciones, alianzas y obligaciones regulatorias que correspondan.",
      },
      {
        question: "¿Cómo puede participar mi empresa?",
        answer:
          "Las empresas y los socios tecnológicos pueden enviar sus datos a través del formulario de contacto para manifestar su interés en futuros pilotos y conversaciones sobre el producto.",
      },
    ],
  },

  footer: {
    description: "Infraestructura de pagos globales impulsada por inteligencia artificial.",
    navTitle: "Arkha",
    links: [
      { label: "Plataforma", href: "#plataforma" },
      { label: "Tecnología", href: "#tecnologia" },
      { label: "Casos de uso", href: "#casos-de-uso" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Soluciones", href: "#soluciones" },
      { label: "Contacto", href: "#contacto" },
    ],
    legalTitle: "Legal",
    legalLinks: [
      { label: "Aviso de privacidad", path: "/privacidad" },
      { label: "Términos de uso", path: "/terminos" },
    ],
    disclaimer:
      "Arkha es un proyecto en etapa inicial. Las funciones, integraciones, rutas de pago y servicios descritos en este sitio pueden estar en desarrollo y no necesariamente están disponibles para su utilización. Las referencias a activos digitales y stablecoins no constituyen una oferta de compra o venta de productos financieros. Los servicios que se ofrezcan estarán sujetos a la legislación aplicable y a las condiciones de los proveedores correspondientes.",
    rights: "Todos los derechos reservados.",
  },

  // Borradores: requieren revisión legal antes de publicar en producción
  // (razón social, domicilio y un correo para derechos ARCO).
  legal: {
    backHome: "Volver al inicio",
    updatedLabel: "Última actualización",
    updated: "14 de octubre de 2026",
    privacy: {
      title: "Aviso de privacidad",
      description: "Qué datos recaba Arkha a través de este sitio, para qué los usa y cómo puedes ejercer tus derechos.",
      intro:
        "Este aviso explica qué datos personales recaba Arkha a través de este sitio, para qué los usa y cómo puedes ejercer tus derechos sobre ellos.",
      sections: [
        {
          title: "Responsable de tus datos",
          body: [
            "Arkha es responsable del tratamiento de los datos personales que nos compartes a través de este sitio. Arkha es un proyecto en etapa inicial de desarrollo.",
          ],
        },
        {
          title: "Datos que recabamos",
          body: [
            "Únicamente los que escribes en el formulario de contacto: nombre completo, correo electrónico empresarial, nombre de la empresa, país, tipo de empresa, un rango aproximado de volumen mensual de pagos internacionales y, si decides compartirlo, un mensaje libre.",
            "No solicitamos datos personales sensibles, documentos de identidad ni información bancaria o financiera detallada. Te pedimos no incluirlos en el mensaje libre.",
          ],
        },
        {
          title: "Para qué los usamos",
          body: [
            "Para responder a tu solicitud y dar seguimiento a la conversación, y para evaluar tu interés en pilotos, alianzas tecnológicas o conversaciones de inversión relacionadas con Arkha.",
          ],
        },
        {
          title: "Cómo los protegemos y quién tiene acceso",
          body: [
            "Guardamos la información en una base de datos con acceso restringido al equipo de Arkha. Para operar el sitio y recibir avisos de nuevas solicitudes usamos proveedores de servicios tecnológicos (alojamiento, base de datos y notificaciones), que tratan los datos por cuenta de Arkha y solo para esos fines.",
            "No vendemos tus datos ni los compartimos con terceros para sus propios fines, salvo cuando lo exija la ley o una autoridad competente.",
          ],
        },
        {
          title: "Cuánto tiempo los conservamos",
          body: [
            "Mientras sean necesarios para las finalidades descritas o hasta que solicites su eliminación.",
          ],
        },
        {
          title: "Tus derechos",
          body: [
            "Puedes solicitar el acceso, la rectificación o la cancelación de tus datos, oponerte a su uso o revocar tu consentimiento. Para hacerlo, envíanos tu solicitud a través del formulario de contacto de este sitio, indicando el derecho que quieres ejercer y el correo con el que nos escribiste.",
          ],
        },
        {
          title: "Cookies",
          body: [
            "Este sitio usa una sola cookie técnica (NEXT_LOCALE) para recordar el idioma que elegiste. No usamos cookies de publicidad ni de seguimiento.",
          ],
        },
        {
          title: "Cambios a este aviso",
          body: ["Publicaremos cualquier cambio en esta página, junto con la fecha de la última actualización."],
        },
      ],
    },
    terms: {
      title: "Términos de uso",
      description: "Condiciones para usar el sitio de Arkha, un proyecto en etapa inicial.",
      intro: "Al usar este sitio aceptas estos términos. Si no estás de acuerdo con ellos, te pedimos no utilizarlo.",
      sections: [
        {
          title: "Sobre este sitio",
          body: [
            "Este sitio presenta Arkha, un proyecto en etapa inicial que explora una nueva forma de gestionar pagos empresariales internacionales. Su contenido es informativo.",
          ],
        },
        {
          title: "Funciones en desarrollo",
          body: [
            "Las funciones, integraciones, rutas de pago y servicios descritos pueden estar en desarrollo y no necesariamente están disponibles. Las ilustraciones y los diagramas son conceptuales y no muestran operaciones reales.",
          ],
        },
        {
          title: "Sin oferta ni asesoría",
          body: [
            "Nada en este sitio constituye una oferta de servicios financieros, una oferta de compra o venta de activos digitales o stablecoins, ni asesoría financiera, legal o fiscal. Los servicios que llegaran a ofrecerse estarán sujetos a la legislación aplicable y a las condiciones de los proveedores correspondientes.",
          ],
        },
        {
          title: "Formulario de contacto",
          body: [
            "Enviar el formulario no crea una relación contractual ni garantiza tu participación en pilotos, alianzas o rondas de inversión. Te comprometes a compartir información veraz y a no enviar datos sensibles. El tratamiento de tus datos se rige por el Aviso de privacidad.",
          ],
        },
        {
          title: "Uso aceptable",
          body: [
            "No uses el sitio para fines ilícitos, para enviar información falsa o mensajes no solicitados, ni para intentar vulnerar su seguridad o su funcionamiento.",
          ],
        },
        {
          title: "Propiedad intelectual",
          body: [
            "El nombre Arkha, sus logotipos, textos, diseños y demás contenidos de este sitio pertenecen a Arkha o a sus respectivos titulares y no pueden usarse sin autorización previa por escrito.",
          ],
        },
        {
          title: "Limitación de responsabilidad",
          body: [
            "El sitio se ofrece «tal cual». Procuramos que la información sea precisa y esté actualizada, pero no garantizamos que esté libre de errores ni que el sitio funcione sin interrupciones.",
          ],
        },
        {
          title: "Cambios a estos términos",
          body: ["Podemos actualizar estos términos en cualquier momento. La versión vigente es la publicada en esta página."],
        },
      ],
    },
  },

  notFound: {
    title: "Página no encontrada",
    body: "La página que buscas no existe o cambió de lugar.",
    cta: "Volver al inicio",
  },
};

export type Dictionary = typeof es;
