import type { LucideIcon } from "lucide-react";
import { FilePlus2, FileText, Pencil, Upload } from "lucide-react";

export type ContractStatus =
  | "Lưu nháp"
  | "Chờ phê duyệt"
  | "Yêu cầu chỉnh sửa"
  | "Đã duyệt"
  | "Từ chối"
  | "Đã ký"
  | "Đang thực hiện"
  | "Đã giao hàng"
  | "Đã nghiệm thu"
  | "Đã thanh toán"
  | "Thanh lý"
  | "Hủy"
  | string;
export type ClauseStatus = "done" | "missing" | "disabled";

export interface ContractItem {
  id: string;
  contractType: string;
  goodsType: string;
  goodsName: string;
  partner: string;
  value: number;
  signedAt: string;
  status: ContractStatus;
  source: string;
}

export interface ContractActivity {
  icon: LucideIcon;
  color: "emerald" | "blue" | "cyan" | "indigo";
  text: string;
  actor: string;
  time: string;
}

export interface ContractClause {
  title: string;
  status: ClauseStatus;
}

export const contractStats = {
  mine: 24,
  running: 10,
  accepted: 7,
  paid: 4,
  liquidated: 3,
};

export const contracts: ContractItem[] = [
  { id: "HD-2025-028", contractType: "Đơn giá cố định", goodsType: "Hàng hoá", goodsName: "Cáp mạng Cat6A", partner: "Công ty Sao Bắc", value: 1850000000, signedAt: "18/04/2025", status: "Đang thực hiện", source: "TT - 2025 - 014" },
  { id: "HD-2025-022", contractType: "Trọn gói", goodsType: "Hàng hoá", goodsName: "Máy in M72", partner: "Thiên Long Tech", value: 320000000, signedAt: "18/04/2025", status: "Đã nghiệm thu", source: "GT - 2025 - 010" },
  { id: "HD-2025-019", contractType: "Đơn giá cố định", goodsType: "Phi tư vấn", goodsName: "Dịch vụ nâng cấp phần mềm", partner: "Hòa Bình MEP", value: 2760000000, signedAt: "18/04/2025", status: "Đã thanh toán", source: "TT - 2025 - 008" },
  { id: "HD-2025-017", contractType: "Trọn gói", goodsType: "Hàng hoá", goodsName: "Cáp mạng Cat6A", partner: "Công ty An Phát", value: 1850000000, signedAt: "18/04/2025", status: "Đã thanh toán", source: "TT - 2025 - 029" },
  { id: "HD-2025-016", contractType: "Đơn giá cố định", goodsType: "Hàng hoá", goodsName: "Cáp mạng Cat6A", partner: "Viettel Solutions", value: 450000000, signedAt: "18/04/2025", status: "Chờ phê duyệt", source: "TT - 2025 - 030" },
  { id: "HD-2025-015", contractType: "Đơn giá cố định", goodsType: "Phi tư vấn", goodsName: "Dịch vụ nâng cấp phần mềm", partner: "Minh Quân JSC", value: 660000000, signedAt: "18/04/2025", status: "Đang thực hiện", source: "TT - 2025 - 020" },
  { id: "HD-2025-014", contractType: "Trọn gói", goodsType: "Hàng hoá", goodsName: "Cáp mạng Cat6A", partner: "ATC Consulting", value: 2400000000, signedAt: "18/04/2025", status: "Đã nghiệm thu", source: "TT - 2025 - 007" },
];

export const contractActivities: ContractActivity[] = [
  { icon: FilePlus2, color: "emerald", text: "Tạo mới hợp đồng HD-2025-028 từ TT-2025-041", actor: "Nguyễn Văn A", time: "18/04/2025 10:23" },
  { icon: FileText, color: "blue", text: "Cập nhật trạng thái sang “Đang thực hiện”", actor: "Nguyễn Văn A", time: "18/04/2025 10:24" },
  { icon: Upload, color: "cyan", text: "Tải phụ lục hợp đồng HD-2025-028", actor: "Nguyễn Văn A", time: "18/04/2025 10:25" },
  { icon: FileText, color: "blue", text: "Cập nhật trạng thái giao hàng", actor: "Nguyễn Văn A", time: "18/04/2025 14:32" },
  { icon: Pencil, color: "indigo", text: "Chỉnh sửa dòng hàng hóa #2", actor: "Nguyễn Văn A", time: "18/04/2025 15:10" },
];

export const contractForm = {
  number: "Tự động khi phát hành",
  template: "Hợp đồng hàng hóa/phi tư vấn",
  biddingPackage: "VT-CNTT-2025-015 - Triển khai hệ thống DMS",
  proposal: "ĐX 25TTT-CNTT ngày 08/05/2025",
  content: "Mua sắm hàng hóa và dịch vụ triển khai hệ thống DMS",
  plan: "KH mua sắm sản phẩm CNTT năm 2025",
  datePlaceholder: "DD MM YYYY",
  contractType: "Hợp đồng trọn gói/đơn giá cố định",
  legalBasis: "Nhập căn cứ pháp lý",
};

export const contractPreviewLines = [
  "HỢP ĐỒNG",
  "Số: 25/HĐ/VCS",
  "Căn cứ Bộ luật Dân sự và các quy định hiện hành;",
  "Căn cứ nhu cầu mua sắm hàng hóa, dịch vụ của bên mua;",
  "Hai bên thống nhất ký kết hợp đồng với các điều khoản sau:",
  "Điều 1. Phạm vi cung cấp",
  "Điều 2. Giao hàng",
  "Điều 3. Giá hợp đồng và thanh toán",
];

export const contractClauses: ContractClause[] = [
  { title: "Thông tin các bên", status: "done" },
  { title: "Điều 1: Phạm vi cung cấp", status: "done" },
  { title: "Điều 2: Giao hàng", status: "done" },
  { title: "Điều 3: Loại hợp đồng, giá hợp đồng và điều khoản thanh toán", status: "done" },
  { title: "Điều 4: Trách nhiệm và nghĩa vụ của các bên", status: "missing" },
  { title: "Điều 5: Bàn giao, kiểm tra, nghiệm thu", status: "disabled" },
  { title: "Điều 6: Bảo hành và hỗ trợ kỹ thuật", status: "missing" },
  { title: "Điều 7: Bảo lãnh", status: "missing" },
  { title: "Điều 8: Bất khả kháng", status: "missing" },
  { title: "Điều 9: Điều khoản phạt và bồi thường thiệt hại", status: "missing" },
  { title: "Điều 10: Chấm dứt hợp đồng", status: "missing" },
  { title: "Điều 11: Bảo mật thông tin", status: "missing" },
  { title: "Điều 12: Quyền sở hữu trí tuệ", status: "missing" },
  { title: "Điều 13: Luật áp dụng và giải quyết tranh chấp", status: "missing" },
  { title: "Điều 14: Điều khoản chung", status: "missing" },
  { title: "Phụ lục & hồ sơ đính kèm", status: "missing" },
  { title: "Ký duyệt & phát hành", status: "missing" },
];
