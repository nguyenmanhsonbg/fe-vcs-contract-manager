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
import { contractClauses, contractForm } from "../../data/contractMock";
import { IconChevronRight, IconCircleCheck, IconCircleClose, IconCircleMinus } from "../icons";
import { ApiError, docApi } from "../../services/api";
import { toast } from "sonner";

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

function statusForTitle(title: string): CollapseStatus {
  const status = contractClauses.find((clause) => clause.title === title)?.status;
  return status === "done" ? "complete" : status === "disabled" ? "empty" : "incomplete";
}

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

function SelectField({ label, value, required = false, options = [value] }: { label: string; value: string; required?: boolean; options?: string[] }) {
  const { values, setValue } = useForm();
  return (
    <label className="space-y-2 text-[14px] text-[#393740]">
      <span>{label} {required && <b className="font-normal text-[#ff4c51]">*</b>}</span>
      <span className="relative block">
        <select value={values[label] || value} onChange={(e) => setValue(label, e.target.value)} className="h-[38px] w-full appearance-none rounded-[6px] border border-[#dbdade] bg-white px-3 pr-9 text-[12px] text-[#393740] outline-none focus:border-[#3f81ea]">
          {options.map((option) => <option key={option} value={option}>{option || "Chọn giá trị"}</option>)}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#5d586c]" />
      </span>
    </label>
  );
}

