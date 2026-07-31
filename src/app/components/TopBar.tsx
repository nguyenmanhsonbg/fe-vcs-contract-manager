import { Bell, Search } from "lucide-react";
import imgAvatar from "../../imports/SốHoaTaiLiệu-1/420fce61b2448c9eab5d25435a5e458a011f53b7.png";

export function TopBar({ breadcrumb }: { breadcrumb: string[] }) {
  return (
    <header className="px-6 pt-4 pb-2 shrink-0">
      <div className="flex h-14 items-center justify-between rounded-[10px] bg-white/95 backdrop-blur-[10px] shadow-[0px_4px_12px_-2px_rgba(47,43,61,0.16)] border border-slate-100/80 px-6 transition-all">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[13px] font-medium text-[rgba(47,43,61,0.7)]">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb} className="flex items-center gap-2">
              {i > 0 && <span className="text-slate-300">/</span>}
              <span
                className={
                  i === breadcrumb.length - 1
                    ? "font-semibold text-[rgba(47,43,61,0.9)]"
                    : "text-[rgba(47,43,61,0.6)] hover:text-[rgba(47,43,61,0.9)] cursor-pointer"
                }
              >
                {crumb}
              </span>
            </span>
          ))}
        </div>

        {/* Right Action Icons /* Right Action Icons & Profile matching Figma */ Profile */}
        <div className="flex items-center gap-4">
          {/* Search bar */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="h-8 w-60 rounded-[6px] border border-slate-200 bg-slate-50/70 pl-8 pr-3 text-xs text-slate-800 outline-none focus:border-[#ff4c51] focus:bg-white transition-colors"
            />
            <Search className="absolute left-2.5 size-3.5 text-slate-400" />
          </div>

          {/* Bell Notification */}
          <button className="relative flex size-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 transition-colors">
            <Bell className="size-4 text-slate-600" />
            <span className="absolute right-2 top-2 size-2 rounded-full bg-[#ff4c51] ring-2 ring-white" />
          </button>

          <div className="h-5 w-px bg-slate-200" />

          {/* User Profile */}
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="relative">
              <img src={imgAvatar} alt="Profile" className="size-9 rounded-full object-cover ring-2 ring-slate-100" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-[#28c76f] ring-2 ring-white" />
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-semibold text-[rgba(47,43,61,0.9)] leading-tight">Nguyễn Văn A</p>
              <p className="text-[11px] text-[rgba(47,43,61,0.5)]">Cán bộ Đầu tư</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
