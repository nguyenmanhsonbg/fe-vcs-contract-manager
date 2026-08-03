import { useEffect, useMemo, useState } from "react";
import { DigitizedDoc, DOC_TYPE_LABELS, DocType } from "../../data/mock";
import { docApi } from "../../services/api";
import { IconCalendar } from "../icons";
import { Pagination } from "../common/Pagination";

const today = () => new Date().toISOString().slice(0, 10);

interface DocumentListPageProps {
  onOpenDoc: (doc: DigitizedDoc) => void;
  onUploadClick: () => void;
  onViewOriginalDoc?: (doc: DigitizedDoc) => void;
  refreshToken?: number;
  defaultDocType?: string;
  customTitle?: string;
}

export function DocumentListPage({
  onOpenDoc,
  onUploadClick,
  onViewOriginalDoc,
  refreshToken = 0,
  defaultDocType = "all",
  customTitle,
}: DocumentListPageProps) {
  const [documents, setDocuments] = useState<DigitizedDoc[]>([]);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [type, setType] = useState<string>(defaultDocType);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [uploader, setUploader] = useState<string>("all");
  const [assignee, setAssignee] = useState<string>("all");
  const [lowConfOnly, setLowConfOnly] = useState(false);
  const [from, setFrom] = useState(today);
  const [to, setTo] = useState(today);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await docApi.getDocuments({
        search,
        type,
        status: statusFilter,
        uploadedBy: uploader,
        assignedTo: assignee,
        lowConfidenceOnly: lowConfOnly,
        from,
        to,
        page: currentPage,
        size: pageSize,
      });
      const rawContent = res.content || [];
      setDocuments(rawContent);
      setTotalElements(res.totalElements || rawContent.length);
      setTotalPages(res.totalPages || 1);
    } catch (err) {
      console.error("Lỗi khi tải danh sách từ backend:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setType(defaultDocType);
  }, [defaultDocType]);

  useEffect(() => {
    loadData();
    const interval = setInterval(() => {
      loadData();
    }, 3000);
    return () => clearInterval(interval);
  }, [search, type, statusFilter, uploader, assignee, lowConfOnly, from, to, currentPage, pageSize, refreshToken]);

  const stats = useMemo(() => {
    const mine = documents.filter((d) => d.uploadedBy === "Nguyễn Văn A").length;
    const ocr = documents.filter((d) => d.status === "ocr" || d.status === "pending").length;
    const review = documents.filter((d) => d.status === "review").length;
    const confirmed = documents.filter((d) => d.status === "confirmed").length;
    const failed = documents.filter((d) => d.status === "failed").length;
    return { mine, ocr, review, confirmed, failed };
  }, [documents]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + documents.length, totalElements);

  return (
    <div className="w-full space-y-6 p-6 bg-[#f8f7fa]">
      {/* Page Header (1132x46px) */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[24px] font-bold text-[#2F2B3D] leading-[29px]">
            {customTitle || "Số hoá tài liệu"}
          </h1>
          <p className="text-[12px] font-normal text-slate-500 leading-[17px] mt-1">
            Tải tài liệu mua sắm vào hệ thống để lưu trữ, trích xuất dữ liệu (OCR) và phục vụ xử lý nghiệp vụ
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-[6px] border border-slate-200 bg-white px-3 h-10 shadow-2xs shrink-0">
          <IconCalendar className="size-4 text-slate-500 shrink-0" />
          <input
            type="date"
            value={from}
            max={to}
            onChange={(e) => setFrom(e.target.value)}
            aria-label="Từ ngày"
            className="text-[13px] text-[#393740] outline-none"
          />
          <span className="text-slate-400">-</span>
          <input
            type="date"
            value={to}
            min={from}
            onChange={(e) => setTo(e.target.value)}
            aria-label="Đến ngày"
            className="text-[13px] text-[#393740] outline-none"
          />
        </div>
      </div>

      {/* 5 Stat Cards (Row 1132x108px, padding 24px, gap 8px, radius 6px) */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
        {/* Card 1 */}
        <div
          onClick={() => setStatusFilter("all")}
          className={`bg-white rounded-[6px] h-[108px] p-6 border-b-[3px] border-[#3f81ea] shadow-[0px_2px_4px_rgba(47,43,61,0.12)] cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden flex items-center ${
            statusFilter === "all" ? "ring-2 ring-[#3f81ea]" : ""
          }`}
        >
          <div className="flex items-center gap-4 w-full">
            <div className="size-10 rounded-[6px] bg-[rgba(63,129,234,0.14)] flex items-center justify-center text-[#3f81ea] shrink-0 p-1.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[13px] text-[#393740] font-medium leading-[18px] truncate">Tài liệu của tôi</p>
              <p className="text-[24px] leading-[38px] font-medium text-[#3f81ea]">{stats.mine}</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => setStatusFilter("ocr")}
          className={`bg-white rounded-[6px] h-[108px] p-6 border-b-[3px] border-[#00bad1] shadow-[0px_2px_4px_rgba(47,43,61,0.12)] cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden flex items-center ${
            statusFilter === "ocr" ? "ring-2 ring-[#00bad1]" : ""
          }`}
        >
          <div className="flex items-center gap-4 w-full">
            <div className="size-10 rounded-[6px] bg-[rgba(0,186,209,0.14)] flex items-center justify-center text-[#00bad1] shrink-0 p-1.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
                <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[13px] text-[#393740] font-medium leading-[18px] truncate">Đang xử lý</p>
              <p className="text-[24px] leading-[38px] font-medium text-[#00bad1]">{stats.ocr}</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => setStatusFilter("review")}
          className={`bg-white rounded-[6px] h-[108px] p-6 border-b-[3px] border-[#ff9f43] shadow-[0px_2px_4px_rgba(47,43,61,0.12)] cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden flex items-center ${
            statusFilter === "review" ? "ring-2 ring-[#ff9f43]" : ""
          }`}
        >
          <div className="flex items-center gap-4 w-full">
            <div className="size-10 rounded-[6px] bg-[rgba(255,159,67,0.14)] flex items-center justify-center text-[#ff9f43] shrink-0 p-1.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
                <path d="M3 12H21M12 3V21" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[13px] text-[#393740] font-medium leading-[18px] truncate">Chờ đối soát</p>
              <p className="text-[24px] leading-[38px] font-medium text-[#ff9f43]">{stats.review}</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div
          onClick={() => setStatusFilter("confirmed")}
          className={`bg-white rounded-[6px] h-[108px] p-6 border-b-[3px] border-[#28c76f] shadow-[0px_2px_4px_rgba(47,43,61,0.12)] cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden flex items-center ${
            statusFilter === "confirmed" ? "ring-2 ring-[#28c76f]" : ""
          }`}
        >
          <div className="flex items-center gap-4 w-full">
            <div className="size-10 rounded-[6px] bg-[rgba(40,199,111,0.14)] flex items-center justify-center text-[#28c76f] shrink-0 p-1.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 11.08V12A10 10 0 1 1 16.03 3.32" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[13px] text-[#393740] font-medium leading-[18px] truncate">Đã xác nhận</p>
              <p className="text-[24px] leading-[38px] font-medium text-[#28c76f]">{stats.confirmed}</p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div
          onClick={() => setStatusFilter("failed")}
          className={`bg-white rounded-[6px] h-[108px] p-6 border-b-[3px] border-[#ea5455] shadow-[0px_2px_4px_rgba(47,43,61,0.12)] cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden flex items-center ${
            statusFilter === "failed" ? "ring-2 ring-[#ea5455]" : ""
          }`}
        >
          <div className="flex items-center gap-4 w-full">
            <div className="size-10 rounded-[6px] bg-[rgba(234,84,85,0.14)] flex items-center justify-center text-[#ea5455] shrink-0 p-1.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M10.29 3.86L1.82 18A2 2 0 0 0 3.54 21H20.46A2 2 0 0 0 22.18 18L13.71 3.86A2 2 0 0 0 10.29 3.86Z" stroke="currentColor" strokeWidth="1.75" />
                <path d="M12 9V13M12 17H12.01" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[13px] text-[#393740] font-medium leading-[18px] truncate">Lỗi</p>
              <p className="text-[24px] leading-[38px] font-medium text-[#ea5455]">{stats.failed}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Dropzone Card (padding 16px, gap 16px, radius 4px) */}
      <div
        onClick={onUploadClick}
        className="w-full bg-white border-[1.5px] border-dashed border-[#cccdd3] rounded-[4px] p-6 text-center flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
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

      {/* Document Table Container (radius 6px, padding 16px) */}
      <div className="bg-white rounded-[6px] shadow-[0px_2px_4px_rgba(47,43,61,0.12)] p-4 space-y-3">
        {/* Table Toolbar (height 44px) */}
        <div className="flex items-center justify-between h-[44px]">
          <h3 className="text-[16px] font-medium text-[#393740] leading-[22px]">Danh sách tài liệu đang số hoá</h3>
          <div className="flex items-center gap-3 ml-auto">
            {/* Search Input (height 38px, radius 6px) */}
            <div className="relative w-64">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm kiếm trong danh sách ..."
                className="w-full h-[38px] rounded-[6px] border border-slate-200 bg-white pl-9 pr-3 text-[12px] font-normal text-slate-700 leading-[17px] outline-none focus:border-[#3f81ea] shadow-2xs transition-colors"
              />
              <svg className="absolute left-3 top-3 size-3.5 text-slate-400" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            {/* Refresh Button (size 38x38px, radius 6px) */}
            <button
              onClick={loadData}
              title="Làm mới danh sách"
              className="size-[38px] rounded-[6px] border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 flex items-center justify-center shadow-2xs transition-colors shrink-0"
            >
              <svg className={`size-4 ${loading ? "animate-spin" : ""}`} viewBox="0 0 24 24" fill="none">
                <path d="M23 4V10H17M1 20V14H7M3.51 9A9 9 0 0 1 18.36 5.64L23 10M1 14L5.64 18.36A9 9 0 0 0 20.49 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Compact Table (Row height 40px, cell padding 4px 10px) */}
        <div className="overflow-x-auto border-t border-slate-100">
          <table className="w-full text-left">
            <thead className="bg-white border-b border-slate-200/80">
              <tr className="h-10">
                <th className="py-2.5 px-3 font-medium text-[#5d586c] text-[13px] leading-[18px]">Tên tài liệu</th>
                <th className="py-2.5 px-3 font-medium text-[#5d586c] text-[13px] leading-[18px]">Loại tài liệu</th>
                <th className="py-2.5 px-3 font-medium text-[#5d586c] text-[13px] leading-[18px]">Người tải lên</th>
                <th className="py-2.5 px-3 font-medium text-[#5d586c] text-[13px] leading-[18px]">Thời gian tải lên</th>
                <th className="py-2.5 px-3 font-medium text-[#5d586c] text-[13px] leading-[18px]">Trạng thái xử lý</th>
                <th className="py-2.5 px-3 font-medium text-[#5d586c] text-[13px] leading-[18px] text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/80">
              {documents.map((d) => (
                <tr
                  key={d.id}
                  onClick={() => onOpenDoc(d)}
                  className="h-10 cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <td className="py-2.5 px-3">
                    <p className="font-normal text-[#393740] truncate max-w-[280px] text-[12px] leading-[17px]" title={d.fileName}>{d.fileName}</p>
                  </td>
                  <td className="py-2.5 px-3 text-[#393740] font-normal whitespace-nowrap text-[12px] leading-[17px]">{DOC_TYPE_LABELS[d.type as DocType] || d.type}</td>
                  <td className="py-2.5 px-3 text-[#393740] font-normal whitespace-nowrap text-[12px] leading-[17px]">{d.uploadedBy}</td>
                  <td className="py-2.5 px-3 text-[#393740] font-normal whitespace-nowrap text-[12px] leading-[17px]">{d.uploadTime}</td>
                  <td className="py-2.5 px-3 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center h-6 px-2.5 rounded-[4px] text-[13px] font-medium leading-[14px] ${
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
                  <td className="py-2.5 px-3 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => onViewOriginalDoc?.(d)}
                      className="p-1 text-slate-500 hover:text-[#3f81ea] hover:bg-slate-100 rounded transition-colors"
                      title="Xem chi tiết tài liệu gốc"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
              {documents.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-400 text-[12px]">
                    Không tìm thấy tài liệu nào phù hợp.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination bar */}
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalElements={totalElements}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          onPageSizeChange={(newSize) => {
            setPageSize(newSize);
            setCurrentPage(1);
          }}
        />
      </div>
    </div>
  );
}
