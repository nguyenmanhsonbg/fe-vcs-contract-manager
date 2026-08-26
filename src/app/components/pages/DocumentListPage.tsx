import { useEffect, useMemo, useState } from "react";
import { DigitizedDoc } from "../../data/models";
import { docApi } from "../../services/api";
import {
  IconCalendar,
  IconDocTextSimple,
  IconClockProcessing,
  IconReviewSplit,
  IconCheckCircleOutline,
  IconAlertTriangleOutline,
  IconRefreshSpin,
} from "../icons";
import { Pagination } from "../common/Pagination";
import { StatusBadge } from "../common/StatusBadge";
import { PageHeader } from "../common/PageHeader";
import { UploadDropzone } from "../common/UploadDropzone";
import { SearchInput } from "../common/SearchInput";
import { StatCard } from "../common/StatCard";

import { normalizeDocTypeLabel } from "./DocumentDetailPage";

const today = () => new Date().toISOString().slice(0, 10);

function getDocumentTypeLabel(document: DigitizedDoc): string {
  const field = document.fields?.find(
    (item) => item.id === "documentType" || item.id === "document_type" || item.label === "Loại tài liệu" || item.label === "documentType",
  );
  const value = field?.value?.trim() || document.type;
  if (!value) return "...";
  return normalizeDocTypeLabel(value);
}

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
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [allDocuments, setAllDocuments] = useState<DigitizedDoc[]>([]);

  const loadData = async () => {
    setLoading(true);
    try {
      // Fetch filtered documents for the table view
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

      // Fetch all documents for stat counts without status filtering
      const statsRes = await docApi.getDocuments({
        search,
        type,
        status: "all",
        uploadedBy: uploader,
        assignedTo: assignee,
        lowConfidenceOnly: lowConfOnly,
        from,
        to,
        page: 1,
        size: 1000,
      });
      setAllDocuments(statsRes.content || []);
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
    const mine = allDocuments.filter((d) => d.uploadedBy === "Nguyễn Văn A" || d.uploadedBy === "Tôi").length;
    const ocr = allDocuments.filter((d) => d.status === "ocr" || d.status === "pending").length;
    const review = allDocuments.filter((d) => d.status === "review").length;
    const confirmed = allDocuments.filter((d) => d.status === "confirmed").length;
    const failed = allDocuments.filter((d) => d.status === "failed").length;
    return { mine, ocr, review, confirmed, failed };
  }, [allDocuments]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + documents.length, totalElements);

  return (
    <div className="w-full space-y-6 p-6 bg-[#f8f7fa]">
      {/* Page Header */}
      <PageHeader
        title={customTitle || "Số hoá tài liệu"}
        description="Tải tài liệu mua sắm vào hệ thống để lưu trữ, trích xuất dữ liệu (OCR) và phục vụ xử lý nghiệp vụ"
        action={
          <div className="flex items-center gap-2 rounded-[6px] border border-slate-200 bg-white px-3 h-10 shadow-2xs">
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
        }
      />

      {/* 5 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
        <StatCard
          variant="accent-bottom"
          title="Tài liệu của tôi"
          value={stats.mine}
          accentColor="#3f81ea"
          icon={IconDocTextSimple}
          iconBgClass="bg-[rgba(63,129,234,0.14)] text-[#3f81ea]"
          onClick={() => setStatusFilter("all")}
          className={`cursor-pointer hover:shadow-md transition-shadow ${
            statusFilter === "all" ? "ring-2 ring-[#3f81ea]" : ""
          }`}
        />
        <StatCard
          variant="accent-bottom"
          title="Đang xử lý"
          value={stats.ocr}
          accentColor="#00bad1"
          icon={IconClockProcessing}
          iconBgClass="bg-[rgba(0,186,209,0.14)] text-[#00bad1]"
          onClick={() => setStatusFilter("ocr")}
          className={`cursor-pointer hover:shadow-md transition-shadow ${
            statusFilter === "ocr" ? "ring-2 ring-[#00bad1]" : ""
          }`}
        />
        <StatCard
          variant="accent-bottom"
          title="Chờ đối soát"
          value={stats.review}
          accentColor="#ff9f43"
          icon={IconReviewSplit}
          iconBgClass="bg-[rgba(255,159,67,0.14)] text-[#ff9f43]"
          onClick={() => setStatusFilter("review")}
          className={`cursor-pointer hover:shadow-md transition-shadow ${
            statusFilter === "review" ? "ring-2 ring-[#ff9f43]" : ""
          }`}
        />
        <StatCard
          variant="accent-bottom"
          title="Đã xác nhận"
          value={stats.confirmed}
          accentColor="#28c76f"
          icon={IconCheckCircleOutline}
          iconBgClass="bg-[rgba(40,199,111,0.14)] text-[#28c76f]"
          onClick={() => setStatusFilter("confirmed")}
          className={`cursor-pointer hover:shadow-md transition-shadow ${
            statusFilter === "confirmed" ? "ring-2 ring-[#28c76f]" : ""
          }`}
        />
        <StatCard
          variant="accent-bottom"
          title="Lỗi"
          value={stats.failed}
          accentColor="#ea5455"
          icon={IconAlertTriangleOutline}
          iconBgClass="bg-[rgba(234,84,85,0.14)] text-[#ea5455]"
          onClick={() => setStatusFilter("failed")}
          className={`cursor-pointer hover:shadow-md transition-shadow ${
            statusFilter === "failed" ? "ring-2 ring-[#ea5455]" : ""
          }`}
        />
      </div>

      {/* Upload Dropzone Card */}
      <UploadDropzone onUploadClick={onUploadClick} />

      {/* Document Table Container */}
      <div className="bg-white rounded-[6px] shadow-[0px_2px_4px_rgba(47,43,61,0.12)] p-4 space-y-3">
        {/* Table Toolbar */}
        <div className="flex items-center justify-between h-[44px]">
          <h3 className="text-[16px] font-medium text-[#393740] leading-[22px]">Danh sách tài liệu đang số hoá</h3>
          <div className="flex items-center gap-3 ml-auto">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Tìm kiếm trong danh sách ..."
              className="w-64"
            />
            <button
              onClick={loadData}
              title="Làm mới danh sách"
              className="size-[38px] rounded-[6px] border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 flex items-center justify-center shadow-2xs transition-colors shrink-0"
            >
              <IconRefreshSpin className={`size-4 ${loading ? "animate-spin" : ""}`} />
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
                  <td className="py-2.5 px-3 text-[#393740] font-normal whitespace-nowrap text-[12px] leading-[17px]">{getDocumentTypeLabel(d)}</td>
                  <td className="py-2.5 px-3 text-[#393740] font-normal whitespace-nowrap text-[12px] leading-[17px]">{d.uploadedBy}</td>
                  <td className="py-2.5 px-3 text-[#393740] font-normal whitespace-nowrap text-[12px] leading-[17px]">{d.uploadTime}</td>
                  <td className="py-2.5 px-3 whitespace-nowrap">
                    <StatusBadge status={d.status} />
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
