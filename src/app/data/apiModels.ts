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

export type ContractType = "GOODS" | "NON_CONSULTING_SERVICE";
export type ContractStatus = "DRAFT" | "PENDING_APPROVAL" | "CHANGES_REQUESTED" | "APPROVED" | "REJECTED" | "SIGNED" | "IN_EXECUTION" | "DELIVERED" | "ACCEPTED" | "PAID" | "LIQUIDATED" | "CANCELLED";
export type ContractClauseFieldType = "text" | "textarea" | "integer" | "decimal" | "date" | "select" | "radio" | "checkboxList" | "documentLinks";
export interface ContractTemplateVersionDto { id: string; code: string; name: string; contractType: ContractType; version: number; docxResourceKey: string; status: string; schemaVersion?: number; formSchema?: ContractTemplateSchemaDto; }
export interface ContractTemplateSchemaDto { schemaVersion: number; blocks: ContractTemplateBlockDto[]; }
export type ContractTemplateBlockDto = { type: "fieldSection"; code: string; title: string; fields: ContractClauseFieldDto[] } | { type: "partyGroup"; code: string; title: string; roles: string[]; fields?: ContractClauseFieldDto[] } | { type: "itemTable"; code: string; title: string; columns: ContractClauseFieldDto[] } | { type: "clauseGroup"; code: string; title: string; clauses: ContractClauseTemplateDto[] } | { type: "attachmentList"; code: string; title: string } | { type: "signatureGroup"; code: string; title: string; roles: string[]; fields?: ContractClauseFieldDto[] };
export interface ContractClauseFieldDto { key: string; label: string; type: ContractClauseFieldType; required?: boolean; unit?: string; placeholder?: string; options?: Array<{ label: string; value: string }>; docxPlaceholder?: string; binding?: string; gridSpan?: number; }
export interface ContractClauseGroupDto { code: string; title?: string; fields: ContractClauseFieldDto[]; }
export interface ContractClauseSchemaDto { schemaVersion: number; groups: ContractClauseGroupDto[]; }
export interface ContractClauseTemplateDto { id: string; templateVersionId: string; code: string; title: string; orderNo: number; required: boolean; uiSchema: ContractClauseSchemaDto; }
export interface ContractClauseValueDto extends ContractClauseTemplateDto { values: Record<string, unknown>; status: "COMPLETE" | "INCOMPLETE" | "NOT_APPLICABLE"; }
export interface ContractItemDto { id?: string; lineNo?: number; itemCategory: "GOODS" | "SERVICE"; itemName: string; description?: string; unit: string; quantity: number; unitPrice: number; lineSubtotal?: number; lineTaxAmount?: number; lineTotal?: number; version?: number; }
export interface ContractPartyDto { id?: string; partyRole: "BUYER" | "VENDOR"; name: string; address?: string; taxCode?: string; phone?: string; representativeName?: string; representativeTitle?: string; }
export interface ContractSummaryDto { id: string; contractNumber?: string; contractType: ContractType; contractForm?: string; status: ContractStatus; packageName?: string; vendorName?: string; totalAmount: number; sourceType: string; signingDate?: string; updatedAt: string; }
export interface ContractDetailDto { id: string; summary: ContractSummaryDto; currency: string; subtotalAmount: number; taxFeeAmount: number; discountAmount: number; otherMandatoryCost: number; totalAmount: number; version: number; contractNumber?: string; contractForm?: string; packageCode?: string; packageName?: string; proposalId?: string; biddingResultId?: string; extractionResultId?: string; officialDocumentId?: string; officialDocumentVersionId?: string; templateVersionId?: string; draftData?: Record<string, unknown>; clauses: ContractClauseValueDto[]; terms?: ContractTermsDto; items: ContractItemDto[]; parties: ContractPartyDto[]; milestones: ContractMilestoneDto[]; appendices: ContractAppendixDto[]; allowedActions: string[]; }
export interface ContractTermsDto { legalBasisSummary?: string; scopeSummary?: string; deliveryDays?: number; deliveryCondition?: string; deliveryLocation?: string; acceptanceSummary?: string; warrantyMonths?: number; warrantySummary?: string; paymentTermsSummary?: string; advancePercent?: number; advancePaymentDays?: number; remainingPaymentPercent?: number; remainingPaymentDays?: number; penaltyRate?: number; penaltyCap?: number; terminationNoticeDays?: number; generalTermsSummary?: string; amountInWords?: string; taxPolicy?: string; }
export interface ContractMilestoneDto { id: string; milestoneType: string; status: string; plannedDate?: string; completedDate?: string; notes?: string; evidenceDocumentVersionId?: string; version: number; }
export interface ContractAppendixDto { id: string; appendixNo: string; appendixType?: string; documentVersionId: string; changesSummary?: string; effectiveDate?: string; version: number; }
export interface ContractPageResponse { content: ContractSummaryDto[]; page: number; size: number; totalElements: number; totalPages: number; }
export interface ContractStatsDto { total: number; running: number; accepted: number; paid: number; liquidated: number; }
export interface ContractActivityDto { action: string; contractId: string; actor: string; timestamp: string; }
