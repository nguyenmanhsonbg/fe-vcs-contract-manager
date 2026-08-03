// Mock dataset & service helper for Quản lý Tờ trình (Proposal Management)

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

export const MOCK_PROPOSAL_CATEGORIES = [
  "Thiết bị văn phòng",
  "Thiết bị CNTT",
  "Phần mềm",
  "Vật tư văn phòng",
  "Thiết bị điện lạnh",
  "Thiết bị an ninh",
  "Dịch vụ",
  "Thiết bị điện",
];

export const MOCK_PROPOSALS: ProposalItem[] = [
  {
    id: "p-041",
    code: "TT-2025-041",
    title: "Mua máy in laser HP M712dn cho phòng hành Chính",
    category: "Thiết bị văn phòng",
    supplier: "Công ty Sao Bắc",
    amount: 172000000,
    createdAt: "18/04/2025",
  },
  {
    id: "p-038",
    code: "TT-2025-038",
    title: "Mua 10 bộ máy tính để bàn cho phòng kế toán",
    category: "Thiết bị CNTT",
    supplier: "Công ty An Phát",
    amount: 280000000,
    createdAt: "16/04/2025",
  },
  {
    id: "p-037",
    code: "TT-2025-037",
    title: "Thuê phần mềm diệt virus bản quyền (3 năm)",
    category: "Phần mềm",
    supplier: "Thiên Long Tech",
    amount: 45000000,
    createdAt: "15/04/2025",
  },
  {
    id: "p-034",
    code: "TT-2025-034",
    title: "Mua máy chiếu Epion EB-X51 cho phòng họp lớn",
    category: "Thiết bị văn phòng",
    supplier: "Hưng Việt",
    amount: 19500000,
    createdAt: "12/04/2025",
  },
  {
    id: "p-033",
    code: "TT-2025-033",
    title: "Mua giấy A4 Double A (10 ream)",
    category: "Vật tư văn phòng",
    supplier: "Minh Quân",
    amount: 4800000,
    createdAt: "11/04/2025",
  },
  {
    id: "p-031",
    code: "TT-2025-031",
    title: "Mua 2 máy điều hòa Daikin 2.5HP",
    category: "Thiết bị điện lạnh",
    supplier: "Điện máy Phú Thịnh",
    amount: 18000000,
    createdAt: "10/04/2025",
  },
  {
    id: "p-029",
    code: "TT-2025-029",
    title: "nâng cấp hệ thống camera văn phòng",
    category: "Thiết bị an ninh",
    supplier: "Công ty Việt Tín",
    amount: 125000000,
    createdAt: "09/04/2025",
  },
  {
    id: "p-026",
    code: "TT-2025-026",
    title: "Mua 05 màn hình 24 inch cho nhân viên",
    category: "Thiết bị CNTT",
    supplier: "Đại Nam JSC",
    amount: 65000000,
    createdAt: "07/04/2025",
  },
  {
    id: "p-024",
    code: "TT-2025-024",
    title: "Dịch vụ vệ sinh văn phòng định kỳ 6 tháng",
    category: "Dịch vụ",
    supplier: "An Phú Construction",
    amount: 36000000,
    createdAt: "05/04/2025",
  },
  {
    id: "p-022",
    code: "TT-2025-022",
    title: "Mua bộ lưu điện (UPS) 3KA",
    category: "Thiết bị điện",
    supplier: "Công ty Phú Thịnh",
    amount: 22500000,
    createdAt: "03/04/2025",
  },
  {
    id: "p-020",
    code: "TT-2025-020",
    title: "Mua mực in Canon 2900 thay thế định kỳ",
    category: "Vật tư văn phòng",
    supplier: "Hồng Hà Paper",
    amount: 8500000,
    createdAt: "01/04/2025",
  },
  {
    id: "p-018",
    code: "TT-2025-018",
    title: "Bảo trì hệ thống máy chủ Server Dell PowerEdge R740",
    category: "Thiết bị CNTT",
    supplier: "CMC Telecom",
    amount: 98000000,
    createdAt: "29/03/2025",
  },
  {
    id: "p-017",
    code: "TT-2025-017",
    title: "Mua thêm 15 bàn làm việc mô đun cho phòng dự án",
    category: "Thiết bị văn phòng",
    supplier: "Nội thất Hòa Phát",
    amount: 52000000,
    createdAt: "26/03/2025",
  },
  {
    id: "p-015",
    code: "TT-2025-015",
    title: "Gia hạn phần mềm quản trị công việc Jira & Confluence",
    category: "Phần mềm",
    supplier: "Atlassian Partner Vietnam",
    amount: 210000000,
    createdAt: "24/03/2025",
  },
  {
    id: "p-014",
    code: "TT-2025-014",
    title: "Mua 03 tủ tài liệu đựng văn bản bảo mật 4 cánh",
    category: "Thiết bị văn phòng",
    supplier: "Nội thất Xuân Hòa",
    amount: 14500000,
    createdAt: "22/03/2025",
  },
  {
    id: "p-012",
    code: "TT-2025-012",
    title: "Thuê đường truyền Internet cáp quang Leased Line 100Mbps",
    category: "Dịch vụ",
    supplier: "Viettel Telecom",
    amount: 144000000,
    createdAt: "19/03/2025",
  },
  {
    id: "p-011",
    code: "TT-2025-011",
    title: "Mua bổ sung 05 ổ cứng SSD 1TB Samsung 980 Pro",
    category: "Thiết bị CNTT",
    supplier: "Phong Vũ Computer",
    amount: 16800000,
    createdAt: "17/03/2025",
  },
  {
    id: "p-009",
    code: "TT-2025-009",
    title: "Thay mới linh kiện hệ thống báo cháy tự động tòa nhà",
    category: "Thiết bị an ninh",
    supplier: "Cơ điện PCCC Hà Nội",
    amount: 88000000,
    createdAt: "14/03/2025",
  },
  {
    id: "p-008",
    code: "TT-2025-008",
    title: "Mua 10 ghế lưới xoay văn phòng ergonomic chống đau lưng",
    category: "Thiết bị văn phòng",
    supplier: "GOWORK Furniture",
    amount: 32000000,
    createdAt: "11/03/2025",
  },
  {
    id: "p-007",
    code: "TT-2025-007",
    title: "Nâng cấp bản quyền phần mềm thiết kế Adobe Creative Cloud",
    category: "Phần mềm",
    supplier: "PAC ISOFT Vietnam",
    amount: 67000000,
    createdAt: "08/03/2025",
  },
  {
    id: "p-006",
    code: "TT-2025-006",
    title: "Bảo dưỡng 12 điều hòa âm trần định kỳ đầu mùa hè",
    category: "Thiết bị điện lạnh",
    supplier: "Điện máy Xanh Services",
    amount: 15600000,
    createdAt: "05/03/2025",
  },
  {
    id: "p-005",
    code: "TT-2025-005",
    title: "Mua 50 hộp bút bi, file càng cua và văn phòng phẩm quý 1",
    category: "Vật tư văn phòng",
    supplier: "Văn phòng phẩm Minh Anh",
    amount: 9200000,
    createdAt: "02/03/2025",
  },
  {
    id: "p-004",
    code: "TT-2025-004",
    title: "Trang bị 02 Switch Cisco Catalyst 2960X 48 ports",
    category: "Thiết bị CNTT",
    supplier: "Sao Thùy Linh IT",
    amount: 112000000,
    createdAt: "27/02/2025",
  },
  {
    id: "p-003",
    code: "TT-2025-003",
    title: "Thuê dịch vụ kiểm toán báo cáo tài chính năm 2024",
    category: "Dịch vụ",
    supplier: "KPMG Vietnam",
    amount: 350000000,
    createdAt: "23/02/2025",
  },
  {
    id: "p-002",
    code: "TT-2025-002",
    title: "Mua hệ thống tổng đài IP Grandstream 50 extension",
    category: "Thiết bị điện",
    supplier: "Viễn thông Á Châu",
    amount: 41000000,
    createdAt: "18/02/2025",
  },
  {
    id: "p-001",
    code: "TT-2025-001",
    title: "Mua máy hủy tài liệu công suất lớn Bonsaii 4D12",
    category: "Thiết bị văn phòng",
    supplier: "Điện máy Siêu Việt",
    amount: 13800000,
    createdAt: "12/02/2025",
  },
  {
    id: "p-000b",
    code: "TT-2025-000",
    title: "Trang bị màn hình ghép Video Wall cho phòng điều hành NOC",
    category: "Thiết bị CNTT",
    supplier: "LG Electronics VN",
    amount: 490000000,
    createdAt: "08/02/2025",
  },
  {
    id: "p-000a",
    code: "TT-2024-199",
    title: "Mua máy đo kiểm chất lượng cáp mạng Fluke DSX-5000",
    category: "Thiết bị CNTT",
    supplier: "Tân Long Tech",
    amount: 230000000,
    createdAt: "01/02/2025",
  },
];

