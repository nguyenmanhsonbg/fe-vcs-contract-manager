import { useMemo, useState } from "react";
import {
  CheckCheck,
  Clock,
  Download,
  Edit3,
  Eye,
  FileText,
  Filter,
  Plus,
  RotateCcw,
  TrendingUp,
} from "lucide-react";
import { PageHeader } from "../common/PageHeader";
import { StatCard } from "../common/StatCard";
import { SearchInput } from "../common/SearchInput";
import { SelectFilter } from "../common/SelectFilter";
import { DatePickerInput } from "../common/DatePickerInput";
import { StatusBadge } from "../common/StatusBadge";
import { Pagination } from "../common/Pagination";
import { BusinessPlanItem, sampleBusinessPlans } from "../../data/businessPlanMock";
import { CreateBusinessPlanModal } from "../modals/CreateBusinessPlanModal";
import { BusinessPlanAcceptanceSideModal } from "../modals/BusinessPlanAcceptanceSideModal";
import { toast } from "sonner";

interface BusinessPlanListPageProps {
  onSelectPlan: (id: string) => void;
}

// 10 mock items matching Figma Node 28013:13071
const figmaBusinessPlans: BusinessPlanItem[] = [
  {
    id: "144/TTr-TTKDMB",
    code: "TT - 2025 - 028",
    title: "Cung cấp thiết bị điện công nghiệp",
    planDate: "12/04/2026",
    partner: "Công ty CP Thiết bị điện Hà Nội",
    executionPeriod: "01/04/2026 - 31/12/2026",
    totalAmount: 320000000,
    totalAmountWithVat: 352000000,
    procurementCost: 320,
    acceptedAmount: 320,
    remainingAmount: 320,
    status: "Đang thực hiện",
    createdBy: "Nguyễn Văn A",
    updatedBy: "Nguyễn Văn A",
    updatedAt: "18/04/2025 10:23",
    lineItems: [],
    financial: {} as any,
    appendices: [],
    activities: [],
  },
  {
    id: "145/TTr-TTKDMB",
    code: "TT - 2025 - 029",
    title: "Cung cấp vật liệu xây dựng",
    planDate: "15/05/2026",
    partner: "Công ty TNHH Vật liệu xây dựng Đà Nẵng",
    executionPeriod: "01/05/2026 - 30/11/2026",
    totalAmount: 500000000,
    totalAmountWithVat: 550000000,
    procurementCost: 500,
    acceptedAmount: 500,
    remainingAmount: 500,
    status: "Tạm dừng",
    createdBy: "Nguyễn Văn A",
    updatedBy: "Nguyễn Văn A",
    updatedAt: "15/05/2026 09:10",
    lineItems: [],
    financial: {} as any,
    appendices: [],
    activities: [],
  },
  {
    id: "146/TTr-TTKDMB",
    code: "TT - 2025 - 030",
    title: "Thi công hệ thống điện nhẹ",
    planDate: "20/06/2026",
    partner: "Công ty CP Điện nhẹ Việt Nam",
    executionPeriod: "01/06/2026 - 31/12/2026",
    totalAmount: 200000000,
    totalAmountWithVat: 220000000,
    procurementCost: 200,
    acceptedAmount: 200,
    remainingAmount: 200,
    status: "Đang thực hiện",
    createdBy: "Nguyễn Văn A",
    updatedBy: "Nguyễn Văn A",
    updatedAt: "20/06/2026 14:00",
    lineItems: [],
    financial: {} as any,
    appendices: [],
    activities: [],
  },
  {
    id: "147/TTr-TTKDMB",
    code: "TT - 2025 - 031",
    title: "Cung cấp giải pháp công nghệ thông tin",
    planDate: "10/07/2026",
    partner: "Công ty TNHH Giải pháp CNTT Sài Gòn",
    executionPeriod: "01/07/2026 - 31/12/2026",
    totalAmount: 150000000,
    totalAmountWithVat: 165000000,
    procurementCost: 150,
    acceptedAmount: 150,
    remainingAmount: 150,
    status: "Đã hoàn thành",
    createdBy: "Nguyễn Văn A",
    updatedBy: "Nguyễn Văn A",
    updatedAt: "10/07/2026 11:20",
    lineItems: [],
    financial: {} as any,
    appendices: [],
    activities: [],
  },
  {
    id: "148/TTr-TTKDMB",
    code: "TT - 2025 - 032",
    title: "Cung cấp dịch vụ bảo trì thiết bị",
    planDate: "01/08/2026",
    partner: "Công ty CP Dịch vụ bảo trì Toàn Cầu",
    executionPeriod: "01/08/2026 - 31/12/2026",
    totalAmount: 80000000,
    totalAmountWithVat: 88000000,
    procurementCost: 80,
    acceptedAmount: 80,
    remainingAmount: 80,
    status: "Đang thực hiện",
    createdBy: "Nguyễn Văn A",
    updatedBy: "Nguyễn Văn A",
    updatedAt: "01/08/2026 16:30",
    lineItems: [],
    financial: {} as any,
    appendices: [],
    activities: [],
  },
  {
    id: "149/TTr-TTKDMB",
    code: "TT - 2025 - 033",
    title: "Phát triển phần mềm ứng dụng",
    planDate: "15/09/2026",
    partner: "Công ty TNHH Phát triển phần mềm ABC",
    executionPeriod: "01/09/2026 - 31/12/2026",
    totalAmount: 600000000,
    totalAmountWithVat: 660000000,
    procurementCost: 600,
    acceptedAmount: 600,
    remainingAmount: 600,
    status: "Đang thực hiện",
    createdBy: "Nguyễn Văn A",
    updatedBy: "Nguyễn Văn A",
    updatedAt: "15/09/2026 10:15",
    lineItems: [],
    financial: {} as any,
    appendices: [],
    activities: [],
  },
  {
    id: "150/TTr-TTKDMB",
    code: "TT - 2025 - 034",
    title: "Cung cấp thiết bị văn phòng",
    planDate: "25/10/2026",
    partner: "Công ty TNHH Thiết bị văn phòng Quốc Tế",
    executionPeriod: "01/10/2026 - 31/12/2026",
    totalAmount: 400000000,
    totalAmountWithVat: 440000000,
    procurementCost: 400,
    acceptedAmount: 400,
    remainingAmount: 400,
    status: "Đang thực hiện",
    createdBy: "Nguyễn Văn A",
    updatedBy: "Nguyễn Văn A",
    updatedAt: "25/10/2026 15:45",
    lineItems: [],
    financial: {} as any,
    appendices: [],
    activities: [],
  },
  {
    id: "151/TTr-TTKDMB",
    code: "TT - 2025 - 035",
    title: "Tư vấn thiết kế kiến trúc",
    planDate: "30/11/2026",
    partner: "Công ty CP Kiến trúc Xanh",
    executionPeriod: "01/11/2026 - 31/12/2026",
    totalAmount: 250000000,
    totalAmountWithVat: 275000000,
    procurementCost: 250,
    acceptedAmount: 250,
    remainingAmount: 250,
    status: "Đang thực hiện",
    createdBy: "Nguyễn Văn A",
    updatedBy: "Nguyễn Văn A",
    updatedAt: "30/11/2026 08:30",
    lineItems: [],
    financial: {} as any,
    appendices: [],
    activities: [],
  },
  {
    id: "152/TTr-TTKDMB",
    code: "TT - 2025 - 036",
    title: "Cung cấp dịch vụ truyền thông",
    planDate: "05/12/2026",
    partner: "Công ty TNHH Truyền thông Sáng Tạo",
    executionPeriod: "01/12/2026 - 31/12/2026",
    totalAmount: 350000000,
    totalAmountWithVat: 385000000,
    procurementCost: 350,
    acceptedAmount: 350,
    remainingAmount: 350,
    status: "Đang thực hiện",
    createdBy: "Nguyễn Văn A",
    updatedBy: "Nguyễn Văn A",
    updatedAt: "05/12/2026 13:20",
    lineItems: [],
    financial: {} as any,
    appendices: [],
    activities: [],
  },
  {
    id: "153/TTr-TTKDMB",
    code: "TT - 2025 - 037",
    title: "Cung cấp thiết bị an ninh",
    planDate: "10/12/2026",
    partner: "Công ty CP An ninh Tương Lai",
    executionPeriod: "01/12/2026 - 31/12/2026",
    totalAmount: 450000000,
    totalAmountWithVat: 495000000,
    procurementCost: 450,
    acceptedAmount: 450,
    remainingAmount: 450,
    status: "Đang thực hiện",
    createdBy: "Nguyễn Văn A",
    updatedBy: "Nguyễn Văn A",
    updatedAt: "10/12/2026 17:00",
    lineItems: [],
    financial: {} as any,
    appendices: [],
    activities: [],
  },
];

