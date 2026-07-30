import { useMemo, useState, type ReactNode } from "react";
import {
  Search,
  Sparkles,
  ExternalLink,
  X,
  ChevronDown,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Clock,
  Package,
} from "lucide-react";
import {
  PRODUCTS,
  DOCUMENTS,
  AI_KEYWORDS,
  Product,
  DOC_TYPE_LABELS,
  DigitizedDoc,
} from "../data/mock";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

// Build a lookup: sourceDocId → DigitizedDoc
const DOC_MAP = Object.fromEntries(DOCUMENTS.map((d) => [d.id, d]));

export function ProductLookupPage({ onOpenDoc }: { onOpenDoc: (doc: DigitizedDoc) => void }) {
  const [search, setSearch] = useState("");
  const [activeKeywords, setActiveKeywords] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  function toggleKeyword(kw: string) {
    setActiveKeywords((prev) =>
      prev.includes(kw) ? prev.filter((k) => k !== kw) : [...prev, kw]
    );
  }

  function clearAll() {
    setSearch("");
    setActiveKeywords([]);
  }

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
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
  }, [search, activeKeywords]);

  const confirmedCount = filtered.filter((p) => p.confirmed).length;
  const tempCount = filtered.filter((p) => !p.confirmed).length;

  return (
    <div className="space-y-5 p-6">
      {/* Page header */}
      <div>
        <h1 className="text-[18px] font-semibold text-slate-800">Tra cứu sản phẩm &amp; Lịch sử mua sắm</h1>
        <p className="mt-0.5 text-[13px] text-slate-500">
          Tìm kiếm thông tin sản phẩm và lịch sử mua sắm từ dữ liệu đã số hoá
        </p>
      </div>

      {/* Stats strip */}
      <div className="flex gap-4">
        <StatPill icon={<Package className="size-4 text-slate-400" />} label="Tổng sản phẩm" value={PRODUCTS.length} />
        <StatPill icon={<CheckCircle2 className="size-4 text-[#28c76f]" />} label="Đã xác nhận" value={PRODUCTS.filter(p => p.confirmed).length} color="text-[#28c76f]" />
        <StatPill icon={<Clock className="size-4 text-[#ff9f43]" />} label="Dữ liệu tạm thời" value={PRODUCTS.filter(p => !p.confirmed).length} color="text-[#ff9f43]" />
      </div>

      {/* Search card */}
      <Card className="p-5 shadow-sm bg-white">
        {/* Search bar */}
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && null}
              placeholder="Tìm kiếm thông minh bằng AI (tên sản phẩm, mã hàng, thông số…)"
              className="bg-white pl-9 pr-10 border-slate-300 h-10 text-[13px] shadow-sm"
            />
            <Sparkles className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-purple-400" />
          </div>
          <Button className="bg-brand text-white hover:bg-brand-dark h-10 px-5 text-[13px]">
            Tìm kiếm
          </Button>
          {(search || activeKeywords.length > 0) && (
            <Button variant="ghost" onClick={clearAll} className="h-10 text-[13px] text-slate-500 hover:text-slate-700 px-3">
              <X className="size-4 mr-1" /> Xoá bộ lọc
            </Button>
          )}
        </div>

        {/* AI keyword suggestions */}
        <div className="mb-5">
          <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wide mb-2">Gợi ý từ khoá AI</p>
          <div className="flex flex-wrap gap-2">
            {AI_KEYWORDS.map((kw) => {
              const active = activeKeywords.includes(kw);
              return (
                <button
                  key={kw}
                  onClick={() => toggleKeyword(kw)}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[12px] transition-colors border ${
                    active
                      ? "bg-brand text-white border-brand"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:border-brand/40 hover:text-brand hover:bg-brand-soft"
                  }`}
                >
                  {active && <X className="size-3" />}
                  {kw}
                </button>
              );
            })}
          </div>
        </div>

        {/* Result summary */}
        <div className="mb-3 flex items-center gap-3 text-[13px]">
          <span className="text-slate-500">
            Tìm thấy <span className="font-medium text-slate-800">{filtered.length}</span> sản phẩm
          </span>
          {confirmedCount > 0 && (
            <Badge variant="outline" className="gap-1 border-[#28c76f]/30 bg-[#28c76f]/8 text-[#28c76f] text-[11px] font-medium rounded-full px-2.5">
              <CheckCircle2 className="size-3" /> {confirmedCount} đã xác nhận
            </Badge>
          )}
          {tempCount > 0 && (
            <Badge variant="outline" className="gap-1 border-[#ff9f43]/30 bg-[#ff9f43]/8 text-[#ff9f43] text-[11px] font-medium rounded-full px-2.5">
              <AlertCircle className="size-3" /> {tempCount} tạm thời
            </Badge>
          )}
        </div>

        {/* Product table */}
        <div className="overflow-x-auto rounded-md border border-slate-200">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50 hover:bg-slate-50">
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider w-6"></TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Tên sản phẩm</TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Thông số kỹ thuật</TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Nhà cung cấp</TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Xuất xứ</TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider text-right">Đơn giá (VNĐ)</TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Ngày báo giá</TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Trạng thái</TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Tài liệu nguồn</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((p) => {
                const isExpanded = expandedId === p.id;
                const sourceDoc = DOC_MAP[p.sourceDocId];
                return (
                  <>
                    <TableRow
                      key={p.id}
                      className={`cursor-pointer hover:bg-slate-50/80 ${!p.confirmed ? "bg-amber-50/30" : ""}`}
                      onClick={() => setExpandedId(isExpanded ? null : p.id)}
                    >
                      <TableCell className="py-2.5 pr-0">
                        {isExpanded
                          ? <ChevronDown className="size-4 text-slate-400" />
                          : <ChevronRight className="size-4 text-slate-300" />}
                      </TableCell>
                      <TableCell className="py-2.5">
                        <div>
                          <p className="text-[13px] font-medium text-slate-800">{p.name}</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">{p.code} · {p.unit}</p>
                        </div>
                      </TableCell>
                      <TableCell className="py-2.5">
                        <p className="line-clamp-2 max-w-xs text-[13px] text-slate-600">{p.description}</p>
                      </TableCell>
                      <TableCell className="py-2.5 text-[13px] text-slate-600 whitespace-nowrap">{p.supplier}</TableCell>
                      <TableCell className="py-2.5 text-[13px] text-slate-500 whitespace-nowrap">{p.origin}</TableCell>
                      <TableCell className="py-2.5 text-right font-medium text-[13px] text-slate-800 whitespace-nowrap">
                        {p.preTaxPrice.toLocaleString("vi-VN")} ₫
                      </TableCell>
                      <TableCell className="py-2.5 text-[13px] text-slate-500 whitespace-nowrap">{p.quotationDate}</TableCell>
                      <TableCell className="py-2.5">
                        {p.confirmed ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#28c76f]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#28c76f]">
                            <CheckCircle2 className="size-3" /> Đã xác nhận
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#ff9f43]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#ff9f43]">
                            <AlertCircle className="size-3" /> Tạm thời
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="py-2.5" onClick={(e) => e.stopPropagation()}>
                        <Button
                          variant="link"
                          className="h-auto p-0 text-brand text-[13px] font-medium hover:text-brand-dark"
                          onClick={() => sourceDoc && onOpenDoc(sourceDoc)}
                        >
                          {p.sourceDocId}
                          <ExternalLink className="ml-1 size-3" />
                        </Button>
                        {sourceDoc && (
                          <p className="text-[11px] text-slate-400 mt-0.5">{DOC_TYPE_LABELS[sourceDoc.type]}</p>
                        )}
                      </TableCell>
                    </TableRow>

                    {/* Expanded: purchase history */}
                    {isExpanded && (
                      <TableRow key={`${p.id}-expand`} className="bg-slate-50/60 hover:bg-slate-50/60">
                        <TableCell colSpan={9} className="py-0">
                          <PurchaseHistory product={p} onOpenDoc={(d) => onOpenDoc(d)} />
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                );
              })}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={9} className="py-12 text-center text-[13px] text-muted-foreground">
                    Không tìm thấy sản phẩm nào phù hợp.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}

/** Inline purchase history panel shown when a product row is expanded */
function PurchaseHistory({ product, onOpenDoc }: { product: Product; onOpenDoc: (d: DigitizedDoc) => void }) {
  // Find all line items from all documents that match this product name or code
  const history = useMemo(() => {
    const results: { doc: DigitizedDoc; qty: string; unitPrice: string; total: string; page: number }[] = [];
    for (const doc of DOCUMENTS) {
      for (const li of doc.lineItems) {
        if (
          li.name.toLowerCase().includes(product.name.split(" ").slice(0, 3).join(" ").toLowerCase()) ||
          li.code === product.code
        ) {
          results.push({ doc, qty: li.qty, unitPrice: li.unitPrice, total: li.total, page: li.region.page });
        }
      }
    }
    return results;
  }, [product]);

  return (
    <div className="px-4 py-3 border-t border-slate-100">
      <p className="text-[12px] font-semibold text-slate-500 uppercase tracking-wide mb-2">
        Lịch sử mua sắm — {product.name}
      </p>
      {history.length > 0 ? (
        <table className="w-full text-[12px]">
          <thead>
            <tr className="text-slate-400 text-left">
              <th className="pb-1.5 font-medium pr-6">Tài liệu</th>
              <th className="pb-1.5 font-medium pr-6">Loại</th>
              <th className="pb-1.5 font-medium pr-6">Số lượng</th>
              <th className="pb-1.5 font-medium pr-6">Đơn giá (VNĐ)</th>
              <th className="pb-1.5 font-medium pr-6">Thành tiền (VNĐ)</th>
              <th className="pb-1.5 font-medium pr-6">Ngày tải lên</th>
              <th className="pb-1.5 font-medium">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {history.map((h, i) => (
              <tr key={i} className="hover:bg-slate-100/50">
                <td className="py-1.5 pr-6 font-medium text-brand">{h.doc.id}</td>
                <td className="py-1.5 pr-6 text-slate-500">{DOC_TYPE_LABELS[h.doc.type]}</td>
                <td className="py-1.5 pr-6 text-slate-700">{h.qty} {product.unit}</td>
                <td className="py-1.5 pr-6 text-slate-700">{h.unitPrice}</td>
                <td className="py-1.5 pr-6 font-medium text-slate-800">{h.total}</td>
                <td className="py-1.5 pr-6 text-slate-500">{h.doc.uploadTime}</td>
                <td className="py-1.5">
                  <button
                    onClick={() => onOpenDoc(h.doc)}
                    className="text-brand hover:text-brand-dark hover:underline inline-flex items-center gap-1"
                  >
                    Xem tài liệu <ExternalLink className="size-3" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-[12px] text-slate-400 py-2">Chưa tìm thấy lịch sử mua sắm khác cho sản phẩm này.</p>
      )}
    </div>
  );
}

function StatPill({
  icon,
  label,
  value,
  color = "text-slate-700",
}: {
  icon: ReactNode;
  label: string;
  value: number;
  color?: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
      {icon}
      <div>
        <p className="text-[11px] text-slate-400 leading-none mb-0.5">{label}</p>
        <p className={`text-[18px] font-semibold leading-none ${color}`}>{value}</p>
      </div>
    </div>
  );
}
