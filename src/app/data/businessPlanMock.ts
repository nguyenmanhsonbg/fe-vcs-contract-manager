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

export interface BusinessPlanItem {
  id: string; // e.g. "144/TTr-TTKDMB"
  code: string; // e.g. "TT - 2025 - 028"
  title: string; // e.g. "Cung cấp thiết bị điện công nghiệp"
  planDate: string; // e.g. "12/04/2026"
  partner: string; // e.g. "Công ty CP Thiết bị điện Hà Nội"
  executionPeriod: string; // e.g. "01/04/2026 - 31/12/2026"
  totalAmount: number;
  totalAmountWithVat: number;
  procurementCost?: number;
  acceptedAmount?: number;
  remainingAmount?: number;
  amountInWords?: string;
  status: "Đã duyệt" | "Chờ phê duyệt" | "Đang thực hiện" | "Đã hoàn thành" | "Tạm dừng" | "Lưu nháp" | "Từ chối";
  createdBy: string;
  updatedBy: string;
  updatedAt: string;
  lineItems: BusinessPlanLineItem[];
  financial: BusinessPlanFinancial;
  appendices: BusinessPlanAppendix[];
  activities: BusinessPlanActivity[];
  documentContent?: {
    approverTitle: string;
    approverName: string;
    proposingUnit: string;
    proposalPurpose: string;
    legalBasis: string[];
    contentOverview: string;
  };
}

export interface BusinessPlanFilterOptions {
  search?: string;
  status?: string;
  dateRange?: string;
  page?: number;
  size?: number;
}

