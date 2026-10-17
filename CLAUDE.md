@AGENTS.md

# Arkha — landing de infraestructura de pagos globales

Rama `arkha`: nace de la landing de Karvo (mismo stack y mismo sistema visual) y presenta Arkha, un proyecto en etapa inicial de pagos empresariales internacionales con IA, empezando por el corredor México–Estados Unidos. Sitio en español e inglés. Referencia visual de base: highalpha.com.

**Regla de contenido:** Arkha está en etapa inicial. Ningún texto, ilustración o diagrama puede presentar funciones planeadas como si ya operaran: sin montos, contadores, logos de clientes, estadísticas sin fuente ni promesas de velocidad, ahorro o seguridad. Las ilustraciones se marcan como conceptuales.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript 7 (`next build` usa el `tsc` nativo del proyecto).
- Tailwind CSS v4: los tokens viven en `src/app/globals.css` (`@theme`). No hay `tailwind.config`.
- GSAP + ScrollTrigger + SplitText (`gsap`, `@gsap/react`) para las animaciones de scroll.
- Fuente Geist (`next/font/google`) como alternativa libre a PP Neue Montreal (la de High Alpha, con licencia comercial).

## Arquitectura

- **Rutas.** `src/app/[lang]/` genera como HTML estático (SSG) `/es`, `/en`, `/{lang}/privacidad`, `/{lang}/terminos` y una imagen Open Graph por idioma (`opengraph-image.tsx`). `src/proxy.ts` redirige `/` según: cookie `NEXT_LOCALE` (elección manual) → país (`cf-ipcountry` / `x-vercel-ip-country`) → `Accept-Language` → `es`.
  - Textos en `src/i18n/dictionaries/{es,en}.ts`. `es.ts` es la fuente de verdad y `en.ts` está tipado con `Dictionary`, así TypeScript marca claves faltantes. Ningún texto visible se escribe dentro de los componentes.
  - `getDictionary()` y `getLocale()` (`src/i18n/get-dictionary.ts`) leen el idioma con `next/root-params`.
  - Los enlaces del navbar y del footer llevan el idioma (`/es#plataforma`) para funcionar también desde las páginas legales; `LanguageSwitch` recibe `path` para conservar la página al cambiar de idioma.
- **Secciones** (`src/components/sections/`, en orden): Hero → Problem (`#desafio`) → Platform (`#plataforma`) → HowItWorks (`#como-funciona`) → Technology (`#tecnologia`) → Market (`#casos-de-uso`) → Vision (`#nosotros`) → WhyArkha → Solutions (`#soluciones`) → Partners (`#contacto`, con el formulario) → Investors → Faq. Todos los CTA llevan a `#contacto`.
  - **Solutions** es el apartado de servicios tecnológicos para empresas (automatización con IA, agentes, software a medida, integraciones…): introducción, seis servicios (`#servicios`), "Cómo trabajamos" y un cierre en tarjeta oscura. Texto en `solutions` del diccionario; cada servicio tiene una `key` que elige su ícono. Sus CTA ("Agenda una consulta", "Hablemos de tu proyecto") también llevan al formulario de `#contacto`, porque no hay herramienta de agenda.
- **Ilustraciones** (`src/components/graphics/`): `NetworkGraphic` (hero: red EE. UU. arriba / México abajo conectada por Arkha), `PlatformDiagram` (arquitectura conceptual) y `CorridorGraphic` (corredor MX–US). Son HTML/SVG dibujados en el servidor; los pulsos usan SMIL (`animateMotion`) y se ocultan con `motion-reduce:hidden`.
- **Server Components por defecto.** Islas cliente: `Navbar`, `LanguageSwitch`, `PartnerForm` y `MotionRoot`.
- **Animaciones.** Las secciones marcan elementos con `data-anim="title|copy|fade|stagger|zoom|draw"` y `src/components/motion/MotionRoot.tsx` (un solo componente) aplica GSAP. El hero usa CSS (`intro-rise`, `intro-slide`) para no depender de JavaScript. Todo respeta `prefers-reduced-motion`.
- **Formulario de socios.** `PartnerForm` (`src/components/forms/`) envía con `submitLead()` (`src/lib/leads.ts`), una Server Action y el único punto de envío:
  1. Antispam sin servicios externos: campo honeypot y tiempo mínimo de llenado (`lead-fields.ts`). A un bot se le responde "ok" sin guardar nada.
  2. Valida en el servidor con las reglas de `src/lib/lead-fields.ts` (las mismas que dibujan el formulario), incluida la casilla obligatoria del aviso de privacidad.
  3. Guarda en Supabase. **Supabase es la fuente de verdad.** Si falla, el formulario muestra error y conserva lo escrito; el mensaje de éxito solo aparece si el servidor confirmó el guardado.
  4. Después de responder (`after()`), avisa por Discord (`discord.ts`) y por correo con la API de Resend (`email.ts`, sin dependencias). Ambos son opcionales: si falta su variable, solo queda constancia en el log.
  - Tabla `partner_requests` en `supabase/migrations/` (se aplica en el SQL Editor de Supabase). RLS activo y sin políticas: solo el servidor escribe, con la llave secreta (`src/lib/supabase.ts`, protegido con `server-only`).
  - Las listas cerradas (tipo de empresa, volumen mensual) se guardan siempre en español para poder filtrar sin importar el idioma del formulario.
  - Variables: `SUPABASE_URL`, `SUPABASE_SECRET_KEY`, `RESEND_API_KEY`, `LEADS_EMAIL_FROM`, `LEADS_EMAIL_TO`, `DISCORD_WEBHOOK_URL` (ver `.env.example`). Ninguna lleva `NEXT_PUBLIC_`: son secretas.
