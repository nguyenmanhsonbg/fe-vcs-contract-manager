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

export interface ProposalItem {
  id: string;
  code: string;
  title: string;
  category: string;
  supplier: string;
  amount: number;
  createdAt: string;
}

export interface ProposalFilterOptions {
  category?: string;
  valueFilter?: string;
  search?: string;
  from?: string;
  to?: string;
  page?: number;
  size?: number;
}

export interface ProposalPaginatedResponse {
  content: ProposalItem[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface ProposalLineItemDto {
  id?: string;
  itemCategory?: string;
  name: string;
  description: string;
  supplier?: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  taxRate?: number;
  lineAmount?: number;
  lineTaxAmount?: number;
}

export interface ProposalDetailDto {
  id: string;
  summary: ProposalItem;
  status: string;
  processType?: string;
  currency?: string;
  subtotal?: number;
  taxAmount?: number;
  routingValue?: number;
  totalValue?: number;
  proposalNumber?: string;
  proposalDate?: string;
  proposalContent?: string;
  purpose?: string;
  legalBasis?: string;
  budgetSource?: string;
  executionPeriod?: string;
  items?: ProposalLineItemDto[];
}

