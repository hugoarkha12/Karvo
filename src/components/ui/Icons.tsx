type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

/** Flecha larga y delgada, como la de los botones de High Alpha. */
export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...props}>
      <path d="M2.5 12h18.5M14.5 5.5 21 12l-6.5 6.5" />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.75} {...base} {...props}>
      <path d="m14.5 6-6 6 6 6" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.75} {...base} {...props}>
      <path d="m9.5 6 6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.75} {...base} {...props}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.75} {...base} {...props}>
      <path d="m4.5 12.5 4.5 4.5L19.5 7" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...props}>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8.5 10.5V7.75a3.5 3.5 0 0 1 7 0v2.75" />
    </svg>
  );
}

export function XMarkSmallIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.75} {...base} {...props}>
      <path d="M8 8l8 8M16 8l-8 8" />
    </svg>
  );
}

/* Íconos de los servicios (apartado Soluciones). */

/** Automatización con IA. */
export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...props}>
      <path d="M12 3c.8 4.6 3.4 7.2 8 8-4.6.8-7.2 3.4-8 8-.8-4.6-3.4-7.2-8-8 4.6-.8 7.2-3.4 8-8Z" />
    </svg>
  );
}

/** Asistente conversacional. */
export function ChatIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...props}>
      <path d="M4.5 5.5h15v10h-8l-4.5 3.5v-3.5h-2.5Z" />
      <path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" strokeWidth={2.25} />
    </svg>
  );
}

/** Desarrollo de software. */
export function CodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...props}>
      <path d="m8 7.5-4.5 4.5L8 16.5M16 7.5l4.5 4.5-4.5 4.5M13.5 5.5l-3 13" />
    </svg>
  );
}

/** Sistemas conectados entre sí. */
export function NodesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...props}>
      <circle cx="6" cy="6.5" r="2.25" />
      <circle cx="18" cy="6.5" r="2.25" />
      <circle cx="12" cy="17.5" r="2.25" />
      <path d="M8.25 6.5h7.5M7.1 8.5l3.8 7M16.9 8.5l-3.8 7" />
    </svg>
  );
}

/** Embudo comercial. */
export function FunnelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...props}>
      <path d="M4 5h16l-6 7.5V19l-4-2v-4.5Z" />
    </svg>
  );
}

/** Consultoría: orientar la dirección. */
export function CompassIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15 9-1.75 4.25L9 15l1.75-4.25Z" />
    </svg>
  );
}

/** Documento de entrada (ilustración de Soluciones). */
export function DocumentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...props}>
      <path d="M6 3.5h8l4 4v13H6Z" />
      <path d="M14 3.5v4h4M9 12h6M9 15.5h6" />
    </svg>
  );
}

/** Sistema de registro: CRM, ERP (ilustración de Soluciones). */
export function DatabaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="2.75" />
      <path d="M5 6v12c0 1.5 3.1 2.75 7 2.75s7-1.25 7-2.75V6M5 12c0 1.5 3.1 2.75 7 2.75s7-1.25 7-2.75" />
    </svg>
  );
}
