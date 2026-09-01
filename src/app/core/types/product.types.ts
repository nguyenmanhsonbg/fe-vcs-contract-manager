export interface ProductSearchResultItem {
  id: string;
  name: string;
  description: string;
  code: string;
  supplier: string;
  origin: string;
  unit: string;
  unitPrice: number;
  quotationDate: string;
  sourceDocId?: string;
  sourceDocType?: string;
  confirmed?: boolean;
  isHighlighted?: boolean;
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
  sourceDocType: string;
  sourceDocId: string;
  sourcePage: number;
  confirmed: boolean;
}

export interface ProductSearchFilter {
  query?: string;
  timeRange?: string;
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

export interface SearchHistoryItem {
  id: string;
  query: string;
  timestamp: string;
}
