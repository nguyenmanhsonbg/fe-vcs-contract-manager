import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
  descriptionClassName?: string;
}

export function PageHeader({
  title,
  description,
  action,
  className = "",
  descriptionClassName = "text-[12px] leading-[17px] text-slate-500",
}: PageHeaderProps) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${className}`}>
      <div>
        <h1 className="text-[24px] font-bold leading-[29px] text-[#2F2B3D] tracking-tight">{title}</h1>
        {description && (
          <div className={`mt-1 ${descriptionClassName}`}>{description}</div>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
