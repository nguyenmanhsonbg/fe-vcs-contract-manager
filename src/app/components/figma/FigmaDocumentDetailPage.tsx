import { useState } from "react";
import { DigitizedDoc, DOC_TYPE_LABELS, ExtractedField } from "../../data/mock";
import { docApi } from "../../services/api";
import { toast } from "sonner";
import { DocumentCanvas } from "../DocumentCanvas";
import {
  IconAlertTriangle,
  IconPencil,
  IconCheck,
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
    <div className="min-h-screen bg-[#f8f7fa] text-slate-800 flex flex-col p-6 font-sans">
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

      {/* Single Main White Container Box matching Figma Table/Container */}
      <div className="bg-white rounded-[8px] border border-slate-200 p-6 shadow-2xs space-y-6 flex-1">
        {/* Sub-Header Toolbar Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 flex-wrap gap-4">
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
            <h2 className="text-[16px] font-bold text-[#393740] mb-2.5">Bản gốc</h2>
            
            <div className="bg-white rounded-[8px] border border-slate-200 flex flex-col overflow-hidden shadow-2xs">
              {/* Viewer Header Controls Toolbar */}
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2.5 bg-slate-50/60">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  {/* Rotate */}
                  <button className="p-1 hover:bg-slate-200 rounded text-slate-600" title="Xoay">
                    ↻
                  </button>
                  {/* Zoom Out */}
                  <button onClick={() => setZoom((z) => Math.max(50, z - 10))} className="p-1 hover:bg-slate-200 rounded font-bold text-slate-600">
                    -
                  </button>
                  {/* Zoom Select */}
                  <select
                    value={zoom}
                    onChange={(e) => setZoom(Number(e.target.value))}
                    className="h-7 border border-slate-200 rounded px-1 text-xs bg-white text-slate-700 outline-none"
                  >
                    <option value={50}>50%</option>
                    <option value={75}>75%</option>
                    <option value={100}>100%</option>
                    <option value={125}>125%</option>
                    <option value={150}>150%</option>
                  </select>
                  {/* Zoom In */}
                  <button onClick={() => setZoom((z) => Math.min(200, z + 10))} className="p-1 hover:bg-slate-200 rounded font-bold text-slate-600">
                    +
                  </button>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-700">
                  {/* Fullscreen */}
                  <button className="p-1 hover:bg-slate-200 rounded text-slate-600" title="Toàn màn hình">
                    ⛶
                  </button>
                  {/* Download */}
                  <button className="p-1 hover:bg-slate-200 rounded text-slate-600" title="Tải xuống">
                    ⤓
                  </button>
                </div>
              </div>

              {/* Document Canvas Display */}
              <div className="min-h-[580px] max-h-[680px] overflow-auto bg-slate-100 p-6 flex justify-center items-start">
                <DocumentCanvas
                  zoom={zoom}
                  page={page}
                  region={activeRegion && activeRegion.page === page ? activeRegion : null}
                />
              </div>
            </div>
          </div>

          {/* RIGHT PANEL — Extracted Data + Collapsible Log Card */}
          <div className="flex flex-col space-y-4">
            {/* Upper Extracted OCR Data Panel */}
            <div className="bg-white rounded-[8px] border border-slate-200 shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)] p-5 space-y-3">
              <h3 className="text-[17px] font-bold text-[#393740] pb-1">Dữ liệu đã bóc tách</h3>

              {/* Extracted Fields List */}
              <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-1 custom-scrollbar">
                {fields.map((f) => {
                  const isSelected = f.id === selectedId;
                  const isEditing = f.id === editingId;
                  const isLow = f.confidence < 70;
                  const isMedium = f.confidence >= 70 && f.confidence < 85;
                  const isEdited = f.id === "f5" || f.id === "f7";

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

              {/* Confidence Legend Footer */}
              <div className="flex items-center gap-6 text-xs text-slate-600 pt-3 border-t border-slate-100 flex-wrap">
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

            {/* Standalone Lower Card — "Nhật ký gần đây" */}
            <div className="bg-white rounded-[8px] border border-slate-200 p-4 shadow-2xs">
              <button
                onClick={() => setLogExpanded(!logExpanded)}
                className="flex items-center justify-between w-full text-[15px] font-bold text-[#393740] hover:text-[#3f81ea] transition-colors"
              >
                <span>Nhật ký gần đây ({editLog.length})</span>
                <svg
                  className={`size-5 text-slate-500 transform transition-transform ${logExpanded ? "rotate-90" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {logExpanded && (
                <div className="mt-3 space-y-2 max-h-[160px] overflow-y-auto pr-1">
                  {editLog.map((log) => (
                    <div key={log.id} className="bg-slate-50 border border-slate-200 rounded-[6px] p-2.5 text-xs space-y-1">
                      <div className="flex items-center justify-between font-semibold text-slate-800">
                        <span>{log.field}</span>
                        <span className="text-[11px] text-slate-400">{log.time}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-600">
                        <div>Sửa từ: <span className="line-through text-red-500">{log.before}</span></div>
                        <div>Thành: <span className="font-semibold text-emerald-600">{log.after}</span></div>
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

      {/* Page Footer */}
      <div className="mt-8 text-center text-xs text-slate-400">
        LoogIX © 2026
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
