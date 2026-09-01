import { Bell, ChevronDown } from "lucide-react";
import { IconFlagVietnam } from "../icons";
import imgLogo from "../../../imports/SốHoaTaiLiệu-1/01342b2bb964441edcb3fd61de43edf5fdb34da6.png";

export function TopBar({ breadcrumb }: { breadcrumb: string[] }) {
  return (
    <header className="w-full bg-white border-b border-slate-200/80 shrink-0 z-10">
      <div className="flex h-14 items-center justify-between px-6 transition-all">
        {/* Left: Viettel Security Logo & Breadcrumb */}
        <div className="flex items-center gap-4">
          <img
            src={imgLogo}
            alt="Viettel Cyber Security"
            className="h-7 object-contain cursor-pointer"
          />

          <div className="h-4 w-px bg-slate-200" />

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] font-medium text-[rgba(47,43,61,0.7)]">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb} className="flex items-center gap-2">
                {i > 0 && <span className="text-slate-300">/</span>}
                <span
                  className={
                    i === breadcrumb.length - 1
                      ? "font-semibold text-[#2f2b3d]"
                      : "text-[#8a8996] hover:text-[#2f2b3d] cursor-pointer"
                  }
                >
                  {crumb}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Right: Actions, Flag, & Profile */}
        <div className="flex items-center gap-5">
          {/* Bell Notification */}
          <button className="relative flex size-8 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer">
            <Bell className="size-4.5 text-slate-700" />
            <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-[#ff4c51] ring-2 ring-white" />
          </button>

          {/* User Profile Avatar Circle with Chevron */}
          <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="flex size-7.5 items-center justify-center rounded-full border border-[#ff4c51] text-[#ff4c51] font-bold text-xs bg-red-50/40 shadow-2xs">
              H
            </div>
            <ChevronDown className="size-3.5 text-slate-400" />
          </div>

          <div className="h-4 w-px bg-slate-200" />

          {/* Language Flag (Vietnam) */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <IconFlagVietnam className="size-5 rounded-[2px] shadow-2xs" />
            <span className="text-xs font-semibold text-slate-700 uppercase">VIE</span>
          </div>
        </div>
      </div>
    </header>
  );
}
