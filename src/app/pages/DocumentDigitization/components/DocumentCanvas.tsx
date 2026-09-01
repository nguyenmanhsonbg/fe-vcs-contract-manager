import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

// Set worker to local bundled file via Vite
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

interface Region {
  page: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface DocumentCanvasProps {
  zoom: number;
  page: number;
  region: Region | null;
  pdfUrl?: string;
  docId?: string;
  onPageCount?: (count: number) => void;
  onError?: () => void;
  compact?: boolean;
  rotation?: number;
}

function SinglePageCanvas({
  url,
  pageNumber,
  activePage,
  region,
  rotation = 0,
  compact = false,
}: {
  url: string;
  pageNumber: number;
  activePage: number;
  region: Region | null;
  rotation?: number;
  compact?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    let active = true;

    async function renderPage() {
      try {
        const pdf = await pdfjsLib.getDocument({ url, withCredentials: false }).promise;
        if (!active) return;
        const pdfPage = await pdf.getPage(pageNumber);
        if (!active) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const viewport = pdfPage.getViewport({ scale: 2.0 });
        const context = canvas.getContext("2d");
        if (!context) return;

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await pdfPage.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;

        if (active) setRendered(true);
      } catch (err) {
        console.error(`Page ${pageNumber} render error:`, err);
      }
    }

    renderPage();

    return () => {
      active = false;
    };
  }, [url, pageNumber]);

  useEffect(() => {
    if ((region && (region.page === pageNumber || region.page === 1)) || activePage === pageNumber) {
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [region, activePage, pageNumber]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden flex flex-col items-center w-full transition-transform duration-200 ease-out ${compact ? "rounded-[2px] border border-slate-200/80 shadow-[0_1px_4px_rgba(47,43,61,0.12)]" : "rounded border border-slate-200/90 shadow-sm"}`}
      style={{
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
        transformOrigin: "center center",
      }}
    >
      <div className="relative w-full flex justify-center bg-white">
        <canvas ref={canvasRef} className="w-full h-auto rounded object-contain" />
        {region && (region.page === pageNumber || region.page === 1) && (
          <div
            className="pointer-events-none absolute rounded-sm border-2 border-[#ff4c51] bg-[#ff4c51]/25 shadow-[0_0_8px_rgba(255,76,81,0.5)] transition-all z-10 animate-pulse"
            style={{
              left: `${region.x}%`,
              top: `${region.y}%`,
              width: `${region.w}%`,
              height: `${region.h}%`,
            }}
          />
        )}
      </div>
      {!compact && (
        <div className="py-1 text-[11px] font-medium text-slate-500 border-t border-slate-100 w-full text-center bg-slate-50 shrink-0 select-none">
          Trang {pageNumber}
        </div>
      )}
    </div>
  );
}

function PdfMultiPageViewer({
  url,
  activePage = 1,
  activeRegion,
  rotation = 0,
  onError,
  onPageCount,
  compact,
}: {
  url: string;
  activePage?: number;
  activeRegion: Region | null;
  rotation?: number;
  onError?: () => void;
  onPageCount?: (count: number) => void;
  compact?: boolean;
}) {
  const [numPages, setNumPages] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadPdf() {
      if (!url) {
        setLoading(false);
        setHasError(true);
        onError?.();
        return;
      }
      try {
        setLoading(true);
        setHasError(false);
        const pdf = await pdfjsLib.getDocument({ url, withCredentials: false }).promise;
        if (!active) return;
        setNumPages(pdf.numPages || 1);
        onPageCount?.(pdf.numPages || 1);
        setLoading(false);
      } catch (err) {
        console.warn("PDF stream not available, switching to canvas fallback:", err);
        if (active) {
          setHasError(true);
          setLoading(false);
          onError?.();
        }
      }
    }

    loadPdf();

    return () => {
      active = false;
    };
  }, [url, onPageCount]);

  if (loading) {
    return (
      <div className="py-12 flex items-center justify-center text-xs text-slate-500 font-medium">
        Đang tải các trang tài liệu...
      </div>
    );
  }

  if (hasError || numPages === 0) {
    return null;
  }

  return (
    <div className={`w-full flex flex-col items-center ${compact ? "gap-0 p-0" : "gap-6 p-1"}`}>
      {Array.from({ length: numPages }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <SinglePageCanvas
            key={pageNumber}
            url={url}
            pageNumber={pageNumber}
            activePage={activePage}
            rotation={rotation}
            region={activeRegion}
            compact={compact}
          />
        );
      })}
    </div>
  );
}

/** Render file PDF thực tế từ Portal API stream hoặc HTML canvas highlight. */
export function DocumentCanvas({
  zoom,
  page,
  rotation = 0,
  region,
  pdfUrl,
  docId,
  onPageCount,
  onError,
  compact = false,
}: DocumentCanvasProps) {
  const streamUrl = pdfUrl || (docId ? `/api/v1/documents/${docId}/preview` : null);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    setPdfError(false);
  }, [streamUrl]);

  if (streamUrl && !pdfError) {
    const isImg = streamUrl.match(/\.(png|jpg|jpeg|webp|gif)$/i);

    return (
      <div
        className="relative mx-auto flex flex-col items-center justify-start p-1 transition-all duration-150 ease-out origin-top shrink-0"
        style={{
          width: `${zoom}%`,
          minWidth: `${zoom}%`,
        }}
      >
        {isImg ? (
          <div
            className="relative w-full flex justify-center transition-transform duration-200 ease-out bg-white rounded border border-slate-200 shadow-sm overflow-hidden"
            style={{
              transform: rotation ? `rotate(${rotation}deg)` : undefined,
              transformOrigin: "center center",
            }}
          >
            <img
              src={streamUrl}
              alt="Document"
              className="w-full h-auto object-contain rounded"
              onError={() => {
                setPdfError(true);
                onError?.();
              }}
            />
            {region && (
              <div
                className="pointer-events-none absolute rounded-sm border-2 border-[#ff4c51] bg-[#ff4c51]/25 shadow-[0_0_8px_rgba(255,76,81,0.5)] transition-all z-10 animate-pulse"
                style={{
                  left: `${region.x}%`,
                  top: `${region.y}%`,
                  width: `${region.w}%`,
                  height: `${region.h}%`,
                }}
              />
            )}
          </div>
        ) : (
          <PdfMultiPageViewer
            url={streamUrl}
            activePage={page}
            activeRegion={region}
            rotation={rotation}
            onError={() => {
              setPdfError(true);
              onError?.();
            }}
            onPageCount={onPageCount}
            compact={compact}
          />
        )}
      </div>
    );
  }

  return (
    <div className="p-8 text-center text-sm text-slate-500">
      Không thể tải bản xem trước tài liệu.
    </div>
  );
}
