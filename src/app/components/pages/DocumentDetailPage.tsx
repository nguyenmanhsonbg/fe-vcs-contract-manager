import { useEffect, useState } from "react";
import { DigitizedDoc, DOC_TYPE_LABELS, ExtractedField } from "../../data/models";
import { docApi } from "../../services/api";
import { toast } from "sonner";
import { DocumentCanvas } from "../DocumentCanvas";
import { IconAlertTriangle, IconPencil, IconCheck, IconScan, IconArrowsMaximize } from "../icons";
import { RotateCw, Minus, Plus, Download, ChevronDown } from "lucide-react";

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
  return FIELD_LABEL_MAP[labelOrKey] || labelOrKey;
}

export function DocumentDetailPage({ doc, onBack, onViewOriginalDoc }: DocumentDetailPageProps) {
  const initialFields = doc?.fields || [];
  const [fields, setFields] = useState<ExtractedField[]>(initialFields);
  const [editLog, setEditLog] = useState(doc?.editLog || []);
  const [ocr, setOcr] = useState(doc?.ocr || null);
  const [selectedId, setSelectedId] = useState<string | null>(initialFields[0]?.id || null);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [confirmed, setConfirmed] = useState(doc?.status === "confirmed");
  const [logExpanded, setLogExpanded] = useState(false);
  const [scanning, setScanning] = useState(false);

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

  useEffect(() => {
    let timer: number | undefined;
    let active = true;
    let attempts = 0;
    const maxAttempts = 15; // Tối đa 15 lần poll (~22.5s) tránh lặp vô tận

    async function refresh() {
      const latest = await docApi.getDocumentById(doc.id);
      if (!active || !latest) return;
      setFields(latest.fields || []);
      setEditLog(latest.editLog || []);
      setOcr(latest.ocr || null);

      attempts += 1;
      const isProcessing = latest.status === "ocr" || latest.status === "processing" || latest.status === "queued";
      const needsOcrResult = latest.status === "stored" && (!latest.fields || latest.fields.length === 0);

      if ((isProcessing || needsOcrResult) && attempts < maxAttempts) {
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
      setEditLog(updatedDoc.editLog);
      toast.success(`Đã cập nhật trường "${f.label}"`);
    } catch {
      toast.error("Lỗi khi cập nhật trường.");
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
    await docApi.confirmDocument(doc.id);
    setConfirmed(true);
    toast.success("Đã xác nhận hoàn tất tài liệu!");
  }

  async function handleScan() {
    setScanning(true);
    try {
      const resDoc = await docApi.rerunOCR(doc.id);
      toast.success("Đã đưa tài liệu vào tiến trình quét OCR.");
      if (resDoc) {
        if (resDoc.fields && resDoc.fields.length > 0) setFields(resDoc.fields);
        if (resDoc.ocr) setOcr(resDoc.ocr);
        if (resDoc.editLog) setEditLog(resDoc.editLog);
      }

      let count = 0;
      const pollTimer = setInterval(async () => {
        count++;
        const latest = await docApi.getDocumentById(doc.id);
        if (latest) {
          if (latest.fields && latest.fields.length > 0) {
            setFields(latest.fields);
            if (latest.ocr) setOcr(latest.ocr);
            if (latest.editLog) setEditLog(latest.editLog);
          }
          if (latest.status === "review" || latest.status === "confirmed" || (latest.fields && latest.fields.length > 0) || count >= 8) {
            clearInterval(pollTimer);
            setScanning(false);
          }
        } else if (count >= 8) {
          clearInterval(pollTimer);
          setScanning(false);
        }
      }, 1000);
    } catch {
      setScanning(false);
      toast.error("Không thể quét lại tài liệu.");
    }
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
                <button className="p-2 bg-[#f0eff4] hover:bg-[#e4e3e8] rounded-[6px] text-[#5d586c] transition-colors" title="Xoay">
                  <RotateCw className="size-4" />
                </button>
                {/* Zoom Out */}
                <button onClick={() => setZoom((z) => Math.max(50, z - 10))} className="p-2 bg-[#f0eff4] hover:bg-[#e4e3e8] rounded-[6px] text-[#5d586c] transition-colors" title="Thu nhỏ">
                  <Minus className="size-4" />
                </button>
                {/* Zoom Select */}
                <div className="relative">
                  <select
                    value={zoom}
                    onChange={(e) => setZoom(Number(e.target.value))}
                    className="h-8 border-none bg-[#f0eff4] hover:bg-[#e4e3e8] rounded-[6px] px-3 text-xs text-[#5d586c] outline-none appearance-none pr-7 font-semibold cursor-pointer transition-colors"
                  >
                    <option value={50}>50%</option>
                    <option value={75}>75%</option>
                    <option value={100}>100%</option>
                    <option value={125}>125%</option>
                    <option value={150}>150%</option>
                  </select>
                  <ChevronDown className="size-4 text-[#5d586c] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                {/* Zoom In */}
                <button onClick={() => setZoom((z) => Math.min(200, z + 10))} className="p-2 bg-[#f0eff4] hover:bg-[#e4e3e8] rounded-[6px] text-[#5d586c] transition-colors" title="Phóng to">
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
                <button className="p-1.5 hover:bg-slate-100 rounded-[6px] text-[#5d586c] transition-colors" title="Tải xuống">
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

              <div className="min-h-[580px] max-h-[680px] overflow-auto bg-slate-100/50 p-6 flex justify-center items-start">
                <DocumentCanvas
                  zoom={zoom}
                  page={page}
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
              <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-1 custom-scrollbar">
                {fields.map((f) => {
                  const isSelected = f.id === selectedId;
                  const isEditing = f.id === editingId;
                  const isLow = f.confidence < 70;
                  const isMedium = f.confidence >= 70 && f.confidence < 85;
                  const isEdited = editLog.some((log) => log.field === f.label || log.id === f.id);

                  if (isLow) {
                    // Low confidence red warning box (e.g. Thông số kỹ thuật 68%)
                    return (
                      <div
                        key={f.id}
                        onClick={() => handleSelectField(f)}
                        className={`rounded-[6px] border border-[#ffb3b5] bg-[#ffe8e8] p-3 transition-colors cursor-pointer ${
                          isSelected ? "ring-2 ring-[#ff4c51]" : ""
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="w-[140px] shrink-0">
                            <p className="text-xs font-bold text-[#393740]">{getFieldLabel(f.label)}</p>
                            {isEdited && (
                              <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                                <span>Đã chỉnh sửa</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
                                  <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                                </svg>
                              </p>
                            )}
                          </div>

                          {/* Input Box */}
                          <div className="flex-1 min-w-0" onClick={(e) => e.stopPropagation()}>
                            <input
                              type="text"
                              value={isEditing ? draft : f.value}
                              onChange={(e) => {
                                if (isEditing) setDraft(e.target.value);
                              }}
                              onFocus={() => {
                                if (!isEditing) startEditing(f);
                              }}
                              className="w-full h-8 rounded-[4px] border border-[#ff4c51] bg-white px-2.5 text-xs text-[#393740] outline-none font-medium truncate"
                            />
                          </div>

                          {/* Warning Icon + Percentage Badge + Check Icon */}
                          <div className="flex items-center gap-2 shrink-0">
                            <IconAlertTriangle className="size-4 text-[#ff4c51] shrink-0" />
                            <span className="px-2 py-0.5 rounded-[4px] bg-[#ffdbdc] text-[#ff4c51] text-xs font-bold">
                              {f.confidence}%
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                commitFieldEdit(f);
                              }}
                              className="text-[#28c76f] hover:text-[#22b061] p-0.5"
                            >
                              <IconCheck className="size-4 text-[#28c76f]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  if (isMedium) {
                    // Medium confidence orange warning box (e.g. Mã hàng 72%)
                    return (
                      <div
                        key={f.id}
                        onClick={() => handleSelectField(f)}
                        className={`rounded-[6px] border border-[#ffe0b2] bg-[#fff4e5] p-3 transition-colors cursor-pointer ${
                          isSelected ? "ring-2 ring-[#ff9f43]" : ""
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="w-[140px] shrink-0">
                            <p className="text-xs font-bold text-[#393740]">{getFieldLabel(f.label)}</p>
                            {isEdited && (
                              <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                                <span>Đã chỉnh sửa</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
                                  <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                                </svg>
                              </p>
                            )}
                          </div>

                          {/* Input Box */}
                          <div className="flex-1 min-w-0" onClick={(e) => e.stopPropagation()}>
                            <input
                              type="text"
                              value={isEditing ? draft : f.value}
                              onChange={(e) => {
                                if (isEditing) setDraft(e.target.value);
                              }}
                              onFocus={() => {
                                if (!isEditing) startEditing(f);
                              }}
                              className="w-full h-8 rounded-[4px] border border-[#ff9f43] bg-white px-2.5 text-xs text-[#393740] outline-none font-medium truncate"
                            />
                          </div>

                          {/* Warning Icon + Percentage Badge + Check Icon */}
                          <div className="flex items-center gap-2 shrink-0">
                            <IconAlertTriangle className="size-4 text-[#ff4c51] shrink-0" />
                            <span className="px-2 py-0.5 rounded-[4px] bg-[#ffe2c8] text-[#ff9f43] text-xs font-bold">
                              {f.confidence}%
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                commitFieldEdit(f);
                              }}
                              className="text-[#28c76f] hover:text-[#22b061] p-0.5"
                            >
                              <IconCheck className="size-4 text-[#28c76f]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Normal row (e.g. Loại tài liệu 96%, Mã tài liệu 98%...)
                  return (
                    <div
                      key={f.id}
                      onClick={() => handleSelectField(f)}
                      className={`flex items-center justify-between py-2 px-2.5 rounded-[6px] transition-colors cursor-pointer ${
                        isSelected ? "bg-blue-50/70" : "hover:bg-slate-50"
                      }`}
                    >
                      <span className="w-[140px] text-xs font-bold text-[#393740] shrink-0">{getFieldLabel(f.label)}</span>

                      {isEditing ? (
                        <div className="flex-1 flex items-center gap-2 px-2" onClick={(e) => e.stopPropagation()}>
                          <input
                            type="text"
                            value={draft}
                            onChange={(e) => setDraft(e.target.value)}
                            autoFocus
                            onKeyDown={(e) => {
                              if (e.key === "Enter") commitFieldEdit(f);
                              if (e.key === "Escape") setEditingId(null);
                            }}
                            className="h-7 flex-1 rounded border border-[#3f81ea] bg-white px-2 text-xs text-[#393740] outline-none font-medium"
                          />
                          <button
                            onClick={() => commitFieldEdit(f)}
                            className="p-1 text-[#28c76f] hover:text-[#22b061] transition-colors"
                            title="Xác nhận"
                          >
                            <IconCheck className="size-4 text-[#28c76f]" />
                          </button>
                        </div>
                      ) : (
                        <span className="flex-1 text-xs text-[#393740] font-normal truncate px-2">{f.value}</span>
                      )}

                      <div className="flex items-center gap-2.5 shrink-0">
                        <span className="px-2.5 py-0.5 rounded-[4px] bg-[#e8fadf] text-[#28c76f] text-xs font-semibold">
                          {f.confidence}%
                        </span>
                        {!isEditing && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              startEditing(f);
                            }}
                            className="text-slate-500 hover:text-[#3f81ea] p-1 transition-colors"
                            title="Chỉnh sửa"
                          >
                            <IconPencil className="size-4 text-slate-600 hover:text-[#3f81ea]" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
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
