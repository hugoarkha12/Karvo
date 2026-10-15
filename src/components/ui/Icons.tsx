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

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.75} {...base} {...props}>
      <path d="m6 9.5 6 6 6-6" />
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

export function PlusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

/* Íconos de las tarjetas de tecnología. */

export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...props}>
      <path d="M12 3c.8 4.6 3.4 7.2 8 8-4.6.8-7.2 3.4-8 8-.8-4.6-3.4-7.2-8-8 4.6-.8 7.2-3.4 8-8Z" />
    </svg>
  );
}

/** Valor vinculado a una moneda tradicional (el "=" dentro del círculo). */
export function PegIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 10.25h7M8.5 13.75h7" />
    </svg>
  );
}

export function ContractIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...base} {...props}>
      <path d="M6 3.5h8l4 4v13H6Z" />
      <path d="M14 3.5v4h4M10.25 11.5 8.5 13.5l1.75 2M13.75 11.5l1.75 2-1.75 2" />
    </svg>
  );
}

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
