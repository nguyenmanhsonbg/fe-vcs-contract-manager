import { useMemo, useState } from "react";
import {
  Download,
  RotateCcw,
} from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "../../components/common/PageHeader";
import { SearchInput } from "../../components/common/SearchInput";
import { DatePickerInput } from "../../components/common/DatePickerInput";
import { Pagination } from "../../components/common/Pagination";
import { WidgetCard } from "../../components/common/WidgetCard";
import { RecentActivitiesWidget } from "../../components/common/RecentActivitiesWidget";

export interface ContractAcceptanceRow {
  id: string;
  contractCode: string;
  signDate: string;
  executionPeriod: string;
  customer: string;
  status: "Đã hoàn thành" | "Đang thực hiện" | "Hết thời gian" | "Không thực hiện nữa";
  contractBudget: number;
  acceptedValue: number;
  remainingValue: number;
}

const sampleContractAcceptanceList: ContractAcceptanceRow[] = [
  {
    id: "52.25.VCS-BLC.05",
    contractCode: "52.25.VCS-BLC.05",
    signDate: "01/09/2026",
    executionPeriod: "01/09/2026 - 1/12/2026",
    customer: "Công ty TNHH Bluecyber",
    status: "Đã hoàn thành",
    contractBudget: 100000000000,
    acceptedValue: 100000000000,
    remainingValue: 100000000000,
  },
  {
    id: "53.53.VCS-BLC.98",
    contractCode: "53.53.VCS-BLC.98",
    signDate: "01/08/2026",
    executionPeriod: "01/09/2026 - 1/12/2026",
    customer: "Công ty TNHH 1",
    status: "Đang thực hiện",
    contractBudget: 100000000000,
    acceptedValue: 100000000000,
    remainingValue: 100000000000,
  },
  {
    id: "52.25.VCS-BLC.89",
    contractCode: "52.25.VCS-BLC.89",
    signDate: "09/07/2026",
    executionPeriod: "01/09/2026 - 1/12/2026",
    customer: "Công ty TNHH 2",
    status: "Hết thời gian",
    contractBudget: 100000000000,
    acceptedValue: 100000000000,
    remainingValue: 100000000000,
  },
  {
    id: "52.25.VCS-BLC.054",
    contractCode: "52.25.VCS-BLC.054",
    signDate: "21/06/2026",
    executionPeriod: "01/09/2026 - 1/12/2026",
    customer: "Công ty TNHH 3",
    status: "Không thực hiện nữa",
    contractBudget: 100000000000,
    acceptedValue: 100000000000,
    remainingValue: 100000000000,
  },
  {
    id: "52.25.VCS-BLC.043",
    contractCode: "52.25.VCS-BLC.043",
    signDate: "10/06/2026",
    executionPeriod: "01/09/2026 - 1/12/2026",
    customer: "Công ty TNHH 4",
    status: "Đã hoàn thành",
    contractBudget: 100000000000,
    acceptedValue: 100000000000,
    remainingValue: 100000000000,
  },
  {
    id: "52.25.VCS-BLC.12",
    contractCode: "52.25.VCS-BLC.12",
    signDate: "26/05/2026",
    executionPeriod: "01/09/2026 - 1/12/2026",
    customer: "Công ty TNHH 5",
    status: "Đã hoàn thành",
    contractBudget: 100000000000,
    acceptedValue: 100000000000,
    remainingValue: 100000000000,
  },
  {
    id: "52.25.VCS-BLC.20",
    contractCode: "52.25.VCS-BLC.20",
    signDate: "23/05/2026",
    executionPeriod: "01/09/2026 - 1/12/2026",
    customer: "Công ty TNHH 6",
    status: "Đang thực hiện",
    contractBudget: 100000000000,
    acceptedValue: 100000000000,
    remainingValue: 100000000000,
  },
  {
    id: "52.25.VCS-BLC.49",
    contractCode: "52.25.VCS-BLC.49",
    signDate: "01/04/2026",
    executionPeriod: "01/09/2026 - 1/12/2026",
    customer: "Công ty TNHH 7",
    status: "Đang thực hiện",
    contractBudget: 100000000000,
    acceptedValue: 100000000000,
    remainingValue: 100000000000,
  },
  {
    id: "52.25.VCS-BLC.75",
    contractCode: "52.25.VCS-BLC.75",
    signDate: "01/03/2026",
    executionPeriod: "01/09/2026 - 1/12/2026",
    customer: "Công ty TNHH 8",
    status: "Không thực hiện nữa",
    contractBudget: 100000000000,
    acceptedValue: 100000000000,
    remainingValue: 100000000000,
  },
  {
    id: "52.25.VCS-BLC.87",
    contractCode: "52.25.VCS-BLC.87",
    signDate: "01/02/2026",
    executionPeriod: "01/09/2026 - 1/12/2026",
    customer: "Công ty TNHH 9",
    status: "Đã hoàn thành",
    contractBudget: 100000000000,
    acceptedValue: 100000000000,
    remainingValue: 100000000000,
  },
];

