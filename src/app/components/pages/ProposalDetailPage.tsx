import { useState } from "react";
import {
  ArrowLeft,
  Download,
  ZoomIn,
  ZoomOut,
  Maximize2,
  ChevronDown,
} from "lucide-react";
import { DigitizedDoc } from "../../data/mock";
import imgOriginalDoc from "../../imports/SốHoaTaiLiệu-1/01342b2bb964441edcb3fd61de43edf5fdb34da6.png";

interface ProposalDetailPageProps {
  doc: DigitizedDoc;
  onBack: () => void;
}

export function ProposalDetailPage({ doc, onBack }: ProposalDetailPageProps) {
  const [zoom, setZoom] = useState(100);
  const [page, setPage] = useState(1);

  // Parse extracted fields or use fallback
  const getFieldValue = (fieldId: string, fallback: string) => {
    const found = doc.fields?.find((f) => f.id === fieldId || f.label.toLowerCase().includes(fieldId));
    return found ? found.value : fallback;
  };

  const proposalCode = getFieldValue("Số tờ trình", doc.id.startsWith("p-") ? doc.fileName.split("_")[0] : "TT-2025-028");
  const proposalTitle = getFieldValue("Tên tờ trình", doc.fileName.replace(/\.pdf$/, "").replace(/^TT-\d+-\d+_?/, ""));
  const category = getFieldValue("Loại HHDV", "Thiết bị văn phòng");
  const createdAt = doc.uploadedAt || "18/04/2025 10:23";
  const createdBy = doc.uploadedBy || "Nguyễn Văn A";

  // Mock Line Items for Proposal detail
  const lineItems = [
    {
      stt: 1,
      name: "Máy in MD712Dn",
      description:
        "Máy in MD712Dn là thiết bị in laser đơn sắc tốc độ cao, hỗ trợ in hai mặt tự động và kết nối mạng, phù hợp cho văn phòng có nhu cầu in ấn thường xuyên.",
      supplier: "An Phát",
      unit: "Cái",
      qty: 2,
      price: 86000000,
      vat: 8,
      amount: 172000000,
    },
  ];

  const subTotal = lineItems.reduce((acc, item) => acc + item.amount, 0);
  const vatTotal = Math.round(subTotal * 0.08);
  const grandTotal = subTotal + vatTotal;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("vi-VN").format(val);
  };

  return (
    <div className="w-full space-y-5 p-6 bg-[#f8f7fa]">
      {/* Header Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex size-9 items-center justify-center rounded-[6px] border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors shadow-2xs"
            title="Quay lại"
          >
            <ArrowLeft className="size-4" />
          </button>
          <h1 className="text-[24px] font-bold text-[#2F2B3D] leading-[29px]">Chi tiết tờ trình</h1>
        </div>

        <button
          onClick={() => {
            alert(`Tải xuống file ${doc.fileName}`);
          }}
          className="flex items-center gap-2 rounded-[6px] border border-slate-200 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-50 shadow-2xs transition-colors"
        >
          <Download className="size-4 text-slate-500" />
          Tải Xuống
        </button>
      </div>

      {/* Document Sub-header */}
      <div>
        <h2 className="text-[18px] font-bold text-[#2F2B3D]">
          Mã tờ trình: {proposalCode}
        </h2>
        <p className="text-[12px] font-normal text-slate-500 mt-0.5">
          Cập nhật lần cuối: {createdAt} bởi {createdBy}
        </p>
      </div>

      {/* Top Split Section: Info (Left) + PDF Preview (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: A. Thông tin chung */}
        <div className="lg:col-span-6 rounded-[8px] bg-white p-5 shadow-2xs border border-slate-100/80 space-y-4">
          <h3 className="text-[15px] font-bold text-[#2F2B3D]">A. Thông tin chung</h3>

          <div className="space-y-3 text-[13px]">
            <div className="space-y-1">
              <label className="text-[12px] font-medium text-slate-700">Số tờ trình</label>
              <input
                type="text"
                defaultValue={proposalCode}
                className="w-full rounded-[6px] border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 outline-none focus:border-[#ff4c51]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[12px] font-medium text-slate-700">Ngày tờ trình</label>
              <input
                type="text"
                defaultValue="18/04/2025"
                className="w-full rounded-[6px] border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 outline-none focus:border-[#ff4c51]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[12px] font-medium text-slate-700">Loại đề xuất</label>
              <input
                type="text"
                defaultValue="Hàng hóa"
                className="w-full rounded-[6px] border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 outline-none focus:border-[#ff4c51]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[12px] font-medium text-slate-700">Danh mục hàng hóa/dịch vụ</label>
              <input
                type="text"
                defaultValue={category}
                className="w-full rounded-[6px] border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 outline-none focus:border-[#ff4c51]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[12px] font-medium text-slate-700">Nội dung đề xuất</label>
              <textarea
                rows={3}
                defaultValue={proposalTitle || "Mua máy in laser HP M712dn cho phòng hành Chính"}
                className="w-full rounded-[6px] border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 outline-none focus:border-[#ff4c51] resize-none"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Xem trước tờ trình */}
        <div className="lg:col-span-6 rounded-[8px] bg-white p-5 shadow-2xs border border-slate-100/80 flex flex-col min-h-[420px]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <h3 className="text-[15px] font-bold text-[#2F2B3D]">Xem trước tờ trình</h3>

            {/* Toolbar */}
            <div className="flex items-center gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-1 border border-slate-200 rounded px-2 py-1 bg-slate-50">
                <button
                  onClick={() => setZoom((z) => Math.max(50, z - 10))}
                  className="hover:text-slate-900 p-0.5"
                >
                  <ZoomOut className="size-3.5" />
                </button>

                <div className="relative flex items-center gap-1 px-1 font-medium">
                  <span>{zoom}%</span>
                  <ChevronDown className="size-3 text-slate-400" />
                </div>

                <button
                  onClick={() => setZoom((z) => Math.min(200, z + 10))}
                  className="hover:text-slate-900 p-0.5"
                >
                  <ZoomIn className="size-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-1 border border-slate-200 rounded px-2 py-1 bg-slate-50 font-medium">
                <span>{page}</span>
                <span className="text-slate-400">/ 12</span>
                <ChevronDown className="size-3 text-slate-400" />
              </div>

              <button className="p-1 hover:text-slate-900 border border-slate-200 rounded bg-slate-50">
                <Maximize2 className="size-3.5" />
              </button>
            </div>
          </div>

          {/* Document Preview Canvas Mock */}
          <div className="flex-1 overflow-auto rounded bg-slate-100/70 border border-slate-200 flex items-center justify-center p-4">
            <div
              className="bg-white shadow-md p-6 max-w-full transition-transform duration-200 text-[11px] leading-relaxed text-slate-800 font-serif"
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
            >
              {/* Mock Document Text Content */}
              <div className="text-center font-bold space-y-1 mb-4">
                <p className="uppercase text-[12px]">CÔNG TY TNHH MTV AN NINH MẠNG VIETTEL</p>
                <p className="text-[10px] tracking-wide text-slate-600">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                <p className="text-[9px] italic text-slate-500">Độc lập - Tự do - Hạnh phúc</p>
                <div className="w-24 h-0.5 bg-slate-800 mx-auto mt-1" />
              </div>

              <div className="text-center my-4 space-y-1">
                <h4 className="text-[15px] font-bold uppercase tracking-wider text-slate-900">TỜ TRÌNH</h4>
                <p className="font-semibold text-slate-700">Về việc đề xuất MUA SẮM MÁY IN HÀNH CHÍNH</p>
                <p className="italic text-slate-600">Kính gửi: Ban Giám đốc Công ty</p>
              </div>

              <div className="space-y-2 text-[10px] text-slate-700 text-justify">
                <p>- Căn cứ Quy chế quản lý đầu tư, mua sắm và chi tiêu của Công ty;</p>
                <p>- Căn cứ Kế hoạch sản xuất kinh doanh và nhu cầu thực tế phòng Hành chính;</p>
                <p>Phòng Hành chính kính trình Ban Giám đốc xem xét phê duyệt đề xuất chi tiết như sau:</p>

                <p className="font-bold text-slate-800 pt-2">I. THÔNG TIN CHUNG VỀ ĐỀ XUẤT</p>
                <p>1. Mục đích / Mục tiêu đề xuất: Trang bị máy in laser tốc độ cao đáp ứng in ấn tài liệu nghiệp vụ hành chính.</p>
                <p>2. Lý do, sự cần thiết: Máy in cũ hỏng hóc, chi phí sửa chữa cao.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Hạng mục và kinh phí đề xuất */}
      <div className="rounded-[8px] bg-white p-5 shadow-2xs border border-slate-100/80 space-y-5">
        <h3 className="text-[16px] font-bold text-[#2F2B3D]">Hạng mục và kinh phí đề xuất</h3>

        {/* Table of Line Items */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-slate-200 text-slate-700 font-semibold bg-slate-50/70">
                <th className="py-3 px-3">STT</th>
                <th className="py-3 px-3">Tên HHDV</th>
                <th className="py-3 px-3 max-w-[320px]">Mô tả</th>
                <th className="py-3 px-3">Nhà cung cấp</th>
                <th className="py-3 px-3">ĐVT</th>
                <th className="py-3 px-3 text-center">SL</th>
                <th className="py-3 px-3 text-right">Đơn giá (trước thuế)</th>
                <th className="py-3 px-3 text-center">VAT (%)</th>
                <th className="py-3 px-3 text-right">Thành tiền (VND)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {lineItems.map((item) => (
                <tr key={item.stt} className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-3 font-medium text-slate-600">{item.stt}</td>
                  <td className="py-3.5 px-3 font-medium text-slate-800 whitespace-nowrap">{item.name}</td>
                  <td className="py-3.5 px-3 text-slate-600 max-w-[320px] text-xs leading-relaxed">
                    {item.description}
                  </td>
                  <td className="py-3.5 px-3 font-medium text-slate-700 whitespace-nowrap">{item.supplier}</td>
                  <td className="py-3.5 px-3 text-slate-600 whitespace-nowrap">{item.unit}</td>
                  <td className="py-3.5 px-3 text-center font-medium text-slate-800">{item.qty}</td>
                  <td className="py-3.5 px-3 text-right font-medium text-slate-800 whitespace-nowrap">
                    {formatCurrency(item.price)}
                  </td>
                  <td className="py-3.5 px-3 text-center text-slate-600">{item.vat}</td>
                  <td className="py-3.5 px-3 text-right font-semibold text-slate-900 whitespace-nowrap">
                    {formatCurrency(item.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Blocks: Tổng kinh phí dự kiến */}
        <div className="space-y-3 pt-2 border-t border-slate-100">
          <h4 className="text-[13px] font-bold text-slate-800">Tổng kinh phí dự kiến</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Box 1: Chưa VAT */}
            <div className="rounded-[6px] border border-slate-200 p-3.5 bg-white space-y-1">
              <p className="text-[12px] font-medium text-slate-500">Tổng giá trị chưa VAT (VND)</p>
              <p className="text-[16px] font-bold text-slate-800">{formatCurrency(subTotal)}</p>
            </div>

            {/* Box 2: VAT */}
            <div className="rounded-[6px] border border-slate-200 p-3.5 bg-white space-y-1">
              <p className="text-[12px] font-medium text-slate-500">VAT (VND)</p>
              <p className="text-[16px] font-bold text-slate-800">{formatCurrency(vatTotal)}</p>
            </div>

            {/* Box 3: Tổng giá trị (Highlighted) */}
            <div className="rounded-[6px] border border-red-200 p-3.5 bg-red-50/50 space-y-1">
              <p className="text-[12px] font-medium text-red-600">Tổng giá trị (VND)</p>
              <p className="text-[16px] font-bold text-red-700">{formatCurrency(grandTotal)}</p>
            </div>
          </div>

          {/* Amount in words */}
          <div className="space-y-1 pt-2">
            <label className="text-[12px] font-medium text-slate-700">Bằng chữ:</label>
            <input
              type="text"
              readOnly
              value="Một trăm tám mươi lăm triệu sáu trăm nghìn đồng"
              className="w-full rounded-[6px] border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-600 outline-none italic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
