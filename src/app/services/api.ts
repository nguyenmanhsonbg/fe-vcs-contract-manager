import { DigitizedDoc } from "../data/models";
import {
  ProductSearchFilter,
  ProductSearchPaginatedResponse,
  SearchHistoryItem,
  ProposalFilterOptions,
  ProposalPaginatedResponse,
  ProposalDetailDto,
  ProposalLineItemDto,
  Product,
  ContractDetailDto,
  ContractPageResponse,
  ContractStatsDto,
  ContractActivityDto,
  ContractTemplateVersionDto,
  ContractClauseTemplateDto,
} from "../data/apiModels";

// ponytail: Base API URL với fallback /api/v1 cho local dev proxy
const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api/v1";

export class ApiError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

export interface PageResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface ContractTemplateOption { key: string; label: string; }

export interface DocumentFilterOptions {
  search?: string;
  type?: string;
  status?: string;
  uploadedBy?: string;
  assignedTo?: string;
  lowConfidenceOnly?: boolean;
  from?: string;
  to?: string;
  quickFilter?: string;
  sortBy?: "uploadTime" | "fileName" | "status" | "confidence" | "lastUpdated";
  sortDirection?: "asc" | "desc";
  page?: number;
  size?: number;
}

export interface ExtractionFieldSpec {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  description?: string;
  confidenceThreshold?: number;
}

export const DEFAULT_EXTRACTION_FIELDS: ExtractionFieldSpec[] = [
  { id: "documentType", label: "Loại tài liệu", type: "string", description: "Loại văn bản" },
  { id: "documentNumber", label: "Mã tài liệu", type: "string", description: "Số hiệu hoặc mã tài liệu" },
  { id: "proposalDate", label: "Ngày lập", type: "date", description: "Ngày lập hoặc ban hành tài liệu" },
  { id: "title", label: "Tên hàng", type: "string", description: "Tên hàng hóa hoặc tiêu đề tài liệu" },
  { id: "productCode", label: "Mã hàng", type: "string", description: "Mã sản phẩm hoặc mã hàng hóa" },
  { id: "partner", label: "Đối tác", type: "string", description: "Tên đối tác hoặc nhà cung cấp" },
  { id: "specifications", label: "Thông số kỹ thuật", type: "string", description: "Thông số kỹ thuật của hàng hóa" },
  { id: "unit", label: "Đơn vị tính", type: "string", description: "Đơn vị tính" },
  { id: "quantity", label: "Số lượng", type: "number", description: "Số lượng hàng hóa" },
  { id: "unitPrice", label: "Đơn giá (VND)", type: "number", description: "Đơn giá chưa hoặc đã gồm thuế theo tài liệu" },
  { id: "totalAmount", label: "Tổng giá trị (VND)", type: "number", description: "Tổng giá trị thành tiền" },
];

/** Fetcher chuẩn REST API - Kết nối trực tiếp Backend Spring Boot */
async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });
  if (!res.ok) {
    const body = await res.text();
    let message = body;
    try {
      const parsed = JSON.parse(body) as { message?: string; detail?: string; error?: string };
      message = parsed.message || parsed.detail || parsed.error || body;
    } catch {
      // Keep the raw response when it is not JSON.
    }
    throw new ApiError(res.status, message || res.statusText || `HTTP ${res.status}`);
  }
  return await res.json();
}

