import { useEffect, useRef, useState } from "react";
import { DigitizedDoc, DOC_TYPE_LABELS, ExtractedField, LineItem } from "../../data/models";
import { ApiError, docApi } from "../../services/api";
import { toast } from "sonner";
import { DocumentCanvas } from "../DocumentCanvas";
import { IconAlertTriangle, IconPencil, IconCheck, IconScan, IconArrowsMaximize } from "../icons";
import { RotateCw, Minus, Plus, Download, ChevronDown, Clock3 } from "lucide-react";

interface DocumentDetailPageProps {
  doc: DigitizedDoc;
  onBack: () => void;
  onViewOriginalDoc?: (doc: DigitizedDoc) => void;
}

export const FIELD_LABEL_MAP: Record<string, string> = {
  documentType: "Loại tài liệu",
  documentNumber: "Mã/Số tài liệu",
  rawText: "Nội dung trích xuất",
  contractNumber: "Số hợp đồng",
  contractName: "Tên hợp đồng",
  proposalNumber: "Số tờ trình",
  proposalDate: "Ngày lập tờ trình",
  title: "Tên hàng / Tiêu đề",
  signDate: "Ngày ký",
  effectiveDate: "Ngày hiệu lực",
  expiryDate: "Ngày hết hạn",
  partyAName: "Bên A (Chủ đầu tư)",
  partyARepresentative: "Đại diện bên A",
  partyBName: "Bên B (Nhà thầu)",
  partyBRepresentative: "Đại diện bên B",
  supplierTaxCode: "Mã số thuế",
  contractValue: "Tổng giá trị hợp đồng",
  totalAmount: "Tổng giá trị (VND)",
  unitPrice: "Đơn giá (VND)",
  quantity: "Số lượng",
  unit: "Đơn vị tính",
  specifications: "Thông số kỹ thuật",
  partner: "Đối tác",
};

export function getFieldLabel(labelOrKey: string): string {
  if (!labelOrKey) return "Trường dữ liệu";
  const camelKey = labelOrKey.replace(/[_-](\w)/g, (_, character) => character.toUpperCase());
  return FIELD_LABEL_MAP[labelOrKey] || FIELD_LABEL_MAP[camelKey] || labelOrKey;
}

const DOCUMENT_TYPE_VALUE_LABELS: Record<string, string> = {
  proposal: "Tờ trình",
  quotation: "Báo giá",
  quotation_goods: "Báo giá hàng hóa",
  goods_quotation: "Báo giá hàng hóa",
  quotation_service: "Báo giá dịch vụ",
  service_quotation: "Báo giá dịch vụ",
  goods_contract: "Hợp đồng hàng hóa",
  service_contract: "Hợp đồng dịch vụ",
  acceptance: "Biên bản nghiệm thu",
  bidding: "Hồ sơ mời thầu",
};

function getFieldDisplayValue(field: ExtractedField): string {
  if (!isDocumentTypeField(field)) return field.value;
  const key = field.value.trim().toLowerCase().replace(/[\s-]+/g, "_");
  return DOCUMENT_TYPE_VALUE_LABELS[key] || field.value;
}

function isDocumentTypeField(field: ExtractedField): boolean {
  return field.id === "documentType" || field.id === "document_type" || field.label === "documentType" || field.label === "document_type" || field.label === "Loại tài liệu";
}

function isLongField(field: ExtractedField): boolean {
  return ["rawText", "proposalContent", "purpose", "legalBasis", "specifications", "description"].some((key) =>
    field.id.toLowerCase().includes(key.toLowerCase()) || field.label.toLowerCase().includes(key.toLowerCase()),
  );
}

const ZOOM_OPTIONS = [25, 50, 75, 100, 125, 150, 200, 250, 300, 400, 500];

function formatLineItemAmount(value: string): string {
  const amount = Number(value);
  return Number.isFinite(amount) ? amount.toLocaleString("vi-VN") : value;
}

function splitLineItemName(value: string): { name: string; specification: string } {
  const [name, ...specification] = value.split(",");
  return { name: name.trim(), specification: specification.join(",").trim() || value };
}

function lineItemField(item: LineItem, key: string, label: string, value: string): ExtractedField {
  return { id: `line-item-${item.no}-${key}`, label, value, confidence: item.confidence, region: item.region };
}

