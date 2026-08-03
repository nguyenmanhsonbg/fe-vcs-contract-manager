import { DocType } from "./mock";

export interface ProductSearchResultItem {
  id: string;
  name: string; // Tên HHDV
  description: string; // Mô tả
  code: string; // Mã hàng hóa
  supplier: string; // Nhà cung cấp
  origin: string; // Xuất xứ
  unit: string; // ĐVT
  unitPrice: number; // Đơn giá (VNĐ)
  quotationDate: string; // Thời điểm báo giá (e.g. "22/05/2026")
  isHighlighted?: boolean; // Highlighted row styling (matching 1st row in design)
  sourceDocId?: string; // ID của tài liệu gốc
  sourceDocType?: DocType; // Loại tài liệu gốc
}

export interface ProductSearchFilter {
  query?: string;
  timeRange?: string; // "12_months" | "6_months" | "3_months" | "all"
  priceMin?: number;
  priceMax?: number;
  supplier?: string;
  sortBy?: "unitPrice" | "quotationDate" | "name";
  sortOrder?: "asc" | "desc";
  page?: number;
  pageSize?: number;
}

export interface ProductSearchPaginatedResponse {
  content: ProductSearchResultItem[];
  totalElements: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Data Mock riêng biệt chuẩn theo thiết kế Figma
export const MOCK_PRODUCT_SEARCH_DATA: ProductSearchResultItem[] = [
  {
    id: "PROD-001",
    name: "Lenovo IdeaPad Slim 5 15ARP10 OLED",
    description:
      "Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB kết hợp màn hình 15.1 inch WQXGA OLED sắc nét. Máy có thiết kế vỏ nhôm mỏng nhẹ (khoảng 1.39 kg)",
    code: "-",
    supplier: "Hưng Việt",
    origin: "Việt Nam",
    unit: "Cái",
    unitPrice: 21990000,
    quotationDate: "22/05/2026",
    isHighlighted: true,
    sourceDocId: "DOC-2026-0522",
    sourceDocType: "quotation",
  },
  {
    id: "PROD-002",
    name: "Lenovo IdeaPad Slim 5 15ARP10 OLED",
    description:
      "Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB kết hợp màn hình 15.1 inch WQXGA OLED sắc nét. Máy có thiết kế vỏ nhôm mỏng nhẹ (khoảng 1.39 kg)",
    code: "-",
    supplier: "Hưng Việt",
    origin: "Việt Nam",
    unit: "Cái",
    unitPrice: 22590000,
    quotationDate: "22/05/2026",
    sourceDocId: "DOC-2026-0520",
    sourceDocType: "quotation",
  },
  {
    id: "PROD-003",
    name: "HP Victus 16",
    description:
      "Laptop phiên bản cấu hình R7-7840HS hoặc R7-8845HS / RAM 32GB / SSD 512GB",
    code: "-",
    supplier: "Thiên Long Tech",
    origin: "Việt Nam",
    unit: "Cái",
    unitPrice: 22990000,
    quotationDate: "22/05/2026",
    sourceDocId: "DOC-2026-0518",
    sourceDocType: "proposal",
  },
  {
    id: "PROD-004",
    name: "Acer Nitro ProPanel ANV16-41",
    description:
      "Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB, Sở hữu màn hình 16 inch chuẩn màu (100% sRGB)",
    code: "-",
    supplier: "Thiên Long Tech",
    origin: "Việt Nam",
    unit: "Cái",
    unitPrice: 22990000,
    quotationDate: "22/05/2026",
    sourceDocId: "DOC-2026-0515",
    sourceDocType: "quotation",
  },
  {
    id: "PROD-005",
    name: "Acer Nitro ProPanel ANV16-41",
    description:
      "Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB, Sở hữu màn hình 16 inch chuẩn màu (100% sRGB)",
    code: "-",
    supplier: "Thiên Long Tech",
    origin: "Việt Nam",
    unit: "Cái",
    unitPrice: 23590000,
    quotationDate: "22/05/2026",
    sourceDocId: "DOC-2026-0510",
    sourceDocType: "goods_contract",
  },
];

export const MOCK_SEARCH_SUGGESTIONS = [
  "Laptop",
  "Chip Ryzen 7",
  "32GB RAM",
];

export const DEFAULT_SEARCH_QUERY = "Laptop Chip Ryzen 7, ram 32gb, rom 512...";

export const MOCK_TIME_RANGE_OPTIONS = [
  { value: "12_months", label: "12 tháng gần đây" },
  { value: "6_months", label: "6 tháng gần đây" },
  { value: "3_months", label: "3 tháng gần đây" },
  { value: "all", label: "Tất cả thời gian" },
];

export const MOCK_PRICE_MIN_OPTIONS = [
  { value: 0, label: "Từ" },
  { value: 10000000, label: "10.000.000 VNĐ" },
  { value: 20000000, label: "20.000.000 VNĐ" },
];

export const MOCK_PRICE_MAX_OPTIONS = [
  { value: 0, label: "Đến" },
  { value: 25000000, label: "25.000.000 VNĐ" },
  { value: 50000000, label: "50.000.000 VNĐ" },
];

export const MOCK_PAGE_SIZE_OPTIONS = [
  { value: 5, label: "5 / trang" },
  { value: 10, label: "10 / trang" },
  { value: 20, label: "20 / trang" },
  { value: 50, label: "50 / trang" },
];

export function getMockFallbackDoc(docId: string) {
  return {
    id: docId,
    fileName: `Tai_lieu_${docId}.pdf`,
    type: "quotation" as const,
    uploadedBy: "Nguyễn Văn A",
    uploadTime: "22/05/2026 09:30",
    pageCount: 2,
    status: "confirmed" as const,
    progress: 100,
    avgConfidence: 98,
    fieldsToReview: 0,
    assignedTo: "Nguyễn Văn A",
    lastUpdated: "22/05/2026 09:30",
    fields: [],
    lineItems: [],
    editLog: [],
  };
}

export interface SearchHistoryItem {
  id: string;
  query: string;
  timestamp: string;
}

export let MOCK_SEARCH_HISTORY: SearchHistoryItem[] = [
  { id: "h1", query: "Ryzen 7 7735HS", timestamp: "" },
  { id: "h2", query: "RAM 32GB", timestamp: "" },
  { id: "h3", query: "SSD 512GB", timestamp: "" },
  { id: "h4", query: "màn hình 15.1 inch WQXGA OLED", timestamp: "" },
  { id: "h5", query: "vỏ nhôm", timestamp: "" },
  { id: "h6", query: "Laptop Dell", timestamp: "" },
  { id: "h7", query: "Dell Xps", timestamp: "" },
];

export async function fetchSearchHistory(): Promise<SearchHistoryItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return [...MOCK_SEARCH_HISTORY];
}

