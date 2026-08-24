import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { docApi } from "../../services/api";
import { ProposalItem } from "../../data/apiModels";
import { DatePickerInput } from "../common/DatePickerInput";
import { PageHeader } from "../common/PageHeader";
import { Pagination } from "../common/Pagination";
import { SearchInput } from "../common/SearchInput";
import { SelectFilter } from "../common/SelectFilter";
import { IconCheck, IconEye, IconFilter, IconMoreVertical, IconPencil } from "../icons";

function money(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value || 0);
}

const CATEGORY_OPTIONS = [
  { value: "all", label: "Tất cả" },
  { value: "Thiết bị văn phòng", label: "Thiết bị văn phòng" },
  { value: "Thiết bị CNTT", label: "Thiết bị CNTT" },
  { value: "Phần mềm", label: "Phần mềm" },
  { value: "Vật tư văn phòng", label: "Vật tư văn phòng" },
  { value: "Thiết bị điện lạnh", label: "Thiết bị điện lạnh" },
  { value: "Thiết bị an ninh", label: "Thiết bị an ninh" },
  { value: "Dịch vụ", label: "Dịch vụ" },
  { value: "Thiết bị điện", label: "Thiết bị điện" },
];

const VALUE_OPTIONS = [
  { value: "all", label: "Tất cả" },
  { value: "under50", label: "Dưới 50 triệu" },
  { value: "50to100", label: "50 - 100 triệu" },
  { value: "over100", label: "Trên 100 triệu" },
];

