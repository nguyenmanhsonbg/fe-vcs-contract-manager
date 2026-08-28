import { useState } from "react";
import {
  Calendar,
  CheckCheck,
  ChevronDown,
  ChevronRight,
  Download,
  Edit3,
  Expand,
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

  // Accordion open/collapse states (default collapsed as requested and shown in Figma Node 28387:268503)
  const [section1Open, setSection1Open] = useState(false); // Thông tin chung
  const [section2Open, setSection2Open] = useState(false); // Hạng mục đề xuất mua sắm
  const [section3Open, setSection3Open] = useState(false); // Chi tiết nghiệm thu
  const [section4Open, setSection4Open] = useState(false); // Nhật ký gần đây

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
      <div className="relative flex h-full w-full max-w-[740px] xl:max-w-[800px] 2xl:max-w-[860px] flex-col bg-white shadow-2xl transition-transform duration-300 animate-in slide-in-from-right">
        {/* Modal Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200/80 px-6 py-4 bg-white">
          <h2 className="text-[16px] font-semibold text-[#2f2b3d]">
            Chi tiết nghiệm thu theo PAKD
          </h2>
          <button
            onClick={() => onOpenChange(false)}
            className="flex size-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="custom-scrollbar flex-1 overflow-y-auto p-6 space-y-4 bg-[#f8f7fa]">
          {/* Top Document Viewer Box (Matching Figma Node 28392:24231) */}
          <div className="relative rounded-[8px] bg-white p-4 shadow-[0_2px_8px_rgba(47,43,61,0.08)] space-y-3">
            {/* Viewer Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => toast.info("Đã làm mới bản xem trước")}
                  className="rounded p-1 hover:bg-slate-100"
                  title="Làm mới"
                >
                  <RotateCcw className="size-3.5 text-slate-500" />
                </button>
                <button
                  onClick={() => setZoom((z) => Math.max(50, z - 10))}
                  className="rounded p-1 hover:bg-slate-100"
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
                  className="rounded p-1 hover:bg-slate-100"
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
                  className="rounded p-1 hover:bg-slate-100"
                  title="Toàn màn hình"
                >
                  <Maximize2 className="size-3.5 text-slate-500" />
                </button>

                <button
                  onClick={handleDownloadPdf}
                  className="rounded p-1 hover:bg-slate-100"
                  title="Tải xuống PDF"
                >
                  <Download className="size-3.5 text-slate-500" />
                </button>

                <button
                  onClick={() => toast.info("Xem chi tiết")}
                  className="rounded p-1 hover:bg-slate-100"
                  title="Mở rộng"
                >
                  <Expand className="size-3.5 text-slate-500" />
                </button>
              </div>
            </div>

            {/* Document Canvas Preview (Matching Figma Node 28392:24231) */}
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

          {/* ========================================================================= */}
          {/* Accordion 1: Thông tin chung */}
          {/* ========================================================================= */}
          <div className="rounded-[8px] bg-white shadow-[0_2px_8px_rgba(47,43,61,0.08)] overflow-hidden">
            <button
              onClick={() => setSection1Open(!section1Open)}
              className="flex w-full h-[56px] items-center justify-between px-6 text-left font-semibold text-[14px] text-[#2f2b3d] bg-white hover:bg-slate-50/60 transition-colors"
            >
              <span>Thông tin chung</span>
              {section1Open ? (
                <ChevronDown className="size-4 text-[#8f8d95]" />
              ) : (
                <ChevronRight className="size-4 text-[#8f8d95]" />
              )}
            </button>

            {section1Open && (
              <div className="divide-y divide-slate-100 p-6 pt-2 text-xs border-t border-slate-100">
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
          {/* Accordion 2: Hạng mục đề xuất mua sắm (Figma Node 28390:22462) */}
          {/* ========================================================================= */}
          <div className="rounded-[8px] bg-white shadow-[0_2px_8px_rgba(47,43,61,0.08)] overflow-hidden">
            <button
              onClick={() => setSection2Open(!section2Open)}
              className="flex w-full h-[56px] items-center justify-between px-6 text-left font-semibold text-[14px] text-[#2f2b3d] bg-white hover:bg-slate-50/60 transition-colors"
            >
              <span>Hạng mục đề xuất mua sắm</span>
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
                        <th className="px-3 py-3 font-semibold text-[#2f2b3d] text-right w-28">Thuế GTGT</th>
                        <th className="px-3 py-3 font-semibold text-[#2f2b3d] text-right w-36">Thành tiền sau VAT (VND)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-[13px]">
                      {/* Group row I */}
                      <tr className="font-semibold text-[#2f2b3d]">
                        <td className="px-3 py-3.5 text-center">I</td>
                        <td className="px-3 py-3.5">Thiết bị tường lửa: Checkpoint Quantum Force 9400 Plus</td>
                        <td className="px-3 py-3.5 text-left">Bộ</td>
                        <td className="px-3 py-3.5 text-left">26</td>
                        <td className="px-3 py-3.5 text-right">234.640.000</td>
                        <td className="px-3 py-3.5 text-right">6.100.640.000</td>
                        <td className="px-3 py-3.5 text-right">466.022.720</td>
                        <td className="px-3 py-3.5 text-right">6.546.662.720</td>
                      </tr>
                      {/* Sub-item 1 */}
                      <tr className="text-slate-700 hover:bg-slate-50/50">
                        <td className="px-3 py-3.5 text-center text-slate-500">1</td>
                        <td className="px-3 py-3.5 leading-[18px]">
                          Thiết bị tường lửa Checkpoint: Quantum Force 9400 Plus Appliance with 2 Virtual Systems and subscription package For 1 year
                        </td>
                        <td className="px-3 py-3.5 text-left text-slate-600">Chiếc</td>
                        <td className="px-3 py-3.5 text-left text-slate-600">1</td>
                        <td className="px-3 py-3.5 text-right text-slate-600">128.766.000</td>
                        <td className="px-3 py-3.5 text-right text-slate-600">128.766.000</td>
                        <td className="px-3 py-3.5 text-right text-slate-600">8%</td>
                        <td className="px-3 py-3.5 text-right text-slate-600"></td>
                      </tr>
                      {/* Total row */}
                      <tr className="font-bold text-[#2f2b3d] border-t border-slate-200">
                        <td colSpan={5} className="px-3 py-3.5 text-center">
                          Tổng tiền
                        </td>
                        <td className="px-3 py-3.5 text-right font-bold">
                          6.100.640.000
                        </td>
                        <td className="px-3 py-3.5 text-right font-bold">
                          466.022.720
                        </td>
                        <td className="px-3 py-3.5 text-right font-bold">
                          6.546.662.720
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[13px] font-semibold text-[#2f2b3d] pt-1">
                  Bằng chữ: Mười tám tỷ một trăm bốn mươi mốt triệu sáu trăm linh một nghìn bốn trăm tám mươi đồng chẵn
                </p>
              </div>
            )}
          </div>

          {/* ========================================================================= */}
          {/* Accordion 3: Chi tiết nghiệm thu (Figma Node 28474:43523) */}
          {/* ========================================================================= */}
          <div className="rounded-[8px] bg-white shadow-[0_2px_8px_rgba(47,43,61,0.08)] overflow-hidden">
            <button
              onClick={() => setSection3Open(!section3Open)}
              className="flex w-full h-[56px] items-center justify-between px-6 text-left font-semibold text-[14px] text-[#2f2b3d] bg-white hover:bg-slate-50/60 transition-colors"
            >
              <span>Chi tiết nghiệm thu</span>
              {section3Open ? (
                <ChevronDown className="size-4 text-[#8f8d95]" />
              ) : (
                <ChevronRight className="size-4 text-[#8f8d95]" />
              )}
            </button>

            {section3Open && (
              <div className="p-6 pt-2 space-y-3 border-t border-slate-100">
                {/* 3-Level Multi-Header Scrollable Table matching Figma Node 28474:43523 */}
                <div className="overflow-x-auto border border-slate-200 rounded-[6px]">
                  <table className="w-full min-w-[1300px] border-collapse text-left text-[12px]">
                    <thead>
                      {/* Header Row 1 */}
                      <tr className="border-b border-slate-200 text-[12px] font-semibold text-[#2f2b3d]">
                        <th rowSpan={3} className="border-r border-slate-200 px-3 py-2.5 min-w-[280px] align-middle">
                          Hạng mục
                        </th>
                        <th colSpan={2} className="border-r border-slate-200 px-3 py-2 text-center">
                          Phương án kinh doanh
                        </th>
                        <th colSpan={2} className="border-r border-slate-200 px-3 py-2 text-center">
                          Đã nghiệm thu
                        </th>
                        <th colSpan={2} className="border-r border-slate-200 px-3 py-2 text-center">
                          Còn lại
                        </th>
                        <th colSpan={9} className="px-3 py-2 text-center">
                          Chi tiết nghiệm thu theo tháng
                        </th>
                      </tr>

                      {/* Header Row 2 (Months) */}
                      <tr className="border-b border-slate-200 text-[12px] font-semibold text-[#2f2b3d]">
                        <th colSpan={2} className="border-r border-slate-200 p-0"></th>
                        <th colSpan={2} className="border-r border-slate-200 p-0"></th>
                        <th colSpan={2} className="border-r border-slate-200 p-0"></th>
                        <th colSpan={3} className="border-r border-slate-200 px-2 py-1.5 text-center">
                          Tháng 4
                        </th>
                        <th colSpan={3} className="border-r border-slate-200 px-2 py-1.5 text-center">
                          Tháng 5
                        </th>
                        <th colSpan={3} className="px-2 py-1.5 text-center">
                          Tháng 6
                        </th>
                      </tr>

                      {/* Header Row 3 (Column Sub-headers) */}
                      <tr className="border-b border-slate-200 text-[12px] font-semibold text-[#2f2b3d]">
                        {/* PAKD */}
                        <th className="border-r border-slate-200 px-2 py-1.5 text-center w-14">SL</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 text-right w-32">Giá trị (Chưa VAT)</th>

                        {/* Đã nghiệm thu */}
                        <th className="border-r border-slate-200 px-2 py-1.5 text-center w-14">SL</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 text-right w-32">Giá trị (Chưa VAT)</th>

                        {/* Còn lại */}
                        <th className="border-r border-slate-200 px-2 py-1.5 text-center w-14">SL</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 text-right w-32">Giá trị (Chưa VAT)</th>

                        {/* Tháng 4 */}
                        <th className="border-r border-slate-200 px-2 py-1.5 text-center w-28">Số Hợp đồng</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 text-center w-14">SL</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 text-right w-28">Giá trị (Chưa VAT)</th>

                        {/* Tháng 5 */}
                        <th className="border-r border-slate-200 px-2 py-1.5 text-center w-28">Số Hợp đồng</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 text-center w-14">SL</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 text-right w-28">Giá trị (Chưa VAT)</th>

                        {/* Tháng 6 */}
                        <th className="border-r border-slate-200 px-2 py-1.5 text-center w-28">Số Hợp đồng</th>
                        <th className="border-r border-slate-200 px-2 py-1.5 text-center w-14">SL</th>
                        <th className="px-2 py-1.5 text-right w-28">Giá trị (Chưa VAT)</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 text-[12px] text-[#2f2b3d]">
                      {sampleBreakdownRows.map((row) => (
                        <div key={row.id} style={{ display: "contents" }}>
                          {/* Parent Row */}
                          <tr className="hover:bg-slate-50/70">
                            <td className="border-r border-slate-200 px-3 py-3 font-normal text-[#2f2b3d]">
                              <div className="flex items-start gap-2">
                                {row.children && row.children.length > 0 ? (
                                  <button
                                    onClick={() => toggleRowExpand(row.id)}
                                    className="mt-0.5 text-slate-400 hover:text-slate-700"
                                  >
                                    {expandedRows[row.id] ? (
                                      <ChevronDown className="size-3.5 text-[#8f8d95]" />
                                    ) : (
                                      <ChevronRight className="size-3.5 text-[#8f8d95]" />
                                    )}
                                  </button>
                                ) : (
                                  <ChevronRight className="size-3.5 mt-0.5 text-slate-400" />
                                )}
                                <span>{row.category}</span>
                              </div>
                            </td>

                            {/* PAKD */}
                            <td className="border-r border-slate-200 px-2 py-3 text-center">
                              {row.planQty}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-right">
                              {formatCurrency(row.planValue)}
                            </td>

                            {/* Đã nghiệm thu */}
                            <td className="border-r border-slate-200 px-2 py-3 text-center">
                              {row.acceptedQty}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-right">
                              {formatCurrency(row.acceptedValue)}
                            </td>

                            {/* Còn lại */}
                            <td className="border-r border-slate-200 px-2 py-3 text-center">
                              {row.remainingQty || "SL"}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-right">
                              {formatCurrency(row.remainingValue)}
                            </td>

                            {/* Tháng 4 */}
                            <td className="border-r border-slate-200 px-2 py-3 text-center text-[11px]">
                              {row.months.month4?.contractCode || "Số HĐ"}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-center">
                              {row.months.month4?.qty || "SL"}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-right">
                              {row.months.month4?.value ? formatCurrency(row.months.month4.value) : "Giá trị (Chưa VAT)"}
                            </td>

                            {/* Tháng 5 */}
                            <td className="border-r border-slate-200 px-2 py-3 text-center text-[11px]">
                              {row.months.month5?.contractCode || "Số HĐ"}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-center">
                              {row.months.month5?.qty || "SL"}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-right">
                              {row.months.month5?.value ? formatCurrency(row.months.month5.value) : "Giá trị (Chưa VAT)"}
                            </td>

                            {/* Tháng 6 */}
                            <td className="border-r border-slate-200 px-2 py-3 text-center text-[11px]">
                              {row.months.month6?.contractCode || "Số HĐ"}
                            </td>
                            <td className="border-r border-slate-200 px-2 py-3 text-center">
                              {row.months.month6?.qty || "SL"}
                            </td>
                            <td className="px-2 py-3 text-right">
                              {row.months.month6?.value ? formatCurrency(row.months.month6.value) : "Giá trị (Chưa VAT)"}
                            </td>
                          </tr>

                          {/* Sub-rows if expanded */}
                          {row.children &&
                            expandedRows[row.id] &&
                            row.children.map((subRow) => (
                              <tr key={subRow.id} className="hover:bg-slate-50/60 text-slate-700">
                                <td className="border-r border-slate-200 px-3 py-2.5 pl-8">
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
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center">
                                  {subRow.acceptedQty}
                                </td>
                                <td className="border-r border-slate-200 px-2 py-2.5 text-right">
                                  {formatCurrency(subRow.acceptedValue)}
                                </td>

                                {/* Còn lại */}
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center">
                                  {subRow.remainingQty || "SL"}
                                </td>
                                <td className="border-r border-slate-200 px-2 py-2.5 text-right">
                                  {formatCurrency(subRow.remainingValue)}
                                </td>

                                {/* Tháng 4 */}
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center text-[11px]">
                                  {subRow.months.month4?.contractCode || "Số HĐ"}
                                </td>
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center">
                                  {subRow.months.month4?.qty || "SL"}
                                </td>
                                <td className="border-r border-slate-200 px-2 py-2.5 text-right">
                                  {subRow.months.month4?.value ? formatCurrency(subRow.months.month4.value) : "Giá trị (Chưa VAT)"}
                                </td>

                                {/* Tháng 5 */}
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center text-[11px]">
                                  {subRow.months.month5?.contractCode || "Số HĐ"}
                                </td>
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center">
                                  {subRow.months.month5?.qty || "SL"}
                                </td>
                                <td className="border-r border-slate-200 px-2 py-2.5 text-right">
                                  {subRow.months.month5?.value ? formatCurrency(subRow.months.month5.value) : "Giá trị (Chưa VAT)"}
                                </td>

                                {/* Tháng 6 */}
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center text-[11px]">
                                  {subRow.months.month6?.contractCode || "Số HĐ"}
                                </td>
                                <td className="border-r border-slate-200 px-2 py-2.5 text-center">
                                  {subRow.months.month6?.qty || "SL"}
                                </td>
                                <td className="px-2 py-2.5 text-right">
                                  {subRow.months.month6?.value ? formatCurrency(subRow.months.month6.value) : "Giá trị (Chưa VAT)"}
                                </td>
                              </tr>
                            ))}
                        </div>
                      ))}

                      {/* Total Summary Row matching Figma Node 28474:43523 */}
                      <tr className="font-semibold text-[#2f2b3d] border-t border-slate-300">
                        <td className="border-r border-slate-200 px-3 py-3.5 text-center">
                          Tổng cộng
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-center">
                          SL
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-right">
                          Giá trị (Chưa VAT)
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-center">
                          SL
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-right">
                          Giá trị (Chưa VAT)
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-center">
                          SL
                        </td>
                        <td className="border-r border-slate-200 px-2 py-3.5 text-right">
                          Giá trị (Chưa VAT)
                        </td>

                        {/* Month 4, 5, 6 empty cells in total row matching Figma */}
                        <td colSpan={9} className="px-2 py-3.5"></td>
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
          <div className="rounded-[8px] border border-[#dbdade] bg-white overflow-hidden">
            <button
              onClick={() => setSection4Open(!section4Open)}
              className="flex w-full h-[56px] items-center justify-between px-6 text-left font-semibold text-[14px] text-[#2f2b3d] bg-white hover:bg-slate-50/60 transition-colors"
            >
              <span>Nhật ký gần đây</span>
              {section4Open ? (
                <ChevronDown className="size-4 text-[#8f8d95]" />
              ) : (
                <ChevronRight className="size-4 text-[#8f8d95]" />
              )}
            </button>

            {section4Open && (
              <div className="p-5 pt-2 space-y-4 border-t border-slate-100">
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
        <div className="flex shrink-0 items-center justify-end border-t border-slate-200/80 px-6 py-3.5 bg-white">
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-[6px] bg-[#3f81ea] hover:bg-[#3572d4] px-6 py-2 text-[13px] font-medium text-white shadow-2xs transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
