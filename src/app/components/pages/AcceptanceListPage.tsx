import { useMemo, useState } from "react";
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Download,
  Filter,
  Plus,
  RotateCcw,
  Search,
} from "lucide-react";
import { toast } from "sonner";

// Tab 1 Data Model: Nghiệm thu theo Phương án kinh doanh (Figma Node 28260:17123)
interface AcceptancePlanRow {
  id: string;
  contractName: string;
  planCode: string;
  signDate: string;
  partner: string;
  category: string;
  categoryDetail: string;
  unit: string;
  planQty: number;
  planValue: number;
  supplyPeriod: string;
  status: "Nghiệm thu một phần" | "Đã nghiệm thu toàn bộ" | "Chưa nghiệm thu";
  acceptedQty: number;
  acceptedValue: number;
  remainingQty: number;
  remainingValue: number;
}

const samplePlanAcceptanceRows: AcceptancePlanRow[] = [
  {
    id: "1",
    contractName: "Cung cấp thiết bị điện công nghiệp",
    planCode: "144/TTr-TTKDMB",
    signDate: "12/04/2026",
    partner: "Công ty CP Thiết bị điện Hà Nội",
    category: "VA",
    categoryDetail: "Chi phí thuê ngoài threat hunting 50 máy định kỳ 2 lần từ 01/04/2025 đến 23/06/2025",
    unit: "Tư vấn cấp độ (theo khung)",
    planQty: 500,
    planValue: 100000000000,
    supplyPeriod: "01/04/2026 - 31/12/2026",
    status: "Nghiệm thu một phần",
    acceptedQty: 500,
    acceptedValue: 100000000000,
    remainingQty: 500,
    remainingValue: 100000000000,
  },
  {
    id: "2",
    contractName: "Mua sắm máy chủ & SAN Storage",
    planCode: "142/TTr-TTKDMB",
    signDate: "05/04/2026",
    partner: "Công ty TNHH Giải Pháp Công Nghệ Sao Bắc",
    category: "IT",
    categoryDetail: "Cung cấp và lắp đặt hệ thống máy chủ Dell PowerEdge và tủ lưu trữ All-Flash",
    unit: "Bộ",
    planQty: 4,
    planValue: 3200000000,
    supplyPeriod: "15/04/2026 - 30/10/2026",
    status: "Đã nghiệm thu toàn bộ",
    acceptedQty: 4,
    acceptedValue: 3200000000,
    remainingQty: 0,
    remainingValue: 0,
  },
  {
    id: "3",
    contractName: "Triển khai camera giám sát AI",
    planCode: "139/TTr-TTKDMB",
    signDate: "28/03/2026",
    partner: "Tập đoàn Công nghệ Viettel",
    category: "SEC",
    categoryDetail: "Lắp đặt 50 camera IP AI và 2 đầu ghi hình mạng NVR 64 kênh",
    unit: "Gói",
    planQty: 52,
    planValue: 1850000000,
    supplyPeriod: "01/05/2026 - 31/12/2026",
    status: "Chưa nghiệm thu",
    acceptedQty: 0,
    acceptedValue: 0,
    remainingQty: 52,
    remainingValue: 1850000000,
  },
  {
    id: "4",
    contractName: "Bảo trì nâng cấp Oracle Database",
    planCode: "135/TTr-TTKDMB",
    signDate: "15/03/2026",
    partner: "Công ty CP Phần mềm CMC",
    category: "SW",
    categoryDetail: "Dịch vụ bảo trì, nâng cấp phần mềm và hỗ trợ kỹ thuật On-site 24/7",
    unit: "Gói",
    planQty: 4,
    planValue: 920000000,
    supplyPeriod: "01/04/2026 - 31/03/2027",
    status: "Nghiệm thu một phần",
    acceptedQty: 1,
    acceptedValue: 230000000,
    remainingQty: 3,
    remainingValue: 690000000,
  },
];

