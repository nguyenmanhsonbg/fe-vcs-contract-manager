export type DocStatus = "pending" | "ocr" | "review" | "confirmed" | "failed";

export type DocType = "quotation" | "proposal" | "goods_contract" | "service_contract" | "acceptance" | "bidding";

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

export interface EditLogEntry { id: string; field: string; aiValue: string; before: string; after: string; editor: string; time: string; reason?: string; }
export interface ExtractedField { id: string; label: string; value: string; confidence: number; region?: { page: number; x: number; y: number; w: number; h: number } | null; }
export interface LineItem { id: string; no: number; name: string; code: string; unit?: string; qty: string; unitPrice: string; total: string; confidence: number; description?: string; specification?: string; region?: { page: number; x: number; y: number; w: number; h: number } | null; }
export interface OcrBlock { blockId: string; type: string; text: string; confidence: number; bbox?: { x: number; y: number; width: number; height: number } | null; polygon?: number[][] | null; }
export interface OcrPage { pageNumber: number; width: number; height: number; text: string; averageConfidence: number; blocks: OcrBlock[]; tables: unknown[]; }
export interface OcrResult { fullText: string; averageConfidence: number; pages: OcrPage[]; }
export interface DigitizedDoc {
  id: string; fileName: string; type: DocType; uploadedBy: string; uploadTime: string; pageCount: number; status: DocStatus;
  progress: number; avgConfidence: number; fieldsToReview: number; assignedTo: string; lastUpdated: string;
  fields: ExtractedField[]; lineItems: LineItem[]; editLog: EditLogEntry[]; ocr?: OcrResult | null;
}
