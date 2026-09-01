export interface BusinessPlanLineItem {
  id: string;
  no: number;
  group?: string; // e.g. "I", "II"
  groupName?: string; // e.g. "Hạng mục 1", "Hạng mục 2"
  itemName: string;
  specs?: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
  vatRate?: string; // e.g. "8%", "10%", "KCT"
  vatAmount?: number;
  totalAmountWithVat?: number;
  supplier?: string;
  notes?: string;
}

export interface BusinessPlanFinancial {
  revenue: number;
  revenueVat: number;
  revenueWithVat: number;
  cost: number;
  costVat: number;
  costWithVat: number;
  procurementCost: number;
  procurementCostVat: number;
  procurementCostWithVat: number;
  generalAdminCost: number;
  grossProfit: number;
  corporateTax: number;
  netProfit: number;
  profitOnCostRatio: number; // Tỷ lệ Lợi nhuận sau thuế / Chi phí (V / II)
  profitOnRevenueRatio: number; // Tỷ lệ Lợi nhuận trước thuế / Doanh thu (III / I)
  notes?: string;
}

export interface BusinessPlanAppendix {
  id: string;
  name: string;
  type: string;
  size: string;
  date: string;
  url?: string;
}

export interface BusinessPlanActivity {
  id: string;
  title: string;
  user: string;
  avatar?: string;
  time: string;
  type: "created" | "updated" | "approved" | "rejected" | "commented";
}

export interface BusinessPlanDocumentContent {
  approverTitle?: string;
  approverName?: string;
  proposingUnit?: string;
  proposalPurpose?: string;
  legalBasis?: string[];
  contentOverview?: string;
}

export interface BusinessPlanItem {
  id: string; // e.g. "144/TTr-TTKDMB"
  code: string; // e.g. "TT - 2025 - 028"
  title: string; // e.g. "Cung cấp thiết bị điện công nghiệp"
  planDate: string; // e.g. "12/04/2026"
  proposingUnit?: string; // e.g. "TTKDMB"
  proposer?: string; // e.g. "Nguyễn Văn A"
  phone?: string;
  customerName?: string;
  partner?: string; // e.g. "Công ty CP Thiết bị điện Hà Nội"
  executionPeriod?: string; // e.g. "01/04/2026 - 31/12/2026"
  totalAmount?: number;
  totalAmountWithVat?: number;
  procurementCost?: number;
  acceptedAmount?: number;
  remainingAmount?: number;
  totalBudget?: number;
  remainingBudget?: number;
  packageType?: string;
  biddingPackageName?: string;
  procurementType?: string;
  status:
    | "Đang thực hiện"
    | "Chờ duyệt"
    | "Đã duyệt"
    | "Hủy bỏ"
    | "Tạm dừng"
    | "Đã hoàn thành"
    | "Chờ phê duyệt"
    | "Lưu nháp"
    | string;
  financial?: BusinessPlanFinancial;
  items?: BusinessPlanLineItem[];
  lineItems?: BusinessPlanLineItem[];
  appendices?: BusinessPlanAppendix[];
  activities?: BusinessPlanActivity[];
  createdBy?: string;
  updatedBy?: string;
  updatedAt?: string;
  amountInWords?: string;
  documentContent?: BusinessPlanDocumentContent;
}

export interface BusinessPlanFilterOptions {
  search?: string;
  status?: string;
  proposingUnit?: string;
  page?: number;
  size?: number;
}

export interface BusinessPlanPaginatedResponse {
  content: BusinessPlanItem[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
