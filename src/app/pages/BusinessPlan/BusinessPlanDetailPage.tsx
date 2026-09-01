import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Download,
  Eye,
  FileText,
  Maximize2,
  Minimize2,
  Minus,
  Plus,
  RotateCcw,
  CheckCircle,
  Edit3,
} from "lucide-react";
import { BusinessPlanItem } from "../../core/types/businessPlan.types";
import { sampleBusinessPlans } from "../../api/mocks/businessPlanMock";
import { StatusBadge } from "../../components/common/StatusBadge";
import { WidgetCard } from "../../components/common/WidgetCard";
import { RecentActivitiesWidget } from "../../components/common/RecentActivitiesWidget";
import { businessPlanApi } from "../../api/businessPlanApi";
import { toast } from "sonner";

interface BusinessPlanDetailPageProps {
  planId?: string;
  onBack: () => void;
}

function formatCurrency(val?: number): string {
  if (val === undefined || val === null) return "0";
  return new Intl.NumberFormat("vi-VN").format(val);
}

export function BusinessPlanDetailPage({
  planId = "144/TTr-TTKDMB",
  onBack,
}: BusinessPlanDetailPageProps) {
  const [plan, setPlan] = useState<BusinessPlanItem | null>(null);
  const [loading, setLoading] = useState(false);

  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(12);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [itemsSectionOpen, setItemsSectionOpen] = useState(true);
  const [financialSectionOpen, setFinancialSectionOpen] = useState(true);

  const loadPlanDetail = async () => {
    try {
      setLoading(true);
      const res = await businessPlanApi.getBusinessPlanById(planId);
      if (res) {
        setPlan(res);
      } else {
        const fallback = sampleBusinessPlans.find((p) => p.id === planId) || sampleBusinessPlans[0];
        setPlan(fallback);
      }
    } catch {
      const fallback = sampleBusinessPlans.find((p) => p.id === planId) || sampleBusinessPlans[0];
      setPlan(fallback);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPlanDetail();
  }, [planId]);

  if (loading || !plan) {
    return (
      <div className="flex h-64 w-full items-center justify-center text-slate-400">
        <div className="inline-flex items-center gap-2">
          <div className="size-5 animate-spin rounded-full border-2 border-[#ff4c51] border-t-transparent" />
          <span>Đang tải thông tin chi tiết phương án kinh doanh...</span>
        </div>
      </div>
    );
  }

  const handleDownloadPdf = () => {
    toast.success(`Đang tải xuống tài liệu Phương án kinh doanh ${plan.id}.pdf`);
  };

  const handleDownloadAppendix = (name: string) => {
    toast.success(`Đang tải xuống tệp ${name}`);
  };

  const handleApprovePlan = async () => {
    try {
      await businessPlanApi.updateBusinessPlanStatus(plan.id, "Đã duyệt");
      toast.success("Phê duyệt Phương án kinh doanh thành công!");
      loadPlanDetail();
    } catch (err: any) {
      toast.error(err.message || "Không thể phê duyệt phương án");
    }
  };

  const group1Items = plan.lineItems.filter((i) => i.group === "I" || !i.group);
  const group2Items = plan.lineItems.filter((i) => i.group === "II");

  const group1Total = group1Items.reduce((acc, cur) => acc + cur.totalAmount, 0);
  const group1Vat = group1Items.reduce((acc, cur) => acc + (cur.vatAmount || 0), 0);
  const group1TotalWithVat = group1Items.reduce((acc, cur) => acc + (cur.totalAmountWithVat || cur.totalAmount), 0);

  const group2Total = group2Items.reduce((acc, cur) => acc + cur.totalAmount, 0);
  const group2Vat = group2Items.reduce((acc, cur) => acc + (cur.vatAmount || 0), 0);
  const group2TotalWithVat = group2Items.reduce((acc, cur) => acc + (cur.totalAmountWithVat || cur.totalAmount), 0);

  return (
    <div className="min-h-full w-full space-y-6 bg-[#f8f7fa] p-6 text-[#393740]">
      {/* Top Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex size-9 items-center justify-center rounded-[6px] border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
            title="Quay lại danh sách"
          >
            <ArrowLeft className="size-4" />
          </button>
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-[20px] font-bold leading-tight text-[#2f2b3d]">
                Chi tiết Phương án kinh doanh
              </h1>
              <StatusBadge status={plan.status} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {plan.status === "Chờ phê duyệt" && (
            <button
              onClick={handleApprovePlan}
              className="inline-flex h-9 items-center gap-1.5 rounded-[6px] bg-[#28c76f] px-4 text-[13px] font-medium text-white shadow-xs transition-colors hover:bg-[#24b263] cursor-pointer"
            >
              <CheckCircle className="size-4" />
              Phê duyệt
            </button>
          )}

          <button
            onClick={() => toast.info(`Chỉnh sửa ${plan.id}`)}
            className="inline-flex h-9 items-center gap-1.5 rounded-[6px] border border-slate-300 bg-white px-3.5 text-[13px] font-medium text-[#2f2b3d] shadow-xs transition-colors hover:bg-slate-50 cursor-pointer"
          >
            <Edit3 className="size-4 text-slate-500" />
            Chỉnh sửa
          </button>

          <button
            onClick={handleDownloadPdf}
            className="inline-flex h-9 items-center gap-1.5 rounded-[6px] bg-[#ff4c51] px-4 text-[13px] font-medium text-white shadow-xs transition-colors hover:bg-[#e64449] cursor-pointer"
          >
            <Download className="size-4" />
            Tải Xuống
          </button>
        </div>
      </div>

      {/* Subheader info */}
      <WidgetCard className="px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-[14px] font-semibold text-[#2f2b3d]">
          Số Phương án kinh doanh: <span className="text-[#3f81ea]">{plan.id}</span>
        </p>
        <p className="text-[12px] text-[#5d586c]">
          Cập nhật lần cuối: <span className="font-medium text-[#2f2b3d]">{plan.updatedAt}</span> bởi{" "}
          <span className="font-medium text-[#2f2b3d]">{plan.updatedBy}</span>
        </p>
      </WidgetCard>

      {/* Top Two-Column Grid: A. Thông tin chung + Xem trước Phương án kinh doanh */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left Card: A. Thông tin chung */}
        <WidgetCard className="flex flex-col p-5 h-[480px]">
          <h2 className="mb-4 text-[16px] font-bold text-[#2f2b3d]">
            A. Thông tin chung
          </h2>

          <div className="custom-scrollbar flex-1 overflow-y-auto divide-y divide-slate-100 text-[13px] pr-2">
            <div className="grid grid-cols-[200px_1fr] py-3 items-center">
              <span className="text-[#5d586c]">Tên Phương án kinh doanh</span>
              <span className="font-medium text-[#2f2b3d]">{plan.title}</span>
            </div>
            <div className="grid grid-cols-[200px_1fr] py-3 items-center">
              <span className="text-[#5d586c]">Số Phương án kinh doanh</span>
              <span className="font-medium text-[#2f2b3d]">{plan.code}</span>
            </div>
            <div className="grid grid-cols-[200px_1fr] py-3 items-center">
              <span className="text-[#5d586c]">Ngày Phương án kinh doanh</span>
              <span className="font-medium text-[#2f2b3d]">{plan.planDate}</span>
            </div>
            <div className="grid grid-cols-[200px_1fr] py-3 items-center">
              <span className="text-[#5d586c]">Đối tác / Khách hàng</span>
              <span className="font-medium text-[#2f2b3d]">{plan.partner}</span>
            </div>
            <div className="grid grid-cols-[200px_1fr] py-3 items-center">
              <span className="text-[#5d586c]">Thời gian thực hiện Hợp đồng</span>
              <span className="font-medium text-[#2f2b3d]">{plan.executionPeriod}</span>
            </div>
            <div className="grid grid-cols-[200px_1fr] py-3 items-center">
              <span className="text-[#5d586c]">Tổng giá trị trước thuế</span>
              <span className="font-semibold text-[#2f2b3d]">
                {formatCurrency(plan.totalAmount)} VND
              </span>
            </div>
            <div className="grid grid-cols-[200px_1fr] py-3 items-center">
              <span className="text-[#5d586c]">Tổng giá trị có VAT</span>
              <span className="font-bold text-[#ff4c51]">
                {formatCurrency(plan.totalAmountWithVat)} VND
              </span>
            </div>
            <div className="grid grid-cols-[200px_1fr] py-3 items-center">
              <span className="text-[#5d586c]">Người khởi tạo</span>
              <span className="font-medium text-[#2f2b3d]">{plan.createdBy}</span>
            </div>
          </div>
        </WidgetCard>

        {/* Right Card: Xem trước Phương án kinh doanh */}
        <WidgetCard
          className={`flex flex-col p-4 ${
            isFullscreen
              ? "fixed inset-4 z-50 overflow-hidden shadow-2xl"
              : "h-[480px]"
          }`}
        >
          <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2.5">
            <h2 className="text-[14px] font-bold text-[#2f2b3d]">
              Xem trước Phương án Kinh doanh
            </h2>

            <div className="flex items-center gap-1 text-slate-600">
              <button
                onClick={() => toast.info("Đã làm mới bản xem trước")}
                className="rounded p-1 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
                title="Làm mới"
              >
                <RotateCcw className="size-3.5" />
              </button>

              <button
                onClick={() => setZoom((z) => Math.max(50, z - 10))}
                className="rounded p-1 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
                title="Thu nhỏ"
              >
                <Minus className="size-3.5" />
              </button>

              <div className="relative">
                <select
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="h-7 appearance-none rounded border border-slate-200 bg-white px-2 pr-6 text-[12px] text-slate-700 outline-none hover:border-slate-300 cursor-pointer"
                >
                  <option value={50}>50%</option>
                  <option value={75}>75%</option>
                  <option value={100}>100%</option>
                  <option value={125}>125%</option>
                  <option value={150}>150%</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-1.5 top-1/2 size-3 -translate-y-1/2 text-slate-400" />
              </div>

              <button
                onClick={() => setZoom((z) => Math.min(200, z + 10))}
                className="rounded p-1 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
                title="Phóng to"
              >
                <Plus className="size-3.5" />
              </button>

              <span className="mx-1 h-4 w-px bg-slate-200" />

              <div className="flex items-center gap-1 text-[12px] text-slate-600">
                <select
                  value={currentPage}
                  onChange={(e) => setCurrentPage(Number(e.target.value))}
                  className="h-7 appearance-none rounded border border-slate-200 bg-white px-2 pr-5 text-[12px] outline-none cursor-pointer"
                >
                  {Array.from({ length: totalPages }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <span>/ {totalPages}</span>
              </div>

              <span className="mx-1 h-4 w-px bg-slate-200" />

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="rounded p-1 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
                title={isFullscreen ? "Thu nhỏ" : "Toàn màn hình"}
              >
                {isFullscreen ? (
                  <Minimize2 className="size-3.5" />
                ) : (
                  <Maximize2 className="size-3.5" />
                )}
              </button>

              <button
                onClick={handleDownloadPdf}
                className="rounded p-1 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
                title="Tải PDF"
              >
                <Download className="size-3.5" />
              </button>
            </div>
          </div>

          {/* Document Canvas Content */}
          <div className="custom-scrollbar flex-1 overflow-auto rounded border border-slate-200 bg-slate-100/60 p-6 shadow-inner">
            <div
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
              className="mx-auto min-h-[560px] w-full max-w-[560px] space-y-4 rounded bg-white p-8 shadow-md transition-transform text-[12px] text-slate-800 leading-relaxed font-serif"
            >
              <div className="text-center font-sans">
                <p className="text-[13px] font-bold uppercase tracking-wider text-slate-900">
                  PHÊ DUYỆT
                </p>
                <p className="italic text-slate-500 text-[11px] mt-0.5">
                  Ngày {plan.planDate}
                </p>
                <p className="mt-1 font-bold text-slate-800 uppercase text-[11px]">
                  {plan.documentContent?.approverTitle || "TỔNG GIÁM ĐỐC"}
                </p>
                <p className="mt-6 font-bold uppercase text-slate-900 text-[11px]">
                  {plan.documentContent?.approverName || "TRẦN MINH QUANG"}
                </p>
              </div>

              <hr className="my-3 border-slate-200" />

              <div className="text-center font-sans space-y-1">
                <h3 className="text-[16px] font-bold uppercase text-slate-900 tracking-wide">
                  TỜ TRÌNH
                </h3>
                <p className="font-bold text-slate-800 uppercase text-[12px]">
                  Về việc đề xuất {plan.title}
                </p>
                <p className="pt-2 text-center font-semibold text-slate-900 text-[12px]">
                  Kính gửi: Ban Giám đốc Công ty.
                </p>
              </div>

              <div className="rounded border border-slate-300 bg-slate-50 p-3 text-[11px] italic text-slate-700 leading-normal text-left font-sans">
                <strong>HƯỚNG DẪN SỬ DỤNG:</strong> Thay toàn bộ nội dung trong dấu [ ]; xóa dòng, cột và phụ lục không áp dụng; cập nhật lại tổng tiền, thuế và luồng ký; sau đó xóa hộp hướng dẫn này trước khi trình ký.
              </div>

              <div className="space-y-2 text-[11px] text-slate-700 leading-relaxed font-serif">
                {plan.documentContent?.legalBasis?.map((basis, idx) => (
                  <p key={idx}>
                    Căn cứ <em>{basis}</em>
                  </p>
                )) || (
                  <>
                    <p>Căn cứ <em>Quy chế quản lý đầu tư, mua sắm số 45/QC-VCS</em>;</p>
                    <p>Căn cứ <em>Kế hoạch sản xuất kinh doanh năm 2026</em>;</p>
                  </>
                )}
                <p className="pt-1">
                  <strong>{plan.documentContent?.proposingUnit || "ĐƠN VỊ ĐỀ XUẤT"}</strong> kính trình Ban Giám đốc Công ty phê duyệt Phương án kinh doanh: <strong>{plan.title}</strong>.
                </p>
                <p className="pt-2 font-bold font-sans text-[12px] uppercase text-slate-900">
                  I. THÔNG TIN CHUNG VỀ ĐỀ XUẤT
                </p>
                <p>
                  - Đối tác thực hiện: {plan.partner}<br />
                  - Thời gian thực hiện: {plan.executionPeriod}<br />
                  - Tổng giá trị dự kiến: {formatCurrency(plan.totalAmountWithVat)} VND
                </p>
              </div>
            </div>
          </div>
        </WidgetCard>
      </div>

      {/* Collapsible Section 1: Hạng mục đề xuất mua sắm */}
      <WidgetCard className="p-0 overflow-hidden">
        <button
          onClick={() => setItemsSectionOpen(!itemsSectionOpen)}
          className="flex w-full items-center justify-between p-4 text-left text-[15px] font-bold text-[#2f2b3d] transition-colors hover:bg-slate-50/70 cursor-pointer"
        >
          <span>Hạng mục đề xuất mua sắm</span>
          {itemsSectionOpen ? (
            <ChevronDown className="size-5 text-slate-400" />
          ) : (
            <ChevronRight className="size-5 text-slate-400" />
          )}
        </button>

        {itemsSectionOpen && (
          <div className="border-t border-slate-100 p-5 space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[960px] text-left text-[13px]">
                <thead>
                  <tr className="border-b border-slate-200 text-[#5d586c] text-[12px] h-10 bg-[#f8f7fa]/60">
                    <th className="px-3 py-2 font-semibold w-12 text-center">STT</th>
                    <th className="px-3 py-2 font-semibold min-w-[200px]">Tên hàng hóa</th>
                    <th className="px-3 py-2 font-semibold w-24">Đơn vị tính</th>
                    <th className="px-3 py-2 font-semibold w-24 text-center">Số lượng</th>
                    <th className="px-3 py-2 font-semibold text-right w-36">Đơn giá (VND)</th>
                    <th className="px-3 py-2 font-semibold text-right w-40">Thành tiền (VND)</th>
                    <th className="px-3 py-2 font-semibold text-right w-32">Thuế GTGT</th>
                    <th className="px-3 py-2 font-semibold text-right w-44">Thành tiền có VAT (VND)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {group1Items.length > 0 && (
                    <>
                      <tr className="bg-slate-50/80 font-semibold text-[#2f2b3d]">
                        <td className="px-3 py-3 font-bold text-center">I</td>
                        <td className="px-3 py-3 font-bold">Hạng mục 1</td>
                        <td className="px-3 py-3">Bộ</td>
                        <td className="px-3 py-3 text-center">{group1Items.reduce((acc, c) => acc + c.quantity, 0)}</td>
                        <td className="px-3 py-3 text-right">-</td>
                        <td className="px-3 py-3 text-right">{formatCurrency(group1Total)}</td>
                        <td className="px-3 py-3 text-right">{formatCurrency(group1Vat)}</td>
                        <td className="px-3 py-3 text-right font-bold">{formatCurrency(group1TotalWithVat)}</td>
                      </tr>
                      {group1Items.map((item, idx) => (
                        <tr key={item.id} className="hover:bg-slate-50/50 text-slate-700">
                          <td className="px-3 py-2.5 text-center text-slate-500">{idx + 1}</td>
                          <td className="px-3 py-2.5 font-medium">
                            <div>{item.itemName}</div>
                            {item.specs && <div className="text-[11px] text-slate-400">{item.specs}</div>}
                          </td>
                          <td className="px-3 py-2.5 text-slate-600">{item.unit}</td>
                          <td className="px-3 py-2.5 text-center font-medium">{item.quantity}</td>
                          <td className="px-3 py-2.5 text-right text-slate-600">{formatCurrency(item.unitPrice)}</td>
                          <td className="px-3 py-2.5 text-right text-slate-700">{formatCurrency(item.totalAmount)}</td>
                          <td className="px-3 py-2.5 text-right text-slate-600">{item.vatRate || "8%"}</td>
                          <td className="px-3 py-2.5 text-right text-slate-700">{formatCurrency(item.totalAmountWithVat)}</td>
                        </tr>
                      ))}
                    </>
                  )}

                  {group2Items.length > 0 && (
                    <>
                      <tr className="bg-slate-50/80 font-semibold text-[#2f2b3d]">
                        <td className="px-3 py-3 font-bold text-center">II</td>
                        <td className="px-3 py-3 font-bold">Hạng mục 2</td>
                        <td className="px-3 py-3">Bộ</td>
                        <td className="px-3 py-3 text-center">{group2Items.reduce((acc, c) => acc + c.quantity, 0)}</td>
                        <td className="px-3 py-3 text-right">-</td>
                        <td className="px-3 py-3 text-right">{formatCurrency(group2Total)}</td>
                        <td className="px-3 py-3 text-right">{formatCurrency(group2Vat)}</td>
                        <td className="px-3 py-3 text-right font-bold">{formatCurrency(group2TotalWithVat)}</td>
                      </tr>
                      {group2Items.map((item, idx) => (
                        <tr key={item.id} className="hover:bg-slate-50/50 text-slate-700">
                          <td className="px-3 py-2.5 text-center text-slate-500">{idx + 1}</td>
                          <td className="px-3 py-2.5 font-medium">
                            <div>{item.itemName}</div>
                            {item.specs && <div className="text-[11px] text-slate-400">{item.specs}</div>}
                          </td>
                          <td className="px-3 py-2.5 text-slate-600">{item.unit}</td>
                          <td className="px-3 py-2.5 text-center font-medium">{item.quantity}</td>
                          <td className="px-3 py-2.5 text-right text-slate-600">{formatCurrency(item.unitPrice)}</td>
                          <td className="px-3 py-2.5 text-right text-slate-700">{formatCurrency(item.totalAmount)}</td>
                          <td className="px-3 py-2.5 text-right text-slate-600">{item.vatRate || "8%"}</td>
                          <td className="px-3 py-2.5 text-right text-slate-700">{formatCurrency(item.totalAmountWithVat)}</td>
                        </tr>
                      ))}
                    </>
                  )}

                  <tr className="border-t-2 border-slate-300 font-bold text-[#2f2b3d] bg-[#f8f7fa]/50">
                    <td colSpan={5} className="px-3 py-3 text-right">
                      Tổng tiền
                    </td>
                    <td className="px-3 py-3 text-right">{formatCurrency(plan.totalAmount)}</td>
                    <td className="px-3 py-3 text-right">
                      {formatCurrency(plan.totalAmountWithVat - plan.totalAmount)}
                    </td>
                    <td className="px-3 py-3 text-right font-bold text-[#ff4c51]">
                      {formatCurrency(plan.totalAmountWithVat)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-2 text-[13px] text-[#2f2b3d]">
              <strong>Bằng chữ:</strong> {plan.amountInWords || "Không đồng"}
            </div>
          </div>
        )}
      </WidgetCard>

      {/* Collapsible Section 2: Hiệu quả phương án kinh doanh */}
      <WidgetCard className="p-0 overflow-hidden">
        <button
          onClick={() => setFinancialSectionOpen(!financialSectionOpen)}
          className="flex w-full items-center justify-between p-4 text-left text-[15px] font-bold text-[#2f2b3d] transition-colors hover:bg-slate-50/70 cursor-pointer"
        >
          <span>Hiệu quả Phương án kinh doanh</span>
          {financialSectionOpen ? (
            <ChevronDown className="size-5 text-slate-400" />
          ) : (
            <ChevronRight className="size-5 text-slate-400" />
          )}
        </button>

        {financialSectionOpen && (
          <div className="border-t border-slate-100 p-5 space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[960px] text-left text-[13px]">
                <thead>
                  <tr className="border-b border-slate-200 text-[#5d586c] text-[12px] h-10 bg-[#f8f7fa]/60">
                    <th className="px-3 py-2 font-semibold w-12 text-center">STT</th>
                    <th className="px-3 py-2 font-semibold min-w-[280px]">Nội dung</th>
                    <th className="px-3 py-2 font-semibold text-right w-44">Giá trị trước VAT</th>
                    <th className="px-3 py-2 font-semibold text-right w-40">Thuế VAT</th>
                    <th className="px-3 py-2 font-semibold text-right w-48">Giá trị sau thuế VAT</th>
                    <th className="px-3 py-2 font-semibold w-56">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="font-bold text-[#2f2b3d] bg-slate-50/60">
                    <td className="px-3 py-3 text-center">I</td>
                    <td className="px-3 py-3 uppercase">DOANH THU DỰ KIẾN</td>
                    <td className="px-3 py-3 text-right">{formatCurrency(plan.financial.revenue)}</td>
                    <td className="px-3 py-3 text-right">{formatCurrency(plan.financial.revenueVat)}</td>
                    <td className="px-3 py-3 text-right">{formatCurrency(plan.financial.revenueWithVat)}</td>
                    <td className="px-3 py-2 text-slate-500 font-normal text-[12px]">Chi tiết theo phụ lục 01 đính kèm</td>
                  </tr>

                  <tr className="font-bold text-[#2f2b3d] bg-slate-50/60">
                    <td className="px-3 py-3 text-center">II</td>
                    <td className="px-3 py-3 uppercase">CHI PHÍ</td>
                    <td className="px-3 py-3 text-right">{formatCurrency(plan.financial.cost)}</td>
                    <td className="px-3 py-3 text-right">{formatCurrency(plan.financial.costVat)}</td>
                    <td className="px-3 py-3 text-right">{formatCurrency(plan.financial.costWithVat)}</td>
                    <td className="px-3 py-2 text-slate-500 font-normal text-[12px]">Chi tiết theo phụ lục 02 đính kèm</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 text-slate-700">
                    <td className="px-3 py-2.5 text-center text-slate-500">1</td>
                    <td className="px-3 py-2.5 font-medium pl-6">Chi phí đầu tư mua sắm</td>
                    <td className="px-3 py-2.5 text-right">{formatCurrency(plan.financial.procurementCost)}</td>
                    <td className="px-3 py-2.5 text-right">{formatCurrency(plan.financial.procurementCostVat)}</td>
                    <td className="px-3 py-2.5 text-right font-medium">{formatCurrency(plan.financial.procurementCostWithVat)}</td>
                    <td className="px-3 py-2.5" />
                  </tr>
                  <tr className="hover:bg-slate-50/50 text-slate-700">
                    <td className="px-3 py-2.5 text-center text-slate-500">2</td>
                    <td className="px-3 py-2.5 font-medium pl-6">Chi phí quản lý chung</td>
                    <td className="px-3 py-2.5 text-right">{formatCurrency(plan.financial.generalAdminCost)}</td>
                    <td className="px-3 py-2.5 text-right text-slate-400">-</td>
                    <td className="px-3 py-2.5 text-right font-medium">{formatCurrency(plan.financial.generalAdminCost)}</td>
                    <td className="px-3 py-2.5 text-slate-500 text-[12px]">0,1% doanh thu</td>
                  </tr>

                  <tr className="font-semibold text-[#2f2b3d]">
                    <td className="px-3 py-3 text-center">III</td>
                    <td className="px-3 py-3 font-bold">Lợi nhuận trước thuế = I - II</td>
                    <td className="px-3 py-3 text-right font-bold text-[#3f81ea]">{formatCurrency(plan.financial.grossProfit)}</td>
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                  </tr>

                  <tr className="font-semibold text-[#2f2b3d]">
                    <td className="px-3 py-3 text-center">IV</td>
                    <td className="px-3 py-3 font-bold">Thuế TNDN (20%)</td>
                    <td className="px-3 py-3 text-right font-bold text-[#ff4c51]">{formatCurrency(plan.financial.corporateTax)}</td>
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                  </tr>

                  <tr className="font-semibold text-[#2f2b3d]">
                    <td className="px-3 py-3 text-center">V</td>
                    <td className="px-3 py-3 font-bold">Lợi nhuận sau thuế</td>
                    <td className="px-3 py-3 text-right font-bold text-[#28c76f]">{formatCurrency(plan.financial.netProfit)}</td>
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                  </tr>

                  <tr className="font-semibold text-[#2f2b3d]">
                    <td className="px-3 py-3 text-center">VI</td>
                    <td className="px-3 py-3 font-bold">Tỷ lệ lợi nhuận sau thuế / Chi phí = V / II</td>
                    <td className="px-3 py-3 text-right font-bold text-[#7367f0]">{plan.financial.profitOnCostRatio}%</td>
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                  </tr>

                  <tr className="font-semibold text-[#2f2b3d]">
                    <td className="px-3 py-3 text-center">VII</td>
                    <td className="px-3 py-3 font-bold">Tỷ lệ lợi nhuận trước thuế / Doanh thu = III / I</td>
                    <td className="px-3 py-3 text-right font-bold text-[#ff9f43]">{plan.financial.profitOnRevenueRatio}%</td>
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-2 text-[13px] text-[#2f2b3d]">
              <strong>Đánh giá:</strong> {plan.financial.notes || `Tỷ lệ lợi nhuận / chi phí vốn đạt ${plan.financial.profitOnCostRatio}% đảm bảo hiệu quả kinh doanh theo quy định của Công ty.`}
            </div>
          </div>
        )}
      </WidgetCard>

      {/* Grid: Section 3 (Phụ lục đính kèm) + Section 4 (Nhật ký gần đây) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <WidgetCard className="p-5">
          <h2 className="mb-4 text-[15px] font-bold text-[#2f2b3d]">
            Phụ lục đính kèm ({plan.appendices.length})
          </h2>

          <div className="space-y-3">
            {plan.appendices.length === 0 ? (
              <p className="py-6 text-center text-[12px] text-slate-400">
                Chưa có tệp phụ lục nào được đính kèm.
              </p>
            ) : (
              plan.appendices.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center justify-between rounded-[6px] border border-slate-200 bg-white px-4 py-3 transition-colors hover:bg-slate-50/70"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded bg-red-50 text-[#ff4c51]">
                      <FileText className="size-5" />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-[#2f2b3d]">
                        {app.name}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {app.type} &bull; {app.size} &bull; {app.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toast.info(`Đang mở xem tệp ${app.name}`)}
                      className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-[#3f81ea] cursor-pointer"
                      title="Xem tài liệu"
                    >
                      <Eye className="size-4" />
                    </button>
                    <button
                      onClick={() => handleDownloadAppendix(app.name)}
                      className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-[#3f81ea] cursor-pointer"
                      title="Tải xuống"
                    >
                      <Download className="size-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </WidgetCard>

        <RecentActivitiesWidget activities={plan.activities || []} />
      </div>
    </div>
  );
}
