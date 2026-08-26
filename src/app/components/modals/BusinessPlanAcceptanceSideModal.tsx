import { useState } from "react";
import {
  Calendar,
  CheckCheck,
  ChevronDown,
  ChevronRight,
  Download,
  Edit3,
  FileText,
  Maximize2,
  Minimize2,
  Minus,
  Plus,
  RotateCcw,
  X,
  PlusCircle,
  Clock,
  Layers,
} from "lucide-react";
import { BusinessPlanItem, sampleBusinessPlans } from "../../data/businessPlanMock";
import { toast } from "sonner";

interface BusinessPlanAcceptanceSideModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planId?: string;
  plan?: BusinessPlanItem | null;
}

function formatCurrency(val?: number): string {
  if (val === undefined || val === null) return "0";
  return new Intl.NumberFormat("vi-VN").format(val);
}

interface BreakdownMonthRecord {
  contractCode: string;
  qty: number;
  value: number;
}

interface PlanAcceptanceBreakdownRow {
  id: string;
  category: string;
  planQty: number;
  planValue: number;
  acceptedQty: number;
  acceptedValue: number;
  remainingQty: number;
  remainingValue: number;
  months: {
    month4?: BreakdownMonthRecord;
    month5?: BreakdownMonthRecord;
    month6?: BreakdownMonthRecord;
  };
  children?: PlanAcceptanceBreakdownRow[];
}

const sampleBreakdownRows: PlanAcceptanceBreakdownRow[] = [
  {
    id: "cat-1",
    category: "Chi phí thuê ngoài threat hunting 50 máy định kỳ 2 lần từ 01/04/2025 đến 23/06/2025",
    planQty: 500,
    planValue: 999999999999,
    acceptedQty: 999,
    acceptedValue: 850000000000,
    remainingQty: 0,
    remainingValue: 149999999999,
    months: {
      month4: { contractCode: "HD-2025-028", qty: 250, value: 250000000000 },
      month5: { contractCode: "HD-2025-028", qty: 350, value: 300000000000 },
      month6: { contractCode: "HD-2025-028", qty: 399, value: 300000000000 },
    },
    children: [
      {
        id: "cat-1-1",
        category: "Chi phí thuê ngoài threat hunting 50 máy định kỳ 2 lần từ 01/04/2025 đến 23/06/2025",
        planQty: 100,
        planValue: 100000000,
        acceptedQty: 50,
        acceptedValue: 50000000,
        remainingQty: 50,
        remainingValue: 50000000,
        months: {
          month4: { contractCode: "HD-2025-028", qty: 20, value: 20000000 },
          month5: { contractCode: "HD-2025-028", qty: 20, value: 20000000 },
          month6: { contractCode: "HD-2025-028", qty: 10, value: 10000000 },
        },
      },
      {
        id: "cat-1-2",
        category: "Chi phí thuê ngoài threat hunting 50 máy định kỳ 2 lần từ 01/04/2025 đến 23/06/2025",
        planQty: 100,
        planValue: 100000000,
        acceptedQty: 50,
        acceptedValue: 50000000,
        remainingQty: 50,
        remainingValue: 50000000,
        months: {
          month4: { contractCode: "HD-2025-028", qty: 20, value: 20000000 },
          month5: { contractCode: "HD-2025-028", qty: 20, value: 20000000 },
          month6: { contractCode: "HD-2025-028", qty: 10, value: 10000000 },
        },
      },
    ],
  },
  {
    id: "cat-2",
    category: "Chi phí thuê ngoài dịch vụ bảo trì phần mềm 20 máy từ 01/07/2025 đến 31/12/2025",
    planQty: 300,
    planValue: 500000000000,
    acceptedQty: 500,
    acceptedValue: 500000000000,
    remainingQty: 0,
    remainingValue: 0,
    months: {
      month4: { contractCode: "HD-2025-030", qty: 100, value: 100000000000 },
      month5: { contractCode: "HD-2025-030", qty: 200, value: 200000000000 },
      month6: { contractCode: "HD-2025-030", qty: 200, value: 200000000000 },
    },
  },
  {
    id: "cat-3",
    category: "Chi phí thuê ngoài kiểm thử bảo mật cho 10 ứng dụng từ 01/01/2026 đến 30/06/2026",
    planQty: 400,
    planValue: 600000000000,
    acceptedQty: 400,
    acceptedValue: 600000000000,
    remainingQty: 0,
    remainingValue: 0,
    months: {
      month4: { contractCode: "HD-2025-032", qty: 100, value: 150000000000 },
      month5: { contractCode: "HD-2025-032", qty: 150, value: 225000000000 },
      month6: { contractCode: "HD-2025-032", qty: 150, value: 225000000000 },
    },
  },
  {
    id: "cat-4",
    category: "Chi phí thuê ngoài phân tích dữ liệu lớn từ 01/02/2026 đến 31/08/2026",
    planQty: 600,
    planValue: 1200000000000,
    acceptedQty: 300,
    acceptedValue: 600000000000,
    remainingQty: 300,
    remainingValue: 600000000000,
    months: {
      month4: { contractCode: "HD-2025-035", qty: 100, value: 200000000000 },
      month5: { contractCode: "HD-2025-035", qty: 100, value: 200000000000 },
      month6: { contractCode: "HD-2025-035", qty: 100, value: 200000000000 },
    },
  },
];

