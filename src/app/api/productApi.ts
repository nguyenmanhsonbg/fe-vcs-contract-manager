import {
  Product,
  ProductSearchFilter,
  ProductSearchPaginatedResponse,
  SearchHistoryItem,
} from "../core/types/product.types";
import { apiFetch, apiDownloadWithBody } from "./http";

export const productApi = {
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
};
