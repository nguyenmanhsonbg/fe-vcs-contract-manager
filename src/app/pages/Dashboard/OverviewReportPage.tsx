import { useState } from "react";
import {
  Calendar,
  DollarSign,
  FileText,
  Package,
  ClipboardList,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Upload,
  Pencil,
  Database,
  Search,
  ChevronDown,
  Filter,
} from "lucide-react";
import { Pagination } from "../../components/common/Pagination";
import { StatusBadge } from "../../components/common/StatusBadge";
import { PageHeader } from "../../components/common/PageHeader";
import { StatCard } from "../../components/common/StatCard";
import { SelectFilter } from "../../components/common/SelectFilter";
import { SearchInput } from "../../components/common/SearchInput";
import { TaskDetailModal, TaskDetailData } from "../DocumentDigitization/components/TaskDetailModal";

const KPI_CARDS = [
  {
    id: "contract-value",
    title: "Tổng giá trị hợp đồng của tôi",
    value: "48.6 tỷ VNĐ",
    trend: "↑ 12,4%",
    trendLabel: "so với 01/03 - 31/03/2025",
    icon: DollarSign,
    iconBg: "bg-red-50 text-red-500",
  },
  {
    id: "digitized-docs",
    title: "Tài liệu số hóa thành công",
    value: "126",
    trend: "↑ 18,2%",
    trendLabel: "so với 01/03 - 31/03/2025",
    icon: FileText,
    iconBg: "bg-blue-50 text-blue-500",
  },
  {
    id: "registered-bids",
    title: "Gói thầu tôi đã đăng ký",
    value: (
      <span className="text-emerald-600">
        Chuẩn: 8 <span className="text-slate-300 font-normal">|</span> Rút gọn: 11
      </span>
    ),
    trend: "↑ 18,2%",
    trendLabel: "so với 01/03 - 31/03/2025",
    icon: Package,
    iconBg: "bg-emerald-50 text-emerald-500",
    bottomBorder: "border-b-2 border-emerald-500",
  },
  {
    id: "tasks-to-do",
    title: "Việc cần làm",
    value: <span className="text-amber-500 font-semibold">14</span>,
    alertText: "3 HSDT cảnh báo đỏ",
    icon: ClipboardList,
    iconBg: "bg-amber-50 text-amber-500",
  },
];

const VENDOR_BAR_DATA = [
  { name: "Công ty An Phát", value: 14.2 },
  { name: "Thiên Long Tech", value: 8.5 },
  { name: "Hòa Bình MEP", value: 6.8 },
  { name: "Minh Quân", value: 6.0 },
  { name: "Hưng Việt", value: 5.2 },
  { name: "Sao Bắc", value: 3.5 },
];

const PRICE_TREND_DATA = [
  { date: "01/04", value: 24.5 },
  { date: "05/04", value: 26.8 },
  { date: "10/04", value: 29.2 },
  { date: "15/04", value: 31.0 },
  { date: "20/04", value: 30.1 },
  { date: "25/04", value: 32.4 },
  { date: "28/04", value: 33.6 },
  { date: "30/04", value: 34.2 },
];

const TASKS_DATA = [
  { id: "TT-2025-041", type: "Gói thầu", vendor: "Công ty An Phát", status: "Chờ đối soát", value: "3,250,000,000", dueDate: "02/05/2026" },
  { id: "GT-2025-018", type: "Gói thầu", vendor: "Thiên Long Tech", status: "Đang đánh giá", value: "5,800,000,000", dueDate: "03/08/2026" },
  { id: "HD-2025-022", type: "Hợp đồng", vendor: "Hoà Bình MEP", status: "Chờ ký kết", value: "7,600,000,000", dueDate: "05/05/2026" },
  { id: "HD-2025-019", type: "Hợp đồng", vendor: "Minh Quân", status: "Chờ đối soát", value: "2,150,000,000", dueDate: "06/05/2026" },
  { id: "TT-2025-038", type: "Gói thầu", vendor: "Hưng Việt", status: "Cảnh báo", value: "4,900,000,000", dueDate: "07/02/2026" },
  { id: "HD-2025-017", type: "Hợp đồng", vendor: "Sao Bắc", status: "Chờ ký kết", value: "1,850,000,000", dueDate: "08/05/2026" },
  { id: "GT-2025-011", type: "Gói thầu", vendor: "Phú Thịnh", status: "Đang đánh giá", value: "2,400,000,000", dueDate: "09/05/2026" },
  { id: "HD-2025-013", type: "Hợp đồng", vendor: "Việt Tín", status: "Chờ đối soát", value: "3,100,000,000", dueDate: "10/05/2026" },
  { id: "TT-2025-029", type: "Gói thầu", vendor: "Đại Nam JSC", status: "Đang đánh giá", value: "6,250,000,000", dueDate: "11/05/2026" },
  { id: "HD-2025-010", type: "Hợp đồng", vendor: "An Phú Construction", status: "Chờ ký kết", value: "3,350,000,000", dueDate: "12/05/2026" },
];

