import React, { useState } from "react";
import { X, UploadCloud, FileText, CheckCircle } from "lucide-react";
import { AcceptanceContractDetail, AcceptanceDocument } from "../../../core/types/acceptance.types";
import { acceptanceApi } from "../../../api/acceptanceApi";
import { toast } from "sonner";

interface UploadAcceptanceDocumentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contract: AcceptanceContractDetail | null;
  onSuccess: () => void;
}

export function UploadAcceptanceDocumentModal({
  open,
  onOpenChange,
  contract,
  onSuccess,
}: UploadAcceptanceDocumentModalProps) {
  if (!open || !contract) return null;

  const activePeriods = Array.from(
    new Set(
      (contract.milestones || []).flatMap((item) =>
        Object.values(item.periods || {})
          .filter((p): p is NonNullable<typeof p> => Boolean(p?.periodName))
          .map((p) => p.periodName)
      )
    )
  );

  const [docType, setDocType] = useState<AcceptanceDocument["type"]>("Biên bản nghiệm thu");
  const [period, setPeriod] = useState<string>(activePeriods[0] || "Đợt 1");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error("Vui lòng chọn tệp tài liệu cần tải lên");
      return;
    }

    try {
      setIsSubmitting(true);
      await acceptanceApi.uploadAcceptanceDocument(contract.id, {
        fileName: file.name,
        type: docType,
        period,
      });

      toast.success(`Tải lên tài liệu ${file.name} thành công!`);
      onSuccess();
      onOpenChange(false);
      setFile(null);
    } catch (err: any) {
      toast.error(err.message || "Không thể tải lên tài liệu");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg overflow-hidden rounded-[8px] bg-white shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50/70">
          <div>
            <h3 className="text-base font-bold text-[#2f2b3d]">Tải lên tài liệu nghiệm thu</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Hợp đồng: <span className="font-semibold text-[#3f81ea]">{contract.contractCode}</span>
            </p>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="flex size-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div>
            <label className="block text-[12px] font-medium text-slate-700 mb-1">
              Loại tài liệu <span className="text-[#ff4c51]">*</span>
            </label>
            <select
              value={docType}
              onChange={(e) => setDocType(e.target.value as AcceptanceDocument["type"])}
              className="h-9 w-full rounded-[6px] border border-slate-200 bg-white px-3 text-xs text-slate-800 outline-none hover:border-slate-300 focus:border-[#ff4c51] cursor-pointer"
            >
              <option value="Biên bản nghiệm thu">Biên bản nghiệm thu</option>
              <option value="Hóa đơn GTGT">Hóa đơn GTGT</option>
              <option value="Bảng kê chi tiết">Bảng kê chi tiết</option>
              <option value="Phụ lục hợp đồng">Phụ lục hợp đồng</option>
            </select>
          </div>

          <div>
            <label className="block text-[12px] font-medium text-slate-700 mb-1">
              Áp dụng cho đợt nghiệm thu
            </label>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="h-9 w-full rounded-[6px] border border-slate-200 bg-white px-3 text-xs text-slate-800 outline-none hover:border-slate-300 focus:border-[#ff4c51] cursor-pointer"
            >
              {activePeriods.map((pName) => (
                <option key={pName} value={pName}>
                  {pName}
                </option>
              ))}
              <option value="Toàn bộ hợp đồng">Toàn bộ hợp đồng</option>
            </select>
          </div>

          {/* Upload Dropzone */}
          <div>
            <label className="block text-[12px] font-medium text-slate-700 mb-1">
              Tệp đính kèm (PDF, DOCX, XLSX, PNG, JPG) <span className="text-[#ff4c51]">*</span>
            </label>
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleFileDrop}
              className="relative flex flex-col items-center justify-center rounded-[8px] border-2 border-dashed border-slate-200 bg-slate-50/50 p-6 text-center transition-colors hover:border-[#ff4c51]/50 hover:bg-[#ff4c51]/5 cursor-pointer"
              onClick={() => document.getElementById("acceptance-doc-file-input")?.click()}
            >
              <input
                id="acceptance-doc-file-input"
                type="file"
                accept=".pdf,.docx,.doc,.xlsx,.xls,.png,.jpg,.jpeg"
                onChange={handleFileSelect}
                className="hidden"
              />

              {file ? (
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#28c76f]/10 text-[#28c76f]">
                    <FileText className="size-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-slate-800 max-w-[280px] truncate">
                      {file.name}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB &bull; Sẵn sàng tải lên
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-red-50 text-[#ff4c51]">
                    <UploadCloud className="size-5" />
                  </div>
                  <p className="text-xs font-medium text-slate-700">
                    Kéo và thả tệp tài liệu vào đây hoặc <span className="text-[#ff4c51] underline">Duyệt tệp</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">Dung lượng tối đa 25MB mỗi tệp</p>
                </>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-2 border-t border-slate-200 pt-4">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="rounded-[6px] border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !file}
              className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#ff4c51] px-5 py-2 text-xs font-medium text-white shadow-2xs hover:bg-[#e64449] disabled:opacity-50 transition-colors cursor-pointer"
            >
              <CheckCircle className="size-4" />
              {isSubmitting ? "Đang tải lên..." : "Tải lên tài liệu"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
