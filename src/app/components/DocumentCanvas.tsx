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

  return (
    <div className="relative bg-white shadow-md rounded overflow-hidden flex flex-col items-center border border-slate-200 w-full">
      <canvas ref={canvasRef} className="w-full h-auto rounded object-contain" />
      {region && (
        <div
          className="pointer-events-none absolute rounded-sm border-2 border-[#ff4c51] bg-[#ff4c51]/20 transition-all z-10"
          style={{
            left: `${region.x}%`,
            top: `${region.y}%`,
            width: `${region.w}%`,
            height: `${region.h}%`,
          }}
        />
      )}
      <div className="py-1 text-[11px] font-medium text-slate-400 border-t border-slate-100 w-full text-center bg-slate-50/50">
        Trang {pageNumber}
      </div>
    </div>
  );
}

function PdfMultiPageViewer({
  url,
  activeRegion,
}: {
  url: string;
  activeRegion: Region | null;
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
        console.warn("PDF load notice:", err);
        if (active) {
          setHasError(true);
          setLoading(false);
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
        Đang tải toàn bộ các trang tài liệu...
      </div>
    );
  }

  if (hasError || numPages === 0) {
    return (
      <div className="py-12 text-center text-xs text-slate-400">
        Đang hiển thị bản xem trước tài liệu.
      </div>
    );
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
  const widthPercentage = zoom === 100 ? "100%" : `${zoom}%`;

  if (streamUrl) {
    const isImg = streamUrl.match(/\.(png|jpg|jpeg|webp|gif)$/i);

    return (
      <div
        className="relative mx-auto bg-white shadow-md rounded overflow-hidden flex items-center justify-center p-2 w-full transition-all duration-150"
        style={{ width: widthPercentage, maxWidth: zoom <= 100 ? "100%" : `${zoom}%` }}
      >
        {isImg ? (
          <img src={streamUrl} alt="Document" className="w-full h-full object-contain" />
        ) : (
          <PdfMultiPageViewer url={streamUrl} activeRegion={region} />
        )}
      </div>
    );
  }

  return (
    <div
      className="relative mx-auto bg-white shadow-md w-full transition-all duration-150"
      style={{ width: widthPercentage, maxWidth: zoom <= 100 ? "100%" : `${zoom}%`, aspectRatio: "1 / 1.414" }}
    >
      <div className="p-8 text-[10px] leading-relaxed text-slate-700">
        <div className="mb-4 flex justify-between text-center">
          <div>
            <p className="font-bold">CÔNG TY TNHH MTV AN NINH MẠNG VIETTEL</p>
            <p>Số: TT-2025-041</p>
          </div>
          <div>
            <p className="font-bold">CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
            <p>Độc lập - Tự do - Hạnh phúc</p>
          </div>
        </div>
        <p className="mb-3 text-center font-bold">TỜ TRÌNH</p>
        <p className="mb-3 text-center italic">V/v: Đề nghị mua sắm thiết bị</p>
        <p className="mb-2">Kính gửi: Ban Giám đốc Công ty</p>
        <p className="mb-3">
          Căn cứ nhu cầu thực tế, phòng Hành chính - Quản trị kính trình Ban Giám đốc phê duyệt mua sắm
          thiết bị với các nội dung như sau:
        </p>
        <table className="mb-3 w-full border-collapse text-[9px]">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 p-1">STT</th>
              <th className="border border-slate-300 p-1">Tên hàng hoá</th>
              <th className="border border-slate-300 p-1">Mã hàng</th>
              <th className="border border-slate-300 p-1">SL</th>
              <th className="border border-slate-300 p-1">Đơn giá</th>
              <th className="border border-slate-300 p-1">Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 p-1 text-center">1</td>
              <td className="border border-slate-300 p-1">Máy in laser HP M712Dn</td>
              <td className="border border-slate-300 p-1">HP-M712DN</td>
              <td className="border border-slate-300 p-1 text-center">1</td>
              <td className="border border-slate-300 p-1 text-right">86.000.000</td>
              <td className="border border-slate-300 p-1 text-right">86.000.000</td>
            </tr>
          </tbody>
        </table>
        <p className="mb-1">Thông số kỹ thuật: In A3, in 2 mặt tự động, tốc độ 40 trang/phút.</p>
        <p className="mb-3">Đối tác cung cấp: Công ty Sao Bắc.</p>
      </div>

      {region && (
        <div
          className="pointer-events-none absolute rounded-sm border-2 border-[#ff4c51] bg-[#ff4c51]/20 transition-all"
          style={{
            left: `${region.x}%`,
            top: `${region.y}%`,
            width: `${region.w}%`,
            height: `${region.h}%`,
          }}
        />
      )}
    </div>
  );
}