const RECENT_ACTIVITIES = [
  {
    id: "act-1",
    time: "10:32",
    title: "Hợp đồng HD-2025-022 đã được số hóa OCR thành công",
    icon: FileText,
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "act-2",
    time: "10:15",
    title: "AI Matching hoàn tất cho gói thầu GT-2025-018",
    icon: Cpu,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    id: "act-3",
    time: "09:58",
    title: "Gói thầu TT-2025-041 đã chuyển sang bước Đối soát",
    icon: CheckCircle2,
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "act-4",
    time: "09:22",
    title: "Đã tải lên 5 tài liệu cho gói thầu GT-2025-011",
    icon: Upload,
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    id: "act-5",
    time: "08:45",
    title: "Hợp đồng HD-2025-017 đã được chuyển sang bước Ký kết",
    icon: Pencil,
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "act-6",
    time: "08:12",
    title: "HSDT của nhà thầu Minh Quân trong gói thầu TT-2025-038 cảnh báo đỏ",
    icon: AlertTriangle,
    iconBg: "bg-rose-100 text-rose-600",
  },
  {
    id: "act-7",
    time: "07:50",
    title: "Dữ liệu nhà thầu Sao Bắc đã được cập nhật thành công",
    icon: Database,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    id: "act-8",
    time: "07:28",
    title: 'Tìm kiếm tài liệu "Cáp mạng Cat6A" hoàn tất',
    icon: Search,
    iconBg: "bg-purple-100 text-purple-600",
  },
];

