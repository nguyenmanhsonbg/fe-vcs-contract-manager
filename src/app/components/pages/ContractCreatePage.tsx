import { useState, type ReactNode } from "react";
import {
  ArrowLeft,
  CalendarDays,
  ChevronDown,
  Download,
  Eye,
  FileSpreadsheet,
  FileText,
  Maximize2,
  Minus,
  Pencil,
  Plus,
  RotateCcw,
  Scan,
  Trash2,
  Upload,
} from "lucide-react";
import { contractClauses, contractForm, contractPreviewLines } from "../../data/contractMock";
import { IconChevronRight, IconCircleCheck, IconCircleClose, IconCircleMinus } from "../icons";

type FieldProps = { label: string; required?: boolean; suffix?: string; placeholder?: string };

function Field({ label, required, suffix, placeholder = "Nhập thông tin" }: FieldProps) {
  return (
    <label className="space-y-2 text-[14px] text-[#393740]">
      <span>{label} {required && <b className="font-normal text-[#ff4c51]">*</b>}</span>
      <span className="relative block">
        <input placeholder={placeholder} className="h-[38px] w-full rounded-[6px] border border-[#dbdade] bg-white px-3 text-[12px] text-[#393740] outline-none placeholder:text-[#c0bec5] focus:border-[#3f81ea]" />
        {suffix && <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[#5d586c]">{suffix}</span>}
      </span>
    </label>
  );
}

function TextArea({ label, required, placeholder = "Nhập các điều kiện thanh toán" }: Omit<FieldProps, "suffix">) {
  return (
    <label className="space-y-2 text-[14px] text-[#393740]">
      <span>{label} {required && <b className="font-normal text-[#ff4c51]">*</b>}</span>
      <textarea placeholder={placeholder} className="min-h-[82px] w-full resize-y rounded-[6px] border border-[#dbdade] bg-white px-3 py-2 text-[12px] outline-none placeholder:text-[#c0bec5] focus:border-[#3f81ea]" />
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
  const files = [["Phụ_lục_01.pdf", "PDF", FileText], ["Bảng giá chi tiết.xlsx", "XLSX", FileSpreadsheet]] as const;
  return <Section title="Phụ lục & hồ sơ đính kèm"><div className="mb-3 flex justify-end gap-3"><button className="inline-flex h-8 items-center gap-1 rounded-[4px] border border-[#dbdade] px-3 text-[12px]"><FileText className="size-3.5" />Tạo phụ lục từ mẫu có sẵn</button><button className="inline-flex h-8 items-center gap-1 rounded-[4px] border border-[#3f81ea] px-3 text-[12px] text-[#3f81ea]"><Upload className="size-3.5" />Tải lên phụ lục</button></div><div className="divide-y divide-[#dbdade] rounded-[4px] border border-[#dbdade]">{files.map(([name, type, Icon]) => <div key={name} className="flex items-center gap-3 px-4 py-2"><Icon className="size-4 text-[#ff4c51]" /><div className="flex-1"><p className="text-[14px]">{name}</p><p className="text-[12px] text-[#8f8d95]">{type} 2.5MB&nbsp;&nbsp;18/04/2025</p></div><Eye className="size-4 text-[#3f81ea]" /><Trash2 className="size-4 text-[#ff4c51]" /></div>)}</div></Section>;
}

const clauseOneAttachments = [
  "Phụ lục 01 - Danh mục hàng hóa & giá cả",
  "Phụ lục 02: Phụ lục về chỉ tiêu kỹ thuật",
  "Phụ lục 03: Thỏa thuận bảo mật thông tin",
  "Phụ lục 04: Dịch vụ hỗ trợ kỹ thuật",
  "Phụ lục 05: Đào tạo",
];

function ClauseAttachments() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-[14px]">
        <span>Danh sách phụ lục không thể tách rời trong hợp đồng này</span>
        <button type="button" className="inline-flex h-8 items-center gap-1 rounded-[4px] border border-[#3f81ea] px-3 text-[12px] text-[#3f81ea]"><Plus className="size-3.5" />Thêm</button>
      </div>
      <div className="space-y-1">
        {clauseOneAttachments.map((name) => (
          <div key={name} className="flex items-center gap-2 rounded-[4px] border border-[#dbdade] px-2 py-1.5 text-[12px]">
            <FileText className="size-4 shrink-0 text-[#ff4c51]" />
            <div className="min-w-0 flex-1"><p className="truncate">{name}</p><p className="text-[10px] text-[#8f8d95]">PDF&nbsp;&nbsp;2.5MB&nbsp;&nbsp;18/04/2025</p></div>
            <Pencil className="size-3.5 shrink-0" /><Download className="size-3.5 shrink-0" /><Eye className="size-3.5 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SelectField({ label, value, required = false }: { label: string; value: string; required?: boolean }) {
  return (
    <label className="space-y-2 text-[14px] text-[#393740]">
      <span>{label} {required && <b className="font-normal text-[#ff4c51]">*</b>}</span>
      <span className="relative block">
        <select defaultValue={value} className="h-[38px] w-full appearance-none rounded-[6px] border border-[#dbdade] bg-white px-3 pr-9 text-[12px] text-[#393740] outline-none focus:border-[#3f81ea]">
          <option>{value}</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#5d586c]" />
      </span>
    </label>
  );
}

function ContractOverview() {
  return (
    <section className="rounded-[6px] border border-[#dbdade] bg-white p-4">
      <h2 className="mb-4 px-1 text-[16px] font-bold text-[#393740]">Thông tin chung</h2>
      <Grid>
        <Field label="Số hợp đồng" required placeholder={contractForm.number} />
        <SelectField label="Mẫu hợp đồng" required value={contractForm.template} />
        <SelectField label="Gói thầu" required value={contractForm.biddingPackage} />
        <SelectField label="Đề xuất mua sắm" required value={contractForm.proposal} />
        <SelectField label="Nội dung Đề xuất" required value={contractForm.content} />
        <SelectField label="Kế hoạch" required value={contractForm.plan} />
        <label className="space-y-2 text-[14px] text-[#393740]">
          <span>Ngày ký <b className="font-normal text-[#ff4c51]">*</b></span>
          <span className="relative block">
            <input placeholder="DD.MM.YYYY" className="h-[38px] w-full rounded-[6px] border border-[#dbdade] bg-white px-3 pr-9 text-[12px] outline-none placeholder:text-[#c0bec5] focus:border-[#3f81ea]" />
            <CalendarDays className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#393740]" />
          </span>
        </label>
        <SelectField label="Loại hợp đồng" required value={contractForm.contractType} />
      </Grid>
      <div className="mt-3"><TextArea label="Căn cứ pháp lý" placeholder={contractForm.legalBasis} /></div>
    </section>
  );
}

function ContractPreview() {
  return (
    <section className="rounded-[6px] border border-[#dbdade] bg-white p-3 shadow-[0_2px_8px_rgba(47,43,61,0.12)]">
      <h2 className="mb-3 px-1 text-[16px] font-bold text-[#393740]">Xem trước hợp đồng</h2>
      <div className="mb-2 flex items-center justify-between text-[#393740]">
        <div className="flex items-center gap-1">
          <button type="button" title="Xoay" className="flex size-6 items-center justify-center rounded-[6px] bg-[#f1f0f2]"><RotateCcw className="size-4" /></button>
          <button type="button" title="Thu nhỏ" className="flex size-6 items-center justify-center rounded-[6px] bg-[#f1f0f2]"><Minus className="size-4" /></button>
          <span className="flex h-6 items-center rounded-[6px] bg-[#f1f0f2] px-3 text-[12px]">100% <ChevronDown className="ml-1 size-3" /></span>
          <button type="button" title="Phóng to" className="flex size-6 items-center justify-center rounded-[6px] bg-[#f1f0f2]"><Plus className="size-4" /></button>
        </div>
        <div className="flex items-center gap-1 text-[12px]"><span className="rounded border border-[#dbdade] px-2 py-1">1</span><span>/ 12</span><ChevronDown className="size-3" /></div>
        <div className="flex items-center gap-3"><button type="button" title="Quét"><Scan className="size-4" /></button><button type="button" title="Tải xuống"><Download className="size-4" /></button><button type="button" title="Mở rộng"><Maximize2 className="size-4" /></button></div>
      </div>
      <div className="h-[435px] overflow-y-auto rounded-[8px] border border-[#dbdade] bg-white p-3">
        <article className="min-h-[600px] border border-[#eee] bg-white px-5 py-8 text-[10px] leading-[1.45] text-[#393740] shadow-sm">
          {contractPreviewLines.map((line, index) => <p key={line} className={index < 2 ? "text-center font-bold" : "mb-1"}>{line}</p>)}
          <p className="mt-3">Hôm nay, ngày [NGÀY KÝ] tháng [THÁNG KÝ] năm [NĂM KÝ], chúng tôi thống nhất ký kết hợp đồng với các nội dung sau:</p>
          <p className="mt-2 font-bold">Đại diện bên A: [ĐẠI DIỆN BÊN MUA]</p>
          <p className="font-bold">Đại diện bên B: [ĐẠI DIỆN BÊN BÁN]</p>
        </article>
      </div>
    </section>
  );
}

export function ContractCreatePage({ onBack }: { onBack: () => void }) {
  return <div className="min-h-full space-y-4 bg-[#f8f7fa] p-6 text-[#393740]">
    <div className="flex items-center justify-between"><div className="flex items-center gap-3"><button onClick={onBack} className="rounded p-1 hover:bg-slate-200" title="Quay lại"><ArrowLeft className="size-5" /></button><h1 className="text-[24px] font-bold">Tạo hợp đồng</h1></div><button className="inline-flex h-9 items-center gap-2 rounded-[4px] border border-[#ff4c51] px-3 text-[12px] text-[#ff4c51]"><Upload className="size-4" />Nhập Thông Tin</button></div>
    <div className="grid gap-4 xl:grid-cols-2"><ContractOverview /><ContractPreview /></div>
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
    <div className="flex justify-end gap-3 pb-4"><button className="h-9 rounded-[4px] border border-slate-300 bg-white px-4 text-[12px]">Lưu nháp</button><button className="h-9 rounded-[4px] bg-[#ff4c51] px-4 text-[12px] text-white">Trình duyệt</button></div>
  </div>;
}
