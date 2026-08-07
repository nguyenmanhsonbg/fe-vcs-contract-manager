import React, { useState } from "react";
import { ChevronRight, Upload } from "lucide-react";
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
  IconPhuongAnKinhDoanh,
  IconBaoCaoTongHop,
  IconTaiKhoanCaiDat,
  IconMenuHamburger,
} from "./icons";
import imgAvatar from "../../imports/SốHoaTaiLiệu-1/420fce61b2448c9eab5d25435a5e458a011f53b7.png";

export type PageKey = "overview" | "list" | "product" | "proposal" | "contract" | "login";

export interface NavItem {
  key?: PageKey;
  label: string;
  icon?: React.ElementType;
  children?: NavItem[];
}

export const SECTIONS: NavItem[] = [
  {
    key: "overview",
    label: "Báo cáo tổng quan",
    icon: IconBaoCaoTongQuan,
  },
  {
    label: "Quản trị dữ liệu",
    icon: IconQuanTriDuLieu,
    children: [
      { key: "list", label: "Số hóa tài liệu" },
      { key: "product", label: "Tìm kiếm sản phẩm" },
      { key: "proposal", label: "Quản lý tờ trình" },
      { key: "contract", label: "Quản lý hợp đồng" },
    ],
  },
  {
    label: "Quản trị gói thầu",
    icon: IconQuanTriGoiThau,
    children: [
      { label: "Danh mục gói thầu" },
      { label: "Hồ sơ sơ mời thầu" },
      { label: "Đối soát dự thầu" },
    ],
  },
  {
    label: "Phương án kinh doanh",
    icon: IconPhuongAnKinhDoanh,
    children: [
      { label: "Quản lý phương án kinh doanh" },
      { label: "Phân bổ ngân sách" },
      { label: "Quản lý nghiệm thu" },
    ],
  },
  {
    label: "Phân tích & báo cáo",
    icon: IconBaoCaoTongHop,
    children: [
      { label: "Báo cáo tổng hợp" },
      { label: "Báo cáo đối sánh & nghiệm thu" },
    ],
  },
  {
    label: "Tài khoản & Cài đặt",
    icon: IconTaiKhoanCaiDat,
    children: [
      { label: "Hồ sơ của tôi" },
      { label: "Bảo mật tài khoản" },
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
  const [isMini, setIsMini] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Helper to check if section or any child is active
  const isSectionActive = (item: NavItem): boolean => {
    if (item.key && item.key === active) return true;
    if (item.children) {
      return item.children.some((c) => c.key && c.key === active);
    }
    return false;
  };

  return (
    <aside
      className={`relative flex h-full shrink-0 flex-col bg-[#25252a] text-white z-30 transition-[width] duration-300 ease-in-out border-r border-[#2d2e38] ${
        isMini ? "w-[70px] overflow-visible" : "w-64 overflow-x-hidden"
      }`}
    >
      {/* Header Bar */}
      <div
        className={`flex items-center border-b border-[#35353d] px-4 py-4 transition-all duration-300 ${
          isMini ? "justify-center" : "justify-between"
        }`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => setIsMini(!isMini)}
            className="flex size-8 shrink-0 items-center justify-center rounded-[6px] text-slate-400 hover:bg-[#323444] hover:text-white transition-colors"
            title={isMini ? "Mở rộng menu" : "Thu gọn menu"}
          >
            <IconMenuHamburger className="size-5" />
          </button>

          <div
            className={`flex flex-col whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
              isMini ? "max-w-0 opacity-0" : "max-w-[160px] opacity-100"
            }`}
          >
            <span className="text-base font-bold tracking-tight text-white leading-tight">
              V-PĐT
            </span>
            <span className="text-xs font-normal text-[#92929a]">
              Phòng đầu tư
            </span>
          </div>
        </div>
      </div>

      {/* Upload Document Button */}
      <div className="px-3 py-2 border-b border-[#35353d] flex items-center justify-center">
        {isMini ? (
          <button
            onClick={onUploadClick}
            className="flex size-10 items-center justify-center rounded-[6px] border border-[#444656] bg-[#2b2c34] text-white hover:bg-[#343644] transition-colors"
            title="Tải lên tài liệu"
          >
            <Upload className="size-4" />
          </button>
        ) : (
          <Button
            onClick={onUploadClick}
            className="w-full justify-center gap-2 border border-[#444656] bg-[#2b2c34] text-white hover:bg-[#343644] transition-colors rounded-[6px] font-medium text-xs h-10 shadow-xs whitespace-nowrap overflow-hidden"
          >
            <Upload className="size-4 text-slate-300 shrink-0" />
            <span className="truncate">Tải Lên Tài Liệu</span>
          </Button>
        )}
      </div>

      {/* Navigation List */}
      <nav className={`flex-1 px-3 py-0 ${isMini ? "overflow-visible" : "overflow-y-auto overflow-x-hidden"}`}>
        {SECTIONS.map((item, idx) => {
          const hasChildren = Boolean(item.children && item.children.length > 0);
          const activeState = isSectionActive(item);

          if (isMini) {
            // Mini Mode Item Render
            return (
              <div
                key={item.label}
                className="relative flex justify-center py-2 border-b border-[#35353d] last:border-b-0"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <button
                  onClick={() => {
                    if (item.key) onNavigate(item.key);
                  }}
                  className={`flex size-10 items-center justify-center rounded-[6px] transition-all ${
                    activeState
                      ? "bg-[#ff4c51] text-white shadow-md shadow-[#ff4c51]/30"
                      : "text-[#a1a0ac] hover:bg-[#323444] hover:text-white"
                  }`}
                >
                  {item.icon && <item.icon className="size-5" />}
                </button>

                {/* Mini Mode Floating Detail Popover (Figma Node 28072-47554) */}
                {hoveredIdx === idx && (
                  <div
                    className="absolute left-full ml-3 top-0 z-50 w-64 rounded-[6px] border border-white/10 bg-[#25252a] p-4 text-white shadow-[0_12px_32px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-95 duration-150 before:absolute before:-left-5 before:-top-4 before:-bottom-4 before:w-6"
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <p className="text-sm font-semibold tracking-tight text-slate-100 mb-3">
                      {item.label}
                    </p>

                    {hasChildren ? (
                      <div className="relative rounded-[6px] border border-white/[0.08] bg-[#1c1d22] p-3 space-y-3 overflow-hidden">
                        {/* Static Timeline vertical connector line */}
                        <div className="absolute left-[27px] top-4.5 bottom-4.5 w-px bg-[#484a56] z-0" />

                        {item.children?.map((child) => {
                          const isChildActive = child.key && child.key === active;
                          return (
                            <button
                              key={child.label}
                              onClick={() => {
                                if (child.key) {
                                  onNavigate(child.key);
                                  setHoveredIdx(null);
                                }
                              }}
                              className="group relative flex w-full items-center gap-3 pl-3 pr-2 py-1 text-xs text-left transition-colors"
                            >
                              <span
                                className={`size-2 rounded-full z-10 shrink-0 ${
                                  isChildActive
                                    ? "bg-[#ff4c51]"
                                    : "bg-[#6b6c7a]"
                                }`}
                              />
                              <span
                                className={`flex-1 truncate ${
                                  isChildActive
                                    ? "font-semibold text-[#ff4c51]"
                                    : "text-[#d1d1db] group-hover:text-white"
                                }`}
                              >
                                {child.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          if (item.key) {
                            onNavigate(item.key);
                            setHoveredIdx(null);
                          }
                        }}
                        className={`w-full text-left px-3 py-2 text-xs rounded-[6px] transition-colors ${
                          activeState
                            ? "bg-[#ff4c51] text-white font-semibold"
                            : "text-[#d1d1db] hover:bg-[#323444] hover:text-white"
                        }`}
                      >
                        Truy cập {item.label}
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          }

          // Expanded Mode Item Render
          return (
            <div key={item.label} className="border-b border-[#35353d] py-2 last:border-b-0">
              {hasChildren ? (
                <Collapsible defaultOpen className="group/collapsible">
                  <CollapsibleTrigger
                    className={`group flex w-full items-center gap-3 rounded-[6px] px-3.5 py-2.5 text-sm transition-all focus-visible:outline-none ${
                      activeState
                        ? "bg-[#ff4c51] text-white font-semibold shadow-md shadow-[#ff4c51]/20"
                        : "text-slate-300 hover:bg-[#323444] hover:text-white"
                    }`}
                  >
                    {item.icon && (
                      <item.icon
                        className={`size-4.5 shrink-0 ${
                          activeState ? "text-white" : "text-[#a1a0ac] group-hover:text-white"
                        }`}
                      />
                    )}
                    <span
                      className={`flex-1 text-left font-medium truncate ${
                        activeState ? "text-white font-semibold" : "text-slate-200 group-hover:text-white"
                      }`}
                    >
                      {item.label}
                    </span>
                    <ChevronRight
                      className={`size-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 ${
                        activeState ? "text-white" : "text-slate-400 group-hover:text-white"
                      }`}
                    />
                  </CollapsibleTrigger>

                  <CollapsibleContent className="py-1 animate-collapsible">
                    {/* Inner sub-panel with tree timeline design */}
                    <div className="relative rounded-[6px] border border-white/[0.06] bg-[#1c1d22] p-3 space-y-2 overflow-hidden">
                      {/* Static Timeline line */}
                      <div className="absolute left-[27px] top-4.5 bottom-4.5 w-px bg-[#484a56] z-0" />

                      {item.children?.map((child) => {
                        const isChildActive = child.key && child.key === active;
                        return (
                          <button
                            key={child.label}
                            onClick={() => child.key && onNavigate(child.key)}
                            className={`group relative flex w-full items-center gap-3 pl-3 pr-2 py-1.5 text-xs text-left rounded-[4px] transition-colors ${
                              isChildActive
                                ? "bg-[#282934] text-[#ff4c51] font-semibold"
                                : "text-[#a1a0ac] hover:bg-[#252630] hover:text-white"
                            }`}
                          >
                            <span
                              className={`size-2 rounded-full z-10 shrink-0 ${
                                isChildActive
                                  ? "bg-[#ff4c51]"
                                  : "bg-[#6b6c7a]"
                              }`}
                            />
                            <span className="flex-1 truncate">
                              {child.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <button
                  onClick={() => item.key && onNavigate(item.key)}
                  className={`group flex w-full items-center gap-3 rounded-[6px] px-3.5 py-2.5 text-sm transition-all focus-visible:outline-none ${
                    activeState
                      ? "bg-[#ff4c51] text-white font-semibold shadow-md shadow-[#ff4c51]/20"
                      : "text-slate-300 hover:bg-[#323444] hover:text-white"
                  }`}
                >
                  {item.icon && (
                    <item.icon
                      className={`size-4.5 shrink-0 ${
                        activeState ? "text-white" : "text-[#a1a0ac] group-hover:text-white"
                      }`}
                    />
                  )}
                  <span
                    className={`flex-1 text-left font-medium truncate ${
                      activeState ? "text-white font-semibold" : "text-slate-200 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}




