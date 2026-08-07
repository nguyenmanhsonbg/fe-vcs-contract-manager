import { useEffect, useRef, useState } from "react";
import { DigitizedDoc } from "../../data/models";
import { DocumentCanvas } from "../DocumentCanvas";
import { RotateCw, Minus, Plus, ChevronDown } from "lucide-react";
import { IconArrowLeft, IconArrowsMinimize } from "../icons";

interface OriginalDocViewProps {
  doc: DigitizedDoc;
  onBack: () => void;
}

const ZOOM_OPTIONS = [25, 50, 75, 100, 125, 150, 200, 250, 300, 400, 500];

function getNextZoom(current: number, direction: "in" | "out"): number {
  if (direction === "in") {
    const match = ZOOM_OPTIONS.find((z) => z > current);
    return match || 500;
  } else {
    const match = [...ZOOM_OPTIONS].reverse().find((z) => z < current);
    return match || 25;
  }
}

export function OriginalDocView({ doc, onBack }: OriginalDocViewProps) {
  const [zoom, setZoom] = useState(100);
  const [page, setPage] = useState(1);
  const [rotation, setRotation] = useState(0);
  const totalPages = Math.max(1, doc.pageCount || 1);

  // Mouse drag to pan canvas
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    if (!canvasContainerRef.current) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX,
      y: e.clientY,
      scrollLeft: canvasContainerRef.current.scrollLeft,
      scrollTop: canvasContainerRef.current.scrollTop,
    });
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDragging || !canvasContainerRef.current) return;
    e.preventDefault();
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    canvasContainerRef.current.scrollLeft = dragStart.scrollLeft - dx;
    canvasContainerRef.current.scrollTop = dragStart.scrollTop - dy;
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  // Ctrl + mouse wheel zooming listener with snapped zoom levels
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        setZoom((z) => getNextZoom(z, e.deltaY < 0 ? "in" : "out"));
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

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
            <button
              onClick={() => setRotation((r) => r + 90)}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition-colors"
              title="Xoay 90°"
            >
              <RotateCw className="size-4 text-[#5d586c]" />
            </button>
            <button onClick={() => setZoom((z) => getNextZoom(z, "out"))} className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition-colors" title="Thu nhỏ">
              <Minus className="size-4 text-[#5d586c]" />
            </button>
            <div className="relative inline-flex items-center">
              <select
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="h-7 border border-slate-200 rounded px-2.5 text-xs bg-white text-slate-700 outline-none appearance-none pr-6 font-medium cursor-pointer"
              >
                {ZOOM_OPTIONS.map((val) => (
                  <option key={val} value={val}>
                    {val}%
                  </option>
                ))}
                {!ZOOM_OPTIONS.includes(zoom) && (
                  <option key={zoom} value={zoom}>
                    {zoom}%
                  </option>
                )}
              </select>
              <ChevronDown className="size-3.5 text-slate-500 absolute right-1.5 pointer-events-none" />
            </div>
            <button onClick={() => setZoom((z) => getNextZoom(z, "in"))} className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition-colors" title="Phóng to">
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

          {/* Right: Thu nhỏ về view cũ */}
          <div>
            <button
              onClick={onBack}
              className="p-1 hover:bg-slate-100 rounded text-slate-600 transition-colors"
              title="Thu nhỏ về giao diện cũ"
            >
              <IconArrowsMinimize className="size-4 text-[#5d586c]" />
            </button>
          </div>
        </div>

        {/* Fit Desktop Canvas Display Area matching screenshot */}
        <div
          ref={canvasContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`flex-1 min-h-0 bg-slate-50/60 rounded-[6px] border border-slate-200/80 p-4 flex justify-center items-start overflow-auto w-full select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <div className="flex justify-center w-full max-w-full">
            <DocumentCanvas zoom={zoom} page={page} rotation={rotation} region={null} docId={doc.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