// Tab 2 Data Model: Nghiệm thu theo Hợp đồng (Figma Node 28230:16721)
interface AcceptanceContractRow {
  id: string;
  contractCode: string;
  signDate: string;
  partner: string;
  itemName: string;
  acceptanceDate: string;
  unit: string;
  contractQty: number;
  contractValue: number;
  acceptedQty: number;
  acceptedValue: number;
  remainingQty: number;
  remainingValue: number;
}

const sampleContractAcceptanceRows: AcceptanceContractRow[] = [
  {
    id: "c-1",
    contractCode: "39.25.VCS-VINALINUX.01",
    signDate: "10/04/2025",
    partner: "Công ty TNHH Nghiên cứu và phát triển Công nghệ lõi Linux Việt Nam",
    itemName: "Phần mềm Freshworks CRM",
    acceptanceDate: "10/04/2025",
    unit: "Gói",
    contractQty: 80,
    contractValue: 100000000,
    acceptedQty: 500,
    acceptedValue: 100000000000,
    remainingQty: 500,
    remainingValue: 100000000000,
  },
  {
    id: "c-2",
    contractCode: "45.25.VCS-DELL.02",
    signDate: "15/04/2025",
    partner: "Công ty TNHH Giải Pháp Công Nghệ Sao Bắc",
    itemName: "Máy chủ Rack Dell R760",
    acceptanceDate: "20/05/2025",
    unit: "Bộ",
    contractQty: 4,
    contractValue: 1520000000,
    acceptedQty: 4,
    acceptedValue: 1520000000,
    remainingQty: 0,
    remainingValue: 0,
  },
  {
    id: "c-3",
    contractCode: "18.25.VCS-CADIVI.01",
    signDate: "02/05/2025",
    partner: "Công ty CP Thiết bị điện Hà Nội",
    itemName: "Cáp ngầm trung thế 24kV CADIVI",
    acceptanceDate: "18/06/2025",
    unit: "Mét",
    contractQty: 1200,
    contractValue: 1380000000,
    acceptedQty: 600,
    acceptedValue: 690000000,
    remainingQty: 600,
    remainingValue: 690000000,
  },
];

function formatCurrency(val: number): string {
  return new Intl.NumberFormat("vi-VN").format(val);
}

