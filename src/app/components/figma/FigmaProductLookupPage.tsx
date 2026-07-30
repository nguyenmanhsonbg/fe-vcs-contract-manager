import { useEffect, useMemo, useState } from "react";
import { AI_KEYWORDS, Product, DOC_TYPE_LABELS, DigitizedDoc } from "../../data/mock";
import { docApi } from "../../services/api";

interface FigmaProductLookupPageProps {
  onOpenDoc: (doc: DigitizedDoc) => void;
}

export function FigmaProductLookupPage({ onOpenDoc }: FigmaProductLookupPageProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [documents, setDocuments] = useState<DigitizedDoc[]>([]);
  const [search, setSearch] = useState("");
  const [activeKeywords, setActiveKeywords] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      const p = await docApi.getProducts();
      const d = await docApi.getDocuments();
      setProducts(p);
      setDocuments(d);
    }
    loadData();
  }, []);

  const docMap = useMemo(() => Object.fromEntries(documents.map((d) => [d.id, d])), [documents]);

  function toggleKeyword(kw: string) {
    setActiveKeywords((prev) =>
      prev.includes(kw) ? prev.filter((k) => k !== kw) : [...prev, kw]
    );
  }

  function clearFilters() {
    setSearch("");
    setActiveKeywords([]);
  }

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const q = search.toLowerCase();
      if (q && !p.name.toLowerCase().includes(q) && !p.code.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) {
        return false;
      }
      if (activeKeywords.length > 0) {
        const matchesKeyword = activeKeywords.some(
          (kw) =>
            p.name.toLowerCase().includes(kw.toLowerCase()) ||
            p.description.toLowerCase().includes(kw.toLowerCase())
        );
        if (!matchesKeyword) return false;
      }
      return true;
    });
  }, [products, search, activeKeywords]);

  const confirmedCount = filtered.filter((p) => p.confirmed).length;
  const tempCount = filtered.filter((p) => !p.confirmed).length;

  return (
    <div className="space-y-6 p-6 max-w-[1440px] mx-auto bg-[#f8f7fa]">
      {/* Page Header */}
      <div>
        <h1 className="text-[18px] font-medium text-[rgba(47,43,61,0.9)]">Tra cứu sản phẩm &amp; Lịch sử mua sắm</h1>
        <p className="text-[13px] text-[rgba(47,43,61,0.7)] mt-0.5">
          Tìm kiếm thông tin sản phẩm và lịch sử mua sắm từ dữ liệu đã số hoá
        </p>
      </div>

      {/* Stat Pills */}
      <div className="flex flex-wrap gap-4">
        <div className="bg-white rounded-[6px] border border-slate-200 px-4 py-3 shadow-xs flex items-center gap-3">
          <div className="size-9 rounded-md bg-slate-100 flex items-center justify-center text-slate-500">
            📦
          </div>
          <div>
            <p className="text-[11px] text-slate-400 font-medium">Tổng sản phẩm</p>
            <p className="text-lg font-bold text-slate-800">{products.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-[6px] border border-slate-200 px-4 py-3 shadow-xs flex items-center gap-3">
          <div className="size-9 rounded-md bg-[rgba(40,199,111,0.16)] flex items-center justify-center text-[#28c76f]">
            ✓
          </div>
          <div>
            <p className="text-[11px] text-slate-400 font-medium">Đã xác nhận</p>
            <p className="text-lg font-bold text-[#28c76f]">{products.filter((p) => p.confirmed).length}</p>
          </div>
        </div>

        <div className="bg-white rounded-[6px] border border-slate-200 px-4 py-3 shadow-xs flex items-center gap-3">
          <div className="size-9 rounded-md bg-[rgba(255,159,67,0.16)] flex items-center justify-center text-[#ff9f43]">
            ⏳
          </div>
          <div>
            <p className="text-[11px] text-slate-400 font-medium">Dữ liệu tạm thời</p>
            <p className="text-lg font-bold text-[#ff9f43]">{products.filter((p) => !p.confirmed).length}</p>
          </div>
        </div>
      </div>

      {/* Search Card */}
      <div className="bg-white rounded-[6px] shadow-[0px_3px_6px_rgba(47,43,61,0.14)] p-6 space-y-4">
        {/* Search input bar */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm thông minh bằng AI (tên sản phẩm, mã hàng, thông số…)"
              className="w-full h-10 rounded-[6px] border border-slate-300 pl-10 pr-10 text-xs text-slate-800 outline-none focus:border-brand shadow-xs"
            />
            <svg className="absolute left-3 top-3 size-4 text-slate-400" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="absolute right-3 top-3 text-purple-400 text-sm">✨</span>
          </div>
          <button className="h-10 px-5 rounded-[6px] bg-brand text-white text-xs font-semibold hover:bg-brand-dark transition-colors">
            Tìm kiếm
          </button>
          {(search || activeKeywords.length > 0) && (
            <button onClick={clearFilters} className="text-xs text-slate-500 hover:text-slate-700 underline px-2">
              Xoá bộ lọc
            </button>
          )}
        </div>

        {/* AI Keyword Chips */}
        <div className="space-y-2 pt-1">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Gợi ý từ khoá AI</p>
          <div className="flex flex-wrap gap-2">
            {AI_KEYWORDS.map((kw) => {
              const active = activeKeywords.includes(kw);
              return (
                <button
                  key={kw}
                  onClick={() => toggleKeyword(kw)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                    active
                      ? "bg-brand text-white border-brand"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:border-brand/40 hover:text-brand"
                  }`}
                >
                  {active ? `✕ ${kw}` : `+ ${kw}`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Summary counts */}
        <div className="flex items-center gap-3 text-xs text-slate-600 pt-2">
          <span>Tìm thấy <strong className="text-slate-800">{filtered.length}</strong> sản phẩm</span>
          {confirmedCount > 0 && (
            <span className="px-2.5 py-0.5 rounded-full bg-[rgba(40,199,111,0.16)] text-[#28c76f] font-semibold text-[11px]">
              ✓ {confirmedCount} đã xác nhận
            </span>
          )}
          {tempCount > 0 && (
            <span className="px-2.5 py-0.5 rounded-full bg-[rgba(255,159,67,0.16)] text-[#ff9f43] font-semibold text-[11px]">
              ⏳ {tempCount} tạm thời
            </span>
          )}
        </div>

        {/* Product Table */}
        <div className="overflow-x-auto rounded-[6px] border border-slate-200">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f8f7fa] text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-3 w-6"></th>
                <th className="py-3 px-4">Tên sản phẩm</th>
                <th className="py-3 px-4">Thông số kỹ thuật</th>
                <th className="py-3 px-4">Nhà cung cấp</th>
                <th className="py-3 px-4">Xuất xứ</th>
                <th className="py-3 px-4 text-right">Đơn giá (VNĐ)</th>
                <th className="py-3 px-4">Ngày báo giá</th>
                <th className="py-3 px-4">Trạng thái</th>
                <th className="py-3 px-4">Tài liệu nguồn</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((p) => {
                const isExpanded = expandedId === p.id;
                const sourceDoc = docMap[p.sourceDocId];

                return (
                  <>
                    <tr
                      key={p.id}
                      onClick={() => setExpandedId(isExpanded ? null : p.id)}
                      className={`cursor-pointer hover:bg-slate-50/80 transition-colors ${!p.confirmed ? "bg-amber-50/30" : ""}`}
                    >
                      <td className="py-3 px-3 text-slate-400">
                        {isExpanded ? "▼" : "▶"}
                      </td>
                      <td className="py-3 px-4">
                        <p className="font-semibold text-slate-800">{p.name}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{p.code} · {p.unit}</p>
                      </td>
                      <td className="py-3 px-4 text-slate-600 max-w-xs truncate">{p.description}</td>
                      <td className="py-3 px-4 text-slate-600 whitespace-nowrap">{p.supplier}</td>
                      <td className="py-3 px-4 text-slate-500 whitespace-nowrap">{p.origin}</td>
                      <td className="py-3 px-4 text-right font-semibold text-slate-800 whitespace-nowrap">
                        {p.preTaxPrice.toLocaleString("vi-VN")} ₫
                      </td>
                      <td className="py-3 px-4 text-slate-500 whitespace-nowrap">{p.quotationDate}</td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        {p.confirmed ? (
                          <span className="px-2.5 py-0.5 rounded-full bg-[rgba(40,199,111,0.16)] text-[#28c76f] font-semibold text-[11px]">
                            Đã xác nhận
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full bg-[rgba(255,159,67,0.16)] text-[#ff9f43] font-semibold text-[11px]">
                            Tạm thời
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => sourceDoc && onOpenDoc(sourceDoc)}
                          className="text-brand font-semibold hover:underline flex items-center gap-1"
                        >
                          {p.sourceDocId} ↗
                        </button>
                        {sourceDoc && <p className="text-[10px] text-slate-400">{DOC_TYPE_LABELS[sourceDoc.type]}</p>}
                      </td>
                    </tr>

                    {/* Expanded Purchase History Accordion */}
                    {isExpanded && (
                      <tr key={`${p.id}-expand`} className="bg-slate-50/70">
                        <td colSpan={9} className="p-4 border-t border-b border-slate-200">
                          <div className="space-y-2">
                            <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                              Lịch sử mua sắm — {p.name}
                            </h4>
                            <div className="bg-white rounded border border-slate-200 p-2">
                              <table className="w-full text-xs text-left">
                                <thead className="text-slate-400 font-medium">
                                  <tr>
                                    <th className="pb-2">Tài liệu</th>
                                    <th className="pb-2">Số lượng</th>
                                    <th className="pb-2">Đơn giá</th>
                                    <th className="pb-2">Thành tiền</th>
                                    <th className="pb-2">Ngày tải lên</th>
                                    <th className="pb-2">Thao tác</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                  {documents
                                    .filter((d) => d.lineItems.some((li) => li.code === p.code || li.name.includes(p.name.slice(0, 5))))
                                    .map((d, i) => (
                                      <tr key={i} className="hover:bg-slate-50">
                                        <td className="py-2 text-brand font-medium">{d.id}</td>
                                        <td className="py-2">{d.lineItems[0]?.qty || "1"} {p.unit}</td>
                                        <td className="py-2">{d.lineItems[0]?.unitPrice || `${p.preTaxPrice.toLocaleString()} ₫`}</td>
                                        <td className="py-2 font-semibold">{d.lineItems[0]?.total || `${p.preTaxPrice.toLocaleString()} ₫`}</td>
                                        <td className="py-2 text-slate-400">{d.uploadTime}</td>
                                        <td className="py-2">
                                          <button
                                            onClick={() => onOpenDoc(d)}
                                            className="text-brand hover:underline font-medium text-xs"
                                          >
                                            Xem tài liệu ↗
                                          </button>
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-400">
                    Không tìm thấy sản phẩm nào phù hợp.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
