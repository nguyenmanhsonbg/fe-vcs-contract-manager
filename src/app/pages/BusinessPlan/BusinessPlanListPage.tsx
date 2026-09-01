import { useMemo, useState } from "react";
import { PageHeader } from "../../components/common/PageHeader";
import { StatCard } from "../../components/common/StatCard";
import { SearchInput } from "../../components/common/SearchInput";
import { SelectFilter } from "../../components/common/SelectFilter";
import { DatePickerInput } from "../../components/common/DatePickerInput";
import { StatusBadge } from "../../components/common/StatusBadge";
import { Pagination } from "../../components/common/Pagination";
import { WidgetCard } from "../../components/common/WidgetCard";
import { RecentActivitiesWidget } from "../../components/common/RecentActivitiesWidget";
import {
  IconPakdBag,
  IconTrendingUp,
  IconCalendarClock,
  IconUploadPakd,
  IconEye,
  IconDownload,
  IconRefreshSpin,
  IconCheckSquareStat,
} from "../../components/icons";
import { BusinessPlanItem } from "../../core/types/businessPlan.types";
import { UploadModal } from "../DocumentDigitization/components/UploadModal";
import { BusinessPlanAcceptanceSideModal } from "./components/BusinessPlanAcceptanceSideModal";
import { toast } from "sonner";
import { formatCurrency } from "../../core/utils/formatters";

interface BusinessPlanListPageProps {
  onSelectPlan: (id: string) => void;
}

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
    time: "18/04/2025  10:23",
    type: "upload_green",
  },
  {
    id: "act-2",
    title: 'Cập nhật trạng thái sang "Đang thực hiện"',
    user: "Nguyễn Văn A",
    time: "18/04/2025  10:24",
    type: "status_blue",
  },
  {
    id: "act-3",
    title: "Tải lên Phương án kinh doanh 144/TTr-TTKDMB",
    user: "Nguyễn Văn A",
    time: "18/04/2025  10:25",
    type: "upload_cyan",
  },
  {
    id: "act-4",
    title: 'Cập nhật trạng thái sang "Đã hoàn thành"',
    user: "Nguyễn Văn A",
    time: "18/04/2025  14:32",
    type: "status_blue",
  },
];