async function apiBlob(endpoint: string, body: unknown): Promise<Blob> {
  const res = await fetch(`${API_BASE}${endpoint}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!res.ok) throw new ApiError(res.status, await res.text() || "Request failed");
  return res.blob();
}

export const docApi = {
  /** Search all documents and apply filters/widgets/date range/sort. */
  async getDocuments(filters?: DocumentFilterOptions): Promise<PageResponse<DigitizedDoc>> {
    return apiFetch<PageResponse<DigitizedDoc>>("/documents/search", {
      method: "POST",
      body: JSON.stringify(filters || {}),
    });
  },

  /** Lấy chi tiết tài liệu theo ID từ Spring Boot REST API /api/v1/documents/{id} */
  async getDocumentById(id: string): Promise<DigitizedDoc | null> {
    try {
      return await apiFetch<DigitizedDoc>(`/documents/${id}`);
    } catch (error) {
      console.error(`Failed to load document ${id}:`, error);
      return null;
    }
  },

  /** Tải file lên Spring Boot Backend qua POST /api/v1/documents/upload (Multipart Form Data) */
  async uploadDocument(file: File): Promise<DigitizedDoc> {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${API_BASE}/documents/upload`, {
      method: "POST",
      body: formData,
    });
    if (!res.ok) {
      throw new Error(`Upload failed: ${res.statusText}`);
    }
    return await res.json();
  },

  /** Cập nhật thông tin trường bóc tách via PATCH /api/v1/documents/{docId}/fields/{fieldId} */
  async updateDocumentField(docId: string, fieldId: string, newValue: string, reason?: string): Promise<DigitizedDoc> {
    return apiFetch<DigitizedDoc>(`/documents/${docId}/fields/${fieldId}`, {
      method: "PATCH",
      body: JSON.stringify({ value: newValue, reason }),
    });
  },

  /** Xác nhận dữ liệu số hóa via POST /api/v1/documents/{docId}/confirm */
  async confirmDocument(docId: string): Promise<DigitizedDoc> {
    return apiFetch<DigitizedDoc>(`/documents/${docId}/confirm`, {
      method: "POST",
    });
  },

  /** Chạy lại tiến trình OCR AI via POST /api/v1/documents/{docId}/rerun-ocr */
  async rerunOCR(docId: string): Promise<DigitizedDoc> {
    return apiFetch<DigitizedDoc>(`/documents/${docId}/rerun-ocr`, {
      method: "POST",
    });
  },

  /** Gửi raw OCR + field schema sang LLM qua backend. */
  async extractFields(docId: string, fields: ExtractionFieldSpec[] = DEFAULT_EXTRACTION_FIELDS): Promise<DigitizedDoc> {
    return apiFetch<DigitizedDoc>(`/documents/${docId}/extract-fields`, {
      method: "POST",
      body: JSON.stringify(fields),
    });
  },

  /** Tra cứu sản phẩm từ Spring Boot REST API /api/v1/products */
  async getProducts(search?: string, keywords: string[] = []): Promise<Product[]> {
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (keywords.length > 0) params.append("keywords", keywords.join(","));

    const url = `/products${params.toString() ? `?${params.toString()}` : ""}`;
    return apiFetch<Product[]>(url);
  },

  /** Tìm kiếm sản phẩm qua OpenSearch backend */
  async searchProducts(filters: ProductSearchFilter = {}): Promise<ProductSearchPaginatedResponse> {
    return apiFetch<ProductSearchPaginatedResponse>("/products/search", {
      method: "POST",
      body: JSON.stringify(filters),
    });
  },

  /** Quản lý Lịch sử tìm kiếm */
  async getSearchHistory(): Promise<SearchHistoryItem[]> {
    return apiFetch<SearchHistoryItem[]>("/products/search-history");
  },

  async saveSearchQuery(query: string): Promise<SearchHistoryItem[]> {
    return apiFetch<SearchHistoryItem[]>("/products/search-history", {
      method: "POST",
      body: JSON.stringify({ query }),
    });
  },

  async removeSearchQuery(id: string): Promise<SearchHistoryItem[]> {
    return apiFetch<SearchHistoryItem[]>(`/products/search-history/${id}`, {
      method: "DELETE",
    });
  },

  async clearSearchHistory(): Promise<SearchHistoryItem[]> {
    return apiFetch<SearchHistoryItem[]>("/products/search-history/all", {
      method: "DELETE",
    });
  },

  /** Danh sách Tờ trình từ PostgreSQL backend */
  async getProposals(filters: ProposalFilterOptions = {}): Promise<ProposalPaginatedResponse> {
    return apiFetch<ProposalPaginatedResponse>("/proposals/search", {
      method: "POST",
      body: JSON.stringify(filters),
    });
  },

  /** Chi tiết Tờ trình theo ID */
  async getProposalById(id: string): Promise<ProposalDetailDto | null> {
    try {
      return await apiFetch<ProposalDetailDto>(`/proposals/${id}`);
    } catch (error) {
      console.error(`Failed to fetch proposal detail ${id}:`, error);
      return null;
    }
  },

  /** Cập nhật thông tin Tờ trình */
  async updateProposal(
    id: string,
    data: {
      title?: string;
      proposalNumber?: string;
      proposalDate?: string;
      proposalContent?: string;
      purpose?: string;
      legalBasis?: string;
      budgetSource?: string;
      executionPeriod?: string;
    }
  ): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  },

  /** Thêm hạng mục vào Tờ trình */
  async addProposalItem(id: string, item: ProposalLineItemDto): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/items`, {
      method: "POST",
      body: JSON.stringify(item),
    });
  },

  /** Trình phê duyệt Tờ trình */
  async submitProposal(id: string): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/submit`, {
      method: "POST",
    });
  },

  /** Hủy Tờ trình */
  async cancelProposal(id: string, reason: string): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/cancel`, {
      method: "POST",
      body: JSON.stringify({ reason }),
    });
  },

  async getContracts(params: { q?: string; contractType?: string; status?: string; page?: number; size?: number } = {}): Promise<ContractPageResponse> {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => value !== undefined && value !== "" && query.set(key, String(value)));
    return apiFetch<ContractPageResponse>(`/contracts?${query}`);
  },
  async getContractTemplates(): Promise<ContractTemplateOption[]> { return apiFetch<ContractTemplateOption[]>("/contracts/templates"); },
  async getContractTemplateVersions(contractType: string): Promise<ContractTemplateVersionDto[]> { return apiFetch<ContractTemplateVersionDto[]>(`/contract-templates?contractType=${encodeURIComponent(contractType)}`); },
  async getContractTemplateClauses(templateVersionId: string): Promise<ContractClauseTemplateDto[]> {
    const result = await apiFetch<ContractClauseTemplateDto[] | { clauses: ContractClauseTemplateDto[] }>(`/contract-templates/${templateVersionId}/clauses`);
    return Array.isArray(result) ? result : result.clauses;
  },
  async previewContract(data: unknown): Promise<Blob> { return apiBlob("/contracts/preview", data); },
  async getContractStats(): Promise<ContractStatsDto> { return apiFetch<ContractStatsDto>("/contracts/stats"); },
  async getContractActivity(size = 10): Promise<ContractActivityDto[]> { return apiFetch<ContractActivityDto>(`/contracts/activity?size=${size}`); },
  async getContract(id: string): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>(`/contracts/${id}`); },
  async createContract(data: unknown): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>("/contracts", { method: "POST", body: JSON.stringify(data) }); },
  async updateContract(id: string, data: unknown): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>(`/contracts/${id}`, { method: "PATCH", body: JSON.stringify(data) }); },
  async contractFromProposal(proposalId: string): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>(`/contracts/from-proposal?proposalId=${encodeURIComponent(proposalId)}`, { method: "POST", headers: { "Idempotency-Key": `proposal:${proposalId}` } }); },
  async contractFromExtraction(extractionResultId: string): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>(`/contracts/from-extraction?extractionResultId=${encodeURIComponent(extractionResultId)}`, { method: "POST" }); },
  async contractFromBidding(data: unknown): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>("/contracts/from-bidding-result", { method: "POST", body: JSON.stringify(data) }); },
  async contractAction(id: string, action: string, body?: unknown): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>(`/contracts/${id}/${action}`, { method: "POST", body: body === undefined ? undefined : JSON.stringify(body) }); },
  async contractApproval(id: string, body: unknown): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>(`/contracts/${id}/approval-actions`, { method: "POST", body: JSON.stringify(body) }); },
};
