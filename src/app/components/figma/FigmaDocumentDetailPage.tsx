import { useState } from "react";
import { DigitizedDoc, DOC_TYPE_LABELS, ExtractedField } from "../../data/mock";
import { docApi } from "../../services/api";
import { toast } from "sonner";
import { DocumentCanvas } from "../DocumentCanvas";

interface FigmaDocumentDetailPageProps {
  doc: DigitizedDoc;
  onBack: () => void;
}

export function FigmaDocumentDetailPage({ doc, onBack }: FigmaDocumentDetailPageProps) {
  const [fields, setFields] = useState<ExtractedField[]>(doc.fields);
  const [editLog, setEditLog] = useState(doc.editLog);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [docType, setDocType] = useState<string>(doc.type);
  const [confirmed, setConfirmed] = useState(doc.status === "confirmed");
  const [activeTab, setActiveTab] = useState<"fields" | "items" | "log">("fields");

  // Field Edit State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState("");

  // Reason Modal State (Container4 in Figma)
  const [reasonModalOpen, setReasonModalOpen] = useState(false);
  const [reasonText, setReasonText] = useState("");
  const [pendingEdit, setPendingEdit] = useState<{ field: ExtractedField; nextValue: string } | null>(null);

  const selectedField = fields.find((f) => f.id === selectedId) || null;
  const activeRegion = selectedField ? selectedField.region : null;

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
    } catch (err) {
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

  async function handleRerunOCR() {
    await docApi.rerunOCR(doc.id);
    toast.success("Đã phát lệnh chạy lại OCR!");
  }

  const reviewCount = fields.filter((f) => f.confidence < 85).length;

  return (
    <div className="flex h-full flex-col bg-[#f8f7fa]">
      {/* Sub Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3 shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-[16px] font-semibold text-slate-800">Chi tiết số hoá tài liệu</h1>
              <span
                className={`px-2.5 py-0.5 rounded-[4px] text-[11px] font-medium ${
                  confirmed
                    ? "bg-[rgba(40,199,111,0.16)] text-[#28c76f]"
                    : "bg-[rgba(255,159,67,0.16)] text-[#ff9f43]"
                }`}
              >
                {confirmed ? "Đã xác nhận" : "Chờ đối soát"}
              </span>
            </div>
            <p className="text-[12px] text-slate-400 mt-0.5">
              {doc.fileName} · {doc.id} · {doc.pageCount} trang · Cập nhật {doc.lastUpdated}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {reviewCount > 0 && (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#fff5f5] text-[#ff4c51] text-xs font-medium border border-[#ffdbdc]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 9V13M12 17H12.01M10.29 3.86L1.82 18A2 2 0 0 0 3.54 21H20.46A2 2 0 0 0 22.18 18L13.71 3.86A2 2 0 0 0 10.29 3.86Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {reviewCount} trường độ tin cậy thấp
            </span>
          )}
          <button className="px-4 py-2 rounded-[6px] border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50">
            Lưu tạm
          </button>
          <button
            onClick={handleConfirmDocument}
            disabled={confirmed}
            className="px-4 py-2 rounded-[6px] bg-[#28c76f] text-white text-xs font-medium hover:bg-[#22b061] disabled:opacity-50"
          >
            {confirmed ? "Đã xác nhận" : "Xác nhận hoàn tất"}
          </button>
        </div>
      </div>

      {/* Split View Content */}
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-2 gap-4 p-4 overflow-hidden">
        {/* LEFT PANEL — Original Document Canvas */}
        <div className="bg-white rounded-[6px] border border-slate-200 flex flex-col overflow-hidden shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5 bg-slate-50/50">
            <span className="text-xs font-semibold text-slate-700">Bản gốc</span>
            <div className="flex items-center gap-2 text-xs">
              <button onClick={() => setZoom((z) => Math.max(50, z - 10))} className="p-1 hover:bg-slate-200 rounded text-slate-600">
                -
              </button>
              <span className="w-10 text-center font-medium">{zoom}%</span>
              <button onClick={() => setZoom((z) => Math.min(200, z + 10))} className="p-1 hover:bg-slate-200 rounded text-slate-600">
                +
              </button>
              <div className="h-4 w-px bg-slate-200 mx-1" />
              <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)} className="p-1 hover:bg-slate-200 rounded text-slate-600 disabled:opacity-30">
                &lt;
              </button>
              <span className="text-slate-500">Trang {page}/{doc.pageCount}</span>
              <button disabled={page >= doc.pageCount} onClick={() => setPage((p) => p + 1)} className="p-1 hover:bg-slate-200 rounded text-slate-600 disabled:opacity-30">
                &gt;
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto bg-slate-100 p-6 flex justify-center items-start">
            <DocumentCanvas
              zoom={zoom}
              page={page}
              region={activeRegion && activeRegion.page === page ? activeRegion : null}
            />
          </div>
        </div>

        {/* RIGHT PANEL — Extracted OCR Data & Tabs */}
        <div className="bg-white rounded-[6px] border border-slate-200 flex flex-col overflow-hidden shadow-xs">
          {/* Header controls */}
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5 bg-slate-50/50">
            <span className="text-xs font-semibold text-slate-700">Dữ liệu đã bóc tách</span>
            <div className="flex items-center gap-3">
              <select
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                className="h-8 rounded-[6px] border border-slate-200 bg-white px-2.5 text-xs text-slate-700 outline-none"
              >
                {Object.entries(DOC_TYPE_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
              <button
                onClick={handleRerunOCR}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                Chạy lại OCR
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-100 px-4 pt-2">
            <button
              onClick={() => setActiveTab("fields")}
              className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors ${
                activeTab === "fields" ? "border-brand text-brand" : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              Thông tin chung
            </button>
            <button
              onClick={() => setActiveTab("items")}
              className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors ${
                activeTab === "items" ? "border-brand text-brand" : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              Bảng hàng hoá
            </button>
            <button
              onClick={() => setActiveTab("log")}
              className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors ${
                activeTab === "log" ? "border-brand text-brand" : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              Nhật ký chỉnh sửa ({editLog.length})
            </button>
          </div>

          {/* Tab 1: General Fields */}
          {activeTab === "fields" && (
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {fields.map((f) => {
                const isSelected = f.id === selectedId;
                const isEditing = f.id === editingId;
                const isLow = f.confidence < 85;

                return (
                  <div
                    key={f.id}
                    onClick={() => handleSelectField(f)}
                    className={`rounded-[6px] border p-3 cursor-pointer transition-colors ${
                      isSelected
                        ? "border-brand ring-1 ring-brand bg-brand/5"
                        : isLow
                        ? "border-amber-200 bg-amber-50/50"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">{f.label}</span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                            f.confidence >= 85
                              ? "bg-[rgba(40,199,111,0.16)] text-[#28c76f]"
                              : f.confidence >= 70
                              ? "bg-[rgba(255,159,67,0.16)] text-[#ff9f43]"
                              : "bg-[rgba(234,84,85,0.16)] text-[#ea5455]"
                          }`}
                        >
                          {f.confidence}%
                        </span>
                        {!isEditing && (
                          <button
                            onClick={(e) => { e.stopPropagation(); startEditing(f); }}
                            className="text-slate-400 hover:text-brand"
                          >
                            ✏️
                          </button>
                        )}
                      </div>
                    </div>

                    {isEditing ? (
                      <div className="mt-2 flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="text"
                          value={draft}
                          onChange={(e) => setDraft(e.target.value)}
                          autoFocus
                          className="h-8 flex-1 rounded border border-brand px-2 text-xs text-slate-800 outline-none"
                        />
                        <button
                          onClick={() => commitFieldEdit(f)}
                          className="h-8 px-3 rounded bg-brand text-white text-xs font-medium hover:bg-brand-dark"
                        >
                          Lưu
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="h-8 px-2 rounded border border-slate-200 text-xs text-slate-600 hover:bg-slate-50"
                        >
                          Hủy
                        </button>
                      </div>
                    ) : (
                      <p className="text-sm font-semibold text-slate-800 mt-1">{f.value}</p>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Tab 2: Line Items */}
          {activeTab === "items" && (
            <div className="flex-1 overflow-y-auto p-4">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">Tên hàng</th>
                    <th className="py-2.5 px-3">Mã hàng</th>
                    <th className="py-2.5 px-3 text-center">SL</th>
                    <th className="py-2.5 px-3 text-right">Đơn giá</th>
                    <th className="py-2.5 px-3 text-right">Thành tiền</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {doc.lineItems.map((li) => (
                    <tr key={li.id} className="hover:bg-slate-50 cursor-pointer" onClick={() => setPage(li.region.page)}>
                      <td className="py-2.5 px-3">{li.no}</td>
                      <td className="py-2.5 px-3 font-medium text-slate-800">{li.name}</td>
                      <td className="py-2.5 px-3 text-slate-500">{li.code}</td>
                      <td className="py-2.5 px-3 text-center">{li.qty}</td>
                      <td className="py-2.5 px-3 text-right">{li.unitPrice}</td>
                      <td className="py-2.5 px-3 text-right font-semibold text-slate-800">{li.total}</td>
                    </tr>
                  ))}
                  {doc.lineItems.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-400">Không có dòng hàng hoá.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Tab 3: Edit Log */}
          {activeTab === "log" && (
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {editLog.map((log) => (
                <div key={log.id} className="border border-slate-200 rounded-[6px] p-3 text-xs space-y-1">
                  <div className="flex items-center justify-between font-semibold text-slate-800">
                    <span>{log.field}</span>
                    <span className="text-[11px] font-normal text-slate-400">{log.time}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1">
                    <div><span className="text-slate-400">Giá trị AI:</span> {log.aiValue}</div>
                    <div><span className="text-slate-400">Người sửa:</span> {log.editor}</div>
                    <div><span className="text-slate-400">Trước:</span> <span className="line-through text-red-500">{log.before}</span></div>
                    <div><span className="text-slate-400">Sau:</span> <span className="font-semibold text-emerald-600">{log.after}</span></div>
                  </div>
                  {log.reason && (
                    <div className="text-[11px] text-brand bg-brand/5 p-1.5 rounded mt-1">
                      <strong>Lý do:</strong> {log.reason}
                    </div>
                  )}
                </div>
              ))}
              {editLog.length === 0 && (
                <p className="py-8 text-center text-xs text-slate-400">Chưa có lịch sử chỉnh sửa.</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Edit Reason Modal (Container4 in Figma) */}
      {reasonModalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[6px] shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)] p-6 w-[531px] space-y-4">
            <h3 className="text-base font-semibold text-slate-800">Lý do chỉnh sửa</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tài liệu đã được xác nhận. Vui lòng nhập lý do chỉnh sửa trường
              <strong className="text-brand"> "{pendingEdit?.field.label}"</strong> để lưu vết vào nhật ký.
            </p>

            <textarea
              value={reasonText}
              onChange={(e) => setReasonText(e.target.value)}
              placeholder="Ví dụ: OCR nhận dạng sai, cập nhật theo bản gốc…"
              rows={3}
              className="w-full rounded-[6px] border border-slate-200 p-3 text-xs text-slate-800 outline-none focus:border-brand"
            />

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setReasonModalOpen(false)}
                className="px-4 py-2 rounded-md border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50"
              >
                Huỷ
              </button>
              <button
                onClick={handleConfirmReason}
                disabled={!reasonText.trim()}
                className="px-5 py-2 rounded-md bg-brand text-white text-xs font-medium hover:bg-brand-dark disabled:opacity-50"
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
