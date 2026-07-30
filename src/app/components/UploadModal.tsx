import { useState } from "react";
import { UploadCloud, FileText, X, Loader2, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { DocType, DOC_TYPE_LABELS, DigitizedDoc } from "../data/mock";
import { docApi } from "../services/api";
import { toast } from "sonner";

interface UploadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: (doc: DigitizedDoc) => void;
}

export function UploadModal({ open, onOpenChange, onSuccess }: UploadModalProps) {
  const [docType, setDocType] = useState<DocType>("proposal");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  }

  async function handleUpload() {
    if (!selectedFile) return;

    setIsUploading(true);
    setProgress(20);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 25;
      });
    }, 200);

    try {
      const newDoc = await docApi.uploadDocument(selectedFile, docType);
      clearInterval(interval);
      setProgress(100);

      setTimeout(() => {
        setIsUploading(false);
        setSelectedFile(null);
        setProgress(0);
        onOpenChange(false);
        toast.success(`Đã tải lên tài liệu thành công: ${newDoc.fileName}`);
        if (onSuccess) onSuccess(newDoc);
      }, 400);
    } catch (err) {
      clearInterval(interval);
      setIsUploading(false);
      toast.error("Lỗi khi tải lên tài liệu.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold text-slate-800 flex items-center gap-2">
            <UploadCloud className="size-5 text-brand" />
            Tải lên tài liệu mới
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Doc type select */}
          <div className="space-y-1.5">
            <Label className="text-xs font-medium text-slate-700">Loại tài liệu mua sắm</Label>
            <Select value={docType} onValueChange={(val) => setDocType(val as DocType)}>
              <SelectTrigger className="h-9 text-xs">
                <SelectValue placeholder="Chọn loại tài liệu" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(DOC_TYPE_LABELS).map(([k, v]) => (
                  <SelectItem key={k} value={k} className="text-xs">
                    {v}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Dropzone */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="border-2 border-dashed border-slate-200 rounded-lg bg-slate-50/70 p-6 text-center hover:border-brand/50 transition-colors"
          >
            {selectedFile ? (
              <div className="flex items-center justify-between bg-white border border-slate-200 rounded-md p-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="size-9 rounded-md bg-brand-soft flex items-center justify-center shrink-0">
                    <FileText className="size-5 text-brand" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-xs font-medium text-slate-800 truncate">{selectedFile.name}</p>
                    <p className="text-[11px] text-slate-400">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                </div>
                {!isUploading && (
                  <Button variant="ghost" size="icon" className="size-7" onClick={() => setSelectedFile(null)}>
                    <X className="size-4 text-slate-400" />
                  </Button>
                )}
              </div>
            ) : (
              <label className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="size-11 rounded-full bg-brand-soft flex items-center justify-center text-brand mb-1">
                  <UploadCloud className="size-5" />
                </div>
                <p className="text-xs font-medium text-slate-700">
                  Kéo thả tệp vào đây, hoặc <span className="text-brand hover:underline">duyệt chọn tệp</span>
                </p>
                <p className="text-[11px] text-slate-400">Hỗ trợ PDF, DOCX, XLSX, PNG, JPG (Tối đa 10 MB)</p>
                <input type="file" className="hidden" accept=".pdf,.docx,.xlsx,.png,.jpg,.jpeg" onChange={handleFileSelect} />
              </label>
            )}
          </div>

          {/* Upload progress */}
          {isUploading && (
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Loader2 className="size-3.5 animate-spin text-brand" />
                  Đang xử lý &amp; trích xuất dữ liệu (OCR)...
                </span>
                <span className="font-medium text-brand">{progress}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand transition-all duration-200" style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" size="sm" onClick={() => onOpenChange(false)} disabled={isUploading}>
            Hủy
          </Button>
          <Button
            size="sm"
            className="bg-brand text-white hover:bg-brand-dark"
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
          >
            {isUploading ? (
              <>
                <Loader2 className="size-3.5 animate-spin mr-1.5" /> Đang tải...
              </>
            ) : (
              <>
                <CheckCircle2 className="size-3.5 mr-1.5" /> Bắt đầu tải lên
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
