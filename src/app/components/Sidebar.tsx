import {
  ChevronRight,
  Upload,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  IconBaoCaoTongQuan,
  IconQuanTriDuLieu,
  IconQuanTriGoiThau,
  IconBaoCaoTongHop,
  IconTaiKhoanCaiDat,
} from "./icons";
import imgImage2 from "../../imports/SốHoaTaiLiệu-1/01342b2bb964441edcb3fd61de43edf5fdb34da6.png";
import imgAvatar from "../../imports/SốHoaTaiLiệu-1/420fce61b2448c9eab5d25435a5e458a011f53b7.png";

export type PageKey = "list" | "product";

interface NavItem {
  key?: PageKey;
  label: string;
  icon?: React.ElementType;
  badge?: number;
  children?: NavItem[];
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

const SECTIONS: NavSection[] = [
  {
    items: [
      { label: "Báo cáo tổng quan", icon: IconBaoCaoTongQuan },
    ],
  },
  {
    title: "Phân hệ lưu trữ",
    items: [
      {
        label: "Quản trị dữ liệu",
        icon: IconQuanTriDuLieu,
        children: [
          { key: "list", label: "Số hoá tài liệu" },
          { key: "product", label: "Tìm kiếm sản phẩm" },
          { label: "Quản lý tờ trình" },
          { label: "Quản lý hợp đồng" },
        ],
      },
    ],
  },
  {
    title: "Phân hệ đấu thầu",
    items: [
      {
        label: "Quản trị gói thầu",
        icon: IconQuanTriGoiThau,
        children: [
          { label: "Danh mục gói thầu" },
          { label: "Hồ sơ mời thầu" },
          { label: "Đối soát dự thầu" },
        ],
      },
    ],
  },
  {
    title: "Phân tích & báo cáo",
    items: [{ label: "Báo cáo tổng hợp", icon: IconBaoCaoTongHop }],
  },
  {
    title: "Tài khoản & cài đặt",
    items: [
      {
        label: "Tài khoản & Cài đặt",
        icon: IconTaiKhoanCaiDat,
        children: [
          { label: "Hồ sơ của tôi" },
          { label: "Bảo mật tài khoản" },
        ],
      },
    ],
  },
];

export function Sidebar({
  active,
  onNavigate,
  onUploadClick,
}: {
  active: PageKey;
  onNavigate: (p: PageKey) => void;
  onUploadClick?: () => void;
}) {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col bg-white z-20 shadow-[2px_0px_12px_0px_rgba(47,43,61,0.12)] border-r border-slate-100/60">
      {/* Brand Logo */}
      <div className="flex items-center justify-center px-6 py-4 border-b border-slate-100">
        <img src={imgImage2} alt="Viettel Cyber Security" className="h-[52px] object-contain" />
      </div>

      <div className="px-4 pt-3 pb-2">
        <Button
          onClick={onUploadClick}
          className="w-full justify-center gap-2 border border-[#ff4c51] bg-white text-[#ff4c51] hover:bg-[#fff5f5]"
        >
          <Upload className="size-4" />
          Tải Lên Tài Liệu
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-4">
        {SECTIONS.map((section, idx) => (
          <div key={section.title || `sec-${idx}`}>
            {section.title && (
              <p className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {section.title}
              </p>
            )}
            <div className="space-y-1">
              {section.items.map((item) => {
                if (item.children) {
                  return (
                    <Collapsible key={item.label} defaultOpen className="group/collapsible">
                      <CollapsibleTrigger className="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors text-slate-700 hover:bg-slate-50 focus-visible:outline-none">
                        {item.icon && <item.icon className="size-4 text-slate-500 shrink-0" />}
                        <span className="flex-1 text-left font-medium text-slate-800">{item.label}</span>
                        <ChevronRight className="size-4 text-slate-300 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pb-1 pt-1 space-y-1">
                        {item.children.map((child) => {
                          const isActive = child.key && child.key === active;
                          return (
                            <button
                              key={child.label}
                              onClick={() => child.key && onNavigate(child.key)}
                              className={`group flex w-full items-center rounded-md pl-9 pr-3 py-2 text-xs transition-colors focus-visible:outline-none ${isActive
                                  ? "bg-[#ff4c51]/10 font-semibold text-[#ff4c51]"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                            >
                              <span className="flex-1 text-left">{child.label}</span>
                            </button>
                          );
                        })}
                      </CollapsibleContent>
                    </Collapsible>
                  );
                }

                // Render normal item (main item with icon)
                const isActive = item.key && item.key === active;
                return (
                  <button
                    key={item.label}
                    onClick={() => item.key && onNavigate(item.key)}
                    className={`group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none ${isActive
                        ? "bg-[#ff4c51]/10 font-semibold text-[#ff4c51]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                  >
                    {item.icon && <item.icon className={`size-4 shrink-0 ${isActive ? "text-[#ff4c51]" : "text-slate-500"}`} />}
                    <span className="flex-1 text-left font-medium">{item.label}</span>
                    {item.badge != null && (
                      <span className="flex size-5 items-center justify-center rounded-full bg-[#ff4c51] text-[10px] font-bold text-white">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-3 border-t border-border px-4 py-3">
        <img src={imgAvatar} alt="Avatar" className="size-10 rounded-full object-cover shrink-0" />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-slate-800">Nguyễn Văn A</p>
          <p className="truncate text-xs text-slate-400">Cán bộ Đầu tư</p>
        </div>
      </div>
    </aside>
  );
}