const sampleFigmaActivities = [
  {
    id: "act-1",
    title: "Tải lên Phương án kinh doanh 144/TTr-TTKDMB",
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
    title: "Tải lên Phương án kinh doanh 144/TTr-TTKDMB",
    user: "Nguyễn Văn A",
    time: "18/04/2025 10:25",
    type: "upload_cyan",
  },
  {
    id: "act-4",
    title: 'Cập nhật trạng thái sang "Đã hoàn thành"',
    user: "Nguyễn Văn A",
    time: "18/04/2025 14:32",
    type: "status_check",
  },
];

export function BusinessPlanListPage({ onSelectPlan }: BusinessPlanListPageProps) {
  const [plans] = useState<BusinessPlanItem[]>(figmaBusinessPlans);
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [appliedSearch, setAppliedSearch] = useState("");
  const [appliedStatus, setAppliedStatus] = useState("all");
  const [appliedDate, setAppliedDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [sideModalOpen, setSideModalOpen] = useState(false);
  const [selectedPlanForSideModal, setSelectedPlanForSideModal] = useState<string>("144/TTr-TTKDMB");

  const handleApplyFilter = () => {
    setAppliedSearch(searchQuery);
    setAppliedStatus(statusFilter);
    setAppliedDate(dateFilter);
    setCurrentPage(1);
  };

  const handleResetFilter = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setDateFilter("");
    setAppliedSearch("");
    setAppliedStatus("all");
    setAppliedDate("");
    setCurrentPage(1);
  };

  const filteredPlans = useMemo(() => {
    const q = appliedSearch.trim().toLowerCase();
    return plans.filter((item) => {
      if (appliedStatus !== "all" && item.status !== appliedStatus) return false;
      if (appliedDate.trim()) {
        const norm = appliedDate.trim().toLowerCase();
        if (
          !item.planDate.toLowerCase().includes(norm) &&
          !item.executionPeriod.toLowerCase().includes(norm)
        ) {
          return false;
        }
      }
      if (q) {
        return (
          item.id.toLowerCase().includes(q) ||
          item.title.toLowerCase().includes(q) ||
          item.partner.toLowerCase().includes(q) ||
          item.code.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [plans, appliedSearch, appliedStatus, appliedDate]);

  const totalElements = 48; // Total items count from Figma KPI
  const totalPages = Math.max(1, Math.ceil(filteredPlans.length / pageSize));
  const paginatedPlans = filteredPlans.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleExportExcel = () => {
    toast.success("Đang xuất danh sách Phương án kinh doanh ra tệp Excel...");
  };

  return (
    <div className="min-h-full w-full space-y-5 bg-[#f8f7fa] p-4 lg:p-6 text-[#2f2b3d]">
      {/* Page Header (Reusing shared PageHeader component) */}
      <PageHeader
        title="Quản lý Phương án kinh doanh"
        action={
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCreateModalOpen(true)}
              className="inline-flex h-9 items-center gap-1.5 rounded-[6px] bg-[#ff4c51] px-4 text-xs font-semibold text-white shadow-2xs hover:bg-[#e64449] transition-colors"
            >
              <Plus className="size-4" />
              + Upload PAKD
            </button>
            <button
              onClick={handleExportExcel}
              className="inline-flex h-9 items-center gap-1.5 rounded-[6px] border border-slate-300 bg-white px-3.5 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <Download className="size-3.5 text-slate-500" />
              Xuất Excel
            </button>
          </div>
        }
      />

      {/* 4 Stat Cards (Reusing shared StatCard with variant="horizontal") */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          variant="horizontal"
          title="Tổng PAKD"
          value={48}
          icon={FileText}
          iconBgClass="bg-[#ffeae9] text-[#ff4c51]"
        />
        <StatCard
          variant="horizontal"
          title="Đang thực hiện"
          value={22}
          subtext="37,50% tổng số PAKD"
          icon={TrendingUp}
          iconBgClass="bg-[#e8f4fd] text-[#3f81ea]"
        />
        <StatCard
          variant="horizontal"
          title="Đã hoàn thành"
          value={18}
          subtext="45,83% tổng số PAKD"
          icon={CheckCheck}
          iconBgClass="bg-[#e8f9ee] text-[#28c76f]"
        />
        <StatCard
          variant="horizontal"
          title="Tạm dừng"
          value={8}
          subtext="16,67% tổng số PAKD"
          icon={Clock}
          iconBgClass="bg-[#fff5e8] text-[#ff9f43]"
        />
      </div>

      {/* Main Table Card: Danh sách Phương án kinh doanh */}
      <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-2xs space-y-4">
        <h2 className="text-base font-bold text-[#2f2b3d]">
          Danh sách Phương án kinh doanh
        </h2>

        {/* Filter Toolbar (Reusing SearchInput, SelectFilter, DatePickerInput) */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_180px_200px_auto_auto] items-end">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Tìm bằng mã PAKD/Tên đối tác"
            className="w-full"
          />

          <SelectFilter
            label="Trạng thái"
            value={statusFilter}
            onChange={setStatusFilter}
            options={[
              { value: "all", label: "Tất cả" },
              { value: "Đang thực hiện", label: "Đang thực hiện" },
              { value: "Đã hoàn thành", label: "Đã hoàn thành" },
              { value: "Tạm dừng", label: "Tạm dừng" },
              { value: "Chờ phê duyệt", label: "Chờ phê duyệt" },
              { value: "Lưu nháp", label: "Lưu nháp" },
            ]}
          />

          <DatePickerInput
            label="Khoảng thời gian"
            value={dateFilter}
            onChange={setDateFilter}
            placeholder="dd.mm.yyyy"
          />

          <button
            onClick={handleApplyFilter}
            className="inline-flex h-9 items-center gap-1.5 rounded-[6px] border border-[#ff4c51] px-4 text-xs font-medium text-[#ff4c51] transition-colors hover:bg-[#ff4c51]/10"
          >
            <Filter className="size-3.5" />
            Lọc
          </button>

          <button
            onClick={handleResetFilter}
            className="inline-flex h-9 items-center gap-1.5 rounded-[6px] border border-slate-300 px-4 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50"
          >
            <RotateCcw className="size-3.5 text-slate-500" />
            Đặt Lại
          </button>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-[6px]">
          <table className="w-full min-w-[1100px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/90 text-[#5d586c] text-[11px]">
                <th className="px-3 py-3 font-semibold text-slate-700 w-32">Số PAKD</th>
                <th className="px-3 py-3 font-semibold text-slate-700 min-w-[200px]">Tên PAKD</th>
                <th className="px-3 py-3 font-semibold text-slate-700 text-center w-24">Ngày ký</th>
                <th className="px-3 py-3 font-semibold text-slate-700 min-w-[200px]">Khách hàng</th>
                <th className="px-3 py-3 font-semibold text-slate-700 text-center min-w-[160px]">Thời gian thực hiện</th>
                <th className="px-3 py-3 font-semibold text-slate-700 text-right w-28">Tổng giá trị mua sắm</th>
                <th className="px-3 py-3 font-semibold text-slate-700 text-right w-28">Nghiệm thu</th>
                <th className="px-3 py-3 font-semibold text-slate-700 text-right w-24">Còn lại</th>
                <th className="px-3 py-3 font-semibold text-slate-700 text-center w-32">Trạng thái</th>
                <th className="px-3 py-3 font-semibold text-slate-700 text-center w-20">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {paginatedPlans.length === 0 ? (
                <tr>
                  <td colSpan={10} className="py-10 text-center text-slate-400">
                    Không tìm thấy phương án kinh doanh nào phù hợp.
                  </td>
                </tr>
              ) : (
                paginatedPlans.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-slate-50/70 text-slate-700 transition-colors cursor-pointer"
                    onClick={() => {
                      setSelectedPlanForSideModal(row.id);
                      setSideModalOpen(true);
                    }}
                  >
                    <td className="px-3 py-3 font-semibold text-[#2f2b3d] text-xs">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPlanForSideModal(row.id);
                          setSideModalOpen(true);
                        }}
                        className="text-left font-semibold text-[#3f81ea] hover:underline"
                      >
                        {row.id}
                      </button>
                    </td>
                    <td className="px-3 py-3 font-medium text-slate-800">
                      {row.title}
                    </td>
                    <td className="px-3 py-3 text-center text-slate-600">
                      {row.planDate}
                    </td>
                    <td className="px-3 py-3 text-slate-700 font-medium">
                      {row.partner}
                    </td>
                    <td className="px-3 py-3 text-center text-slate-600">
                      {row.executionPeriod}
                    </td>
                    <td className="px-3 py-3 text-right font-medium text-slate-800">
                      {row.procurementCost !== undefined
                        ? `${row.procurementCost},00`
                        : "320,00"}
                    </td>
                    <td className="px-3 py-3 text-right font-medium text-slate-800">
                      {row.acceptedAmount !== undefined
                        ? `${row.acceptedAmount},00`
                        : "320,00"}
                    </td>
                    <td className="px-3 py-3 text-right font-medium text-slate-800">
                      {row.remainingAmount !== undefined
                        ? `${row.remainingAmount},00`
                        : "320,00"}
                    </td>
                    <td className="px-3 py-3 text-center">
                      {/* Reusing shared StatusBadge */}
                      <StatusBadge status={row.status} />
                    </td>
                    <td
                      className="px-3 py-3 text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => {
                          setSelectedPlanForSideModal(row.id);
                          setSideModalOpen(true);
                        }}
                        className="inline-flex size-7 items-center justify-center rounded-full text-[#3f81ea] hover:bg-[#3f81ea]/10 transition-colors"
                        title="Xem chi tiết nghiệm thu theo PAKD"
                      >
                        <Eye className="size-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer (Reusing shared Pagination component) */}
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalElements={totalElements}
          totalPages={totalPages}
          pageSizeOptions={[10, 20, 50]}
          pageSizeLabel="Hiển thị"
          onPageChange={setCurrentPage}
          onPageSizeChange={(size) => {
            setPageSize(size);
            setCurrentPage(1);
          }}
          renderSummary={(start, end, total) => (
            <>
              Hiển thị {start} đến {end} trong {total} bản ghi
            </>
          )}
        />
      </div>

      {/* Recent Activities Card */}
      <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-2xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-sm font-bold text-[#2f2b3d]">
            Nhật ký gần đây
          </h3>
          <button
            onClick={() => toast.info("Đang mở toàn bộ lịch sử hoạt động...")}
            className="text-xs font-medium text-[#3f81ea] hover:underline"
          >
            Xem tất cả nhật ký &gt;
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {sampleFigmaActivities.map((act) => (
            <div key={act.id} className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div
                  className={`flex size-8 shrink-0 items-center justify-center rounded-md ${
                    act.type === "upload_green"
                      ? "bg-[#e8f9ee] text-[#28c76f]"
                      : act.type === "status_blue"
                      ? "bg-[#e8f4fd] text-[#3f81ea]"
                      : act.type === "upload_cyan"
                      ? "bg-[#e0f7fa] text-[#00bad1]"
                      : "bg-[#e8f4fd] text-[#3f81ea]"
                  }`}
                >
                  {act.type.includes("upload") ? (
                    <FileText className="size-4" />
                  ) : act.type === "status_check" ? (
                    <CheckCheck className="size-4" />
                  ) : (
                    <Edit3 className="size-4" />
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">{act.title}</p>
                  <p className="text-[11px] text-slate-400">{act.user}</p>
                </div>
              </div>

              <span className="text-[11px] text-slate-400 font-mono">
                {act.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Create / Upload Modal */}
      <CreateBusinessPlanModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
        onSuccess={() => {
          toast.success("Tạo mới phương án kinh doanh thành công!");
        }}
      />

      {/* Side Modal: Chi tiết nghiệm thu theo PAKD (Figma 28387-268503, 28387-270562, 28474-43523) */}
      <BusinessPlanAcceptanceSideModal
        open={sideModalOpen}
        onOpenChange={setSideModalOpen}
        planId={selectedPlanForSideModal}
      />
    </div>
  );
}
