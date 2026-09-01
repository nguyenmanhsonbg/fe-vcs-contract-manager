export interface ProposalItem {
  id: string;
  code: string;
  title: string;
  category: string;
  proposingUnit?: string;
  supplier: string;
  amount: number;
  createdAt: string;
  proposalDate?: string;
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
  version?: number;
}

export interface ProposalQuotationDto {
  id: string;
  vendorNameRaw: string;
  totalValue: number;
  quotationDate?: string;
  lowest: boolean;
  selected: boolean;
  selectionReason?: string;
}

export interface ProposalDocumentLinkDto {
  id: string;
  documentId: string;
  documentVersionId: string;
  documentRole: string;
  requiredForSubmit: boolean;
  notes?: string;
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
  proposingUnit?: string;
  proposalContent?: string;
  purpose?: string;
  legalBasis?: string;
  budgetSource?: string;
  executionPeriod?: string;
  items?: ProposalLineItemDto[];
  quotations?: ProposalQuotationDto[];
  documents?: ProposalDocumentLinkDto[];
  sourceDocumentId?: string;
  documentCount?: number;
  quotationCount?: number;
  version?: number;
}
