// Domain types and mock data for the Document Digitization system.

export type DocStatus =
  | "pending" // Chờ xử lý
  | "ocr" // Đang OCR
  | "review" // Chờ đối soát
  | "confirmed" // Đã xác nhận
  | "failed"; // Lỗi

export type DocType =
  | "quotation" // Báo giá
  | "proposal" // Tờ trình
  | "goods_contract" // Hợp đồng mua bán hàng hoá
  | "service_contract" // Hợp đồng dịch vụ
  | "acceptance" // Biên bản nghiệm thu
  | "bidding"; // Hồ sơ mời thầu

export const DOC_TYPE_LABELS: Record<DocType, string> = {
  quotation: "Báo giá",
  proposal: "Tờ trình",
  goods_contract: "Hợp đồng hàng hoá",
  service_contract: "Hợp đồng dịch vụ",
  acceptance: "Biên bản nghiệm thu",
  bidding: "Hồ sơ mời thầu",
};

export const STATUS_LABELS: Record<DocStatus, string> = {
  pending: "Chờ xử lý",
  ocr: "Đang OCR",
  review: "Chờ đối soát",
  confirmed: "Đã xác nhận",
  failed: "Lỗi",
};

export interface EditLogEntry {
  id: string;
  field: string; // Field name
  aiValue: string; // Initial AI-detected value
  before: string; // Pre-edit value
  after: string; // Post-edit value
  editor: string; // Editor
  time: string; // Edit time
  reason?: string; // Reason (required when editing a confirmed doc)
}

export interface ExtractedField {
  id: string;
  label: string;
  value: string;
  confidence: number; // 0-100
  // Bounding box (percent) on the source page for highlight navigation
  region: { page: number; x: number; y: number; w: number; h: number };
}

export interface LineItem {
  id: string;
  no: number;
  name: string;
  code: string;
  qty: string;
  unitPrice: string;
  total: string;
  confidence: number;
  region: { page: number; x: number; y: number; w: number; h: number };
}

