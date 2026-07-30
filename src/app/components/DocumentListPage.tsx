import { useEffect, useMemo, useState } from "react";
import {
  FileText,
  Loader2,
  LayoutGrid,
  CheckCircle2,
  FileWarning,
  UploadCloud,
  RefreshCw,
  Eye,
  Pencil,
  ScanLine,
  FileSearch,
  MoreHorizontal,
  CalendarDays,
  Clock,
} from "lucide-react";
import {
  DOC_TYPE_LABELS,
  STATUS_LABELS,
  DocType,
  DigitizedDoc,
} from "../data/mock";
import { docApi } from "../services/api";
import { StatusBadge, ConfidencePill } from "./StatusBadge";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { toast } from "sonner";

export function DocumentListPage({
  onOpen,
  onUploadClick,
}: {
  onOpen: (doc: DigitizedDoc) => void;
  onUploadClick?: () => void;
}) {
  const [documents, setDocuments] = useState<DigitizedDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [type, setType] = useState<string>("all");
  const [status, setStatus] = useState<string>("all");
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

  const uploaders = useMemo(() => [...new Set(documents.map((d) => d.uploadedBy))], [documents]);
  const assignees = useMemo(
    () => [...new Set(documents.map((d) => d.assignedTo).filter((a) => a !== "—"))],
    [documents]
  );

  // Compute stats from actual data
  const stats = useMemo(() => {
    const mine = documents.filter((d) => d.uploadedBy === "Nguyễn Văn A").length;
    const ocr = documents.filter((d) => d.status === "ocr" || d.status === "pending").length;
    const review = documents.filter((d) => d.status === "review").length;
    const confirmed = documents.filter((d) => d.status === "confirmed").length;
    const failed = documents.filter((d) => d.status === "failed").length;
    return { mine, ocr, review, confirmed, failed };
  }, [documents]);

  const STAT_CARDS = [
    { key: "mine", label: "Tài liệu của tôi", value: stats.mine, icon: FileText, color: "text-slate-600", bar: "border-t-slate-400" },
    { key: "ocr", label: "Đang xử lý", value: stats.ocr, icon: Loader2, color: "text-[#007bff]", bar: "border-t-[#007bff]" },
    { key: "review", label: "Chờ đối soát", value: stats.review, icon: LayoutGrid, color: "text-[#ff9f43]", bar: "border-t-[#ff9f43]" },
    { key: "confirmed", label: "Đã xác nhận", value: stats.confirmed, icon: CheckCircle2, color: "text-[#28c76f]", bar: "border-t-[#28c76f]" },
    { key: "failed", label: "Lỗi xử lý", value: stats.failed, icon: FileWarning, color: "text-[#ea5455]", bar: "border-t-[#ea5455]" },
  ];

  const filtered = documents.filter((d) => {
    if (search && !d.fileName.toLowerCase().includes(search.toLowerCase()) && !d.id.toLowerCase().includes(search.toLowerCase())) return false;
    if (type !== "all" && d.type !== type) return false;
    if (status !== "all" && d.status !== status) return false;
    if (uploader !== "all" && d.uploadedBy !== uploader) return false;
    if (assignee !== "all" && d.assignedTo !== assignee) return false;
    if (lowConfOnly && d.avgConfidence >= 85) return false;
    return true;
  });

  return (
    <div className="space-y-4 px-6 py-4">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[17px] font-semibold text-slate-800">Số hoá tài liệu</h1>
          <p className="mt-0.5 text-xs text-slate-500">
            Tải tài liệu mua sắm vào hệ thống để lưu trữ, trích xuất dữ liệu (OCR) và phục vụ xử lý nghiệp vụ
          </p>
        </div>
        <button className="flex h-8.5 w-56 items-center justify-between rounded-[6px] border border-slate-200 bg-white px-3 text-xs font-normal text-slate-700 shadow-2xs hover:border-slate-300 transition-colors shrink-0">
          <span>01/04/2025 - 30/04/2025</span>
          <IconCalendar className="size-3.5 text-slate-500 shrink-0" />
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-5">
        {STAT_CARDS.map((s) => (
          <Card
            key={s.key}
            className={`border-t-[3px] ${s.bar} rounded-lg p-3.5 shadow-sm bg-white cursor-pointer hover:shadow-md transition-shadow`}
            onClick={() => setStatus(s.key === "mine" ? "all" : s.key === "ocr" ? "ocr" : s.key)}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 leading-tight">{s.label}</span>
              <div className={`flex size-7 items-center justify-center rounded-md bg-slate-50`}>
                <s.icon className={`size-3.5 ${s.color}`} />
              </div>
            </div>
            <p className={`mt-1.5 text-xl font-semibold ${s.color}`}>{s.value}</p>
          </Card>
        ))}
      </div>

      {/* Upload zone */}
      <Card className="border-2 border-dashed border-[#ffdbdc] bg-[#fff5f5] py-6 px-8 rounded-[6px]">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <div className="flex size-11 items-center justify-center rounded-lg bg-[#ffdbdc] text-[#ff4c51]">
            <UploadCloud className="size-5" />
          </div>
          <div className="space-y-0.5">
            <p className="text-sm font-medium text-slate-800">
              Kéo thả tài liệu vào đây, hoặc{" "}
              <span onClick={onUploadClick} className="text-[#ff4c51] font-semibold cursor-pointer hover:underline">tải lên từ máy tính</span>
            </p>
            <p className="text-xs text-slate-400">Hỗ trợ PDF, DOCX, XLSX, JPG, PNG · Tối đa 10 MB/tệp</p>
          </div>
          <Button
            onClick={onUploadClick}
            className="mt-1 h-8 bg-white border border-[#ff4c51] text-[#ff4c51] hover:bg-[#fff0f0] text-xs shadow-2xs px-4.5"
          >
            <UploadCloud className="size-3.5 mr-1.5" />
            Chọn tệp tải lên
          </Button>
        </div>
      </Card>

      {/* Document table card */}
      <Card className="p-6 shadow-sm rounded-[6px]">
        {/* Toolbar */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <h3 className="text-[16px] font-semibold text-[rgba(47,43,61,0.9)] shrink-0">Danh sách tài liệu đang số hoá</h3>
          <div className="flex items-center gap-3 ml-auto">
            <div className="relative w-72">
              <FileSearch className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm kiếm trong danh sách ..."
                className="bg-white pl-9 h-9 text-xs border-slate-200 focus:border-[#3f81ea]"
              />
            </div>
            <Button variant="outline" size="icon" className="h-9 w-9 border-slate-200" title="Làm mới danh sách" onClick={loadData}>
              <RefreshCw className={`size-4 text-slate-500 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border-t border-slate-100">
          <Table>
            <TableHeader>
              <TableRow className="bg-white hover:bg-white border-b border-slate-200/80">
                <TableHead className="py-4 px-4 font-semibold text-slate-800 text-[13px]">Tên tài liệu</TableHead>
                <TableHead className="py-4 px-4 font-semibold text-slate-800 text-[13px]">Loại tài liệu</TableHead>
                <TableHead className="py-4 px-4 font-semibold text-slate-800 text-[13px]">Người tải lên</TableHead>
                <TableHead className="py-4 px-4 font-semibold text-slate-800 text-[13px]">Thời gian tải lên</TableHead>
                <TableHead className="py-4 px-4 font-semibold text-slate-800 text-[13px]">Trạng thái xử lý</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((d) => (
                <TableRow
                  key={d.id}
                  className="cursor-pointer hover:bg-slate-50/70 transition-colors"
                  onClick={() => onOpen(d)}
                >
                  <TableCell className="py-4 px-4">
                    <p className="text-[13px] font-normal text-slate-700 truncate max-w-[280px]" title={d.fileName}>
                      {d.fileName}
                    </p>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-[13px] text-slate-600 whitespace-nowrap">{DOC_TYPE_LABELS[d.type as DocType]}</TableCell>
                  <TableCell className="py-4 px-4 text-[13px] text-slate-600 whitespace-nowrap">{d.uploadedBy}</TableCell>
                  <TableCell className="py-4 px-4 text-[13px] text-slate-600 whitespace-nowrap">
                    {d.uploadTime}
                  </TableCell>
                  <TableCell className="py-4 px-4 whitespace-nowrap">
                    <StatusBadge status={d.status} />
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="py-12 text-center text-[13px] text-muted-foreground">
                    Không tìm thấy tài liệu nào phù hợp.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 pt-1">
          <span className="text-slate-600">Hiển thị <span className="font-semibold text-slate-800">1 - {Math.min(5, filtered.length)}</span> của 28 kết quả</span>
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
      </Card>
    </div>
  );
}

function FilterSelect({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: { value: string; label: string }[];
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-8 w-auto min-w-[140px] bg-white border-slate-200 text-[13px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Tất cả</SelectItem>
        {options.map((o) => (
          <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function RowActions({ doc, onOpen, onRefresh }: { doc: DigitizedDoc; onOpen: (d: DigitizedDoc) => void; onRefresh: () => void }) {
  async function handleRerunOCR() {
    await docApi.rerunOCR(doc.id);
    toast.success(`Đã phát lệnh chạy lại OCR cho tài liệu ${doc.id}`);
    onRefresh();
  }

  return (
    <div className="flex items-center justify-end gap-0.5">
      <Button variant="ghost" size="icon" title="Xem chi tiết" className="h-8 w-8" onClick={() => onOpen(doc)}>
        <Eye className="size-3.5 text-slate-400 group-hover:text-slate-600" />
      </Button>
      <Button variant="ghost" size="icon" title="Chỉnh sửa" className="h-8 w-8" onClick={() => onOpen(doc)}>
        <Pencil className="size-3.5 text-slate-400 group-hover:text-slate-600" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger className="inline-flex size-8 items-center justify-center rounded-md hover:bg-accent">
          <MoreHorizontal className="size-3.5 text-slate-400" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="gap-2 text-[13px] cursor-pointer" onClick={handleRerunOCR}>
            <ScanLine className="size-4" /> Chạy lại OCR
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 text-[13px] cursor-pointer" onClick={() => onOpen(doc)}>
            <FileText className="size-4" /> Xem tệp gốc
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
