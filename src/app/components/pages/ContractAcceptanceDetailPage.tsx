import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Download,
  Eye,
  FileText,
  Filter,
  History,
  Paperclip,
  Plus,
  Printer,
  RotateCcw,
  Search,
  Upload,
  CheckCircle2,
  Clock,
  ExternalLink,
} from "lucide-react";
import { AcceptanceContractDetail, AcceptanceMilestoneItem, sampleAcceptanceContractDetails } from "../../data/acceptanceMock";
import { docApi } from "../../services/api";
import { toast } from "sonner";
import { AcceptancePeriodDetailModal } from "../modals/AcceptancePeriodDetailModal";
import { CreateAcceptanceBatchModal } from "../modals/CreateAcceptanceBatchModal";
import { UploadAcceptanceDocumentModal } from "../modals/UploadAcceptanceDocumentModal";
import { StatusBadge } from "../common/StatusBadge";
import { IconBuilding, IconMilestone, IconFileDownload } from "../icons";

interface ContractAcceptanceDetailPageProps {
  contractId: string;
  onBack: () => void;
}

function formatCurrency(val?: number): string {
  if (val === undefined || val === null) return "0";
  return new Intl.NumberFormat("vi-VN").format(val);
}

export function ContractAcceptanceDetailPage({
  contractId = "39.25.VCS-VINALINUX.01",
  onBack,
}: ContractAcceptanceDetailPageProps) {
  const [contract, setContract] = useState<AcceptanceContractDetail | null>(null);
  const [loading, setLoading] = useState(true);

  // Modals state
  const [selectedItemForDetail, setSelectedItemForDetail] = useState<AcceptanceMilestoneItem | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCreateBatchModalOpen, setIsCreateBatchModalOpen] = useState(false);
  const [isUploadDocModalOpen, setIsUploadDocModalOpen] = useState(false);

  const loadContractDetail = async () => {
    try {
      setLoading(true);
      const res = await docApi.getAcceptanceContractById(contractId);
      if (res) {
        setContract(res);
      } else {
        const fallback = sampleAcceptanceContractDetails.find(
          (c) => c.id === contractId || c.contractCode === contractId
        ) || sampleAcceptanceContractDetails[0];
        setContract(fallback);
      }
    } catch {
      const fallback = sampleAcceptanceContractDetails.find(
        (c) => c.id === contractId || c.contractCode === contractId
      ) || sampleAcceptanceContractDetails[0];
      setContract(fallback);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContractDetail();
  }, [contractId]);

  if (loading || !contract) {
    return (
      <div className="flex h-64 w-full items-center justify-center text-slate-400">
        <div className="inline-flex items-center gap-2">
          <div className="size-5 animate-spin rounded-full border-2 border-[#ff4c51] border-t-transparent" />
          <span>Đang tải thông tin chi tiết nghiệm thu hợp đồng...</span>
        </div>
      </div>
    );
  }

  const handleOpenItemDetail = (item: AcceptanceMilestoneItem) => {
    setSelectedItemForDetail(item);
    setIsDetailModalOpen(true);
  };

  const handleExportReport = () => {
    toast.success(`Đang xuất báo cáo nghiệm thu hợp đồng ${contract.contractCode}...`);
  };

  const handleDownloadDoc = (fileName: string) => {
    toast.success(`Đang tải xuống tệp ${fileName}`);
  };

  // Calculate totals for table summary row
  const totalContractQty = contract.items.reduce((acc, i) => acc + i.contractQty, 0);
  const totalAcceptedQty = contract.items.reduce((acc, i) => acc + i.totalAcceptedQty, 0);
  const totalRemainingQty = contract.items.reduce((acc, i) => acc + i.remainingQty, 0);

  return (
    <div className="min-h-full bg-[#f8f7fa] p-4 lg:p-6 space-y-6">
      {/* Top Header Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex size-9 items-center justify-center rounded-[6px] border border-slate-200 bg-white text-slate-600 shadow-2xs hover:bg-slate-50 hover:text-slate-900 transition-colors"
            title="Quay lại danh sách"
          >
            <ArrowLeft className="size-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-[#2f2b3d]">Chi tiết nghiệm thu Hợp đồng</h1>
              <StatusBadge status={contract.status} />
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Mã HĐ: <span className="font-semibold text-[#3f81ea]">{contract.contractCode}</span> &bull; {contract.contractName}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setIsUploadDocModalOpen(true)}
            className="inline-flex h-9 items-center gap-1.5 rounded-[6px] border border-slate-300 bg-white px-3.5 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors"
          >
            <Upload className="size-3.5 text-slate-500" />
            Tải lên tài liệu
          </button>

          <button
            onClick={handleExportReport}
            className="inline-flex h-9 items-center gap-1.5 rounded-[6px] border border-slate-300 bg-white px-3.5 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors"
          >
            <Printer className="size-3.5 text-slate-500" />
            Xuất biên bản
          </button>

          <button
            onClick={() => setIsCreateBatchModalOpen(true)}
            className="inline-flex h-9 items-center gap-1.5 rounded-[6px] bg-[#ff4c51] px-4 text-xs font-medium text-white shadow-2xs hover:bg-[#e64449] transition-colors"
          >
            <Plus className="size-4" />
            Thêm đợt nghiệm thu
          </button>
        </div>
      </div>

      {/* Grid: Thông tin chung & Tiến độ giá trị */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Card 1: Thông tin Hợp đồng & Đối tác (2 cols) */}
        <div className="lg:col-span-2 rounded-[8px] border border-slate-200 bg-white p-5 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-sm font-bold text-[#2f2b3d] flex items-center gap-2">
              <IconBuilding className="size-4 text-[#ff4c51]" />
              Thông tin chung hợp đồng
            </h2>
            {contract.businessPlanId && (
              <a
                href={`#/business-plans/detail/${encodeURIComponent(contract.businessPlanId)}`}
                className="inline-flex items-center gap-1 text-xs text-[#3f81ea] hover:underline font-medium"
              >
                <span>Thuộc PAKD: {contract.businessPlanId}</span>
                <ExternalLink className="size-3" />
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Tên hợp đồng:</span>
              <span className="font-semibold text-slate-800 text-[13px]">{contract.contractName}</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">Mã hợp đồng:</span>
              <span className="font-bold text-[#3f81ea] text-[13px]">{contract.contractCode}</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">Đối tác / Nhà cung cấp:</span>
              <span className="font-medium text-slate-800">{contract.partner}</span>
              {contract.partnerTaxCode && (
                <span className="text-[11px] text-slate-500 block">MST: {contract.partnerTaxCode}</span>
              )}
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">Ngày ký hợp đồng:</span>
              <span className="font-medium text-slate-800 flex items-center gap-1 mt-0.5">
                <Calendar className="size-3.5 text-slate-400" />
                {contract.signDate}
              </span>
            </div>

            {contract.partnerAddress && (
              <div className="sm:col-span-2">
                <span className="text-slate-400 block text-[11px]">Địa chỉ đối tác:</span>
                <span className="text-slate-600">{contract.partnerAddress}</span>
              </div>
            )}
          </div>
        </div>

        {/* Card 2: Tiến độ & Phân bổ giá trị Nghiệm thu (1 col) */}
        <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-sm font-bold text-[#2f2b3d] flex items-center gap-2">
              <IconMilestone className="size-4 text-[#28c76f]" />
              Tiến độ nghiệm thu
            </h2>
            <span className="text-xs font-bold text-[#28c76f] bg-[#e8f9ee] px-2 py-0.5 rounded">
              {contract.completionPercent}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-slate-600 font-medium">
              <span>Đã hoàn thành</span>
              <span>{contract.completionPercent}%</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-linear-to-r from-[#28c76f] to-[#00bad1] transition-all duration-500"
                style={{ width: `${contract.completionPercent}%` }}
              />
            </div>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            <div className="flex items-center justify-between py-2">
              <span className="text-slate-500">Giá trị hợp đồng:</span>
              <span className="font-bold text-[#2f2b3d]">{formatCurrency(contract.contractValue)} VNĐ</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-slate-500">Đã nghiệm thu:</span>
              <span className="font-bold text-[#28c76f]">{formatCurrency(contract.acceptedValue)} VNĐ</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-slate-500">Giá trị còn lại:</span>
              <span className="font-bold text-slate-700">{formatCurrency(contract.remainingValue)} VNĐ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Chi tiết hạng mục & Các đợt nghiệm thu */}
      <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-2xs space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-base font-bold text-[#2f2b3d]">Chi tiết hạng mục & Các đợt nghiệm thu</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Bảng theo dõi số lượng và giá trị nghiệm thu thực tế qua từng đợt
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Số đợt hiện tại:</span>
            <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-bold text-[#3f81ea]">
              {contract.activePeriods.length} đợt
            </span>
          </div>
        </div>

        {/* Big Table with Period Columns */}
        <div className="overflow-x-auto border border-slate-200 rounded-[6px]">
          <table className="w-full min-w-[1200px] border-collapse text-left text-xs">
            <thead>
              {/* Header Row 1 */}
              <tr className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wider text-[#5d586c]">
                <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold text-center w-12">
                  STT
                </th>
                <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold min-w-[240px]">
                  Tên hàng hóa / Dịch vụ
                </th>
                <th rowSpan={2} className="border-r border-slate-200 px-2 py-2.5 font-semibold text-center w-16">
                  ĐVT
                </th>
                <th colSpan={3} className="border-r border-slate-200 px-3 py-2 font-semibold text-center bg-slate-100/80">
                  Hợp đồng
                </th>
                {contract.activePeriods.map((p) => (
                  <th
                    key={p.id}
                    colSpan={2}
                    className="border-r border-slate-200 px-3 py-2 font-semibold text-center bg-[#e8f4fd]/60 text-[#3f81ea]"
                  >
                    {p.name}
                  </th>
                ))}
                <th colSpan={2} className="border-r border-slate-200 px-3 py-2 font-semibold text-center bg-[#e8f9ee]/60 text-[#28c76f]">
                  Tổng đã nghiệm thu
                </th>
                <th colSpan={2} className="border-r border-slate-200 px-3 py-2 font-semibold text-center bg-slate-100/80">
                  Còn lại
                </th>
                <th rowSpan={2} className="px-3 py-2.5 font-semibold text-center w-24">
                  Thao tác
                </th>
              </tr>

              {/* Header Row 2 */}
              <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] text-[#5d586c]">
                <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-16">SL</th>
                <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-right w-28">Đơn giá</th>
                <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-right w-32">Thành tiền</th>

                {contract.activePeriods.map((p) => (
                  <React.Fragment key={`${p.id}-sub`}>
                    <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-14 text-[#3f81ea]">
                      SL
                    </th>
                    <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-right w-28 text-[#3f81ea]">
                      Thành tiền
                    </th>
                  </React.Fragment>
                ))}

                <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-14 text-[#28c76f]">
                  SL
                </th>
                <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-right w-32 text-[#28c76f]">
                  Thành tiền
                </th>
                <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-14">SL</th>
                <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-right w-32">Thành tiền</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {contract.items.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50/70 text-slate-700">
                  <td className="border-r border-slate-200 px-3 py-3 text-center text-slate-500 font-medium">
                    {index + 1}
                  </td>
                  <td className="border-r border-slate-200 px-3 py-3 font-medium text-[#2f2b3d]">
                    <div>{item.itemName}</div>
                  </td>
                  <td className="border-r border-slate-200 px-2 py-3 text-center text-slate-600">
                    {item.unit}
                  </td>

                  {/* Contract columns */}
                  <td className="border-r border-slate-200 px-2 py-3 text-center font-medium text-slate-800">
                    {item.contractQty}
                  </td>
                  <td className="border-r border-slate-200 px-2 py-3 text-right text-slate-600">
                    {formatCurrency(item.contractUnitPrice)}
                  </td>
                  <td className="border-r border-slate-200 px-2 py-3 text-right font-semibold text-[#2f2b3d]">
                    {formatCurrency(item.contractValue)}
                  </td>

                  {/* Dynamic Periods columns */}
                  {contract.activePeriods.map((p) => {
                    const record = item.periods[p.id];
                    return (
                      <React.Fragment key={`${item.id}-${p.id}`}>
                        <td className="border-r border-slate-200 px-2 py-3 text-center font-medium text-[#3f81ea]">
                          {record?.qty || 0}
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3 text-right font-medium text-[#3f81ea]">
                          {formatCurrency(record?.value || 0)}
                        </td>
                      </React.Fragment>
                    );
                  })}

                  {/* Total accepted */}
                  <td className="border-r border-slate-200 px-2 py-3 text-center font-bold text-[#28c76f]">
                    {item.totalAcceptedQty}
                  </td>
                  <td className="border-r border-slate-200 px-2 py-3 text-right font-bold text-[#28c76f]">
                    {formatCurrency(item.totalAcceptedValue)}
                  </td>

                  {/* Remaining */}
                  <td className="border-r border-slate-200 px-2 py-3 text-center font-semibold text-slate-700">
                    {item.remainingQty}
                  </td>
                  <td className="border-r border-slate-200 px-2 py-3 text-right font-semibold text-slate-700">
                    {formatCurrency(item.remainingValue)}
                  </td>

                  {/* Actions */}
                  <td className="px-3 py-3 text-center">
                    <button
                      onClick={() => handleOpenItemDetail(item)}
                      className="inline-flex items-center gap-1 rounded bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 hover:bg-[#3f81ea] hover:text-white transition-colors"
                      title="Xem chi tiết các đợt"
                    >
                      <Eye className="size-3" />
                      Chi tiết
                    </button>
                  </td>
                </tr>
              ))}

              {/* Total Summary Row */}
              <tr className="bg-slate-100/90 font-bold text-[#2f2b3d] border-t-2 border-slate-300">
                <td colSpan={3} className="border-r border-slate-200 px-3 py-3.5 text-center uppercase tracking-wide">
                  Tổng cộng
                </td>
                <td className="border-r border-slate-200 px-2 py-3.5 text-center">
                  {totalContractQty}
                </td>
                <td className="border-r border-slate-200 px-2 py-3.5 text-right font-normal text-slate-400">—</td>
                <td className="border-r border-slate-200 px-2 py-3.5 text-right font-bold text-[#2f2b3d]">
                  {formatCurrency(contract.contractValue)}
                </td>

                {contract.activePeriods.map((p) => {
                  const periodTotalQty = contract.items.reduce(
                    (acc, i) => acc + (i.periods[p.id]?.qty || 0),
                    0
                  );
                  const periodTotalVal = contract.items.reduce(
                    (acc, i) => acc + (i.periods[p.id]?.value || 0),
                    0
                  );
                  return (
                    <React.Fragment key={`total-${p.id}`}>
                      <td className="border-r border-slate-200 px-2 py-3.5 text-center text-[#3f81ea]">
                        {periodTotalQty}
                      </td>
                      <td className="border-r border-slate-200 px-2 py-3.5 text-right text-[#3f81ea]">
                        {formatCurrency(periodTotalVal)}
                      </td>
                    </React.Fragment>
                  );
                })}

                <td className="border-r border-slate-200 px-2 py-3.5 text-center text-[#28c76f]">
                  {totalAcceptedQty}
                </td>
                <td className="border-r border-slate-200 px-2 py-3.5 text-right font-bold text-[#28c76f]">
                  {formatCurrency(contract.acceptedValue)}
                </td>

                <td className="border-r border-slate-200 px-2 py-3.5 text-center">
                  {totalRemainingQty}
                </td>
                <td className="border-r border-slate-200 px-2 py-3.5 text-right font-bold text-slate-800">
                  {formatCurrency(contract.remainingValue)}
                </td>
                <td className="px-2 py-3.5" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Grid: Tài liệu đính kèm & Nhật ký hoạt động */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Card 4: Biên bản & Tài liệu nghiệm thu */}
        <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-sm font-bold text-[#2f2b3d] flex items-center gap-2">
              <Paperclip className="size-4 text-[#ff4c51]" />
              Tài liệu & Biên bản nghiệm thu ({contract.documents.length})
            </h2>
            <button
              onClick={() => setIsUploadDocModalOpen(true)}
              className="inline-flex items-center gap-1 text-xs text-[#ff4c51] hover:underline font-medium"
            >
              <Plus className="size-3" />
              Tải lên tài liệu
            </button>
          </div>

          <div className="space-y-2.5">
            {contract.documents.length === 0 ? (
              <p className="py-6 text-center text-xs text-slate-400">
                Chưa có tài liệu nghiệm thu nào được tải lên.
              </p>
            ) : (
              contract.documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between rounded-[6px] border border-slate-100 bg-slate-50/50 p-3 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-[6px] bg-red-50 text-[#ff4c51]">
                      <FileText className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#2f2b3d] truncate max-w-[280px]">
                        {doc.fileName}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                        <span className="rounded bg-slate-200/60 px-1.5 py-0.2 text-[10px] text-slate-600 font-medium">
                          {doc.type}
                        </span>
                        {doc.period && <span>&bull; {doc.period}</span>}
                        <span>&bull; {doc.fileSize}</span>
                        <span>&bull; {doc.uploadedAt}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownloadDoc(doc.fileName)}
                    className="flex size-8 shrink-0 items-center justify-center rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    title="Tải xuống"
                  >
                    <Download className="size-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Card 5: Nhật ký hoạt động */}
        <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-sm font-bold text-[#2f2b3d] flex items-center gap-2">
              <History className="size-4 text-[#3f81ea]" />
              Nhật ký hoạt động gần đây
            </h2>
          </div>

          <div className="space-y-4 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {contract.activities.map((act) => (
              <div key={act.id} className="flex items-start gap-3 relative">
                <div
                  className={`size-7 rounded-full flex items-center justify-center shrink-0 z-10 ${
                    act.type === "approved"
                      ? "bg-[#e8f9ee] text-[#28c76f]"
                      : act.type === "uploaded"
                      ? "bg-[#e8f4fd] text-[#3f81ea]"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {act.type === "approved" ? (
                    <CheckCircle2 className="size-3.5" />
                  ) : act.type === "uploaded" ? (
                    <Upload className="size-3.5" />
                  ) : (
                    <Clock className="size-3.5" />
                  )}
                </div>

                <div className="text-xs min-w-0 flex-1 pt-0.5">
                  <p className="font-semibold text-slate-800">{act.action}</p>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                    <span>Thực hiện bởi: <strong className="text-slate-600 font-medium">{act.user}</strong></span>
                    <span>&bull;</span>
                    <span>{act.timestamp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popups & Modals */}
      <AcceptancePeriodDetailModal
        open={isDetailModalOpen}
        onOpenChange={setIsDetailModalOpen}
        item={selectedItemForDetail}
        contractCode={contract.contractCode}
      />

      <CreateAcceptanceBatchModal
        open={isCreateBatchModalOpen}
        onOpenChange={setIsCreateBatchModalOpen}
        contract={contract}
        onSuccess={loadContractDetail}
      />

      <UploadAcceptanceDocumentModal
        open={isUploadDocModalOpen}
        onOpenChange={setIsUploadDocModalOpen}
        contract={contract}
        onSuccess={loadContractDetail}
      />
    </div>
  );
}