function ContractOverview() {
  const [proposalOptions, setProposalOptions] = useState<string[]>([contractForm.proposal]);
  useEffect(() => { void docApi.getProposals({ page: 1, size: 100 }).then((result) => setProposalOptions(result.content.map((item) => `${item.code} - ${item.title}`))).catch(() => undefined); }, []);
  return (
    <section className="rounded-[6px] border border-[#dbdade] bg-white p-4">
      <h2 className="mb-4 px-1 text-[16px] font-bold text-[#393740]">Thông tin chung</h2>
      <Grid>
        <Field label="Số hợp đồng" required placeholder={contractForm.number} />
        <SelectField label="Mẫu hợp đồng" required value={contractForm.template} options={[contractForm.template, "Hợp đồng hàng hóa", "Hợp đồng phi hàng hóa (dịch vụ)"]} />
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
      const response = await fetch("/api/v1/contracts/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...previewData,
        }),
      });

      if (!response.ok) throw new Error("Chưa thể kết nối tới dịch vụ tạo xem trước PDF.");
      const blob = await response.blob();
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
      const response = await fetch("/api/v1/contracts/preview", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...previewData, cleanPlaceholderDecorations: true }) });
      if (!response.ok) throw new Error("Không thể tải PDF hợp đồng");
      const url = URL.createObjectURL(await response.blob()); const link = document.createElement("a"); link.href = url; link.download = "Hop_dong_xem_truoc.pdf"; link.click(); URL.revokeObjectURL(url);
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
  const setValue = (key: string, value: string) => setValues((current) => ({ ...current, [key]: value }));
  const value = (key: string) => values[key] || "";
  const isoDate = (raw: string) => { if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw; const parts = raw.split(/[./-]/).map(Number); return parts.length === 3 && parts[2] > 31 ? `${parts[2]}-${String(parts[1]).padStart(2, "0")}-${String(parts[0]).padStart(2, "0")}` : undefined; };
  const amount = (key: string) => Number(value(key).replace(/[^0-9,.-]/g, "").replace(/\./g, "").replace(",", ".")) || 0;
  const contractType = value("Loại hợp đồng").toLowerCase().includes("phi") ? "NON_CONSULTING_SERVICE" : "GOODS";
  const previewData = {
    contractNumber: value("Số hợp đồng"), packageName: value("Gói thầu"), packageCode: value("Mã gói"), contractForm: value("Mẫu hợp đồng"),
    signingDay: value("Ngày ký").split(/[./-]/)[0], signingMonth: value("Ngày ký").split(/[./-]/)[1], signingYear: value("Ngày ký").split(/[./-]/)[2],
    partyAName: value("Tên chủ đầu tư"), partyAAddress: value("Địa chỉ bên mua"), partyATaxCode: value("Mã số thuế bên mua"), partyARepresentative: value("Đại diện bên mua"), partyBName: value("Tên nhà thầu"), partyBAddress: value("Địa chỉ bên bán"), partyBTaxCode: value("Mã số thuế bên bán"), partyBPhone: value("Điện thoại bên bán"), partyBRepresentative: value("Đại diện bên bán"), partyBTitle: value("Chức vụ bên bán"), totalAmount: amount("Giá hợp đồng (đã bao gồm thuế)"), totalAmountText: value("Giá hợp đồng (bằng chữ)"), currency: "VND",
  };
  const payload = () => ({ contractType, sourceType: "MANUAL_ENTRY", departmentId: "10000000-0000-0000-0000-000000000001", ownerUserId: "20000000-0000-0000-0000-000000000001", contractNumber: value("Số hợp đồng"), contractForm: value("Mẫu hợp đồng") || "TRON_GOI", packageCode: value("Mã gói"), packageName: value("Gói thầu"), signingDate: isoDate(value("Ngày ký")), executionPeriodDays: Number(value("Thời gian thực hiện hợp đồng")) || undefined, amountInWords: value("Giá hợp đồng (bằng chữ)"), paymentTermsSummary: value("Điều kiện thanh toán"), legalBasisSummary: value("Căn cứ pháp lý"), scopeSummary: value("Cam kết của bên bán"), deliveryDays: Number(value("Thời gian giao hàng")) || undefined, deliveryCondition: value("Điều kiện giao hàng thành công"), deliveryLocation: value("Địa điểm giao hàng"), acceptanceSummary: value("Thời hạn xử lý khi hàng hóa không đạt yêu cầu"), warrantyMonths: Number(value("Thời gian bảo hành")) || undefined, warrantySummary: value("Điều khoản bảo hành & hỗ trợ kỹ thuật"), advancePercent: Number(value("Tạm ứng")) || undefined, advancePaymentDays: Number(value("Số ngày thanh toán tạm ứng")) || undefined, remainingPaymentPercent: Number(value("Thanh toán còn lại")) || undefined, remainingPaymentDays: Number(value("Số ngày thanh toán sau nghiệm thu")) || undefined, penaltyRate: Number(value("Mức phạt (% phạt/ngày)")) || undefined, penaltyCap: Number(value("Mức trần phạt")) || undefined, terminationNoticeDays: Number(value("Thời hạn thông báo chấm dứt hợp đồng")) || undefined, generalTermsSummary: value("Nội dung điều khoản chung"), items: [{ itemCategory: contractType === "GOODS" ? "GOODS" : "SERVICE", itemName: value("Tên hàng hóa") || value("Đối tượng dịch vụ"), description: value("Cam kết của bên bán") || value("Phạm vi công việc"), unit: "Gói", quantity: 1, unitPrice: amount("Giá hợp đồng (đã bao gồm thuế)"), taxRate: 0 }], parties: [{ partyRole: "BUYER", name: value("Tên chủ đầu tư"), address: value("Địa chỉ bên mua"), taxCode: value("Mã số thuế bên mua"), representativeName: value("Đại diện bên mua"), representativeTitle: value("Chức vụ bên mua") }, { partyRole: "VENDOR", name: value("Tên nhà thầu"), address: value("Địa chỉ bên bán"), phone: value("Điện thoại bên bán"), taxCode: value("Mã số thuế bên bán"), representativeName: value("Đại diện bên bán"), representativeTitle: value("Chức vụ bên bán") }] });
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
      <Section title="Điều 1: Phạm vi cung cấp"><div className="grid gap-4 md:grid-cols-2"><div className="space-y-3"><Field label="Tên hàng hóa" required placeholder="Nhập tên hàng hóa" /><TextArea label="Cam kết của bên bán" required placeholder="Nhập các cam kết của bên bán" /></div><ClauseAttachments /></div></Section>
      <Section title="Điều 2: Giao hàng"><div className="grid gap-4 md:grid-cols-2"><div className="space-y-3"><Field label="Thời gian thực hiện hợp đồng" required placeholder="Nhập thời gian thực hiện hợp đồng" /><Field label="Thời gian giao hàng" required placeholder="Nhập thời gian giao hàng" /><Field label="Điều kiện giao hàng thành công" required placeholder="Nhập điều kiện giao hàng thành công" /><Field label="Địa điểm giao hàng" required placeholder="Theo yêu cầu của Bên Mua" /></div><Checklist /></div></Section>
      <Section title="Điều 3: Loại hợp đồng, giá hợp đồng và điều khoản thanh toán"><Subsection collapsible status="complete" title="1. Loại hợp đồng & Giá hợp đồng"><Grid><div><p className="mb-2 text-[14px]">Loại hợp đồng <b className="font-normal text-[#ff4c51]">*</b></p><label className="mr-5 text-[14px]"><input type="radio" name="contractType" defaultChecked className="mr-2 accent-[#3f81ea]" />Trọn gói</label><label className="text-[14px]"><input type="radio" name="contractType" className="mr-2 accent-[#3f81ea]" />Đơn giá cố định</label></div><Field label="Giá hợp đồng (đã bao gồm thuế)" required suffix="VND" placeholder="1.430.000.000" /></Grid><div className="mt-3"><Field label="Giá hợp đồng (bằng chữ)" required placeholder="Một tỷ bốn trăm ba mươi triệu đồng" /></div></Subsection><Subsection collapsible status="incomplete" title="2. Điều khoản thanh toán"><Grid><Field label="Tạm ứng" required suffix="%" /><Field label="Số ngày thanh toán tạm ứng" required suffix="Ngày" /><Field label="Thanh toán còn lại" required suffix="%" /><Field label="Số ngày thanh toán sau nghiệm thu" required suffix="Ngày" /></Grid><div className="mt-3"><TextArea label="Điều kiện thanh toán" required /></div></Subsection><Subsection collapsible status="empty" title="3. Thông tin thanh toán"><Grid><Field label="Người thụ hưởng" required /><Field label="Địa chỉ ngân hàng" required /><Field label="Địa chỉ" required /><Field label="Số tài khoản" required /><Field label="Ngân hàng" required /></Grid></Subsection></Section>
      <Section title="Điều 4: Trách nhiệm và nghĩa vụ của các bên"><Field label="Trần phạt khi bên bán không hoàn thành trách nhiệm và nghĩa vụ" required suffix="%" placeholder="Nhập % trần phạt / giá hợp đồng" /></Section>
      <Section title="Điều 5: Bàn giao, kiểm tra, nghiệm thu"><Grid><Field label="Thời hạn xử lý khi hàng hóa không đạt yêu cầu" required suffix="Ngày" /><Field label="Số ngày phát hành chứng nhận hoàn thành" required suffix="Ngày" /><Field label="Số ngày ký biên bản thanh lý" required suffix="Ngày" /><Field label="Số ngày thực hiện các khoản phạt và bồi thường thiệt hại (nếu có)" suffix="Ngày" /></Grid></Section>
      <Section title="Điều 6: Bảo hành và hỗ trợ kỹ thuật"><Field label="Thời gian bảo hành" required suffix="Tháng" /><div className="mt-3"><TextArea label="Điều khoản bảo hành & hỗ trợ kỹ thuật" required /></div></Section>
      <Section title="Điều 7: Bảo lãnh"><Subsection title="1. Bảo đảm thực hiện hợp đồng"><Grid><Field label="Bảo lãnh hợp đồng (BLHĐ)" required suffix="%" /><Field label="Thời gian có hiệu lực sau chứng nhận hoàn thành nghiệm thu" required suffix="Ngày" /></Grid></Subsection><Subsection title="2. Bảo lãnh tạm ứng"><Grid columns="md:grid-cols-3"><Field label="Thời hạn nộp (kể từ ngày ký hợp đồng)" required suffix="Ngày" /><Field label="Giá trị Bảo lãnh tạm ứng" required suffix="%" /><Field label="Thời hạn hiệu lực" required suffix="Ngày" /></Grid></Subsection><Subsection title="3. Bảo lãnh bảo hành"><Grid><Field label="Giá trị (so với giá hợp đồng)" required suffix="%" /><Field label="Thời hạn hiệu lực" required suffix="Ngày" /></Grid></Subsection></Section>
      <Section title="Điều 8: Bất khả kháng"><Field label="Thời hạn thông báo về sự kiện bất khả kháng" required suffix="Ngày" /></Section>
      <Section title="Điều 9: Điều khoản phạt và bồi thường thiệt hại"><Subsection collapsible status="incomplete" title="1. Phạt hợp đồng"><Grid><Field label="Mức phạt (% phạt/ngày)" required suffix="%" /><Field label="Mức trần phạt" required suffix="%" /></Grid><div className="mt-3"><Field label="Thời gian giao hàng chậm tối đa" required suffix="Ngày" /></div></Subsection><Subsection collapsible status="empty" title="2. Bồi thường thiệt hại"><Field label="Thời hạn nộp tiền phạt / bồi thường thiệt hại" required suffix="Ngày" /></Subsection></Section>
      <Section title="Điều 10: Chấm dứt hợp đồng"><Grid><Field label="Thời hạn thông báo chấm dứt hợp đồng" required suffix="Ngày" /><Field label="Thời hạn cho phép chậm thanh toán" required suffix="Ngày" /><Field label="Thời gian kéo dài sự kiện bất khả kháng" required suffix="Ngày" /></Grid></Section>
      <Section title="Điều 11: Bảo mật thông tin"><TextArea label="Các điều khoản chi tiết về bảo mật thông tin" required placeholder="Các điều khoản chi tiết về bảo mật thông tin" /><div className="mt-3"><Field label="Thời hạn cam kết không lôi kéo/tuyển dụng nhân sự sau bảo hành" required suffix="Tháng" placeholder="Nhập số tháng" /></div></Section>
      <Section title="Điều 12: Quyền sở hữu trí tuệ"><Field label="Thời hạn phản hồi thông báo giải quyết khiếu nại/kiện tụng" required suffix="Tháng" placeholder="Nhập số tháng" /></Section>
      <Section title="Điều 13: Luật áp dụng và giải quyết tranh chấp"><Field label="Thời hạn thương lượng" required suffix="Ngày" /></Section>
      <Section title="Điều 14: Điều khoản chung"><TextArea label="Nội dung điều khoản chung" required placeholder="Nhập nội dung điều khoản chung" /></Section>
      <Attachments />
      <Section title="Ký duyệt & phát hành"><p className="mb-3 px-2 text-[14px]">Liệt kê danh sách ký duyệt</p><div className="space-y-3">{["A", "B"].map((party) => <div key={party} className="rounded-[4px] border border-[#dbdade] p-4"><h3 className="mb-3 text-[16px] font-bold">Đại diện bên {party}</h3><Grid><Field label="Người ký duyệt" placeholder="Nguyễn Văn A" /><Field label="Chức vụ của người ký duyệt" placeholder="Giám đốc" /></Grid></div>)}</div></Section>
      <div className="flex justify-end gap-3 pb-4"><button disabled={saving} onClick={() => void save(false)} className="h-9 rounded-[4px] border border-slate-300 bg-white px-4 text-[12px] disabled:opacity-50">{saving ? "Đang lưu..." : "Lưu nháp"}</button><button disabled={saving} onClick={() => void save(true)} className="h-9 rounded-[4px] bg-[#ff4c51] px-4 text-[12px] text-white disabled:opacity-50">Trình duyệt</button></div>
      </FormContext.Provider>
    </div>
  );
}