export function AcceptanceListPage() {
  const [activeTab, setActiveTab] = useState<"plan" | "contract">("plan");

  // Tab 1 state
  const [planSearchQuery, setPlanSearchQuery] = useState("");
  const [planStatusFilter, setPlanStatusFilter] = useState("all");
  const [planDateFilter, setPlanDateFilter] = useState("");
  const [planAppliedSearch, setPlanAppliedSearch] = useState("");
  const [planAppliedStatus, setPlanAppliedStatus] = useState("all");
  const [planAppliedDate, setPlanAppliedDate] = useState("");

  // Tab 2 state
  const [contractSearchQuery, setContractSearchQuery] = useState("");
  const [contractDateFilter, setContractDateFilter] = useState("");
  const [contractAppliedSearch, setContractAppliedSearch] = useState("");
  const [contractAppliedDate, setContractAppliedDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Tab 1 Filters Apply & Reset
  const handleApplyPlanFilter = () => {
    setPlanAppliedSearch(planSearchQuery);
    setPlanAppliedStatus(planStatusFilter);
    setPlanAppliedDate(planDateFilter);
    setCurrentPage(1);
  };

  const handleResetPlanFilter = () => {
    setPlanSearchQuery("");
    setPlanStatusFilter("all");
    setPlanDateFilter("");
    setPlanAppliedSearch("");
    setPlanAppliedStatus("all");
    setPlanAppliedDate("");
    setCurrentPage(1);
  };

  // Tab 2 Filters Apply & Reset
  const handleApplyContractFilter = () => {
    setContractAppliedSearch(contractSearchQuery);
    setContractAppliedDate(contractDateFilter);
    setCurrentPage(1);
  };

  const handleResetContractFilter = () => {
    setContractSearchQuery("");
    setContractDateFilter("");
    setContractAppliedSearch("");
    setContractAppliedDate("");
    setCurrentPage(1);
  };

  // Filtered Tab 1 Data
  const filteredPlanData = useMemo(() => {
    const q = planAppliedSearch.trim().toLowerCase();
    return samplePlanAcceptanceRows.filter((row) => {
      if (planAppliedStatus !== "all" && row.status !== planAppliedStatus) return false;
      if (planAppliedDate.trim()) {
        const normDate = planAppliedDate.trim().toLowerCase();
        if (
          !row.signDate.toLowerCase().includes(normDate) &&
          !row.supplyPeriod.toLowerCase().includes(normDate)
        ) {
          return false;
        }
      }
      if (q) {
        return (
          row.contractName.toLowerCase().includes(q) ||
          row.planCode.toLowerCase().includes(q) ||
          row.partner.toLowerCase().includes(q) ||
          row.categoryDetail.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [planAppliedSearch, planAppliedStatus, planAppliedDate]);

  // Filtered Tab 2 Data
  const filteredContractData = useMemo(() => {
    const q = contractAppliedSearch.trim().toLowerCase();
    return sampleContractAcceptanceRows.filter((row) => {
      if (contractAppliedDate.trim()) {
        const normDate = contractAppliedDate.trim().toLowerCase();
        if (
          !row.acceptanceDate.toLowerCase().includes(normDate) &&
          !row.signDate.toLowerCase().includes(normDate)
        ) {
          return false;
        }
      }
      if (q) {
        return (
          row.contractCode.toLowerCase().includes(q) ||
          row.partner.toLowerCase().includes(q) ||
          row.itemName.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [contractAppliedSearch, contractAppliedDate]);

  const currentDatasetLength =
    activeTab === "plan" ? filteredPlanData.length : filteredContractData.length;
  const totalPages = Math.max(1, Math.ceil(currentDatasetLength / pageSize));

  const paginatedPlanList = useMemo(() => {
    const from = (currentPage - 1) * pageSize;
    return filteredPlanData.slice(from, from + pageSize);
  }, [filteredPlanData, currentPage, pageSize]);

  const paginatedContractList = useMemo(() => {
    const from = (currentPage - 1) * pageSize;
    return filteredContractData.slice(from, from + pageSize);
  }, [filteredContractData, currentPage, pageSize]);

  return (
    <div className="min-h-full w-full space-y-5 bg-[#f8f7fa] p-6 text-[#393740]">
      {/* Top Header Bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-[22px] font-bold leading-tight text-[#2f2b3d]">
          Quản lý Nghiệm thu
        </h1>

        <div className="flex items-center gap-3">
          <button
            onClick={() => toast.info("Mở form Khai báo nghiệm thu mới")}
            className="inline-flex h-10 items-center gap-2 rounded-[6px] bg-[#ff4c51] px-4 text-[13px] font-medium text-white shadow-sm transition-colors hover:bg-[#e64449]"
          >
            <Plus className="size-4" />
            Khai Báo Nghiệm Thu Mới
          </button>

          <button
            onClick={() => toast.success("Đang xuất báo cáo nghiệm thu (Excel)")}
            className="inline-flex h-10 items-center gap-2 rounded-[6px] border border-slate-300 bg-white px-4 text-[13px] font-medium text-[#393740] shadow-xs transition-colors hover:bg-slate-50"
          >
            <Download className="size-4 text-slate-500" />
            Xuất Báo Cáo
          </button>
        </div>
      </div>

      {/* Main Content Card with Tabs & Data Table */}
      <div className="rounded-[6px] border border-[#dbdade] bg-white p-6 shadow-[0_2px_8px_rgba(47,43,61,0.08)] space-y-6">
        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 text-[14px]">
          <button
            onClick={() => {
              setActiveTab("plan");
              setCurrentPage(1);
            }}
            className={`relative pb-3 font-semibold transition-colors ${
              activeTab === "plan"
                ? "text-[#ff4c51] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff4c51]"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Nghiệm thu theo Phương án kinh doanh
          </button>

          <button
            onClick={() => {
              setActiveTab("contract");
              setCurrentPage(1);
            }}
            className={`relative ml-8 pb-3 font-semibold transition-colors ${
              activeTab === "contract"
                ? "text-[#ff4c51] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff4c51]"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Nghiệm thu theo Hợp đồng
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: NGHIỆM THU THEO PHƯƠNG ÁN KINH DOANH (Figma Node 28260:17123) */}
        {/* ========================================================================= */}
        {activeTab === "plan" && (
          <div className="space-y-6">
            {/* Search & Filter Toolbar */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_200px_200px_auto_auto] items-end">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={planSearchQuery}
                  onChange={(e) => setPlanSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleApplyPlanFilter()}
                  placeholder="Tìm bằng mã PAKD/Tên đối tác"
                  className="h-10 w-full rounded-[6px] border border-slate-200 bg-white pl-9 pr-3 text-[13px] text-slate-800 placeholder-slate-400 outline-none transition-colors hover:border-slate-300 focus:border-[#ff4c51]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[12px] font-medium text-slate-600 block">
                  Trạng thái nghiệm thu
                </label>
                <div className="relative">
                  <select
                    value={planStatusFilter}
                    onChange={(e) => setPlanStatusFilter(e.target.value)}
                    className="h-10 w-full appearance-none rounded-[6px] border border-slate-200 bg-white px-3 pr-8 text-[13px] text-slate-700 outline-none hover:border-slate-300 focus:border-[#ff4c51]"
                  >
                    <option value="all">Tất cả</option>
                    <option value="Nghiệm thu một phần">Nghiệm thu một phần</option>
                    <option value="Đã nghiệm thu toàn bộ">Đã nghiệm thu toàn bộ</option>
                    <option value="Chưa nghiệm thu">Chưa nghiệm thu</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[12px] font-medium text-slate-600 block">
                  Thời gian cung cấp
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={planDateFilter}
                    onChange={(e) => setPlanDateFilter(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleApplyPlanFilter()}
                    placeholder="dd.mm.yyyy"
                    className="h-10 w-full rounded-[6px] border border-slate-200 bg-white px-3 pr-9 text-[13px] text-slate-800 placeholder-slate-400 outline-none hover:border-slate-300 focus:border-[#ff4c51]"
                  />
                  <Calendar className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <button
                onClick={handleApplyPlanFilter}
                className="inline-flex h-10 items-center gap-1.5 rounded-[6px] border border-[#ff4c51] px-4 text-[13px] font-medium text-[#ff4c51] transition-colors hover:bg-[#ff4c51]/10"
              >
                <Filter className="size-4" />
                Lọc
              </button>

              <button
                onClick={handleResetPlanFilter}
                className="inline-flex h-10 items-center gap-1.5 rounded-[6px] border border-slate-300 px-4 text-[13px] font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                <RotateCcw className="size-4 text-slate-500" />
                Đặt Lại
              </button>
            </div>

            <h2 className="text-[16px] font-bold text-[#2f2b3d]">
              Nghiệm thu Phương án kinh doanh
            </h2>

            {/* Table 1 */}
            <div className="overflow-x-auto border border-slate-200 rounded-[6px]">
              <table className="w-full min-w-[1400px] border-collapse text-left text-[12px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[#5d586c] text-[11px] uppercase tracking-wider">
                    <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold text-center w-40">
                      Số Hợp đồng
                    </th>
                    <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold text-center w-36">
                      Ngày ký
                    </th>
                    <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold text-center w-36">
                      Đối tác
                    </th>
                    <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold text-center w-24">
                      Hạng mục
                    </th>
                    <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold min-w-[240px]">
                      Chi tiết hạng mục theo PAKD
                    </th>
                    <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold text-center w-32">
                      ĐVT
                    </th>
                    <th colSpan={2} className="border-r border-slate-200 px-3 py-2 font-semibold text-center bg-slate-100/70">
                      Phương án kinh doanh
                    </th>
                    <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold text-center w-40">
                      Thời gian cung cấp
                    </th>
                    <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold text-center w-40">
                      Tình trạng nghiệm thu
                    </th>
                    <th colSpan={2} className="border-r border-slate-200 px-3 py-2 font-semibold text-center bg-slate-100/70">
                      Đã nghiệm thu
                    </th>
                    <th colSpan={2} className="px-3 py-2 font-semibold text-center bg-slate-100/70">
                      Còn lại
                    </th>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-[#5d586c] text-[11px]">
                    <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-16">
                      SL
                    </th>
                    <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-right w-36">
                      Giá trị (Chưa VAT)
                    </th>
                    <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-16">
                      SL
                    </th>
                    <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-right w-36">
                      Giá trị (Chưa VAT)
                    </th>
                    <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-16">
                      SL
                    </th>
                    <th className="px-2 py-1.5 font-semibold text-right w-36">
                      Giá trị (Chưa VAT)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {paginatedPlanList.length === 0 ? (
                    <tr>
                      <td colSpan={14} className="py-10 text-center text-slate-400">
                        Không tìm thấy dữ liệu nghiệm thu nào.
                      </td>
                    </tr>
                  ) : (
                    paginatedPlanList.map((row) => (
                      <tr key={row.id} className="hover:bg-slate-50/70 text-slate-700">
                        <td className="border-r border-slate-200 px-3 py-3 font-medium text-[#2f2b3d]">
                          {row.contractName}
                        </td>
                        <td className="border-r border-slate-200 px-3 py-3 text-center text-[#3f81ea] font-medium">
                          {row.planCode}
                        </td>
                        <td className="border-r border-slate-200 px-3 py-3 text-center text-slate-600">
                          {row.signDate}
                        </td>
                        <td className="border-r border-slate-200 px-3 py-3 text-center text-slate-600">
                          {row.category}
                        </td>
                        <td className="border-r border-slate-200 px-3 py-3 text-slate-600">
                          {row.categoryDetail}
                        </td>
                        <td className="border-r border-slate-200 px-3 py-3 text-center text-slate-600">
                          {row.unit}
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3 text-center font-medium">
                          {row.planQty}
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3 text-right font-medium text-[#2f2b3d]">
                          {formatCurrency(row.planValue)}
                        </td>
                        <td className="border-r border-slate-200 px-3 py-3 text-center text-slate-600">
                          {row.supplyPeriod}
                        </td>
                        <td className="border-r border-slate-200 px-3 py-3 text-center">
                          <span
                            className={`inline-flex items-center rounded px-2.5 py-1 text-[11px] font-medium ${
                              row.status === "Đã nghiệm thu toàn bộ"
                                ? "bg-[#e8f9ee] text-[#28c76f]"
                                : row.status === "Nghiệm thu một phần"
                                ? "bg-[#e8f4fd] text-[#3f81ea]"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3 text-center font-medium">
                          {row.acceptedQty}
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3 text-right font-medium text-[#28c76f]">
                          {formatCurrency(row.acceptedValue)}
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3 text-center font-medium">
                          {row.remainingQty}
                        </td>
                        <td className="px-2 py-3 text-right font-medium text-slate-700">
                          {formatCurrency(row.remainingValue)}
                        </td>
                      </tr>
                    ))
                  )}

                  {/* Total Summary Row */}
                  <tr className="bg-slate-100/80 font-bold text-[#2f2b3d] border-t-2 border-slate-300">
                    <td colSpan={6} className="border-r border-slate-200 px-3 py-3.5 text-center uppercase tracking-wide">
                      Tổng cộng
                    </td>
                    <td className="border-r border-slate-200 px-2 py-3.5 text-center">
                      821
                    </td>
                    <td className="border-r border-slate-200 px-2 py-3.5 text-right font-bold">
                      24.532.000.000
                    </td>
                    <td className="border-r border-slate-200 px-3 py-3.5" />
                    <td className="border-r border-slate-200 px-3 py-3.5" />
                    <td className="border-r border-slate-200 px-2 py-3.5 text-center">
                      590
                    </td>
                    <td className="border-r border-slate-200 px-2 py-3.5 text-right font-bold text-[#28c76f]">
                      10.520.000.000
                    </td>
                    <td className="border-r border-slate-200 px-2 py-3.5 text-center">
                      231
                    </td>
                    <td className="px-2 py-3.5 text-right font-bold text-slate-800">
                      14.012.000.000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: NGHIỆM THU THEO HỢP ĐỒNG (Figma Node 28230:16721) */}
        {/* ========================================================================= */}
        {activeTab === "contract" && (
          <div className="space-y-6">
            {/* Search & Filter Toolbar matching Node 28230:16721 */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_260px_auto_auto] items-end">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={contractSearchQuery}
                  onChange={(e) => setContractSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleApplyContractFilter()}
                  placeholder="Tìm bằng mã PAKD/Tên đối tác"
                  className="h-10 w-full rounded-[6px] border border-slate-200 bg-white pl-9 pr-3 text-[13px] text-slate-800 placeholder-slate-400 outline-none transition-colors hover:border-slate-300 focus:border-[#ff4c51]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[12px] font-medium text-slate-600 block">
                  Ngày nghiệm thu
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={contractDateFilter}
                    onChange={(e) => setContractDateFilter(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleApplyContractFilter()}
                    placeholder="dd.mm.yyyy"
                    className="h-10 w-full rounded-[6px] border border-slate-200 bg-white px-3 pr-9 text-[13px] text-slate-800 placeholder-slate-400 outline-none hover:border-slate-300 focus:border-[#ff4c51]"
                  />
                  <Calendar className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <button
                onClick={handleApplyContractFilter}
                className="inline-flex h-10 items-center gap-1.5 rounded-[6px] border border-[#ff4c51] px-4 text-[13px] font-medium text-[#ff4c51] transition-colors hover:bg-[#ff4c51]/10"
              >
                <Filter className="size-4" />
                Lọc
              </button>

              <button
                onClick={handleResetContractFilter}
                className="inline-flex h-10 items-center gap-1.5 rounded-[6px] border border-slate-300 px-4 text-[13px] font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                <RotateCcw className="size-4 text-slate-500" />
                Đặt Lại
              </button>
            </div>

            <h2 className="text-[16px] font-bold text-[#2f2b3d]">
              Nghiệm thu Hợp đồng
            </h2>

            {/* Table 2 matching Figma Node 28230:16721 */}
            <div className="overflow-x-auto border border-slate-200 rounded-[6px]">
              <table className="w-full min-w-[1300px] border-collapse text-left text-[12px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[#5d586c] text-[11px] uppercase tracking-wider">
                    <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold text-center w-44">
                      Mã HĐ
                    </th>
                    <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold text-center w-36">
                      Ngày ký
                    </th>
                    <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold min-w-[220px]">
                      Đối tác
                    </th>
                    <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold min-w-[200px]">
                      Tên hàng hóa / dịch vụ
                    </th>
                    <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold text-center w-36">
                      Ngày nghiệm thu
                    </th>
                    <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold text-center w-24">
                      ĐVT
                    </th>
                    <th colSpan={2} className="border-r border-slate-200 px-3 py-2 font-semibold text-center bg-slate-100/70">
                      Hợp đồng
                    </th>
                    <th colSpan={2} className="border-r border-slate-200 px-3 py-2 font-semibold text-center bg-slate-100/70">
                      Đã nghiệm thu
                    </th>
                    <th colSpan={2} className="px-3 py-2 font-semibold text-center bg-slate-100/70">
                      Còn lại
                    </th>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-[#5d586c] text-[11px]">
                    <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-16">
                      SL
                    </th>
                    <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-right w-36">
                      Tổng giá trị (sau VAT)
                    </th>
                    <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-16">
                      SL
                    </th>
                    <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-right w-36">
                      Tổng giá trị (sau VAT)
                    </th>
                    <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-16">
                      SL
                    </th>
                    <th className="px-2 py-1.5 font-semibold text-right w-36">
                      Tổng giá trị (sau VAT)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {paginatedContractList.length === 0 ? (
                    <tr>
                      <td colSpan={12} className="py-10 text-center text-slate-400">
                        Không tìm thấy dữ liệu nghiệm thu hợp đồng nào.
                      </td>
                    </tr>
                  ) : (
                    paginatedContractList.map((row) => (
                      <tr key={row.id} className="hover:bg-slate-50/70 text-slate-700">
                        <td className="border-r border-slate-200 px-3 py-3 font-semibold text-[#3f81ea]">
                          {row.contractCode}
                        </td>
                        <td className="border-r border-slate-200 px-3 py-3 text-center text-slate-600">
                          {row.signDate}
                        </td>
                        <td className="border-r border-slate-200 px-3 py-3 text-slate-700 font-medium">
                          {row.partner}
                        </td>
                        <td className="border-r border-slate-200 px-3 py-3 text-[#2f2b3d] font-medium">
                          {row.itemName}
                        </td>
                        <td className="border-r border-slate-200 px-3 py-3 text-center text-slate-600">
                          {row.acceptanceDate}
                        </td>
                        <td className="border-r border-slate-200 px-3 py-3 text-center text-slate-600">
                          {row.unit}
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3 text-center font-medium">
                          {row.contractQty}
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3 text-right font-medium text-[#2f2b3d]">
                          {formatCurrency(row.contractValue)}
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3 text-center font-medium">
                          {row.acceptedQty}
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3 text-right font-medium text-[#28c76f]">
                          {formatCurrency(row.acceptedValue)}
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3 text-center font-medium">
                          {row.remainingQty}
                        </td>
                        <td className="px-2 py-3 text-right font-medium text-slate-700">
                          {formatCurrency(row.remainingValue)}
                        </td>
                      </tr>
                    ))
                  )}

                  {/* Summary Total Row for Contract Tab */}
                  <tr className="bg-slate-100/80 font-bold text-[#2f2b3d] border-t-2 border-slate-300">
                    <td colSpan={6} className="border-r border-slate-200 px-3 py-3.5 text-center uppercase tracking-wide">
                      Tổng cộng
                    </td>
                    <td className="border-r border-slate-200 px-2 py-3.5 text-center">
                      863
                    </td>
                    <td className="border-r border-slate-200 px-2 py-3.5 text-right font-bold text-[#2f2b3d]">
                      863.000.000
                    </td>
                    <td className="border-r border-slate-200 px-2 py-3.5 text-center">
                      590
                    </td>
                    <td className="border-r border-slate-200 px-2 py-3.5 text-right font-bold text-[#28c76f]">
                      10.520.000.000
                    </td>
                    <td className="border-r border-slate-200 px-2 py-3.5 text-center">
                      231
                    </td>
                    <td className="px-2 py-3.5 text-right font-bold text-slate-800">
                      14.012.000.000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer Pagination Bar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[13px] text-slate-600 pt-2">
          <div>
            Hiển thị 1 đến {activeTab === "plan" ? paginatedPlanList.length : paginatedContractList.length} trong {currentDatasetLength} bản ghi
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span>Hiển thị</span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="h-8 rounded border border-slate-200 bg-white px-2 pr-6 text-[12px] outline-none hover:border-slate-300"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-1">
              <button
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage(1)}
                className="flex size-8 items-center justify-center rounded border border-slate-200 hover:bg-slate-50 disabled:opacity-40"
              >
                <ChevronsLeft className="size-4" />
              </button>
              <button
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="flex size-8 items-center justify-center rounded border border-slate-200 hover:bg-slate-50 disabled:opacity-40"
              >
                <ChevronLeft className="size-4" />
              </button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`flex size-8 items-center justify-center rounded border text-[12px] font-medium transition-colors ${
                      currentPage === pageNum
                        ? "border-[#ff4c51] bg-[#ff4c51] text-white"
                        : "border-slate-200 hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="flex size-8 items-center justify-center rounded border border-slate-200 hover:bg-slate-50 disabled:opacity-40"
              >
                <ChevronRight className="size-4" />
              </button>
              <button
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage(totalPages)}
                className="flex size-8 items-center justify-center rounded border border-slate-200 hover:bg-slate-50 disabled:opacity-40"
              >
                <ChevronsRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
