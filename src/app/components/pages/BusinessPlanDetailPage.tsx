import { useState } from "react";
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
} from "lucide-react";
import { BusinessPlanItem, sampleBusinessPlans } from "../../data/businessPlanMock";
import { toast } from "sonner";

interface BusinessPlanDetailPageProps {
  planId?: string;
  onBack: () => void;
}

function formatCurrency(val: number): string {
  return new Intl.NumberFormat("vi-VN").format(val);
}

export function BusinessPlanDetailPage({
  planId = "144/TTr-TTKDMB",
  onBack,
}: BusinessPlanDetailPageProps) {
  const plan: BusinessPlanItem =
    sampleBusinessPlans.find((p) => p.id === planId) || sampleBusinessPlans[0];

  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(12);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [itemsSectionOpen, setItemsSectionOpen] = useState(false);
  const [financialSectionOpen, setFinancialSectionOpen] = useState(false);

  const handleDownloadPdf = () => {
    toast.success(`Đang tải xuống Phương án kinh doanh ${plan.id}.pdf`);
  };

  const handleDownloadAppendix = (name: string) => {
    toast.success(`Đang tải xuống tệp ${name}`);
  };

  return (
    <div className="min-h-full w-full space-y-5 bg-[#f8f7fa] p-6 text-[#393740]">
      {/* Top Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex size-9 items-center justify-center rounded-[6px] border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
            title="Quay lại danh sách"
          >
            <ArrowLeft className="size-4" />
          </button>
          <div>
            <h1 className="text-[20px] font-bold leading-tight text-[#2f2b3d]">
              Chi tiết Phương án kinh doanh
            </h1>
          </div>
        </div>

        <button
          onClick={handleDownloadPdf}
          className="inline-flex h-9 items-center gap-2 rounded-[6px] border border-slate-300 bg-white px-4 text-[13px] font-medium text-[#393740] shadow-xs transition-colors hover:bg-slate-50"
        >
          <Download className="size-4 text-slate-500" />
          Tải Xuống
        </button>
      </div>

      {/* Subheader info: Số PAKD & Timestamp */}
      <div className="space-y-1">
        <p className="text-[15px] font-semibold text-[#2f2b3d]">
          Số Phương án kinh doanh: {plan.id}
        </p>
        <p className="text-[12px] text-[#5d586c]">
          Cập nhật lần cuối: {plan.updatedAt} bởi {plan.updatedBy}
        </p>
      </div>

      {/* Top Two-Column Grid: A. Thông tin chung + Xem trước Phương án kinh doanh */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Left Card: A. Thông tin chung */}
        <div className="flex flex-col rounded-[6px] border border-[#dbdade] bg-white p-5 shadow-[0_2px_6px_rgba(47,43,61,0.08)] h-[460px]">
          <h2 className="mb-4 text-[16px] font-bold text-[#2f2b3d]">
            A. Thông tin chung
          </h2>

          <div className="custom-scrollbar flex-1 overflow-y-auto divide-y divide-slate-100 text-[13px] pr-2">
            <div className="grid grid-cols-[220px_1fr] py-3.5 items-center">
              <span className="text-[#5d586c]">Tên Phương án kinh doanh</span>
              <span className="font-medium text-[#2f2b3d]">{plan.title}</span>
            </div>
            <div className="grid grid-cols-[220px_1fr] py-3.5 items-center">
              <span className="text-[#5d586c]">Số Phương án kinh doanh</span>
              <span className="font-medium text-[#2f2b3d]">{plan.code}</span>
            </div>
            <div className="grid grid-cols-[220px_1fr] py-3.5 items-center">
              <span className="text-[#5d586c]">Ngày Phương án kinh doanh</span>
              <span className="font-medium text-[#2f2b3d]">{plan.planDate}</span>
            </div>
            <div className="grid grid-cols-[220px_1fr] py-3.5 items-center">
              <span className="text-[#5d586c]">Đối tác</span>
              <span className="font-medium text-[#2f2b3d]">{plan.partner}</span>
            </div>
            <div className="grid grid-cols-[220px_1fr] py-3.5 items-center">
              <span className="text-[#5d586c]">Thời gian thực hiện Hợp đồng</span>
              <span className="font-medium text-[#2f2b3d]">{plan.executionPeriod}</span>
            </div>
            <div className="grid grid-cols-[220px_1fr] py-3.5 items-center">
              <span className="text-[#5d586c]">Tổng giá trị dự kiến</span>
              <span className="font-semibold text-[#ff4c51]">
                {formatCurrency(plan.totalAmount)} VND
              </span>
            </div>
          </div>
        </div>

        {/* Right Card: Xem trước Phương án kinh doanh */}
        <div
          className={`flex flex-col rounded-[6px] border border-[#dbdade] bg-white p-4 shadow-[0_2px_6px_rgba(47,43,61,0.08)] ${
            isFullscreen
              ? "fixed inset-4 z-50 overflow-hidden shadow-2xl"
              : "h-[460px]"
          }`}
        >
          {/* Header & Toolbar */}
          <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2.5">
            <h2 className="text-[14px] font-bold text-[#2f2b3d]">
              Xem trước Phương án Kinh doanh
            </h2>

            {/* Viewer Controls */}
            <div className="flex items-center gap-1 text-slate-600">
              <button
                onClick={() => toast.info("Đã làm mới bản xem trước")}
                className="rounded p-1 hover:bg-slate-100 hover:text-slate-900"
                title="Làm mới"
              >
                <RotateCcw className="size-3.5" />
              </button>

              <button
                onClick={() => setZoom((z) => Math.max(50, z - 10))}
                className="rounded p-1 hover:bg-slate-100 hover:text-slate-900"
                title="Thu nhỏ"
              >
                <Minus className="size-3.5" />
              </button>

              <div className="relative">
                <select
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="h-7 appearance-none rounded border border-slate-200 bg-white px-2 pr-6 text-[12px] text-slate-700 outline-none hover:border-slate-300"
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
                className="rounded p-1 hover:bg-slate-100 hover:text-slate-900"
                title="Phóng to"
              >
                <Plus className="size-3.5" />
              </button>

              <span className="mx-1 h-4 w-px bg-slate-200" />

              {/* Page indicator */}
              <div className="flex items-center gap-1 text-[12px] text-slate-600">
                <select
                  value={currentPage}
                  onChange={(e) => setCurrentPage(Number(e.target.value))}
                  className="h-7 appearance-none rounded border border-slate-200 bg-white px-2 pr-5 text-[12px] outline-none"
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
                className="rounded p-1 hover:bg-slate-100 hover:text-slate-900"
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
                className="rounded p-1 hover:bg-slate-100 hover:text-slate-900"
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
              {/* Document Header */}
              <div className="text-center font-sans">
                <p className="text-[13px] font-bold uppercase tracking-wider text-slate-900">
                  PHÊ DUYỆT
                </p>
                <p className="italic text-slate-500 text-[11px] mt-0.5">
                  Ngày [...] tháng [...] năm [20...]
                </p>
                <p className="mt-1 font-bold text-slate-800 uppercase text-[11px]">
                  [CHỨC DANH NGƯỜI PHÊ DUYỆT]
                </p>
                <p className="mt-6 font-bold uppercase text-slate-900 text-[11px]">
                  [HỌ VÀ TÊN]
                </p>
              </div>

              <hr className="my-3 border-slate-200" />

              {/* Title */}
              <div className="text-center font-sans space-y-1">
                <h3 className="text-[16px] font-bold uppercase text-slate-900 tracking-wide">
                  TỜ TRÌNH
                </h3>
                <p className="font-bold text-slate-800 uppercase text-[12px]">
                  Về việc đề xuất [MUA SẮM/THUÊ NGOÀI]
                </p>
                <p className="font-bold text-slate-800 uppercase text-[12px]">
                  [TÊN HÀNG HÓA, HỆ THỐNG, PHẦN MỀM HOẶC DỊCH VỤ]
                </p>
                <p className="pt-2 text-center font-semibold text-slate-900 text-[12px]">
                  Kính gửi: Ban Giám đốc Công ty.
                </p>
              </div>

              {/* Guidance Notice Box from Figma */}
              <div className="rounded border border-slate-300 bg-slate-50 p-3 text-[11px] italic text-slate-700 leading-normal text-left font-sans">
                <strong>HƯỚNG DẪN SỬ DỤNG:</strong> Thay toàn bộ nội dung trong dấu [ ]; xóa dòng, cột và phụ lục không áp dụng; cập nhật lại tổng tiền, thuế và luồng ký; sau đó xóa hộp hướng dẫn này trước khi trình ký.
              </div>

              {/* Legal Basis Body */}
              <div className="space-y-2 text-[11px] text-slate-700 leading-relaxed font-serif">
                <p>
                  Căn cứ <em>[QUY CHẾ/QUYẾT ĐỊNH QUẢN LÝ ĐẦU TƯ, MUA SẮM VÀ SỐ/KÝ HIỆU]</em>;
                </p>
                <p>
                  Căn cứ <em>[KẾ HOẠCH/CHỦ TRƯƠNG/DỰ ÁN ĐÃ ĐƯỢC PHÊ DUYỆT]</em>;
                </p>
                <p>
                  Căn cứ chức năng, nhiệm vụ của <em>[TÊN ĐƠN VỊ ĐỀ XUẤT]</em>;
                </p>
                <p>
                  Căn cứ <em>[NHU CẦU THỰC TẾ/KẾ HOẠCH SẢN XUẤT KINH DOANH VÀ CÁC CĂN CỨ KHÁC]</em>;
                </p>
                <p className="pt-1">
                  <strong>[TÊN ĐƠN VỊ ĐỀ XUẤT]</strong> kính trình Ban Giám đốc Công ty phê duyệt đề xuất <strong>[NỘI DUNG ĐỀ XUẤT]</strong>. Nội dung cụ thể như sau:
                </p>
                <p className="pt-2 font-bold font-sans text-[12px] uppercase text-slate-900">
                  I. THÔNG TIN CHUNG VỀ ĐỀ XUẤT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collapsible Section 1: Hạng mục đề xuất mua sắm (Figma Node 28141:266383) */}
      <div className="rounded-[6px] border border-[#dbdade] bg-white shadow-[0_2px_6px_rgba(47,43,61,0.08)]">
        <button
          onClick={() => setItemsSectionOpen(!itemsSectionOpen)}
          className="flex w-full items-center justify-between p-4 text-left text-[15px] font-bold text-[#2f2b3d] transition-colors hover:bg-slate-50/70"
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
                  <tr className="border-b border-slate-200 text-[#5d586c] text-[12px] h-10">
                    <th className="px-3 py-2 font-semibold w-12">STT</th>
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
                  {/* Group I: Hạng mục 1 */}
                  <tr className="bg-slate-50/70 font-semibold text-[#2f2b3d]">
                    <td className="px-3 py-3 font-bold">I</td>
                    <td className="px-3 py-3 font-bold">Hạng mục 1</td>
                    <td className="px-3 py-3">Bộ</td>
                    <td className="px-3 py-3 text-center">26</td>
                    <td className="px-3 py-3 text-right">234.640.000</td>
                    <td className="px-3 py-3 text-right">6.100.640.000</td>
                    <td className="px-3 py-3 text-right">466.022.720</td>
                    <td className="px-3 py-3 text-right">6.546.662.720</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 text-slate-700">
                    <td className="px-3 py-2.5 text-center text-slate-500">1</td>
                    <td className="px-3 py-2.5 font-medium">Tên sản phẩm 1</td>
                    <td className="px-3 py-2.5 text-slate-600">Chiếc</td>
                    <td className="px-3 py-2.5 text-center font-medium">1</td>
                    <td className="px-3 py-2.5 text-right text-slate-600">128.766.000</td>
                    <td className="px-3 py-2.5 text-right text-slate-700">128.766.000</td>
                    <td className="px-3 py-2.5 text-right text-slate-600">8%</td>
                    <td className="px-3 py-2.5 text-right text-slate-400">-</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 text-slate-700">
                    <td className="px-3 py-2.5 text-center text-slate-500">2</td>
                    <td className="px-3 py-2.5 font-medium">Tên sản phẩm 2</td>
                    <td className="px-3 py-2.5 text-slate-600">Chiếc</td>
                    <td className="px-3 py-2.5 text-center font-medium">1</td>
                    <td className="px-3 py-2.5 text-right text-slate-600">85.668.000</td>
                    <td className="px-3 py-2.5 text-right text-slate-700">128.766.000</td>
                    <td className="px-3 py-2.5 text-right text-slate-600">8%</td>
                    <td className="px-3 py-2.5 text-right text-slate-400">-</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 text-slate-700">
                    <td className="px-3 py-2.5 text-center text-slate-500">3</td>
                    <td className="px-3 py-2.5 font-medium">Tên sản phẩm 3</td>
                    <td className="px-3 py-2.5 text-slate-600">Gói</td>
                    <td className="px-3 py-2.5 text-center font-medium">1</td>
                    <td className="px-3 py-2.5 text-right text-slate-600">20.206.000</td>
                    <td className="px-3 py-2.5 text-right text-slate-700">20.206.000</td>
                    <td className="px-3 py-2.5 text-right text-slate-600">KCT</td>
                    <td className="px-3 py-2.5 text-right text-slate-400">-</td>
                  </tr>

                  {/* Group II: Hạng mục 2 */}
                  <tr className="bg-slate-50/70 font-semibold text-[#2f2b3d]">
                    <td className="px-3 py-3 font-bold">II</td>
                    <td className="px-3 py-3 font-bold">Hạng mục 2</td>
                    <td className="px-3 py-3">Bộ</td>
                    <td className="px-3 py-3 text-center">26</td>
                    <td className="px-3 py-3 text-right">234.640.000</td>
                    <td className="px-3 py-3 text-right">6.100.640.000</td>
                    <td className="px-3 py-3 text-right">466.022.720</td>
                    <td className="px-3 py-3 text-right">6.546.662.720</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 text-slate-700">
                    <td className="px-3 py-2.5 text-center text-slate-500">1</td>
                    <td className="px-3 py-2.5 font-medium">Tên sản phẩm 1</td>
                    <td className="px-3 py-2.5 text-slate-600">Chiếc</td>
                    <td className="px-3 py-2.5 text-center font-medium">1</td>
                    <td className="px-3 py-2.5 text-right text-slate-600">128.766.000</td>
                    <td className="px-3 py-2.5 text-right text-slate-700">128.766.000</td>
                    <td className="px-3 py-2.5 text-right text-slate-600">8%</td>
                    <td className="px-3 py-2.5 text-right text-slate-400">-</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 text-slate-700">
                    <td className="px-3 py-2.5 text-center text-slate-500">2</td>
                    <td className="px-3 py-2.5 font-medium">Tên sản phẩm 2</td>
                    <td className="px-3 py-2.5 text-slate-600">Chiếc</td>
                    <td className="px-3 py-2.5 text-center font-medium">1</td>
                    <td className="px-3 py-2.5 text-right text-slate-600">85.668.000</td>
                    <td className="px-3 py-2.5 text-right text-slate-700">128.766.000</td>
                    <td className="px-3 py-2.5 text-right text-slate-600">8%</td>
                    <td className="px-3 py-2.5 text-right text-slate-400">-</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 text-slate-700">
                    <td className="px-3 py-2.5 text-center text-slate-500">3</td>
                    <td className="px-3 py-2.5 font-medium">Tên sản phẩm 3</td>
                    <td className="px-3 py-2.5 text-slate-600">Gói</td>
                    <td className="px-3 py-2.5 text-center font-medium">1</td>
                    <td className="px-3 py-2.5 text-right text-slate-600">20.206.000</td>
                    <td className="px-3 py-2.5 text-right text-slate-700">20.206.000</td>
                    <td className="px-3 py-2.5 text-right text-slate-600">KCT</td>
                    <td className="px-3 py-2.5 text-right text-slate-400">-</td>
                  </tr>

                  {/* Summary Total Row */}
                  <tr className="border-t-2 border-slate-300 font-bold text-[#2f2b3d] bg-white">
                    <td colSpan={5} className="px-3 py-3 text-right">
                      Tổng tiền
                    </td>
                    <td className="px-3 py-3 text-right">6.100.640.000</td>
                    <td className="px-3 py-3 text-right">466.022.720</td>
                    <td className="px-3 py-3 text-right font-bold text-[#2f2b3d]">
                      6.546.662.720
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-2 text-[13px] text-[#2f2b3d]">
              <strong>Bằng chữ:</strong> Mười tám tỷ một trăm bốn mươi mốt triệu sáu trăm linh một nghìn bốn trăm tám mươi đồng chẵn
            </div>
          </div>
        )}
      </div>

      {/* Collapsible Section 2: Hiệu quả phương án kinh doanh (Figma Node 28141:267215) */}
      <div className="rounded-[6px] border border-[#dbdade] bg-white shadow-[0_2px_6px_rgba(47,43,61,0.08)]">
        <button
          onClick={() => setFinancialSectionOpen(!financialSectionOpen)}
          className="flex w-full items-center justify-between p-4 text-left text-[15px] font-bold text-[#2f2b3d] transition-colors hover:bg-slate-50/70"
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
                  <tr className="border-b border-slate-200 text-[#5d586c] text-[12px] h-10">
                    <th className="px-3 py-2 font-semibold w-12">STT</th>
                    <th className="px-3 py-2 font-semibold min-w-[280px]">Nội dung</th>
                    <th className="px-3 py-2 font-semibold text-right w-44">Giá trị trước VAT</th>
                    <th className="px-3 py-2 font-semibold text-right w-40">Thuế VAT</th>
                    <th className="px-3 py-2 font-semibold text-right w-48">Giá trị sau thuế VAT</th>
                    <th className="px-3 py-2 font-semibold w-56">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {/* Row I: DOANH THU DỰ KIẾN */}
                  <tr className="font-bold text-[#2f2b3d] bg-slate-50/50">
                    <td className="px-3 py-3">I</td>
                    <td className="px-3 py-3 uppercase">DOANH THU DỰ KIẾN</td>
                    <td className="px-3 py-3 text-right">17,022,879,000</td>
                    <td className="px-3 py-3 text-right">1,139,875,840</td>
                    <td className="px-3 py-3 text-right">18,162,754,840</td>
                    <td className="px-3 py-2 text-slate-500 font-normal text-[12px]">Chi tiết theo phụ lục 01 đính kèm</td>
                  </tr>

                  {/* Row II: CHI PHÍ */}
                  <tr className="font-bold text-[#2f2b3d] bg-slate-50/50">
                    <td className="px-3 py-3">II</td>
                    <td className="px-3 py-3 uppercase">CHI PHÍ</td>
                    <td className="px-3 py-3 text-right">16,955,279,879</td>
                    <td className="px-3 py-3 text-right">1,203,344,480</td>
                    <td className="px-3 py-3 text-right">18,162,754,840</td>
                    <td className="px-3 py-2 text-slate-500 font-normal text-[12px]">Chi tiết theo phụ lục 02 đính kèm</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 text-slate-700">
                    <td className="px-3 py-2.5 text-center text-slate-500">1</td>
                    <td className="px-3 py-2.5 font-medium pl-6">Chi phí đầu tư mua sắm</td>
                    <td className="px-3 py-2.5 text-right">16,938,257,000</td>
                    <td className="px-3 py-2.5 text-right">1,203,344,480</td>
                    <td className="px-3 py-2.5 text-right font-medium">18,141,601,480</td>
                    <td className="px-3 py-2.5" />
                  </tr>
                  <tr className="hover:bg-slate-50/50 text-slate-700">
                    <td className="px-3 py-2.5 text-center text-slate-500">2</td>
                    <td className="px-3 py-2.5 font-medium pl-6">Chi phí quản lý chung</td>
                    <td className="px-3 py-2.5 text-right">17,022,879</td>
                    <td className="px-3 py-2.5 text-right text-slate-400">-</td>
                    <td className="px-3 py-2.5 text-right font-medium">17,022,879</td>
                    <td className="px-3 py-2.5 text-slate-500 text-[12px]">0,1% doanh thu</td>
                  </tr>

                  {/* Row III: Lợi nhuận trước thuế */}
                  <tr className="font-semibold text-[#2f2b3d]">
                    <td className="px-3 py-3">III</td>
                    <td className="px-3 py-3 font-bold">Lợi nhuận trước thuế = I - II</td>
                    <td className="px-3 py-3 text-right font-bold text-[#3f81ea]">67,599,121</td>
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                  </tr>

                  {/* Row IV: Thuế TNDN (20%) */}
                  <tr className="font-semibold text-[#2f2b3d]">
                    <td className="px-3 py-3">IV</td>
                    <td className="px-3 py-3 font-bold">Thuế TNDN (20%)</td>
                    <td className="px-3 py-3 text-right font-bold text-[#ff4c51]">13,519,824</td>
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                  </tr>

                  {/* Row V: Lợi nhuận sau thuế */}
                  <tr className="font-semibold text-[#2f2b3d]">
                    <td className="px-3 py-3">V</td>
                    <td className="px-3 py-3 font-bold">Lợi nhuận sau thuế</td>
                    <td className="px-3 py-3 text-right font-bold text-[#28c76f]">54,079,297</td>
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                  </tr>

                  {/* Row VI: Tỷ lệ lợi nhuận sau thuế / Chi phí = V / II */}
                  <tr className="font-semibold text-[#2f2b3d]">
                    <td className="px-3 py-3">VI</td>
                    <td className="px-3 py-3 font-bold">Tỷ lệ lợi nhuận sau thuế / Chi phí = V / II</td>
                    <td className="px-3 py-3 text-right font-bold text-[#7367f0]">0,32%</td>
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                  </tr>

                  {/* Row VII: Tỷ lệ lợi nhuận trước thuế / Doanh thu = III / I */}
                  <tr className="font-semibold text-[#2f2b3d]">
                    <td className="px-3 py-3">VII</td>
                    <td className="px-3 py-3 font-bold">Tỷ lệ lợi nhuận trước thuế / Doanh thu = III / I</td>
                    <td className="px-3 py-3 text-right font-bold text-[#ff9f43]">0,32%</td>
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                    <td className="px-3 py-3" />
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-2 text-[13px] text-[#2f2b3d]">
              <strong>Đánh giá:</strong> Tỷ lệ lợi nhuận / chi phí vốn đạt <strong>0,32%</strong> đảm bảo hiệu quả kinh doanh theo quy định của Công ty.
            </div>
          </div>
        )}
      </div>

      {/* Section 3: Phụ lục đính kèm */}
      <div className="rounded-[6px] border border-[#dbdade] bg-white p-5 shadow-[0_2px_6px_rgba(47,43,61,0.08)]">
        <h2 className="mb-4 text-[15px] font-bold text-[#2f2b3d]">
          Phụ lục đính kèm
        </h2>

        <div className="space-y-3">
          {plan.appendices.map((app) => (
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
                  className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-[#3f81ea]"
                  title="Xem tài liệu"
                >
                  <Eye className="size-4" />
                </button>
                <button
                  onClick={() => handleDownloadAppendix(app.name)}
                  className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-[#3f81ea]"
                  title="Tải xuống"
                >
                  <Download className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