export function BusinessPlanListPage({ onSelectPlan: _onSelectPlan }: BusinessPlanListPageProps) {
  const [plans] = useState<BusinessPlanItem[]>(figmaBusinessPlans);
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [appliedSearch, setAppliedSearch] = useState("");
  const [appliedStatus, setAppliedStatus] = useState("all");
  const [appliedDate, setAppliedDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [sideModalOpen, setSideModalOpen] = useState(false);
  const [selectedPlanForSideModal, setSelectedPlanForSideModal] = useState<string>("144/TTr-TTKDMB");

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
          !item.executionPeriod?.toLowerCase().includes(norm)
        ) {
          return false;
        }
      }
      if (q) {
        return (
          item.id.toLowerCase().includes(q) ||
          item.title.toLowerCase().includes(q) ||
          item.partner?.toLowerCase().includes(q) ||
          item.code.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [plans, appliedSearch, appliedStatus, appliedDate]);

  const totalElements = 48;
  const totalPages = Math.max(1, Math.ceil(filteredPlans.length / pageSize));
  const paginatedPlans = filteredPlans.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleExportExcel = () => {
    toast.success("Đang xuất danh sách Phương án kinh doanh ra tệp Excel...");
  };

  return (
    <div className="min-h-full w-full space-y-5 bg-[#f8f7fa] p-4 lg:p-6 text-[#2f2b3d]">
      <PageHeader
        title="Quản lý Phương án kinh doanh"
        action={
          <div className="flex items-center gap-3">
            <button
              onClick={() => setUploadModalOpen(true)}
              className="inline-flex h-[38px] items-center gap-2 rounded-[6px] bg-[#ff4c51] px-4 text-[13px] font-medium text-white shadow-2xs hover:bg-[#e64449] transition-colors cursor-pointer"
            >
              <IconUploadPakd className="size-4 text-white" />
              Upload PAKD
            </button>
            <button
              onClick={handleExportExcel}
              className="inline-flex h-[38px] items-center gap-2 rounded-[6px] border border-[#dbdade] bg-white px-4 text-[13px] font-medium text-[#5d586c] shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <IconDownload className="size-4 text-[#5d586c]" />
              Xuất Excel
            </button>
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          variant="horizontal"
          title="Tổng PAKD"
          value={48}
          icon={IconPakdBag}
          iconBgClass="bg-[#ffeae9] text-[#ff4c51]"
        />
        <StatCard
          variant="horizontal"
          title="Đang thực hiện"
          value={22}
          subtext="37,50% tổng số PAKD"
          icon={IconTrendingUp}
          iconBgClass="bg-[#e8f4fd] text-[#3f81ea]"
        />
        <StatCard
          variant="horizontal"
          title="Đã hoàn thành"
          value={18}
          subtext="45,83% tổng số PAKD"
          icon={IconCheckSquareStat}
          iconBgClass="bg-[#e8f9ee] text-[#28c76f]"
        />
        <StatCard
          variant="horizontal"
          title="Tạm dừng"
          value={8}
          subtext="16,67% tổng số PAKD"
          icon={IconCalendarClock}
          iconBgClass="bg-[#fff5e8] text-[#ff9f43]"
        />
      </div>

      <WidgetCard className="space-y-5">
        <h2 className="text-[16px] font-semibold text-[#2f2b3d]">
          Danh sách Phương án kinh doanh
        </h2>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[280px]">
            <div className="w-full sm:w-64">
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

            <div className="w-full sm:w-48">
              <SelectFilter
                value={statusFilter}
                onChange={(val) => {
                  setStatusFilter(val);
                  setAppliedStatus(val);
                  setCurrentPage(1);
                }}
              >
                <option value="all">Tất cả trạng thái</option>
                <option value="Đang thực hiện">Đang thực hiện</option>
                <option value="Đã hoàn thành">Đã hoàn thành</option>
                <option value="Tạm dừng">Tạm dừng</option>
              </SelectFilter>
            </div>

            <div className="w-full sm:w-44">
              <DatePickerInput
                value={dateFilter}
                onChange={(val) => {
                  setDateFilter(val);
                  setAppliedDate(val);
                  setCurrentPage(1);
                }}
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={handleResetFilter}
              className="inline-flex h-[38px] items-center gap-1.5 rounded-[6px] border border-[#dbdade] bg-white px-3.5 text-[13px] font-medium text-[#5d586c] shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
              title="Đặt lại bộ lọc"
            >
              <IconRefreshSpin className="size-3.5 text-[#5d586c]" />
              Đặt Lại
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-slate-200/80 text-[13px]">
                <th className="px-3 py-3.5 font-semibold text-[#2f2b3d] text-left">
                  Số PAKD
                </th>
                <th className="px-3 py-3.5 font-semibold text-[#2f2b3d] text-left">
                  Ngày ký
                </th>
                <th className="px-3 py-3.5 font-semibold text-[#2f2b3d] text-left">
                  Thời gian thực hiện
                </th>
                <th className="px-3 py-3.5 font-semibold text-[#2f2b3d] text-left">
                  Khách hàng
                </th>
                <th className="px-3 py-3.5 font-semibold text-[#2f2b3d] text-right">
                  Tổng ngân sách
                </th>
                <th className="px-3 py-3.5 font-semibold text-[#2f2b3d] text-right">
                  Đã nghiệm thu
                </th>
                <th className="px-3 py-3.5 font-semibold text-[#2f2b3d] text-right">
                  Còn lại
                </th>
                <th className="px-3 py-3.5 font-semibold text-[#2f2b3d] text-center">
                  Trạng thái
                </th>
                <th className="px-3 py-3.5 font-semibold text-[#2f2b3d] text-center">
                  Thao tác
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-[13px] text-[#2f2b3d]">
              {paginatedPlans.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-400">
                    Không tìm thấy phương án kinh doanh nào phù hợp
                  </td>
                </tr>
              ) : (
                paginatedPlans.map((plan) => {
                  const total = plan.totalAmount || plan.totalBudget || 100000000000;
                  const accepted = plan.acceptedAmount || 100000000000;
                  const remaining = plan.remainingAmount ?? plan.remainingBudget ?? 100000000000;

                  return (
                    <tr
                      key={plan.id}
                      className="hover:bg-slate-50/60 transition-colors"
                    >
                      <td className="px-3 py-4 font-normal text-[#2f2b3d] max-w-[140px] truncate">
                        {plan.code}
                      </td>
                      <td className="px-3 py-4 text-[#2f2b3d]">
                        {plan.planDate}
                      </td>
                      <td className="px-3 py-4 text-[#2f2b3d]">
                        {plan.executionPeriod}
                      </td>
                      <td className="px-3 py-4 text-[#2f2b3d] max-w-[200px] leading-[18px]">
                        {plan.partner}
                      </td>
                      <td className="px-3 py-4 text-right text-[#2f2b3d]">
                        {formatCurrency(total)}
                      </td>
                      <td className="px-3 py-4 text-right text-[#2f2b3d]">
                        {formatCurrency(accepted)}
                      </td>
                      <td className="px-3 py-4 text-right text-[#2f2b3d]">
                        {formatCurrency(remaining)}
                      </td>
                      <td className="px-3 py-4 text-center">
                        <StatusBadge status={plan.status} />
                      </td>
                      <td className="px-3 py-4 text-center">
                        <button
                          onClick={() => {
                            setSelectedPlanForSideModal(plan.id);
                            setSideModalOpen(true);
                          }}
                          className="inline-flex size-7 items-center justify-center rounded text-[#3f81ea] hover:bg-[#3f81ea]/10 transition-colors cursor-pointer"
                          title="Xem chi tiết nghiệm thu theo PAKD"
                        >
                          <IconEye className="size-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalElements={totalElements}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={(sz) => {
            setPageSize(sz);
            setCurrentPage(1);
          }}
        />
      </WidgetCard>

      <RecentActivitiesWidget activities={sampleFigmaActivities} />

      <UploadModal
        open={uploadModalOpen}
        onOpenChange={setUploadModalOpen}
        onSuccess={() => {
          toast.success("Tải lên PAKD thành công!");
        }}
      />

      <BusinessPlanAcceptanceSideModal
        open={sideModalOpen}
        onOpenChange={setSideModalOpen}
        planId={selectedPlanForSideModal}
      />
    </div>
  );
}
