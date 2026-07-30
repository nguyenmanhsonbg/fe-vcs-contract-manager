import { useEffect, useMemo, useState } from "react";
import { DigitizedDoc, DOC_TYPE_LABELS, DocType } from "../../data/mock";
import { docApi } from "../../services/api";
import { toast } from "sonner";
import imgImage2 from "../../../imports/SốHoaTaiLiệu-1/01342b2bb964441edcb3fd61de43edf5fdb34da6.png";

interface FigmaDocumentListPageProps {
  onOpenDoc: (doc: DigitizedDoc) => void;
  onUploadClick: () => void;
}

export function FigmaDocumentListPage({ onOpenDoc, onUploadClick }: FigmaDocumentListPageProps) {
  const [documents, setDocuments] = useState<DigitizedDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [type, setType] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [uploader, setUploader] = useState<string>("all");
  const [assignee, setAssignee] = useState<string>("all");
  const [lowConfOnly, setLowConfOnly] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const data = await docApi.getDocuments();
    setDocuments(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const stats = useMemo(() => {
    const mine = documents.filter((d) => d.uploadedBy === "Nguyễn Văn A").length;
    const ocr = documents.filter((d) => d.status === "ocr" || d.status === "pending").length;
    const review = documents.filter((d) => d.status === "review").length;
    const confirmed = documents.filter((d) => d.status === "confirmed").length;
    const failed = documents.filter((d) => d.status === "failed").length;
    return { mine, ocr, review, confirmed, failed };
  }, [documents]);

  const uploaders = useMemo(() => [...new Set(documents.map((d) => d.uploadedBy))], [documents]);
  const assignees = useMemo(
    () => [...new Set(documents.map((d) => d.assignedTo).filter((a) => a !== "—"))],
    [documents]
  );

  const filtered = useMemo(() => {
    return documents.filter((d) => {
      if (search && !d.fileName.toLowerCase().includes(search.toLowerCase()) && !d.id.toLowerCase().includes(search.toLowerCase())) return false;
      if (type !== "all" && d.type !== type) return false;
      if (statusFilter !== "all" && d.status !== statusFilter) return false;
      if (uploader !== "all" && d.uploadedBy !== uploader) return false;
      if (assignee !== "all" && d.assignedTo !== assignee) return false;
      if (lowConfOnly && d.avgConfidence >= 85) return false;
      return true;
    });
  }, [documents, search, type, statusFilter, uploader, assignee, lowConfOnly]);

  return (
    <div className="space-y-6 p-6 max-w-[1440px] mx-auto bg-[#f8f7fa]">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[18px] font-medium text-[rgba(47,43,61,0.9)]">Số hoá tài liệu</h1>
          <p className="text-[13px] text-[rgba(47,43,61,0.7)] mt-0.5">
            Tải tài liệu mua sắm vào hệ thống để lưu trữ, trích xuất dữ liệu (OCR) và phục vụ xử lý nghiệp vụ
          </p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 rounded-[6px] border border-slate-200 bg-white shadow-xs text-xs font-medium text-[rgba(47,43,61,0.9)] hover:bg-slate-50">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 2V4M12 2V4M2.66667 6H13.3333M3.33333 3.33333H12.6667C13.0349 3.33333 13.3333 3.63181 13.3333 4V13.3333C13.3333 13.7015 13.0349 14 12.6667 14H3.33333C2.96514 14 2.66667 13.7015 2.66667 13.3333V4C2.66667 3.63181 2.96514 3.33333 3.33333 3.33333Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          01/04/2025 – 30/04/2025
        </button>
      </div>

      {/* 5 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Card 1 */}
        <div
          onClick={() => setStatusFilter("all")}
          className={`bg-white rounded-[6px] p-5 border-b-[3px] border-[#3f81ea] shadow-[0px_3px_6px_rgba(47,43,61,0.14)] cursor-pointer hover:shadow-md transition-shadow ${statusFilter === "all" ? "ring-2 ring-[#3f81ea]" : ""}`}
        >
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-[6px] bg-[rgba(63,129,234,0.16)] flex items-center justify-center text-[#3f81ea]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-[rgba(47,43,61,0.7)] font-medium">Tài liệu của tôi</p>
              <p className="text-2xl font-bold text-[#3f81ea]">{stats.mine}</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => setStatusFilter("ocr")}
          className={`bg-white rounded-[6px] p-5 border-b-[3px] border-[#00bad1] shadow-[0px_3px_6px_rgba(47,43,61,0.14)] cursor-pointer hover:shadow-md transition-shadow ${statusFilter === "ocr" ? "ring-2 ring-[#00bad1]" : ""}`}
        >
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-[6px] bg-[rgba(0,186,209,0.16)] flex items-center justify-center text-[#00bad1]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-[rgba(47,43,61,0.7)] font-medium">Đang xử lý</p>
              <p className="text-2xl font-bold text-[#00bad1]">{stats.ocr}</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => setStatusFilter("review")}
          className={`bg-white rounded-[6px] p-5 border-b-[3px] border-[#ff9f43] shadow-[0px_3px_6px_rgba(47,43,61,0.14)] cursor-pointer hover:shadow-md transition-shadow ${statusFilter === "review" ? "ring-2 ring-[#ff9f43]" : ""}`}
        >
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-[6px] bg-[rgba(255,159,67,0.16)] flex items-center justify-center text-[#ff9f43]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-[rgba(47,43,61,0.7)] font-medium">Chờ đối soát</p>
              <p className="text-2xl font-bold text-[#ff9f43]">{stats.review}</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div
          onClick={() => setStatusFilter("confirmed")}
          className={`bg-white rounded-[6px] p-5 border-b-[3px] border-[#28c76f] shadow-[0px_3px_6px_rgba(47,43,61,0.14)] cursor-pointer hover:shadow-md transition-shadow ${statusFilter === "confirmed" ? "ring-2 ring-[#28c76f]" : ""}`}
        >
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-[6px] bg-[rgba(40,199,111,0.16)] flex items-center justify-center text-[#28c76f]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 11.08V12A10 10 0 1 1 16.03 3.32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-[rgba(47,43,61,0.7)] font-medium">Đã xác nhận</p>
              <p className="text-2xl font-bold text-[#28c76f]">{stats.confirmed}</p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div
          onClick={() => setStatusFilter("failed")}
          className={`bg-white rounded-[6px] p-5 border-b-[3px] border-[#ea5455] shadow-[0px_3px_6px_rgba(47,43,61,0.14)] cursor-pointer hover:shadow-md transition-shadow ${statusFilter === "failed" ? "ring-2 ring-[#ea5455]" : ""}`}
        >
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-[6px] bg-[rgba(234,84,85,0.16)] flex items-center justify-center text-[#ea5455]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M10.29 3.86L1.82 18A2 2 0 0 0 3.54 21H20.46A2 2 0 0 0 22.18 18L13.71 3.86A2 2 0 0 0 10.29 3.86Z" stroke="currentColor" strokeWidth="2" />
                <path d="M12 9V13M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-[rgba(47,43,61,0.7)] font-medium">Lỗi xử lý</p>
              <p className="text-2xl font-bold text-[#ea5455]">{stats.failed}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Dropzone Card */}
      <div className="bg-[#fff5f5] border-2 border-dashed border-[#ffdbdc] rounded-[6px] p-8 text-center space-y-3">
        <div className="size-12 rounded-lg bg-[#ffdbdc] flex items-center justify-center text-[#ff4c51] mx-auto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 16V8M12 8L9 11M12 8L15 11M3 15V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-slate-800">
            Kéo thả tài liệu vào đây, hoặc{" "}
            <span onClick={onUploadClick} className="text-[#ff4c51] cursor-pointer hover:underline">tải lên từ máy tính</span>
          </p>
          <p className="text-xs text-slate-400 mt-1">Hỗ trợ PDF, DOCX, XLSX, JPG, PNG · Tối đa 10 MB/tệp</p>
        </div>
        <button
          onClick={onUploadClick}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-[6px] border border-[#ff4c51] bg-white text-xs font-medium text-[#ff4c51] hover:bg-[#fff0f0] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 11V5M8 5L6 7M8 5L10 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Chọn tệp tải lên
        </button>
      </div>

      {/* Document Table Container */}
      <div className="bg-white rounded-[6px] shadow-[0px_3px_6px_rgba(47,43,61,0.14)] p-6 space-y-4">
        {/* Table Toolbar */}
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-semibold text-[rgba(47,43,61,0.9)]">Danh sách tài liệu đang số hoá</h3>
          <div className="flex items-center gap-3 ml-auto">
            <div className="relative w-64">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm kiếm tài liệu…"
                className="w-full h-9 rounded-[6px] border border-slate-200 bg-slate-50 pl-8 pr-3 text-xs text-slate-800 outline-none focus:border-brand focus:bg-white"
              />
              <svg className="absolute left-2.5 top-2.5 size-4 text-slate-400" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <button
              onClick={loadData}
              title="Làm mới"
              className="p-2 rounded-[6px] border border-slate-200 text-slate-500 hover:bg-slate-50"
            >
              <svg className={`size-4 ${loading ? "animate-spin" : ""}`} viewBox="0 0 24 24" fill="none">
                <path d="M23 4V10H17M1 20V14H7M3.51 9A9 9 0 0 1 18.36 5.64L23 10M1 14L5.64 18.36A9 9 0 0 0 20.49 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="h-8 rounded-[6px] border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none"
          >
            <option value="all">Loại tài liệu: Tất cả</option>
            {Object.entries(DOC_TYPE_LABELS).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-8 rounded-[6px] border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none"
          >
            <option value="all">Trạng thái: Tất cả</option>
            <option value="pending">Chờ xử lý</option>
            <option value="ocr">Đang OCR</option>
            <option value="review">Chờ đối soát</option>
            <option value="confirmed">Đã xác nhận</option>
            <option value="failed">Lỗi</option>
          </select>

          <select
            value={uploader}
            onChange={(e) => setUploader(e.target.value)}
            className="h-8 rounded-[6px] border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none"
          >
            <option value="all">Người tải lên: Tất cả</option>
            {uploaders.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>

          <select
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            className="h-8 rounded-[6px] border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none"
          >
            <option value="all">Người xử lý: Tất cả</option>
            {assignees.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>

          <label className="ml-auto flex items-center gap-2 text-slate-600 select-none cursor-pointer">
            <input
              type="checkbox"
              checked={lowConfOnly}
              onChange={(e) => setLowConfOnly(e.target.checked)}
              className="rounded border-slate-300 text-brand focus:ring-brand"
            />
            Chỉ hiển thị cảnh báo độ tin cậy thấp
          </label>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-[6px] border border-slate-200">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f8f7fa] text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Tên tài liệu</th>
                <th className="py-3 px-4">Loại tài liệu</th>
                <th className="py-3 px-4">Người tải lên</th>
                <th className="py-3 px-4">Thời gian tải lên</th>
                <th className="py-3 px-4">Trạng thái xử lý</th>
                <th className="py-3 px-4">Tiến độ OCR</th>
                <th className="py-3 px-4 text-center">Độ tin cậy</th>
                <th className="py-3 px-4">Người xử lý</th>
                <th className="py-3 px-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((d) => (
                <tr
                  key={d.id}
                  onClick={() => onOpenDoc(d)}
                  className="cursor-pointer hover:bg-slate-50/80 transition-colors"
                >
                  <td className="py-3 px-4">
                    <p className="font-semibold text-brand truncate max-w-[200px]">{d.fileName}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{d.id} · {d.pageCount} trang</p>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">{DOC_TYPE_LABELS[d.type as DocType]}</td>
                  <td className="py-3 px-4 whitespace-nowrap">{d.uploadedBy}</td>
                  <td className="py-3 px-4 text-slate-500 whitespace-nowrap">{d.uploadTime}</td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-[4px] text-[11px] font-medium ${
                        d.status === "confirmed"
                          ? "bg-[rgba(40,199,111,0.16)] text-[#28c76f]"
                          : d.status === "review"
                          ? "bg-[rgba(255,159,67,0.16)] text-[#ff9f43]"
                          : d.status === "failed"
                          ? "bg-[rgba(234,84,85,0.16)] text-[#ea5455]"
                          : "bg-[rgba(0,123,255,0.16)] text-[#007bff]"
                      }`}
                    >
                      {d.status === "confirmed"
                        ? "Đã xác nhận"
                        : d.status === "review"
                        ? "Chờ đối soát"
                        : d.status === "failed"
                        ? "Lỗi"
                        : "Đang xử lý"}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            d.progress === 100 ? "bg-[#28c76f]" : d.status === "failed" ? "bg-[#ea5455]" : "bg-brand"
                          }`}
                          style={{ width: `${d.progress}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-slate-500">{d.progress}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {d.avgConfidence > 0 ? (
                      <span
                        className={`inline-block px-2 py-0.5 rounded-[4px] text-[11px] font-semibold ${
                          d.avgConfidence >= 85
                            ? "bg-[rgba(40,199,111,0.16)] text-[#28c76f]"
                            : d.avgConfidence >= 70
                            ? "bg-[rgba(255,159,67,0.16)] text-[#ff9f43]"
                            : "bg-[rgba(234,84,85,0.16)] text-[#ea5455]"
                        }`}
                      >
                        {d.avgConfidence}%
                      </span>
                    ) : (
                      <span className="text-slate-300">—</span>
                    )}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-slate-600">
                    {d.assignedTo === "—" ? <span className="text-slate-300">—</span> : d.assignedTo}
                  </td>
                  <td className="py-3 px-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-end gap-1">
                      <button
                        title="Xem chi tiết"
                        onClick={() => onOpenDoc(d)}
                        className="p-1 text-slate-400 hover:text-brand rounded hover:bg-slate-100"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </button>
                      <button
                        title="Chạy lại OCR"
                        onClick={async () => {
                          await docApi.rerunOCR(d.id);
                          toast.success(`Đã phát lệnh chạy lại OCR cho ${d.id}`);
                          loadData();
                        }}
                        className="p-1 text-slate-400 hover:text-brand rounded hover:bg-slate-100"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M23 4V10H17M1 20V14H7M3.51 9A9 9 0 0 1 18.36 5.64L23 10M1 14L5.64 18.36A9 9 0 0 0 20.49 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-400">
                    Không tìm thấy tài liệu nào phù hợp bộ lọc.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination summary */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
          <p>Hiển thị <span className="font-semibold text-slate-800">{filtered.length}</span> / {documents.length} tài liệu</p>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 rounded border border-slate-200 text-slate-600 hover:bg-slate-50">Trước</button>
            <button className="px-3 py-1 rounded bg-brand text-white font-medium">1</button>
            <button className="px-3 py-1 rounded border border-slate-200 text-slate-600 hover:bg-slate-50">Sau</button>
          </div>
        </div>
      </div>
    </div>
  );
}
