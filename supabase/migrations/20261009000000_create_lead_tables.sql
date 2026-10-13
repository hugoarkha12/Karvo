-- Formularios de la landing (ver src/lib/leads.ts).
--
-- Seguridad: RLS activo y SIN políticas. Así, con la llave pública
-- (publishable / anon) nadie puede leer ni escribir estas tablas. Solo el
-- servidor de Next.js inserta, con la llave secreta, que se salta RLS.

create table public.founder_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  locale text not null check (locale in ('es', 'en')),

  -- 01 · Datos del founder y empresa
  name text not null,
  email text not null,
  linkedin text not null,
  company text not null,
  website text,

  -- 02 · La oportunidad y el producto
  what_building text not null,
  problem_solving text not null,
  who_customer text not null,

  -- 03 · Etapa, tracción y equipo (la etapa se guarda siempre en español)
  stage text not null,
  revenue text not null,
  traction text not null,
  team text not null,

  -- 04 · Capital, por qué Karvo y deck
  capital_raised text,
  capital_sought text,
  why_karvo text not null,
  pitch_deck text not null
);

create table public.diagnostic_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  locale text not null check (locale in ('es', 'en')),

  company text not null,
  contact text not null,
  email text not null,
  industry text not null,
  challenge text not null
);

alter table public.founder_applications enable row level security;
alter table public.diagnostic_requests enable row level security;

revoke all on public.founder_applications, public.diagnostic_requests from anon, authenticated;
grant select, insert, update, delete on public.founder_applications, public.diagnostic_requests to service_role;
