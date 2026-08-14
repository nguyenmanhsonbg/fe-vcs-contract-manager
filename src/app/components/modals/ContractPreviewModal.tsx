import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { DocumentCanvas } from "../DocumentCanvas";
import { DocumentViewerToolbar, useDocumentPan, useWheelZoom } from "../DocumentViewerToolbar";
import { docApi } from "../../services/api";

export interface ContractPreviewData {
  templateId?: string;
  templateKey?: string;
  contractNumber?: string;
  contractForm?: string;
  packageName?: string;
  packageCode?: string;
  partyAName?: string;
  partyAAddress?: string;
  partyATaxCode?: string;
  partyARepresentative?: string;
  partyBName?: string;
  partyBAddress?: string;
  partyBTaxCode?: string;
  partyBRepresentative?: string;
  subtotalAmount?: number;
  taxFeeAmount?: number;
  totalAmount?: number;
  currency?: string;
  items?: Array<{
    lineNo: number;
    itemName: string;
    unit: string;
    quantity: number;
    unitPrice: number;
    lineTotal: number;
  }>;
  cleanPlaceholderDecorations?: boolean;
  clauseValues?: Record<string, unknown>;
}

interface ContractPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  contractData: ContractPreviewData;
}

export function ContractPreviewModal({ isOpen, onClose, contractData }: ContractPreviewModalProps) {
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [zoom, setZoom] = useState(100);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [rotation, setRotation] = useState(0);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  useWheelZoom(previewContainerRef, setZoom);
  const pan = useDocumentPan(previewContainerRef);
  const downloadPreviewPdf = async () => {
    const url = URL.createObjectURL(await docApi.previewContract({ ...contractData, cleanPlaceholderDecorations: true })); const link = document.createElement("a"); link.href = url; link.download = `${contractData.contractNumber || "contract"}_preview.pdf`; link.click(); URL.revokeObjectURL(url);
  };

  useEffect(() => {
    if (!isOpen) {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
        setPdfUrl(null);
      }
      return;
    }

    let isMounted = true;
    async function fetchPreviewPdf() {
      setLoading(true);
      setError(null);
      try {
        const blob = await docApi.previewContract(contractData);
        if (isMounted) {
          const url = URL.createObjectURL(blob);
          setPdfUrl(url);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || "Không thể tạo file PDF xem trước.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchPreviewPdf();

    return () => {
      isMounted = false;
    };
  }, [isOpen, contractData]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#f8f7fa] p-4">
      <div className="flex h-full w-full flex-col gap-4 overflow-hidden rounded-[6px] border border-slate-200 bg-white p-5 shadow-[0_4px_18px_rgba(75,70,92,0.1)]">
        <div className="flex shrink-0 items-center gap-3">
          <button onClick={onClose} className="rounded-[6px] p-1 text-[#2f2b3d] transition-colors hover:bg-slate-100" title="Quay lại"><ArrowLeft className="size-6" /></button>
          <h3 className="text-[20px] font-bold text-[#2f2b3d]">Xem trước hợp đồng</h3>
        </div>
        <DocumentViewerToolbar zoom={zoom} setZoom={setZoom} page={page} totalPages={totalPages} setPage={setPage} onRotate={() => setRotation((value) => value + 90)} onDownload={pdfUrl ? () => void downloadPreviewPdf() : undefined} onFullscreen={() => document.fullscreenElement ? void document.exitFullscreen() : void document.documentElement.requestFullscreen()} />
        <div ref={previewContainerRef} {...pan} className={`min-h-0 flex-1 overflow-auto rounded-[6px] border border-slate-200/80 bg-slate-100/50 p-6 shadow-[inset_0_1px_3px_rgba(47,43,61,0.08)] select-none ${pan.isDragging ? "cursor-grabbing" : "cursor-grab"}`}>
          {loading && (
            <div className="flex flex-col items-center justify-center space-y-3 text-zinc-500 dark:text-zinc-400">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <p className="text-sm">Đang nạp dữ liệu và tạo bản xem trước PDF...</p>
            </div>
          )}

          {error && (
            <div className="text-center p-6 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-lg max-w-md">
              <p className="text-red-700 dark:text-red-300 text-sm font-medium mb-2">{error}</p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-medium transition-colors"
              >
                Đóng
              </button>
            </div>
          )}

          {!loading && !error && pdfUrl && (
            <div className="w-full h-full flex justify-center">
              <div className="flex min-h-full min-w-full justify-center" style={{ minWidth: `${Math.max(100, zoom)}%` }}><DocumentCanvas zoom={zoom} page={page} rotation={rotation} region={null} pdfUrl={pdfUrl} onPageCount={setTotalPages} /></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
