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
  contractValue: number;
  acceptedValue: number;
  remainingValue: number;
  completionPercent: number;
  status: "Nghiệm thu một phần" | "Đã nghiệm thu toàn bộ" | "Chưa nghiệm thu";
  activePeriods: { id: string; name: string }[];
  items: AcceptanceMilestoneItem[];
  documents: AcceptanceDocument[];
  activities: AcceptanceActivityLog[];
}

export const sampleAcceptanceContractDetails: AcceptanceContractDetail[] = [
  {
    id: "39.25.VCS-VINALINUX.01",
    contractCode: "39.25.VCS-VINALINUX.01",
    contractName: "Cung cấp bản quyền phần mềm Freshworks CRM",
    businessPlanId: "144/TTr-TTKDMB",
    businessPlanName: "Kế hoạch triển khai hệ thống CRM nội bộ 2025",
    signDate: "10/04/2025",
    partner: "Công ty TNHH Nghiên cứu và phát triển Công nghệ lõi Linux Việt Nam",
    partnerTaxCode: "0108923456",
    partnerAddress: "Tầng 8, Tòa nhà Detech, Số 8 Tôn Thất Thuyết, Cầu Giấy, Hà Nội",
    representative: "Nguyễn Thế Anh - Giám đốc điều hành",
    contractValue: 100000000000,
    acceptedValue: 70000000000,
    remainingValue: 30000000000,
    completionPercent: 70,
    status: "Nghiệm thu một phần",
    activePeriods: [
      { id: "period1", name: "Đợt 1 (30%)" },
      { id: "period2", name: "Đợt 2 (40%)" },
      { id: "period3", name: "Đợt 3 (30%)" },
    ],
    items: [
      {
        id: "item-1",
        no: 1,
        itemName: "Bản quyền phần mềm Freshworks CRM Enterprise (Hạn sử dụng 3 năm)",
        unit: "Gói",
        contractQty: 80,
        contractUnitPrice: 1000000000,
        contractValue: 80000000000,
        periods: {
          period1: {
            periodNo: 1,
            periodName: "Đợt 1 (30%)",
            qty: 24,
            unitPrice: 1000000000,
            value: 24000000000,
            date: "15/04/2025",
            documentNo: "BB-NT-01/VCS-2025",
            status: "Đã nghiệm thu",
            executor: "Nguyễn Văn A",
            notes: "Bàn giao License key kích hoạt cho 24 tài khoản Admin & Quản lý",
          },
          period2: {
            periodNo: 2,
            periodName: "Đợt 2 (40%)",
            qty: 32,
            unitPrice: 1000000000,
            value: 32000000000,
            date: "20/05/2025",
            documentNo: "BB-NT-02/VCS-2025",
            status: "Đã nghiệm thu",
            executor: "Nguyễn Văn A",
            notes: "Kích hoạt bổ sung 32 tài khoản nhân viên kinh doanh & CSKH",
          },
          period3: {
            periodNo: 3,
            periodName: "Đợt 3 (30%)",
            qty: 0,
            unitPrice: 1000000000,
            value: 0,
            date: "",
            documentNo: "",
            status: "Chờ duyệt",
            executor: "",
            notes: "Dự kiến bàn giao nốt 24 tài khoản khi hoàn thiện đào tạo người dùng",
          },
        },
        totalAcceptedQty: 56,
        totalAcceptedUnitPrice: 1000000000,
        totalAcceptedValue: 56000000000,
        remainingQty: 24,
        remainingValue: 24000000000,
      },
      {
        id: "item-2",
        no: 2,
        itemName: "Dịch vụ cấu hình, tích hợp hệ thống Core ERP và đào tạo chuyển giao",
        unit: "Gói",
        contractQty: 20,
        contractUnitPrice: 1000000000,
        contractValue: 20000000000,
        periods: {
          period1: {
            periodNo: 1,
            periodName: "Đợt 1 (30%)",
            qty: 6,
            unitPrice: 1000000000,
            value: 6000000000,
            date: "15/04/2025",
            documentNo: "BB-NT-01/VCS-2025",
            status: "Đã nghiệm thu",
            executor: "Trần Minh Quang",
            notes: "Hoàn thiện tài liệu khảo sát phân tích và thiết kế luồng tích hợp",
          },
          period2: {
            periodNo: 2,
            periodName: "Đợt 2 (40%)",
            qty: 8,
            unitPrice: 1000000000,
            value: 8000000000,
            date: "20/05/2025",
            documentNo: "BB-NT-02/VCS-2025",
            status: "Đã nghiệm thu",
            executor: "Trần Minh Quang",
            notes: "Kiểm thử tích hợp dữ liệu khách hàng từ Core sang CRM thành công",
          },
          period3: {
            periodNo: 3,
            periodName: "Đợt 3 (30%)",
            qty: 0,
            unitPrice: 1000000000,
            value: 0,
            date: "",
            documentNo: "",
            status: "Chờ duyệt",
            notes: "Đào tạo người dùng cuối đợt 3",
          },
        },
        totalAcceptedQty: 14,
        totalAcceptedUnitPrice: 1000000000,
        totalAcceptedValue: 14000000000,
        remainingQty: 6,
        remainingValue: 6000000000,
      },
    ],
    documents: [
      {
        id: "doc-1",
        fileName: "Bien_ban_nghiem_thu_dot_01_Freshworks_signed.pdf",
        type: "Biên bản nghiệm thu",
        fileSize: "2.4 MB",
        uploadedBy: "Nguyễn Văn A",
        uploadedAt: "15/04/2025 15:30",
        period: "Đợt 1",
      },
      {
        id: "doc-2",
        fileName: "Hoa_don_GTGT_dot_01_0003412.pdf",
        type: "Hóa đơn GTGT",
        fileSize: "1.1 MB",
        uploadedBy: "Nguyễn Văn A",
        uploadedAt: "16/04/2025 09:12",
        period: "Đợt 1",
      },
      {
        id: "doc-3",
        fileName: "Bien_ban_nghiem_thu_dot_02_Freshworks_signed.pdf",
        type: "Biên bản nghiệm thu",
        fileSize: "3.2 MB",
        uploadedBy: "Trần Minh Quang",
        uploadedAt: "20/05/2025 11:45",
        period: "Đợt 2",
      },
      {
        id: "doc-4",
        fileName: "Bang_ke_danh_sach_tai_khoan_active_dot_2.xlsx",
        type: "Bảng kê chi tiết",
        fileSize: "680 KB",
        uploadedBy: "Trần Minh Quang",
        uploadedAt: "20/05/2025 11:50",
        period: "Đợt 2",
      },
    ],
    activities: [
      {
        id: "act-1",
        action: "Tạo hợp đồng nghiệm thu trên hệ thống",
        user: "Nguyễn Văn A",
        timestamp: "10/04/2025 14:00",
        type: "created",
      },
      {
        id: "act-2",
        action: "Nghiệm thu Đợt 1 (30.000.000.000 VNĐ)",
        user: "Nguyễn Văn A",
        timestamp: "15/04/2025 15:30",
        type: "approved",
      },
      {
        id: "act-3",
        action: "Tải lên Hóa đơn GTGT Đợt 1",
        user: "Nguyễn Văn A",
        timestamp: "16/04/2025 09:12",
        type: "uploaded",
      },
      {
        id: "act-4",
        action: "Nghiệm thu Đợt 2 (40.000.000.000 VNĐ)",
        user: "Trần Minh Quang",
        timestamp: "20/05/2025 11:45",
        type: "approved",
      },
    ],
  },
  {
    id: "45.25.VCS-DELL.02",
    contractCode: "45.25.VCS-DELL.02",
    contractName: "Mua sắm máy chủ Rack Dell R760 và Tủ lưu trữ SAN",
    businessPlanId: "142/TTr-TTKDMB",
    businessPlanName: "Kế hoạch nâng cấp trung tâm dữ liệu DC1",
    signDate: "15/04/2025",
    partner: "Công ty TNHH Giải Pháp Công Nghệ Sao Bắc",
    partnerTaxCode: "0107889922",
    partnerAddress: "Tầng 12, Tòa nhà Keangnam Landmark 72, Nam Từ Liêm, Hà Nội",
    representative: "Lê Quốc Trung - Phó Tổng Giám Đốc",
    contractValue: 1520000000,
    acceptedValue: 1520000000,
    remainingValue: 0,
    completionPercent: 100,
    status: "Đã nghiệm thu toàn bộ",
    activePeriods: [
      { id: "period1", name: "Đợt 1 (100%)" },
    ],
    items: [
      {
        id: "item-201",
        no: 1,
        itemName: "Máy chủ Rack Dell PowerEdge R760 (Dual Xeon Gold, 256GB RAM, 8x NVMe)",
        unit: "Bộ",
        contractQty: 4,
        contractUnitPrice: 380000000,
        contractValue: 1520000000,
        periods: {
          period1: {
            periodNo: 1,
            periodName: "Đợt 1 (100%)",
            qty: 4,
            unitPrice: 380000000,
            value: 1520000000,
            date: "20/05/2025",
            documentNo: "BB-NT-DELL-01",
            status: "Đã nghiệm thu",
            executor: "Trần Thị B",
            notes: "Bàn giao đầy đủ 4 server tại Data Center, test tải Pass 100%",
          },
        },
        totalAcceptedQty: 4,
        totalAcceptedUnitPrice: 380000000,
        totalAcceptedValue: 1520000000,
        remainingQty: 0,
        remainingValue: 0,
      },
    ],
    documents: [
      {
        id: "doc-201",
        fileName: "BB_Nghiem_thu_va_ban_giao_May_chu_Dell_R760.pdf",
        type: "Biên bản nghiệm thu",
        fileSize: "4.5 MB",
        uploadedBy: "Trần Thị B",
        uploadedAt: "20/05/2025 16:10",
        period: "Đợt 1",
      },
    ],
    activities: [
      {
        id: "act-201",
        action: "Tạo hợp đồng trên hệ thống",
        user: "Trần Thị B",
        timestamp: "15/04/2025 10:00",
        type: "created",
      },
      {
        id: "act-202",
        action: "Nghiệm thu toàn bộ máy chủ Dell (1.520.000.000 VNĐ)",
        user: "Trần Thị B",
        timestamp: "20/05/2025 16:15",
        type: "approved",
      },
    ],
  },
  {
    id: "18.25.VCS-CADIVI.01",
    contractCode: "18.25.VCS-CADIVI.01",
    contractName: "Cung cấp cáp ngầm trung thế 24kV CADIVI",
    businessPlanId: "144/TTr-TTKDMB",
    businessPlanName: "Kế hoạch nâng cấp mạng lưới điện cao su",
    signDate: "02/05/2025",
    partner: "Công ty CP Thiết bị điện Hà Nội",
    partnerTaxCode: "0102334455",
    partnerAddress: "Số 15 Khuất Duy Tiến, Thanh Xuân, Hà Nội",
    representative: "Vũ Đình Long - Trưởng phòng Kinh doanh",
    contractValue: 1380000000,
    acceptedValue: 690000000,
    remainingValue: 690000000,
    completionPercent: 50,
    status: "Nghiệm thu một phần",
    activePeriods: [
      { id: "period1", name: "Đợt 1 (50%)" },
      { id: "period2", name: "Đợt 2 (50%)" },
    ],
    items: [
      {
        id: "item-301",
        no: 1,
        itemName: "Cáp ngầm trung thế 24kV CADIVI Cu/XLPE/PVC/DSTA/PVC 3x240mm2",
        unit: "Mét",
        contractQty: 1200,
        contractUnitPrice: 1150000,
        contractValue: 1380000000,
        periods: {
          period1: {
            periodNo: 1,
            periodName: "Đợt 1 (50%)",
            qty: 600,
            unitPrice: 1150000,
            value: 690000000,
            date: "18/06/2025",
            documentNo: "BB-NT-CADIVI-01",
            status: "Đã nghiệm thu",
            executor: "Nguyễn Văn A",
            notes: "Giao đợt 1 đủ 600m cáp nguyên cuộn, có CO/CQ nhà sản xuất",
          },
          period2: {
            periodNo: 2,
            periodName: "Đợt 2 (50%)",
            qty: 0,
            unitPrice: 1150000,
            value: 0,
            date: "",
            documentNo: "",
            status: "Chờ duyệt",
            notes: "Dự kiến bàn giao nốt 600m vào tháng 10/2025",
          },
        },
        totalAcceptedQty: 600,
        totalAcceptedUnitPrice: 1150000,
        totalAcceptedValue: 690000000,
        remainingQty: 600,
        remainingValue: 690000000,
      },
    ],
    documents: [
      {
        id: "doc-301",
        fileName: "Bien_ban_giao_nhan_va_nghiem_thu_cap_cadivi_dot1.pdf",
        type: "Biên bản nghiệm thu",
        fileSize: "1.8 MB",
        uploadedBy: "Nguyễn Văn A",
        uploadedAt: "18/06/2025 14:00",
        period: "Đợt 1",
      },
    ],
    activities: [
      {
        id: "act-301",
        action: "Tạo hợp đồng trên hệ thống",
        user: "Nguyễn Văn A",
        timestamp: "02/05/2025 09:00",
        type: "created",
      },
      {
        id: "act-302",
        action: "Nghiệm thu Đợt 1 (690.000.000 VNĐ)",
        user: "Nguyễn Văn A",
        timestamp: "18/06/2025 14:05",
        type: "approved",
      },
    ],
  },
];
