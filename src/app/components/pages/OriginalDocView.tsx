import { useState } from "react";
import { DigitizedDoc } from "../../data/models";
import { DocumentCanvas } from "../DocumentCanvas";
import { RotateCw, Minus, Plus, ChevronDown, Maximize2 } from "lucide-react";
import { IconArrowLeft } from "../icons";

interface OriginalDocViewProps {
  doc: DigitizedDoc;
  onBack: () => void;
}

export function OriginalDocView({ doc, onBack }: OriginalDocViewProps) {
  const [zoom, setZoom] = useState(100);
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, doc.pageCount || 1);

  return (
    <div className="h-full w-full bg-[#f8f7fa] p-4 flex flex-col overflow-hidden font-sans">
      {/* Container Box */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-5 shadow-[0px_4px_18px_0px_rgba(75,70,92,0.10)] flex flex-col flex-1 overflow-hidden space-y-4">
        {/* Header Bar matching Screenshot: ← Chi tiết tài liệu */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onBack}
            className="p-1 hover:bg-slate-100 rounded-[6px] text-[#2F2B3D] transition-colors"
            title="Quay lại"
          >
            <IconArrowLeft className="size-6 text-[#2F2B3D]" />
          </button>
          <h1 className="text-[20px] font-bold text-[#2F2B3D]">Chi tiết tài liệu</h1>
        </div>

        {/* Toolbar Controls Row matching Screenshot */}
        <div className="flex items-center justify-between px-2 py-1 text-xs text-slate-700 shrink-0">
          {/* Left: Rotate + Zoom Out + Zoom Select + Zoom In */}
          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition-colors" title="Xoay">
              <RotateCw className="size-4 text-[#5d586c]" />
            </button>
            <button onClick={() => setZoom((z) => Math.max(50, z - 10))} className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition-colors" title="Thu nhỏ">
              <Minus className="size-4 text-[#5d586c]" />
            </button>
            <div className="relative">
              <select
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="h-7 border border-slate-200 rounded px-2 text-xs bg-white text-slate-700 outline-none appearance-none pr-6 font-medium cursor-pointer"
              >
                <option value={50}>50%</option>
                <option value={75}>75%</option>
                <option value={100}>100%</option>
                <option value={125}>125%</option>
                <option value={150}>150%</option>
              </select>
              <ChevronDown className="size-3.5 text-slate-500 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <button onClick={() => setZoom((z) => Math.min(200, z + 10))} className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition-colors" title="Phóng to">
              <Plus className="size-4 text-[#5d586c]" />
            </button>
          </div>

          {/* Middle: Page Badge "1 / 12 ▾" */}
          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
            <div className="h-6 px-2 bg-slate-100 border border-slate-200 rounded text-slate-800 flex items-center justify-center font-semibold">
              {page}
            </div>
            <span>/ {totalPages}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-slate-500">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Right: Fullscreen icon ⛶ */}
          <div>
            <button className="p-1 hover:bg-slate-100 rounded text-slate-600" title="Toàn màn hình">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8" stroke="#5d586c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Fit Desktop Canvas Display Area matching screenshot */}
        <div className="flex-1 min-h-0 bg-slate-50/60 rounded-[6px] border border-slate-200/80 p-4 flex justify-center items-start overflow-auto w-full">
          <div className="flex justify-center w-full max-w-full">
            <DocumentCanvas zoom={zoom} page={page} region={null} docId={doc.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