export interface DigitizedDoc {
  id: string;
  fileName: string;
  type: DocType;
  uploadedBy: string;
  uploadTime: string;
  pageCount: number;
  status: DocStatus;
  progress: number; // 0-100
  avgConfidence: number; // 0-100
  fieldsToReview: number;
  assignedTo: string;
  lastUpdated: string;
  fields: ExtractedField[];
  lineItems: LineItem[];
  editLog: EditLogEntry[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  code: string;
  supplier: string;
  origin: string;
  unit: string;
  preTaxPrice: number;
  quotationDate: string;
  sourceDocType: DocType;
  sourceDocId: string;
  sourcePage: number;
  confirmed: boolean; // false => "Temporary Data"
}

const staff = ["Nguyễn Văn A", "Trần Thị B", "Lê Minh C", "Phạm Thu D"];

export const DOCUMENTS: DigitizedDoc[] = [
  {
    id: "TT-2025-041",
    fileName: "TTr_2025_0123_Phe_duyet_ke_hoach.pdf",
    type: "proposal",
    uploadedBy: "Nguyễn Văn A",
    uploadTime: "20/05/2026 10:51",
    pageCount: 3,
    status: "review",
    progress: 100,
    avgConfidence: 88,
    fieldsToReview: 2,
    assignedTo: "Nguyễn Văn A",
    lastUpdated: "20/05/2026 11:24",
    fields: [
      { id: "f1", label: "Loại tài liệu", value: "Tờ trình", confidence: 96, region: { page: 1, x: 34, y: 20, w: 30, h: 5 } },
      { id: "f2", label: "Mã tài liệu", value: "TT-2025-041", confidence: 96, region: { page: 1, x: 8, y: 12, w: 22, h: 4 } },
      { id: "f3", label: "Ngày lập", value: "18/04/2025", confidence: 96, region: { page: 1, x: 60, y: 15, w: 25, h: 4 } },
      { id: "f4", label: "Tên hàng", value: "Máy in laser HP M712Dn", confidence: 95, region: { page: 1, x: 12, y: 45, w: 40, h: 4 } },
      { id: "f5", label: "Mã hàng", value: "HP - M712DN", confidence: 73, region: { page: 1, x: 30, y: 45, w: 18, h: 4 } },
      { id: "f6", label: "Đối tác", value: "Công ty Sao Bắc", confidence: 96, region: { page: 1, x: 12, y: 62, w: 35, h: 4 } },
      { id: "f7", label: "Thông số kỹ thuật", value: "In A3, in 2 mặt tự động, tốc độ 40 trang/phút", confidence: 68, region: { page: 1, x: 12, y: 50, w: 55, h: 6 } },
      { id: "f8", label: "Đơn vị tính", value: "Cái", confidence: 96, region: { page: 1, x: 55, y: 45, w: 10, h: 4 } },
      { id: "f9", label: "Số lượng", value: "1", confidence: 96, region: { page: 1, x: 48, y: 45, w: 6, h: 4 } },
      { id: "f10", label: "Đơn giá (VND)", value: "86.000.000", confidence: 92, region: { page: 1, x: 66, y: 45, w: 18, h: 4 } },
      { id: "f11", label: "Tổng giá (VND)", value: "172.000.000", confidence: 92, region: { page: 1, x: 66, y: 58, w: 18, h: 4 } },
    ],
    lineItems: [
      { id: "li1", no: 1, name: "Máy in laser HP M712Dn", code: "HP-M712DN", qty: "1", unitPrice: "86.000.000", total: "86.000.000", confidence: 92, region: { page: 1, x: 8, y: 45, w: 80, h: 5 } },
      { id: "li2", no: 2, name: "Mực in chính hãng HP", code: "HP-CF287A", qty: "2", unitPrice: "43.000.000", total: "86.000.000", confidence: 90, region: { page: 1, x: 8, y: 52, w: 80, h: 5 } },
    ],
    editLog: [
      { id: "e1", field: "Mã hàng", aiValue: "HP-M712", before: "HP-M712", after: "HP-M712DN", editor: "Nguyễn Văn A", time: "20/05/2026 11:10" },
      { id: "e2", field: "Thông số kỹ thuật", aiValue: "In A3, 2 mặt", before: "In A3, 2 mặt", after: "In A3, in 2 mặt tự động, tốc độ 40 trang/phút", editor: "Nguyễn Văn A", time: "20/05/2026 11:24" },
    ],
  },
  {
    id: "HD-2025-0456",
    fileName: "HD_2024_0456_Cung_cap_thiet_bi.pdf",
    type: "goods_contract",
    uploadedBy: "Nguyễn Văn A",
    uploadTime: "20/05/2026 10:51",
    pageCount: 8,
    status: "confirmed",
    progress: 100,
    avgConfidence: 97,
    fieldsToReview: 0,
    assignedTo: "Trần Thị B",
    lastUpdated: "19/05/2026 16:02",
    fields: [
      { id: "f1", label: "Loại tài liệu", value: "Hợp đồng hàng hoá", confidence: 98, region: { page: 1, x: 30, y: 18, w: 40, h: 5 } },
      { id: "f2", label: "Số hợp đồng", value: "HD-2025-0456", confidence: 98, region: { page: 1, x: 8, y: 12, w: 25, h: 4 } },
      { id: "f3", label: "Bên A", value: "Công ty TNHH MTV An ninh mạng Viettel", confidence: 97, region: { page: 1, x: 8, y: 30, w: 60, h: 4 } },
      { id: "f4", label: "Bên B", value: "Công ty CP Sao Bắc Đẩu", confidence: 97, region: { page: 1, x: 8, y: 36, w: 55, h: 4 } },
      { id: "f5", label: "Tổng giá trị (VND)", value: "1.240.000.000", confidence: 95, region: { page: 2, x: 55, y: 40, w: 25, h: 4 } },
    ],
    lineItems: [
      { id: "li1", no: 1, name: "Tường lửa Fortinet FG-100F", code: "FG-100F", qty: "4", unitPrice: "180.000.000", total: "720.000.000", confidence: 96, region: { page: 2, x: 8, y: 40, w: 80, h: 5 } },
      { id: "li2", no: 2, name: "Switch Cisco Catalyst 9300", code: "C9300-48P", qty: "2", unitPrice: "260.000.000", total: "520.000.000", confidence: 97, region: { page: 2, x: 8, y: 47, w: 80, h: 5 } },
    ],
    editLog: [
      { id: "e1", field: "Tổng giá trị (VND)", aiValue: "1.240.000.00", before: "1.240.000.00", after: "1.240.000.000", editor: "Trần Thị B", time: "19/05/2026 15:40", reason: "OCR thiếu 1 chữ số cuối" },
    ],
  },
  {
    id: "BG-2025-0231",
    fileName: "Bang_bao_gia_thiet_bi.png",
    type: "quotation",
    uploadedBy: "Trần Thị B",
    uploadTime: "20/05/2026 10:51",
    pageCount: 1,
    status: "review",
    progress: 100,
    avgConfidence: 84,
    fieldsToReview: 3,
    assignedTo: "Trần Thị B",
    lastUpdated: "20/05/2026 09:12",
    fields: [
      { id: "f1", label: "Loại tài liệu", value: "Báo giá", confidence: 94, region: { page: 1, x: 30, y: 15, w: 30, h: 5 } },
      { id: "f2", label: "Nhà cung cấp", value: "Công ty CP Công nghệ Nam Long", confidence: 71, region: { page: 1, x: 8, y: 22, w: 55, h: 4 } },
      { id: "f3", label: "Ngày báo giá", value: "12/04/2025", confidence: 66, region: { page: 1, x: 60, y: 22, w: 25, h: 4 } },
      { id: "f4", label: "Hiệu lực", value: "30 ngày", confidence: 69, region: { page: 1, x: 60, y: 28, w: 25, h: 4 } },
    ],
    lineItems: [
      { id: "li1", no: 1, name: "Laptop Dell Latitude 5440", code: "DL-5440", qty: "10", unitPrice: "24.500.000", total: "245.000.000", confidence: 88, region: { page: 1, x: 8, y: 40, w: 80, h: 5 } },
    ],
    editLog: [],
  },
  {
    id: "BB-2025-0098",
    fileName: "Bien_ban_nghiem_thu.png",
    type: "acceptance",
    uploadedBy: "Lê Minh C",
    uploadTime: "20/05/2026 10:51",
    pageCount: 2,
    status: "confirmed",
    progress: 100,
    avgConfidence: 93,
    fieldsToReview: 0,
    assignedTo: "Lê Minh C",
    lastUpdated: "18/05/2026 14:30",
    fields: [
      { id: "f1", label: "Loại tài liệu", value: "Biên bản nghiệm thu", confidence: 95, region: { page: 1, x: 30, y: 16, w: 40, h: 5 } },
      { id: "f2", label: "Số biên bản", value: "BB-2025-0098", confidence: 94, region: { page: 1, x: 8, y: 12, w: 25, h: 4 } },
      { id: "f3", label: "Ngày nghiệm thu", value: "15/05/2026", confidence: 92, region: { page: 1, x: 60, y: 18, w: 25, h: 4 } },
    ],
    lineItems: [],
    editLog: [],
  },
  {
    id: "HS-2025-0311",
    fileName: "HS_moi_thau_cung_cap_dich_vu.pdf",
    type: "bidding",
    uploadedBy: "Nguyễn Văn A",
    uploadTime: "20/05/2026 10:51",
    pageCount: 24,
    status: "failed",
    progress: 42,
    avgConfidence: 0,
    fieldsToReview: 0,
    assignedTo: "Phạm Thu D",
    lastUpdated: "20/05/2026 08:05",
    fields: [],
    lineItems: [],
    editLog: [],
  },
  {
    id: "TT-2025-042",
    fileName: "TTr_2025_0130_De_xuat_mua_sam.pdf",
    type: "proposal",
    uploadedBy: "Phạm Thu D",
    uploadTime: "20/05/2026 08:20",
    pageCount: 4,
    status: "ocr",
    progress: 65,
    avgConfidence: 0,
    fieldsToReview: 0,
    assignedTo: "Phạm Thu D",
    lastUpdated: "20/05/2026 08:22",
    fields: [],
    lineItems: [],
    editLog: [],
  },
  {
    id: "HD-2025-0470",
    fileName: "HD_dich_vu_bao_tri_2025.pdf",
    type: "service_contract",
    uploadedBy: "Trần Thị B",
    uploadTime: "20/05/2026 07:40",
    pageCount: 6,
    status: "pending",
    progress: 0,
    avgConfidence: 0,
    fieldsToReview: 0,
    assignedTo: "—",
    lastUpdated: "20/05/2026 07:40",
    fields: [],
    lineItems: [],
    editLog: [],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Máy in laser HP M712Dn",
    description: "Máy in A3, in 2 mặt tự động, tốc độ 40 trang/phút",
    code: "HP-M712DN",
    supplier: "Công ty Sao Bắc",
    origin: "Nhật Bản",
    unit: "Cái",
    preTaxPrice: 86000000,
    quotationDate: "18/04/2025",
    sourceDocType: "proposal",
    sourceDocId: "TT-2025-041",
    sourcePage: 1,
    confirmed: true,
  },
  {
    id: "p2",
    name: "Tường lửa Fortinet FG-100F",
    description: "Next-gen firewall, throughput 10Gbps, 22 cổng GE",
    code: "FG-100F",
    supplier: "Công ty CP Sao Bắc Đẩu",
    origin: "Hoa Kỳ",
    unit: "Bộ",
    preTaxPrice: 180000000,
    quotationDate: "10/03/2025",
    sourceDocType: "goods_contract",
    sourceDocId: "HD-2025-0456",
    sourcePage: 2,
    confirmed: true,
  },
  {
    id: "p3",
    name: "Switch Cisco Catalyst 9300",
    description: "48 cổng PoE+, uplink 4x10G, quản lý L3",
    code: "C9300-48P",
    supplier: "Công ty CP Sao Bắc Đẩu",
    origin: "Trung Quốc",
    unit: "Bộ",
    preTaxPrice: 260000000,
    quotationDate: "10/03/2025",
    sourceDocType: "goods_contract",
    sourceDocId: "HD-2025-0456",
    sourcePage: 2,
    confirmed: true,
  },
  {
    id: "p4",
    name: "Laptop Dell Latitude 5440",
    description: "Core i7-1355U, 16GB RAM, 512GB SSD, 14 inch",
    code: "DL-5440",
    supplier: "Công ty CP Công nghệ Nam Long",
    origin: "Việt Nam",
    unit: "Chiếc",
    preTaxPrice: 24500000,
    quotationDate: "12/04/2025",
    sourceDocType: "quotation",
    sourceDocId: "BG-2025-0231",
    sourcePage: 1,
    confirmed: false,
  },
  {
    id: "p5",
    name: "Mực in chính hãng HP CF287A",
    description: "Hộp mực đen, năng suất 9.000 trang",
    code: "HP-CF287A",
    supplier: "Công ty Sao Bắc",
    origin: "Nhật Bản",
    unit: "Hộp",
    preTaxPrice: 3400000,
    quotationDate: "18/04/2025",
    sourceDocType: "proposal",
    sourceDocId: "TT-2025-041",
    sourcePage: 1,
    confirmed: false,
  },
];

// AI keyword suggestions used by the product lookup search.
export const AI_KEYWORDS = [
  "máy in",
  "tường lửa",
  "firewall",
  "switch mạng",
  "laptop",
  "thiết bị bảo mật",
  "mực in",
];

export { staff };
