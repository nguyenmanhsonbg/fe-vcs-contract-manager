import { useState } from "react";
import {
  ArrowLeft,
  ZoomIn,
  ZoomOut,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  ScanLine,
  Save,
  CheckCircle2,
  Download,
  History,
  Check,
  Pencil,
  AlertTriangle,
  X,
} from "lucide-react";
import {
  DigitizedDoc,
  DOC_TYPE_LABELS,
  ExtractedField,
} from "../data/mock";
import { StatusBadge, ConfidencePill } from "./StatusBadge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";
import { DocumentCanvas } from "./DocumentCanvas";
import { useFieldEditor } from "../hooks/useFieldEditor";

export function DocumentDetailPage({
  doc,
  onBack,
}: {
  doc: DigitizedDoc;
  onBack: () => void;
}) {
  const [fields, setFields] = useState<ExtractedField[]>(doc.fields);
  const [log, setLog] = useState(doc.editLog);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [docType, setDocType] = useState(doc.type as string);
  const [confirmed, setConfirmed] = useState(doc.status === "confirmed");

  const selected = fields.find((f) => f.id === selectedId) || null;
  const activeRegion = selected ? selected.region : null;

  function selectField(f: ExtractedField) {
    setSelectedId(f.id);
    setPage(f.region.page);
  }

  const editor = useFieldEditor({
    doc,
    confirmed,
    onFieldsChange: setFields,
    onLogChange: setLog,
    onSelectField: selectField,
  });

  const reviewCount = fields.filter((f) => f.confidence < 85).length;

  return (
    <div className="flex h-full flex-col">
      {/* Sub header */}
      <div className="flex items-center justify-between border-b border-border bg-white px-5 py-2.5 gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Button variant="ghost" size="icon" className="shrink-0" onClick={onBack}>
            <ArrowLeft className="size-5" />
          </Button>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold text-slate-800">Chi tiết số hoá tài liệu</span>
              <StatusBadge status={confirmed ? "confirmed" : doc.status} />
            </div>
            <p className="text-[12px] text-muted-foreground truncate">
              {doc.fileName} · {doc.id} · {doc.pageCount} trang · Cập nhật {doc.lastUpdated}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {reviewCount > 0 && (
            <span className="hidden lg:flex items-center gap-1.5 rounded-md bg-amber-50 border border-amber-100 px-2.5 py-1.5 text-[12px] text-amber-700">
              <AlertTriangle className="size-3.5" />
              {reviewCount} trường độ tin cậy thấp
            </span>
          )}
          <Button variant="outline" size="sm" className="gap-1.5 text-[13px] h-8">
            <Save className="size-3.5" /> Lưu tạm
          </Button>
          <Button
            size="sm"
            className="gap-1.5 bg-brand text-white hover:bg-brand-dark text-[13px] h-8"
            onClick={() => {
              setConfirmed(true);
              toast.success("Đã xác nhận hoàn tất tài liệu");
            }}
            disabled={confirmed}
          >
            <CheckCircle2 className="size-3.5" />
            {confirmed ? "Đã xác nhận" : "Xác nhận hoàn tất"}
          </Button>
        </div>
      </div>

      {/* Split view */}
      <div className="grid flex-1 grid-cols-1 gap-4 overflow-hidden p-4 lg:grid-cols-2">
        {/* LEFT — Original document */}
        <Card className="flex flex-col overflow-hidden p-0">
          <div className="flex items-center justify-between border-b border-border px-4 py-2">
            <span className="text-sm font-medium">Bản gốc</span>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" onClick={() => setZoom((z) => Math.max(50, z - 10))}>
                <ZoomOut className="size-4" />
              </Button>
              <span className="w-12 text-center text-xs text-slate-500">{zoom}%</span>
              <Button variant="ghost" size="icon" onClick={() => setZoom((z) => Math.min(200, z + 10))}>
                <ZoomIn className="size-4" />
              </Button>
              <Button variant="ghost" size="icon"><Maximize2 className="size-4" /></Button>
              <div className="mx-1 h-5 w-px bg-border" />
              <Button variant="ghost" size="icon" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
                <ChevronLeft className="size-4" />
              </Button>
              <span className="text-xs text-slate-500">Trang {page}/{doc.pageCount}</span>
              <Button variant="ghost" size="icon" disabled={page >= doc.pageCount} onClick={() => setPage((p) => p + 1)}>
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-auto bg-slate-100 p-6">
            <DocumentCanvas
              zoom={zoom}
              page={page}
              region={activeRegion && activeRegion.page === page ? activeRegion : null}
            />
          </div>
        </Card>

        {/* RIGHT — Extracted data */}
        <Card className="flex flex-col overflow-hidden p-0">
          <div className="flex items-center justify-between border-b border-border px-4 py-2">
            <span className="text-sm font-medium">Dữ liệu đã bóc tách</span>
            <div className="flex items-center gap-2">
              <Select value={docType} onValueChange={setDocType}>
                <SelectTrigger className="h-8 w-44 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(DOC_TYPE_LABELS).map(([v, l]) => (
                    <SelectItem key={v} value={v}>{l}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="gap-1.5">
                <ScanLine className="size-4" /> Chạy lại OCR
              </Button>
            </div>
          </div>

          <Tabs defaultValue="fields" className="flex flex-1 flex-col overflow-hidden">
            <TabsList className="mx-4 mt-3 w-fit">
              <TabsTrigger value="fields">Thông tin chung</TabsTrigger>
              <TabsTrigger value="items">Bảng hàng hoá</TabsTrigger>
              <TabsTrigger value="log" className="gap-1.5">
                <History className="size-4" /> Nhật ký chỉnh sửa
              </TabsTrigger>
            </TabsList>

            {/* Fields */}
            <TabsContent value="fields" className="flex-1 overflow-y-auto p-4">
              <div className="space-y-2">
                {fields.map((f) => {
                  const isSelected = f.id === selectedId;
                  const isEditing = f.id === editor.editingId;
                  const low = f.confidence < 85;
                  return (
                    <div
                      key={f.id}
                      onClick={() => selectField(f)}
                      className={`cursor-pointer rounded-lg border p-3 transition-colors ${
                        isSelected
                          ? "border-brand ring-1 ring-brand"
                          : low
                          ? "border-amber-200 bg-amber-50/40"
                          : "border-border hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Label className="text-xs text-muted-foreground">{f.label}</Label>
                        <div className="flex items-center gap-2">
                          <ConfidencePill value={f.confidence} />
                          {!isEditing && (
                            <button
                              onClick={(e) => { e.stopPropagation(); editor.startEdit(f); }}
                              className="text-slate-400 hover:text-brand"
                            >
                              <Pencil className="size-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                      {isEditing ? (
                        <div className="mt-2 flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                          <Input value={editor.draft} onChange={(e) => editor.setDraft(e.target.value)} autoFocus className="h-8" />
                          <Button size="icon" className="size-8 bg-brand text-white hover:bg-brand-dark" onClick={() => editor.commitEdit(f)}>
                            <Check className="size-4" />
                          </Button>
                          <Button size="icon" variant="ghost" className="size-8" onClick={() => editor.setEditingId(null)}>
                            <X className="size-4" />
                          </Button>
                        </div>
                      ) : (
                        <p className="mt-1 text-sm text-slate-800">{f.value}</p>
                      )}
                    </div>
                  );
                })}
                {fields.length === 0 && (
                  <p className="py-10 text-center text-sm text-muted-foreground">Chưa có dữ liệu bóc tách.</p>
                )}
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-emerald-500" /> Độ tin cậy cao (≥ 85%)</span>
                <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-amber-500" /> Trung bình (70–84%)</span>
                <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-brand" /> Thấp (&lt; 70%)</span>
              </div>
            </TabsContent>

            {/* Line items */}
            <TabsContent value="items" className="flex-1 overflow-y-auto p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-10">#</TableHead>
                    <TableHead>Tên hàng</TableHead>
                    <TableHead>Mã hàng</TableHead>
                    <TableHead className="text-center">SL</TableHead>
                    <TableHead className="text-right">Đơn giá</TableHead>
                    <TableHead className="text-right">Thành tiền</TableHead>
                    <TableHead className="text-center">Tin cậy</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {doc.lineItems.map((li) => (
                    <TableRow
                      key={li.id}
                      className="cursor-pointer"
                      onClick={() => { setSelectedId(null); setPage(li.region.page); }}
                    >
                      <TableCell>{li.no}</TableCell>
                      <TableCell>{li.name}</TableCell>
                      <TableCell>{li.code}</TableCell>
                      <TableCell className="text-center">{li.qty}</TableCell>
                      <TableCell className="text-right">{li.unitPrice}</TableCell>
                      <TableCell className="text-right">{li.total}</TableCell>
                      <TableCell className="text-center"><ConfidencePill value={li.confidence} /></TableCell>
                    </TableRow>
                  ))}
                  {doc.lineItems.length === 0 && (
                    <TableRow><TableCell colSpan={7} className="py-8 text-center text-muted-foreground">Không có dòng hàng hoá.</TableCell></TableRow>
                  )}
                </TableBody>
              </Table>
            </TabsContent>

            {/* Edit log */}
            <TabsContent value="log" className="flex-1 overflow-y-auto p-4">
              <div className="space-y-3">
                {log.map((e) => (
                  <div key={e.id} className="rounded-lg border border-border p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-800">{e.field}</span>
                      <span className="text-xs text-muted-foreground">{e.time}</span>
                    </div>
                    <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1 text-xs sm:grid-cols-2">
                      <LogRow label="Giá trị AI nhận dạng" value={e.aiValue} />
                      <LogRow label="Người chỉnh sửa" value={e.editor} />
                      <LogRow label="Trước chỉnh sửa" value={e.before} tone="text-slate-500" />
                      <LogRow label="Sau chỉnh sửa" value={e.after} tone="text-emerald-700" />
                      {e.reason && <LogRow label="Lý do" value={e.reason} tone="text-brand" full />}
                    </dl>
                  </div>
                ))}
                {log.length === 0 && (
                  <p className="py-10 text-center text-sm text-muted-foreground">Chưa có chỉnh sửa nào được ghi nhận.</p>
                )}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex items-center justify-between border-t border-border px-4 py-2">
            <Button variant="ghost" size="sm" className="gap-1.5 text-slate-600">
              <Download className="size-4" /> Tải tệp gốc
            </Button>
            <span className="text-xs text-muted-foreground">
              Người xử lý: {doc.assignedTo} · Cập nhật {doc.lastUpdated}
            </span>
          </div>
        </Card>
      </div>

      {/* Reason dialog for editing confirmed docs */}
      <Dialog open={editor.reasonOpen} onOpenChange={editor.setReasonOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Lý do chỉnh sửa</DialogTitle>
            <DialogDescription>
              Tài liệu đã được xác nhận. Vui lòng nhập lý do chỉnh sửa trường
              {editor.pendingEdit ? ` "${editor.pendingEdit.field.label}"` : ""} để ghi vào nhật ký.
            </DialogDescription>
          </DialogHeader>
          <Textarea
            value={editor.reason}
            onChange={(e) => editor.setReason(e.target.value)}
            placeholder="Ví dụ: OCR nhận dạng sai, cập nhật theo bản gốc…"
            rows={3}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => editor.setReasonOpen(false)}>Huỷ</Button>
            <Button className="bg-brand text-white hover:bg-brand-dark" disabled={!editor.reason.trim()} onClick={editor.confirmReason}>
              Lưu chỉnh sửa
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function LogRow({ label, value, tone = "text-slate-700", full }: { label: string; value: string; tone?: string; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={tone}>{value}</dd>
    </div>
  );
}
