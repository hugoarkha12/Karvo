import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@/components/ui/Icons";

export type FieldConfig<Name extends string = string> = {
  name: Name;
  as?: "input" | "textarea" | "select";
  type?: "text" | "email" | "url";
  required?: boolean;
  autoComplete?: string;
  /** Ocupa las dos columnas en pantallas medianas. */
  wide?: boolean;
};

const control =
  "w-full rounded-card border border-line bg-surface px-4 text-p-sm text-ink transition-colors placeholder:text-ink-muted hover:border-ink/40 focus:border-ink focus:outline-hidden";

export function Field({
  config,
  label,
  placeholder,
  options,
  requiredHint,
}: {
  config: FieldConfig;
  label: string;
  placeholder?: string;
  options?: string[];
  requiredHint: string;
}) {
  const { name, as = "input", type = "text", required, autoComplete, wide } = config;
  const id = `field-${name}`;

  return (
    <div className={cn("flex flex-col gap-2", wide && "sm:col-span-2")}>
      <label htmlFor={id} className="text-[0.9375rem] text-ink-soft">
        {label}
        {required && (
          <span className="text-accent" title={requiredHint}>
            {" "}*<span className="sr-only"> ({requiredHint})</span>
          </span>
        )}
      </label>

      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={3}
          placeholder={placeholder}
          className={cn(control, "min-h-28 resize-y py-3.5 leading-[1.45]")}
        />
      ) : as === "select" ? (
        <div className="relative">
          <select
            id={id}
            name={name}
            required={required}
            defaultValue={options?.[0]}
            className={cn(control, "min-h-14 appearance-none pr-12")}
          >
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2" />
        </div>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={cn(control, "min-h-14")}
        />
      )}
    </div>
  );
}