export const sampleBusinessPlans: BusinessPlanItem[] = [
  {
    id: "144/TTr-TTKDMB",
    code: "TT - 2025 - 028",
    title: "Cung cấp thiết bị điện công nghiệp",
    planDate: "12/04/2026",
    partner: "Công ty CP Thiết bị điện Hà Nội",
    executionPeriod: "01/04/2026 - 31/12/2026",
    totalAmount: 12201280000,
    totalAmountWithVat: 13093325440,
    amountInWords: "Mười ba tỷ không trăm chín mươi ba triệu ba trăm hai mươi lăm nghìn bốn trăm bốn mươi đồng chẵn",
    status: "Đã duyệt",
    createdBy: "Nguyễn Văn A",
    updatedBy: "Nguyễn Văn A",
    updatedAt: "18/04/2025 10:23",
    lineItems: [
      {
        id: "li-101",
        no: 1,
        group: "I",
        groupName: "Hạng mục 1",
        itemName: "Tủ điện phân phối trung thế RMU 24kV",
        specs: "Tiêu chuẩn IEC 62271-200, dòng định mức 630A, chịu ngắn mạch 20kA/3s",
        unit: "Chiếc",
        quantity: 1,
        unitPrice: 128766000,
        totalAmount: 128766000,
        vatRate: "8%",
        vatAmount: 10301280,
        totalAmountWithVat: 139067280,
        supplier: "Schneider Electric Việt Nam",
      },
      {
        id: "li-102",
        no: 2,
        group: "I",
        groupName: "Hạng mục 1",
        itemName: "Máy biến áp phân phối 3 pha ngâm dầu 1000kVA",
        specs: "22/0.4kV, tổn hao thấp theo QĐ 62/QĐ-EVN, cuộn dây đồng",
        unit: "Chiếc",
        quantity: 1,
        unitPrice: 85668000,
        totalAmount: 128766000,
        vatRate: "8%",
        vatAmount: 10301280,
        totalAmountWithVat: 139067280,
        supplier: "Công ty CP Thiết bị điện Đông Anh",
      },
      {
        id: "li-103",
        no: 3,
        group: "I",
        groupName: "Hạng mục 1",
        itemName: "Cáp ngầm trung thế Cu/XLPE/PVC/DSTA/PVC 3x240mm2",
        specs: "Điện áp 12/20(24)kV, ruột đồng ép chặt, cách điện XLPE",
        unit: "Gói",
        quantity: 1,
        unitPrice: 20206000,
        totalAmount: 20206000,
        vatRate: "KCT",
        vatAmount: 0,
        totalAmountWithVat: 20206000,
        supplier: "Công ty Dây và Cáp điện CADIVI",
      },
      {
        id: "li-201",
        no: 1,
        group: "II",
        groupName: "Hạng mục 2",
        itemName: "Hệ thống tủ tụ bù tự động 400kVAR",
        specs: "Điện áp 415V, 8 cấp điều khiển tự động Mikro, cuộn kháng 7%",
        unit: "Chiếc",
        quantity: 1,
        unitPrice: 128766000,
        totalAmount: 128766000,
        vatRate: "8%",
        vatAmount: 10301280,
        totalAmountWithVat: 139067280,
        supplier: "Công ty CP Kỹ thuật Nam Phát",
      },
      {
        id: "li-202",
        no: 2,
        group: "II",
        groupName: "Hạng mục 2",
        itemName: "Bộ chuyển đổi nguồn tự động ATS 630A",
        specs: "4 cực, dòng định mức 630A, điều khiển điện tử",
        unit: "Chiếc",
        quantity: 1,
        unitPrice: 85668000,
        totalAmount: 128766000,
        vatRate: "8%",
        vatAmount: 10301280,
        totalAmountWithVat: 139067280,
        supplier: "ABB Việt Nam",
      },
      {
        id: "li-203",
        no: 3,
        group: "II",
        groupName: "Hạng mục 2",
        itemName: "Dịch vụ lắp đặt và thí nghiệm hiệu chỉnh thiết bị điện",
        specs: "Thí nghiệm cao áp, đo điện trở cách điện, đóng điện nghiệm thu",
        unit: "Gói",
        quantity: 1,
        unitPrice: 20206000,
        totalAmount: 20206000,
        vatRate: "KCT",
        vatAmount: 0,
        totalAmountWithVat: 20206000,
        supplier: "Công ty CP Kỹ thuật Nam Phát",
      },
    ],
    financial: {
      revenue: 17022879000,
      revenueVat: 1139875840,
      revenueWithVat: 18162754840,
      cost: 16955279879,
      costVat: 1203344480,
      costWithVat: 18162754840,
      procurementCost: 16938257000,
      procurementCostVat: 1203344480,
      procurementCostWithVat: 18141601480,
      generalAdminCost: 17022879,
      grossProfit: 67599121,
      corporateTax: 13519824,
      netProfit: 54079297,
      profitOnCostRatio: 0.32,
      profitOnRevenueRatio: 0.32,
      notes: "Tỷ lệ lợi nhuận / chi phí vốn đạt 0,32% đảm bảo hiệu quả kinh doanh theo quy định của Công ty.",
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
    activities: [
      {
        id: "act-1",
        title: "Tạo phương án kinh doanh mới",
        user: "Nguyễn Văn A",
        time: "12/04/2026 08:30",
        type: "created",
      },
      {
        id: "act-2",
        title: "Đính kèm Phụ lục 01 và Phụ lục 02",
        user: "Nguyễn Văn A",
        time: "15/04/2026 14:20",
        type: "updated",
      },
      {
        id: "act-3",
        title: "Phê duyệt phương án kinh doanh bởi Ban Giám đốc",
        user: "Trần Minh Quang",
        time: "18/04/2026 10:23",
        type: "approved",
      },
    ],
    documentContent: {
      approverTitle: "TỔNG GIÁM ĐỐC",
      approverName: "TRẦN MINH QUANG",
      proposingUnit: "TRUNG TÂM KINH DOANH MIỀN BẮC",
      proposalPurpose: "Cung cấp thiết bị điện công nghiệp phục vụ dự án",
      legalBasis: [
        "Quy chế quản lý đầu tư, mua sắm và ký kết hợp đồng số 45/QC-VCS;",
        "Kế hoạch sản xuất kinh doanh năm 2026 được Ban Tổng Giám đốc phê duyệt;",
        "Nhu cầu cung cấp vật tư thiết bị điện cho đối tác Công ty CP Thiết bị điện Hà Nội.",
      ],
      contentOverview: "Kính trình Tổng Giám đốc xem xét phê duyệt Phương án kinh doanh cung cấp thiết bị điện công nghiệp với tổng giá trị dự kiến 13.093.325.440 VND.",
    },
  },
  {
    id: "142/TTr-TTKDMB",
    code: "TT - 2025 - 025",
    title: "Mua sắm máy chủ và thiết bị lưu trữ SAN",
    planDate: "05/04/2026",
    partner: "Công ty TNHH Giải Pháp Công Nghệ Sao Bắc",
    executionPeriod: "15/04/2026 - 30/10/2026",
    totalAmount: 3200000000,
    totalAmountWithVat: 3520000000,
    amountInWords: "Ba tỷ năm trăm hai mươi triệu đồng chẵn",
    status: "Đang thực hiện",
    createdBy: "Trần Thị B",
    updatedBy: "Trần Thị B",
    updatedAt: "15/04/2025 14:10",
    lineItems: [
      {
        id: "li-201",
        no: 1,
        group: "I",
        groupName: "Hệ thống máy chủ",
        itemName: "Máy chủ Rack 2U Dell PowerEdge R760",
        specs: "2x Intel Xeon Gold 6430, 256GB RAM, 8x 1.92TB NVMe SSD",
        unit: "Bộ",
        quantity: 4,
        unitPrice: 380000000,
        totalAmount: 1520000000,
        vatRate: "10%",
        vatAmount: 152000000,
        totalAmountWithVat: 1672000000,
        supplier: "Dell Technologies",
      },
      {
        id: "li-202",
        no: 2,
        group: "I",
        groupName: "Hệ thống máy chủ",
        itemName: "Hệ thống lưu trữ All-Flash SAN Storage 100TB",
        specs: "Dual controller, 100TB Raw NVMe, 4x 32Gb FC ports",
        unit: "Hệ thống",
        quantity: 1,
        unitPrice: 1680000000,
        totalAmount: 1680000000,
        vatRate: "10%",
        vatAmount: 168000000,
        totalAmountWithVat: 1848000000,
        supplier: "HPE Vietnam",
      },
    ],
    financial: {
      revenue: 4100000000,
      revenueVat: 410000000,
      revenueWithVat: 4510000000,
      cost: 3200000000,
      costVat: 320000000,
      costWithVat: 3520000000,
      procurementCost: 3200000000,
      procurementCostVat: 320000000,
      procurementCostWithVat: 3520000000,
      generalAdminCost: 4100000,
      grossProfit: 895900000,
      corporateTax: 179180000,
      netProfit: 716720000,
      profitOnCostRatio: 22.4,
      profitOnRevenueRatio: 21.85,
      notes: "Tỷ suất lợi nhuận ròng đạt 22.4%, dòng tiền thu hồi nhanh trong vòng 6 tháng.",
    },
    appendices: [
      {
        id: "app-201",
        name: "Phụ lục 01: Bảng thông số kỹ thuật chi tiết",
        type: "PDF",
        size: "3.1MB",
        date: "15/04/2025",
      },
      {
        id: "app-202",
        name: "Phụ lục 02: Báo giá cạnh tranh 3 nhà cung cấp",
        type: "PDF",
        size: "4.2MB",
        date: "15/04/2025",
      },
    ],
    activities: [
      {
        id: "act-201",
        title: "Tạo phương án kinh doanh máy chủ SAN",
        user: "Trần Thị B",
        time: "05/04/2026 09:15",
        type: "created",
      },
      {
        id: "act-202",
        title: "Chuyển trạng thái sang Đang thực hiện",
        user: "Trần Thị B",
        time: "15/04/2026 14:10",
        type: "updated",
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
    totalAmountWithVat: 2035000000,
    amountInWords: "Hai tỷ không trăm ba mươi lăm triệu đồng chẵn",
    status: "Chờ phê duyệt",
    createdBy: "Lê Văn C",
    updatedBy: "Lê Văn C",
    updatedAt: "10/04/2025 09:45",
    lineItems: [
      {
        id: "li-301",
        no: 1,
        group: "I",
        groupName: "Thiết bị Camera",
        itemName: "Camera IP AI nhận diện khuôn mặt 4MP",
        specs: "Độ phân giải 4MP, chuẩn chống nước IP67, AI Face Recognition",
        unit: "Chiếc",
        quantity: 50,
        unitPrice: 15000000,
        totalAmount: 750000000,
        vatRate: "10%",
        vatAmount: 75000000,
        totalAmountWithVat: 825000000,
        supplier: "Hikvision",
      },
      {
        id: "li-302",
        no: 2,
        group: "I",
        groupName: "Thiết bị Camera",
        itemName: "Đầu ghi hình mạng NVR 64 kênh chuyên dụng",
        specs: "Hỗ trợ 8 ổ cứng SATA, băng thông vào 384Mbps, AI Analytics",
        unit: "Bộ",
        quantity: 2,
        unitPrice: 120000000,
        totalAmount: 240000000,
        vatRate: "10%",
        vatAmount: 24000000,
        totalAmountWithVat: 264000000,
        supplier: "Hikvision",
      },
      {
        id: "li-303",
        no: 3,
        group: "II",
        groupName: "Dịch vụ lắp đặt",
        itemName: "Dịch vụ lắp đặt, cấu hình và kéo cáp quang",
        specs: "Bao gồm switch POE, dây nhảy, hộp nối và nhân công lắp đặt",
        unit: "Gói",
        quantity: 1,
        unitPrice: 860000000,
        totalAmount: 860000000,
        vatRate: "10%",
        vatAmount: 86000000,
        totalAmountWithVat: 946000000,
        supplier: "Viettel Solutions",
      },
    ],
    financial: {
      revenue: 2400000000,
      revenueVat: 240000000,
      revenueWithVat: 2640000000,
      cost: 1850000000,
      costVat: 185000000,
      costWithVat: 2035000000,
      procurementCost: 1850000000,
      procurementCostVat: 185000000,
      procurementCostWithVat: 2035000000,
      generalAdminCost: 2400000,
      grossProfit: 547600000,
      corporateTax: 109520000,
      netProfit: 438080000,
      profitOnCostRatio: 23.68,
      profitOnRevenueRatio: 22.82,
      notes: "Hiệu quả dự án vượt ngưỡng yêu cầu 15%, đảm bảo tối ưu chi phí hạ tầng.",
    },
    appendices: [
      {
        id: "app-301",
        name: "Phụ lục 01: Sơ đồ bố trí camera và tuyến cáp",
        type: "PDF",
        size: "4.8MB",
        date: "10/04/2025",
      },
    ],
    activities: [
      {
        id: "act-301",
        title: "Trình duyệt phương án camera an ninh",
        user: "Lê Văn C",
        time: "28/03/2026 11:00",
        type: "created",
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
    totalAmountWithVat: 1012000000,
    amountInWords: "Một tỷ không trăm mười hai triệu đồng chẵn",
    status: "Đã duyệt",
    createdBy: "Nguyễn Văn A",
    updatedBy: "Nguyễn Văn A",
    updatedAt: "02/04/2025 16:30",
    lineItems: [
      {
        id: "li-401",
        no: 1,
        group: "I",
        groupName: "Bản quyền phần mềm",
        itemName: "Bản quyền Oracle Database Enterprise Edition (1 năm)",
        specs: "License Support & Software Update 2026-2027",
        unit: "Core",
        quantity: 4,
        unitPrice: 180000000,
        totalAmount: 720000000,
        vatRate: "10%",
        vatAmount: 72000000,
        totalAmountWithVat: 792000000,
        supplier: "Oracle Vietnam",
      },
      {
        id: "li-402",
        no: 2,
        group: "II",
        groupName: "Dịch vụ chuyên gia",
        itemName: "Dịch vụ chuyên gia hỗ trợ kỹ thuật On-site 24/7",
        specs: "Thời gian đáp ứng sự cố < 2h, định kỳ bảo trì hàng tháng",
        unit: "Gói",
        quantity: 1,
        unitPrice: 200000000,
        totalAmount: 200000000,
        vatRate: "10%",
        vatAmount: 20000000,
        totalAmountWithVat: 220000000,
        supplier: "CMC Telecom",
      },
    ],
    financial: {
      revenue: 1200000000,
      revenueVat: 120000000,
      revenueWithVat: 1320000000,
      cost: 920000000,
      costVat: 92000000,
      costWithVat: 1012000000,
      procurementCost: 920000000,
      procurementCostVat: 92000000,
      procurementCostWithVat: 1012000000,
      generalAdminCost: 1200000,
      grossProfit: 278800000,
      corporateTax: 55760000,
      netProfit: 223040000,
      profitOnCostRatio: 24.24,
      profitOnRevenueRatio: 23.23,
      notes: "Đạt chuẩn an toàn dịch vụ định kỳ và nâng cao hiệu năng cơ sở dữ liệu.",
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
    activities: [
      {
        id: "act-401",
        title: "Tạo tờ trình bảo trì bản quyền Oracle",
        user: "Nguyễn Văn A",
        time: "15/03/2026 10:00",
        type: "created",
      },
      {
        id: "act-402",
        title: "Phê duyệt tờ trình",
        user: "Trần Minh Quang",
        time: "02/04/2026 16:30",
        type: "approved",
      },
    ],
  },
  {
    id: "130/TTr-TTKDMB",
    code: "TT - 2025 - 010",
    title: "Cung cấp hạ tầng mạng Cisco Catalyst cho Chi nhánh Đà Nẵng",
    planDate: "01/03/2026",
    partner: "Công ty Cổ phần Công nghệ NetNam",
    executionPeriod: "15/03/2026 - 15/09/2026",
    totalAmount: 1450000000,
    totalAmountWithVat: 1595000000,
    amountInWords: "Một tỷ năm trăm chín mươi lăm triệu đồng chẵn",
    status: "Lưu nháp",
    createdBy: "Hoàng Văn D",
    updatedBy: "Hoàng Văn D",
    updatedAt: "01/03/2026 17:00",
    lineItems: [
      {
        id: "li-501",
        no: 1,
        group: "I",
        groupName: "Thiết bị chuyển mạch",
        itemName: "Switch Cisco Catalyst C9300-48P-A",
        specs: "48 port PoE+, Network Advantage, 4x 10G uplink",
        unit: "Bộ",
        quantity: 4,
        unitPrice: 220000000,
        totalAmount: 880000000,
        vatRate: "10%",
        vatAmount: 88000000,
        totalAmountWithVat: 968000000,
        supplier: "NetNam",
      },
      {
        id: "li-502",
        no: 2,
        group: "I",
        groupName: "Thiết bị chuyển mạch",
        itemName: "Bộ phát sóng không dây Cisco Catalyst 9120AXI",
        specs: "Wi-Fi 6 (802.11ax), Dual-band, MU-MIMO 4x4",
        unit: "Chiếc",
        quantity: 15,
        unitPrice: 38000000,
        totalAmount: 570000000,
        vatRate: "10%",
        vatAmount: 57000000,
        totalAmountWithVat: 627000000,
        supplier: "NetNam",
      },
    ],
    financial: {
      revenue: 1900000000,
      revenueVat: 190000000,
      revenueWithVat: 2090000000,
      cost: 1450000000,
      costVat: 145000000,
      costWithVat: 1595000000,
      procurementCost: 1450000000,
      procurementCostVat: 145000000,
      procurementCostWithVat: 1595000000,
      generalAdminCost: 1900000,
      grossProfit: 448100000,
      corporateTax: 89620000,
      netProfit: 358480000,
      profitOnCostRatio: 24.72,
      profitOnRevenueRatio: 23.58,
    },
    appendices: [],
    activities: [
      {
        id: "act-501",
        title: "Tạo bản nháp phương án kinh doanh",
        user: "Hoàng Văn D",
        time: "01/03/2026 17:00",
        type: "created",
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
