import { useState } from "react";
import { DigitizedDoc, DOC_TYPE_LABELS, ExtractedField } from "../../data/mock";
import { docApi } from "../../services/api";
import { toast } from "sonner";
import { DocumentCanvas } from "../DocumentCanvas";
import {
  IconAlertTriangle,
  IconPencil,
  IconCheck,
  IconLayoutBoardSplit,
  IconCheckbox,
  IconFileX,
} from "../icons";

interface FigmaDocumentDetailPageProps {
  doc: DigitizedDoc;
  onBack: () => void;
}

export function FigmaDocumentDetailPage({ doc, onBack }: FigmaDocumentDetailPageProps) {
  const [fields, setFields] = useState<ExtractedField[]>(doc.fields);
  const [editLog, setEditLog] = useState(doc.editLog);
  const [selectedId, setSelectedId] = useState<string | null>(fields[0]?.id || null);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [confirmed, setConfirmed] = useState(doc.status === "confirmed");
  const [logExpanded, setLogExpanded] = useState(false);

  // Field Edit State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState("");

  // Reason Modal State
  const [reasonModalOpen, setReasonModalOpen] = useState(false);
  const [reasonText, setReasonText] = useState("");
  const [pendingEdit, setPendingEdit] = useState<{ field: ExtractedField; nextValue: string } | null>(null);

  const selectedField = fields.find((f) => f.id === selectedId) || null;
  const activeRegion = selectedField ? selectedField.region : null;

  const lowConfidenceCount = fields.filter((f) => f.confidence < 85).length;
  const confirmedFieldCount = fields.filter((f) => f.confidence >= 85).length;

  function handleSelectField(f: ExtractedField) {
    setSelectedId(f.id);
    setPage(f.region.page);
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

  return (
    <div className="flex h-full flex-col bg-[#f8f7fa] text-slate-800">
      {/* Top Header Bar matching Figma Node 26186:77512 */}
      <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-6 py-3 shrink-0 shadow-2xs">
        <button
          onClick={onBack}
          className="size-8 rounded-[6px] hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"
          title="Quay lại"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h1 className="text-[18px] font-bold text-[#393740]">Chi tiết số hóa tài liệu</h1>
      </div>

      {/* Main Container */}
      <div className="flex flex-1 flex-col p-4 gap-3 overflow-hidden">
        {/* Table Sub Header Toolbar matching Figma */}
        <div className="flex items-center justify-between bg-white rounded-[6px] border border-slate-200 px-5 py-2.5 shadow-2xs shrink-0 flex-wrap gap-2">
          {/* File Name Info */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Đang xem:</span>
            <span className="text-xs font-bold text-[#3f81ea]">{doc.fileName}</span>
          </div>

          {/* Badges / Indicators */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-[#28c76f] font-medium">
              <IconCheck className="size-4 text-[#28c76f] shrink-0" />
              <span>Đã xác nhận {confirmedFieldCount}/{fields.length} trường</span>
            </div>

            {lowConfidenceCount > 0 && (
              <div className="flex items-center gap-1.5 text-[#ff9f43] font-medium">
                <IconAlertTriangle className="size-4 shrink-0" />
                <span>Còn {lowConfidenceCount} trường cảnh báo độ tin cậy thấp</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            <button className="px-4 py-1.5 rounded-[6px] border border-[#3f81ea] bg-white text-xs font-semibold text-[#3f81ea] hover:bg-blue-50 transition-colors shadow-2xs">
              Lưu tạm
            </button>
            <button
              onClick={handleConfirmDocument}
              disabled={confirmed}
              className="px-4 py-1.5 rounded-[6px] bg-[#3f81ea] text-white text-xs font-semibold hover:bg-[#2b6bd8] disabled:opacity-50 transition-colors shadow-2xs"
            >
              {confirmed ? "Đã xác nhận" : "Xác nhận"}
            </button>
          </div>
        </div>

        {/* Split 2-Column Main View matching Figma Frame 11 */}
        <div className="grid flex-1 grid-cols-1 lg:grid-cols-2 gap-4 min-h-0 overflow-hidden">
          {/* LEFT COLUMN — Document Canvas Viewer */}
          <div className="bg-white rounded-[6px] border border-slate-200 flex flex-col overflow-hidden shadow-2xs">
            {/* Viewer Header Controls */}
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2.5 bg-slate-50/60">
              <span className="text-xs font-bold text-[#393740]">Bản gốc tài liệu</span>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <button onClick={() => setZoom((z) => Math.max(50, z - 10))} className="p-1 hover:bg-slate-200 rounded font-bold text-slate-600">
                  -
                </button>
                <span className="w-12 text-center font-semibold">{zoom}%</span>
                <button onClick={() => setZoom((z) => Math.min(200, z + 10))} className="p-1 hover:bg-slate-200 rounded font-bold text-slate-600">
                  +
                </button>
                <div className="h-4 w-px bg-slate-300 mx-1" />
                <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)} className="p-1 hover:bg-slate-200 rounded disabled:opacity-30">
                  &lt;
                </button>
                <span className="font-medium text-slate-600">Trang {page}/{doc.pageCount}</span>
                <button disabled={page >= doc.pageCount} onClick={() => setPage((p) => p + 1)} className="p-1 hover:bg-slate-200 rounded disabled:opacity-30">
                  &gt;
                </button>
              </div>
            </div>

            {/* Document Canvas Display */}
            <div className="flex-1 overflow-auto bg-slate-100 p-4 flex justify-center items-start">
              <DocumentCanvas
                zoom={zoom}
                page={page}
                region={activeRegion && activeRegion.page === page ? activeRegion : null}
              />
            </div>
          </div>

          {/* RIGHT COLUMN — Extracted OCR Data Panel matching user's exact Figma screenshot */}
          <div className="bg-white rounded-[8px] border border-slate-200 flex flex-col overflow-hidden shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)] p-4 space-y-3">
            {/* Panel Title Header */}
            <div className="pb-1">
              <h3 className="text-[17px] font-bold text-[#393740]">Dữ liệu đã bóc tách</h3>
            </div>

            {/* Extracted Fields List Container */}
            <div className="flex-1 overflow-y-auto space-y-2.5 pr-1.5 custom-scrollbar">
              {fields.map((f) => {
                const isSelected = f.id === selectedId;
                const isEditing = f.id === editingId;
                const isLow = f.confidence < 70;
                const isMedium = f.confidence >= 70 && f.confidence < 85;
                const isEdited = f.id === "f5" || f.id === "f7"; // Mock edited indicator like Figma screenshot

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
                          <p className="text-xs font-bold text-[#393740]">{f.label}</p>
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
                          <p className="text-xs font-bold text-[#393740]">{f.label}</p>
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
                    <span className="w-[140px] text-xs font-bold text-[#393740] shrink-0">{f.label}</span>

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

            {/* Confidence Legend Footer matching Figma screenshot */}
            <div className="flex items-center gap-6 text-xs text-slate-600 pt-2 border-t border-slate-100 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#ff9f43] shrink-0" />
                <span className="text-[11.5px]">Độ tin cậy trung bình (70% - 84%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#ff4c51] shrink-0" />
                <span className="text-[11.5px]">Độ tin cậy thấp (&lt; 70%)</span>
              </div>
            </div>

            {/* Collapsible Edit Log Bar matching Figma Container (514x64) */}
            <div className="border-t border-slate-200 bg-slate-50/80 px-4 py-2.5 rounded-b-[8px]">
              <button
                onClick={() => setLogExpanded(!logExpanded)}
                className="flex items-center justify-between w-full text-xs font-bold text-[#393740] hover:text-[#3f81ea] transition-colors"
              >
                <span>Nhật ký gần đây ({editLog.length})</span>
                <svg
                  className={`size-4 transform transition-transform ${logExpanded ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {logExpanded && (
                <div className="mt-3 space-y-2 max-h-[140px] overflow-y-auto pr-1">
                  {editLog.map((log) => (
                    <div key={log.id} className="bg-white border border-slate-200 rounded-[4px] p-2 text-[11px] space-y-1">
                      <div className="flex items-center justify-between font-semibold text-slate-800">
                        <span>{log.field}</span>
                        <span className="text-[10px] text-slate-400">{log.time}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-slate-600">
                        <div>Sửa từ: <span className="line-through text-red-500">{log.before}</span></div>
                        <div>Thành: <span className="font-semibold text-emerald-600">{log.after}</span></div>
                      </div>
                    </div>
                  ))}
                  {editLog.length === 0 && (
                    <p className="text-[11px] text-slate-400 text-center py-2">Chưa có nhật ký chỉnh sửa.</p>
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