export async function addSearchHistoryItem(query: string): Promise<SearchHistoryItem[]> {
  if (!query.trim()) return [...MOCK_SEARCH_HISTORY];
  const q = query.trim();
  MOCK_SEARCH_HISTORY = MOCK_SEARCH_HISTORY.filter((h) => h.query.toLowerCase() !== q.toLowerCase());
  MOCK_SEARCH_HISTORY.unshift({
    id: `h_${Date.now()}`,
    query: q,
    timestamp: "Vừa xong",
  });
  return [...MOCK_SEARCH_HISTORY];
}

export async function removeSearchHistoryItem(id: string): Promise<SearchHistoryItem[]> {
  MOCK_SEARCH_HISTORY = MOCK_SEARCH_HISTORY.filter((h) => h.id !== id);
  return [...MOCK_SEARCH_HISTORY];
}

export async function clearAllSearchHistory(): Promise<SearchHistoryItem[]> {
  MOCK_SEARCH_HISTORY = [];
  return [];
}

/**
 * Hàm mô phỏng gọi REST API lấy danh sách tìm kiếm sản phẩm.
 * Luôn sẵn sàng để gắn API thực tế khi backend hoàn thiện.
 */
export async function fetchProductSearchResults(
  filters: ProductSearchFilter = {}
): Promise<ProductSearchPaginatedResponse> {
  // Giả lập trễ nhẹ 100ms
  await new Promise((resolve) => setTimeout(resolve, 100));

  const {
    query = "",
    priceMin,
    priceMax,
    supplier,
    sortBy,
    sortOrder = "asc",
    page = 1,
    pageSize = 10,
  } = filters;

  let results = [...MOCK_PRODUCT_SEARCH_DATA];

  // Lọc theo từ khóa (query)
  if (query.trim()) {
    const q = query.toLowerCase().trim();
    results = results.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.supplier.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q)
    );
  }

  // Lọc theo nhà cung cấp
  if (supplier && supplier !== "all") {
    results = results.filter((item) => item.supplier === supplier);
  }

  // Lọc theo giá
  if (priceMin && priceMin > 0) {
    results = results.filter((item) => item.unitPrice >= priceMin);
  }
  if (priceMax && priceMax > 0) {
    results = results.filter((item) => item.unitPrice <= priceMax);
  }

  // Sắp xếp
  if (sortBy) {
    results.sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];
      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }

  // Phân trang
  const totalElements = results.length;
  const totalPages = Math.ceil(totalElements / pageSize) || 1;
  const startIndex = (page - 1) * pageSize;
  const paginatedContent = results.slice(startIndex, startIndex + pageSize);

  return {
    content: paginatedContent,
    totalElements,
    page,
    pageSize,
    totalPages,
  };
}
