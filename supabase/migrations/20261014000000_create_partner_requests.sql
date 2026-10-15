-- Formulario "Conviértete en socio inicial" de la landing de Arkha
-- (ver src/lib/leads.ts).
--
-- Seguridad: RLS activo y SIN políticas. Así, con la llave pública
-- (publishable / anon) nadie puede leer ni escribir esta tabla. Solo el
-- servidor de Next.js inserta, con la llave secreta, que se salta RLS.

create table public.partner_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  locale text not null check (locale in ('es', 'en')),

  name text not null,
  email text not null,
  company text not null,
  country text not null,

  -- Listas cerradas: se guardan siempre en español, sin importar el idioma
  -- del formulario, para poder filtrar.
  company_type text not null,
  monthly_volume text not null,

  interest text,

  -- Aceptó el aviso de privacidad (el servidor rechaza el envío si no).
  privacy_consent boolean not null check (privacy_consent)
);

create index partner_requests_created_at_idx on public.partner_requests (created_at desc);

alter table public.partner_requests enable row level security;

revoke all on public.partner_requests from anon, authenticated;
grant select, insert, update, delete on public.partner_requests to service_role;
