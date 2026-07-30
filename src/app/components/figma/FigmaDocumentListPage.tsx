import { useEffect, useMemo, useState } from "react";
import { DigitizedDoc, DOC_TYPE_LABELS, DocType } from "../../data/mock";
import { docApi } from "../../services/api";
import { toast } from "sonner";
import { IconCalendar } from "../icons";
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
    <div className="w-full space-y-3 px-5 py-3 bg-[#f8f7fa]">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[16px] font-semibold text-[rgba(47,43,61,0.9)]">Số hoá tài liệu</h1>
          <p className="text-[11px] text-[rgba(47,43,61,0.65)] mt-0.5">
            Tải tài liệu mua sắm vào hệ thống để lưu trữ, trích xuất dữ liệu (OCR) và phục vụ xử lý nghiệp vụ
          </p>
        </div>
        {/* Date Selector Button */}
        <button className="flex h-8 w-52 items-center justify-between rounded-[6px] border border-slate-200 bg-white px-3 text-xs font-normal text-slate-700 shadow-2xs hover:border-slate-300 transition-colors shrink-0">
          <span>01/04/2025 - 30/04/2025</span>
          <IconCalendar className="size-3.5 text-slate-500 shrink-0" />
        </button>
      </div>

      {/* 5 Stat Cards (Widgets) */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {/* Card 1 */}
        <div
          onClick={() => setStatusFilter("all")}
          className={`bg-white rounded-[6px] py-2.5 px-3.5 border-b-[3px] border-[#3f81ea] shadow-[0px_2px_4px_rgba(47,43,61,0.12)] cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden ${
            statusFilter === "all" ? "ring-2 ring-[#3f81ea]" : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-[6px] bg-[rgba(63,129,234,0.14)] flex items-center justify-center text-[#3f81ea] shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-[rgba(47,43,61,0.85)] font-medium truncate">Tài liệu của tôi</p>
              <p className="text-[19px] leading-tight font-bold text-[#3f81ea] mt-0.5">{stats.mine}</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => setStatusFilter("ocr")}
          className={`bg-white rounded-[6px] py-2.5 px-3.5 border-b-[3px] border-[#00bad1] shadow-[0px_2px_4px_rgba(47,43,61,0.12)] cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden ${
            statusFilter === "ocr" ? "ring-2 ring-[#00bad1]" : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-[6px] bg-[rgba(0,186,209,0.14)] flex items-center justify-center text-[#00bad1] shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
                <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-[rgba(47,43,61,0.85)] font-medium truncate">Đang xử lý</p>
              <p className="text-[19px] leading-tight font-bold text-[#00bad1] mt-0.5">{stats.ocr}</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => setStatusFilter("review")}
          className={`bg-white rounded-[6px] py-2.5 px-3.5 border-b-[3px] border-[#ff9f43] shadow-[0px_2px_4px_rgba(47,43,61,0.12)] cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden ${
            statusFilter === "review" ? "ring-2 ring-[#ff9f43]" : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-[6px] bg-[rgba(255,159,67,0.14)] flex items-center justify-center text-[#ff9f43] shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
                <path d="M3 12H21M12 3V21" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-[rgba(47,43,61,0.85)] font-medium truncate">Chờ đối soát</p>
              <p className="text-[19px] leading-tight font-bold text-[#ff9f43] mt-0.5">{stats.review}</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div
          onClick={() => setStatusFilter("confirmed")}
          className={`bg-white rounded-[6px] py-2.5 px-3.5 border-b-[3px] border-[#28c76f] shadow-[0px_2px_4px_rgba(47,43,61,0.12)] cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden ${
            statusFilter === "confirmed" ? "ring-2 ring-[#28c76f]" : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-[6px] bg-[rgba(40,199,111,0.14)] flex items-center justify-center text-[#28c76f] shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 11.08V12A10 10 0 1 1 16.03 3.32" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-[rgba(47,43,61,0.85)] font-medium truncate">Đã xác nhận</p>
              <p className="text-[19px] leading-tight font-bold text-[#28c76f] mt-0.5">{stats.confirmed}</p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div
          onClick={() => setStatusFilter("failed")}
          className={`bg-white rounded-[6px] py-2.5 px-3.5 border-b-[3px] border-[#ea5455] shadow-[0px_2px_4px_rgba(47,43,61,0.12)] cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden ${
            statusFilter === "failed" ? "ring-2 ring-[#ea5455]" : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-[6px] bg-[rgba(234,84,85,0.14)] flex items-center justify-center text-[#ea5455] shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M10.29 3.86L1.82 18A2 2 0 0 0 3.54 21H20.46A2 2 0 0 0 22.18 18L13.71 3.86A2 2 0 0 0 10.29 3.86Z" stroke="currentColor" strokeWidth="1.75" />
                <path d="M12 9V13M12 17H12.01" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-[rgba(47,43,61,0.85)] font-medium truncate">Lỗi xử lý</p>
              <p className="text-[19px] leading-tight font-bold text-[#ea5455] mt-0.5">{stats.failed}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Dropzone Card matching Figma Node 26013:90839 */}
      <div
        onClick={onUploadClick}
        className="w-full bg-white border-[1.5px] border-dashed border-[#cccdd3] rounded-[4px] p-5 text-center flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
      >
        <div className="size-[48px] rounded-[6px] bg-[#ffdbdc] flex items-center justify-center text-[#ff4c51] shrink-0 p-[10px]">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 18V8M14 8L9.5 12.5M14 8L18.5 12.5M4 18V19.5C4 21.433 5.567 23 7.5 23H20.5C22.433 23 24 21.433 24 19.5V18" stroke="#ff4c51" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="space-y-3">
          <p className="text-[18px] font-bold text-[#5d586c] leading-[24px]">
            Thả tệp vào đây hoặc nhấp để tải lên
          </p>
          <div className="text-[11px] font-normal text-[#393740] leading-[14px] space-y-1">
            <p>1. Dung lượng tối đa 10MB/tệp</p>
            <p>2. Hỗ trợ: PDF, DOCX, XLSX, JPG, PNG</p>
          </div>
        </div>
      </div>

      {/* Document Table Container */}
      <div className="bg-white rounded-[6px] shadow-[0px_2px_4px_rgba(47,43,61,0.12)] p-4 space-y-3">
        {/* Table Toolbar */}
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-semibold text-[rgba(47,43,61,0.9)]">Danh sách tài liệu đang số hoá</h3>
          <div className="flex items-center gap-2.5 ml-auto">
            {/* Search Input */}
            <div className="relative w-64">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm kiếm trong danh sách ..."
                className="w-full h-8 rounded-[6px] border border-slate-200 bg-white pl-8 pr-3 text-xs text-slate-700 outline-none focus:border-[#3f81ea] shadow-2xs transition-colors"
              />
              <svg className="absolute left-2.5 top-2 size-3.5 text-slate-400" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            {/* Refresh Button */}
            <button
              onClick={loadData}
              title="Làm mới danh sách"
              className="size-8 rounded-[6px] border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 flex items-center justify-center shadow-2xs transition-colors shrink-0"
            >
              <svg className={`size-3.5 ${loading ? "animate-spin" : ""}`} viewBox="0 0 24 24" fill="none">
                <path d="M23 4V10H17M1 20V14H7M3.51 9A9 9 0 0 1 18.36 5.64L23 10M1 14L5.64 18.36A9 9 0 0 0 20.49 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Compact Table */}
        <div className="overflow-x-auto border-t border-slate-100">
          <table className="w-full text-left text-xs">
            <thead className="bg-white text-slate-700 font-semibold border-b border-slate-200/80">
              <tr>
                <th className="py-2.5 px-3 font-semibold text-slate-800 text-xs">Tên tài liệu</th>
                <th className="py-2.5 px-3 font-semibold text-slate-800 text-xs">Loại tài liệu</th>
                <th className="py-2.5 px-3 font-semibold text-slate-800 text-xs">Người tải lên</th>
                <th className="py-2.5 px-3 font-semibold text-slate-800 text-xs">Thời gian tải lên</th>
                <th className="py-2.5 px-3 font-semibold text-slate-800 text-xs">Trạng thái xử lý</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/80">
              {filtered.map((d) => (
                <tr
                  key={d.id}
                  onClick={() => onOpenDoc(d)}
                  className="cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <td className="py-2.5 px-3">
                    <p className="font-normal text-slate-700 truncate max-w-[280px] text-xs" title={d.fileName}>{d.fileName}</p>
                  </td>
                  <td className="py-2.5 px-3 text-slate-600 whitespace-nowrap text-xs">{DOC_TYPE_LABELS[d.type as DocType]}</td>
                  <td className="py-2.5 px-3 text-slate-600 whitespace-nowrap text-xs">{d.uploadedBy}</td>
                  <td className="py-2.5 px-3 text-slate-600 whitespace-nowrap text-xs">{d.uploadTime}</td>
                  <td className="py-2.5 px-3 whitespace-nowrap">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-[4px] text-[11px] font-semibold ${
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
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-400">
                    Không tìm thấy tài liệu nào phù hợp.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination bar matching Figma Screenshot 1 */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-3">
          <p className="text-slate-600">Hiển thị <span className="font-semibold text-slate-800">1 - {Math.min(5, filtered.length)}</span> của 28 kết quả</p>
          <div className="flex items-center gap-1.5">
            <button disabled className="size-8 rounded-[6px] bg-slate-100/80 text-slate-400 flex items-center justify-center text-xs font-medium cursor-not-allowed">
              &lt;
            </button>
            <button className="size-8 rounded-[6px] bg-white border border-[#3f81ea] text-[#3f81ea] font-semibold flex items-center justify-center text-xs shadow-2xs">
              1
            </button>
            <button className="size-8 rounded-[6px] bg-slate-100/80 text-slate-600 font-medium hover:bg-slate-200/80 flex items-center justify-center text-xs transition-colors">
              2
            </button>
            <button className="size-8 rounded-[6px] bg-slate-100/80 text-slate-600 font-medium hover:bg-slate-200/80 flex items-center justify-center text-xs transition-colors">
              3
            </button>
            <button className="size-8 rounded-[6px] bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 flex items-center justify-center text-xs transition-colors">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

