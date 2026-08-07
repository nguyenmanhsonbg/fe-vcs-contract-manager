import { useEffect, useRef, useState } from "react";
import { DigitizedDoc } from "../../data/models";
import { DocumentCanvas } from "../DocumentCanvas";
import { IconArrowLeft } from "../icons";
import { DocumentViewerToolbar } from "../DocumentViewerToolbar";

interface OriginalDocViewProps {
  doc: DigitizedDoc;
  onBack: () => void;
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

        <DocumentViewerToolbar zoom={zoom} setZoom={setZoom} page={page} totalPages={totalPages} setPage={setPage} onRotate={() => setRotation((r) => r + 90)} onFullscreen={() => document.fullscreenElement ? void document.exitFullscreen() : void document.documentElement.requestFullscreen()} />

        {/* Fit Desktop Canvas Display Area matching screenshot */}
        <div
          ref={canvasContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`flex-1 min-h-0 bg-slate-50/60 rounded-[6px] border border-slate-200/80 p-4 flex justify-start items-start overflow-auto w-full select-none ${
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
