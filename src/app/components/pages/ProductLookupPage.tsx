import { useEffect, useState, useRef } from "react";
import {
  Search,
  Check,
  ChevronDown,
  ArrowDown,
  ArrowRight,
  RotateCcw,
  Clock,
} from "lucide-react";
import { DigitizedDoc } from "../../data/mock";
import { docApi } from "../../services/api";
import {
  ProductSearchResultItem,
  SearchHistoryItem,
  MOCK_SEARCH_SUGGESTIONS,
  MOCK_TIME_RANGE_OPTIONS,
  MOCK_PRICE_MIN_OPTIONS,
  MOCK_PRICE_MAX_OPTIONS,
  MOCK_PAGE_SIZE_OPTIONS,
  DEFAULT_SEARCH_QUERY,
  getMockFallbackDoc,
} from "../../data/productSearchMock";

interface ProductLookupPageProps {
  onOpenDoc: (doc: DigitizedDoc) => void;
}

export function ProductLookupPage({ onOpenDoc }: ProductLookupPageProps) {
  // Trạng thái tìm kiếm & Bộ lọc
  const [searchQuery, setSearchQuery] = useState(DEFAULT_SEARCH_QUERY);
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);
  const [showHistoryDropdown, setShowHistoryDropdown] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [aiMode, setAiMode] = useState(true);
  const [timeRange, setTimeRange] = useState("12_months");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const [sortField, setSortField] = useState<"unitPrice" | "quotationDate" | "name">("unitPrice");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Trạng thái Phân trang
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Kết quả dữ liệu từ Mock / Service
  const [items, setItems] = useState<ProductSearchResultItem[]>([]);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // Tải lịch sử tìm kiếm ban đầu & Xử lý click ra ngoài để đóng dropdown
  useEffect(() => {
    docApi.getSearchHistory().then(setSearchHistory);

    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowHistoryDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tải dữ liệu tìm kiếm
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const res = await docApi.searchProducts({
          query: searchQuery,
          timeRange,
          priceMin,
          priceMax,
          sortBy: sortField,
          sortOrder,
          page,
          pageSize,
        });

        setItems(res.content);
        setTotalElements(res.totalElements);
        setTotalPages(res.totalPages);
      } catch (err) {
        console.error("Lỗi khi tải kết quả tìm kiếm sản phẩm:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [searchQuery, timeRange, priceMin, priceMax, sortField, sortOrder, page, pageSize]);

  // Xóa bộ lọc về mặc định
  function handleClearFilters() {
    setSearchQuery("");
    setTimeRange("12_months");
    setPriceMin(0);
    setPriceMax(0);
    setSortField("unitPrice");
    setSortOrder("asc");
    setPage(1);
  }

  // Toggle sắp xếp
  function handleSort(field: "unitPrice" | "quotationDate" | "name") {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  }

  // Xử lý khi nhấn "Xem tài liệu ➔"
  async function handleViewDoc(docId?: string) {
    if (!docId) return;
    const doc = await docApi.getDocumentById(docId);
    if (doc) {
      onOpenDoc(doc);
    } else {
      // Fallback nếu chưa có docId thực tế
      onOpenDoc(getMockFallbackDoc(docId));
    }
  }

  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + items.length, totalElements);

  return (
    <div className="w-full space-y-4 px-6 py-4 bg-[#f8f7fa] min-h-full">
      {/* 1. Header Tiêu đề trang */}
      <div>
        <h1 className="text-2xl font-bold text-[#2f2b3d]">Tìm kiếm sản phẩm</h1>
        <p className="text-xs text-slate-500 italic mt-1">
          Tìm kiếm nhanh trên kho tài liệu mua bán thuộc phạm vi bạn được phân công
        </p>
      </div>

      {/* 2. Thẻ Tìm kiếm thông minh + AI Mode */}
      <div className="rounded-lg border border-slate-200/80 bg-white p-4 shadow-xs space-y-3">
        <div className="flex items-center gap-3">
          <div ref={searchContainerRef} className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 z-10" />
            <input
              type="text"
              value={searchQuery}
              onFocus={() => setShowHistoryDropdown(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
                setShowHistoryDropdown(true);
              }}
              onKeyDown={async (e) => {
                if (e.key === "Enter" && searchQuery.trim()) {
                  const updated = await docApi.saveSearchQuery(searchQuery);
                  setSearchHistory(updated);
                  setShowHistoryDropdown(false);
                }
              }}
              placeholder="Nhập từ khóa tìm kiếm"
              className="w-full h-10 rounded-md border border-slate-200/90 pl-10 pr-8 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-red-400 transition-colors shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setPage(1);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-semibold p-1 z-10"
                title="Xóa tìm kiếm"
              >
                ✕
              </button>
            )}

            {/* Popup Lịch sử tìm kiếm chuẩn thiết kế Figma Node 26246-12187 */}
            {showHistoryDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-slate-200/90 shadow-xl p-2.5 z-50 space-y-1 animate-in fade-in duration-150">
                {searchHistory.length > 0 ? (
                  <div className="max-h-80 overflow-y-auto space-y-1">
                    {searchHistory.map((item, index) => (
                      <div
                        key={item.id}
                        onClick={async () => {
                          setSearchQuery(item.query);
                          setPage(1);
                          setShowHistoryDropdown(false);
                          const updated = await docApi.saveSearchQuery(item.query);
                          setSearchHistory(updated);
                        }}
                        className={`flex items-center justify-between h-10 px-3.5 rounded-lg text-[13px] cursor-pointer transition-colors ${
                          index === 0
                            ? "bg-[#e9ecef] text-slate-800 font-normal hover:bg-[#dee2e6]"
                            : "bg-white hover:bg-[#e9ecef] text-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <Clock className="size-4 text-slate-600 shrink-0" />
                          <span className="truncate">{item.query}</span>
                        </div>
                        <button
                          onClick={async (e) => {
                            e.stopPropagation();
                            const updated = await docApi.removeSearchQuery(item.id);
                            setSearchHistory(updated);
                          }}
                          className="text-slate-500 hover:text-slate-800 transition-colors p-1 shrink-0 ml-2"
                          title="Xóa mục lịch sử này"
                        >
                          <span className="text-sm leading-none font-semibold">✕</span>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 py-3 text-center">Chưa có lịch sử tìm kiếm</p>
                )}
              </div>
            )}
          </div>

          {/* Nút AI Mode */}
          <button
            onClick={() => setAiMode(!aiMode)}
            className={`h-10 px-4 rounded-full border text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs ${
              aiMode
                ? "border-[#ff4d4f] text-[#ff4d4f] bg-white hover:bg-red-50/50"
                : "border-slate-300 text-slate-500 hover:bg-slate-50"
            }`}
          >
            <span className="text-sm">✨</span> AI Mode
          </button>
        </div>

        {/* Thẻ Gợi ý tìm kiếm */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500 font-medium">Gợi ý tìm kiếm:</span>
          <div className="flex items-center gap-2 flex-wrap">
            {MOCK_SEARCH_SUGGESTIONS.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSearchQuery(tag);
                  setPage(1);
                }}
                className="px-3 py-1 rounded-full bg-slate-100/90 text-slate-700 hover:bg-slate-200 transition-colors text-[11px] font-medium"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Thẻ Bộ lọc */}
      <div className="rounded-lg border border-slate-200/80 bg-white p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-6 text-xs">
          {/* Bộ lọc Khoảng thời gian */}
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-medium">Khoảng thời gian</span>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="h-9 px-3 pr-8 rounded-md border border-slate-200 bg-white text-slate-700 outline-none focus:border-red-400 transition-colors cursor-pointer"
            >
              {MOCK_TIME_RANGE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Bộ lọc Khoảng giá */}
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-medium">Khoảng giá</span>
            <select
              value={priceMin}
              onChange={(e) => setPriceMin(Number(e.target.value))}
              className="h-9 px-3 pr-8 rounded-md border border-slate-200 bg-white text-slate-700 outline-none focus:border-red-400 transition-colors cursor-pointer"
            >
              {MOCK_PRICE_MIN_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <select
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              className="h-9 px-3 pr-8 rounded-md border border-slate-200 bg-white text-slate-700 outline-none focus:border-red-400 transition-colors cursor-pointer"
            >
              {MOCK_PRICE_MAX_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Nút Xóa bộ lọc */}
        <button
          onClick={handleClearFilters}
          className="h-9 px-3.5 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-medium flex items-center gap-1.5 transition-colors shadow-2xs"
        >
          <RotateCcw className="size-3.5 text-slate-500" />
          Xóa bộ lọc
        </button>
      </div>

      {/* 4. Thẻ Kết quả & Bảng dữ liệu */}
      <div className="rounded-lg border border-slate-200/80 bg-white p-5 shadow-xs space-y-4">
        {/* Header thông báo số lượng kết quả */}
        <div className="flex items-center gap-3 pb-1">
          <div className="flex size-[36px] shrink-0 items-center justify-center rounded-full border-2 border-[#28c76f] bg-white text-[#28c76f]">
            <Check className="size-5 stroke-[2.5]" />
          </div>
          <span className="text-[16px] font-bold text-[#2f2b3d]">
            Đã tìm thấy {totalElements} kết quả liên quan
          </span>
        </div>

        {/* Bảng thông tin sản phẩm */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] border-collapse">
            <thead className="bg-white text-[#2f2b3d] font-bold border-b border-slate-200/80">
              <tr>
                <th className="py-3 px-3 min-w-[150px] font-bold text-[#2f2b3d]">Tên HHDV</th>
                <th className="py-3 px-3 min-w-[280px] font-bold text-[#2f2b3d]">Mô tả</th>
                <th className="py-3 px-3 font-bold text-[#2f2b3d]">Mã hàng hóa</th>
                <th className="py-3 px-3 font-bold text-[#2f2b3d] whitespace-nowrap">
                  <div className="flex items-center gap-1 cursor-pointer select-none">
                    <span>Nhà cung cấp</span>
                    <ChevronDown className="size-3.5 text-[#2f2b3d]" />
                  </div>
                </th>
                <th className="py-3 px-3 font-bold text-[#2f2b3d] whitespace-nowrap">Xuất xứ</th>
                <th className="py-3 px-3 font-bold text-[#2f2b3d] whitespace-nowrap">ĐVT</th>
                <th className="py-3 px-3 font-bold text-[#2f2b3d] text-right whitespace-nowrap">
                  <div
                    onClick={() => handleSort("unitPrice")}
                    className="flex items-center justify-end gap-1 cursor-pointer select-none"
                  >
                    <span>Đơn giá (VND)</span>
                    <ArrowDown className="size-3.5 text-[#3f81ea] stroke-[2.5]" />
                  </div>
                </th>
                <th className="py-3 px-3 font-bold text-[#2f2b3d] text-center whitespace-nowrap">
                  <div
                    onClick={() => handleSort("quotationDate")}
                    className="flex items-center justify-center gap-1 cursor-pointer select-none"
                  >
                    <span>Thời điểm báo giá</span>
                    <ArrowDown className="size-3.5 text-[#2f2b3d] stroke-[2.5]" />
                  </div>
                </th>
                <th className="py-3 px-3 font-bold text-[#2f2b3d] text-center whitespace-nowrap">Thao tác</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-400">
                    Đang tải dữ liệu...
                  </td>
                </tr>
              ) : items.length > 0 ? (
                items.map((item) => {
                  const isHighlighted = item.isHighlighted;
                  return (
                    <tr
                      key={item.id}
                      className={`transition-colors ${
                        isHighlighted
                          ? "bg-[#e6f7ef] text-[#28c76f] font-medium"
                          : "bg-white hover:bg-slate-50/60 text-[#393740]"
                      }`}
                    >
                      {/* Tên HHDV */}
                      <td className={`py-4 px-3 font-semibold ${isHighlighted ? "text-[#28c76f]" : "text-[#393740]"}`}>
                        {item.name}
                      </td>

                      {/* Mô tả */}
                      <td className={`py-4 px-3 leading-relaxed text-[13px] ${isHighlighted ? "text-[#28c76f]" : "text-[#4b5563]"}`}>
                        {item.description}
                      </td>

                      {/* Mã hàng hóa */}
                      <td className={`py-4 px-3 ${isHighlighted ? "text-[#28c76f]" : "text-[#393740]"}`}>
                        {item.code}
                      </td>

                      {/* Nhà cung cấp */}
                      <td className={`py-4 px-3 whitespace-nowrap ${isHighlighted ? "text-[#28c76f]" : "text-[#393740]"}`}>
                        {item.supplier}
                      </td>

                      {/* Xuất xứ */}
                      <td className={`py-4 px-3 whitespace-nowrap ${isHighlighted ? "text-[#28c76f]" : "text-[#393740]"}`}>
                        {item.origin}
                      </td>

                      {/* ĐVT */}
                      <td className={`py-4 px-3 whitespace-nowrap ${isHighlighted ? "text-[#28c76f]" : "text-[#393740]"}`}>
                        {item.unit}
                      </td>

                      {/* Đơn giá (VND) */}
                      <td className={`py-4 px-3 text-right font-medium whitespace-nowrap ${isHighlighted ? "text-[#28c76f]" : "text-[#393740]"}`}>
                        {item.unitPrice.toLocaleString("vi-VN")}
                      </td>

                      {/* Thời điểm báo giá */}
                      <td className={`py-4 px-3 text-center whitespace-nowrap ${isHighlighted ? "text-[#28c76f]" : "text-[#393740]"}`}>
                        {item.quotationDate}
                      </td>

                      {/* Thao tác (Xem tài liệu) */}
                      <td className="py-4 px-3 text-center whitespace-nowrap">
                        <button
                          onClick={() => handleViewDoc(item.sourceDocId)}
                          className={`inline-flex items-center gap-1 font-medium hover:underline text-[13px] ${
                            isHighlighted ? "text-[#28c76f]" : "text-[#3f81ea] hover:text-blue-700"
                          }`}
                        >
                          Xem tài liệu <ArrowRight className="size-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-400">
                    Không tìm thấy sản phẩm nào phù hợp.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Phân trang Pagination (tái sử dụng từ DocumentListPage) */}
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
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <span>Hiển thị:</span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setPage(1);
                }}
                className="h-7 border border-slate-200 rounded px-2 text-xs bg-white text-slate-700 outline-none cursor-pointer font-medium"
              >
                {MOCK_PAGE_SIZE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`size-[30px] rounded-[6px] flex items-center justify-center text-[12px] font-medium transition-colors ${
                page === 1
                  ? "bg-slate-100/80 text-slate-400 cursor-not-allowed"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`size-[30px] rounded-[6px] font-medium flex items-center justify-center text-[12px] transition-colors ${
                  page === p
                    ? "bg-[#3f81ea] text-white shadow-2xs"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages || totalElements === 0}
              className={`size-[30px] rounded-[6px] flex items-center justify-center text-[12px] font-medium transition-colors ${
                page === totalPages || totalElements === 0
                  ? "bg-slate-100/80 text-slate-400 cursor-not-allowed"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