export function ProposalListPage() {
  const [category, setCategory] = useState("all");
  const [dateRange, setDateRange] = useState("");
  const [valueFilter, setValueFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState<ProposalItem[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<ProposalItem | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    docApi
      .getProposals({ category, valueFilter, search, page, size: pageSize })
      .then((result) => {
        if (!active) return;
        setItems(result.content || []);
        setTotalElements(result.totalElements || 0);
        setTotalPages(result.totalPages || 1);
      })
      .catch((err) => {
        if (!active) return;
        console.error("Failed to load proposals:", err);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [category, valueFilter, search, page, pageSize]);

  const resetFilters = () => {
    setCategory("all");
    setDateRange("");
    setValueFilter("all");
    setSearch("");
    setPage(1);
  };

  const startEdit = (item: ProposalItem) => {
    setEditingId(item.id);
    setEditForm({ ...item });
  };

  const saveEdit = async () => {
    if (!editingId || !editForm) return;
    try {
      await docApi.updateProposal(editingId, {
        title: editForm.title,
        proposalNumber: editForm.code,
        proposalDate: editForm.proposalDate || editForm.createdAt,
      });
      setItems((current) => current.map((item) => (item.id === editingId ? editForm : item)));
      toast.success("Đã lưu thay đổi tờ trình");
      setEditingId(null);
      setEditForm(null);
    } catch (error: any) {
      toast.error(error?.message || "Không thể lưu tờ trình");
    }
  };

  return (
    <div className="w-full space-y-6 bg-[#f8f7fa] p-6">
      {/* Page Header */}
      <PageHeader
        title="Quản lý tờ trình"
        description="Theo dõi, quét và trích xuất dữ liệu đề xuất mua hàng cho ban phụ trách"
        descriptionClassName="text-[13px] text-[#8f8d95]"
      />

      {/* Filter Section */}
      <section className="grid grid-cols-1 items-end gap-3 rounded-[6px] bg-white p-4 shadow-[0px_2px_4px_rgba(47,43,61,0.08)] border border-slate-100/80 md:grid-cols-2 lg:grid-cols-[minmax(180px,1.2fr)_minmax(180px,1fr)_minmax(160px,1fr)_minmax(240px,1.6fr)_40px]">
        <SelectFilter
          label="Loại hàng hóa dịch vụ"
          value={category}
          onChange={(value) => {
            setCategory(value);
            setPage(1);
          }}
          options={CATEGORY_OPTIONS}
        />
        <DatePickerInput
          label="Khoảng thời gian"
          value={dateRange}
          onChange={(value) => {
            setDateRange(value);
            setPage(1);
          }}
          placeholder="YYYY. MM. DD."
        />
        <SelectFilter
          label="Giá trị"
          value={valueFilter}
          onChange={(value) => {
            setValueFilter(value);
            setPage(1);
          }}
          options={VALUE_OPTIONS}
        />
        <div className="space-y-1.5">
          <span className="block text-[12px] font-medium text-transparent select-none">Tìm kiếm</span>
          <SearchInput
            value={search}
            onChange={(value) => {
              setSearch(value);
              setPage(1);
            }}
            placeholder="Tìm theo mã tờ trình, tên hàng, đối tác..."
          />
        </div>
        <div className="flex items-end">
          <button
            type="button"
            onClick={resetFilters}
            title="Đặt lại bộ lọc"
            className="flex size-9 items-center justify-center rounded-[6px] border border-[#dbdade] bg-white text-[#5d586c] transition-colors hover:bg-slate-50 hover:text-[#2f2b3d] cursor-pointer"
          >
            <IconFilter className="size-4" />
          </button>
        </div>
      </section>

      {/* Table Section */}
      <section className="rounded-[6px] bg-white p-5 shadow-[0px_2px_4px_rgba(47,43,61,0.08)] border border-slate-100/80 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-medium leading-[22px] text-[#2f2b3d]">
            Danh sách tờ trình của tôi
          </h2>
          {loading && (
            <span className="inline-flex items-center text-xs text-slate-400">
              <Loader2 className="mr-1 size-3.5 animate-spin text-[#3f81ea]" /> Đang tải dữ liệu...
            </span>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] table-fixed text-left text-[13px] text-[#2f2b3d]">
            <colgroup>
              <col className="w-[160px]" />
              <col className="w-[360px]" />
              <col className="w-[200px]" />
              <col className="w-[180px]" />
              <col className="w-[140px]" />
              <col className="w-[100px]" />
            </colgroup>
            <thead>
              <tr className="h-11 border-y border-slate-200/90 text-[13px] font-medium text-[#2f2b3d]">
                <th className="px-3 py-2.5 font-medium">Số tờ trình</th>
                <th className="px-3 py-2.5 font-medium">Nội dung đề xuất</th>
                <th className="px-3 py-2.5 font-medium">Đối tác đề xuất</th>
                <th className="px-3 py-2.5 font-medium">Giá trị đề xuất</th>
                <th className="px-3 py-2.5 font-medium">Ngày ký</th>
                <th className="px-2 py-2.5 font-medium">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading && items.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-14 text-center text-[13px] text-slate-400">
                    <Loader2 className="mx-auto size-6 animate-spin text-[#3f81ea]" />
                    <span className="mt-2 block">Đang tải danh sách tờ trình...</span>
                  </td>
                </tr>
              ) : items.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-14 text-center text-[13px] text-slate-400">
                    Chưa có dữ liệu tờ trình.
                  </td>
                </tr>
              ) : (
                items.map((item) => {
                  const isEditing = editingId === item.id && editForm;
                  if (isEditing) {
                    return (
                      <tr key={item.id} className="h-[52px] bg-slate-50/40">
                        <td className="px-2 py-2">
                          <input
                            value={editForm.code}
                            onChange={(e) => setEditForm({ ...editForm, code: e.target.value })}
                            className="h-9 w-full rounded-[6px] border border-[#dbdade] bg-white px-2.5 text-[13px] text-[#2f2b3d] outline-none focus:border-[#3f81ea]"
                          />
                        </td>
                        <td className="px-2 py-2">
                          <input
                            value={editForm.title}
                            onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                            className="h-9 w-full rounded-[6px] border border-[#dbdade] bg-white px-2.5 text-[13px] text-[#2f2b3d] outline-none focus:border-[#3f81ea]"
                          />
                        </td>
                        <td className="px-2 py-2">
                          <input
                            value={editForm.supplier}
                            onChange={(e) => setEditForm({ ...editForm, supplier: e.target.value })}
                            className="h-9 w-full rounded-[6px] border border-[#dbdade] bg-white px-2.5 text-[13px] text-[#2f2b3d] outline-none focus:border-[#3f81ea]"
                          />
                        </td>
                        <td className="px-2 py-2">
                          <input
                            value={money(editForm.amount)}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                amount: Number(e.target.value.replace(/[^0-9]/g, "")),
                              })
                            }
                            className="h-9 w-full rounded-[6px] border border-[#dbdade] bg-white px-2.5 text-[13px] text-[#2f2b3d] outline-none focus:border-[#3f81ea]"
                          />
                        </td>
                        <td className="px-2 py-2">
                          <input
                            value={editForm.createdAt}
                            onChange={(e) => setEditForm({ ...editForm, createdAt: e.target.value })}
                            className="h-9 w-full rounded-[6px] border border-[#dbdade] bg-white px-2.5 text-[13px] text-[#2f2b3d] outline-none focus:border-[#3f81ea]"
                          />
                        </td>
                        <td className="px-2 py-2">
                          <button
                            type="button"
                            onClick={saveEdit}
                            title="Lưu thay đổi"
                            className="flex items-center justify-center p-1 text-[#28c76f] transition-opacity hover:opacity-80 cursor-pointer"
                          >
                            <IconCheck className="size-6 text-[#28c76f]" />
                          </button>
                        </td>
                      </tr>
                    );
                  }

                  return (
                    <tr
                      key={item.id}
                      className="h-[50px] border-b border-slate-100 transition-colors hover:bg-slate-50/70"
                    >
                      <td className="px-3 py-2.5 font-normal text-[#2f2b3d]">
                        <div className="truncate max-w-[150px]" title={item.code}>
                          {item.code}
                        </div>
                      </td>
                      <td className="px-3 py-2.5 text-[#2f2b3d]">
                        <div className="truncate max-w-[340px]" title={item.title}>
                          {item.title}
                        </div>
                      </td>
                      <td className="px-3 py-2.5 text-[#393740]">
                        <div className="truncate max-w-[190px]" title={item.supplier}>
                          {item.supplier || "-"}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-2.5 text-[#2f2b3d]">
                        {money(item.amount)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-2.5 text-[#393740]">
                        {item.createdAt}
                      </td>
                      <td className="px-2 py-2.5">
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              window.location.hash = `#/proposals/detail/${item.id}`;
                            }}
                            title="Xem chi tiết"
                            className="p-0.5 text-[#3f81ea] transition-opacity hover:opacity-80 cursor-pointer"
                          >
                            <IconEye className="size-4 text-[#3f81ea]" />
                          </button>
                          <button
                            type="button"
                            onClick={() => startEdit(item)}
                            title="Chỉnh sửa"
                            className="p-0.5 text-[#5d586c] transition-colors hover:text-[#3f81ea] cursor-pointer"
                          >
                            <IconPencil className="size-4" />
                          </button>
                          <button
                            type="button"
                            title="Tùy chọn"
                            className="p-0.5 text-[#5d586c] transition-colors hover:text-[#3f81ea] cursor-pointer"
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

        {/* Pagination Footer */}
        <Pagination
          currentPage={page}
          pageSize={pageSize}
          totalElements={totalElements}
          totalPages={totalPages}
          pageSizeOptions={[10, 20, 50]}
          onPageChange={setPage}
          onPageSizeChange={(value) => {
            setPageSize(value);
            setPage(1);
          }}
          pageSizeLabel="Hiển thị"
          variant="blue-bordered"
          className="pt-2"
        />
      </section>
    </div>
  );
}
