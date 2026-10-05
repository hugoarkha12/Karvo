/**
 * URL pública del sitio (metadata, canonical, hreflang y sitemap). Se lee al
 * hacer `next build`, así que en el servidor de producción el build debe
 * correr con `NEXT_PUBLIC_SITE_URL` definida (p. ej. https://karvo.mx); si
 * falta, esas URLs apuntarían a localhost.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
