export interface BusinessPlanLineItem {
  id: string;
  no: number;
  itemName: string;
  specs: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
  supplier: string;
  notes?: string;
}

export interface BusinessPlanFinancial {
  revenue: number;
  cost: number;
  grossProfit: number;
  profitMargin: number;
  roi: number;
  paybackPeriodMonths: number;
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

export interface BusinessPlanItem {
  id: string; // e.g. "144/TTr-TTKDMB"
  code: string; // e.g. "TT - 2025 - 028"
  title: string; // e.g. "Cung cấp thiết bị điện công nghiệp"
  planDate: string; // e.g. "12/04/2026"
  partner: string; // e.g. "Công ty CP Thiết bị điện Hà Nội"
  executionPeriod: string; // e.g. "01/04/2026 - 31/12/2026"
  totalAmount: number;
  status: "Đã duyệt" | "Chờ phê duyệt" | "Đang thực hiện" | "Lưu nháp" | "Từ chối";
  updatedBy: string;
  updatedAt: string;
  lineItems: BusinessPlanLineItem[];
  financial: BusinessPlanFinancial;
  appendices: BusinessPlanAppendix[];
  documentContent?: string[];
}

export const sampleBusinessPlans: BusinessPlanItem[] = [
  {
    id: "144/TTr-TTKDMB",
    code: "TT - 2025 - 028",
    title: "Cung cấp thiết bị điện công nghiệp",
    planDate: "12/04/2026",
    partner: "Công ty CP Thiết bị điện Hà Nội",
    executionPeriod: "01/04/2026 - 31/12/2026",
    totalAmount: 4850000000,
    status: "Đã duyệt",
    updatedBy: "Nguyễn Văn A",
    updatedAt: "18/04/2025 10:23",
    lineItems: [
      {
        id: "li-1",
        no: 1,
        itemName: "Tủ điện phân phối trung thế RMU 24kV",
        specs: "Tiêu chuẩn IEC 62271-200, dòng định mức 630A, chịu ngắn mạch 20kA/3s",
        unit: "Bộ",
        quantity: 4,
        unitPrice: 450000000,
        totalAmount: 1800000000,
        supplier: "Schneider Electric Việt Nam",
        notes: "Giao hàng tận chân công trình",
      },
      {
        id: "li-2",
        no: 2,
        itemName: "Máy biến áp phân phối 3 pha ngâm dầu 1000kVA",
        specs: "22/0.4kV, tổn hao thấp theo QĐ 62/QĐ-EVN, cuộn dây đồng",
        unit: "Máy",
        quantity: 2,
        unitPrice: 620000000,
        totalAmount: 1240000000,
        supplier: "Công ty CP Thiết bị điện Đông Anh",
        notes: "Bao gồm dầu biến thế & phụ kiện",
      },
      {
        id: "li-3",
        no: 3,
        itemName: "Cáp ngầm trung thế Cu/XLPE/PVC/DSTA/PVC 3x240mm2",
        specs: "Điện áp 12/20(24)kV, ruột đồng ép chặt, cách điện XLPE",
        unit: "Mét",
        quantity: 1200,
        unitPrice: 1150000,
        totalAmount: 1380000000,
        supplier: "Công ty Dây và Cáp điện CADIVI",
        notes: "Kèm biên bản thử nghiệm xuất xưởng",
      },
      {
        id: "li-4",
        no: 4,
        itemName: "Hệ thống tủ tụ bù tự động 400kVAR",
        specs: "Điện áp 415V, 8 cấp điều khiển tự động Mikro, cuộn kháng 7%",
        unit: "Tủ",
        quantity: 2,
        unitPrice: 215000000,
        totalAmount: 430000000,
        supplier: "Công ty CP Kỹ thuật Nam Phát",
        notes: "Tích hợp chống sét lan truyền",
      },
    ],
    financial: {
      revenue: 6200000000,
      cost: 4850000000,
      grossProfit: 1350000000,
      profitMargin: 21.77,
      roi: 27.84,
      paybackPeriodMonths: 8,
      notes: "Hiệu quả tài chính đạt mục tiêu chiến lược năm 2026. Dòng tiền thanh toán theo 3 đợt theo mốc nghiệm thu kỹ thuật.",
    },
    appendices: [
      {
        id: "app-1",
        name: "Phụ lục 01: Giá bán theo Hợp đồng",
        type: "PDF",
        size: "2.5MB",
        date: "18/04/2025",
      },
      {
        id: "app-2",
        name: "Phụ lục 02: Chi phí mua sắm",
        type: "PDF",
        size: "2.5MB",
        date: "18/04/2025",
      },
    ],
  },
  {
    id: "142/TTr-TTKDMB",
    code: "TT - 2025 - 025",
    title: "Mua sắm máy chủ và thiết bị lưu trữ SAN",
    planDate: "05/04/2026",
    partner: "Công ty TNHH Giải Pháp Công Nghệ Sao Bắc",
    executionPeriod: "15/04/2026 - 30/10/2026",
    totalAmount: 3200000000,
    status: "Đang thực hiện",
    updatedBy: "Trần Thị B",
    updatedAt: "15/04/2025 14:10",
    lineItems: [
      {
        id: "li-201",
        no: 1,
        itemName: "Máy chủ Rack 2U Dell PowerEdge R760",
        specs: "2x Intel Xeon Gold 6430, 256GB RAM, 8x 1.92TB NVMe SSD",
        unit: "Bộ",
        quantity: 4,
        unitPrice: 380000000,
        totalAmount: 1520000000,
        supplier: "Dell Technologies",
      },
      {
        id: "li-202",
        no: 2,
        itemName: "Hệ thống lưu trữ All-Flash SAN Storage 100TB",
        specs: "Dual controller, 100TB Raw NVMe, 4x 32Gb FC ports",
        unit: "Hệ thống",
        quantity: 1,
        unitPrice: 1680000000,
        totalAmount: 1680000000,
        supplier: "HPE Vietnam",
      },
    ],
    financial: {
      revenue: 4100000000,
      cost: 3200000000,
      grossProfit: 900000000,
      profitMargin: 21.95,
      roi: 28.12,
      paybackPeriodMonths: 6,
    },
    appendices: [
      {
        id: "app-201",
        name: "Phụ lục 01: Bảng thông số kỹ thuật chi tiết",
        type: "PDF",
        size: "3.1MB",
        date: "15/04/2025",
      },
    ],
  },
  {
    id: "139/TTr-TTKDMB",
    code: "TT - 2025 - 020",
    title: "Triển khai hệ thống camera giám sát an ninh",
    planDate: "28/03/2026",
    partner: "Tập đoàn Công nghệ Viettel",
    executionPeriod: "01/05/2026 - 31/12/2026",
    totalAmount: 1850000000,
    status: "Chờ phê duyệt",
    updatedBy: "Lê Văn C",
    updatedAt: "10/04/2025 09:45",
    lineItems: [
      {
        id: "li-301",
        no: 1,
        itemName: "Camera IP AI nhận diện khuôn mặt 4MP",
        specs: "Độ phân giải 4MP, chuẩn chống nước IP67, AI Face Recognition",
        unit: "Chiếc",
        quantity: 50,
        unitPrice: 15000000,
        totalAmount: 750000000,
        supplier: "Hikvision",
      },
      {
        id: "li-302",
        no: 2,
        itemName: "Đầu ghi hình mạng NVR 64 kênh chuyên dụng",
        specs: "Hỗ trợ 8 ổ cứng SATA, băng thông vào 384Mbps, AI Analytics",
        unit: "Bộ",
        quantity: 2,
        unitPrice: 120000000,
        totalAmount: 240000000,
        supplier: "Hikvision",
      },
      {
        id: "li-303",
        no: 3,
        itemName: "Dịch vụ lắp đặt, cấu hình và kéo cáp quang",
        specs: "Bao gồm switch POE, dây nhảy, hộp nối và nhân công lắp đặt",
        unit: "Gói",
        quantity: 1,
        unitPrice: 860000000,
        totalAmount: 860000000,
        supplier: "Viettel Solutions",
      },
    ],
    financial: {
      revenue: 2400000000,
      cost: 1850000000,
      grossProfit: 550000000,
      profitMargin: 22.92,
      roi: 29.73,
      paybackPeriodMonths: 7,
    },
    appendices: [
      {
        id: "app-301",
        name: "Phụ lục 01: Sơ đồ lắp đặt camera",
        type: "PDF",
        size: "4.8MB",
        date: "10/04/2025",
      },
    ],
  },
  {
    id: "135/TTr-TTKDMB",
    code: "TT - 2025 - 015",
    title: "Dịch vụ bảo trì và nâng cấp bản quyền phần mềm Oracle",
    planDate: "15/03/2026",
    partner: "Công ty CP Phần mềm CMC",
    executionPeriod: "01/04/2026 - 31/03/2027",
    totalAmount: 920000000,
    status: "Đã duyệt",
    updatedBy: "Nguyễn Văn A",
    updatedAt: "02/04/2025 16:30",
    lineItems: [
      {
        id: "li-401",
        no: 1,
        itemName: "Bản quyền Oracle Database Enterprise Edition (1 năm)",
        specs: "License Support & Software Update 2026-2027",
        unit: "Core",
        quantity: 4,
        unitPrice: 180000000,
        totalAmount: 720000000,
        supplier: "Oracle Vietnam",
      },
      {
        id: "li-402",
        no: 2,
        itemName: "Dịch vụ chuyên gia hỗ trợ kỹ thuật On-site 24/7",
        specs: "Thời gian đáp ứng sự cố < 2h, định kỳ bảo trì hàng tháng",
        unit: "Gói",
        quantity: 1,
        unitPrice: 200000000,
        totalAmount: 200000000,
        supplier: "CMC Telecom",
      },
    ],
    financial: {
      revenue: 1200000000,
      cost: 920000000,
      grossProfit: 280000000,
      profitMargin: 23.33,
      roi: 30.43,
      paybackPeriodMonths: 4,
    },
    appendices: [
      {
        id: "app-401",
        name: "Phụ lục 01: Cam kết SLA dịch vụ bảo trì",
        type: "PDF",
        size: "1.4MB",
        date: "02/04/2025",
      },
    ],
  },
];

export interface AcceptanceItem {
  id: string;
  acceptanceNumber: string;
  businessPlanId: string;
  contractNumber: string;
  title: string;
  partner: string;
  acceptedDate: string;
  acceptedValue: number;
  plannedValue: number;
  deviation: number;
  status: "Đã nghiệm thu" | "Chờ đối soát" | "Cần điều chỉnh";
  acceptedBy: string;
}

export const sampleAcceptances: AcceptanceItem[] = [
  {
    id: "acc-1",
    acceptanceNumber: "NT-2026-001",
    businessPlanId: "144/TTr-TTKDMB",
    contractNumber: "HD-2025-028",
    title: "Nghiệm thu đợt 1: Bàn giao Tủ điện RMU 24kV",
    partner: "Công ty CP Thiết bị điện Hà Nội",
    acceptedDate: "15/05/2026",
    acceptedValue: 1800000000,
    plannedValue: 1800000000,
    deviation: 0,
    status: "Đã nghiệm thu",
    acceptedBy: "Nguyễn Văn A",
  },
  {
    id: "acc-2",
    acceptanceNumber: "NT-2026-002",
    businessPlanId: "142/TTr-TTKDMB",
    contractNumber: "HD-2025-025",
    title: "Nghiệm thu toàn phần: Hệ thống máy chủ Dell R760",
    partner: "Công ty TNHH Giải Pháp Công Nghệ Sao Bắc",
    acceptedDate: "20/06/2026",
    acceptedValue: 3200000000,
    plannedValue: 3200000000,
    deviation: 0,
    status: "Đã nghiệm thu",
    acceptedBy: "Trần Thị B",
  },
  {
    id: "acc-3",
    acceptanceNumber: "NT-2026-003",
    businessPlanId: "135/TTr-TTKDMB",
    contractNumber: "HD-2025-015",
    title: "Nghiệm thu quý 1: Dịch vụ bảo trì Oracle",
    partner: "Công ty CP Phần mềm CMC",
    acceptedDate: "30/06/2026",
    acceptedValue: 230000000,
    plannedValue: 230000000,
    deviation: 0,
    status: "Đã nghiệm thu",
    acceptedBy: "Nguyễn Văn A",
  },
];

export interface ReconciliationItem {
  id: string;
  businessPlanId: string;
  businessPlanTitle: string;
  partner: string;
  planBudget: number;
  actualAccepted: number;
  varianceAmount: number;
  variancePercent: number;
  completionRate: number;
  riskLevel: "Thấp" | "Trung bình" | "Cao";
  status: "Khớp đúng" | "Cần rà soát" | "Vượt định mức";
}

export const sampleReconciliations: ReconciliationItem[] = [
  {
    id: "rec-1",
    businessPlanId: "144/TTr-TTKDMB",
    businessPlanTitle: "Cung cấp thiết bị điện công nghiệp",
    partner: "Công ty CP Thiết bị điện Hà Nội",
    planBudget: 4850000000,
    actualAccepted: 1800000000,
    varianceAmount: 0,
    variancePercent: 0,
    completionRate: 37.11,
    riskLevel: "Thấp",
    status: "Khớp đúng",
  },
  {
    id: "rec-2",
    businessPlanId: "142/TTr-TTKDMB",
    businessPlanTitle: "Mua sắm máy chủ và thiết bị lưu trữ SAN",
    partner: "Công ty TNHH Giải Pháp Công Nghệ Sao Bắc",
    planBudget: 3200000000,
    actualAccepted: 3200000000,
    varianceAmount: 0,
    variancePercent: 0,
    completionRate: 100,
    riskLevel: "Thấp",
    status: "Khớp đúng",
  },
  {
    id: "rec-3",
    businessPlanId: "135/TTr-TTKDMB",
    businessPlanTitle: "Dịch vụ bảo trì và nâng cấp bản quyền phần mềm Oracle",
    partner: "Công ty CP Phần mềm CMC",
    planBudget: 920000000,
    actualAccepted: 230000000,
    varianceAmount: 0,
    variancePercent: 0,
    completionRate: 25.0,
    riskLevel: "Thấp",
    status: "Khớp đúng",
  },
];
