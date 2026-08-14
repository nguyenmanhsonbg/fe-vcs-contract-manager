import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from "react";
import {
  ArrowLeft,
  CalendarDays,
  ChevronDown,
  Eye,
  FileText,
  Plus,
  RotateCcw,
  Upload,
} from "lucide-react";
import { contractForm } from "../../data/contractMock";
import { IconChevronRight, IconCircleCheck, IconCircleClose, IconCircleMinus } from "../icons";
import { ApiError, docApi, type ContractTemplateOption } from "../../services/api";
import { toast } from "sonner";
import type { ContractClauseFieldDto, ContractClauseTemplateDto } from "../../data/apiModels";

type FieldProps = { label: string; required?: boolean; suffix?: string; placeholder?: string };
type FormValues = Record<string, string>;
const FormContext = createContext<{ values: FormValues; setValue: (key: string, value: string) => void } | null>(null);
function useForm() { const form = useContext(FormContext); if (!form) throw new Error("Contract form context is missing"); return form; }

function Field({ label, required, suffix, placeholder = "Nhập thông tin" }: FieldProps) {
  const { values, setValue } = useForm();
  return (
    <label className="space-y-2 text-[14px] text-[#393740]">
      <span>{label} {required && <b className="font-normal text-[#ff4c51]">*</b>}</span>
      <span className="relative block">
        <input value={values[label] || ""} onChange={(e) => setValue(label, e.target.value)} placeholder={placeholder} className="h-[38px] w-full rounded-[6px] border border-[#dbdade] bg-white px-3 text-[12px] text-[#393740] outline-none placeholder:text-[#c0bec5] focus:border-[#3f81ea]" />
        {suffix && <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[#5d586c]">{suffix}</span>}
      </span>
    </label>
  );
}

function TextArea({ label, required, placeholder = "Nhập các điều kiện thanh toán" }: Omit<FieldProps, "suffix">) {
  const { values, setValue } = useForm();
  return (
    <label className="space-y-2 text-[14px] text-[#393740]">
      <span>{label} {required && <b className="font-normal text-[#ff4c51]">*</b>}</span>
      <textarea value={values[label] || ""} onChange={(e) => setValue(label, e.target.value)} placeholder={placeholder} className="min-h-[82px] w-full resize-y rounded-[6px] border border-[#dbdade] bg-white px-3 py-2 text-[12px] outline-none placeholder:text-[#c0bec5] focus:border-[#3f81ea]" />
    </label>
  );
}

function Grid({ children, columns = "md:grid-cols-2" }: { children: ReactNode; columns?: string }) {
  return <div className={`grid gap-x-2 gap-y-3 ${columns}`}>{children}</div>;
}

type CollapseStatus = "complete" | "incomplete" | "empty";

function StatusIcon({ status, className = "size-[22px]" }: { status: CollapseStatus; className?: string }) {
  if (status === "complete") return <IconCircleCheck className={className} />;
  if (status === "incomplete") return <IconCircleClose className={className} />;
  return <IconCircleMinus className={className} />;
}

function statusForTitle(_title: string): CollapseStatus { return "empty"; }

function Section({ title, children, defaultOpen = false, status = statusForTitle(title) }: { title: string; children: ReactNode; defaultOpen?: boolean; status?: CollapseStatus }) {
  return (
    <details open={defaultOpen} className="group rounded-[6px] border border-[#dbdade] bg-white p-4 shadow-[0_2px_6px_rgba(47,43,61,0.08)]">
      <summary className="flex cursor-pointer list-none items-center justify-between px-2 text-[16px] font-bold text-[rgba(47,43,61,0.9)] [&::-webkit-details-marker]:hidden">
        <span>{title}</span><span className="flex items-center gap-3"><StatusIcon status={status} className="size-[22px] group-open:hidden" /><IconChevronRight className="size-[22px] shrink-0 transition-transform group-open:rotate-90" /></span>
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}

function Subsection({ title, children, collapsible = false, status = "empty" }: { title: string; children: ReactNode; collapsible?: boolean; status?: CollapseStatus }) {
  if (!collapsible) return <div className="space-y-3"><h3 className="px-3 text-[16px] font-bold text-[rgba(47,43,61,0.9)]">{title}</h3>{children}</div>;
  return <details className="group space-y-3"><summary className="flex cursor-pointer list-none items-center justify-between px-3 text-[16px] font-bold text-[rgba(47,43,61,0.9)] [&::-webkit-details-marker]:hidden"><span>{title}</span><span className="flex items-center gap-3"><StatusIcon status={status} className="size-[22px] group-open:hidden" /><IconChevronRight className="size-[22px] shrink-0 transition-transform group-open:rotate-90" /></span></summary>{children}</details>;
}

const checks = ["Tài liệu mô tả chi tiết hàng hoá.", "Phiếu bảo hành/Cam kết bảo hành", "Điều khoản bản quyền", "Hóa đơn GTGT"];

function Checklist() {
  const [selected, setSelected] = useState(checks.map(() => true));
  return <div className="rounded-[6px] border border-[#dbdade] p-3"><p className="mb-2 text-[14px]">Chứng từ tài liệu khi giao hàng</p>{checks.map((item, i) => <label key={item} className="flex items-center gap-2 py-1 text-[14px]"><input type="checkbox" checked={selected[i]} onChange={() => setSelected((v) => v.map((x, j) => j === i ? !x : x))} className="size-4 accent-[#3f81ea]" />{item}</label>)}<button className="mt-2 inline-flex h-8 items-center gap-1 rounded-[4px] border border-[#3f81ea] px-3 text-[12px] text-[#3f81ea]"><Plus className="size-3.5" />Thêm</button></div>;
}

function Attachments() {
  const [files, setFiles] = useState<Array<{ id: string; fileName: string }>>([]); const input = useRef<HTMLInputElement>(null);
  async function upload(file?: File) { if (!file) return; try { const doc = await docApi.uploadDocument(file); setFiles((current) => [...current, { id: doc.id, fileName: doc.fileName }]); toast.success(`Đã tải lên ${doc.fileName}`); } catch (error) { toast.error(error instanceof ApiError ? error.message : "Không thể tải tài liệu"); } }
  return <Section title="Phụ lục & hồ sơ đính kèm"><div className="mb-3 flex justify-end gap-3"><button type="button" className="inline-flex h-8 items-center gap-1 rounded-[4px] border border-[#dbdade] px-3 text-[12px]" onClick={() => toast.info("Chưa có tài liệu mẫu để tạo phụ lục") }><FileText className="size-3.5" />Tạo phụ lục từ mẫu có sẵn</button><input ref={input} type="file" className="hidden" onChange={(e) => void upload(e.target.files?.[0])} /><button type="button" onClick={() => input.current?.click()} className="inline-flex h-8 items-center gap-1 rounded-[4px] border border-[#3f81ea] px-3 text-[12px] text-[#3f81ea]"><Upload className="size-3.5" />Tải lên phụ lục</button></div><div className="divide-y divide-[#dbdade] rounded-[4px] border border-[#dbdade]">{files.length === 0 ? <p className="px-4 py-4 text-[12px] text-slate-500">Chưa có tài liệu đính kèm.</p> : files.map((file) => <div key={file.id} className="flex items-center gap-3 px-4 py-2"><FileText className="size-4 text-[#ff4c51]" /><div className="flex-1"><p className="text-[14px]">{file.fileName}</p></div><a href={`/api/v1/documents/${file.id}/preview`} target="_blank" rel="noreferrer" title="Xem" className="text-[#3f81ea]"><Eye className="size-4" /></a></div>)}</div></Section>;
}

function ClauseAttachments() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-[14px]">
        <span>Danh sách phụ lục không thể tách rời trong hợp đồng này</span>
        <button type="button" className="inline-flex h-8 items-center gap-1 rounded-[4px] border border-[#3f81ea] px-3 text-[12px] text-[#3f81ea]"><Plus className="size-3.5" />Thêm</button>
      </div>
      <p className="rounded-[4px] border border-[#dbdade] px-2 py-3 text-[12px] text-slate-500">Chưa có phụ lục được gắn.</p>
    </div>
  );
}

type SelectOption = string | { label: string; value: string };
function SelectField({ label, value, required = false, options = [value], onChange }: { label: string; value: string; required?: boolean; options?: SelectOption[]; onChange?: (value: string) => void }) {
  const { values, setValue } = useForm();
  return (
    <label className="space-y-2 text-[14px] text-[#393740]">
      <span>{label} {required && <b className="font-normal text-[#ff4c51]">*</b>}</span>
      <span className="relative block">
        <select value={values[label] || value} onChange={(e) => { setValue(label, e.target.value); onChange?.(e.target.value); }} className="h-[38px] w-full appearance-none rounded-[6px] border border-[#dbdade] bg-white px-3 pr-9 text-[12px] text-[#393740] outline-none focus:border-[#3f81ea]">
          {options.map((option) => { const item = typeof option === "string" ? { label: option, value: option } : option; return <option key={item.value} value={item.value}>{item.label || "Chọn giá trị"}</option>; })}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#5d586c]" />
      </span>
    </label>
  );
}

function ClauseField({ clauseCode, field }: { clauseCode: string; field: ContractClauseFieldDto }) {
  const { values, setValue } = useForm();
  const key = `clause.${clauseCode}.${field.key}`;
  const current = values[key] || "";
  const common = "h-[38px] w-full rounded-[6px] border border-[#dbdade] bg-white px-3 text-[12px] text-[#393740] outline-none placeholder:text-[#c0bec5] focus:border-[#3f81ea]";
  const label = <span>{field.label} {field.required && <b className="font-normal text-[#ff4c51]">*</b>}</span>;
  if (field.type === "textarea") return <label className="space-y-2 text-[14px] text-[#393740]"><span>{label}</span><textarea value={current} onChange={(e) => setValue(key, e.target.value)} placeholder={field.placeholder || "Nhập thông tin"} className="min-h-[82px] w-full resize-y rounded-[6px] border border-[#dbdade] bg-white px-3 py-2 text-[12px] outline-none placeholder:text-[#c0bec5] focus:border-[#3f81ea]" /></label>;
  if (field.type === "radio") return <fieldset className="space-y-2 text-[14px] text-[#393740]"><legend>{label}</legend><div className="flex flex-wrap gap-4">{(field.options || []).map((option) => <label key={option.value}><input type="radio" name={key} value={option.value} checked={current === option.value} onChange={(e) => setValue(key, e.target.value)} className="mr-2 accent-[#3f81ea]" />{option.label}</label>)}</div></fieldset>;
  if (field.type === "select") return <label className="space-y-2 text-[14px] text-[#393740]"><span>{label}</span><span className="relative block"><select value={current} onChange={(e) => setValue(key, e.target.value)} className={`${common} appearance-none pr-9`}><option value="">Chọn giá trị</option>{(field.options || []).map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#5d586c]" /></span></label>;
  if (field.type === "checkboxList") return <fieldset className="space-y-2 text-[14px] text-[#393740]"><legend>{label}</legend>{(field.options || []).map((option) => { const selected = current.split(",").filter(Boolean).includes(option.value); return <label key={option.value} className="mr-4 inline-flex items-center gap-2"><input type="checkbox" checked={selected} onChange={(e) => { const next = new Set(current.split(",").filter(Boolean)); e.target.checked ? next.add(option.value) : next.delete(option.value); setValue(key, [...next].join(",")); }} className="size-4 accent-[#3f81ea]" />{option.label}</label>; })}</fieldset>;
  if (field.type === "documentLinks") return <label className="space-y-2 text-[14px] text-[#393740]"><span>{label}</span><textarea value={current} onChange={(e) => setValue(key, e.target.value)} placeholder={field.placeholder || "Nhập ID tài liệu, phân tách bằng dấu phẩy"} className="min-h-[70px] w-full resize-y rounded-[6px] border border-[#dbdade] bg-white px-3 py-2 text-[12px] outline-none placeholder:text-[#c0bec5] focus:border-[#3f81ea]" /></label>;
  return <label className="space-y-2 text-[14px] text-[#393740]"><span>{label}</span><span className="relative block"><input type={field.type === "date" ? "date" : field.type === "integer" || field.type === "decimal" ? "number" : "text"} step={field.type === "decimal" ? "0.01" : undefined} value={current} onChange={(e) => setValue(key, e.target.value)} placeholder={field.placeholder || "Nhập thông tin"} className={`${common} ${field.unit ? "pr-14" : ""}`} />{field.unit && <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[#5d586c]">{field.unit}</span>}</span></label>;
}

function DynamicClauses({ clauses }: { clauses: ContractClauseTemplateDto[] }) {
  const { values } = useForm();
  const status = (clause: ContractClauseTemplateDto): CollapseStatus => {
    const fields = clause.uiSchema.groups.flatMap((group) => group.fields);
    if (!fields.length) return "empty";
    const complete = fields.filter((field) => field.required).every((field) => Boolean(values[`clause.${clause.code}.${field.key}`]));
    return complete ? "complete" : clause.required ? "incomplete" : "empty";
  };
  return <>{clauses.map((clause) => <Section key={clause.id} title={clause.title} status={status(clause)}><div className="space-y-4">{clause.uiSchema.groups.map((group) => <div key={group.code} className="space-y-3"><h3 className="px-3 text-[16px] font-bold text-[rgba(47,43,61,0.9)]">{group.title}</h3><div className="grid gap-x-2 gap-y-3 md:grid-cols-2">{group.fields.map((field) => <ClauseField key={field.key} clauseCode={clause.code} field={field} />)}</div></div>)}</div></Section>)}</>;
}

function ContractOverview() {
  const [proposalOptions, setProposalOptions] = useState<string[]>([contractForm.proposal]);
  const [templateOptions, setTemplateOptions] = useState<Array<{ id: string; name: string }>>([]);
  const { values, setValue } = useForm();
  const contractType = (values["Loại hợp đồng"] || "Hợp đồng hàng hóa").toLowerCase().includes("phi") ? "NON_CONSULTING_SERVICE" : "GOODS";
  useEffect(() => { void docApi.getProposals({ page: 1, size: 100 }).then((result) => setProposalOptions(result.content.map((item) => `${item.code} - ${item.title}`))).catch(() => undefined); }, []);
  useEffect(() => { void docApi.getContractTemplateVersions(contractType).then((result) => { const options = result.map((item) => ({ id: item.id, name: item.name })); setTemplateOptions(options); if (options[0] && !values["__templateVersionId"]) { setValue("__templateVersionId", options[0].id); setValue("Mẫu hợp đồng", options[0].name); } }).catch(() => undefined); }, [contractType]);
  return (
    <section className="rounded-[6px] border border-[#dbdade] bg-white p-4">
      <h2 className="mb-4 px-1 text-[16px] font-bold text-[#393740]">Thông tin chung</h2>
      <Grid>
        <Field label="Số hợp đồng" required placeholder={contractForm.number} />
        <SelectField label="Mẫu hợp đồng" required value={values["Mẫu hợp đồng"] || contractForm.template} options={templateOptions.length ? templateOptions.map((item) => ({ label: item.name, value: item.name })) : [contractForm.template]} onChange={(name) => { const selected = templateOptions.find((item) => item.name === name); if (selected) setValue("__templateVersionId", selected.id); }} />
        <SelectField label="Gói thầu" required value={contractForm.biddingPackage} options={[contractForm.biddingPackage, "Chưa chọn gói thầu"]} />
        <SelectField label="Đề xuất mua sắm" required value={contractForm.proposal} options={proposalOptions} />
        <SelectField label="Nội dung Đề xuất" required value={contractForm.content} options={[contractForm.content, "Mua sắm hàng hóa", "Cung cấp dịch vụ"]} />
        <SelectField label="Kế hoạch" required value={contractForm.plan} options={[contractForm.plan, "Chưa chọn kế hoạch"]} />
        <label className="space-y-2 text-[14px] text-[#393740]">
          <span>Ngày ký <b className="font-normal text-[#ff4c51]">*</b></span>
          <span className="relative block">
            <input placeholder="DD.MM.YYYY" className="h-[38px] w-full rounded-[6px] border border-[#dbdade] bg-white px-3 pr-9 text-[12px] outline-none placeholder:text-[#c0bec5] focus:border-[#3f81ea]" />
            <CalendarDays className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#393740]" />
          </span>
        </label>
        <SelectField label="Loại hợp đồng" required value="Hợp đồng hàng hóa" options={["Hợp đồng hàng hóa", "Hợp đồng phi hàng hóa (dịch vụ)"]} />
      </Grid>
      <div className="mt-3"><TextArea label="Căn cứ pháp lý" placeholder={contractForm.legalBasis} /></div>
    </section>
  );
}

import { DocumentCanvas } from "../DocumentCanvas";
import { DocumentViewerToolbar, useDocumentPan, useWheelZoom } from "../DocumentViewerToolbar";
import { ContractPreviewModal } from "../modals/ContractPreviewModal";

function ContractPreview({ onOpenModal, previewData }: { onOpenModal: () => void; previewData: Record<string, unknown> }) {
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [zoom, setZoom] = useState(100);
  const [page, setPage] = useState(1);
  const [rotation, setRotation] = useState(0);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  useWheelZoom(previewContainerRef, setZoom);
  const pan = useDocumentPan(previewContainerRef);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPreviewPdf = async () => {
    setLoading(true);
    setError(null);
    try {
      const blob = await docApi.previewContract(previewData);
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (err: any) {
      setError(err.message || "Tạo xem trước thất bại");
    } finally {
      setLoading(false);
    }
  };
  const downloadPreviewPdf = async () => {
    try {
      const url = URL.createObjectURL(await docApi.previewContract({ ...previewData, cleanPlaceholderDecorations: true })); const link = document.createElement("a"); link.href = url; link.download = "Hop_dong_xem_truoc.pdf"; link.click(); URL.revokeObjectURL(url);
    } catch (error) { toast.error(error instanceof Error ? error.message : "Không thể tải PDF hợp đồng"); }
  };

  const previewKey = JSON.stringify(previewData);
  useEffect(() => {
    const timer = window.setTimeout(() => { void fetchPreviewPdf(); }, 900);
    return () => window.clearTimeout(timer);
  }, [previewKey]);

  useEffect(() => () => { if (pdfUrl) URL.revokeObjectURL(pdfUrl); }, [pdfUrl]);

  return (
    <section className="flex h-[580px] min-h-0 min-w-0 flex-col gap-3 overflow-hidden rounded-[6px] border border-[rgba(47,43,61,0.12)] bg-white px-4 py-3 shadow-[0_3px_12px_rgba(47,43,61,0.14)]">
      <div className="flex shrink-0 items-center px-1">
        <h2 className="text-[15px] font-semibold leading-[22px] text-[#393740]">Xem trước hợp đồng</h2>
      </div>

      <DocumentViewerToolbar zoom={zoom} setZoom={setZoom} page={page} totalPages={totalPages} setPage={setPage} onRotate={() => setRotation((value) => value + 90)} onDownload={pdfUrl ? () => void downloadPreviewPdf() : undefined} onFullscreen={onOpenModal} />

      <div ref={previewContainerRef} {...pan} className={`custom-scrollbar min-h-0 flex-1 overflow-auto rounded-[8px] border border-[rgba(47,43,61,0.12)] bg-slate-100/50 p-6 shadow-[inset_0_1px_3px_rgba(47,43,61,0.08)] ${pan.isDragging ? "cursor-grabbing" : "cursor-grab"}`}>
        {loading && (
          <div className="text-center text-xs text-slate-500 py-12 flex flex-col items-center gap-2">
            <RotateCcw className="size-6 animate-spin text-[#3f81ea]" />
            <span>Đang render bản xem trước PDF...</span>
          </div>
        )}

        {error && (
          <div className="text-center text-xs text-red-500 p-4 bg-red-50 rounded border border-red-200">
            <p className="font-semibold mb-1">Không thể tải xem trước</p>
            <p>{error}</p>
            <button
              onClick={fetchPreviewPdf}
              className="mt-2 px-3 py-1 bg-red-600 text-white rounded text-[11px]"
            >
              Thử lại
            </button>
          </div>
        )}

        {!loading && !error && pdfUrl && (
          <div className="flex min-h-full min-w-full justify-center" style={{ minWidth: `${Math.max(100, zoom)}%` }}>
            <DocumentCanvas zoom={zoom} page={page} rotation={rotation} region={null} pdfUrl={pdfUrl} onPageCount={setTotalPages} />
          </div>
        )}
      </div>
    </section>
  );
}


export function ContractCreatePage({ onBack }: { onBack: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [values, setValues] = useState<FormValues>({});
  const [contractId, setContractId] = useState<string>();
  const [version, setVersion] = useState(0);
  const [saving, setSaving] = useState(false);
  const [clauses, setClauses] = useState<ContractClauseTemplateDto[]>([]);
  const previousTemplateId = useRef<string | undefined>(undefined);
  const setValue = (key: string, value: string) => setValues((current) => ({ ...current, [key]: value }));
  const value = (key: string) => values[key] || "";
  const clauseValue = (code: string, key: string) => values[`clause.${code}.${key}`] || "";
  const templateVersionId = values["__templateVersionId"];
  useEffect(() => { if (!templateVersionId) return; if (previousTemplateId.current && previousTemplateId.current !== templateVersionId) toast.warning("Đã đổi mẫu hợp đồng; dữ liệu điều khoản cũ sẽ được thay thế, thông tin chung và các bên được giữ lại."); previousTemplateId.current = templateVersionId; void docApi.getContractTemplateClauses(templateVersionId).then(setClauses).catch(() => setClauses([])); }, [templateVersionId]);
  const isoDate = (raw: string) => { if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw; const parts = raw.split(/[./-]/).map(Number); return parts.length === 3 && parts[2] > 31 ? `${parts[2]}-${String(parts[1]).padStart(2, "0")}-${String(parts[0]).padStart(2, "0")}` : undefined; };
  const amount = (key: string) => Number(value(key).replace(/[^0-9,.-]/g, "").replace(/\./g, "").replace(",", ".")) || 0;
  const contractType = value("Loại hợp đồng").toLowerCase().includes("phi") ? "NON_CONSULTING_SERVICE" : "GOODS";
  const clauseValues = Object.fromEntries(clauses.map((clause) => [clause.code, Object.fromEntries(clause.uiSchema.groups.flatMap((group) => group.fields).map((field) => {
    const raw = clauseValue(clause.code, field.key);
    if (raw === "") return [field.key, ""] as const;
    if (field.type === "integer") return [field.key, Number(raw)] as const;
    if (field.type === "decimal") return [field.key, Number(raw)] as const;
    if (field.type === "checkboxList" || field.type === "documentLinks") return [field.key, raw.split(",").filter(Boolean)] as const;
    return [field.key, raw] as const;
  }).filter(([, fieldValue]) => fieldValue !== ""))]));
  const previewData = {
    templateId: values["__templateVersionId"], templateKey: value("Mẫu hợp đồng"), contractNumber: value("Số hợp đồng"), packageName: value("Gói thầu"), packageCode: value("Mã gói"), contractForm: value("Mẫu hợp đồng"), clauseValues,
    signingDay: value("Ngày ký").split(/[./-]/)[0], signingMonth: value("Ngày ký").split(/[./-]/)[1], signingYear: value("Ngày ký").split(/[./-]/)[2],
    partyAName: value("Tên chủ đầu tư"), partyAAddress: value("Địa chỉ bên mua"), partyATaxCode: value("Mã số thuế bên mua"), partyARepresentative: value("Đại diện bên mua"), partyBName: value("Tên nhà thầu"), partyBAddress: value("Địa chỉ bên bán"), partyBTaxCode: value("Mã số thuế bên bán"), partyBPhone: value("Điện thoại bên bán"), partyBRepresentative: value("Đại diện bên bán"), partyBTitle: value("Chức vụ bên bán"), totalAmount: amount("Giá hợp đồng (đã bao gồm thuế)"), totalAmountText: value("Giá hợp đồng (bằng chữ)"), currency: "VND",
  };
  const payload = () => ({ templateVersionId: values["__templateVersionId"], clauseValues, contractType, sourceType: "MANUAL_ENTRY", departmentId: "10000000-0000-0000-0000-000000000001", ownerUserId: "20000000-0000-0000-0000-000000000001", contractNumber: value("Số hợp đồng"), contractForm: value("Mẫu hợp đồng") || "TRON_GOI", packageCode: value("Mã gói"), packageName: value("Gói thầu"), signingDate: isoDate(value("Ngày ký")), executionPeriodDays: Number(clauseValue("DELIVERY", "executionPeriodDays") || value("Thời gian thực hiện hợp đồng")) || undefined, amountInWords: clauseValue("PAYMENT", "totalAmountText") || value("Giá hợp đồng (bằng chữ)"), paymentTermsSummary: clauseValue("PAYMENT", "paymentTermsSummary") || value("Điều kiện thanh toán"), legalBasisSummary: value("Căn cứ pháp lý"), scopeSummary: clauseValue("SCOPE", "scopeSummary") || value("Cam kết của bên bán"), deliveryDays: Number(clauseValue("DELIVERY", "deliveryDays") || value("Thời gian giao hàng")) || undefined, deliveryCondition: clauseValue("DELIVERY", "deliveryCondition") || value("Điều kiện giao hàng thành công"), deliveryLocation: clauseValue("DELIVERY", "deliveryLocation") || value("Địa điểm giao hàng"), acceptanceSummary: clauseValue("ACCEPTANCE", "acceptanceSummary") || value("Thời hạn xử lý khi hàng hóa không đạt yêu cầu"), warrantyMonths: Number(clauseValue("WARRANTY", "warrantyMonths") || value("Thời gian bảo hành")) || undefined, warrantySummary: clauseValue("WARRANTY", "warrantySummary") || value("Điều khoản bảo hành & hỗ trợ kỹ thuật"), advancePercent: Number(clauseValue("PAYMENT", "advancePercent") || value("Tạm ứng")) || undefined, advancePaymentDays: Number(clauseValue("PAYMENT", "advancePaymentDays") || value("Số ngày thanh toán tạm ứng")) || undefined, remainingPaymentPercent: Number(clauseValue("PAYMENT", "remainingPaymentPercent") || value("Thanh toán còn lại")) || undefined, remainingPaymentDays: Number(clauseValue("PAYMENT", "remainingPaymentDays") || value("Số ngày thanh toán sau nghiệm thu")) || undefined, penaltyRate: Number(clauseValue("PENALTY", "penaltyRate") || value("Mức phạt (% phạt/ngày)")) || undefined, penaltyCap: Number(clauseValue("PENALTY", "penaltyCap") || value("Mức trần phạt")) || undefined, terminationNoticeDays: Number(clauseValue("TERMINATION", "terminationNoticeDays") || value("Thời hạn thông báo chấm dứt hợp đồng")) || undefined, generalTermsSummary: clauseValue("GENERAL", "generalTermsSummary") || value("Nội dung điều khoản chung"), items: [{ itemCategory: contractType === "GOODS" ? "GOODS" : "SERVICE", itemName: clauseValue("SCOPE", "goodsName") || value("Tên hàng hóa") || value("Đối tượng dịch vụ"), description: clauseValue("SCOPE", "scopeSummary") || value("Cam kết của bên bán") || value("Phạm vi công việc"), unit: "Gói", quantity: 1, unitPrice: amount("Giá hợp đồng (đã bao gồm thuế)"), taxRate: 0 }], parties: [{ partyRole: "BUYER", name: value("Tên chủ đầu tư"), address: value("Địa chỉ bên mua"), taxCode: value("Mã số thuế bên mua"), representativeName: value("Đại diện bên mua"), representativeTitle: value("Chức vụ bên mua") }, { partyRole: "VENDOR", name: value("Tên nhà thầu"), address: value("Địa chỉ bên bán"), phone: value("Điện thoại bên bán"), taxCode: value("Mã số thuế bên bán"), representativeName: value("Đại diện bên bán"), representativeTitle: value("Chức vụ bên bán") }] });
  function applyImported(contract: Awaited<ReturnType<typeof docApi.getContract>>) { const next: FormValues = {}; const put = (key: string, val: unknown) => { if (val !== undefined && val !== null && val !== "") next[key] = String(val); }; put("Số hợp đồng", contract.contractNumber); put("Mẫu hợp đồng", contract.contractForm); put("Gói thầu", contract.packageName); put("Tên hàng hóa", contract.items?.[0]?.itemName); const buyer = contract.parties?.find((p) => p.partyRole === "BUYER"); const vendor = contract.parties?.find((p) => p.partyRole === "VENDOR"); put("Tên chủ đầu tư", buyer?.name); put("Địa chỉ bên mua", buyer?.address); put("Mã số thuế bên mua", buyer?.taxCode); put("Đại diện bên mua", buyer?.representativeName); put("Tên nhà thầu", vendor?.name); put("Địa chỉ bên bán", vendor?.address); put("Mã số thuế bên bán", vendor?.taxCode); put("Điện thoại bên bán", vendor?.phone); put("Đại diện bên bán", vendor?.representativeName); put("Chức vụ bên bán", vendor?.representativeTitle); setValues((current) => ({ ...current, ...next })); setContractId(contract.id); setVersion(contract.version); }
  async function importFromSource() { const source = window.prompt("Nguồn dữ liệu: proposal, extraction hoặc bidding", "proposal")?.trim().toLowerCase(); if (!source) return; try { let imported; if (source === "proposal") { const id = window.prompt("Nhập Proposal ID"); if (!id) return; imported = await docApi.contractFromProposal(id); } else if (source === "extraction") { const id = window.prompt("Nhập Extraction Result ID"); if (!id) return; imported = await docApi.contractFromExtraction(id); } else if (source === "bidding") { toast.info("Nguồn bidding cần payload nhà thầu và hạng mục; dùng API adapter để nạp dữ liệu."); return; } else { toast.error("Nguồn không hợp lệ"); return; } applyImported(imported); toast.success("Đã nạp dữ liệu từ nguồn"); } catch (error) { toast.error(error instanceof ApiError ? error.message : "Không thể nạp dữ liệu từ nguồn"); } }
  async function save(submit = false) { if (!value("Tên nhà thầu") || !value("Tên hàng hóa") && !value("Đối tượng dịch vụ")) { toast.error("Vui lòng nhập nhà thầu và hạng mục hợp đồng"); return; } setSaving(true); try { const result = contractId ? await docApi.updateContract(contractId, { ...payload(), version }) : await docApi.createContract(payload()); setContractId(result.id); setVersion(result.version); toast.success("Đã lưu hợp đồng nháp"); if (submit) { const submitted = await docApi.contractAction(result.id, "submit"); setVersion(submitted.version); toast.success("Đã trình phê duyệt hợp đồng"); } } catch (error) { toast.error(error instanceof ApiError ? error.message : "Không thể lưu hợp đồng"); } finally { setSaving(false); } }

  return (
    <div className="min-h-full space-y-4 bg-[#f8f7fa] p-6 text-[#393740]">
      <FormContext.Provider value={{ values, setValue }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="rounded p-1 hover:bg-slate-200" title="Quay lại">
            <ArrowLeft className="size-5" />
          </button>
          <h1 className="text-[24px] font-bold">Tạo hợp đồng</h1>
        </div>
        <button onClick={() => void importFromSource()} className="inline-flex h-9 items-center gap-2 rounded-[4px] border border-[#ff4c51] px-3 text-[12px] text-[#ff4c51]">
          <Upload className="size-4" />
          Nhập Thông Tin
        </button>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <ContractOverview />
        <ContractPreview onOpenModal={() => setIsModalOpen(true)} previewData={previewData} />
      </div>

      <ContractPreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        contractData={previewData}
      />

      <Section title="Thông tin các bên"><Subsection title="1. Bên mua"><Grid><Field label="Tên chủ đầu tư" required placeholder="CÔNG TY TNHH MTV AN NINH MẠNG VIETTEL" /><Field label="Địa chỉ" required placeholder="Tầng 41-43, tòa nhà Keangnam Landmark 72, đường Phạm Hùng, Phường Từ Liêm, Thành phố Hà Nội, Việt Nam" /><Field label="Điện thoại" required placeholder="024.66628811" /><Field label="Mã số thuế" required placeholder="0110939642" /><Field label="Đại diện bên mua" required placeholder="Nhập Họ và tên người đại diện" /><Field label="Chức vụ" required placeholder="Nhập chức vụ của người đại diện" /><Field label="Số giấy ủy quyền" placeholder="Nhập số giấy ủy quyền" /><Field label="Ngày ủy quyền" placeholder="DD.MM.YYYY" /></Grid></Subsection><Subsection title="2. Bên bán"><Grid><Field label="Tên nhà thầu" required placeholder="Nhập tên nhà thầu" /><Field label="Địa chỉ" required placeholder="Nhập địa chỉ của nhà thầu" /><Field label="Điện thoại" required /><Field label="Mã số thuế" required /><Field label="Đại diện bên bán" required /><Field label="Chức vụ" required /><Field label="Số giấy ủy quyền" /><Field label="Ngày ủy quyền" placeholder="DD.MM.YYYY" /></Grid></Subsection></Section>
      {clauses.length ? <DynamicClauses clauses={clauses} /> : <p className="rounded-[6px] border border-dashed border-[#dbdade] bg-white p-6 text-center text-[12px] text-slate-500">Đang tải cấu hình điều khoản...</p>}
      <Attachments />
      <Section title="Ký duyệt & phát hành"><p className="mb-3 px-2 text-[14px]">Liệt kê danh sách ký duyệt</p><div className="space-y-3">{["A", "B"].map((party) => <div key={party} className="rounded-[4px] border border-[#dbdade] p-4"><h3 className="mb-3 text-[16px] font-bold">Đại diện bên {party}</h3><Grid><Field label="Người ký duyệt" placeholder="Nguyễn Văn A" /><Field label="Chức vụ của người ký duyệt" placeholder="Giám đốc" /></Grid></div>)}</div></Section>
      <div className="flex justify-end gap-3 pb-4"><button disabled={saving} onClick={() => void save(false)} className="h-9 rounded-[4px] border border-slate-300 bg-white px-4 text-[12px] disabled:opacity-50">{saving ? "Đang lưu..." : "Lưu nháp"}</button><button disabled={saving} onClick={() => void save(true)} className="h-9 rounded-[4px] bg-[#ff4c51] px-4 text-[12px] text-white disabled:opacity-50">Trình duyệt</button></div>
      </FormContext.Provider>
    </div>
  );
}
