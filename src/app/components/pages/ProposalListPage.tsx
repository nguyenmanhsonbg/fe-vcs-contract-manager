import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Check,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { DigitizedDoc } from "../../data/mock";
import { docApi } from "../../services/api";
import { Pagination } from "../common/Pagination";
import {
  IconSearch,
  IconFilter,
  IconEye,
  IconMoreVertical,
  IconPencil,
} from "../icons";
import {
  ProposalItem,
  MOCK_PROPOSAL_CATEGORIES,
} from "../../data/proposalMock";

interface ProposalListPageProps {
  onOpenDoc: (doc: DigitizedDoc) => void;
}

export function ProposalListPage({ onOpenDoc }: ProposalListPageProps) {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [valueFilter, setValueFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [items, setItems] = useState<ProposalItem[]>([]);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  // Inline row edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<ProposalItem | null>(null);

  const loadProposals = async () => {
    setLoading(true);
    try {
      const res = await docApi.getProposals({
        category: categoryFilter,
        valueFilter,
        search: searchQuery,
        page: currentPage,
        size: pageSize,
      });
      setItems(res.content || []);
      setTotalElements(res.totalElements || 0);
      setTotalPages(res.totalPages || 1);
    } catch (err) {
      console.error("Lỗi khi tải danh sách tờ trình:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProposals();
  }, [categoryFilter, valueFilter, searchQuery, currentPage, pageSize]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("vi-VN").format(val);
  };

  const handleStartEdit = (item: ProposalItem) => {
    setEditingId(item.id);
    setEditForm({ ...item });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm(null);
  };

  const handleSaveEdit = () => {
    if (!editForm || !editingId) return;
    setItems((prev) =>
      prev.map((item) => (item.id === editingId ? { ...editForm } : item))
    );
    toast.success(`Cập nhật tờ trình ${editForm.code} thành công`);
    setEditingId(null);
    setEditForm(null);
  };

  const handleViewDetail = (item: ProposalItem) => {
    const mockDoc: DigitizedDoc = {
      id: item.id,
      fileName: `${item.code}_${item.title}.pdf`,
      documentType: "proposal",
      uploadedBy: "Nguyễn Văn A",
      uploadedAt: item.createdAt,
      pageCount: 1,
      status: "review",
      confidence: 96,
      averageConfidence: 96,
      fieldsToReview: 0,
      assignedTo: "Trần Văn B",
      lastUpdated: item.createdAt,
      fields: [
        { id: "f1", label: "Số tờ trình", value: item.code, confidence: 98 },
        { id: "f2", label: "Tên tờ trình", value: item.title, confidence: 95 },
        { id: "f3", label: "Loại HHDV", value: item.category, confidence: 97 },
        { id: "f4", label: "Đối tác đề xuất", value: item.supplier, confidence: 94 },
        { id: "f5", label: "Tổng giá trị đề xuất", value: `${formatCurrency(item.amount)} VNĐ`, confidence: 99 },
      ],
      lineItems: [],
      editLogs: [],
    };
    onOpenDoc(mockDoc);
  };

  return (
    <div className="w-full space-y-5 p-6 bg-[#f8f7fa]">
      {/* Page Header */}
      <div>
        <h1 className="text-[24px] font-bold text-[#2F2B3D] leading-[29px]">Quản lý tờ trình</h1>
        <p className="text-[12px] font-normal text-slate-500 leading-[17px] mt-1">
          Tạo mới, cập nhật và theo dõi các đề xuất mua hàng cho bạn phụ trách
        </p>
      </div>

      {/* Top Filter Card */}
      <div className="w-full rounded-[8px] bg-white p-4 shadow-2xs border border-slate-100/80">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          {/* Filter 1: Loại hàng hóa/dịch vụ */}
          <div className="md:col-span-3 space-y-1.5">
            <label className="text-[12px] font-medium text-slate-700">Loại hàng hóa/dịch vụ</label>
            <div className="relative">
              <select
                value={categoryFilter}
                onChange={(e) => {
                  setCategoryFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full appearance-none rounded-[6px] border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 outline-none focus:border-[#ff4c51] pr-8"
              >
                <option value="all">Tất cả</option>
                {MOCK_PROPOSAL_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Filter 2: Khoảng thời gian */}
          <div className="md:col-span-3 space-y-1.5">
            <label className="text-[12px] font-medium text-slate-700">Khoảng thời gian</label>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="YYYY. MM. DD."
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full rounded-[6px] border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 placeholder-slate-400 outline-none focus:border-[#ff4c51] pr-8"
              />
              <Calendar className="absolute right-2.5 size-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Filter 3: Giá trị */}
          <div className="md:col-span-2 space-y-1.5">
            <label className="text-[12px] font-medium text-slate-700">Giá trị</label>
            <div className="relative">
              <select
                value={valueFilter}
                onChange={(e) => {
                  setValueFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full appearance-none rounded-[6px] border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 outline-none focus:border-[#ff4c51] pr-8"
              >
                <option value="all">Tất cả</option>
                <option value="under50">Dưới 50 triệu</option>
                <option value="50to100">50 - 100 triệu</option>
                <option value="over100">Trên 100 triệu</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Search Box */}
          <div className="md:col-span-4 flex items-center gap-2">
            <div className="relative flex-1">
              <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm theo mã tờ trình, tên hàng, đối tác..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-[6px] border border-slate-200 bg-white pl-9 pr-3 py-2 text-[13px] text-slate-800 placeholder-slate-400 outline-none focus:border-[#ff4c51]"
              />
            </div>
            <button
              onClick={() => {
                setCategoryFilter("all");
                setValueFilter("all");
                setSearchQuery("");
                setDateRange("");
                setCurrentPage(1);
              }}
              title="Đặt lại bộ lọc"
              className="flex items-center justify-center size-9 rounded-[6px] border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors shrink-0"
            >
              <IconFilter className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Data Table Card */}
      <div className="rounded-[8px] bg-white p-5 shadow-2xs border border-slate-100/80 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-[#2F2B3D]">Danh sách tờ trình của tôi</h2>
          {loading && (
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Loader2 className="size-3.5 animate-spin" />
              Đang tải dữ liệu...
            </div>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-slate-100 text-slate-600 font-semibold bg-slate-50/50">
                <th className="py-3 px-3">Số tờ trình</th>
                <th className="py-3 px-3">Nội dung đề xuất</th>
                <th className="py-3 px-3">Loại HHDV</th>
                <th className="py-3 px-3">Đối tác đề xuất</th>
                <th className="py-3 px-3 text-right">Giá trị đề xuất</th>
                <th className="py-3 px-3">Ngày tạo</th>
                <th className="py-3 px-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {loading ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400">
                    <Loader2 className="size-5 animate-spin mx-auto mb-2" />
                    Đang tải dữ liệu tờ trình...
                  </td>
                </tr>
              ) : items.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400">
                    Không tìm thấy tờ trình phù hợp
                  </td>
                </tr>
              ) : (
                items.map((item) => {
                  const isEditing = editingId === item.id && editForm !== null;

                  if (isEditing) {
                    return (
                      <tr key={item.id} className="bg-transparent">
                        <td className="py-2.5 px-2">
                          <input
                            type="text"
                            value={editForm.code}
                            onChange={(e) => setEditForm({ ...editForm, code: e.target.value })}
                            className="w-full rounded-[6px] border border-slate-300 bg-white px-2.5 py-1.5 text-[13px] text-slate-800 outline-none focus:border-[#ff4c51]"
                          />
                        </td>
                        <td className="py-2.5 px-2">
                          <input
                            type="text"
                            value={editForm.title}
                            onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                            className="w-full rounded-[6px] border border-slate-300 bg-white px-2.5 py-1.5 text-[13px] text-slate-800 outline-none focus:border-[#ff4c51]"
                          />
                        </td>
                        <td className="py-2.5 px-2">
                          <select
                            value={editForm.category}
                            onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                            className="w-full rounded-[6px] border border-slate-300 bg-white px-2 py-1.5 text-[13px] text-slate-800 outline-none focus:border-[#ff4c51]"
                          >
                            {MOCK_PROPOSAL_CATEGORIES.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="py-2.5 px-2">
                          <input
                            type="text"
                            value={editForm.supplier}
                            onChange={(e) => setEditForm({ ...editForm, supplier: e.target.value })}
                            className="w-full rounded-[6px] border border-slate-300 bg-white px-2.5 py-1.5 text-[13px] text-slate-800 outline-none focus:border-[#ff4c51]"
                          />
                        </td>
                        <td className="py-2.5 px-2">
                          <input
                            type="text"
                            value={formatCurrency(editForm.amount)}
                            onChange={(e) => {
                              const rawNum = Number(e.target.value.replace(/[^0-9]/g, ""));
                              setEditForm({ ...editForm, amount: rawNum });
                            }}
                            className="w-full text-right rounded-[6px] border border-slate-300 bg-white px-2.5 py-1.5 text-[13px] text-slate-800 outline-none focus:border-[#ff4c51]"
                          />
                        </td>
                        <td className="py-2.5 px-2">
                          <input
                            type="text"
                            value={editForm.createdAt}
                            onChange={(e) => setEditForm({ ...editForm, createdAt: e.target.value })}
                            className="w-full rounded-[6px] border border-slate-300 bg-white px-2.5 py-1.5 text-[13px] text-slate-800 outline-none focus:border-[#ff4c51]"
                          />
                        </td>
                        <td className="py-2.5 px-3 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end">
                            <button
                              onClick={handleSaveEdit}
                              className="p-1.5 text-[#28C76F] hover:text-emerald-700 transition-colors"
                              title="Lưu thay đổi"
                            >
                              <Check className="size-5 stroke-[2.5]" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  }

                  return (
                    <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-3 font-medium text-slate-800 whitespace-nowrap">
                        {item.code}
                      </td>
                      <td className="py-3.5 px-3 text-slate-800 max-w-[280px] truncate" title={item.title}>
                        {item.title}
                      </td>
                      <td className="py-3.5 px-3 text-slate-600 whitespace-nowrap">{item.category}</td>
                      <td className="py-3.5 px-3 text-slate-700 font-medium whitespace-nowrap">
                        {item.supplier}
                      </td>
                      <td className="py-3.5 px-3 text-right font-medium text-slate-800 whitespace-nowrap">
                        {formatCurrency(item.amount)}
                      </td>
                      <td className="py-3.5 px-3 text-slate-500 whitespace-nowrap">{item.createdAt}</td>
                      <td className="py-3.5 px-3 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5 text-slate-400">
                          <button
                            onClick={() => handleViewDetail(item)}
                            className="p-1 hover:text-[#ff4c51] transition-colors"
                            title="Xem chi tiết"
                          >
                            <IconEye className="size-4" />
                          </button>
                          <button
                            onClick={() => handleStartEdit(item)}
                            className="p-1 hover:text-slate-700 transition-colors"
                            title="Chỉnh sửa trực tiếp"
                          >
                            <IconPencil className="size-4 text-slate-500" />
                          </button>
                          <button
                            className="p-1 hover:text-slate-700 transition-colors"
                            title="Tùy chọn khác"
                          >
                            <IconMoreVertical className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalElements={totalElements}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          onPageSizeChange={(newSize) => {
            setPageSize(newSize);
            setCurrentPage(1);
          }}
        />
      </div>
    </div>
  );
}