const sampleActivities = [
  {
    id: "act-1",
    title: "Tải lên Hồ sơ nghiệm thu 1",
    user: "Nguyễn Văn A",
    time: "18/04/2025 10:23",
    type: "upload_green",
  },
  {
    id: "act-2",
    title: 'Cập nhật trạng thái sang "Đang thực hiện"',
    user: "Nguyễn Văn A",
    time: "18/04/2025 10:24",
    type: "status_blue",
  },
  {
    id: "act-3",
    title: "Tải lên Hồ sơ nghiệm thu 2",
    user: "Nguyễn Văn A",
    time: "18/04/2025 10:25",
    type: "upload_cyan",
  },
  {
    id: "act-4",
    title: 'Cập nhật trạng thái sang "Đã hoàn thành"',
    user: "Nguyễn Văn A",
    time: "18/04/2025 14:32",
    type: "status_blue",
  },
];

function formatCurrency(val: number): string {
  return new Intl.NumberFormat("vi-VN").format(val);
}

export function AcceptanceReconciliationPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("");

  const [appliedSearch, setAppliedSearch] = useState("");
  const [appliedStatus, setAppliedStatus] = useState("all");
  const [appliedDate, setAppliedDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleResetFilter = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setDateFilter("");
    setAppliedSearch("");
    setAppliedStatus("all");
    setAppliedDate("");
    setCurrentPage(1);
  };

  const filteredData = useMemo(() => {
    const q = appliedSearch.trim().toLowerCase();
    return sampleContractAcceptanceList.filter((row) => {
      if (appliedStatus !== "all" && row.status !== appliedStatus) return false;
      if (appliedDate.trim()) {
        const normDate = appliedDate.trim().toLowerCase();
        if (
          !row.signDate.toLowerCase().includes(normDate) &&
          !row.executionPeriod.toLowerCase().includes(normDate)
        ) {
          return false;
        }
      }
      if (!q) return true;
      return (
        row.contractCode.toLowerCase().includes(q) ||
        row.customer.toLowerCase().includes(q) ||
        row.executionPeriod.toLowerCase().includes(q)
      );
    });
  }, [appliedSearch, appliedStatus, appliedDate]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const pagedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize]);

  const handleSelectContract = (id: string) => {
    window.location.hash = `#/reconciliation/detail/${encodeURIComponent(id)}`;
  };

  return (
    <div className="space-y-6 bg-[#f8f7fa] p-6">
      <PageHeader
        title="Nghiệm thu theo Hợp đồng"
        action={
          <button
            onClick={() => toast.success("Đang xuất báo cáo nghiệm thu theo hợp đồng (Excel)")}
            className="flex h-[38px] items-center gap-2 rounded-[6px] border border-[#dbdade] bg-white px-4 text-[13px] font-medium text-[#2f2b3d] hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
          >
            <Download className="size-4 text-slate-500" />
            <span>Xuất Báo Cáo</span>
          </button>
        }
      />

      <WidgetCard className="space-y-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 items-end">
          <div className="lg:col-span-5">
            <SearchInput
              value={searchQuery}
              onChange={(val) => {
                setSearchQuery(val);
                setAppliedSearch(val);
                setCurrentPage(1);
              }}
              placeholder="Tìm bằng mã PAKD/Tên đối tác"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="block text-[11px] font-medium text-slate-500 mb-1">
              Trạng thái nghiệm thu
            </label>
            <select
              value={statusFilter}
              onChange={(e) => {
                const val = e.target.value;
                setStatusFilter(val);
                setAppliedStatus(val);
                setCurrentPage(1);
              }}
              className="h-[38px] w-full rounded-[6px] border border-[#dbdade] bg-white px-3 text-[13px] text-[#2f2b3d] outline-none hover:border-slate-300 focus:border-[#ff4c51] cursor-pointer"
            >
              <option value="all">Tất cả</option>
              <option value="Đã hoàn thành">Đã hoàn thành</option>
              <option value="Đang thực hiện">Đang thực hiện</option>
              <option value="Hết thời gian">Hết thời gian</option>
              <option value="Không thực hiện nữa">Không thực hiện nữa</option>
            </select>
          </div>

          <div className="lg:col-span-3">
            <label className="block text-[11px] font-medium text-slate-500 mb-1">
              Thời gian cung cấp
            </label>
            <DatePickerInput
              value={dateFilter}
              onChange={(val) => {
                setDateFilter(val);
                setAppliedDate(val);
                setCurrentPage(1);
              }}
              placeholder="dd.mm.yyyy"
            />
          </div>

          <div className="lg:col-span-1 flex items-center">
            <button
              onClick={handleResetFilter}
              className="flex h-[38px] w-full items-center justify-center gap-1.5 rounded-[6px] border border-[#dbdade] bg-white px-3 text-[13px] font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
              title="Đặt lại bộ lọc"
            >
              <RotateCcw className="size-3.5 text-slate-500" />
              <span>Đặt Lại</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-slate-200/80 text-[13px]">
                <th className="px-4 py-3.5 font-semibold text-[#2f2b3d] text-left">
                  Số Hợp đồng
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#2f2b3d] text-left">
                  Ngày ký
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#2f2b3d] text-left">
                  Thời gian thực hiện
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#2f2b3d] text-left">
                  Khách hàng
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#2f2b3d] text-center">
                  Tình trạng nghiệm thu
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#2f2b3d] text-right">
                  Ngân sách theo hợp đồng
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#2f2b3d] text-right">
                  Đã nghiệm thu
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#2f2b3d] text-right">
                  Còn lại
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-[13px] text-[#2f2b3d]">
              {pagedData.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400">
                    Không tìm thấy hợp đồng nghiệm thu phù hợp
                  </td>
                </tr>
              ) : (
                pagedData.map((row) => (
                  <tr
                    key={row.id}
                    onClick={() => handleSelectContract(row.id)}
                    className="hover:bg-slate-50/70 cursor-pointer transition-colors"
                  >
                    <td className="px-4 py-4 font-medium text-[#2f2b3d] hover:text-[#3f81ea]">
                      {row.contractCode}
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {row.signDate}
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {row.executionPeriod}
                    </td>
                    <td className="px-4 py-4 font-normal text-slate-800">
                      {row.customer}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-[4px] text-[12px] font-medium ${
                          row.status === "Đã hoàn thành"
                            ? "bg-[#e8f9ee] text-[#28c76f]"
                            : row.status === "Đang thực hiện"
                            ? "bg-[#e8f4fd] text-[#3f81ea]"
                            : row.status === "Hết thời gian"
                            ? "bg-[#fff0e1] text-[#ff9f43]"
                            : "bg-[#ffebee] text-[#ea5455]"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right font-normal text-slate-800">
                      {formatCurrency(row.contractBudget)}
                    </td>
                    <td className="px-4 py-4 text-right font-normal text-slate-800">
                      {formatCurrency(row.acceptedValue)}
                    </td>
                    <td className="px-4 py-4 text-right font-normal text-slate-800">
                      {formatCurrency(row.remainingValue)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalElements={filteredData.length}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={(sz) => {
            setPageSize(sz);
            setCurrentPage(1);
          }}
        />
      </WidgetCard>

      <RecentActivitiesWidget activities={sampleActivities} />
    </div>
  );
}
