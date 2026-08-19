import { useEffect, useMemo, useState } from "react";
import {
  CheckSquare,
  ChevronRight,
  Clock3,
  FileText,
  GitFork,
  Loader2,
  Plus,
} from "lucide-react";
import { Pagination } from "../common/Pagination";
import { StatusBadge } from "../common/StatusBadge";
import { PageHeader } from "../common/PageHeader";
import { StatCard } from "../common/StatCard";
import { SelectFilter } from "../common/SelectFilter";
import { SearchInput } from "../common/SearchInput";
import { DatePickerInput } from "../common/DatePickerInput";
import { IconEye, IconFilter, IconMoreVertical, IconPencil } from "../icons";
import { type ContractItem } from "../../data/contractMock";
import { ApiError, docApi } from "../../services/api";
import type { ContractActivityDto, ContractSummaryDto } from "../../data/apiModels";
import { toast } from "sonner";
import { ContractCreatePage } from "./ContractCreatePage";

const activityDot: Record<string, string> = {
  emerald: "bg-[#e9f9f0] text-[#28c76f]",
  blue: "bg-[#e8f3ff] text-[#3f81ea]",
  cyan: "bg-[#e6fbfd] text-[#00bad1]",
  indigo: "bg-[#eef2ff] text-[#7367f0]",
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value);
}

const statusLabel: Record<string, string> = {
  DRAFT: "Lưu nháp",
  PENDING_APPROVAL: "Chờ phê duyệt",
  CHANGES_REQUESTED: "Yêu cầu chỉnh sửa",
  APPROVED: "Đã duyệt",
  REJECTED: "Từ chối",
  SIGNED: "Đã ký",
  IN_EXECUTION: "Đang thực hiện",
  DELIVERED: "Đã giao hàng",
  ACCEPTED: "Đã nghiệm thu",
  PAID: "Đã thanh toán",
  LIQUIDATED: "Thanh lý",
  CANCELLED: "Hủy",
};

const statusCode: Record<string, string> = Object.fromEntries(
  Object.entries(statusLabel).map(([code, label]) => [label, code])
);

const goodsTypeCode: Record<string, string> = {
  "Hàng hoá": "GOODS",
  "Phi tư vấn": "NON_CONSULTING_SERVICE",
};

function formatDate(d?: string | null): string {
  if (!d) return "-";
  try {
    const date = new Date(d);
    if (isNaN(date.getTime())) return d;
    return date.toLocaleDateString("vi-VN");
  } catch {
    return d;
  }
}

function mapContract(c: ContractSummaryDto): ContractItem {
  const isGoods = c.contractType === "GOODS";
  const goodsTypeLabel = isGoods ? "Hàng hoá" : "Phi tư vấn";
  const contractFormLabel = c.contractForm || (isGoods ? "Trọn gói" : "Đơn giá cố định");

  return {
    id: c.contractNumber || c.id,
    contractType: contractFormLabel,
    goodsType: goodsTypeLabel,
    goodsName: c.packageName || "-",
    partner: c.vendorName || "-",
    value: Number(c.totalAmount || 0),
    signedAt: formatDate(c.signingDate),
    status: (statusLabel[c.status] || c.status) as ContractItem["status"],
    source: c.sourceType || "-",
  };
}

