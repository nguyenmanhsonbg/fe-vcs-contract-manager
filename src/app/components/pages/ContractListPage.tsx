import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import {
  Calendar,
  CheckSquare,
  ChevronDown,
  ChevronRight,
  Clock3,
  FileText,
  GitFork,
  Plus,
} from "lucide-react";
import { Pagination } from "../common/Pagination";
import { IconEye, IconFilter, IconMoreVertical, IconSearch, IconPencil } from "../icons";
import { contracts, contractActivities, contractStats, type ContractStatus } from "../../data/contractMock";
import { ContractCreatePage } from "./ContractCreatePage";

const statusClass: Record<ContractStatus, string> = {
  "Đang thực hiện": "bg-[#fff3e8] text-[#ff9f43]",
  "Đã nghiệm thu": "bg-[#e9f9f0] text-[#28c76f]",
  "Đã thanh toán": "bg-[#e8f3ff] text-[#3f81ea]",
  "Chờ phê duyệt": "bg-[#ffecee] text-[#ff4c51]",
};

const activityDot: Record<string, string> = {
  emerald: "bg-[#e9f9f0] text-[#28c76f]",
  blue: "bg-[#e8f3ff] text-[#3f81ea]",
  cyan: "bg-[#e6fbfd] text-[#00bad1]",
  indigo: "bg-[#eef2ff] text-[#7367f0]",
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value);
}

