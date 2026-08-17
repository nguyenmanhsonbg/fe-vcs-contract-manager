import { useMemo, useState } from "react";
import {
  CheckCircle,
  GitCompare,
  TrendingUp,
  Download,
} from "lucide-react";
import { PageHeader } from "../common/PageHeader";
import { StatCard } from "../common/StatCard";
import { SelectFilter } from "../common/SelectFilter";
import { SearchInput } from "../common/SearchInput";
import { Pagination } from "../common/Pagination";
import { StatusBadge } from "../common/StatusBadge";
import { IconFilter } from "../icons";
import { ReconciliationItem, sampleReconciliations } from "../../data/businessPlanMock";
import { toast } from "sonner";

function formatCurrency(val: number): string {
  return new Intl.NumberFormat("vi-VN").format(val);
}

export function AcceptanceReconciliationPage() {
  const [items] = useState<ReconciliationItem[]>(sampleReconciliations);
  const [statusFilter, setStatusFilter] = useState("all");
  const [riskFilter, setRiskFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const stats = useMemo(() => {
    const totalBudget = items.reduce((acc, curr) => acc + curr.planBudget, 0);
    const totalAccepted = items.reduce((acc, curr) => acc + curr.actualAccepted, 0);
    const avgCompletion = totalBudget > 0 ? (totalAccepted / totalBudget) * 100 : 0;
    return {
      total: items.length,
      matched: items.filter((p) => p.status === "Khớp đúng").length,
      totalBudget,
      totalAccepted,
      avgCompletion: avgCompletion.toFixed(1),
    };
  }, [items]);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return items.filter((item) => {
      if (statusFilter !== "all" && item.status !== statusFilter) return false;
      if (riskFilter !== "all" && item.riskLevel !== riskFilter) return false;
      if (q) {
        return (
          item.businessPlanId.toLowerCase().includes(q) ||
          item.businessPlanTitle.toLowerCase().includes(q) ||
          item.partner.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [items, statusFilter, riskFilter, searchQuery]);

  const totalElements = filteredItems.length;
  const totalPages = Math.max(1, Math.ceil(totalElements / pageSize));
  const paginatedList = useMemo(() => {
    const from = (currentPage - 1) * pageSize;
    return filteredItems.slice(from, from + pageSize);
  }, [filteredItems, currentPage, pageSize]);

  return (
    <div className="min-h-full w-full space-y-6 bg-[#f8f7fa] p-6 text-[#393740]">
      <PageHeader
        title="Đối sánh nghiệm thu"
        description="Đối chiếu giá trị dự toán phương án kinh doanh với số liệu nghiệm thu thực tế, phân tích sai lệch và cảnh báo rủi ro"
        action={
          <button
            onClick={() => toast.success("Đang xuất báo cáo đối sánh nghiệm thu (Excel)")}
            className="inline-flex h-[46px] items-center gap-2 rounded-[6px] bg-[#3f81ea] px-5 text-[13px] font-medium text-white shadow-sm hover:bg-[#2f6fd1] transition-colors"
          >
            <Download className="size-4" />
            Xuất Báo Cáo Đối Soát
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          variant="accent-bottom"
          title="Tổng phương án đối soát"
          value={stats.total}
          accentColor="#3f81ea"
          icon={GitCompare}
        />
        <StatCard
          variant="accent-bottom"
          title="Phương án khớp đúng 100%"
          value={stats.matched}
          accentColor="#28c76f"
          icon={CheckCircle}
        />
        <StatCard
          variant="accent-bottom"
          title="Tỷ lệ giải ngân nghiệm thu"
          value={`${stats.avgCompletion}%`}
          accentColor="#ff9f43"
          icon={TrendingUp}
        />
        <StatCard
          variant="accent-bottom"
          title="Tổng giá trị dự toán / Thực tế"
          value=""
          accentColor="#00bad1"
          icon={CheckCircle}
          extraContent={
            <div className="text-[12px] leading-tight space-y-0.5 text-[#2f2b3d]">
              <p>DT: <strong className="text-[#3f81ea]">{formatCurrency(stats.totalBudget)} VND</strong></p>
              <p>NT: <strong className="text-[#28c76f]">{formatCurrency(stats.totalAccepted)} VND</strong></p>
            </div>
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-4 rounded-[6px] bg-white p-5 shadow-[0_2px_8px_rgba(47,43,61,0.08)] md:grid-cols-[200px_200px_1fr_44px]">
        <SelectFilter
          label="Trạng thái đối soát"
          value={statusFilter}
          onChange={(val) => {
            setStatusFilter(val);
            setCurrentPage(1);
          }}
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="Khớp đúng">Khớp đúng</option>
          <option value="Cần rà soát">Cần rà soát</option>
          <option value="Vượt định mức">Vượt định mức</option>
        </SelectFilter>

        <SelectFilter
          label="Mức độ rủi ro"
          value={riskFilter}
          onChange={(val) => {
            setRiskFilter(val);
            setCurrentPage(1);
          }}
        >
          <option value="all">Tất cả mức độ</option>
          <option value="Thấp">Thấp</option>
          <option value="Trung bình">Trung bình</option>
          <option value="Cao">Cao</option>
        </SelectFilter>

        <div className="space-y-1.5">
          <span className="text-[12px] font-medium text-transparent block">Tìm kiếm</span>
          <SearchInput
            value={searchQuery}
            onChange={(val) => {
              setSearchQuery(val);
              setCurrentPage(1);
            }}
            placeholder="Tìm theo mã PAKD, đối tác, tên phương án..."
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={() => {
              setStatusFilter("all");
              setRiskFilter("all");
              setSearchQuery("");
              setCurrentPage(1);
            }}
            title="Đặt lại bộ lọc"
            className="flex size-9 items-center justify-center rounded-[6px] border border-slate-200 bg-white text-[#5d586c] transition-colors hover:bg-slate-50 hover:text-[#393740]"
          >
            <IconFilter className="size-4" />
          </button>
        </div>
      </div>

      <section className="rounded-[6px] bg-white p-5 shadow-[0_2px_8px_rgba(47,43,61,0.12)]">
        <h2 className="mb-4 text-[16px] font-medium leading-[22px] text-[#393740]">
          Bảng đối soát phương án kinh doanh & nghiệm thu
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-left text-[12px]">
            <thead>
              <tr className="h-10 border-b border-slate-100 text-[#5d586c]">
                <th className="px-3 py-2 font-medium">Số PAKD</th>
                <th className="px-3 py-2 font-medium">Tên Phương án kinh doanh</th>
                <th className="px-3 py-2 font-medium">Đối tác</th>
                <th className="px-3 py-2 font-medium text-right">Dự toán PAKD (VND)</th>
                <th className="px-3 py-2 font-medium text-right">Đã nghiệm thu (VND)</th>
                <th className="px-3 py-2 font-medium text-center">Tiến độ (%)</th>
                <th className="px-3 py-2 font-medium text-right">Chênh lệch (VND)</th>
                <th className="px-3 py-2 font-medium">Rủi ro</th>
                <th className="px-3 py-2 font-medium">Kết quả đối soát</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedList.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-10 text-center text-slate-400">
                    Không tìm thấy dữ liệu đối soát nào.
                  </td>
                </tr>
              ) : (
                paginatedList.map((item) => (
                  <tr key={item.id} className="h-[44px] hover:bg-slate-50/80">
                    <td className="px-3 py-2 font-semibold text-[#3f81ea]">
                      {item.businessPlanId}
                    </td>
                    <td className="max-w-[240px] px-3 py-2">
                      <span className="line-clamp-2 font-medium text-[#2f2b3d]">
                        {item.businessPlanTitle}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-slate-600">{item.partner}</td>
                    <td className="px-3 py-2 text-right font-medium text-slate-700">
                      {formatCurrency(item.planBudget)}
                    </td>
                    <td className="px-3 py-2 text-right font-medium text-[#28c76f]">
                      {formatCurrency(item.actualAccepted)}
                    </td>
                    <td className="px-3 py-2 text-center font-semibold">
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-[11px] text-[#3f81ea]">
                        {item.completionRate}%
                      </span>
                    </td>
                    <td className="px-3 py-2 text-right font-medium text-slate-600">
                      {formatCurrency(item.varianceAmount)}
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={`inline-flex items-center rounded px-2 py-0.5 text-[11px] font-medium ${
                          item.riskLevel === "Thấp"
                            ? "bg-green-50 text-[#28c76f]"
                            : item.riskLevel === "Trung bình"
                            ? "bg-amber-50 text-[#ff9f43]"
                            : "bg-red-50 text-[#ff4c51]"
                        }`}
                      >
                        {item.riskLevel}
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <StatusBadge status={item.status} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalElements={totalElements}
          totalPages={totalPages}
          pageSizeOptions={[10, 20, 50]}
          onPageChange={setCurrentPage}
          onPageSizeChange={(size) => {
            setPageSize(size);
            setCurrentPage(1);
          }}
        />
      </section>
    </div>
  );
}
