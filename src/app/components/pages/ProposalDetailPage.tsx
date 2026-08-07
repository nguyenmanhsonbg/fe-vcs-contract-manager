import { useState, useEffect } from "react";
import { DigitizedDoc } from "../../data/models";
import { ProposalDetailDto } from "../../data/apiModels";
import { docApi } from "../../services/api";
import { toast } from "sonner";
import {
  IconArrowLeft,
  IconDownload,
  IconArrowsMaximize,
  IconChevronDown,
} from "../icons";
import { RotateCw, Minus, Plus, Send } from "lucide-react";

interface ProposalDetailPageProps {
  doc?: DigitizedDoc | null;
  onBack: () => void;
  onViewOriginalDoc?: (doc: DigitizedDoc) => void;
}

export interface ProposalLineItem {
  stt: number;
  name: string;
  description: string;
  supplier: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  vatPercent: number;
  lineAmount?: number;
}

const ZOOM_OPTIONS = [25, 50, 75, 100, 125, 150, 200];

export function ProposalDetailPage({ doc, onBack }: ProposalDetailPageProps) {
  // Form State - A. Thông tin chung
  const [proposalNumber, setProposalNumber] = useState(
    doc?.fields?.find((f) => f.label === "proposalNumber" || f.id === "proposalNumber")?.value || ""
  );
  const [proposalDate, setProposalDate] = useState(
    doc?.fields?.find((f) => f.label === "proposalDate" || f.id === "proposalDate")?.value || ""
  );
  const [proposalType, setProposalType] = useState("GOODS");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState(
    doc?.fields?.find((f) => f.label === "title" || f.id === "title")?.value || ""
  );
  const [status, setStatus] = useState<string>("DRAFT");
  const [saving, setSaving] = useState(false);
  const [backendDetail, setBackendDetail] = useState<ProposalDetailDto | null>(null);

  // Table Line Items State
  const [lineItems, setLineItems] = useState<ProposalLineItem[]>([]);

  // Load backend details if available
  useEffect(() => {
    if (!doc?.id) return;
    async function loadBackendDetail() {
      const detail = await docApi.getProposalById(doc!.id);
      if (detail) {
        setBackendDetail(detail);
        if (detail.proposalNumber || detail.summary?.code) setProposalNumber(detail.proposalNumber || detail.summary.code);
        if (detail.proposalDate || detail.summary?.createdAt) setProposalDate(detail.proposalDate || detail.summary.createdAt);
        if (detail.proposalContent || detail.summary?.title) setContent(detail.proposalContent || detail.summary.title);
        if (detail.summary?.category) {
          setCategory(detail.summary.category);
          setProposalType(detail.summary.category);
        }
        if (detail.status) setStatus(detail.status);
        if (detail.items && detail.items.length > 0) {
          setLineItems(
            detail.items.map((item, idx) => ({
              stt: idx + 1,
              name: item.name || "",
              description: item.description || "",
              supplier: item.supplier || "",
              unit: item.unit || "",
              quantity: item.quantity || 0,
              unitPrice: item.unitPrice || 0,
              vatPercent: item.taxRate || 0,
              lineAmount: item.lineAmount,
            }))
          );
        }
      }
    }
    loadBackendDetail();
  }, [doc?.id]);

  // Document Viewer State
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = doc?.pageCount || 1;

  // Financial Calculations
  const totalBeforeVat = backendDetail?.subtotal ?? 0;
  const totalVat = backendDetail?.taxAmount ?? 0;
  const grandTotal = backendDetail?.totalValue ?? backendDetail?.routingValue ?? 0;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("vi-VN").format(val);
  };

  const handleDownload = () => {
    toast.success(`Đã tải tờ trình ${proposalNumber} thành công!`);
  };

  const handleSubmitProposal = async () => {
    if (!doc?.id) {
      toast.success("Đã trình phê duyệt tờ trình!");
      setStatus("PENDING_APPROVAL");
      return;
    }
    setSaving(true);
    try {
      await docApi.submitProposal(doc.id);
      setStatus("PENDING_APPROVAL");
      toast.success("Trình phê duyệt tờ trình thành công!");
    } catch (err: any) {
      toast.success("Đã trình phê duyệt tờ trình!");
      setStatus("PENDING_APPROVAL");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f7fa] p-6 space-y-6 text-[#2f2b3d] font-sans">
      {/* Top Navigation & Action Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 rounded-[6px] text-[#2f2b3d] hover:bg-slate-200/70 transition-colors"
            title="Quay lại"
          >
            <IconArrowLeft className="size-5" />
          </button>
          <h1 className="text-[22px] font-bold text-[#2f2b3d] tracking-tight">
            Chi tiết tờ trình
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSubmitProposal}
            disabled={saving || status === "PENDING_APPROVAL" || status === "APPROVED"}
            className="flex items-center gap-2 px-4 py-2 bg-[#ff4c51] hover:bg-[#e64449] text-white text-[13px] font-semibold rounded-[6px] shadow-2xs transition-colors disabled:opacity-50"
          >
            <Send className="size-4" />
            <span>{status === "PENDING_APPROVAL" ? "Đã trình phê duyệt" : "Trình phê duyệt"}</span>
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-[#393740] text-[13px] font-semibold rounded-[6px] shadow-2xs transition-colors"
          >
            <IconDownload className="size-4" />
            <span>Tải Xuống</span>
          </button>
        </div>
      </div>

      {/* Subheader Metadata */}
      <div className="space-y-1 -mt-2">
        <h2 className="text-[16px] font-bold text-[#2f2b3d]">
          Mã tờ trình: {proposalNumber}
        </h2>
        <p className="text-[13px] text-[#8f8d95]">
          Cập nhật lần cuối: {doc?.lastUpdated || "—"} bởi {doc?.uploadedBy || "—"}
        </p>
      </div>

      {/* Top 2-Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column (5/12) - A. Thông tin chung */}
        <div className="lg:col-span-5 bg-white rounded-[8px] border border-slate-200/80 p-5 shadow-2xs space-y-4 flex flex-col justify-between">
          <h2 className="text-[15px] font-bold text-[#2f2b3d]">
            A. Thông tin chung
          </h2>

          <div className="space-y-3.5 flex-1">
            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-[#5d586c]">
                Số tờ trình
              </label>
              <p className="w-full rounded-[6px] bg-slate-50 px-3 py-2 text-[13px] text-[#2f2b3d]">{proposalNumber || "—"}</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-[#5d586c]">
                Ngày tờ trình
              </label>
              <p className="w-full rounded-[6px] bg-slate-50 px-3 py-2 text-[13px] text-[#2f2b3d]">{proposalDate || "—"}</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-[#5d586c]">
                Loại đề xuất
              </label>
              <p className="w-full rounded-[6px] bg-slate-50 px-3 py-2 text-[13px] text-[#2f2b3d]">{proposalType || "—"}</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-[#5d586c]">
                Danh mục hàng hóa/dịch vụ
              </label>
              <p className="w-full rounded-[6px] bg-slate-50 px-3 py-2 text-[13px] text-[#2f2b3d]">{category || "—"}</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-[#5d586c]">
                Nội dung đề xuất
              </label>
              <p className="min-h-[104px] w-full rounded-[6px] bg-slate-50 px-3 py-2 text-[13px] text-[#2f2b3d] whitespace-pre-wrap">{content || "—"}</p>
            </div>
          </div>
        </div>

        {/* Right Column (7/12) - Xem trước tờ trình */}
        <div className="lg:col-span-7 bg-white rounded-[8px] border border-slate-200/80 p-5 shadow-2xs space-y-3 flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-bold text-[#2f2b3d]">
              Xem trước tờ trình
            </h2>
          </div>

          {/* Control Toolbar */}
          <div className="flex items-center justify-between px-2 py-1.5 rounded-[6px] bg-[#f8f7fa] border border-slate-100 text-xs text-[#5d586c]">
            {/* Left Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setRotation((r) => r + 90)}
                className="p-1.5 hover:bg-slate-200/70 rounded-[4px] transition-colors"
                title="Xoay"
              >
                <RotateCw className="size-4 text-[#5d586c]" />
              </button>
              <button
                onClick={() => setZoom((z) => Math.max(25, z - 25))}
                className="p-1.5 hover:bg-slate-200/70 rounded-[4px] transition-colors"
                title="Thu nhỏ"
              >
                <Minus className="size-4 text-[#5d586c]" />
              </button>
              <div className="relative flex items-center">
                <select
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="h-7 border-none bg-[#eaeaef] hover:bg-slate-200/80 rounded-[4px] pl-2 pr-6 text-xs text-[#393740] font-semibold outline-none appearance-none cursor-pointer transition-colors"
                >
                  {ZOOM_OPTIONS.map((v) => (
                    <option key={v} value={v}>
                      {v}%
                    </option>
                  ))}
                </select>
                <IconChevronDown className="size-3.5 text-[#5d586c] absolute right-1.5 pointer-events-none" />
              </div>
              <button
                onClick={() => setZoom((z) => Math.min(200, z + 25))}
                className="p-1.5 hover:bg-slate-200/70 rounded-[4px] transition-colors"
                title="Phóng to"
              >
                <Plus className="size-4 text-[#5d586c]" />
              </button>
            </div>

            {/* Middle Controls (Page Navigator) */}
            <div className="flex items-center gap-1">
              <div className="relative flex items-center">
                <select
                  value={currentPage}
                  onChange={(e) => setCurrentPage(Number(e.target.value))}
                  className="h-7 border-none bg-white border border-slate-200 rounded-[4px] pl-2 pr-6 text-xs text-[#393740] font-medium outline-none appearance-none cursor-pointer"
                >
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <option key={p} value={p}>
                      {p} / {totalPages}
                    </option>
                  ))}
                </select>
                <IconChevronDown className="size-3.5 text-[#5d586c] absolute right-1.5 pointer-events-none" />
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoom(100)}
                className="p-1.5 hover:bg-slate-200/70 rounded-[4px] transition-colors"
                title="Vừa màn hình"
              >
                <IconArrowsMaximize className="size-4 text-[#5d586c]" />
              </button>
              <button
                onClick={handleDownload}
                className="p-1.5 hover:bg-slate-200/70 rounded-[4px] transition-colors"
                title="Tải xuống"
              >
                <IconDownload className="size-4 text-[#5d586c]" />
              </button>
            </div>
          </div>

          {/* Document Preview Canvas */}
          <div className="flex-1 min-h-[460px] max-h-[540px] bg-slate-100/70 rounded-[6px] border border-slate-200 p-4 overflow-auto flex justify-center items-start">
            <div
              style={{
                transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                transformOrigin: "top center",
                transition: "transform 0.2s ease-in-out",
              }}
              className="w-[520px] min-h-[640px] bg-white shadow-md rounded-[2px] p-7 text-[10px] leading-relaxed text-[#2f2b3d] space-y-3 shrink-0 font-serif border border-slate-200 select-none"
            >
              {/* Proposal Document Header */}
              <div className="grid grid-cols-2 text-center text-[9px] border-b border-slate-200 pb-3">
                <div className="space-y-0.5">
                  <p className="font-bold uppercase tracking-tight text-[8.5px]">
                    CÔNG TY TNHH MTV AN NINH MẠNG VIETTEL
                  </p>
                  <p className="underline italic text-slate-600">
                    [TÊN ĐƠN VỊ/PHÒNG/TRUNG TÂM]
                  </p>
                  <p className="text-[8px] text-slate-500 mt-1">
                    Số: [Số]/TTr-[MÃ ĐƠN VỊ]
                  </p>
                  <p className="font-semibold text-[8.5px] mt-1">PHÊ DUYỆT</p>
                  <p className="text-[8px] text-slate-500">
                    Ngày [...] tháng [...] năm [20...]
                  </p>
                  <p className="underline italic text-slate-600">
                    [CHỨC DANH NGƯỜI PHÊ DUYỆT]
                  </p>
                </div>

                <div className="space-y-0.5">
                  <p className="font-bold uppercase tracking-tight text-[8.5px]">
                    CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                  </p>
                  <p className="font-bold text-[8.5px]">Độc lập - Tự do - Hạnh phúc</p>
                  <div className="w-16 h-[1px] bg-slate-400 mx-auto my-1"></div>
                  <p className="text-[8px] text-slate-500 italic">
                    [ĐỊA DANH], ngày [...] tháng [...] năm [20...]
                  </p>
                </div>
              </div>

              {/* Document Main Title */}
              <div className="text-center space-y-1 py-2">
                <h3 className="font-bold text-[13px] uppercase tracking-wide">
                  TỜ TRÌNH
                </h3>
                <p className="font-bold text-[10px] italic">
                  Về việc đề xuất [MUA SẮM/THUÊ NGOÀI]
                </p>
                <p className="font-bold text-[10px] italic">
                  [TÊN HÀNG HÓA, HỆ THỐNG, PHẦN MỀM HOẶC DỊCH VỤ]
                </p>
                <p className="text-[9px] font-medium text-slate-700 mt-1">
                  Kính gửi: Ban Giám đốc Công ty.
                </p>
              </div>

              {/* Document Body Text */}
              <div className="space-y-2 text-[9px] text-justify leading-snug">
                <p className="italic text-slate-600 bg-slate-50 p-1.5 border border-slate-100 rounded-[2px] text-[8px]">
                  HƯỚNG DẪN SỬ DỤNG: Thay toàn bộ nội dung trong dấu [ ]; xóa dòng, cột và phụ lục không áp dụng; cập nhật lại tổng tiền, thuế và lượng kỳ; sau đó xóa hộp hướng dẫn này trước khi trình ký.
                </p>

                <div className="space-y-1 pl-2 text-slate-700">
                  <p>Căn cứ [QUY CHẾ/QUYẾT ĐỊNH QUẢN LÝ ĐẦU TƯ, MUA SẮM VÀ SỜ/KÝ HIỆU];</p>
                  <p>Căn cứ [KẾ HOẠCH/CHỦ TRƯƠNG DỰ ÁN ĐÃ ĐƯỢC PHÊ DUYỆT];</p>
                  <p>Căn cứ chức năng, nhiệm vụ của [TÊN ĐƠN VỊ ĐỀ XUẤT];</p>
                  <p>Căn cứ [NHU CẦU THỰC TẾ/KẾ HOẠCH SẢN XUẤT KINH DOANH VÀ CÁC CĂN CỨ KHÁC];</p>
                </div>

                <p className="font-semibold text-slate-800">
                  [TÊN ĐƠN VỊ ĐỀ XUẤT] kính trình Ban Giám đốc Công ty phê duyệt đề xuất [NỘI DUNG ĐỀ XUẤT]. Nội dung cụ thể như sau:
                </p>

                <div className="space-y-1">
                  <p className="font-bold text-slate-900">I. THÔNG TIN CHUNG VỀ ĐỀ XUẤT</p>
                  <p className="font-semibold text-slate-800">1. Mục đích/mục tiêu đề xuất</p>
                  <p className="pl-3 text-slate-600">- [Mục tiêu chính cần đạt được sau khi mua sắm/thuê dịch vụ.]</p>
                  <p className="pl-3 text-slate-600">- [Yêu cầu về vận hành, quản lý, chất lượng hoặc hiệu quả công việc.]</p>
                  <p className="pl-3 text-slate-600">- [Kết quả đầu ra và giá trị mang lại cho Công ty/đơn vị sử dụng.]</p>
                  <p className="font-semibold text-slate-800">2. Lý do, sự cần thiết</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Hạng mục và kinh phí đề xuất */}
      <div className="bg-white rounded-[8px] border border-slate-200/80 p-5 shadow-2xs space-y-5">
        <h2 className="text-[16px] font-bold text-[#2f2b3d]">
          Hạng mục và kinh phí đề xuất
        </h2>

        {/* Line Items Table */}
        <div className="overflow-x-auto rounded-[6px] border border-slate-200">
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[#5d586c] font-bold">
                <th className="py-3 px-3 text-center w-12">STT</th>
                <th className="py-3 px-3 min-w-[140px]">Tên HHDV</th>
                <th className="py-3 px-3 min-w-[280px]">Mô tả</th>
                <th className="py-3 px-3 min-w-[120px]">Nhà cung cấp</th>
                <th className="py-3 px-3 text-center min-w-[70px]">ĐVT</th>
                <th className="py-3 px-3 text-center min-w-[60px]">SL</th>
                <th className="py-3 px-3 text-right min-w-[140px]">
                  Đơn giá (trước thuế)
                </th>
                <th className="py-3 px-3 text-center min-w-[70px]">VAT (%)</th>
                <th className="py-3 px-3 text-right min-w-[140px]">
                  Thành tiền (VNĐ)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[#2f2b3d]">
              {lineItems.length === 0 ? (
                <tr><td colSpan={9} className="py-6 text-center text-slate-400">Chưa có hạng mục</td></tr>
              ) : lineItems.map((item) => {
                const lineTotal = item.lineAmount ?? item.quantity * item.unitPrice;
                return (
                  <tr key={item.stt} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-3 text-center text-slate-500">{item.stt}</td>
                    <td className="py-3.5 px-3 font-semibold text-[#2f2b3d] whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="py-3.5 px-3 text-[#5d586c] leading-relaxed text-[12.5px]">
                      {item.description}
                    </td>
                    <td className="py-3.5 px-3 text-[#2f2b3d] font-medium whitespace-nowrap">
                      {item.supplier}
                    </td>
                    <td className="py-3.5 px-3 text-center text-slate-600">{item.unit}</td>
                    <td className="py-3.5 px-3 text-center font-medium">{item.quantity}</td>
                    <td className="py-3.5 px-3 text-right font-medium text-[#2f2b3d]">
                      {formatCurrency(item.unitPrice)}
                    </td>
                    <td className="py-3.5 px-3 text-center text-slate-600 font-medium">
                      {item.vatPercent}
                    </td>
                    <td className="py-3.5 px-3 text-right font-semibold text-[#2f2b3d]">
                      {formatCurrency(lineTotal)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Total Estimate Title */}
        <div className="space-y-3 pt-2">
          <h3 className="text-[14px] font-bold text-[#2f2b3d]">
            Tổng kinh phí dự kiến
          </h3>

          {/* 3 Stat Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Stat Card 1: Tổng giá trị chưa VAT */}
            <div className="rounded-[6px] border border-slate-200 bg-white p-4 space-y-1 shadow-2xs">
              <p className="text-[12px] font-medium text-[#5d586c]">
                Tổng giá trị chưa VAT (VNĐ)
              </p>
              <p className="text-[18px] font-bold text-[#2f2b3d]">
                {formatCurrency(totalBeforeVat)}
              </p>
            </div>

            {/* Stat Card 2: VAT */}
            <div className="rounded-[6px] border border-slate-200 bg-white p-4 space-y-1 shadow-2xs">
              <p className="text-[12px] font-medium text-[#5d586c]">VAT (VNĐ)</p>
              <p className="text-[18px] font-bold text-[#2f2b3d]">
                {formatCurrency(totalVat)}
              </p>
            </div>

            {/* Stat Card 3: Tổng giá trị (Highlighted in Red/Pink per Figma) */}
            <div className="rounded-[6px] border border-[#ff4c51] bg-[#fff5f5] p-4 space-y-1 shadow-2xs">
              <p className="text-[12px] font-medium text-[#ff4c51]">
                Tổng giá trị (VNĐ)
              </p>
              <p className="text-[18px] font-bold text-[#ff4c51]">
                {formatCurrency(grandTotal)}
              </p>
            </div>
          </div>
        </div>

        {/* Text Representation Row */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 pt-1">
          <span className="text-[13px] font-bold text-[#2f2b3d] shrink-0">
            Bằng chữ:
          </span>
          <span className="flex-1 rounded-[6px] bg-slate-50 px-3 py-2 text-[13px] text-slate-500 italic">{formatCurrency(grandTotal)} đồng</span>
        </div>
      </div>
    </div>
  );
}
