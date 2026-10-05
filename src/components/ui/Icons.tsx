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
