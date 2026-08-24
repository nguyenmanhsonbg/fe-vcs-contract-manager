import { DigitizedDoc } from "../data/models";
import {
  ProductSearchFilter,
  ProductSearchPaginatedResponse,
  SearchHistoryItem,
  ProposalFilterOptions,
  ProposalPaginatedResponse,
  ProposalDetailDto,
  ProposalLineItemDto,
  ProposalQuotationDto,
  Product,
  ContractDetailDto,
  ContractPageResponse,
  ContractStatsDto,
  ContractActivityDto,
  ContractTemplateVersionDto,
  ContractClauseTemplateDto,
} from "../data/apiModels";

import { sampleProposals } from "../data/proposalMock";

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

async function apiDownload(endpoint: string, method = "GET"): Promise<Blob> {
  const res = await fetch(`${API_BASE}${endpoint}`, { method, headers: { "Content-Type": "application/json" } });
  if (!res.ok) throw new ApiError(res.status, await res.text() || "Request failed");
  return res.blob();
}

async function apiDownloadWithBody(endpoint: string, body: unknown): Promise<Blob> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
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

  /** Tải file gốc của tài liệu qua endpoint preview của document service. */
  async downloadDocument(id: string): Promise<Blob> {
    return apiDownload(`/documents/${id}/preview`);
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
  async extractFields(docId: string, fields?: ExtractionFieldSpec[]): Promise<DigitizedDoc> {
    return apiFetch<DigitizedDoc>(`/documents/${docId}/extract-fields`, {
      method: "POST",
      ...(fields?.length ? { body: JSON.stringify(fields) } : {}),
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

  async getProductSuppliers(): Promise<string[]> {
    return apiFetch<string[]>("/products/suppliers");
  },

  async exportProducts(filters: ProductSearchFilter = {}): Promise<Blob> {
    return apiDownloadWithBody("/products/search/export", filters);
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

  /** Danh sách Tờ trình từ PostgreSQL backend (có fallback mock data theo Figma) */
  async getProposals(filters: ProposalFilterOptions = {}): Promise<ProposalPaginatedResponse> {
    try {
      return await apiFetch<ProposalPaginatedResponse>("/proposals/search", {
        method: "POST",
        body: JSON.stringify(filters),
      });
    } catch {
      let list = [...sampleProposals];
      if (filters.category && filters.category !== "all") {
        list = list.filter((item) => item.category.toLowerCase().includes(filters.category!.toLowerCase()));
      }
      if (filters.valueFilter && filters.valueFilter !== "all") {
        if (filters.valueFilter === "under50") list = list.filter((item) => item.amount < 50000000);
        else if (filters.valueFilter === "50to100") list = list.filter((item) => item.amount >= 50000000 && item.amount <= 100000000);
        else if (filters.valueFilter === "over100") list = list.filter((item) => item.amount > 100000000);
      }
      if (filters.search && filters.search.trim()) {
        const q = filters.search.trim().toLowerCase();
        list = list.filter(
          (item) =>
            item.code.toLowerCase().includes(q) ||
            item.title.toLowerCase().includes(q) ||
            item.supplier.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q)
        );
      }
      const page = filters.page || 1;
      const size = filters.size || 10;
      const totalElements = list.length;
      const totalPages = Math.ceil(totalElements / size) || 1;
      const start = (page - 1) * size;
      const content = list.slice(start, start + size);
      return { content, page, size, totalElements, totalPages };
    }
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
      proposingUnit?: string;
      proposalContent?: string;
      purpose?: string;
      legalBasis?: string;
      budgetSource?: string;
      executionPeriod?: string;
      version?: number;
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

  async updateProposalItem(id: string, itemId: string, item: ProposalLineItemDto): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/items/${itemId}`, {
      method: "PATCH",
      body: JSON.stringify(item),
    });
  },

  async removeProposalItem(id: string, itemId: string): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/items/${itemId}`, { method: "DELETE" });
  },

  async addProposalQuotation(id: string, quotation: Pick<ProposalQuotationDto, "vendorNameRaw" | "totalValue" | "quotationDate">): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/quotations`, {
      method: "POST",
      body: JSON.stringify(quotation),
    });
  },

  async updateProposalQuotation(id: string, quotationId: string, quotation: Pick<ProposalQuotationDto, "vendorNameRaw" | "totalValue" | "quotationDate">): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/quotations/${quotationId}`, {
      method: "PATCH",
      body: JSON.stringify(quotation),
    });
  },

  async removeProposalQuotation(id: string, quotationId: string): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/quotations/${quotationId}`, { method: "DELETE" });
  },

  async selectProposalQuotation(id: string, quotationId: string, selectionReason?: string): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/quotations/${quotationId}/select`, {
      method: "POST",
      body: JSON.stringify({ selectionReason }),
    });
  },

  async linkProposalDocument(id: string, documentId: string, documentRole = "REFERENCE"): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/documents`, {
      method: "POST",
      body: JSON.stringify({ documentId, documentRole, requiredForSubmit: false }),
    });
  },

  async unlinkProposalDocument(id: string, linkId: string): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/documents/${linkId}`, { method: "DELETE" });
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
  async getPublishedContractTemplates(): Promise<ContractTemplateVersionDto[]> { return apiFetch<ContractTemplateVersionDto[]>("/contract-templates"); },
  async getContractTemplate(templateVersionId: string): Promise<ContractTemplateVersionDto> { return apiFetch<ContractTemplateVersionDto>(`/contract-templates/${templateVersionId}`); },
  async getContractTemplateClauses(templateVersionId: string): Promise<ContractClauseTemplateDto[]> {
    const result = await apiFetch<ContractClauseTemplateDto[] | { clauses: ContractClauseTemplateDto[] }>(`/contract-templates/${templateVersionId}/clauses`);
    return Array.isArray(result) ? result : result.clauses;
  },
  async previewContract(data: unknown): Promise<Blob> { return apiBlob("/contracts/preview", data); },
  async previewSavedContract(id: string): Promise<Blob> { return apiDownload(`/contracts/${id}/preview`, "POST"); },
  async exportContract(id: string, format: "docx" | "pdf" = "docx"): Promise<Blob> { return apiDownload(`/contracts/${id}/export?format=${format}`); },
  async getContractStats(): Promise<ContractStatsDto> { return apiFetch<ContractStatsDto>("/contracts/stats"); },
  async getContractActivity(size = 10): Promise<ContractActivityDto[]> { return apiFetch<ContractActivityDto>(`/contracts/activity?size=${size}`); },
  async getContract(id: string): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>(`/contracts/${id}`); },
  async createContractDraft(templateVersionId: string): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>("/contracts/drafts", { method: "POST", body: JSON.stringify({ templateVersionId }) }); },
  async saveContractDraft(id: string, data: Record<string, unknown>, version: number): Promise<ContractDetailDto> {
    return apiFetch<ContractDetailDto>(`/contracts/${id}/draft`, { method: "PATCH", body: JSON.stringify({ data, version }) });
  },
  async createContract(data: unknown): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>("/contracts", { method: "POST", body: JSON.stringify(data) }); },
  async updateContract(id: string, data: unknown): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>(`/contracts/${id}`, { method: "PATCH", body: JSON.stringify(data) }); },
  async contractFromProposal(proposalId: string): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>(`/contracts/from-proposal?proposalId=${encodeURIComponent(proposalId)}`, { method: "POST", headers: { "Idempotency-Key": `proposal:${proposalId}` } }); },
  async contractFromExtraction(extractionResultId: string): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>(`/contracts/from-extraction?extractionResultId=${encodeURIComponent(extractionResultId)}`, { method: "POST" }); },
  async contractFromBidding(data: unknown): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>("/contracts/from-bidding-result", { method: "POST", body: JSON.stringify(data) }); },
  async contractAction(id: string, action: string, body?: unknown): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>(`/contracts/${id}/${action}`, { method: "POST", body: body === undefined ? undefined : JSON.stringify(body) }); },
  async contractApproval(id: string, body: unknown): Promise<ContractDetailDto> { return apiFetch<ContractDetailDto>(`/contracts/${id}/approval-actions`, { method: "POST", body: JSON.stringify(body) }); },
};
