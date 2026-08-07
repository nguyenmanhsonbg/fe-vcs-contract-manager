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
};