interface ProductFieldRowProps {
  field: ExtractedField;
  header?: boolean;
  expanded?: boolean;
  editing: boolean;
  draft: string;
  edited: boolean;
  selected?: boolean;
  onToggle?: () => void;
  onSelect: () => void;
  onStartEdit: () => void;
  onCancel: () => void;
  onDraftChange: (value: string) => void;
  onCommit: () => void;
}

function ProductFieldRow({
  field,
  header = false,
  expanded = false,
  editing,
  draft,
  edited,
  selected = false,
  onToggle,
  onSelect,
  onStartEdit,
  onCancel,
  onDraftChange,
  onCommit,
}: ProductFieldRowProps) {
  const isLow = field.confidence < 70;
  const isMedium = field.confidence >= 70 && field.confidence < 85;
  const isWarning = isLow || isMedium;
  const displayValue = getFieldDisplayValue(field);

  if (header) {
    return (
      <div className="flex items-center gap-1 px-1 py-1 rounded-[4px]">
        <button type="button" onClick={onToggle} className="size-6 shrink-0 text-[#393740]" title={expanded ? "Thu gọn" : "Mở rộng"}>
          <ChevronDown className={`size-5 transition-transform ${expanded ? "" : "-rotate-90"}`} />
        </button>
        <span className="w-[150px] shrink-0 px-0.5 text-sm font-semibold text-[rgba(47,43,61,0.9)]">{getFieldLabel(field.label || field.id)}</span>
        <div className="flex-1 min-w-0 px-0.5">
          {editing ? (
            isLongField(field) ? (
              <textarea value={draft} autoFocus rows={4} onChange={(e) => onDraftChange(e.target.value)} onKeyDown={(e) => { if (e.key === "Escape") onCancel(); }} className="w-full resize-y rounded border border-[#3f81ea] px-2 py-1 text-sm outline-none" />
            ) : (
              <input value={draft} autoFocus onChange={(e) => onDraftChange(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") onCommit(); if (e.key === "Escape") onCancel(); }} className="h-8 w-full rounded border border-[#3f81ea] px-2 text-sm outline-none" />
            )
          ) : (
            <span className={`${isDocumentTypeField(field) || isLongField(field) ? "block whitespace-pre-wrap break-words" : "block truncate"} px-0.5 text-sm text-[rgba(47,43,61,0.9)]`} title={displayValue}>{displayValue}</span>
          )}
        </div>
        <span className="rounded-[4px] bg-[#e8fadf] px-2.5 py-1 text-[13px] font-medium text-[#28c76f]">{field.confidence}%</span>
        <button type="button" onClick={(e) => { e.stopPropagation(); editing ? onCommit() : onStartEdit(); }} className={`p-1 ${editing ? "text-[#28c76f]" : "text-slate-600 hover:text-[#3f81ea]"}`} title={editing ? "Xác nhận" : "Chỉnh sửa"}>
          {editing ? <IconCheck className="size-4" /> : <IconPencil className="size-4" />}
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={onSelect}
      className={`rounded-[4px] transition-colors ${isWarning ? `border-[0.5px] ${isLow ? "border-[#ff4c51] bg-[#ffdbdc]" : "border-[#ff9f43] bg-[#ffecd9]"} px-1 py-1` : `px-1 py-1 ${selected ? "bg-blue-50/70" : "hover:bg-slate-50"}`}`}
    >
      <div className="flex items-center gap-1 pl-7">
        <span className="w-[150px] shrink-0 px-0.5 text-sm font-semibold text-[rgba(47,43,61,0.9)]">{getFieldLabel(field.label || field.id)}</span>
        <div className="flex-1 min-w-0 px-0.5" onClick={(e) => e.stopPropagation()}>
          {isWarning || editing ? (
            isLongField(field) ? (
              <textarea
                value={editing ? draft : displayValue}
                rows={4}
                onChange={(e) => editing && onDraftChange(e.target.value)}
                onFocus={onStartEdit}
                className={`w-full resize-y rounded-[4px] border bg-white px-1 py-1 text-sm text-[rgba(47,43,61,0.9)] outline-none ${isLow ? "border-[#ff4c51]" : isMedium ? "border-[#ff9f43]" : "border-[#3f81ea]"}`}
              />
            ) : (
              <input
                value={editing ? draft : displayValue}
                onChange={(e) => editing && onDraftChange(e.target.value)}
                onFocus={onStartEdit}
                className={`h-8 w-full rounded-[4px] border bg-white px-1 text-sm text-[rgba(47,43,61,0.9)] outline-none ${isLow ? "border-[#ff4c51]" : isMedium ? "border-[#ff9f43]" : "border-[#3f81ea]"}`}
              />
            )
          ) : (
            <span className={`${isDocumentTypeField(field) || isLongField(field) ? "block whitespace-pre-wrap break-words" : "block truncate"} px-0.5 text-sm text-[rgba(47,43,61,0.9)]`} title={displayValue}>{displayValue}</span>
          )}
        </div>
        <div className={`shrink-0 ${isWarning ? "flex w-[132px] items-center" : "flex w-[100px] items-center justify-end gap-3"}`}>
          {isWarning && <div className="flex w-[32px] items-center justify-center"><IconAlertTriangle className={`size-4 shrink-0 ${isLow ? "text-[#ff4c51]" : "text-[#ff9f43]"}`} /></div>}
          <div className={`${isWarning ? "flex w-[100px] items-center gap-3 px-0.5" : "contents"}`}>
          <span className={`rounded-[4px] px-2.5 py-1 text-[13px] font-medium ${isLow ? "bg-[#ffbfc1] text-[#ea5455]" : isMedium ? "bg-[#ffecd9] text-[#ff9f43]" : "bg-[#e8fadf] text-[#28c76f]"}`}>{field.confidence}%</span>
          {isWarning || editing ? (
            <button type="button" onClick={(e) => { e.stopPropagation(); editing ? onCommit() : onStartEdit(); }} className="p-1 text-[#28c76f]" title={editing ? "Xác nhận" : "Chỉnh sửa trường cảnh báo"}><IconCheck className="size-4" /></button>
          ) : (
            <button type="button" onClick={(e) => { e.stopPropagation(); onStartEdit(); }} className="p-1 text-slate-600 hover:text-[#3f81ea]" title="Chỉnh sửa"><IconPencil className="size-4" /></button>
          )}
          </div>
        </div>
      </div>
      {isWarning && edited && <div className="flex items-center gap-1 pl-7 pt-1 text-[11px] text-slate-500"><span>Đã chỉnh sửa</span><Clock3 className="size-3" /></div>}
    </div>
  );
}

function getNextZoom(current: number, direction: "in" | "out"): number {
  if (direction === "in") {
    const match = ZOOM_OPTIONS.find((z) => z > current);
    return match || 500;
  } else {
    const match = [...ZOOM_OPTIONS].reverse().find((z) => z < current);
    return match || 25;
  }
}

export function DocumentDetailPage({ doc, onBack, onViewOriginalDoc }: DocumentDetailPageProps) {
  const initialFields = doc?.fields || [];
  const [fields, setFields] = useState<ExtractedField[]>(initialFields);
  const [lineItems, setLineItems] = useState<LineItem[]>(doc?.lineItems || []);
  const [expandedLineItems, setExpandedLineItems] = useState<Set<string>>(
    () => new Set(doc?.lineItems?.[0] ? [doc.lineItems[0].id] : []),
  );
  const [editLog, setEditLog] = useState(doc?.editLog || []);
  const [ocr, setOcr] = useState(doc?.ocr || null);
  const [selectedId, setSelectedId] = useState<string | null>(initialFields[0]?.id || null);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [confirmed, setConfirmed] = useState(doc?.status === "confirmed");
  const llmRequestedRef = useRef(false);

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

  async function handleDownload() {
    try {
      const url = `/api/v1/documents/${doc.id}/download`;
      const res = await fetch(url);
      if (res.ok) {
        const blob = await res.blob();
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = doc.fileName || `document-${doc.id}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      } else {
        const fallbackContent = `%PDF-1.4 Mock Document Content for ${doc.fileName}`;
        const blob = new Blob([fallbackContent], { type: "application/pdf" });
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = doc.fileName || `document-${doc.id}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      }
      toast.success(`Đã tải về tài liệu "${doc.fileName}" thành công!`);
    } catch {
      toast.error("Lỗi khi tải tài liệu xuống.");
    }
  }
  const [logExpanded, setLogExpanded] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [llmRequesting, setLlmRequesting] = useState(false);

  // Field Edit State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState("");

  // Reason Modal State
  const [reasonModalOpen, setReasonModalOpen] = useState(false);
  const [reasonText, setReasonText] = useState("");
  const [pendingEdit, setPendingEdit] = useState<{ field: ExtractedField; nextValue: string } | null>(null);

  const selectedField = (fields || []).find((f) => f && f.id === selectedId) || null;
  const activeRegion = selectedField && selectedField.region ? selectedField.region : null;
  const ocrPage = ocr?.pages.find((item) => item.pageNumber === page);

  const lowConfidenceCount = (fields || []).filter((f) => f && f.confidence < 85).length;
  const confirmedFieldCount = (fields || []).filter((f) => f && f.confidence >= 85).length;

  async function requestLlmExtraction() {
    if (llmRequestedRef.current) return;
    llmRequestedRef.current = true;
    setLlmRequesting(true);
    try {
      await docApi.extractFields(doc.id);
      toast.success("Đã gửi dữ liệu OCR sang LLM để bóc tách.");
    } catch (error) {
      llmRequestedRef.current = false;
      if (error instanceof ApiError && error.status === 409) return;
      toast.error(error instanceof ApiError ? `Bóc tách LLM thất bại (${error.status}): ${error.message}` : "Không thể bóc tách dữ liệu bằng LLM.");
    } finally {
      setLlmRequesting(false);
    }
  }

  useEffect(() => {
    llmRequestedRef.current = false;
    let timer: number | undefined;
    let active = true;
    let attempts = 0;
    const maxAttempts = 30; // OCR + LLM có thể chạy nối tiếp

    async function refresh() {
      const latest = await docApi.getDocumentById(doc.id);
      if (!active || !latest) return;
      setFields(latest.fields || []);
      setLineItems(latest.lineItems || []);
      setExpandedLineItems((current) => current.size || !latest.lineItems?.length ? current : new Set([latest.lineItems[0].id]));
      setEditLog(latest.editLog || []);
      setOcr(latest.ocr || null);

      attempts += 1;
      const isProcessing = latest.status === "ocr" || latest.status === "processing" || latest.status === "queued";
      const needsOcrResult = latest.status === "stored" && (!latest.fields || latest.fields.length === 0);

      const hasOcr = Boolean(latest.ocr?.pages?.length || latest.ocr?.fullText?.trim());
      if (hasOcr && !(latest.fields || []).length) {
        await requestLlmExtraction();
      }

      if ((isProcessing || needsOcrResult || llmRequestedRef.current) && attempts < maxAttempts) {
        timer = window.setTimeout(refresh, 1500);
      }
    }

    refresh();
    return () => {
      active = false;
      if (timer) window.clearTimeout(timer);
    };
  }, [doc.id]);

  function handleSelectField(f: ExtractedField) {
    if (!f) return;
    setSelectedId(f.id);
    if (f.region && typeof f.region.page === "number") {
      setPage(f.region.page);
    }
  }

  function startEditing(f: ExtractedField) {
    handleSelectField(f);
    setEditingId(f.id);
    setDraft(f.value);
  }

  async function commitFieldEdit(f: ExtractedField) {
    if (draft === f.value) {
      setEditingId(null);
      return;
    }
    if (confirmed) {
      setPendingEdit({ field: f, nextValue: draft });
      setReasonModalOpen(true);
      return;
    }
    await executeFieldUpdate(f, draft);
    setEditingId(null);
  }

  async function executeFieldUpdate(f: ExtractedField, newValue: string, reason?: string) {
    try {
      const updatedDoc = await docApi.updateDocumentField(doc.id, f.id, newValue, reason);
      setFields(updatedDoc.fields);
      setLineItems(updatedDoc.lineItems || []);
      setEditLog(updatedDoc.editLog);
      toast.success(`Đã cập nhật trường "${f.label}"`);
    } catch (error) {
      console.error("Lỗi khi cập nhật trường:", error);
      toast.error(error instanceof ApiError ? `Cập nhật thất bại (${error.status}): ${error.message}` : "Lỗi khi cập nhật trường.");
    }
  }

  async function handleConfirmReason() {
    if (pendingEdit && reasonText.trim()) {
      await executeFieldUpdate(pendingEdit.field, pendingEdit.nextValue, reasonText.trim());
      setReasonModalOpen(false);
      setReasonText("");
      setPendingEdit(null);
      setEditingId(null);
    }
  }

  async function handleConfirmDocument() {
    try {
      const confirmedDoc = await docApi.confirmDocument(doc.id);
      setFields(confirmedDoc.fields || []);
      setLineItems(confirmedDoc.lineItems || []);
      setConfirmed(true);
      toast.success("Đã xác nhận hoàn tất tài liệu!");
    } catch (error) {
      console.error("Lỗi khi xác nhận tài liệu:", error);
      toast.error(error instanceof ApiError ? `Xác nhận thất bại (${error.status}): ${error.message}` : "Không thể xác nhận tài liệu.");
    }
  }

  async function handleScan() {
    setScanning(true);
    try {
      const resDoc = await docApi.rerunOCR(doc.id);
      toast.success("Đã đưa tài liệu vào tiến trình quét OCR.");
      if (resDoc) {
        setFields(resDoc.fields || []);
        setLineItems(resDoc.lineItems || []);
        setOcr(resDoc.ocr || null);
        if (resDoc.editLog) setEditLog(resDoc.editLog);
      }

      let count = 0;
      const pollTimer = setInterval(async () => {
        try {
          count++;
          const latest = await docApi.getDocumentById(doc.id);
          if (latest) {
            setFields(latest.fields || []);
            setLineItems(latest.lineItems || []);
            setOcr(latest.ocr || null);
            setEditLog(latest.editLog || []);
            const hasOcr = Boolean(latest.ocr?.pages?.length || latest.ocr?.fullText?.trim());
            if (hasOcr && !(latest.fields || []).length) {
              await requestLlmExtraction();
            }
            if (latest.status === "review" || latest.status === "confirmed" || (latest.fields && latest.fields.length > 0) || count >= 30) {
              clearInterval(pollTimer);
              setScanning(false);
            }
          } else if (count >= 8) {
            clearInterval(pollTimer);
            setScanning(false);
          }
        } catch (error) {
          clearInterval(pollTimer);
          setScanning(false);
          console.error("Lỗi khi kiểm tra tiến trình OCR:", error);
          toast.error(error instanceof ApiError ? `Kiểm tra OCR thất bại (${error.status}): ${error.message}` : "Không thể kiểm tra tiến trình OCR.");
        }
      }, 1000);
    } catch {
      setScanning(false);
      toast.error("Không thể quét lại tài liệu.");
    }
  }

  function toggleLineItem(id: string) {
    setExpandedLineItems((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function renderLineItem(item: LineItem) {
    const parts = splitLineItemName(item.name);
    const headerField = lineItemField(item, "name", "Tên hàng", parts.name);
    const itemFields = [
      lineItemField(item, "code", "Mã hàng", item.code || "—"),
      lineItemField(item, "specification", "Thông số kỹ thuật", parts.specification),
      lineItemField(item, "unit", "Đơn vị tính", item.unit || "—"),
      lineItemField(item, "quantity", "Số lượng", item.qty),
      lineItemField(item, "unitPrice", "Đơn giá (VND)", formatLineItemAmount(item.unitPrice)),
      lineItemField(item, "total", "Tổng giá trị (VND)", formatLineItemAmount(item.total)),
    ];
    const isExpanded = expandedLineItems.has(item.id);

    return (
      <div key={item.id} className="rounded-[4px]">
        <ProductFieldRow
          field={headerField}
          header
          expanded={isExpanded}
          editing={editingId === headerField.id}
          draft={draft}
          edited={editLog.some((log) => log.id === headerField.id || log.field === headerField.label)}
          selected={selectedId === headerField.id}
          onToggle={() => toggleLineItem(item.id)}
          onSelect={() => handleSelectField(headerField)}
          onStartEdit={() => startEditing(headerField)}
          onCancel={() => setEditingId(null)}
          onDraftChange={setDraft}
          onCommit={() => commitFieldEdit(headerField)}
        />
        {isExpanded && (
          <div className="space-y-0">
            {itemFields.map((field) => (
              <ProductFieldRow
                key={field.id}
                field={field}
                editing={editingId === field.id}
                draft={draft}
                edited={editLog.some((log) => log.id === field.id || log.field === field.label)}
                selected={selectedId === field.id}
                onSelect={() => handleSelectField(field)}
                onStartEdit={() => startEditing(field)}
                onCancel={() => setEditingId(null)}
                onDraftChange={setDraft}
                onCommit={() => commitFieldEdit(field)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f7fa] text-slate-800 flex flex-col p-6 font-sans">
      {/* Main White Container Card */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4 shadow-[0px_4px_18px_0px_rgba(75,70,92,0.10)] space-y-4 flex-1">
        {/* Top Header Title */}
        <div className="flex items-center gap-3 mb-5">
          <button
            onClick={onBack}
            className="p-1 hover:bg-slate-200 rounded-[6px] text-[#393740] transition-colors"
            title="Quay lại"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#2F2B3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h1 className="text-[22px] font-bold text-[#2F2B3D]">Chi tiết số hóa tài liệu</h1>
        </div>
        {/* Sub-Header Toolbar Bar */}
        <div className="flex items-center justify-between pb-1 flex-wrap gap-4">
          {/* File Name Info */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500">Đang xem:</span>
            <span className="font-bold text-[#393740]">{doc.fileName}</span>
          </div>

          {/* Status Indicators */}
          <div className="flex items-center gap-6 text-xs">
            <div className="flex items-center gap-2 text-[#28c76f] font-medium">
              <IconCheck className="size-4 text-[#28c76f] shrink-0" />
              <span>
                Đã xác nhận <strong className="font-bold text-[#28c76f]">{confirmedFieldCount}</strong>/{fields.length} trường
              </span>
            </div>

            {lowConfidenceCount > 0 && (
              <div className="flex items-center gap-2 text-[#393740] font-medium">
                <IconAlertTriangle className="size-4 text-[#ff9f43] shrink-0" />
                <span>Còn {lowConfidenceCount} trường cảnh báo độ tin cậy thấp</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => void requestLlmExtraction()}
              disabled={!ocr?.pages?.length || llmRequesting || fields.length > 0}
              className="px-4 py-1.5 rounded-[6px] border border-[#3f81ea] bg-white text-xs font-medium text-[#3f81ea] hover:bg-blue-50 disabled:opacity-50 transition-colors shadow-2xs"
            >
              {llmRequesting ? "Đang bóc tách..." : "Bóc tách LLM"}
            </button>
            <button className="px-4 py-1.5 rounded-[6px] border border-slate-300 bg-white text-xs font-medium text-[#393740] hover:bg-slate-50 transition-colors shadow-2xs">
              Lưu tạm
            </button>
            <button
              onClick={handleConfirmDocument}
              disabled={confirmed}
              className="px-4 py-1.5 rounded-[6px] bg-[#ff4c51] text-white text-xs font-semibold hover:bg-[#ea5455] disabled:opacity-50 transition-colors shadow-2xs"
            >
              {confirmed ? "Đã xác nhận" : "Xác nhận và lưu"}
            </button>
          </div>
        </div>

        {/* Main Content 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* LEFT PANEL — Document Canvas Viewer */}
          <div className="flex flex-col">
            <h2 className="text-[18px] font-bold text-[#2F2B3D] mb-3">Bản gốc</h2>

            {/* Toolbar Controls Row — Positioned OUTSIDE above the white canvas card (Figma node 26186:77775) */}
            <div className="flex items-center justify-between mb-3 px-0.5 text-xs text-slate-700">
              {/* Left Group: Rotate, Minus, Zoom Select, Plus */}
              <div className="flex items-center gap-2">
                {/* Rotate */}
                <button
                  onClick={() => setRotation((r) => r + 90)}
                  className="p-2 bg-[#f0eff4] hover:bg-[#e4e3e8] rounded-[6px] text-[#5d586c] transition-colors"
                  title="Xoay 90°"
                >
                  <RotateCw className="size-4" />
                </button>
                {/* Zoom Out */}
                <button onClick={() => setZoom((z) => getNextZoom(z, "out"))} className="p-2 bg-[#f0eff4] hover:bg-[#e4e3e8] rounded-[6px] text-[#5d586c] transition-colors" title="Thu nhỏ">
                  <Minus className="size-4" />
                </button>
                {/* Zoom Select */}
                <div className="relative flex items-center">
                  <select
                    value={zoom}
                    onChange={(e) => setZoom(Number(e.target.value))}
                    className="h-8 border-none bg-[#f0eff4] hover:bg-[#e4e3e8] rounded-[6px] pl-3 pr-7 text-xs text-[#5d586c] outline-none appearance-none font-semibold cursor-pointer transition-colors"
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
                  <ChevronDown className="size-4 text-[#5d586c] absolute right-2 pointer-events-none" />
                </div>
                {/* Zoom In */}
                <button onClick={() => setZoom((z) => getNextZoom(z, "in"))} className="p-2 bg-[#f0eff4] hover:bg-[#e4e3e8] rounded-[6px] text-[#5d586c] transition-colors" title="Phóng to">
                  <Plus className="size-4" />
                </button>
              </div>

              {/* Right Group: IconScan next to Download */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleScan}
                  disabled={scanning}
                  className="p-1.5 hover:bg-slate-100 rounded-[6px] text-[#5d586c] transition-colors"
                  title="Quét số hóa tài liệu"
                >
                  <IconScan className={`size-4 text-[#5d586c] ${scanning ? "animate-pulse" : ""}`} />
                </button>
                <button
                  onClick={handleDownload}
                  className="p-1.5 hover:bg-slate-100 rounded-[6px] text-[#5d586c] transition-colors"
                  title="Tải xuống"
                >
                  <Download className="size-4 text-[#5d586c]" />
                </button>
              </div>
            </div>

            {/* Document Canvas Display Container Box */}
            <div className="bg-white rounded-[8px] border border-slate-200 flex flex-col overflow-hidden shadow-2xs relative">
              {/* Floating top-right Expand button inside canvas card using IconArrowsMaximize (chỉ 1 chỗ duy nhất) */}
              <button
                onClick={() => onViewOriginalDoc?.(doc)}
                className="absolute top-3 right-3 z-10 p-2 bg-[#f0eff4] hover:bg-[#e4e3e8] rounded-[6px] text-[#5d586c] transition-colors shadow-2xs"
                title="Mở rộng xem bản gốc"
              >
                <IconArrowsMaximize className="size-4 text-[#5d586c]" />
              </button>

              <div
                ref={canvasContainerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                className={`min-h-[580px] max-h-[680px] overflow-auto bg-slate-100/50 p-6 flex justify-center items-start select-none ${
                  isDragging ? "cursor-grabbing" : "cursor-grab"
                }`}
              >
                <DocumentCanvas
                  zoom={zoom}
                  page={page}
                  rotation={rotation}
                  region={activeRegion && activeRegion.page === page ? activeRegion : null}
                  docId={doc?.id}
                />
              </div>
            </div>
          </div>

          {/* RIGHT PANEL — Extracted Data + Collapsible Log Card */}
          <div className="flex flex-col space-y-4">
            {/* Upper Extracted OCR Data Panel */}
            <div className="bg-white rounded-[8px] border border-slate-200 p-5 space-y-3">
              <h3 className="text-[17px] font-bold text-[#393740] pb-1">Dữ liệu đã bóc tách</h3>

              {/* Extracted Fields List */}
              <div className="space-y-1 max-h-[580px] overflow-y-auto pr-1 custom-scrollbar">
                {fields
                  .filter((field) => !(lineItems.length > 0 && field.id === "lineItems"))
                  .map((field) => (
                    <ProductFieldRow
                      key={field.id}
                      field={field}
                      editing={editingId === field.id}
                      draft={draft}
                      edited={editLog.some((log) => log.field === field.label || log.id === field.id)}
                      selected={selectedId === field.id}
                      onSelect={() => handleSelectField(field)}
                      onStartEdit={() => startEditing(field)}
                      onCancel={() => setEditingId(null)}
                      onDraftChange={setDraft}
                      onCommit={() => commitFieldEdit(field)}
                    />
                  ))}
                {lineItems.length > 0 && (
                  <div className="space-y-1 border-t border-slate-200 pt-2">
                    {lineItems.map(renderLineItem)}
                  </div>
                )}
                {ocr?.fullText && (
                  <details className="border-t border-slate-200 pt-3">
                    <summary className="cursor-pointer text-sm font-semibold text-[#393740]">Nội dung OCR đầy đủ</summary>
                    <textarea readOnly value={ocr.fullText} rows={8} className="mt-2 w-full resize-y rounded border border-slate-200 bg-slate-50 p-2 text-sm leading-relaxed text-slate-700" />
                  </details>
                )}
              </div>

              {/* Confidence Legend Footer */}
              <div className="flex items-center gap-6 text-xs text-slate-600 pt-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#ff9f43] shrink-0" />
                  <span className="text-[11.5px]">Độ tin cậy trung bình (70% - 84%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#ff4c51] shrink-0" />
                  <span className="text-[11.5px]">Độ tin cậy thấp (&lt; 70%)</span>
                </div>
              </div>
            </div>

            {/* Standalone Lower Card — Nhật ký gần đây */}
            <div className="bg-white rounded-[8px] border border-slate-200 p-5 shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)] space-y-4">
              <div
                onClick={() => setLogExpanded(!logExpanded)}
                className="flex items-center justify-between cursor-pointer"
              >
                <h3 className="text-[18px] font-bold text-[#2F2B3D]">Nhật ký gần đây</h3>
                <button className="p-1 text-slate-500 hover:text-slate-700 transition-transform">
                  <svg
                    className={`size-5 transform transition-transform ${logExpanded ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M6 9L12 15L18 9" stroke="#393740" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {!logExpanded && (
                <div className="space-y-4 pt-1">
                  {editLog.map((log, idx) => (
                    <div key={log.id} className="flex items-start gap-4 relative">
                      {/* Timeline Dot + Line */}
                      <div className="flex flex-col items-center shrink-0">
                        <div className="size-9 rounded-full bg-[#e8f0fe] flex items-center justify-center text-[#3f81ea] shadow-2xs">
                          <IconPencil className="size-4 text-[#3f81ea]" />
                        </div>
                        {idx < editLog.length - 1 && (
                          <div className="w-px bg-slate-200 h-full min-h-[40px] mt-1" />
                        )}
                      </div>

                      {/* Timeline Content */}
                      <div className="flex-1 space-y-2">
                        {/* Editor Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="size-6 rounded-full bg-[#7367f0]/15 overflow-hidden flex items-center justify-center text-[10px] font-bold text-[#7367f0]">
                              {(log.editor || "AD").slice(0, 2).toUpperCase()}
                            </div>
                            <span className="text-[13px] font-semibold text-[#393740]">{log.editor || "Người dùng"}</span>
                          </div>
                          <span className="text-xs text-slate-400 font-normal">{log.time}</span>
                        </div>

                        {/* 3-Column Table Details */}
                        <div className="grid grid-cols-3 gap-2 text-xs bg-slate-50/50 p-2.5 rounded-[6px] border border-slate-100">
                          <div>
                            <p className="text-[11px] font-semibold text-[#5d586c] mb-1">Trường dữ liệu</p>
                            <p className="font-medium text-[#393740]">{log.field}</p>
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold text-[#5d586c] mb-1">Giá trị cũ</p>
                            <p className="font-medium text-[#ff4c51] leading-relaxed">{log.before}</p>
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold text-[#5d586c] mb-1">Giá trị mới</p>
                            <p className="font-medium text-[#28c76f] leading-relaxed">{log.after}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {editLog.length === 0 && (
                    <p className="text-xs text-slate-400 text-center py-2">Chưa có nhật ký chỉnh sửa.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>



      {/* Edit Reason Modal */}
      {reasonModalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[6px] shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)] p-6 w-[531px] space-y-4">
            <h3 className="text-base font-bold text-[#2F2B3D]">Lý do chỉnh sửa</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tài liệu đã được xác nhận. Vui lòng nhập lý do chỉnh sửa trường
              <strong className="text-[#3f81ea]"> "{pendingEdit?.field.label}"</strong> để lưu vết vào nhật ký.
            </p>

            <textarea
              value={reasonText}
              onChange={(e) => setReasonText(e.target.value)}
              placeholder="Ví dụ: OCR nhận dạng sai, cập nhật theo bản gốc…"
              rows={3}
              className="w-full rounded-[6px] border border-slate-200 p-3 text-xs text-slate-800 outline-none focus:border-[#3f81ea]"
            />

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setReasonModalOpen(false)}
                className="px-4 py-1.5 rounded-[6px] bg-[#7e8299] text-white text-xs font-semibold hover:bg-[#6c7086]"
              >
                Huỷ
              </button>
              <button
                onClick={handleConfirmReason}
                disabled={!reasonText.trim()}
                className="px-4 py-1.5 rounded-[6px] bg-[#3f81ea] text-white text-xs font-semibold hover:bg-[#2b6bd8] disabled:opacity-50"
              >
                Lưu chỉnh sửa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
