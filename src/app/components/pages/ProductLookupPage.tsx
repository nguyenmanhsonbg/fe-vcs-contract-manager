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
import { DigitizedDoc } from "../../data/models";
import { docApi } from "../../services/api";
import { Pagination } from "../common/Pagination";
import { PageHeader } from "../common/PageHeader";
import { ProductSearchResultItem, SearchHistoryItem } from "../../data/apiModels";
import { toast } from "sonner";

const TIME_RANGE_OPTIONS = [
  { value: "12_months", label: "12 tháng gần đây" },
  { value: "6_months", label: "6 tháng gần đây" },
  { value: "3_months", label: "3 tháng gần đây" },
  { value: "all", label: "Tất cả thời gian" },
];
const PRICE_MIN_OPTIONS = [{ value: 0, label: "Từ" }, { value: 10000000, label: "10.000.000 VNĐ" }, { value: 20000000, label: "20.000.000 VNĐ" }];
const PRICE_MAX_OPTIONS = [{ value: 0, label: "Đến" }, { value: 25000000, label: "25.000.000 VNĐ" }, { value: 50000000, label: "50.000.000 VNĐ" }];

interface ProductLookupPageProps {
  onViewDocument: (doc: DigitizedDoc) => void;
}

export function ProductLookupPage({ onViewDocument }: ProductLookupPageProps) {
  // Trạng thái tìm kiếm & Bộ lọc
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);
  const [showHistoryDropdown, setShowHistoryDropdown] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLTextAreaElement>(null);
  const [timeRange, setTimeRange] = useState("12_months");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const [supplier, setSupplier] = useState("all");
  const [suppliers, setSuppliers] = useState<string[]>([]);
  const [sortField, setSortField] = useState<"unitPrice" | "quotationDate" | "name">("unitPrice");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Trạng thái Phân trang
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Kết quả từ API backend
  const [items, setItems] = useState<ProductSearchResultItem[]>([]);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [exporting, setExporting] = useState(false);
  useEffect(() => {
    const input = searchInputRef.current;
    if (!input) return;
    input.style.height = "auto";
    input.style.height = `${Math.min(input.scrollHeight, 96)}px`;
  }, [searchQuery]);

  useEffect(() => {
    docApi.getProductSuppliers().then(setSuppliers).catch(() => setSuppliers([]));
  }, []);

  async function saveSearchHistory(query: string) {
    if (!query.trim()) return;
    try {
      setSearchHistory(await docApi.saveSearchQuery(query));
    } catch (err) {
      console.error("Lỗi khi lưu lịch sử tìm kiếm:", err);
    }
  }

  // Tải lịch sử tìm kiếm ban đầu & Xử lý click ra ngoài để đóng dropdown
  useEffect(() => {
    docApi.getSearchHistory().then(setSearchHistory).catch((err) => {
      console.error("Lỗi khi tải lịch sử tìm kiếm:", err);
    });

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
          supplier,
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
  }, [searchQuery, timeRange, priceMin, priceMax, supplier, sortField, sortOrder, page, pageSize]);

  // Xóa bộ lọc về mặc định
  function handleClearFilters() {
    setSearchQuery("");
    setTimeRange("12_months");
    setPriceMin(0);
    setPriceMax(0);
    setSupplier("all");
    setSortField("unitPrice");
    setSortOrder("asc");
    setPage(1);
  }

  async function handleExport() {
    if (loading || exporting || totalElements === 0) return;
    setExporting(true);
    try {
      const blob = await docApi.exportProducts({ query: searchQuery, timeRange, priceMin, priceMax, supplier, sortBy: sortField, sortOrder });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "ket-qua-tim-kiem-san-pham.xlsx";
      anchor.click();
      URL.revokeObjectURL(url);
      toast.success("Đã xuất kết quả tìm kiếm ra Excel.");
    } catch {
      toast.error("Không thể xuất file Excel.");
    } finally {
      setExporting(false);
    }
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
      onViewDocument(doc);
    } else {
    }
  }

  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + items.length, totalElements);

  return (
    <div className="w-full space-y-4 px-6 py-4 bg-[#f8f7fa] min-h-full">
      {/* 1. Header Tiêu đề trang */}
      <PageHeader
        title="Tìm kiếm sản phẩm"
        description="Tìm kiếm nhanh trên kho tài liệu mua bán thuộc phạm vi bạn được phân công"
      />

      {/* 2. Thẻ Tìm kiếm thông minh + AI Mode */}
      <div className="rounded-lg border border-slate-200/80 bg-white p-4 shadow-xs space-y-3">
        <div className="flex items-center gap-3">
          <div ref={searchContainerRef} className="relative flex-1">
            <Search className="absolute left-3.5 top-3 size-4 text-slate-400 z-10" />
            <textarea
              ref={searchInputRef}
              value={searchQuery}
              rows={1}
              onFocus={() => setShowHistoryDropdown(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
                setShowHistoryDropdown(true);
              }}
              onKeyDown={async (e) => {
                if (e.key === "Enter" && !e.shiftKey && searchQuery.trim()) {
                  e.preventDefault();
                  await saveSearchHistory(searchQuery);
                  setShowHistoryDropdown(false);
                }
              }}
              placeholder="Nhập keyword; ngăn cách bằng dấu phẩy hoặc xuống dòng (AND)"
              className="w-full min-h-10 max-h-24 resize-none overflow-y-auto rounded-md border border-slate-200/90 py-2 pl-10 pr-8 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-red-400 transition-colors shadow-2xs"
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
                        onClick={() => {
                          setSearchQuery(item.query);
                          setPage(1);
                          setShowHistoryDropdown(false);
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
                            try {
                              setSearchHistory(await docApi.removeSearchQuery(item.id));
                            } catch (err) {
                              console.error("Lỗi khi xóa lịch sử tìm kiếm:", err);
                            }
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
            disabled
            title="Tìm kiếm bằng AI chưa được cấu hình"
            className="h-10 px-4 rounded-full border border-slate-300 text-slate-400 bg-slate-50 text-xs font-semibold flex items-center gap-1.5 cursor-not-allowed shadow-2xs"
          >
            <span className="text-sm">✨</span> AI Mode (sắp hỗ trợ)
          </button>
        </div>

      </div>

      {/* 3. Thẻ Bộ lọc */}
      <div className="rounded-lg border border-slate-200/80 bg-white p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-medium">Nhà cung cấp</span>
            <select
              value={supplier}
              onChange={(e) => { setSupplier(e.target.value); setPage(1); }}
              className="h-9 max-w-[220px] px-3 pr-8 rounded-md border border-slate-200 bg-white text-slate-700 outline-none focus:border-red-400 transition-colors cursor-pointer"
            >
              <option value="all">{suppliers.length ? "Tất cả" : "Chưa có dữ liệu"}</option>
              {suppliers.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </div>
          {/* Bộ lọc Khoảng thời gian */}
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-medium">Khoảng thời gian</span>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="h-9 px-3 pr-8 rounded-md border border-slate-200 bg-white text-slate-700 outline-none focus:border-red-400 transition-colors cursor-pointer"
            >
              {TIME_RANGE_OPTIONS.map((opt) => (
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
              {PRICE_MIN_OPTIONS.map((opt) => (
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
              {PRICE_MAX_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Nút Xóa bộ lọc */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleExport}
            disabled={loading || exporting || totalElements === 0}
            className="h-9 px-3.5 rounded-md border border-[#3f81ea] text-[#3f81ea] hover:bg-blue-50 text-xs font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-2xs"
          >
            {exporting ? "Đang xuất..." : "Xuất Excel"}
          </button>
          <button
            onClick={handleClearFilters}
            className="h-9 px-3.5 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-medium flex items-center gap-1.5 transition-colors shadow-2xs"
          >
            <RotateCcw className="size-3.5 text-slate-500" />
            Xóa bộ lọc
          </button>
        </div>
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
        <div className="overflow-hidden">
          <table className="w-full table-fixed text-left text-[13px] border-collapse">
            <colgroup>
              <col className="w-[11%]" />
              <col className="w-[16%]" />
              <col className="w-[11%]" />
              <col className="w-[12%]" />
              <col className="w-[8%]" />
              <col className="w-[5%]" />
              <col className="w-[12%]" />
              <col className="w-[14%]" />
              <col className="w-[11%]" />
            </colgroup>
            <thead className="bg-white text-[#2f2b3d] font-bold border-b border-slate-200/80">
              <tr>
                <th className="whitespace-nowrap py-3 px-3 font-bold text-[#2f2b3d]">Tên HHDV</th>
                <th className="whitespace-nowrap py-3 px-3 font-bold text-[#2f2b3d]">Mô tả</th>
                <th className="whitespace-nowrap py-3 px-3 font-bold text-[#2f2b3d]">Mã hàng hóa</th>
                <th className="whitespace-nowrap py-3 px-3 font-bold text-[#2f2b3d]">
                  <div className="flex items-center gap-1 cursor-pointer select-none whitespace-nowrap">
                    <span>Nhà cung cấp</span>
                    <ChevronDown className="size-3.5 text-[#2f2b3d]" />
                  </div>
                </th>
                <th className="whitespace-nowrap py-3 px-3 font-bold text-[#2f2b3d]">Xuất xứ</th>
                <th className="whitespace-nowrap py-3 px-3 font-bold text-[#2f2b3d]">ĐVT</th>
                <th className="whitespace-nowrap py-3 px-3 font-bold text-[#2f2b3d] text-right">
                  <div
                    onClick={() => handleSort("unitPrice")}
                    className="flex items-center justify-end gap-1 cursor-pointer select-none whitespace-nowrap"
                  >
                    <span>Đơn giá (VND)</span>
                    <ArrowDown className="size-3.5 shrink-0 text-[#3f81ea] stroke-[2.5]" />
                  </div>
                </th>
                <th className="whitespace-nowrap py-3 px-3 font-bold text-[#2f2b3d] text-center">
                  <div
                    onClick={() => handleSort("quotationDate")}
                    className="flex items-center justify-center gap-1 cursor-pointer select-none whitespace-nowrap"
                  >
                    <span>Thời điểm báo giá</span>
                    <ArrowDown className="size-3.5 shrink-0 text-[#2f2b3d] stroke-[2.5]" />
                  </div>
                </th>
                <th className="whitespace-nowrap py-3 px-3 font-bold text-[#2f2b3d] text-center">Thao tác</th>
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
                        <div className="block truncate" title={item.name}>
                          {item.name}
                        </div>
                      </td>

                      {/* Mô tả */}
                      <td className={`py-4 px-3 leading-relaxed text-[13px] ${isHighlighted ? "text-[#28c76f]" : "text-[#4b5563]"}`}>
                        <div className="block truncate" title={item.description}>
                          {item.description}
                        </div>
                      </td>

                      {/* Mã hàng hóa */}
                      <td className={`py-4 px-3 ${isHighlighted ? "text-[#28c76f]" : "text-[#393740]"}`}>
                        <div className="block truncate" title={item.code}>
                          {item.code}
                        </div>
                      </td>

                      {/* Nhà cung cấp */}
                      <td className={`py-4 px-3 ${isHighlighted ? "text-[#28c76f]" : "text-[#393740]"}`}>
                        <div className="block truncate" title={item.supplier}>
                          {item.supplier}
                        </div>
                      </td>

                      {/* Xuất xứ */}
                      <td className={`py-4 px-3 ${isHighlighted ? "text-[#28c76f]" : "text-[#393740]"}`}>
                        <div className="block truncate" title={item.origin}>
                          {item.origin}
                        </div>
                      </td>

                      {/* ĐVT */}
                      <td className={`py-4 px-3 ${isHighlighted ? "text-[#28c76f]" : "text-[#393740]"}`}>
                        <div className="block truncate" title={item.unit}>
                          {item.unit}
                        </div>
                      </td>

                      {/* Đơn giá (VND) */}
                      <td className={`py-4 px-3 text-right font-medium whitespace-nowrap ${isHighlighted ? "text-[#28c76f]" : "text-[#393740]"}`}>
                        <div className="block truncate" title={item.unitPrice.toLocaleString("vi-VN")}>
                          {item.unitPrice.toLocaleString("vi-VN")}
                        </div>
                      </td>

                      {/* Thời điểm báo giá */}
                      <td className={`py-4 px-3 text-center ${isHighlighted ? "text-[#28c76f]" : "text-[#393740]"}`}>
                        <div className="block truncate" title={item.quotationDate}>
                          {item.quotationDate}
                        </div>
                      </td>

                      {/* Thao tác (Xem tài liệu) */}
                      <td className="py-4 px-3 text-center">
                        <button
                          onClick={() => handleViewDoc(item.sourceDocId)}
                          className={`inline-flex max-w-full items-center gap-1 font-medium hover:underline text-[13px] ${
                            isHighlighted ? "text-[#28c76f]" : "text-[#3f81ea] hover:text-blue-700"
                          }`}
                        >
                          <span className="truncate">Xem tài liệu</span>
                          <ArrowRight className="size-3.5 shrink-0" />
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

        {/* Phân trang Pagination (tái sử dụng từ Pagination component) */}
        <Pagination
          currentPage={page}
          pageSize={pageSize}
          totalElements={totalElements}
          totalPages={totalPages}
          onPageChange={setPage}
          onPageSizeChange={(newSize) => {
            setPageSize(newSize);
            setPage(1);
          }}
        />
      </div>
    </div>
  );
}