export function OverviewReportPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedTask, setSelectedTask] = useState<TaskDetailData | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  function handleTaskClick(task: (typeof TASKS_DATA)[0]) {
    setSelectedTask({
      id: task.id,
      badgeText: task.type,
      name: "Mua sắm thiết bị mạng và phụ kiện CNTT",
      vendor: task.vendor,
      packageType: "Rút gọn",
      biddingForm: "Chào hàng cạnh tranh",
      estimatedPrice: "6,200,000,000 VNĐ",
      winningPrice: `${task.value} VNĐ`,
      status: "processing",
      dueDate: task.dueDate,
      assignee: "Nguyễn Văn A",
    });
    setIsDetailModalOpen(true);
  }

  // Filter & paginate tasks
  const filteredTasks = TASKS_DATA.filter(
    (t) =>
      t.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const paginatedTasks = filteredTasks.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="p-6 space-y-6 max-w-[1600px] mx-auto bg-[#f8f9fa] min-h-screen">
      {/* Header Section */}
      <PageHeader
        title="Báo cáo tổng quan"
        description="Tổng hợp tình hình đấu thầu, hợp đồng và hoạt động của bạn trong khoảng thời gian đã chọn"
        action={
          <div className="flex items-center gap-3 bg-white px-3.5 py-2 rounded-md border border-slate-200 shadow-2xs text-xs font-medium text-slate-700 hover:border-slate-300 cursor-pointer">
            <span>01/04/2025 - 30/04/2025</span>
            <Calendar className="size-4 text-slate-400" />
          </div>
        }
      />

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Tổng giá trị hợp đồng của tôi"
          value="48.6 tỷ VNĐ"
          valueClass="text-[#ff4c51]"
          icon={DollarSign}
          iconBgClass="bg-[#fce8e8] text-[#ff4c51]"
          bottomBarBg="bg-[#ff4c51]"
          trend="↑ 12,4%"
          trendSubtext="so với 01/03 - 31/03/2025"
        />
        <StatCard
          title="Tài liệu số hóa thành công"
          value="126"
          valueClass="text-[#3f81ea]"
          icon={FileText}
          iconBgClass="bg-[#e8f3ff] text-[#3f81ea]"
          bottomBarBg="bg-[#3f81ea]"
          trend="↑ 18,2%"
          trendSubtext="so với 01/03 - 31/03/2025"
        />
        <StatCard
          title="Gói thầu tôi đã đăng ký"
          value={
            <>
              <span className="text-[#28c76f]">Chuẩn: 8</span>{" "}
              <span className="text-slate-300 font-normal">|</span>{" "}
              <span className="text-[#28c76f]">Rút gọn: 11</span>
            </>
          }
          icon={Package}
          iconBgClass="bg-[#e9f9f0] text-[#28c76f]"
          bottomBarBg="bg-[#28c76f]"
          trend="↑ 18,2%"
          trendSubtext="so với 01/03 - 31/03/2025"
        />
        <StatCard
          title="Việc cần làm"
          value="14"
          valueClass="text-[#ff9f43]"
          icon={ClipboardList}
          iconBgClass="bg-[#fff0e1] text-[#ff9f43]"
          bottomBarBg="bg-[#ff9f43]"
          footerIcon={FileText}
          footerClass="text-[#ff4c51]"
          footerText="3 HSDT cảnh báo đỏ"
        />
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-2xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        <SelectFilter
          label="Khoảng thời gian"
          value="all"
          onChange={() => {}}
          options={[
            { value: "all", label: "Tất cả" },
            { value: "month", label: "Tháng này" },
            { value: "quarter", label: "Quý này" },
          ]}
        />
        <SelectFilter
          label="Trạng thái gói thầu"
          value="all"
          onChange={() => {}}
          options={[
            { value: "all", label: "Tất cả" },
            { value: "open", label: "Mở thầu" },
            { value: "awarded", label: "Đã trao thầu" },
          ]}
        />
        <SelectFilter
          label="Loại hợp đồng"
          value="all"
          onChange={() => {}}
          options={[
            { value: "all", label: "Tất cả" },
            { value: "goods", label: "Hàng hoá" },
            { value: "non_consulting", label: "Phi tư vấn" },
          ]}
        />
        <SelectFilter
          label="Hình thức thầu"
          value="all"
          onChange={() => {}}
          options={[
            { value: "all", label: "Tất cả" },
            { value: "simplified", label: "Rút gọn" },
            { value: "standard", label: "Chuẩn" },
          ]}
        />
        <div className="lg:col-span-2 flex items-end">
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Tìm kiếm gói thầu, nhà thầu, hợp đồng,..."
            className="w-full"
          />
        </div>
      </div>

      {/* Middle Row Charts: Bar Chart & Donut Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Vendor Contract Value Bar Chart */}
        <div className="lg:col-span-7 bg-white p-5 rounded-lg border border-slate-200/80 shadow-2xs flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-800">Giá trị hợp đồng theo nhà thầu</h2>
            <p className="text-[11px] text-slate-400 mt-0.5">Đơn vị: tỷ VNĐ</p>
          </div>

          {/* Bar Chart Container */}
          <div className="mt-6 flex gap-3">
            {/* Y Axis Labels */}
            <div className="flex flex-col justify-between h-56 text-[10px] text-slate-400 pr-1 select-none py-1">
              <span>20</span>
              <span>15</span>
              <span>10</span>
              <span>5</span>
              <span>0</span>
            </div>

            {/* Main Bar Plot Area */}
            <div className="flex-1">
              <div className="h-56 w-full flex items-end gap-3 sm:gap-6 border-b border-dashed border-slate-200 pb-2 relative px-2">
                {/* Horizontal Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-1">
                  {[20, 15, 10, 5, 0].map((val) => (
                    <div key={val} className="border-b border-dashed border-slate-100 w-full" />
                  ))}
                </div>

                {/* Bars */}
                {VENDOR_BAR_DATA.map((item) => {
                  const heightPercent = (item.value / 20) * 100;
                  return (
                    <div key={item.name} className="flex-1 flex flex-col items-center justify-end h-full z-10 group">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded mb-1 whitespace-nowrap">
                        {item.value} tỷ
                      </div>
                      <div
                        className="w-full bg-[#3b82f6] hover:bg-[#2563eb] rounded-t-xs transition-all duration-300 shadow-2xs"
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* X Axis Labels */}
              <div className="flex justify-between items-start pt-2 px-2 gap-1">
                {VENDOR_BAR_DATA.map((item) => (
                  <div key={item.name} className="flex-1 text-center text-[11px] text-slate-600 font-medium truncate">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Procurement Type Donut Chart */}
        <div className="lg:col-span-5 bg-white p-5 rounded-lg border border-slate-200/80 shadow-2xs flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-800">Phân bố loại mua sắm</h2>
          </div>

          <div className="my-6 flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* SVG Donut Chart */}
            <div className="relative size-44 shrink-0 flex items-center justify-center">
              <svg className="size-full transform -rotate-90" viewBox="0 0 36 36">
                {/* Segment 1: Non-consulting (Green 37%) */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="4.2"
                  strokeDasharray="37, 100"
                />
                {/* Segment 2: Goods (Blue 63%) */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4.2"
                  strokeDasharray="63, 100"
                  strokeDashoffset="-37"
                />
              </svg>

              {/* Center Text */}
              <div className="absolute text-center">
                <div className="text-xl font-extrabold text-slate-900 leading-tight">48,6</div>
                <div className="text-[11px] text-slate-500 font-medium">tỷ VNĐ</div>
              </div>
            </div>

            {/* Legends */}
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <span className="size-2.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-slate-800">
                    Hợp đồng hàng hoá
                  </p>
                  <p className="text-slate-500 font-normal">63% (30,6 tỷ VNĐ)</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="size-2.5 rounded-full bg-emerald-500 mt-1 shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-slate-800">
                    Hợp đồng phi tư vấn
                  </p>
                  <p className="text-slate-500 font-normal">37% (18,0 tỷ VNĐ)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Item Price Trend Line Chart */}
      <div className="bg-white p-5 rounded-lg border border-slate-200/80 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h2 className="text-sm font-bold text-[#393740]">Biến động giá mặt hàng cốt lõi</h2>
            <p className="text-[11px] text-slate-400 font-medium mt-0.5">Đơn vị: nghìn VNĐ/m</p>
          </div>

          <div className="relative">
            <select className="h-9 px-3.5 pr-8 border border-slate-200 bg-white rounded-[6px] text-xs text-[#3f81ea] font-medium outline-none appearance-none cursor-pointer shadow-2xs focus:border-[#3f81ea]">
              <option>Cáp mạng Cat6A</option>
              <option>Cáp quang 24 sợi</option>
            </select>
            <ChevronDown className="size-3.5 text-[#3f81ea] absolute right-2.5 top-2.5 pointer-events-none" />
          </div>
        </div>

        {/* SVG Smooth Area Line Chart Container */}
        <div className="flex gap-3 pt-2">
          {/* Y Axis Labels */}
          <div className="flex flex-col justify-between h-56 text-[11px] text-slate-400 font-medium select-none pb-6 pr-1">
            <span>50</span>
            <span>40</span>
            <span>30</span>
            <span>20</span>
            <span>10</span>
            <span>0</span>
          </div>

          <div className="flex-1 relative">
            <div className="relative h-56 w-full pb-2">
              {/* SVG Area, Line & Both Vertical & Horizontal Dotted Gridlines */}
              <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#00bcd4" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {/* Horizontal Dotted Gridlines */}
                {[0, 40, 80, 120, 160, 200].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="800"
                    y2={y}
                    stroke="#e2e8f0"
                    strokeDasharray="3 3"
                    strokeWidth="1"
                  />
                ))}

                {/* Vertical Dotted Gridlines */}
                {[0, 114, 228, 342, 456, 570, 684, 800].map((x) => (
                  <line
                    key={x}
                    x1={x}
                    y1="0"
                    x2={x}
                    y2="200"
                    stroke="#e2e8f0"
                    strokeDasharray="3 3"
                    strokeWidth="1"
                  />
                ))}

                {/* Gradient Area Fill */}
                <path
                  d="M 0,100 L 114,82 L 228,75 L 342,72 L 456,77 L 570,68 L 684,63 L 800,58 L 800,200 L 0,200 Z"
                  fill="url(#cyanGradient)"
                />

                {/* Main Trend Line */}
                <path
                  d="M 0,100 L 114,82 L 228,75 L 342,72 L 456,77 L 570,68 L 684,63 L 800,58"
                  fill="none"
                  stroke="#00bcd4"
                  strokeWidth="2.5"
                />

                {/* Data Points / Circles */}
                {[
                  { x: 0, y: 100 },
                  { x: 114, y: 82 },
                  { x: 228, y: 75 },
                  { x: 342, y: 72 },
                  { x: 456, y: 77 },
                  { x: 570, y: 68 },
                  { x: 684, y: 63 },
                  { x: 800, y: 58 },
                ].map((pt, idx) => (
                  <circle
                    key={idx}
                    cx={pt.x}
                    cy={pt.y}
                    r="4"
                    fill="#ffffff"
                    stroke="#00bcd4"
                    strokeWidth="2"
                    className="hover:r-5 transition-all cursor-pointer"
                  />
                ))}
              </svg>
            </div>

            {/* X Axis Date Labels */}
            <div className="flex justify-between items-center pt-2 text-[11px] text-[#393740] font-normal">
              {PRICE_TREND_DATA.map((d) => (
                <span key={d.date}>{d.date}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Follow-up Tasks Table & Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Tasks Table */}
        <div className="lg:col-span-8 bg-white p-5 rounded-lg border border-slate-200/80 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <h2 className="text-sm font-bold text-slate-800">Danh sách công việc cần theo dõi</h2>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Tìm kiếm trong danh sách ..."
                    className="text-xs pr-7 pl-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-slate-700 w-48 focus:outline-none focus:border-red-400"
                  />
                  <Search className="size-3.5 text-slate-400 absolute right-2.5 top-2" />
                </div>
                <button className="flex items-center gap-1 text-xs px-2.5 py-1 border border-slate-200 rounded-md bg-white hover:bg-slate-50 text-slate-700 cursor-pointer">
                  <span>Bộ Lọc</span>
                  <Filter className="size-3 text-slate-500" />
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/50 text-[11px] font-semibold text-slate-500 tracking-wider">
                    <th className="py-2.5 px-3">Mã Hồ Sơ</th>
                    <th className="py-2.5 px-3">Loại</th>
                    <th className="py-2.5 px-3">Nhà Thầu</th>
                    <th className="py-2.5 px-3">Trạng Thái</th>
                    <th className="py-2.5 px-3">Giá Trị</th>
                    <th className="py-2.5 px-3 text-right">Hạn Xử Lý</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {paginatedTasks.map((task) => (
                    <tr
                      key={task.id}
                      onClick={() => handleTaskClick(task)}
                      className="hover:bg-slate-50/80 cursor-pointer transition-colors"
                    >
                      <td className="py-2.5 px-3 font-medium text-[#3f81ea] hover:underline">{task.id}</td>
                      <td className="py-2.5 px-3 text-slate-600">{task.type}</td>
                      <td className="py-2.5 px-3 font-medium text-slate-800">{task.vendor}</td>
                      <td className="py-2.5 px-3">
                        <StatusBadge status={task.status} />
                      </td>
                      <td className="py-2.5 px-3 text-slate-700 font-medium">{task.value}</td>
                      <td className="py-2.5 px-3 text-right text-slate-500">{task.dueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination Footer */}
          <div className="pt-3 border-t border-slate-100">
            <Pagination
              currentPage={currentPage}
              pageSize={pageSize}
              totalElements={filteredTasks.length}
              totalPages={Math.ceil(filteredTasks.length / pageSize)}
              pageSizeOptions={[10, 20]}
              onPageChange={setCurrentPage}
              onPageSizeChange={(size) => {
                setPageSize(size);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        {/* Right Column: Recent Activity Feed */}
        <div className="lg:col-span-4 bg-white p-5 rounded-lg border border-slate-200/80 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-slate-800">Hoạt động gần đây</h2>
              <a href="#/activities" className="text-xs font-semibold text-red-500 hover:text-red-600">
                Xem tất cả
              </a>
            </div>

            <div className="space-y-3.5">
              {RECENT_ACTIVITIES.map((act) => {
                const Icon = act.icon;
                return (
                  <div key={act.id} className="flex items-start gap-3 group">
                    <div className={`p-1.5 rounded-full shrink-0 mt-0.5 ${act.iconBg}`}>
                      <Icon className="size-3.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-700 group-hover:text-slate-900 leading-snug">
                        {act.title}
                      </p>
                    </div>
                    <span className="text-[11px] text-slate-400 shrink-0">{act.time}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div />
        </div>
      </div>

      {/* Detail Record Modal */}
      <TaskDetailModal
        open={isDetailModalOpen}
        onOpenChange={setIsDetailModalOpen}
        data={selectedTask}
        onOpenDocument={() => {
          window.location.hash = "#/documents";
        }}
      />
    </div>
  );
}