const sampleSideModalActivities = [
  {
    id: "act-s1",
    title: "Tạo mới hợp đồng HD-2025-028 từ TT-2025-041",
    user: "Nguyễn Văn A",
    time: "18/04/2025 10:23",
    type: "create",
  },
  {
    id: "act-s2",
    title: 'Cập nhật trạng thái sang "Đang thực hiện"',
    user: "Nguyễn Văn A",
    time: "18/04/2025 10:24",
    type: "status",
  },
  {
    id: "act-s3",
    title: "Tải phụ lục hợp đồng HD-2025-028",
    user: "Nguyễn Văn A",
    time: "18/04/2025 10:25",
    type: "upload",
  },
  {
    id: "act-s4",
    title: "Cập nhật trạng thái giao hàng",
    user: "Nguyễn Văn A",
    time: "18/04/2025 14:32",
    type: "delivery",
  },
  {
    id: "act-s5",
    title: "Chỉnh sửa dòng hàng hóa #2",
    user: "Nguyễn Văn A",
    time: "18/04/2025 15:10",
    type: "edit",
  },
];

export function BusinessPlanAcceptanceSideModal({
  open,
  onOpenChange,
  planId = "144/TTr-TTKDMB",
  plan: initialPlan,
}: BusinessPlanAcceptanceSideModalProps) {
  if (!open) return null;

  const currentPlan =
    initialPlan ||
    sampleBusinessPlans.find((p) => p.id === planId) ||
    sampleBusinessPlans[0];

  // Accordion open/collapse states (matching Figma Node 28387:270562)
  const [section1Open, setSection1Open] = useState(true); // Thông tin chung
  const [section2Open, setSection2Open] = useState(true); // Hạng mục đề xuất mua sắm
  const [section3Open, setSection3Open] = useState(true); // Chi tiết nghiệm thu
  const [section4Open, setSection4Open] = useState(true); // Nhật ký gần đây

  // Expanded rows in Section 3 Table
  const [expandedRows, setExpandedRows] = useState<{ [rowId: string]: boolean }>({
    "cat-1": true,
  });

  const toggleRowExpand = (id: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // PDF Viewer controls
  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  const handleDownloadPdf = () => {
    toast.success(`Đang tải tài liệu Phương án kinh doanh ${currentPlan.id}.pdf`);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs transition-opacity duration-200 animate-in fade-in">
      {/* Side Modal Container */}
      <div className="relative flex h-full w-full max-w-[760px] xl:max-w-[880px] 2xl:max-w-[960px] flex-col bg-white shadow-2xl transition-transform duration-300 animate-in slide-in-from-right">
        {/* Modal Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50/70">
          <h2 className="text-base font-bold text-[#2f2b3d]">
            Chi tiết nghiệm thu theo PAKD
          </h2>
          <button
            onClick={() => onOpenChange(false)}
            className="flex size-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="custom-scrollbar flex-1 overflow-y-auto p-6 space-y-6 bg-[#f8f7fa]/60">
          {/* Top Document Viewer Box */}
          <div className="rounded-[8px] border border-slate-200 bg-white p-4 shadow-2xs space-y-3">
            {/* Viewer Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => toast.info("Đã làm mới bản xem trước")}
                  className="rounded p-1 hover:bg-slate-100"
                  title="Làm mới"
                >
                  <RotateCcw className="size-3.5" />
                </button>
                <button
                  onClick={() => setZoom((z) => Math.max(50, z - 10))}
                  className="rounded p-1 hover:bg-slate-100"
                  title="Thu nhỏ"
                >
                  <Minus className="size-3.5" />
                </button>
                <div className="relative">
                  <select
                    value={zoom}
                    onChange={(e) => setZoom(Number(e.target.value))}
                    className="h-7 appearance-none rounded border border-slate-200 bg-white px-2 pr-5 text-[11px] outline-none"
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
                  className="rounded p-1 hover:bg-slate-100"
                  title="Phóng to"
                >
                  <Plus className="size-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-[11px]">
                  <select
                    value={currentPage}
                    onChange={(e) => setCurrentPage(Number(e.target.value))}
                    className="h-7 appearance-none rounded border border-slate-200 bg-white px-2 pr-5 text-[11px] outline-none"
                  >
                    {Array.from({ length: totalPages }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <span>/ {totalPages}</span>
                </div>

                <span className="h-4 w-px bg-slate-200" />

                <button
                  onClick={handleDownloadPdf}
                  className="rounded p-1 hover:bg-slate-100"
                  title="Tải xuống PDF"
                >
                  <Download className="size-3.5" />
                </button>
              </div>
            </div>

            {/* Document Canvas Preview */}
            <div className="custom-scrollbar max-h-[320px] overflow-auto rounded border border-slate-100 bg-slate-100/60 p-4 shadow-inner">
              <div
                style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
                className="mx-auto min-h-[460px] w-full max-w-[500px] space-y-3 rounded bg-white p-6 shadow-sm text-[11px] text-slate-800 leading-relaxed font-serif transition-transform"
              >
                {/* Header doc */}
                <div className="flex justify-between font-sans text-center">
                  <div>
                    <p className="font-bold text-[10px] uppercase text-slate-900">
                      CÔNG TY TNHH MTV AN NINH MẠNG VIETTEL
                    </p>
                    <p className="text-[9px] text-slate-500">[TÊN ĐƠN VỊ/PHÒNG/TRUNG TÂM]</p>
                    <p className="text-[9px] mt-0.5 font-semibold">Số: [Số]/TTr-[MÃ ĐƠN VỊ]</p>
                  </div>
                  <div>
                    <p className="font-bold text-[10px] uppercase text-slate-900">
                      CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                    </p>
                    <p className="text-[9px] font-semibold">Độc lập - Tự do - Hạnh phúc</p>
                    <p className="text-[9px] italic text-slate-500 mt-0.5">[ĐỊA DANH], ngày [...] tháng [...] năm [20...]</p>
                  </div>
                </div>

                <div className="text-center font-sans pt-2">
                  <p className="font-bold text-slate-900 text-[10px] uppercase">PHÊ DUYỆT</p>
                  <p className="text-[9px] text-slate-500 italic">Ngày [...] tháng [...] năm [20...]</p>
                  <p className="text-[9px] font-bold text-slate-900 uppercase mt-0.5">[CHỨC DANH NGƯỜI PHÊ DUYỆT]</p>
                </div>

                <div className="text-center font-sans pt-3">
                  <h3 className="text-xs font-bold uppercase text-slate-900">TỜ TRÌNH</h3>
                  <p className="text-[11px] font-bold text-slate-800 uppercase">
                    Về việc đề xuất [MUA SẮM/THUÊ NGOÀI] [TÊN HÀNG HÓA, HỆ THỐNG, PHẦN MỀM HOẶC DỊCH VỤ]
                  </p>
                  <p className="text-[10px] font-semibold text-slate-900 pt-1">
                    Kính gửi: Ban Giám đốc Công ty.
                  </p>
                </div>

                <div className="rounded border border-slate-300 bg-slate-50 p-2.5 text-[10px] italic text-slate-600 font-sans">
                  <strong>HƯỚNG DẪN SỬ DỤNG:</strong> Thay toàn bộ nội dung trong dấu [ ]; xóa dòng, cột và phụ lục không áp dụng; cập nhật lại tổng tiền, thuế và luồng ký; sau đó xóa hộp hướng dẫn này trước khi trình ký.
                </div>

                <div className="space-y-1.5 text-[10px] text-slate-700 font-serif leading-normal">
                  <p>Căn cứ [QUY CHẾ/QUYẾT ĐỊNH QUẢN LÝ ĐẦU TƯ, MUA SẮM VÀ SỐ/KÝ HIỆU];</p>
                  <p>Căn cứ [KẾ HOẠCH/CHỦ TRƯƠNG/DỰ ÁN ĐÃ ĐƯỢC PHÊ DUYỆT];</p>
                  <p>Nhu cầu phục vụ triển khai phương án kinh doanh {currentPlan.id}.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Accordion 1: Thông tin chung */}
          {/* ========================================================================= */}
          <div className="rounded-[8px] border border-slate-200 bg-white overflow-hidden shadow-2xs">
            <button
              onClick={() => setSection1Open(!section1Open)}
              className="flex w-full items-center justify-between px-5 py-3.5 text-left font-bold text-sm text-[#2f2b3d] bg-slate-50/50 hover:bg-slate-50 transition-colors"
            >
              <span>Thông tin chung</span>
              {section1Open ? (
                <ChevronDown className="size-4 text-slate-500" />
              ) : (
                <ChevronRight className="size-4 text-slate-500" />
              )}
            </button>

            {section1Open && (
              <div className="divide-y divide-slate-100 p-5 pt-2 text-xs">
                <div className="grid grid-cols-[220px_1fr] py-2.5">
                  <span className="text-slate-500">Tên Phương án kinh doanh</span>
                  <span className="font-medium text-slate-900">{currentPlan.title}</span>
                </div>
                <div className="grid grid-cols-[220px_1fr] py-2.5">
                  <span className="text-slate-500">Số Phương án kinh doanh</span>
                  <span className="font-semibold text-slate-900">{currentPlan.code}</span>
                </div>
                <div className="grid grid-cols-[220px_1fr] py-2.5">
                  <span className="text-slate-500">Ngày Phương án kinh doanh</span>
                  <span className="font-medium text-slate-900">{currentPlan.planDate}</span>
                </div>
                <div className="grid grid-cols-[220px_1fr] py-2.5">
                  <span className="text-slate-500">Đối tác</span>
                  <span className="font-medium text-slate-900">{currentPlan.partner}</span>
                </div>
                <div className="grid grid-cols-[220px_1fr] py-2.5">
                  <span className="text-slate-500">Thời gian thực hiện Hợp đồng</span>
                  <span className="font-medium text-slate-900">{currentPlan.executionPeriod}</span>
                </div>
              </div>
            )}
          </div>

          {/* ========================================================================= */}
          {/* Accordion 2: Hạng mục đề xuất mua sắm */}
          {/* ========================================================================= */}
          <div className="rounded-[8px] border border-slate-200 bg-white overflow-hidden shadow-2xs">
            <button
              onClick={() => setSection2Open(!section2Open)}
              className="flex w-full items-center justify-between px-5 py-3.5 text-left font-bold text-sm text-[#2f2b3d] bg-slate-50/50 hover:bg-slate-50 transition-colors"
            >
              <span>Hạng mục đề xuất mua sắm</span>
              {section2Open ? (
                <ChevronDown className="size-4 text-slate-500" />
              ) : (
                <ChevronRight className="size-4 text-slate-500" />
              )}
            </button>

            {section2Open && (
              <div className="p-5 pt-2 space-y-3">
                <div className="overflow-x-auto border border-slate-200 rounded-[6px]">
                  <table className="w-full min-w-[700px] border-collapse text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[11px] text-[#5d586c] uppercase">
                        <th className="px-3 py-2.5 font-semibold text-center w-12">STT</th>
                        <th className="px-3 py-2.5 font-semibold min-w-[200px]">Tên hàng hóa</th>
                        <th className="px-2 py-2.5 font-semibold text-center w-20">Đơn vị tính</th>
                        <th className="px-2 py-2.5 font-semibold text-center w-16">Số lượng</th>
                        <th className="px-3 py-2.5 font-semibold text-right w-28">Đơn giá (VND)</th>
                        <th className="px-3 py-2.5 font-semibold text-right w-32">Thành tiền (VND)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {/* Group row I */}
                      <tr className="bg-slate-50/60 font-semibold text-slate-800">
                        <td className="px-3 py-2 text-center">I</td>
                        <td className="px-3 py-2">Thiết bị tường lửa: Checkpoint Quantum Force 9400 Plus</td>
                        <td className="px-2 py-2 text-center">Bộ</td>
                        <td className="px-2 py-2 text-center">26</td>
                        <td className="px-3 py-2 text-right">234.640.000</td>
                        <td className="px-3 py-2 text-right font-bold">6.100.640.000</td>
                      </tr>
                      {/* Sub-item 1 */}
                      <tr className="text-slate-700 hover:bg-slate-50/50">
                        <td className="px-3 py-2 text-center text-slate-400">1</td>
                        <td className="px-3 py-2 pl-6">
                          Thiết bị tường lửa Checkpoint: Quantum Force 9400 Plus Appliance with 2 Virtual Systems and subscription package For 1 year
                        </td>
                        <td className="px-2 py-2 text-center text-slate-500">Chiếc</td>
                        <td className="px-2 py-2 text-center">1</td>
                        <td className="px-3 py-2 text-right">128.766.000</td>
                        <td className="px-3 py-2 text-right font-medium">128.766.000</td>
                      </tr>
                      {/* Total row */}
                      <tr className="bg-slate-100/80 font-bold text-slate-900 border-t border-slate-200">
                        <td colSpan={5} className="px-3 py-2.5 text-center uppercase tracking-wide">
                          Tổng tiền
                        </td>
                        <td className="px-3 py-2.5 text-right text-[#ff4c51] font-bold">
                          6.100.640.000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[11px] italic text-slate-600">
                  Bằng chữ: <strong>Mười tám tỷ một trăm bốn mươi mốt triệu sáu trăm linh một nghìn bốn trăm tám mươi đồng chẵn</strong>
                </p>
              </div>
            )}
          </div>

          {/* ========================================================================= */}
          {/* Accordion 3: Chi tiết nghiệm thu (Table Multi-Columns with Horizontal Scroll) */}
          {/* ========================================================================= */}
          <div className="rounded-[8px] border border-slate-200 bg-white overflow-hidden shadow-2xs">
            <button
              onClick={() => setSection3Open(!section3Open)}
              className="flex w-full items-center justify-between px-5 py-3.5 text-left font-bold text-sm text-[#2f2b3d] bg-slate-50/50 hover:bg-slate-50 transition-colors"
            >
              <span>Chi tiết nghiệm thu</span>
              {section3Open ? (
                <ChevronDown className="size-4 text-slate-500" />
              ) : (
                <ChevronRight className="size-4 text-slate-500" />
              )}
            </button>

            {section3Open && (
              <div className="p-5 pt-2 space-y-3">
                {/* Multi-Header Scrollable Table matching Node 28474:43523 */}
                <div className="overflow-x-auto border border-slate-200 rounded-[6px]">
                  <table className="w-full min-w-[1300px] border-collapse text-left text-xs">
                    <thead>
                      {/* Header Row 1 */}
                      <tr className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wider text-[#5d586c]">
                        <th rowSpan={2} className="border-r border-slate-200 px-3 py-2.5 font-semibold min-w-[280px]">
                          Hạng mục
                        </th>
                        <th colSpan={2} className="border-r border-slate-200 px-3 py-2 font-semibold text-center bg-slate-100/70">
                          Phương án kinh doanh
                        </th>
                        <th colSpan={2} className="border-r border-slate-200 px-3 py-2 font-semibold text-center bg-[#e8f9ee]/60 text-[#28c76f]">
                          Đã nghiệm thu
                        </th>
                        <th colSpan={2} className="border-r border-slate-200 px-3 py-2 font-semibold text-center bg-slate-100/70">
                          Còn lại
                        </th>
                        <th colSpan={9} className="px-3 py-2 font-semibold text-center bg-[#e8f4fd]/60 text-[#3f81ea]">
                          Chi tiết nghiệm thu theo tháng
                        </th>
                      </tr>

                      {/* Header Row 2 */}
                      <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] text-[#5d586c]">
                        {/* PAKD */}
                        <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-14">SL</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-right w-32">Giá trị (Chưa VAT)</th>

                        {/* Đã nghiệm thu */}
                        <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-14 text-[#28c76f]">SL</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-right w-32 text-[#28c76f]">Giá trị (Chưa VAT)</th>

                        {/* Còn lại */}
                        <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-14">SL</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-right w-32">Giá trị (Chưa VAT)</th>

                        {/* Tháng 4 */}
                        <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-28 text-[#3f81ea]">Tháng 4 (Số HĐ)</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-14 text-[#3f81ea]">SL</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-right w-28 text-[#3f81ea]">Giá trị (Chưa VAT)</th>

                        {/* Tháng 5 */}
                        <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-28 text-[#3f81ea]">Tháng 5 (Số HĐ)</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-14 text-[#3f81ea]">SL</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-right w-28 text-[#3f81ea]">Giá trị (Chưa VAT)</th>

                        {/* Tháng 6 */}
                        <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-28 text-[#3f81ea]">Tháng 6 (Số HĐ)</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 font-semibold text-center w-14 text-[#3f81ea]">SL</th>
                        <th className="px-2 py-1.5 font-semibold text-right w-28 text-[#3f81ea]">Giá trị (Chưa VAT)</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200">
                      {sampleBreakdownRows.map((row) => (
                        <div key={row.id} style={{ display: "contents" }}>
                          {/* Parent Row */}
                          <tr className="hover:bg-slate-50/70 text-slate-700">
                            <td className="border-r border-slate-200 px-3 py-3 font-medium text-[#2f2b3d]">
                              <div className="flex items-start gap-2">
                                {row.children && row.children.length > 0 ? (
                                  <button
                                    onClick={() => toggleRowExpand(row.id)}
                                    className="mt-0.5 text-slate-400 hover:text-slate-700"
                                  >
                                    {expandedRows[row.id] ? (
                                      <ChevronDown className="size-3.5" />
                                    ) : (
                                      <ChevronRight className="size-3.5" />
                                    )}
                                  </button>
                                ) : (
                                  <ChevronRight className="size-3.5 mt-0.5 text-slate-300" />
                                )}
                                <span>{row.category}</span>
                              </div>
                            </td>

                            {/* PAKD */}
                            <td className="border-r border-slate-200 px-2 py-3 text-center font-medium">
                              {row.planQty}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-right font-medium">
                              {formatCurrency(row.planValue)}
                            </td>

                            {/* Đã nghiệm thu */}
                            <td className="border-r border-slate-200 px-2 py-3 text-center font-medium text-[#28c76f]">
                              {row.acceptedQty}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-right font-medium text-[#28c76f]">
                              {formatCurrency(row.acceptedValue)}
                            </td>

                            {/* Còn lại */}
                            <td className="border-r border-slate-200 px-2 py-3 text-center font-medium text-slate-700">
                              {row.remainingQty}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-right font-medium text-slate-700">
                              {formatCurrency(row.remainingValue)}
                            </td>

                            {/* Tháng 4 */}
                            <td className="border-r border-slate-200 px-2 py-3 text-center text-[#3f81ea] font-medium text-[11px]">
                              {row.months.month4?.contractCode || "—"}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-center text-[#3f81ea]">
                              {row.months.month4?.qty || 0}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-right text-[#3f81ea]">
                              {formatCurrency(row.months.month4?.value || 0)}
                            </td>

                            {/* Tháng 5 */}
                            <td className="border-r border-slate-200 px-2 py-3 text-center text-[#3f81ea] font-medium text-[11px]">
                              {row.months.month5?.contractCode || "—"}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-center text-[#3f81ea]">
                              {row.months.month5?.qty || 0}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-right text-[#3f81ea]">
                              {formatCurrency(row.months.month5?.value || 0)}
                            </td>

                            {/* Tháng 6 */}
                            <td className="border-r border-slate-200 px-2 py-3 text-center text-[#3f81ea] font-medium text-[11px]">
                              {row.months.month6?.contractCode || "—"}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-center text-[#3f81ea]">
                              {row.months.month6?.qty || 0}
                            </td>
                            <td className="px-2 py-3 text-right text-[#3f81ea]">
                              {formatCurrency(row.months.month6?.value || 0)}
                            </td>
                          </tr>

                          {/* Sub-rows if expanded */}
                          {row.children &&
                            expandedRows[row.id] &&
                            row.children.map((subRow) => (
                              <tr key={subRow.id} className="bg-slate-50/40 hover:bg-slate-50 text-slate-600">
                                <td className="border-r border-slate-200 px-3 py-2.5 pl-8 text-slate-600">
                                  {subRow.category}
                                </td>

                                {/* PAKD */}
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center">
                                  {subRow.planQty}
                                </td>
                                <td className="border-r border-slate-200 px-2 py-2.5 text-right">
                                  {formatCurrency(subRow.planValue)}
                                </td>

                                {/* Đã NT */}
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center text-[#28c76f]">
                                  {subRow.acceptedQty}
                                </td>
                                <td className="border-r border-slate-200 px-2 py-2.5 text-right text-[#28c76f]">
                                  {formatCurrency(subRow.acceptedValue)}
                                </td>

                                {/* Còn lại */}
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center">
                                  {subRow.remainingQty}
                                </td>
                                <td className="border-r border-slate-200 px-2 py-2.5 text-right">
                                  {formatCurrency(subRow.remainingValue)}
                                </td>

                                {/* Tháng 4 */}
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center text-[11px] text-slate-500">
                                  {subRow.months.month4?.contractCode || "—"}
                                </td>
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center">
                                  {subRow.months.month4?.qty || 0}
                                </td>
                                <td className="border-r border-slate-200 px-2 py-2.5 text-right">
                                  {formatCurrency(subRow.months.month4?.value || 0)}
                                </td>

                                {/* Tháng 5 */}
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center text-[11px] text-slate-500">
                                  {subRow.months.month5?.contractCode || "—"}
                                </td>
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center">
                                  {subRow.months.month5?.qty || 0}
                                </td>
                                <td className="border-r border-slate-200 px-2 py-2.5 text-right">
                                  {formatCurrency(subRow.months.month5?.value || 0)}
                                </td>

                                {/* Tháng 6 */}
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center text-[11px] text-slate-500">
                                  {subRow.months.month6?.contractCode || "—"}
                                </td>
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center">
                                  {subRow.months.month6?.qty || 0}
                                </td>
                                <td className="px-2 py-2.5 text-right">
                                  {formatCurrency(subRow.months.month6?.value || 0)}
                                </td>
                              </tr>
                            ))}
                        </div>
                      ))}

                      {/* Total Summary Row matching Figma */}
                      <tr className="bg-slate-100/90 font-bold text-[#2f2b3d] border-t-2 border-slate-300">
                        <td className="border-r border-slate-200 px-3 py-3.5 text-center uppercase tracking-wide">
                          Tổng cộng
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-center">
                          1.800
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-right font-bold">
                          3.299.999.999.999
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-center text-[#28c76f]">
                          2.199
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-right font-bold text-[#28c76f]">
                          2.550.000.000.000
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-center">
                          300
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-right font-bold text-slate-800">
                          749.999.999.999
                        </td>

                        {/* Month 4 total */}
                        <td className="border-r border-slate-200 px-2 py-3.5 text-center text-[#3f81ea] font-medium">—</td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-center text-[#3f81ea]">550</td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-right text-[#3f81ea]">
                          700.000.000.000
                        </td>

                        {/* Month 5 total */}
                        <td className="border-r border-slate-200 px-2 py-3.5 text-center text-[#3f81ea] font-medium">—</td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-center text-[#3f81ea]">800</td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-right text-[#3f81ea]">
                          925.000.000.000
                        </td>

                        {/* Month 6 total */}
                        <td className="border-r border-slate-200 px-2 py-3.5 text-center text-[#3f81ea] font-medium">—</td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-center text-[#3f81ea]">849</td>
                        <td className="px-2 py-3.5 text-right text-[#3f81ea]">
                          925.000.000.000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* ========================================================================= */}
          {/* Accordion 4: Nhật ký gần đây */}
          {/* ========================================================================= */}
          <div className="rounded-[8px] border border-slate-200 bg-white overflow-hidden shadow-2xs">
            <button
              onClick={() => setSection4Open(!section4Open)}
              className="flex w-full items-center justify-between px-5 py-3.5 text-left font-bold text-sm text-[#2f2b3d] bg-slate-50/50 hover:bg-slate-50 transition-colors"
            >
              <span>Nhật ký gần đây</span>
              {section4Open ? (
                <ChevronDown className="size-4 text-slate-500" />
              ) : (
                <ChevronRight className="size-4 text-slate-500" />
              )}
            </button>

            {section4Open && (
              <div className="p-5 pt-2 space-y-4">
                <div className="space-y-4 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  {sampleSideModalActivities.map((act) => (
                    <div key={act.id} className="flex items-start gap-3 relative">
                      <div
                        className={`size-7 rounded-full flex items-center justify-center shrink-0 z-10 ${
                          act.type === "create"
                            ? "bg-[#e8f9ee] text-[#28c76f]"
                            : act.type === "status"
                            ? "bg-[#e8f4fd] text-[#3f81ea]"
                            : act.type === "upload"
                            ? "bg-[#e0f7fa] text-[#00bad1]"
                            : act.type === "delivery"
                            ? "bg-[#e8f4fd] text-[#3f81ea]"
                            : "bg-[#fff5e8] text-[#ff9f43]"
                        }`}
                      >
                        {act.type === "create" ? (
                          <PlusCircle className="size-3.5" />
                        ) : act.type === "status" ? (
                          <CheckCheck className="size-3.5" />
                        ) : act.type === "upload" ? (
                          <Download className="size-3.5" />
                        ) : act.type === "delivery" ? (
                          <Layers className="size-3.5" />
                        ) : (
                          <Edit3 className="size-3.5" />
                        )}
                      </div>

                      <div className="text-xs min-w-0 flex-1 pt-0.5 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-slate-800">{act.title}</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">{act.user}</p>
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono shrink-0">
                          {act.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Fixed Footer */}
        <div className="flex shrink-0 items-center justify-end border-t border-slate-200 px-6 py-3 bg-white">
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-[6px] bg-[#3f81ea] px-6 py-2 text-xs font-semibold text-white shadow-2xs hover:bg-[#326cc7] transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
