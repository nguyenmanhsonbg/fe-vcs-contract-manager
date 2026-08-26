import { useState } from "react";
import { X, FileText, CheckCircle2 } from "lucide-react";
import { UploadDropzone } from "../common/UploadDropzone";
import { BusinessPlanItem } from "../../data/businessPlanMock";
import { docApi } from "../../services/api";
import { toast } from "sonner";

interface CreateBusinessPlanModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: (newPlan: BusinessPlanItem) => void;
}

export function CreateBusinessPlanModal({
  open,
  onOpenChange,
  onSuccess,
}: CreateBusinessPlanModalProps) {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState(`TT - 2026 - ${Math.floor(100 + Math.random() * 900)}`);
  const [id, setId] = useState(`${Math.floor(100 + Math.random() * 900)}/TTr-TTKDMB`);
  const [partner, setPartner] = useState("");
  const [planDate, setPlanDate] = useState(new Date().toLocaleDateString("vi-VN"));
  const [executionPeriod, setExecutionPeriod] = useState("01/05/2026 - 31/12/2026");
  const [totalAmount, setTotalAmount] = useState<number | "">("");
  const [notes, setNotes] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (status: "Chờ phê duyệt" | "Lưu nháp") => {
    if (!title.trim()) {
      toast.error("Vui lòng nhập tên Phương án kinh doanh");
      return;
    }
    if (!partner.trim()) {
      toast.error("Vui lòng nhập đối tác");
      return;
    }

    try {
      setLoading(true);
      const parsedAmount = typeof totalAmount === "number" ? totalAmount : Number(totalAmount) || 0;
      const vatAmount = parsedAmount * 0.1;
      const totalAmountWithVat = parsedAmount + vatAmount;

      const created = await docApi.createBusinessPlan({
        id,
        code,
        title,
        partner,
        planDate,
        executionPeriod,
        totalAmount: parsedAmount,
        totalAmountWithVat,
        status,
        appendices: uploadedFiles.map((f, i) => ({
          id: `app-new-${Date.now()}-${i}`,
          name: f.name,
          type: f.name.endsWith(".pdf") ? "PDF" : f.name.endsWith(".xlsx") ? "XLSX" : "DOCX",
          size: `${(f.size / (1024 * 1024)).toFixed(1)}MB`,
          date: new Date().toLocaleDateString("vi-VN"),
        })),
        documentContent: {
          approverTitle: "TỔNG GIÁM ĐỐC",
          approverName: "TRẦN MINH QUANG",
          proposingUnit: "TRUNG TÂM KINH DOANH",
          proposalPurpose: title,
          legalBasis: notes ? [notes] : ["Quy chế quản lý đầu tư, mua sắm số 45/QC-VCS"],
          contentOverview: `Kính trình Ban Giám đốc xem xét phê duyệt ${title}.`,
        },
      });

      toast.success(status === "Lưu nháp" ? "Đã lưu nháp phương án kinh doanh" : "Tạo phương án kinh doanh thành công!");
      onSuccess(created);
      onOpenChange(false);
    } catch (err: any) {
      toast.error(err.message || "Có lỗi xảy ra khi tạo phương án kinh doanh");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col rounded-[8px] bg-white shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-[6px] bg-red-50 text-[#ff4c51]">
              <FileText className="size-5" />
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-[#2f2b3d]">
                Tạo Phương án kinh doanh mới
              </h2>
              <p className="text-[12px] text-[#5d586c]">
                Điền thông tin và đính kèm tài liệu để khởi tạo phương án kinh doanh
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="flex size-8 items-center justify-center rounded-[6px] text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="custom-scrollbar flex-1 overflow-y-auto p-6 space-y-4 text-[13px]">
          {/* Form Fields */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2 space-y-1.5">
              <label className="font-medium text-[#2f2b3d]">
                Tên Phương án kinh doanh <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="VD: Cung cấp thiết bị điện công nghiệp cho nhà máy..."
                className="h-10 w-full rounded-[6px] border border-[#dbdade] px-3 text-[13px] text-[#2f2b3d] outline-none transition-colors focus:border-[#ff4c51]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-medium text-[#2f2b3d]">
                Số tờ trình / PAKD <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="VD: 145/TTr-TTKDMB"
                className="h-10 w-full rounded-[6px] border border-[#dbdade] px-3 text-[13px] text-[#2f2b3d] outline-none transition-colors focus:border-[#ff4c51]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-medium text-[#2f2b3d]">Mã phương án</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="VD: TT - 2026 - 028"
                className="h-10 w-full rounded-[6px] border border-[#dbdade] px-3 text-[13px] text-[#2f2b3d] outline-none transition-colors focus:border-[#ff4c51]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-medium text-[#2f2b3d]">
                Đối tác / Khách hàng <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={partner}
                onChange={(e) => setPartner(e.target.value)}
                placeholder="VD: Công ty CP Thiết bị điện Hà Nội"
                className="h-10 w-full rounded-[6px] border border-[#dbdade] px-3 text-[13px] text-[#2f2b3d] outline-none transition-colors focus:border-[#ff4c51]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-medium text-[#2f2b3d]">Ngày lập phương án</label>
              <input
                type="text"
                value={planDate}
                onChange={(e) => setPlanDate(e.target.value)}
                placeholder="DD/MM/YYYY"
                className="h-10 w-full rounded-[6px] border border-[#dbdade] px-3 text-[13px] text-[#2f2b3d] outline-none transition-colors focus:border-[#ff4c51]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-medium text-[#2f2b3d]">Thời gian thực hiện hợp đồng</label>
              <input
                type="text"
                value={executionPeriod}
                onChange={(e) => setExecutionPeriod(e.target.value)}
                placeholder="VD: 01/04/2026 - 31/12/2026"
                className="h-10 w-full rounded-[6px] border border-[#dbdade] px-3 text-[13px] text-[#2f2b3d] outline-none transition-colors focus:border-[#ff4c51]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-medium text-[#2f2b3d]">
                Tổng giá trị dự kiến (VNĐ)
              </label>
              <input
                type="number"
                value={totalAmount}
                onChange={(e) => setTotalAmount(e.target.value ? Number(e.target.value) : "")}
                placeholder="VD: 4850000000"
                className="h-10 w-full rounded-[6px] border border-[#dbdade] px-3 text-[13px] text-[#2f2b3d] outline-none transition-colors focus:border-[#ff4c51]"
              />
            </div>

            <div className="sm:col-span-2 space-y-1.5">
              <label className="font-medium text-[#2f2b3d]">Căn cứ & Ghi chú</label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Nhập căn cứ pháp lý, mục tiêu hoặc ghi chú bổ sung..."
                className="w-full rounded-[6px] border border-[#dbdade] p-3 text-[13px] text-[#2f2b3d] outline-none transition-colors focus:border-[#ff4c51]"
              />
            </div>
          </div>

          {/* Upload Attachments Dropzone */}
          <div className="space-y-2 pt-1">
            <label className="font-medium text-[#2f2b3d] block">
              Tệp đính kèm / Phụ lục (PDF, DOCX, XLSX)
            </label>
            <UploadDropzone
              onFilesChange={(files) => setUploadedFiles(files)}
              title="Kéo thả tài liệu phương án hoặc phụ lục vào đây"
              description="Hỗ trợ tệp PDF, DOCX, XLSX dung lượng tối đa 25MB"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-slate-100 bg-[#f8f7fa] px-6 py-3.5">
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            disabled={loading}
            className="h-9 rounded-[6px] border border-[#dbdade] bg-white px-4 text-[13px] font-medium text-[#5d586c] transition-colors hover:bg-slate-50"
          >
            Hủy
          </button>
          <button
            type="button"
            onClick={() => handleSubmit("Lưu nháp")}
            disabled={loading}
            className="h-9 rounded-[6px] border border-slate-300 bg-white px-4 text-[13px] font-medium text-[#2f2b3d] transition-colors hover:bg-slate-100"
          >
            Lưu nháp
          </button>
          <button
            type="button"
            onClick={() => handleSubmit("Chờ phê duyệt")}
            disabled={loading}
            className="inline-flex h-9 items-center gap-1.5 rounded-[6px] bg-[#ff4c51] px-5 text-[13px] font-medium text-white shadow-xs transition-colors hover:bg-[#e64449]"
          >
            <CheckCircle2 className="size-4" />
            Tạo Phương Án
          </button>
        </div>
      </div>
    </div>
  );
}
