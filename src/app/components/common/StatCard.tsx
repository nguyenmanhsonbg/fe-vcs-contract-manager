import type { ElementType, ReactNode } from "react";

export interface StatCardProps {
  title: string;
  value: ReactNode;
  icon?: ElementType;
  iconBgClass?: string;
  valueClass?: string;
  subtext?: ReactNode;
  trend?: ReactNode;
  trendSubtext?: string;
  trendUp?: boolean;
  bottomBarBg?: string;
  bottomBorderColor?: string;
  footerIcon?: ElementType;
  footerClass?: string;
  footerText?: ReactNode;
  className?: string;
  variant?: "default" | "accent-bottom" | "horizontal";
  accentColor?: string;
  extraContent?: ReactNode;
  onClick?: () => void;
}

export function StatCard({
  title,
  value,
  icon: Icon,
  iconBgClass = "bg-blue-50 text-blue-600",
  valueClass = "text-slate-800",
  subtext,
  trend,
  trendSubtext,
  trendUp = true,
  bottomBarBg,
  footerIcon: FooterIcon,
  footerClass,
  footerText,
  className = "",
  variant = "default",
  accentColor,
  extraContent,
  onClick,
}: StatCardProps) {
  if (variant === "horizontal") {
    return (
      <div
        onClick={onClick}
        className={`flex items-center gap-4 rounded-[8px] border border-slate-200 bg-white p-4 shadow-2xs ${className}`}
      >
        {Icon && (
          <div className={`flex size-11 shrink-0 items-center justify-center rounded-[8px] ${iconBgClass}`}>
            <Icon className="size-5" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <span className="text-xs font-medium text-slate-500 block truncate">{title}</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className={`text-2xl font-bold text-[#2f2b3d] leading-none ${valueClass}`}>
              {value}
            </span>
            {subtext && <span className="text-[11px] text-slate-400 truncate">{subtext}</span>}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "accent-bottom") {
    return (
      <div
        onClick={onClick}
        className={`flex h-[108px] items-center rounded-[6px] border border-slate-200/80 bg-white p-6 shadow-[0_2px_8px_rgba(47,43,61,0.12)] ${className}`}
      >
        <div className="flex items-center gap-4 w-full">
          {Icon && (
            <div
              className={`flex size-10 items-center justify-center rounded-[6px] shrink-0 ${iconBgClass}`}
              style={
                accentColor
                  ? { color: accentColor, backgroundColor: `${accentColor}22` }
                  : undefined
              }
            >
              <Icon className="size-6" />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-medium leading-[18px] text-[#5d586c] truncate">{title}</p>
            {extraContent ? (
              <div className="text-[18px] font-medium leading-[38px]" style={{ color: accentColor }}>
                {extraContent}
              </div>
            ) : (
              <p
                className="text-[24px] font-medium leading-[38px] truncate"
                style={{ color: accentColor }}
              >
                {value}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl p-5 shadow-[0_4px_16px_rgba(47,43,61,0.08)] border border-slate-100 flex flex-col justify-between overflow-hidden relative ${className}`}
    >
      <div className="flex items-center gap-3.5">
        {Icon && (
          <div className={`size-11 rounded-xl shrink-0 flex items-center justify-center ${iconBgClass}`}>
            <Icon className="size-5 stroke-[2]" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <span className="text-[12px] font-medium text-slate-500 leading-snug block truncate">{title}</span>
          <div className={`text-[24px] font-bold mt-1 leading-tight tracking-tight ${valueClass}`}>
            {value}
          </div>
        </div>
      </div>

      {(trend || trendSubtext || footerText || FooterIcon) && (
        <div className="mt-4 flex items-center gap-1.5 text-[12px]">
          {FooterIcon && (
            <FooterIcon className={`size-3.5 shrink-0 ${footerClass || "text-slate-400"}`} />
          )}
          {trend && (
            <span className={`font-semibold ${trendUp ? "text-[#28c76f]" : "text-[#ff4c51]"}`}>
              {trend}
            </span>
          )}
          {footerText && (
            <span className={`font-medium ${footerClass || "text-slate-600"}`}>
              {footerText}
            </span>
          )}
          {trendSubtext && <span className="text-slate-400 font-normal">{trendSubtext}</span>}
        </div>
      )}
    </div>
  );
}