export function ContractListPage() {
  const [creating, setCreating] = useState(false);
  const [contractType, setContractType] = useState("all");
  const [goodsType, setGoodsType] = useState("all");
  const [status, setStatus] = useState("all");
  const [dateRange, setDateRange] = useState("");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [apiContracts, setApiContracts] = useState<ContractItem[]>([]);
  const [apiActivities, setApiActivities] = useState<ContractActivityDto[]>([]);
  const [apiStats, setApiStats] = useState({ mine: 0, running: 0, accepted: 0, paid: 0, liquidated: 0 });
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let active = true;
    setLoading(true);

    const contractTypeParam = goodsTypeCode[goodsType];
    const statusParam = statusCode[status];

    Promise.allSettled([
      docApi.getContracts({
        page: currentPage,
        size: pageSize,
        q: query.trim() || undefined,
        contractType: contractTypeParam,
        status: statusParam,
      }),
      docApi.getContractStats(),
      docApi.getContractActivity(),
    ]).then(([list, stats, activity]) => {
      if (!active) return;
      setLoading(false);

      if (list.status === "fulfilled") {
        setApiContracts(list.value.content.map(mapContract));
        setTotalElements(list.value.totalElements);
        setTotalPages(list.value.totalPages);
      } else {
        setApiContracts([]);
        setTotalElements(0);
        setTotalPages(1);
        toast.error(list.reason instanceof ApiError ? list.reason.message : "Không thể tải danh sách hợp đồng");
      }

      if (stats.status === "fulfilled") {
        setApiStats({
          mine: stats.value.total,
          running: stats.value.running,
          accepted: stats.value.accepted,
          paid: stats.value.paid,
          liquidated: stats.value.liquidated,
        });
      }

      if (activity.status === "fulfilled") {
        setApiActivities(activity.value);
      }
    });

    return () => {
      active = false;
    };
  }, [currentPage, pageSize, query, status, goodsType]);

  const filteredContracts = useMemo(() => {
    return apiContracts.filter((item) => {
      if (contractType !== "all" && item.contractType !== contractType) return false;
      if (dateRange.trim()) {
        const normDate = dateRange.trim().toLowerCase();
        if (!item.signedAt.toLowerCase().includes(normDate)) return false;
      }
      return true;
    });
  }, [apiContracts, contractType, dateRange]);

  if (creating) return <ContractCreatePage onBack={() => setCreating(false)} />;

  return (
    <div className="min-h-full w-full space-y-6 bg-[#f8f7fa] p-6 text-[#393740]">
      <PageHeader
        title="Quản lý hợp đồng"
        description="Tạo mới, cập nhật và theo dõi các hợp đồng do bạn phụ trách"
        action={
          <button
            onClick={() => setCreating(true)}
            className="inline-flex h-[46px] items-center gap-2 rounded-[6px] bg-[#ff4c51] px-5 text-[13px] font-medium text-white shadow-sm hover:bg-[#e64449]"
          >
            <Plus className="size-4" />
            Tạo Hợp Đồng
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          variant="accent-bottom"
          title="Hợp đồng của tôi"
          value={apiStats.mine}
          accentColor="#3f81ea"
          icon={FileText}
        />
        <StatCard
          variant="accent-bottom"
          title="Đang thực hiện"
          value={apiStats.running}
          accentColor="#ff9f43"
          icon={Clock3}
        />
        <StatCard
          variant="accent-bottom"
          title="Đã nghiệm thu"
          value={apiStats.accepted}
          accentColor="#28c76f"
          icon={CheckSquare}
        />
        <StatCard
          variant="accent-bottom"
          title="Trạng thái thực thi"
          value=""
          accentColor="#00bad1"
          icon={GitFork}
          extraContent={
            <>
              Thanh toán: {apiStats.paid} <span className="text-[#5d586c]">|</span> Thanh lý: {apiStats.liquidated}
            </>
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-4 rounded-[6px] bg-white p-5 shadow-[0_2px_8px_rgba(47,43,61,0.08)] md:grid-cols-[160px_160px_180px_180px_1fr_44px]">
        <SelectFilter
          label="Loại hợp đồng"
          value={contractType}
          onChange={(val) => {
            setContractType(val);
            setCurrentPage(1);
          }}
        >
          <option value="all">Tất cả</option>
          <option value="Trọn gói">Trọn gói</option>
          <option value="Đơn giá cố định">Đơn giá cố định</option>
        </SelectFilter>

        <SelectFilter
          label="Loại hàng hóa/dịch vụ"
          value={goodsType}
          onChange={(val) => {
            setGoodsType(val);
            setCurrentPage(1);
          }}
        >
          <option value="all">Tất cả</option>
          <option value="Hàng hoá">Hàng hoá</option>
          <option value="Phi tư vấn">Phi tư vấn</option>
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

        <SelectFilter
          label="Trạng thái"
          value={status}
          onChange={(val) => {
            setStatus(val);
            setCurrentPage(1);
          }}
        >
          <option value="all">Tất cả</option>
          <option value="Đang thực hiện">Đang thực hiện</option>
          <option value="Chờ phê duyệt">Chờ phê duyệt</option>
          <option value="Yêu cầu chỉnh sửa">Yêu cầu chỉnh sửa</option>
          <option value="Đã duyệt">Đã duyệt</option>
          <option value="Đã ký">Đã ký</option>
          <option value="Đã giao hàng">Đã giao hàng</option>
          <option value="Đã nghiệm thu">Đã nghiệm thu</option>
          <option value="Đã thanh toán">Đã thanh toán</option>
          <option value="Thanh lý">Thanh lý</option>
          <option value="Lưu nháp">Lưu nháp</option>
          <option value="Từ chối">Từ chối</option>
          <option value="Hủy">Hủy</option>
        </SelectFilter>

        <div className="space-y-1.5">
          <span className="text-[12px] font-medium text-transparent block">Tìm kiếm</span>
          <SearchInput
            value={query}
            onChange={(val) => {
              setQuery(val);
              setCurrentPage(1);
            }}
            placeholder="Tìm theo mã HĐ, đối tác..."
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={() => {
              setContractType("all");
              setGoodsType("all");
              setDateRange("");
              setStatus("all");
              setQuery("");
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
        <h2 className="mb-4 text-[16px] font-medium leading-[22px] text-[#393740]">Danh sách hợp đồng của tôi</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1070px] text-left text-[12px]">
            <thead>
              <tr className="h-10 border-b border-slate-100 text-[#5d586c]">
                {["Số hợp đồng", "Loại hợp đồng", "Loại HHDV", "Tên HHDV", "Đối tác", "Tổng giá trị (VND)", "Ngày ký", "Trạng thái", "Nguồn sinh", "Thao tác"].map((heading) => (
                  <th key={heading} className="px-3 py-2 font-medium">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={10} className="py-12 text-center text-slate-400">
                    <Loader2 className="mx-auto size-6 animate-spin text-[#3f81ea]" />
                    <span className="mt-2 block text-[13px]">Đang tải danh sách hợp đồng...</span>
                  </td>
                </tr>
              ) : filteredContracts.length === 0 ? (
                <tr>
                  <td colSpan={10} className="py-12 text-center text-slate-400">
                    Không tìm thấy hợp đồng nào phù hợp với điều kiện tìm kiếm.
                  </td>
                </tr>
              ) : (
                filteredContracts.map((item) => (
                  <tr key={item.id} className="h-[42px] hover:bg-slate-50/70">
                    <td className="px-3 py-2 font-medium text-[#393740]">{item.id}</td>
                    <td className="px-3 py-2">{item.contractType}</td>
                    <td className="px-3 py-2">{item.goodsType}</td>
                    <td className="max-w-[130px] px-3 py-2"><span className="line-clamp-2">{item.goodsName}</span></td>
                    <td className="px-3 py-2">{item.partner}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{formatCurrency(item.value)}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{item.signedAt}</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">{item.source}</td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-1 text-slate-500">
                        <button className="p-1 hover:text-[#3f81ea]" title="Xem chi tiết"><IconEye className="size-4" /></button>
                        <button className="p-1 hover:text-[#3f81ea]" title="Chỉnh sửa"><IconPencil className="size-4" /></button>
                        <button className="p-1 hover:text-[#3f81ea]" title="Tùy chọn"><IconMoreVertical className="size-4" /></button>
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

      <section className="rounded-[6px] bg-white p-5 shadow-[0_2px_8px_rgba(47,43,61,0.12)]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[16px] font-medium leading-[22px] text-[#393740]">Nhật ký gần đây</h2>
          <button className="inline-flex items-center gap-1 text-[13px] text-[#3f81ea] hover:text-[#2f6fd1]">
            Xem tất cả nhật ký
            <ChevronRight className="size-4" />
          </button>
        </div>
        <div>
          {apiActivities.map((item) => ({ icon: FileText, color: "blue" as const, text: item.action, actor: item.actor, time: item.timestamp })).map(({ icon: Icon, color, text, actor, time }, index, list) => (
            <div key={`${text}-${time}`} className="grid grid-cols-[36px_1fr_160px] gap-3">
              <div className="relative flex justify-center">
                <span className={`flex size-8 items-center justify-center rounded-full ${activityDot[color]}`}>
                  <Icon className="size-4" />
                </span>
                {index < list.length - 1 && <span className="absolute top-8 h-10 border-l border-slate-200" />}
              </div>
              <div className="min-h-[76px] pt-1">
                <p className="text-[13px] leading-[18px] text-[#393740]">{text}</p>
                <p className="mt-1 text-[12px] leading-[17px] text-slate-500">{actor}</p>
              </div>
              <time className="pt-1 text-right text-[12px] leading-[17px] text-slate-400">{time}</time>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
