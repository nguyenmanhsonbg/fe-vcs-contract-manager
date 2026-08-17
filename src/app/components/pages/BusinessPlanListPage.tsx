import { useMemo, useState } from "react";
import {
  CheckSquare,
  Clock3,
  FileText,
  GitFork,
  Plus,
} from "lucide-react";
import { PageHeader } from "../common/PageHeader";
import { StatCard } from "../common/StatCard";
import { SelectFilter } from "../common/SelectFilter";
import { SearchInput } from "../common/SearchInput";
import { DatePickerInput } from "../common/DatePickerInput";
import { StatusBadge } from "../common/StatusBadge";
import { Pagination } from "../common/Pagination";
import { IconEye, IconFilter, IconMoreVertical, IconPencil } from "../icons";
import { BusinessPlanItem, sampleBusinessPlans } from "../../data/businessPlanMock";
import { toast } from "sonner";

interface BusinessPlanListPageProps {
  onSelectPlan: (id: string) => void;
}

function formatCurrency(val: number): string {
  return new Intl.NumberFormat("vi-VN").format(val);
}

export function BusinessPlanListPage({ onSelectPlan }: BusinessPlanListPageProps) {
  const [plans] = useState<BusinessPlanItem[]>(sampleBusinessPlans);
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateRange, setDateRange] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const stats = useMemo(() => {
    return {
      total: plans.length,
      running: plans.filter((p) => p.status === "Đang thực hiện").length,
      approved: plans.filter((p) => p.status === "Đã duyệt").length,
      pending: plans.filter((p) => p.status === "Chờ phê duyệt").length,
    };
  }, [plans]);

  const filteredPlans = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return plans.filter((item) => {
      if (statusFilter !== "all" && item.status !== statusFilter) return false;
      if (dateRange.trim()) {
        const normDate = dateRange.trim().toLowerCase();
        if (!item.planDate.toLowerCase().includes(normDate)) return false;
      }
      if (q) {
        return (
          item.id.toLowerCase().includes(q) ||
          item.code.toLowerCase().includes(q) ||
          item.title.toLowerCase().includes(q) ||
          item.partner.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [plans, statusFilter, dateRange, searchQuery]);

  const totalElements = filteredPlans.length;
  const totalPages = Math.max(1, Math.ceil(totalElements / pageSize));
  const paginatedList = useMemo(() => {
    const from = (currentPage - 1) * pageSize;
    return filteredPlans.slice(from, from + pageSize);
  }, [filteredPlans, currentPage, pageSize]);

  return (
    <div className="min-h-full w-full space-y-6 bg-[#f8f7fa] p-6 text-[#393740]">
      {/* Page Header */}
      <PageHeader
        title="Quản lý phương án kinh doanh"
        description="Theo dõi, phê duyệt và quản lý các phương án kinh doanh (PAKD) trong hệ thống"
        action={
          <button
            onClick={() => toast.info("Tính năng tạo Phương án kinh doanh mới đang sẵn sàng")}
            className="inline-flex h-[46px] items-center gap-2 rounded-[6px] bg-[#ff4c51] px-5 text-[13px] font-medium text-white shadow-sm hover:bg-[#e64449] transition-colors"
          >
            <Plus className="size-4" />
            Tạo Phương Án
          </button>
        }
      />

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          variant="accent-bottom"
          title="Tổng số phương án"
          value={stats.total}
          accentColor="#3f81ea"
          icon={FileText}
        />
        <StatCard
          variant="accent-bottom"
          title="Đang thực hiện"
          value={stats.running}
          accentColor="#ff9f43"
          icon={Clock3}
        />
        <StatCard
          variant="accent-bottom"
          title="Đã duyệt"
          value={stats.approved}
          accentColor="#28c76f"
          icon={CheckSquare}
        />
        <StatCard
          variant="accent-bottom"
          title="Chờ phê duyệt"
          value={stats.pending}
          accentColor="#00bad1"
          icon={GitFork}
        />
      </div>

      {/* Filter Toolbar */}
      <div className="grid grid-cols-1 gap-4 rounded-[6px] bg-white p-5 shadow-[0_2px_8px_rgba(47,43,61,0.08)] md:grid-cols-[200px_200px_1fr_44px]">
        <SelectFilter
          label="Trạng thái"
          value={statusFilter}
          onChange={(val) => {
            setStatusFilter(val);
            setCurrentPage(1);
          }}
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="Đã duyệt">Đã duyệt</option>
          <option value="Đang thực hiện">Đang thực hiện</option>
          <option value="Chờ phê duyệt">Chờ phê duyệt</option>
          <option value="Lưu nháp">Lưu nháp</option>
          <option value="Từ chối">Từ chối</option>
        </SelectFilter>

        <DatePickerInput
          label="Khoảng thời gian"
          value={dateRange}
          onChange={(val) => {
            setDateRange(val);
            setCurrentPage(1);
          }}
          placeholder="YYYY. MM. DD."
        />

        <div className="space-y-1.5">
          <span className="text-[12px] font-medium text-transparent block">Tìm kiếm</span>
          <SearchInput
            value={searchQuery}
            onChange={(val) => {
              setSearchQuery(val);
              setCurrentPage(1);
            }}
            placeholder="Tìm theo số PAKD, đối tác, tên phương án..."
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={() => {
              setStatusFilter("all");
              setDateRange("");
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

      {/* Data Table Section */}
      <section className="rounded-[6px] bg-white p-5 shadow-[0_2px_8px_rgba(47,43,61,0.12)]">
        <h2 className="mb-4 text-[16px] font-medium leading-[22px] text-[#393740]">
          Danh sách phương án kinh doanh
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-left text-[12px]">
            <thead>
              <tr className="h-10 border-b border-slate-100 text-[#5d586c]">
                <th className="px-3 py-2 font-medium">Số tờ trình / PAKD</th>
                <th className="px-3 py-2 font-medium">Mã phương án</th>
                <th className="px-3 py-2 font-medium">Tên Phương án kinh doanh</th>
                <th className="px-3 py-2 font-medium">Đối tác</th>
                <th className="px-3 py-2 font-medium">Tổng giá trị (VND)</th>
                <th className="px-3 py-2 font-medium">Ngày lập</th>
                <th className="px-3 py-2 font-medium">Trạng thái</th>
                <th className="px-3 py-2 font-medium">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedList.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-10 text-center text-slate-400">
                    Không tìm thấy phương án kinh doanh nào phù hợp.
                  </td>
                </tr>
              ) : (
                paginatedList.map((item) => (
                  <tr
                    key={item.id}
                    className="h-[44px] hover:bg-slate-50/80 cursor-pointer"
                    onClick={() => onSelectPlan(item.id)}
                  >
                    <td className="px-3 py-2 font-semibold text-[#3f81ea]">
                      {item.id}
                    </td>
                    <td className="px-3 py-2 font-medium text-[#2f2b3d]">
                      {item.code}
                    </td>
                    <td className="max-w-[260px] px-3 py-2">
                      <span className="line-clamp-2 font-medium text-[#2f2b3d]">
                        {item.title}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-slate-600">{item.partner}</td>
                    <td className="px-3 py-2 whitespace-nowrap font-medium text-[#2f2b3d]">
                      {formatCurrency(item.totalAmount)}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-slate-500">
                      {item.planDate}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <StatusBadge status={item.status} />
                    </td>
                    <td
                      className="px-3 py-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center gap-1 text-slate-500">
                        <button
                          onClick={() => onSelectPlan(item.id)}
                          className="p-1 hover:text-[#3f81ea]"
                          title="Xem chi tiết"
                        >
                          <IconEye className="size-4" />
                        </button>
                        <button
                          onClick={() => toast.info(`Chỉnh sửa ${item.id}`)}
                          className="p-1 hover:text-[#3f81ea]"
                          title="Chỉnh sửa"
                        >
                          <IconPencil className="size-4" />
                        </button>
                        <button
                          onClick={() => toast.info(`Tùy chọn ${item.id}`)}
                          className="p-1 hover:text-[#3f81ea]"
                          title="Tùy chọn"
                        >
                          <IconMoreVertical className="size-4" />
                        </button>
                      </div>
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
