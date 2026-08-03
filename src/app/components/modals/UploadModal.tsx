import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { docApi } from "../../services/api";
import { toast } from "sonner";

interface UploadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

interface UploadedFileItem {
  id: string;
  fileObj: File;
  name: string;
  size: string;
  date: string;
  type: "pdf" | "xlsx" | "docx";
}

export function UploadModal({ open, onOpenChange, onSuccess }: UploadModalProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const filesArr = Array.from(e.target.files);
      const newItems: UploadedFileItem[] = filesArr.map((file, idx) => {
        const ext = file.name.endsWith(".xlsx") || file.name.endsWith(".xls") ? "xlsx" : "pdf";
        return {
          id: `${Date.now()}-${idx}-${file.name}`,
          fileObj: file,
          name: file.name,
          size: `${(file.size / (1024 * 1024)).toFixed(1)}MB`,
          date: new Date().toLocaleDateString("vi-VN"),
          type: ext,
        };
      });
      setUploadedFiles((prev) => [...prev, ...newItems]);
      e.target.value = "";
    }
  }

  function handleRemoveFile(id: string) {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
  }

  async function handleStartUpload() {
    if (uploadedFiles.length === 0) {
      toast.warning("Vui lòng chọn ít nhất 1 file tài liệu để tải lên.");
      return;
    }

    setIsUploading(true);
    setProgress(10);

    try {
      const total = uploadedFiles.length;
      let completed = 0;

      for (const item of uploadedFiles) {
        await docApi.uploadDocument(item.fileObj);
        completed++;
        setProgress(Math.round((completed / total) * 100));
      }

      toast.success(`Đã xử lý và đẩy ${total} tài liệu vào hàng đợi OCR thành công!`);
      setIsUploading(false);
      setUploadedFiles([]);
      setProgress(0);
      onOpenChange(false);
      onSuccess?.();
    } catch {
      setIsUploading(false);
      toast.error("Lỗi khi tải lên tài liệu.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 border-none bg-transparent max-w-[600px] sm:max-w-[600px] w-[600px] shadow-none outline-none [&>button]:hidden">
        <div className="bg-white rounded-[6px] shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)] p-6 space-y-5 w-[600px] text-slate-800 flex flex-col items-start">
          {/* Header */}
          <div className="flex items-center justify-between w-full">
            <h2 className="text-[17px] font-bold text-[#2F2B3D]">Tải lên tài liệu</h2>
            <button
              onClick={() => onOpenChange(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-md"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Upload Dropzone Box */}
          <div className="w-full border border-dashed border-[#cccdd3] rounded-[6px] bg-white p-7 text-center relative hover:bg-slate-50/50 transition-colors">
            <label className="flex flex-col items-center cursor-pointer">
              <div className="size-12 rounded-[10px] bg-[#ffdbdc] flex items-center justify-center text-[#ff4c51] mb-3 shadow-2xs">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 16V8M12 8L9 11M12 8L15 11M3 15V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[17px] font-bold text-[#393740] leading-snug">Thả các tệp vào đây</p>
              <p className="text-[17px] font-bold text-[#393740] leading-snug">hoặc nhấp để chọn nhiều tệp</p>

              <div className="text-[12px] text-slate-500 mt-3 space-y-0.5">
                <p>1. Hỗ trợ chọn nhiều file cùng lúc (tối đa 10MB/tệp)</p>
                <p>2. Định dạng: PDF, DOCX, XLSX, JPG, PNG</p>
              </div>
              <input type="file" multiple className="hidden" onChange={handleFileChange} accept=".pdf,.docx,.xlsx,.png,.jpg,.jpeg" />
            </label>
          </div>

          {/* Progress Bar during upload */}
          {isUploading && (
            <div className="w-full space-y-1.5 pt-1">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Đang trích xuất dữ liệu (OCR)...</span>
                <span className="font-semibold text-[#ff4c51]">{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#ff4c51] transition-all duration-150" style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}

          {/* Uploaded Files Section */}
          <div className="w-full space-y-3 pt-1">
            <div className="flex items-center justify-between text-xs">
              <h3 className="font-bold text-[#393740] text-[13.5px]">Tệp đã tải lên</h3>
              <span className="text-[#3f81ea] font-medium">Đã tải lên {uploadedFiles.length}/10 file</span>
            </div>

            {/* List of Files */}
            <div className="max-h-[160px] overflow-y-auto pr-1.5 space-y-2.5 custom-scrollbar">
              {uploadedFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between border border-slate-200/80 rounded-[6px] p-2.5 bg-white shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Badge Icon */}
                    {file.type === "xlsx" ? (
                      <div className="size-8 rounded bg-[#e8fadf] flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="4" fill="#28c76f" fillOpacity="0.1" />
                          <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="#28c76f" strokeWidth="1.5" />
                          <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" stroke="#28c76f" strokeWidth="1.5" />
                          <path d="M8 12l8 6M16 12l-8 6" stroke="#28c76f" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                    ) : (
                      <div className="size-8 rounded bg-[#ffe8e8] flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="#ff4c51" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M14 2V8H20" stroke="#ff4c51" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                    )}

                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#393740] truncate" title={file.name}>{file.name}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 space-x-2">
                        <span>{file.type.toUpperCase()}</span>
                        <span>{file.size}</span>
                        <span>{file.date}</span>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveFile(file.id)}
                    className="text-slate-400 hover:text-red-500 transition-colors p-1"
                    title="Xóa tệp"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end gap-3 pt-2 border-t border-slate-100 w-full">
            <button
              onClick={() => onOpenChange(false)}
              disabled={isUploading}
              className="px-5 py-2 rounded-[6px] bg-[#7e8299] text-white text-xs font-semibold hover:bg-[#6c7086] transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={handleStartUpload}
              disabled={isUploading}
              className="px-5 py-2 rounded-[6px] bg-[#ff4c51] text-white text-xs font-semibold hover:bg-[#e03e43] transition-colors shadow-2xs"
            >
              {isUploading ? "Đang xử lý..." : "Xử lý tài liệu"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
