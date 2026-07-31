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
  region?: { page: number; x: number; y: number; w: number; h: number } | null;
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
  region?: { page: number; x: number; y: number; w: number; h: number } | null;
}

export interface OcrBlock {
  blockId: string;
  type: string;
  text: string;
  confidence: number;
  bbox?: { x: number; y: number; width: number; height: number } | null;
  polygon?: number[][] | null;
}

export interface OcrPage {
  pageNumber: number;
  width: number;
  height: number;
  text: string;
  averageConfidence: number;
  blocks: OcrBlock[];
  tables: unknown[];
}

export interface OcrResult {
  fullText: string;
  averageConfidence: number;
  pages: OcrPage[];
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
  ocr?: OcrResult | null;
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

export const DOCUMENTS: DigitizedDoc[] = [];

export const PRODUCTS: Product[] = [];

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
