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
    <div className="space-y-5 p-6">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[18px] font-semibold text-slate-800">Số hoá tài liệu</h1>
          <p className="mt-0.5 text-[13px] text-slate-500">
            Tải tài liệu mua sắm vào hệ thống để lưu trữ, trích xuất dữ liệu (OCR) và phục vụ xử lý nghiệp vụ
          </p>
        </div>
        <Button variant="outline" className="gap-2 text-[13px] h-9 shadow-sm bg-white border-slate-200">
          <CalendarDays className="size-4 text-slate-400" />
          <span className="text-slate-600">01/04/2025 – 30/04/2025</span>
        </Button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {STAT_CARDS.map((s) => (
          <Card
            key={s.key}
            className={`border-t-[3px] ${s.bar} rounded-lg p-4 shadow-sm bg-white cursor-pointer hover:shadow-md transition-shadow`}
            onClick={() => setStatus(s.key === "mine" ? "all" : s.key === "ocr" ? "ocr" : s.key)}
          >
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-slate-500 leading-tight">{s.label}</span>
              <div className={`flex size-8 items-center justify-center rounded-md bg-slate-50`}>
                <s.icon className={`size-4 ${s.color}`} />
              </div>
            </div>
            <p className={`mt-2 text-2xl font-semibold ${s.color}`}>{s.value}</p>
          </Card>
        ))}
      </div>

      {/* Upload zone */}
      <Card className="border-2 border-dashed border-slate-200 bg-slate-50/60 py-7 px-8">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <div className="flex size-12 items-center justify-center rounded-xl bg-brand/10">
            <UploadCloud className="size-5 text-brand" />
          </div>
          <div className="space-y-0.5">
            <p className="text-[14px] font-medium text-slate-800">
              Kéo thả tài liệu vào đây, hoặc{" "}
              <span onClick={onUploadClick} className="text-brand cursor-pointer hover:underline">tải lên từ máy tính</span>
            </p>
            <p className="text-[12px] text-slate-400">Hỗ trợ PDF, DOCX, XLSX, JPG, PNG · Tối đa 10 MB/tệp</p>
          </div>
          <Button
            onClick={onUploadClick}
            className="mt-1 h-8 bg-white border border-brand/30 text-brand hover:bg-brand-soft hover:border-brand text-[13px] shadow-none px-4"
          >
            <UploadCloud className="size-3.5 mr-1.5" />
            Chọn tệp tải lên
          </Button>
        </div>
      </Card>

      {/* Document table card */}
      <Card className="p-5 shadow-sm">
        {/* Toolbar */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="text-[15px] font-semibold text-slate-800 shrink-0">Danh sách tài liệu đang số hoá</h3>
          <div className="flex items-center gap-2 ml-auto">
            <div className="relative w-60">
              <FileSearch className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-slate-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm kiếm tài liệu…"
                className="bg-slate-50 pl-8 h-9 text-[13px] border-slate-200"
              />
            </div>
            <Button variant="outline" size="icon" className="h-9 w-9 border-slate-200" title="Làm mới" onClick={loadData}>
              <RefreshCw className={`size-4 text-slate-500 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <FilterSelect value={type} onChange={setType} placeholder="Loại tài liệu" options={Object.entries(DOC_TYPE_LABELS).map(([v, l]) => ({ value: v, label: l }))} />
          <FilterSelect value={status} onChange={setStatus} placeholder="Trạng thái" options={Object.entries(STATUS_LABELS).map(([v, l]) => ({ value: v, label: l }))} />
          <FilterSelect value={uploader} onChange={setUploader} placeholder="Người tải lên" options={uploaders.map((u) => ({ value: u, label: u }))} />
          <FilterSelect value={assignee} onChange={setAssignee} placeholder="Người xử lý" options={assignees.map((u) => ({ value: u, label: u }))} />
          <label className="ml-auto flex cursor-pointer items-center gap-2 text-[13px] text-slate-600 select-none">
            <Checkbox checked={lowConfOnly} onCheckedChange={(v) => setLowConfOnly(Boolean(v))} />
            Chỉ hiển thị cảnh báo độ tin cậy thấp
          </label>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-md border border-slate-200">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50 hover:bg-slate-50">
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Tên tài liệu</TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Loại tài liệu</TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Người tải lên</TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Thời gian tải lên</TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Trạng thái xử lý</TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider w-28">Tiến độ OCR</TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider text-center">Độ tin cậy</TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Người xử lý</TableHead>
                <TableHead className="h-10 text-[11px] font-semibold text-slate-500 uppercase tracking-wider text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((d) => (
                <TableRow
                  key={d.id}
                  className="cursor-pointer hover:bg-slate-50/80 group"
                  onClick={() => onOpen(d)}
                >
                  <TableCell className="py-2.5">
                    <div>
                      <p className="text-[13px] font-medium text-brand truncate max-w-[200px]" title={d.fileName}>
                        {d.fileName}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{d.id} · {d.pageCount} trang</p>
                    </div>
                  </TableCell>
                  <TableCell className="py-2.5 text-[13px] text-slate-600 whitespace-nowrap">{DOC_TYPE_LABELS[d.type as DocType]}</TableCell>
                  <TableCell className="py-2.5 text-[13px] text-slate-600 whitespace-nowrap">{d.uploadedBy}</TableCell>
                  <TableCell className="py-2.5 text-[13px] text-slate-500 whitespace-nowrap">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3 text-slate-300" />
                      {d.uploadTime}
                    </span>
                  </TableCell>
                  <TableCell className="py-2.5"><StatusBadge status={d.status} /></TableCell>
                  <TableCell className="py-2.5">
                    <div className="flex items-center gap-2">
                      <Progress
                        value={d.progress}
                        className="h-1.5 bg-slate-100"
                        indicatorClassName={d.progress === 100 ? "bg-[#28c76f]" : d.status === "failed" ? "bg-[#ea5455]" : "bg-brand"}
                      />
                      <span className="w-7 shrink-0 text-right text-[11px] text-slate-500">{d.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-2.5 text-center">
                    {d.avgConfidence > 0 ? <ConfidencePill value={d.avgConfidence} /> : <span className="text-slate-300 text-[13px]">—</span>}
                  </TableCell>
                  <TableCell className="py-2.5 text-[13px] text-slate-600 whitespace-nowrap">
                    {d.assignedTo === "—" ? <span className="text-slate-300">—</span> : d.assignedTo}
                  </TableCell>
                  <TableCell className="py-2.5 text-right" onClick={(e) => e.stopPropagation()}>
                    <RowActions doc={d} onOpen={onOpen} onRefresh={loadData} />
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={9} className="py-12 text-center text-[13px] text-muted-foreground">
                    Không có tài liệu nào phù hợp bộ lọc.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between text-[13px] text-muted-foreground">
          <span>Hiển thị <span className="font-medium text-slate-700">{filtered.length}</span> / {documents.length} tài liệu</span>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm" className="h-8 px-3 text-[12px]">Trước</Button>
            <Button size="sm" className="h-8 w-8 bg-brand text-white hover:bg-brand-dark text-[12px]">1</Button>
            <Button variant="outline" size="sm" className="h-8 w-8 text-[12px]">2</Button>
            <Button variant="outline" size="sm" className="h-8 w-8 text-[12px]">3</Button>
            <Button variant="outline" size="sm" className="h-8 px-3 text-[12px]">Sau</Button>
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
