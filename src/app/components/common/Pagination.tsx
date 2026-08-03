import React from "react";

export interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  pageSizeOptions?: number[];
}

export function Pagination({
  currentPage,
  pageSize,
  totalElements,
  totalPages,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [5, 10, 20, 50],
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
    <div className="flex items-center justify-between min-h-[43px] text-[13px] text-[#393740] leading-[20px] pt-1 flex-wrap gap-3">
      <div className="flex items-center gap-4">
        <p className="text-[#393740]">
          {totalElements > 0 ? (
            <>
              Hiển thị <span className="font-semibold text-slate-800">{startIndex + 1} - {endIndex}</span> của <span className="font-semibold text-slate-800">{totalElements}</span> kết quả
            </>
          ) : (
            "Hiển thị 0 kết quả"
          )}
        </p>

        {onPageSizeChange && (
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span>Hiển thị:</span>
            <select
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="h-7 border border-slate-200 rounded px-2 text-xs bg-white text-slate-700 outline-none cursor-pointer font-medium"
            >
              {pageSizeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt} / trang
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          aria-label="Trang trước"
          className={`size-[30px] rounded-[6px] flex items-center justify-center text-[12px] font-medium transition-colors ${
            currentPage === 1
              ? "bg-slate-100/80 text-slate-400 cursor-not-allowed"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          &lt;
        </button>

        {pageNumbers.map((p, idx) => {
          if (p === "...") {
            return (
              <span key={`dots-${idx}`} className="size-[30px] flex items-center justify-center text-[12px] text-slate-400">
                ...
              </span>
            );
          }
          const pageNum = Number(p);
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`size-[30px] rounded-[6px] font-medium flex items-center justify-center text-[12px] transition-colors ${
                currentPage === pageNum
                  ? "bg-[#3f81ea] text-white shadow-2xs"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
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
          className={`size-[30px] rounded-[6px] flex items-center justify-center text-[12px] font-medium transition-colors ${
            currentPage >= maxPage || totalElements === 0
              ? "bg-slate-100/80 text-slate-400 cursor-not-allowed"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
