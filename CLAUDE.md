@AGENTS.md

# Karvo — landing del venture studio

Sitio de una sola página en español e inglés. Referencia visual: highalpha.com.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript 7 (`next build` usa el `tsc` nativo del proyecto).
- Tailwind CSS v4: los tokens viven en `src/app/globals.css` (`@theme`). No hay `tailwind.config`.
- GSAP + ScrollTrigger + SplitText (`gsap`, `@gsap/react`) para las animaciones de scroll.
- Fuente Geist (`next/font/google`) como alternativa libre a PP Neue Montreal (la de High Alpha, con licencia comercial).

## Arquitectura

- **i18n por ruta.** `src/app/[lang]/` genera `/es` y `/en` como HTML estático (SSG). `src/proxy.ts` redirige `/` según: cookie `NEXT_LOCALE` (elección manual) → país (`cf-ipcountry` / `x-vercel-ip-country`) → `Accept-Language` → `es`.
  - Textos en `src/i18n/dictionaries/{es,en}.ts`. `es.ts` es la fuente de verdad y `en.ts` está tipado con `Dictionary`, así TypeScript marca claves faltantes. Ningún texto visible se escribe dentro de los componentes.
  - `getDictionary()` y `getLocale()` (`src/i18n/get-dictionary.ts`) leen el idioma con `next/root-params`.
- **Server Components por defecto.** Islas cliente: `Navbar`, `LanguageSwitch`, `ModalProvider` / `ModalTrigger` / formularios, `VenturesCarousel` y `MotionRoot`.
- **Animaciones.** Las secciones marcan elementos con `data-anim="title|copy|fade|stagger|zoom|draw"` y `src/components/motion/MotionRoot.tsx` (un solo componente) aplica GSAP. El hero usa CSS (`intro-rise`, `intro-slide`) para no depender de JavaScript. Todo respeta `prefers-reduced-motion`.
- **Modales.** `<dialog>` nativo (`src/components/modals/Dialog.tsx`). Se abren con `<ModalTrigger modal="founder|diagnostic|arkha">` o con los enlaces `#apply`, `#diagnostic`, `#arkha`.
- **Formularios.** `submitLead()` en `src/lib/leads.ts` es el único punto de envío. **Hoy solo simula el envío: los datos no se guardan.** Falta decidir el destino (correo, CRM, base de datos).
- **Ventures.** `src/components/sections/ventures/`: el carrusel (cliente) solo cambia de slide; los mosaicos (`tiles.tsx`) se dibujan en el servidor con HTML/SVG y unidades `cqw`. Para usar fotos o capturas reales, reemplaza el mosaico por un `<Image>`.

## Design system

- Colores: `canvas #f6f6f6`, `surface #fff`, `ink #171717`, `ink-soft` / `ink-muted` (76 % / 60 %), `line #cecece`, `graphite` (bordes sobre oscuro), `accent #0052FF` (azul Karvo).
- Tipografía fluida: `text-display`, `text-h2…h4`, `text-p-xl…p-sm`, `text-eyebrow`. Titulares en peso 400 y en oración, no en MAYÚSCULAS.
- Radio `rounded-card` (6px) y botones píldora.
- Primitivas en `src/components/ui/`: `Section`, `Container`, `Button`, `Tag`, `Eyebrow`, `Icons`, `Logo`. Encabezado estándar de sección: `sections/SectionHeader.tsx`.
- `cn()` (`src/lib/utils.ts`) registra la escala tipográfica en tailwind-merge. Si agregas un tamaño en `@theme`, agrégalo también ahí.
- Clases arbitrarias de Tailwind sin espacios (usa `_`), porque Tailwind separa las clases por espacios.

## Flujo de trabajo

- Ramas por persona (`rama-alexv`, …) y `main` como rama principal.
- Commits con Conventional Commits en español (`feat:`, `fix:`, `chore:`, `build:`, `docs:`, `refactor:`).
- Antes de subir: `npm run typecheck` y `npm run build`.
- Despliegue: **no se usa Vercel**; el sitio vive en un hosting con dominio propio. El build de producción necesita `NEXT_PUBLIC_SITE_URL` (dominio público) y un servidor Node (`next start`) para que funcione `proxy.ts`.
