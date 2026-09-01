import { useMemo, useState } from "react";
import {
  Download,
  Eye,
  RotateCcw,
  CloudUpload,
} from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "../../components/common/PageHeader";
import { SearchInput } from "../../components/common/SearchInput";
import { DatePickerInput } from "../../components/common/DatePickerInput";
import { Pagination } from "../../components/common/Pagination";
import { WidgetCard } from "../../components/common/WidgetCard";
import { RecentActivitiesWidget } from "../../components/common/RecentActivitiesWidget";
import {
  AcceptanceReportItem,
  AcceptanceReportSideModal,
} from "./components/AcceptanceReportSideModal";
import { UploadModal } from "../DocumentDigitization/components/UploadModal";

const sampleAcceptanceReports: AcceptanceReportItem[] = [
  {
    id: "rep-1",
    contractCode: "52.25.VCS-BLC.05",
    signDate: "01/12/2025",
    customer: "Công ty TNHH Bluecyber",
    handoverDoc: "12/2025",
    acceptanceDate: "31/01/2026",
    acceptanceValue: 678600000,
  },
  {
    id: "rep-2",
    contractCode: "52.25.VCS-BLC.06",
    signDate: "02/12/2025",
    customer: "Công ty TNHH GreenTech",
    handoverDoc: "01/2026",
    acceptanceDate: "28/02/2026",
    acceptanceValue: 1200000000,
  },
  {
    id: "rep-3",
    contractCode: "52.25.VCS-BLC.07",
    signDate: "03/12/2025",
    customer: "Công ty TNHH RedCom",
    handoverDoc: "02/2026",
    acceptanceDate: "31/03/2026",
    acceptanceValue: 890500000,
  },
  {
    id: "rep-4",
    contractCode: "52.25.VCS-BLC.08",
    signDate: "04/12/2025",
    customer: "Công ty TNHH YellowInc",
    handoverDoc: "03/2026",
    acceptanceDate: "30/04/2026",
    acceptanceValue: 1750000000,
  },
  {
    id: "rep-5",
    contractCode: "52.25.VCS-BLC.09",
    signDate: "05/12/2025",
    customer: "Công ty TNHH BlackSky",
    handoverDoc: "04/2026",
    acceptanceDate: "31/05/2026",
    acceptanceValue: 2300000000,
  },
  {
    id: "rep-6",
    contractCode: "52.25.VCS-BLC.10",
    signDate: "06/12/2025",
    customer: "Công ty TNHH SilverLine",
    handoverDoc: "05/2026",
    acceptanceDate: "30/06/2026",
    acceptanceValue: 1600000000,
  },
  {
    id: "rep-7",
    contractCode: "52.25.VCS-BLC.11",
    signDate: "07/12/2025",
    customer: "Công ty TNHH OrangeWave",
    handoverDoc: "06/2026",
    acceptanceDate: "31/07/2026",
    acceptanceValue: 750000000,
  },
  {
    id: "rep-8",
    contractCode: "52.25.VCS-BLC.12",
    signDate: "08/12/2025",
    customer: "Công ty TNHH PurpleRise",
    handoverDoc: "07/2026",
    acceptanceDate: "31/08/2026",
    acceptanceValue: 1950000000,
  },
  {
    id: "rep-9",
    contractCode: "52.25.VCS-BLC.13",
    signDate: "09/12/2025",
    customer: "Công ty TNHH AquaTech",
    handoverDoc: "08/2026",
    acceptanceDate: "30/09/2026",
    acceptanceValue: 1100000000,
  },
  {
    id: "rep-10",
    contractCode: "52.25.VCS-BLC.14",
    signDate: "10/12/2025",
    customer: "Công ty TNHH EcoSolutions",
    handoverDoc: "09/2026",
    acceptanceDate: "31/10/2026",
    acceptanceValue: 2400000000,
  },
];

const sampleActivities = [
  {
    id: "act-1",
    title: "Tải lên Biên bản nghiệm thu 52.25.VCS-BLC.05",
    user: "Nguyễn Văn A",
    time: "18/04/2025  10:23",
    type: "upload_green",
  },
  {
    id: "act-2",
    title: "Tải lên Biên bản nghiệm thu 52.25.VCS-BLC.06",
    user: "Nguyễn Văn A",
    time: "18/04/2025  10:25",
    type: "upload_cyan",
  },
];

function formatCurrency(val: number): string {
  return new Intl.NumberFormat("vi-VN").format(val);
}

interface AcceptanceListPageProps {
  onSelectContractAcceptance?: (id: string) => void;
  onSelectPlan?: (id: string) => void;
}

