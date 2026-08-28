import { Calendar } from "lucide-react";

interface DatePickerInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

export function DatePickerInput({
  value,
  onChange,
  placeholder = "YYYY. MM. DD.",
  label,
  className = "",
}: DatePickerInputProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && <label className="text-[12px] font-normal text-[#5d586c] block mb-1">{label}</label>}
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="h-[38px] w-full rounded-[6px] border border-[#dbdade] bg-white px-3 pr-8 text-[13px] text-[#2f2b3d] placeholder:text-[#8f8d95] outline-none focus:border-[#3f81ea] transition-colors"
        />
        <Calendar className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  );
}
