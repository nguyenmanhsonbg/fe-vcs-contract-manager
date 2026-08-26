import React from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  pageSizeOptions?: number[];
  pageSizeLabel?: string;
  variant?: "default" | "blue-bordered";
  className?: string;
  renderSummary?: (start: number, end: number, total: number) => React.ReactNode;
}

export function Pagination({
  currentPage,
  pageSize,
  totalElements,
  totalPages,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [5, 10, 20, 50],
  pageSizeLabel = "Số dòng/trang:",
  variant = "default",
  className = "",
  renderSummary,
}: PaginationProps) {
  const startIndex = totalElements > 0 ? (currentPage - 1) * pageSize : 0;
  const endIndex = Math.min(startIndex + pageSize, totalElements);
  const maxPage = Math.max(1, totalPages);

  // Generate page numbers array with limit logic if needed
  const pageNumbers: (number | string)[] = [];
  if (maxPage <= 7) {
    for (let i = 1; i <= maxPage; i++) pageNumbers.push(i);
  } else {
    pageNumbers.push(1);
    if (currentPage > 3) pageNumbers.push("...");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(maxPage - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pageNumbers.push(i);
    if (currentPage < maxPage - 2) pageNumbers.push("...");
    pageNumbers.push(maxPage);
  }

  return (
    <div className={`flex items-center justify-between text-[13px] text-[#393740] leading-[20px] py-2 flex-wrap gap-3 bg-transparent border-t border-slate-100/80 ${className}`}>
      <div className="flex items-center gap-4">
        <p className="text-[#5d586c] font-normal">
          {renderSummary ? (
            renderSummary(startIndex + 1, endIndex, totalElements)
          ) : totalElements > 0 ? (
            <>
              Hiển thị <span className="font-semibold text-[#2f2b3d]">{startIndex + 1} - {endIndex}</span> của <span className="font-semibold text-[#2f2b3d]">{totalElements}</span> kết quả
            </>
          ) : (
            "Hiển thị 0 kết quả"
          )}
        </p>

        {onPageSizeChange && (
          <div className="flex items-center gap-2 text-xs text-[#5d586c]">
            <span>{pageSizeLabel}</span>
            <div className="relative inline-flex items-center">
              <select
                value={pageSize}
                onChange={(e) => onPageSizeChange(Number(e.target.value))}
                className="h-8 border border-slate-200/90 rounded-[6px] pl-3 pr-7 text-xs bg-white text-[#2f2b3d] outline-none cursor-pointer font-medium appearance-none hover:border-slate-300 focus:border-[#3f81ea] transition-colors"
              >
                {pageSizeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="size-3.5 text-[#5d586c] absolute right-2 pointer-events-none" />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          aria-label="Trang trước"
          className={`size-8 rounded-[6px] flex items-center justify-center text-xs font-medium transition-colors ${
            currentPage === 1
              ? "text-slate-300 bg-transparent cursor-not-allowed"
              : variant === "blue-bordered"
              ? "border border-slate-200/80 bg-slate-100/60 text-[#5d586c] hover:bg-slate-200/60"
              : "border border-slate-200/80 bg-white text-[#5d586c] hover:bg-slate-50"
          }`}
        >
          <ChevronLeft className="size-4" />
        </button>

        {pageNumbers.map((p, idx) => {
          if (p === "...") {
            return (
              <span key={`dots-${idx}`} className="size-8 flex items-center justify-center text-xs text-slate-400">
                ...
              </span>
            );
          }
          const pageNum = Number(p);
          const isActive = currentPage === pageNum;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`size-8 rounded-[6px] font-medium flex items-center justify-center text-xs transition-all ${
                isActive
                  ? variant === "blue-bordered"
                    ? "border border-[#3f81ea] bg-white text-[#3f81ea]"
                    : "bg-[#ff4c51] text-white shadow-2xs"
                  : variant === "blue-bordered"
                  ? "border border-slate-200/80 bg-slate-100/60 text-[#5d586c] hover:bg-slate-200/60"
                  : "border border-slate-200/80 bg-white text-[#5d586c] hover:bg-slate-50"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => onPageChange(Math.min(maxPage, currentPage + 1))}
          disabled={currentPage >= maxPage || totalElements === 0}
          aria-label="Trang sau"
          className={`size-8 rounded-[6px] flex items-center justify-center text-xs font-medium transition-colors ${
            currentPage >= maxPage || totalElements === 0
              ? "text-slate-300 bg-transparent cursor-not-allowed"
              : variant === "blue-bordered"
              ? "border border-slate-200/80 bg-slate-100/60 text-[#5d586c] hover:bg-slate-200/60"
              : "border border-slate-200/80 bg-white text-[#5d586c] hover:bg-slate-50"
          }`}
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
