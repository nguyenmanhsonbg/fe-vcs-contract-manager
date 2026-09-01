import React from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalElements?: number;
  totalItems?: number;
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
  totalElements: totalElementsProp,
  totalItems,
  totalPages,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [5, 10, 20, 50],
  pageSizeLabel = "Số dòng/trang:",
  variant = "default",
  className = "",
  renderSummary,
}: PaginationProps) {
  const totalElements = totalElementsProp ?? totalItems ?? 0;
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
    <div className={`flex items-center justify-between text-[12px] text-[#5d586c] leading-[20px] pt-4 pb-1 flex-wrap gap-3 bg-transparent border-t border-slate-100 ${className}`}>
      <div className="flex items-center gap-4">
        <p className="text-[#8f8d95] font-normal text-[12px]">
          {renderSummary ? (
            renderSummary(startIndex + 1, endIndex, totalElements)
          ) : totalElements > 0 ? (
            <>
              Hiển thị <span className="font-normal">{startIndex + 1} đến {endIndex}</span> trong <span className="font-normal">{totalElements}</span> bản ghi
            </>
          ) : (
            "Hiển thị 0 bản ghi"
          )}
        </p>
      </div>

      <div className="flex items-center gap-3">
        {onPageSizeChange && (
          <div className="flex items-center gap-2 text-[12px] text-[#5d586c]">
            <span>{pageSizeLabel}</span>
            <div className="relative inline-flex items-center">
              <select
                value={pageSize}
                onChange={(e) => onPageSizeChange(Number(e.target.value))}
                className="h-8 border border-[#dbdade] rounded-[6px] pl-3 pr-7 text-[12px] bg-white text-[#2f2b3d] outline-none cursor-pointer font-normal appearance-none hover:border-slate-300 focus:border-[#3f81ea] transition-colors"
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

        <div className="flex items-center gap-1.5">
          {/* First Page Button */}
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            aria-label="Trang đầu"
            className={`size-8 rounded-[6px] flex items-center justify-center text-[12px] font-normal transition-colors ${
              currentPage === 1
                ? "bg-[#f1f0f2]/60 text-[#a5a3ae] cursor-not-allowed"
                : "bg-[#f1f0f2] text-[#5d586c] hover:bg-[#e4e3e7]"
            }`}
          >
            «
          </button>

          {/* Previous Page Button */}
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            aria-label="Trang trước"
            className={`size-8 rounded-[6px] flex items-center justify-center text-[12px] font-normal transition-colors ${
              currentPage === 1
                ? "bg-[#f1f0f2]/60 text-[#a5a3ae] cursor-not-allowed"
                : "bg-[#f1f0f2] text-[#5d586c] hover:bg-[#e4e3e7]"
            }`}
          >
            ‹
          </button>

          {pageNumbers.map((p, idx) => {
            if (p === "...") {
              return (
                <span key={`dots-${idx}`} className="size-8 flex items-center justify-center text-[12px] text-slate-400">
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
                className={`size-8 rounded-[6px] text-[12px] font-normal flex items-center justify-center transition-all ${
                  isActive
                    ? "bg-white text-[#ff4c51] border border-[#ff4c51] font-semibold"
                    : "bg-[#f1f0f2] text-[#5d586c] hover:bg-[#e4e3e7]"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Page Button */}
          <button
            onClick={() => onPageChange(Math.min(maxPage, currentPage + 1))}
            disabled={currentPage >= maxPage || totalElements === 0}
            aria-label="Trang sau"
            className={`size-8 rounded-[6px] flex items-center justify-center text-[12px] font-normal transition-colors ${
              currentPage >= maxPage || totalElements === 0
                ? "bg-[#f1f0f2]/60 text-[#a5a3ae] cursor-not-allowed"
                : "bg-[#f1f0f2] text-[#5d586c] hover:bg-[#e4e3e7]"
            }`}
          >
            ›
          </button>

          {/* Last Page Button */}
          <button
            onClick={() => onPageChange(maxPage)}
            disabled={currentPage >= maxPage || totalElements === 0}
            aria-label="Trang cuối"
            className={`size-8 rounded-[6px] flex items-center justify-center text-[12px] font-normal transition-colors ${
              currentPage >= maxPage || totalElements === 0
                ? "bg-[#f1f0f2]/60 text-[#a5a3ae] cursor-not-allowed"
                : "bg-[#f1f0f2] text-[#5d586c] hover:bg-[#e4e3e7]"
            }`}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}
