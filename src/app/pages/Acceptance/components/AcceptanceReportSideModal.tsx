import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Download,
  Expand,
  Maximize2,
  Minus,
  Plus,
  RotateCcw,
  X,
} from "lucide-react";
import { toast } from "sonner";

export interface AcceptanceReportItem {
  id: string;
  contractCode: string;
  signDate: string;
  customer: string;
  handoverDoc: string;
  acceptanceDate: string;
  acceptanceValue: number;
}

interface AcceptanceReportSideModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  report: AcceptanceReportItem | null;
}

function formatCurrency(val: number): string {
  return new Intl.NumberFormat("vi-VN").format(val);
}

export function AcceptanceReportSideModal({
  open,
  onOpenChange,
  report,
}: AcceptanceReportSideModalProps) {
  if (!open || !report) return null;

  const [section1Open, setSection1Open] = useState(true);
  const [section2Open, setSection2Open] = useState(true);
  const [zoom, setZoom] = useState(100);
  const [currentPage] = useState(1);
  const [totalPages] = useState(12);

  const handleDownloadPdf = () => {
    toast.success(`Đang tải xuống tài liệu biên bản nghiệm thu ${report.contractCode}.pdf`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-end bg-black/40 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="relative flex h-full w-full max-w-[760px] xl:max-w-[820px] flex-col bg-white shadow-2xl animate-in slide-in-from-right duration-300 border-l border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200/80 px-6 py-4 bg-white">
          <div className="flex items-center gap-2.5">
            <h2 className="text-[16px] font-bold text-[#2f2b3d]">
              Chi tiết Biên bản nghiệm thu
            </h2>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="flex size-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="custom-scrollbar flex-1 overflow-y-auto p-6 space-y-4 bg-[#f8f7fa]">
          {/* Top Document Viewer Box */}
          <div className="relative rounded-[8px] bg-white p-4 shadow-[0_2px_8px_rgba(47,43,61,0.08)] space-y-3">
            {/* Viewer Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => toast.info("Đã làm mới bản xem trước")}
                  className="rounded p-1 hover:bg-slate-100 cursor-pointer"
                  title="Làm mới"
                >
                  <RotateCcw className="size-3.5 text-slate-500" />
                </button>
                <button
                  onClick={() => setZoom((z) => Math.max(50, z - 10))}
                  className="rounded p-1 hover:bg-slate-100 cursor-pointer"
                  title="Thu nhỏ"
                >
                  <Minus className="size-3.5 text-slate-500" />
                </button>
                <div className="relative">
                  <select
                    value={zoom}
                    onChange={(e) => setZoom(Number(e.target.value))}
                    className="h-7 appearance-none rounded-[4px] border border-[#dbdade] bg-white px-2.5 pr-6 text-[11px] outline-none cursor-pointer text-[#2f2b3d]"
                  >
                    <option value={50}>50%</option>
                    <option value={75}>75%</option>
                    <option value={100}>100%</option>
                    <option value={125}>125%</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-1.5 top-1/2 size-3 -translate-y-1/2 text-slate-400" />
                </div>
                <button
                  onClick={() => setZoom((z) => Math.min(200, z + 10))}
                  className="rounded p-1 hover:bg-slate-100 cursor-pointer"
                  title="Phóng to"
                >
                  <Plus className="size-3.5 text-slate-500" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-[11px] text-slate-600">
                  <span className="rounded border border-[#dbdade] bg-white px-2 py-0.5 font-medium">
                    {currentPage}
                  </span>
                  <span>/ {totalPages}</span>
                  <ChevronDown className="size-3 text-slate-400 cursor-pointer" />
                </div>

                <span className="h-4 w-px bg-slate-200" />

                <button
                  onClick={() => toast.info("Mở toàn màn hình")}
                  className="rounded p-1 hover:bg-slate-100 cursor-pointer"
                  title="Toàn màn hình"
                >
                  <Maximize2 className="size-3.5 text-slate-500" />
                </button>

                <button
                  onClick={handleDownloadPdf}
                  className="rounded p-1 hover:bg-slate-100 cursor-pointer"
                  title="Tải xuống PDF"
                >
                  <Download className="size-3.5 text-slate-500" />
                </button>

                <button
                  onClick={() => toast.info("Xem chi tiết")}
                  className="rounded p-1 hover:bg-slate-100 cursor-pointer"
                  title="Mở rộng"
                >
                  <Expand className="size-3.5 text-slate-500" />
                </button>
              </div>
            </div>

            {/* Document Canvas Preview */}
            <div className="relative overflow-hidden">
              <div
                style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
                className="w-full space-y-3.5 bg-white p-2 text-[11px] text-[#2f2b3d] leading-relaxed font-serif"
              >
                {/* Header doc */}
                <div className="flex justify-between font-sans text-center">
                  <div className="text-left">
                    <p className="font-bold text-[10.5px] uppercase text-[#2f2b3d]">
                      CÔNG TY TNHH MTV AN NINH MẠNG VIETTEL
                    </p>
                    <p className="text-[9.5px] text-slate-500 italic">[TÊN ĐƠN VỊ/PHÒNG/TRUNG TÂM]</p>
                    <div className="my-1 w-full border-b border-[#2f2b3d]" />
                    <p className="text-[9.5px] font-semibold text-[#2f2b3d]">Số: [Số]/TTr-[MÃ ĐƠN VỊ]</p>
                    <p className="font-bold text-[10px] uppercase text-[#2f2b3d] mt-1">PHÊ DUYỆT</p>
                    <p className="text-[9px] text-slate-500 italic">Ngày [...] tháng [...] năm [20...]</p>
                    <p className="text-[9.5px] font-bold text-[#2f2b3d] uppercase">[CHỨC DANH NGƯỜI PHÊ DUYỆT]</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[10.5px] uppercase text-[#2f2b3d]">
                      CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                    </p>
                    <p className="text-[9.5px] font-semibold text-[#2f2b3d]">Độc lập - Tự do - Hạnh phúc</p>
                    <div className="my-1 w-full border-b border-[#2f2b3d]" />
                    <p className="text-[9px] italic text-slate-500 mt-1">[ĐỊA DANH], ngày [...] tháng [...] năm [20...]</p>
                  </div>
                </div>

                <div className="text-center font-sans pt-2">
                  <p className="text-[10px] italic text-slate-500">[HỌ VÀ TÊN]</p>
                  <h3 className="text-[13px] font-bold uppercase text-[#2f2b3d] mt-1">TỜ TRÌNH</h3>
                  <p className="text-[11px] font-bold text-[#2f2b3d] uppercase">
                    Về việc đề xuất [MUA SẮM/THUÊ NGOÀI] [TÊN HÀNG HÓA, HỆ THỐNG, PHẦN MỀM HOẶC DỊCH VỤ]
                  </p>
                  <p className="text-[10.5px] font-semibold text-[#2f2b3d] pt-1">
                    Kính gửi: Ban Giám đốc Công ty.
                  </p>
                </div>

                <div className="rounded-[4px] border border-slate-300 bg-slate-50/80 p-2.5 text-[10px] italic text-slate-600 font-sans">
                  <strong>HƯỚNG DẪN SỬ DỤNG:</strong> Thay toàn bộ nội dung trong dấu [ ]; xóa dòng, cột và phụ lục không áp dụng; cập nhật lại tổng tiền, thuế và luồng ký; sau đó xóa hộp hướng dẫn này trước khi trình ký.
                </div>

                <div className="space-y-1 text-[10.5px] text-[#2f2b3d] font-serif leading-normal">
                  <p>Căn cứ <em>[QUY CHẾ/QUYẾT ĐỊNH QUẢN LÝ ĐẦU TƯ, MUA SẮM VÀ SỐ/KÝ HIỆU]</em>;</p>
                  <p>Căn cứ <em>[KẾ HOẠCH/CHỦ TRƯƠNG/DỰ ÁN ĐÃ ĐƯỢC PHÊ DUYỆT]</em>;</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion 1: Thông tin chung */}
          <div className="rounded-[8px] bg-white shadow-[0_2px_8px_rgba(47,43,61,0.08)] overflow-hidden">
            <button
              onClick={() => setSection1Open(!section1Open)}
              className="flex w-full h-[56px] items-center justify-between px-6 text-left font-semibold text-[14px] text-[#2f2b3d] bg-white hover:bg-slate-50/60 transition-colors cursor-pointer"
            >
              <span>Thông tin chung</span>
              {section1Open ? (
                <ChevronDown className="size-4 text-[#8f8d95]" />
              ) : (
                <ChevronRight className="size-4 text-[#8f8d95]" />
              )}
            </button>

            {section1Open && (
              <div className="divide-y divide-slate-100 p-6 pt-2 text-[13px] border-t border-slate-100">
                <div className="grid grid-cols-[240px_1fr] py-2.5">
                  <span className="text-slate-500">Số Hợp đồng</span>
                  <span className="font-semibold text-slate-900">{report.contractCode}</span>
                </div>
                <div className="grid grid-cols-[240px_1fr] py-2.5">
                  <span className="text-slate-500">Ngày ký</span>
                  <span className="font-medium text-slate-900">{report.signDate}</span>
                </div>
                <div className="grid grid-cols-[240px_1fr] py-2.5">
                  <span className="text-slate-500">Khách hàng</span>
                  <span className="font-medium text-slate-900">{report.customer}</span>
                </div>
                <div className="grid grid-cols-[240px_1fr] py-2.5">
                  <span className="text-slate-500">Biên bản bàn giao tài liệu</span>
                  <span className="font-medium text-slate-900">{report.handoverDoc}</span>
                </div>
                <div className="grid grid-cols-[240px_1fr] py-2.5">
                  <span className="text-slate-500">Ngày nghiệm thu</span>
                  <span className="font-medium text-slate-900">{report.acceptanceDate}</span>
                </div>
                <div className="grid grid-cols-[240px_1fr] py-2.5">
                  <span className="text-slate-500">Giá trị nghiệm thu</span>
                  <span className="font-semibold text-[#2f2b3d]">{formatCurrency(report.acceptanceValue)}</span>
                </div>
              </div>
            )}
          </div>

          {/* Accordion 2: Nội dung nghiệm thu */}
          <div className="rounded-[8px] bg-white shadow-[0_2px_8px_rgba(47,43,61,0.08)] overflow-hidden">
            <button
              onClick={() => setSection2Open(!section2Open)}
              className="flex w-full h-[56px] items-center justify-between px-6 text-left font-semibold text-[14px] text-[#2f2b3d] bg-white hover:bg-slate-50/60 transition-colors cursor-pointer"
            >
              <span>Nội dung nghiệm thu</span>
              {section2Open ? (
                <ChevronDown className="size-4 text-[#8f8d95]" />
              ) : (
                <ChevronRight className="size-4 text-[#8f8d95]" />
              )}
            </button>

            {section2Open && (
              <div className="p-6 pt-2 space-y-4 border-t border-slate-100">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[900px] border-collapse text-left text-[13px]">
                    <thead>
                      <tr className="border-b border-slate-200/80 text-[13px]">
                        <th className="px-3 py-3 font-semibold text-[#2f2b3d] text-center w-12">STT</th>
                        <th className="px-3 py-3 font-semibold text-[#2f2b3d] min-w-[220px]">Tên hàng hóa</th>
                        <th className="px-3 py-3 font-semibold text-[#2f2b3d] text-left w-24">Đơn vị tính</th>
                        <th className="px-3 py-3 font-semibold text-[#2f2b3d] text-left w-20">Số lượng</th>
                        <th className="px-3 py-3 font-semibold text-[#2f2b3d] text-right w-28">Đơn giá (VND)</th>
                        <th className="px-3 py-3 font-semibold text-[#2f2b3d] text-right w-32">Thành tiền (VND)</th>
                        <th className="px-3 py-3 font-semibold text-[#2f2b3d] text-center w-24">Thuế GTGT</th>
                        <th className="px-3 py-3 font-semibold text-[#2f2b3d] text-right w-36">Thành tiền sau VAT (VND)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-[13px]">
                      <tr className="text-slate-700 hover:bg-slate-50/50">
                        <td className="px-3 py-3.5 text-center text-slate-500">1</td>
                        <td className="px-3 py-3.5 leading-[18px]">
                          Dịch vụ rà quét, săn tìm mối nguy cơ an ninh mạng thực hiện tập trung
                        </td>
                        <td className="px-3 py-3.5 text-left text-slate-600">Máy chủ</td>
                        <td className="px-3 py-3.5 text-left text-slate-600">2088</td>
                        <td className="px-3 py-3.5 text-right text-slate-600">325.000</td>
                        <td className="px-3 py-3.5 text-right text-slate-900 font-normal">
                          678.600.000
                        </td>
                        <td className="px-3 py-3.5 text-center text-slate-700 font-normal">
                          KCT
                        </td>
                        <td className="px-3 py-3.5 text-right text-slate-900 font-normal">
                          678.600.000
                        </td>
                      </tr>
                      <tr className="font-bold text-[#2f2b3d] border-t border-slate-200">
                        <td colSpan={5} className="px-3 py-3.5 text-center">
                          Tổng tiền
                        </td>
                        <td className="px-3 py-3.5 text-right font-bold">
                          678.600.000
                        </td>
                        <td className="px-3 py-3.5 text-center font-bold text-slate-700">
                          -
                        </td>
                        <td className="px-3 py-3.5 text-right font-bold">
                          678.600.000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[13px] text-[#2f2b3d] pt-1">
                  <strong>Bằng chữ:</strong> Sáu trăm bảy mươi tám triệu sáu trăm nghìn đồng
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Fixed Footer */}
        <div className="flex shrink-0 items-center justify-end border-t border-slate-200/80 px-6 py-4 bg-white">
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-[6px] bg-[#2884ff] hover:bg-[#1a73e8] px-6 py-2 text-[13px] font-medium text-white shadow-2xs transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
