import { useState } from "react";
import { DigitizedDoc } from "../../data/mock";
import { DocumentCanvas } from "../DocumentCanvas";


interface OriginalDocViewProps {
  doc: DigitizedDoc;
  onBack: () => void;
}

export function OriginalDocView({ doc, onBack }: OriginalDocViewProps) {
  const [zoom, setZoom] = useState(100);
  const [page, setPage] = useState(1);
  const totalPages = doc.pageCount || 12;

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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#2F2B3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h1 className="text-[20px] font-bold text-[#2F2B3D]">Chi tiết tài liệu</h1>
        </div>

        {/* Toolbar Controls Row matching Screenshot */}
        <div className="flex items-center justify-between px-2 py-1 text-xs text-slate-700 shrink-0">
          {/* Left: Rotate + Zoom Out + Zoom Select + Zoom In */}
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-slate-100 rounded text-slate-600" title="Xoay">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 12A9 9 0 1 1 12 3C15.5 3 18.5 5 20 8" stroke="#5d586c" strokeWidth="1.75" strokeLinecap="round" />
                <path d="M20 4V8H16" stroke="#5d586c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={() => setZoom((z) => Math.max(50, z - 10))} className="p-1 hover:bg-slate-100 rounded font-bold text-slate-600 text-base leading-none">
              -
            </button>
            <select
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="h-7 border border-slate-200 rounded px-1.5 text-xs bg-white text-slate-700 outline-none"
            >
              <option value={50}>50%</option>
              <option value={75}>75%</option>
              <option value={100}>100%</option>
              <option value={125}>125%</option>
              <option value={150}>150%</option>
            </select>
            <button onClick={() => setZoom((z) => Math.min(200, z + 10))} className="p-1 hover:bg-slate-100 rounded font-bold text-slate-600 text-base leading-none">
              +
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
        <div className="flex-1 min-h-0 bg-slate-50/60 rounded-[6px] border border-slate-200/80 p-4 flex justify-center items-start overflow-y-auto">
          <div className="flex justify-center max-w-full">
            <DocumentCanvas zoom={zoom} page={page} region={null} />
          </div>
        </div>
      </div>
    </div>
  );
}