- **Páginas legales.** Plantilla `src/components/layout/LegalPage.tsx`; el texto vive en `legal` del diccionario. Son un **borrador**: antes de producción falta revisión legal (razón social, domicilio y un correo para derechos ARCO).

## Design system

- Colores: `canvas #fff` (fondo de la página), `mist #f6f6f6` (secciones y paneles secundarios), `surface #fff` (tarjetas sobre `mist`), `ink #171717`, `ink-soft` / `ink-muted` (76 % / 60 %), `line #cecece`, `graphite` (bordes sobre oscuro), `accent #0052FF`, `danger #c4320a` (errores de formulario).
- Reglas del documento de marca: página **predominantemente blanca**; **azul solo en elementos interactivos** (botones, enlaces, formulario) y en las ilustraciones, nunca en texto estático; secciones oscuras solo en puntos estratégicos (Cómo funciona, Visión, Inversionistas, footer).
- `Section` acepta `tone="canvas|mist|dark"`. Hoy van en `mist`: Problem, Technology y Solutions. Partners va en blanco, con la tarjeta del formulario con borde, para no fundirse con Solutions.
- Logos en `src/components/ui/Logo.tsx` (`ArkhaSymbol`, `ArkhaWordmark`, `ArkhaLogo`): vectorizados de los PNG de marca, usan `currentColor`. Si se pinta el wordmark con transparencia, usar un color opaco (sus trazos se traslapan). `public/logo.svg` y `src/app/icon.svg` usan las mismas rutas.
- Tipografía fluida: `text-display`, `text-h2…h4`, `text-p-xl…p-sm`, `text-eyebrow`. Titulares en peso 400 y en oración, no en MAYÚSCULAS; el énfasis del titular es en dos tonos de tinta (`ink` / `ink-muted`), no en azul.
- Radio `rounded-card` (6px) y botones píldora.
- Primitivas en `src/components/ui/`: `Section`, `Container`, `Button`, `Tag`, `Eyebrow`, `Icons`, `Logo`. Encabezado estándar de sección: `sections/SectionHeader.tsx` (`SectionHeader` + `SectionCopy`).
- `cn()` (`src/lib/utils.ts`) registra la escala tipográfica en tailwind-merge. Si agregas un tamaño en `@theme`, agrégalo también ahí.
- Clases arbitrarias de Tailwind sin espacios (usa `_`), porque Tailwind separa las clases por espacios.

## Flujo de trabajo

- Ramas por persona (`rama-alexv`, …), `arkha` para este sitio y `main` como rama principal.
- Commits con Conventional Commits en español (`feat:`, `fix:`, `chore:`, `build:`, `docs:`, `refactor:`).
- Antes de subir: `npm run typecheck` y `npm run build`.
- Despliegue: **no se usa Vercel**; el sitio vive en un hosting con dominio propio. El build de producción necesita `NEXT_PUBLIC_SITE_URL` (dominio público) y un servidor Node (`next start`) para que funcionen `proxy.ts` y la Server Action del formulario; el servidor necesita además las variables de Supabase, Resend y Discord. Detén el servidor con `SIGTERM` (no `kill -9`) para que termine los avisos pendientes de `after()`.
