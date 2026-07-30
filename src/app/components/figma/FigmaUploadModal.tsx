import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { DocType, DOC_TYPE_LABELS, DigitizedDoc } from "../../data/mock";
import { docApi } from "../../services/api";
import { toast } from "sonner";

interface FigmaUploadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: (doc: DigitizedDoc) => void;
}

export function FigmaUploadModal({ open, onOpenChange, onSuccess }: FigmaUploadModalProps) {
  const [docType, setDocType] = useState<DocType>("proposal");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  }

  async function handleStartUpload() {
    if (!selectedFile) return;

    setIsUploading(true);
    setProgress(10);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(timer);
          return 90;
        }
        return prev + 20;
      });
    }, 150);

    try {
      const newDoc = await docApi.uploadDocument(selectedFile, docType);
      clearInterval(timer);
      setProgress(100);

      setTimeout(() => {
        setIsUploading(false);
        setSelectedFile(null);
        setProgress(0);
        onOpenChange(false);
        toast.success(`Đã tải lên tài liệu thành công: ${newDoc.fileName}`);
        if (onSuccess) onSuccess(newDoc);
      }, 300);
    } catch (err) {
      clearInterval(timer);
      setIsUploading(false);
      toast.error("Lỗi khi tải lên tài liệu.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 border-none bg-transparent max-w-[600px] shadow-none">
        <div className="bg-white rounded-[6px] shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)] p-6 space-y-6 w-full">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h2 className="text-[18px] font-medium text-[rgba(47,43,61,0.9)]">Tải lên tài liệu</h2>
            <button onClick={() => onOpenChange(false)} className="text-slate-400 hover:text-slate-600">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Select Doc Type */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700">Loại tài liệu mua sắm</label>
            <select
              value={docType}
              onChange={(e) => setDocType(e.target.value as DocType)}
              className="w-full h-9 rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-800 outline-none focus:border-brand"
            >
              {Object.entries(DOC_TYPE_LABELS).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </div>

          {/* Upload Dropzone */}
          <div className="border-2 border-dashed border-[#ffdbdc] rounded-[6px] bg-[#fff5f5] p-6 text-center">
            {selectedFile ? (
              <div className="flex items-center justify-between bg-white border border-slate-200 rounded-md p-3">
                <div className="text-left">
                  <p className="text-xs font-medium text-slate-800 truncate max-w-[400px]">{selectedFile.name}</p>
                  <p className="text-[11px] text-slate-400">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                </div>
                {!isUploading && (
                  <button onClick={() => setSelectedFile(null)} className="text-slate-400 hover:text-red-500 text-xs">
                    Xoá
                  </button>
                )}
              </div>
            ) : (
              <label className="flex flex-col items-center gap-3 cursor-pointer">
                <div className="size-12 rounded-lg bg-[#ffdbdc] flex items-center justify-center text-[#ff4c51]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 16V8M12 8L9 11M12 8L15 11M3 15V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-medium text-slate-800">
                    Kéo thả tài liệu vào đây, hoặc <span className="text-[#ff4c51] underline">tải lên từ máy tính</span>
                  </p>
                  <p className="text-[12px] text-slate-400 mt-1">Hỗ trợ PDF, DOCX, XLSX, JPG, PNG · Tối đa 10 MB/tệp</p>
                </div>
                <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.docx,.xlsx,.png,.jpg,.jpeg" />
              </label>
            )}
          </div>

          {/* Progress bar */}
          {isUploading && (
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Đang xử lý &amp; trích xuất dữ liệu (OCR)...</span>
                <span className="font-semibold text-[#ff4c51]">{progress}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#ff4c51] transition-all duration-150" style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => onOpenChange(false)}
              disabled={isUploading}
              className="px-4 py-2 rounded-md border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50"
            >
              Hủy
            </button>
            <button
              onClick={handleStartUpload}
              disabled={!selectedFile || isUploading}
              className="px-5 py-2 rounded-md bg-[#ff4c51] text-white text-xs font-medium hover:bg-[#e03e43] disabled:opacity-50"
            >
              {isUploading ? "Đang tải..." : "Tải Lên tài liệu"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
