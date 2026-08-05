import { IconDocUpload } from "../icons";

interface UploadDropzoneProps {
  onUploadClick?: () => void;
  title?: string;
  maxSizeText?: string;
  allowedFormatsText?: string;
  className?: string;
}

export function UploadDropzone({
  onUploadClick,
  title = "Thả tệp vào đây hoặc nhấp để tải lên",
  maxSizeText = "1. Dung lượng tối đa 10MB/tệp",
  allowedFormatsText = "2. Hỗ trợ: PDF, DOCX, XLSX, JPG, PNG",
  className = "",
}: UploadDropzoneProps) {
  return (
    <div
      onClick={onUploadClick}
      className={`w-full bg-white border-[1.5px] border-dashed border-[#cccdd3] rounded-[6px] p-6 text-center flex flex-col items-center justify-center gap-3.5 cursor-pointer hover:bg-slate-50/70 transition-colors ${className}`}
    >
      <div className="size-12 rounded-xl bg-[#fce8e8] flex items-center justify-center text-[#ff4c51] shrink-0">
        <IconDocUpload className="size-6" />
      </div>
      <div className="space-y-1.5">
        <p className="text-[16px] font-bold text-[#5d586c] leading-[22px]">
          {title}
        </p>
        <div className="text-[11px] font-normal text-slate-500 leading-[15px] space-y-0.5">
          <p>{maxSizeText}</p>
          <p>{allowedFormatsText}</p>
        </div>
      </div>
    </div>
  );
}
