import {
  Package,
  ClipboardList,
  GitCompareArrows,
  UserSquare,
  ShieldCheck,
  ChevronRight,
  Upload,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  IconBaoCaoTongQuan,
  IconQuanTriDuLieu,
  IconQuanTriGoiThau,
  IconBaoCaoTongHop,
  IconTaiKhoanCaiDat,
} from "./icons";

export type PageKey = "list" | "product";

interface NavItem {
  key?: PageKey;
  label: string;
  icon?: React.ElementType;
  badge?: number;
  children?: NavItem[];
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const SECTIONS: NavSection[] = [
  {
    title: "Phân hệ lưu trữ",
    items: [
      { label: "Báo cáo tổng quan", icon: IconBaoCaoTongQuan, badge: 5 },
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
          { label: "Danh mục gói thầu", icon: Package },
          { label: "Hồ sơ mời thầu", icon: ClipboardList },
          { label: "Đối soát dự thầu", icon: GitCompareArrows },
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
          { label: "Hồ sơ của tôi", icon: UserSquare },
          { label: "Bảo mật tài khoản", icon: ShieldCheck },
        ],
      },
    ],
  },
];

export function Sidebar({
  active,
  onNavigate,
}: {
  active: PageKey;
  onNavigate: (p: PageKey) => void;
}) {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-border bg-white">
      {/* Brand */}
      <div className="flex flex-col gap-0.5 px-6 py-5">
        <span className="text-2xl font-bold tracking-tight text-brand">viettel</span>
        <span className="text-xs text-muted-foreground">cyber security</span>
      </div>

      <div className="px-4 pb-2">
        <Button className="w-full justify-center gap-2 border border-brand bg-white text-brand hover:bg-brand-soft">
          <Upload className="size-4" />
          Tải Lên Tài Liệu
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-2">
        {SECTIONS.map((section) => (
          <div key={section.title} className="mb-4">
            <p className="px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              {section.title}
            </p>
            <div className="space-y-1">
              {section.items.map((item) => {
                if (item.children) {
                  return (
                    <Collapsible key={item.label} defaultOpen className="group/collapsible">
                      <CollapsibleTrigger className="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors text-slate-600 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                        {item.icon && <item.icon className="size-4 text-slate-400" />}
                        <span className="flex-1 text-left font-medium">{item.label}</span>
                        <ChevronRight className="size-4 text-slate-300 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pb-1 pt-1 space-y-1">
                        {item.children.map((child) => {
                          const isActive = child.key && child.key === active;
                          return (
                            <button
                              key={child.label}
                              onClick={() => child.key && onNavigate(child.key)}
                              className={`group flex w-full items-center gap-3 rounded-md pl-10 pr-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                                isActive
                                  ? "bg-brand-soft font-medium text-brand"
                                  : "text-slate-600 hover:bg-slate-50"
                              }`}
                            >
                              {child.icon && <child.icon className={`size-4 ${isActive ? "text-brand" : "text-slate-400"}`} />}
                              <span className="flex-1 text-left">{child.label}</span>
                            </button>
                          );
                        })}
                      </CollapsibleContent>
                    </Collapsible>
                  );
                }

                // Render normal item
                const isActive = item.key && item.key === active;
                return (
                  <button
                    key={item.label}
                    onClick={() => item.key && onNavigate(item.key)}
                    className={`group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                      isActive
                        ? "bg-brand-soft font-medium text-brand"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.icon && <item.icon className={`size-4 ${isActive ? "text-brand" : "text-slate-400"}`} />}
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.badge != null && (
                      <span className="flex size-5 items-center justify-center rounded-full bg-brand text-[11px] text-white">
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
        <Avatar className="size-9">
          <AvatarFallback className="bg-brand-soft text-brand">A</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">Nguyễn Văn A</p>
          <p className="truncate text-xs text-muted-foreground">Cán bộ Đầu tư</p>
        </div>
      </div>
    </aside>
  );
}