/** Mock Service fetcher kết quả tìm kiếm Tờ trình có bộ lọc & phân trang */
export function fetchProposalSearchResults(
  filters: ProposalFilterOptions = {}
): ProposalPaginatedResponse {
  const page = filters.page || 1;
  const size = filters.size || 10;
  const category = filters.category || "all";
  const valueFilter = filters.valueFilter || "all";
  const searchQuery = (filters.search || "").trim().toLowerCase();

  const filtered = MOCK_PROPOSALS.filter((item) => {
    if (category !== "all" && item.category !== category) {
      return false;
    }
    if (valueFilter === "under50" && item.amount >= 50000000) return false;
    if (valueFilter === "50to100" && (item.amount < 50000000 || item.amount > 100000000)) return false;
    if (valueFilter === "over100" && item.amount <= 100000000) return false;
    if (searchQuery) {
      const matchCode = item.code.toLowerCase().includes(searchQuery);
      const matchTitle = item.title.toLowerCase().includes(searchQuery);
      const matchSupplier = item.supplier.toLowerCase().includes(searchQuery);
      if (!matchCode && !matchTitle && !matchSupplier) return false;
    }
    return true;
  });

  const totalElements = filtered.length;
  const totalPages = Math.ceil(totalElements / size) || 1;
  const startIndex = (page - 1) * size;
  const content = filtered.slice(startIndex, startIndex + size);

  return {
    content,
    page,
    size,
    totalElements,
    totalPages,
  };
}
