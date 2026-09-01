import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ChevronDown, Download, Maximize2, Minus, Plus, RotateCw, ScanLine } from "lucide-react";

export const ZOOM_OPTIONS = [25, 50, 75, 100, 125, 150, 200, 250, 300, 400, 500];
export function getNextZoom(current: number, direction: "in" | "out") {
  return direction === "in"
    ? ZOOM_OPTIONS.find((z) => z > current) || 500
    : [...ZOOM_OPTIONS].reverse().find((z) => z < current) || 25;
}

export function useWheelZoom(
  container: React.RefObject<HTMLElement | null>,
  setZoom: React.Dispatch<React.SetStateAction<number>>
) {
  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const onWheel = (event: WheelEvent) => {
      if (!element.contains(event.target as Node) || (!event.ctrlKey && !event.metaKey)) return;
      event.preventDefault();
      setZoom((value) => getNextZoom(value, event.deltaY < 0 ? "in" : "out"));
    };
    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, [container, setZoom]);
}

export function useDocumentPan(container: React.RefObject<HTMLElement | null>) {
  const [isDragging, setIsDragging] = useState(false);
  const start = useRef({ x: 0, y: 0, left: 0, top: 0 });
  const onMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    const element = container.current;
    if (!element) return;
    start.current = { x: event.clientX, y: event.clientY, left: element.scrollLeft, top: element.scrollTop };
    setIsDragging(true);
  };
  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const element = container.current;
    if (!isDragging || !element) return;
    event.preventDefault();
    element.scrollLeft = start.current.left - (event.clientX - start.current.x);
    element.scrollTop = start.current.top - (event.clientY - start.current.y);
  };
  const stop = () => setIsDragging(false);
  return { isDragging, onMouseDown, onMouseMove, onMouseUp: stop, onMouseLeave: stop };
}

type Props = {
  zoom: number;
  setZoom: (value: number) => void;
  page?: number;
  totalPages?: number;
  setPage?: (value: number) => void;
  onRotate?: () => void;
  onScan?: () => void;
  onDownload?: () => void;
  onFullscreen?: () => void;
  onRefresh?: () => void;
  scanning?: boolean;
};

export function DocumentViewerToolbar({
  zoom,
  setZoom,
  page = 1,
  totalPages = 1,
  setPage,
  onRotate,
  onScan,
  onDownload,
  onFullscreen,
  onRefresh,
  scanning,
}: Props) {
  return (
    <div className="flex shrink-0 items-center justify-between px-0.5 text-xs text-slate-700">
      <div className="flex items-center gap-1">
        {onRotate && (
          <button
            type="button"
            onClick={onRotate}
            className="flex size-6 items-center justify-center rounded-[6px] bg-[#f0eff4] text-[#5d586c] transition-colors hover:bg-[#e4e3e8] cursor-pointer"
            title="Xoay 90°"
          >
            <RotateCw className="size-4" />
          </button>
        )}
        <button
          type="button"
          onClick={() => setZoom(getNextZoom(zoom, "out"))}
          className="flex size-6 items-center justify-center rounded-[6px] bg-[#f0eff4] text-[#5d586c] transition-colors hover:bg-[#e4e3e8] cursor-pointer"
          title="Thu nhỏ"
        >
          <Minus className="size-4" />
        </button>
        <div className="relative flex items-center">
          <select
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="h-6 appearance-none rounded-[6px] bg-[#f0eff4] pl-2 pr-7 text-xs font-medium text-[#5d586c] outline-none transition-colors hover:bg-[#e4e3e8] cursor-pointer"
          >
            {ZOOM_OPTIONS.map((value) => (
              <option key={value} value={value}>
                {value}%
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-1.5 size-3.5 text-[#5d586c]" />
        </div>
        <button
          type="button"
          onClick={() => setZoom(getNextZoom(zoom, "in"))}
          className="flex size-6 items-center justify-center rounded-[6px] bg-[#f0eff4] text-[#5d586c] transition-colors hover:bg-[#e4e3e8] cursor-pointer"
          title="Phóng to"
        >
          <Plus className="size-4" />
        </button>
      </div>
      <div className="flex items-center gap-1.5 font-medium text-slate-600">
        <input
          aria-label="Trang hiện tại"
          type="number"
          min={1}
          max={totalPages}
          value={page}
          onChange={(e) => setPage?.(Math.min(totalPages, Math.max(1, Number(e.target.value) || 1)))}
          className="h-6 w-7 rounded border border-slate-200 bg-white text-center text-xs outline-none"
        />
        <span>/ {totalPages}</span>
        <ChevronDown className="size-3.5 text-slate-500" />
      </div>
      <div className="flex items-center gap-3">
        {onRefresh && (
          <button
            type="button"
            onClick={onRefresh}
            className="p-1 text-[#5d586c] transition-colors hover:bg-slate-100 cursor-pointer"
            title="Làm mới"
          >
            ↻
          </button>
        )}
        {onScan && (
          <button
            type="button"
            onClick={onScan}
            disabled={scanning}
            className="p-1 text-[#5d586c] transition-colors hover:bg-slate-100 cursor-pointer"
            title="Quét số hóa"
          >
            <ScanLine className={`size-4 ${scanning ? "animate-pulse" : ""}`} />
          </button>
        )}
        {onDownload && (
          <button
            type="button"
            onClick={onDownload}
            className="p-1 text-[#5d586c] transition-colors hover:bg-slate-100 cursor-pointer"
            title="Tải xuống"
          >
            <Download className="size-4" />
          </button>
        )}
        {onFullscreen && (
          <button
            type="button"
            onClick={onFullscreen}
            className="p-1 text-[#5d586c] transition-colors hover:bg-slate-100 cursor-pointer"
            title="Toàn màn hình"
          >
            <Maximize2 className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}