export function AcceptanceListPage({ }: AcceptanceListPageProps = {}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [appliedDate, setAppliedDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sideModalOpen, setSideModalOpen] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<AcceptanceReportItem | null>(null);

  const handleResetFilter = () => {
    setSearchQuery("");
    setDateFilter("");
    setAppliedSearch("");
    setAppliedDate("");
    setCurrentPage(1);
  };

  const filteredData = useMemo(() => {
    const q = appliedSearch.trim().toLowerCase();
    return sampleAcceptanceReports.filter((row) => {
      if (appliedDate.trim()) {
        const normDate = appliedDate.trim().toLowerCase();
        if (!row.acceptanceDate.toLowerCase().includes(normDate)) return false;
      }
      if (!q) return true;
      return (
        row.contractCode.toLowerCase().includes(q) ||
        row.customer.toLowerCase().includes(q) ||
        row.handoverDoc.toLowerCase().includes(q)
      );
    });
  }, [appliedSearch, appliedDate]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const pagedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize]);

  const handleOpenDetail = (report: AcceptanceReportItem) => {
    setSelectedReport(report);
    setSideModalOpen(true);
  };

  return (
    <div className="space-y-6 bg-[#f8f7fa] p-6">
      <PageHeader
        title="Quản lý Biên bản nghiệm thu"
        action={
          <div className="flex items-center gap-3">
            <button
              onClick={() => setUploadModalOpen(true)}
              className="flex h-[38px] items-center gap-2 rounded-[6px] bg-[#ff4c51] px-4 text-[13px] font-medium text-white shadow-xs hover:bg-[#e64449] transition-colors cursor-pointer"
            >
              <CloudUpload className="size-4" />
              <span>Upload Biên Bản Nghiệm Thu</span>
            </button>
            <button
              onClick={() => toast.success("Đang xuất danh sách biên bản nghiệm thu ra file Excel...")}
              className="flex h-[38px] items-center gap-2 rounded-[6px] border border-[#dbdade] bg-white px-4 text-[13px] font-medium text-[#2f2b3d] hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
            >
              <Download className="size-4 text-slate-500" />
              <span>Xuất Excel</span>
            </button>
          </div>
        }
      />

      <WidgetCard className="space-y-5">
        <h3 className="text-[16px] font-bold text-[#2f2b3d]">
          Danh sách Biên bản nghiệm thu
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 items-end">
          <div className="lg:col-span-8">
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
              Ngày nghiệm thu
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

          <div className="lg:col-span-1">
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
          <table className="w-full min-w-[1000px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-slate-200/80 text-[13px]">
                <th className="px-4 py-3.5 font-semibold text-[#2f2b3d] text-left">
                  Số Hợp đồng
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#2f2b3d] text-left">
                  Ngày ký
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#2f2b3d] text-left">
                  Khách hàng
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#2f2b3d] text-left">
                  Biên bản bàn giao tài liệu
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#2f2b3d] text-left">
                  Ngày nghiệm thu
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#2f2b3d] text-right">
                  Giá trị nghiệm thu
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#2f2b3d] text-center">
                  Thao tác
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-[13px] text-[#2f2b3d]">
              {pagedData.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    Không tìm thấy biên bản nghiệm thu nào phù hợp
                  </td>
                </tr>
              ) : (
                pagedData.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-slate-50/70 transition-colors"
                  >
                    <td className="px-4 py-4 font-normal text-[#2f2b3d]">
                      {row.contractCode}
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {row.signDate}
                    </td>
                    <td className="px-4 py-4 font-normal text-slate-800">
                      {row.customer}
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {row.handoverDoc}
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {row.acceptanceDate}
                    </td>
                    <td className="px-4 py-4 text-right font-normal text-slate-800">
                      {formatCurrency(row.acceptanceValue)}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => handleOpenDetail(row)}
                        className="inline-flex size-7 items-center justify-center rounded text-[#3f81ea] hover:bg-[#3f81ea]/10 transition-colors cursor-pointer"
                        title="Xem chi tiết biên bản"
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

        <Pagination
          currentPage={currentPage}
          totalPages={48}
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

      <AcceptanceReportSideModal
        open={sideModalOpen}
        onOpenChange={setSideModalOpen}
        report={selectedReport}
      />

      <UploadModal
        open={uploadModalOpen}
        onOpenChange={setUploadModalOpen}
        onSuccess={() => {
          toast.success("Tải lên biên bản nghiệm thu thành công!");
        }}
      />
    </div>
  );
}
