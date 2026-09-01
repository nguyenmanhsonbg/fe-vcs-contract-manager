export interface AcceptancePeriodRecord {
  periodNo: number;
  periodName: string;
  qty: number;
  unitPrice: number;
  value: number;
  date: string;
  documentNo?: string;
  status: "Đã nghiệm thu" | "Đang xử lý" | "Chờ duyệt";
  executor?: string;
  notes?: string;
}

export interface AcceptanceMilestoneItem {
  id: string;
  no: number;
  itemName: string;
  unit: string;
  contractQty: number;
  contractUnitPrice: number;
  contractValue: number;
  periods: {
    [key: string]: AcceptancePeriodRecord | undefined;
  };
  totalAcceptedQty: number;
  totalAcceptedUnitPrice: number;
  totalAcceptedValue: number;
  remainingQty: number;
  remainingValue: number;
}

export interface AcceptanceDocument {
  id: string;
  fileName: string;
  type: "Biên bản nghiệm thu" | "Hóa đơn GTGT" | "Bảng kê chi tiết" | "Phụ lục hợp đồng";
  fileSize: string;
  uploadedBy: string;
  uploadedAt: string;
  period?: string;
}

export interface AcceptanceActivityLog {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  type: "created" | "approved" | "uploaded" | "updated";
}

export interface AcceptanceContractDetail {
  id: string;
  contractCode: string;
  contractName: string;
  businessPlanId?: string;
  businessPlanName?: string;
  signDate: string;
  partner: string;
  partnerTaxCode?: string;
  partnerAddress?: string;
  representative?: string;
  phone?: string;
  totalValue: number;
  totalAcceptedValue: number;
  remainingValue: number;
  status: "Đang thực hiện" | "Đã hoàn thành" | "Chờ duyệt" | "Hủy bỏ";
  milestones: AcceptanceMilestoneItem[];
  documents: AcceptanceDocument[];
  activities: AcceptanceActivityLog[];
}

export interface AcceptanceFilterOptions {
  search?: string;
  status?: string;
  businessPlanId?: string;
  page?: number;
  size?: number;
}

export interface AcceptancePaginatedResponse {
  content: AcceptanceContractDetail[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
