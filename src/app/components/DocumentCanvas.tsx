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
}

function SinglePageCanvas({
  url,
  pageNumber,
  region,
}: {
  url: string;
  pageNumber: number;
  region: Region | null;
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
    if (region && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [region]);

  return (
    <div
      ref={containerRef}
      className="relative bg-white shadow-md rounded overflow-hidden flex flex-col items-center border border-slate-200 w-full"
    >
      <div className="relative w-full flex justify-center">
        <canvas ref={canvasRef} className="w-full h-auto rounded object-contain" />
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
      <div className="py-1 text-[11px] font-medium text-slate-400 border-t border-slate-100 w-full text-center bg-slate-50/50">
        Trang {pageNumber}
      </div>
    </div>
  );
}

function PdfMultiPageViewer({
  url,
  activeRegion,
  onError,
}: {
  url: string;
  activeRegion: Region | null;
  onError?: () => void;
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
  }, [url]);

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
    <div className="w-full flex flex-col items-center gap-6 p-2">
      {Array.from({ length: numPages }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <SinglePageCanvas
            key={pageNumber}
            url={url}
            pageNumber={pageNumber}
            region={activeRegion && (activeRegion.page === pageNumber || activeRegion.page === 1) ? activeRegion : null}
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
  region,
  pdfUrl,
  docId,
}: DocumentCanvasProps) {
  const streamUrl = pdfUrl || (docId ? `/api/v1/documents/${docId}/preview` : null);
  const [pdfError, setPdfError] = useState(false);
  const widthPercentage = zoom === 100 ? "100%" : `${zoom}%`;

  useEffect(() => {
    setPdfError(false);
  }, [streamUrl]);

  if (streamUrl && !pdfError) {
    const isImg = streamUrl.match(/\.(png|jpg|jpeg|webp|gif)$/i);

    return (
      <div
        className="relative mx-auto bg-white shadow-md rounded overflow-hidden flex items-center justify-center p-2 w-full transition-all duration-150"
        style={{ width: widthPercentage, maxWidth: zoom <= 100 ? "100%" : `${zoom}%` }}
      >
        {isImg ? (
          <div className="relative w-full flex justify-center">
            <img
              src={streamUrl}
              alt="Document"
              className="w-full h-auto object-contain rounded"
              onError={() => setPdfError(true)}
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
          <PdfMultiPageViewer url={streamUrl} activeRegion={region} onError={() => setPdfError(true)} />
        )}
      </div>
    );
  }

  return <div className="p-8 text-center text-sm text-slate-500">Không thể tải bản xem trước tài liệu.</div>;
}
