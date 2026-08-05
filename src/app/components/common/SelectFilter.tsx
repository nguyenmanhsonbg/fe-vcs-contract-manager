import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectFilterProps {
  label?: string;
  value: string | number;
  onChange: (value: string) => void;
  options?: SelectOption[];
  children?: ReactNode;
  className?: string;
}

export function SelectFilter({
  label,
  value,
  onChange,
  options,
  children,
  className = "",
}: SelectFilterProps) {
  return (
    <label className={`space-y-1.5 text-[12px] font-medium text-[#5d586c] block ${className}`}>
      {label && <span>{label}</span>}
      <span className="relative block">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-9 w-full appearance-none rounded-[6px] border border-slate-200 bg-white px-3 pr-8 text-[13px] text-[#393740] outline-none focus:border-[#3f81ea] cursor-pointer"
        >
          {options
            ? options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))
            : children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
      </span>
    </label>
  );
}