function SelectFilter({ label, value, onChange, children }: { label: string; value: string; onChange: (value: string) => void; children: ReactNode }) {
  return (
    <label className="space-y-1.5 text-[12px] font-medium text-[#5d586c]">
      <span>{label}</span>
      <span className="relative block">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-9 w-full appearance-none rounded-[6px] border border-slate-200 bg-white px-3 pr-8 text-[13px] text-[#393740] outline-none focus:border-[#3f81ea]"
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
      </span>
    </label>
  );
}

export function ContractListPage() {
  const [creating, setCreating] = useState(false);
  const [contractType, setContractType] = useState("all");
  const [goodsType, setGoodsType] = useState("all");
  const [status, setStatus] = useState("all");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const filteredContracts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return contracts.filter((item) => {
      if (contractType !== "all" && item.contractType !== contractType) return false;
      if (goodsType !== "all" && item.goodsType !== goodsType) return false;
      if (status !== "all" && item.status !== status) return false;
      if (!normalizedQuery) return true;
      return [item.id, item.goodsName, item.partner, item.source].some((value) =>
        value.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [contractType, goodsType, status, query]);

  if (creating) return <ContractCreatePage onBack={() => setCreating(false)} />;

  return (
    <div className="min-h-full w-full space-y-6 bg-[#f8f7fa] p-6 text-[#393740]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold leading-[29px] text-[#2f2b3d]">Quản lý hợp đồng</h1>
          <p className="mt-1 text-[12px] leading-[17px] text-slate-500">
            Tạo mới, cập nhật và theo dõi các hợp đồng do bạn phụ trách
          </p>
        </div>
        <button
          onClick={() => setCreating(true)}
          className="inline-flex h-[46px] items-center gap-2 rounded-[6px] bg-[#ff4c51] px-5 text-[13px] font-medium text-white shadow-sm hover:bg-[#e64449]"
        >
          <Plus className="size-4" />
          Tạo Hợp Đồng
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Hợp đồng của tôi", value: contractStats.mine, color: "#3f81ea", icon: FileText },
          { label: "Đang thực hiện", value: contractStats.running, color: "#ff9f43", icon: Clock3 },
          { label: "Đã nghiệm thu", value: contractStats.accepted, color: "#28c76f", icon: CheckSquare },
        ].map(({ label, value, color, icon: Icon }) => (
          <div key={label} className="flex h-[108px] items-center rounded-[6px] border-b-[3px] bg-white p-6 shadow-[0_2px_8px_rgba(47,43,61,0.12)]" style={{ borderBottomColor: color }}>
            <div className="flex items-center gap-4">
              <div className="flex size-10 items-center justify-center rounded-[6px]" style={{ color, backgroundColor: `${color}22` }}>
                <Icon className="size-6" />
              </div>
              <div>
                <p className="text-[13px] font-medium leading-[18px]">{label}</p>
                <p className="text-[24px] font-medium leading-[38px]" style={{ color }}>{value}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="flex h-[108px] items-center rounded-[6px] border-b-[3px] border-[#00bad1] bg-white p-6 shadow-[0_2px_8px_rgba(47,43,61,0.12)]">
          <div className="flex items-center gap-4">
            <div className="flex size-10 items-center justify-center rounded-[6px] bg-[#e6fbfd] text-[#00bad1]">
              <GitFork className="size-6" />
            </div>
            <div>
              <p className="text-[13px] font-medium leading-[18px]">Trạng thái thực thi</p>
              <p className="text-[18px] font-medium leading-[38px] text-[#00bad1]">
                Thanh toán: {contractStats.paid} <span className="text-[#5d586c]">|</span> Thanh lý: {contractStats.liquidated}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 rounded-[6px] bg-white p-5 shadow-[0_2px_8px_rgba(47,43,61,0.08)] md:grid-cols-[160px_160px_180px_160px_1fr_44px]">
        <SelectFilter label="Loại hợp đồng" value={contractType} onChange={setContractType}>
          <option value="all">Tất cả</option>
          <option value="Đơn giá cố định">Đơn giá cố định</option>
          <option value="Trọn gói">Trọn gói</option>
        </SelectFilter>
        <SelectFilter label="Loại hàng hóa/dịch vụ" value={goodsType} onChange={setGoodsType}>
          <option value="all">Tất cả</option>
          <option value="Hàng hoá">Hàng hoá</option>
          <option value="Phi tư vấn">Phi tư vấn</option>
        </SelectFilter>
        <label className="space-y-1.5 text-[12px] font-medium text-[#5d586c]">
          <span>Khoảng thời gian</span>
          <span className="relative block">
            <input type="text" placeholder="YYYY. MM. DD." className="h-9 w-full rounded-[6px] border border-slate-200 bg-white px-3 pr-8 text-[13px] outline-none focus:border-[#3f81ea]" />
            <Calendar className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          </span>
        </label>
        <SelectFilter label="Trạng thái" value={status} onChange={setStatus}>
          <option value="all">Tất cả</option>
          <option value="Đang thực hiện">Đang thực hiện</option>
          <option value="Đã nghiệm thu">Đã nghiệm thu</option>
          <option value="Đã thanh toán">Đã thanh toán</option>
          <option value="Chờ phê duyệt">Chờ phê duyệt</option>
        </SelectFilter>
        <label className="space-y-1.5 text-[12px] font-medium text-transparent">
          <span>Tìm kiếm</span>
          <span className="relative block">
            <IconSearch className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Tìm theo mã HĐ, đối tác..."
              className="h-9 w-full rounded-[6px] border border-slate-200 bg-white px-9 text-[13px] text-[#393740] outline-none focus:border-[#3f81ea]"
            />
          </span>
        </label>
        <button
          onClick={() => {
            setContractType("all");
            setGoodsType("all");
            setStatus("all");
            setQuery("");
          }}
          title="Đặt lại bộ lọc"
          className="mt-auto flex size-9 items-center justify-center rounded-[6px] border border-slate-200 bg-white text-[#5d586c] hover:bg-slate-50"
        >
          <IconFilter className="size-4" />
        </button>
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
              {filteredContracts.map((item) => (
                <tr key={item.id} className="h-[42px] hover:bg-slate-50/70">
                  <td className="px-3 py-2 font-medium text-[#393740]">{item.id}</td>
                  <td className="px-3 py-2">{item.contractType}</td>
                  <td className="px-3 py-2">{item.goodsType}</td>
                  <td className="max-w-[130px] px-3 py-2"><span className="line-clamp-2">{item.goodsName}</span></td>
                  <td className="px-3 py-2">{item.partner}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{formatCurrency(item.value)}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{item.signedAt}</td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <span className={`inline-flex h-6 items-center rounded-[4px] px-2 text-[11px] font-medium ${statusClass[item.status]}`}>
                      {item.status}
                    </span>
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
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalElements={28}
          totalPages={3}
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
          {contractActivities.map(({ icon: Icon, color, text, actor, time }, index) => (
            <div key={`${text}-${time}`} className="grid grid-cols-[36px_1fr_160px] gap-3">
              <div className="relative flex justify-center">
                <span className={`flex size-8 items-center justify-center rounded-full ${activityDot[color]}`}>
                  <Icon className="size-4" />
                </span>
                {index < contractActivities.length - 1 && <span className="absolute top-8 h-10 border-l border-slate-200" />}
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
