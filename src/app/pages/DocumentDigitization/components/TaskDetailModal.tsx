import { X } from "lucide-react";
import { StatusBadge } from "../../../components/common/StatusBadge";

export interface TaskDetailData {
  id: string;
  badgeText?: string;
  name?: string;
  vendor?: string;
  packageType?: string;
  biddingForm?: string;
  estimatedPrice?: string;
  winningPrice?: string;
  status?: string;
  dueDate?: string;
  assignee?: string;
}

export interface TaskDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data?: TaskDetailData | null;
  onOpenDocument?: (data: TaskDetailData) => void;
}

const DEFAULT_DATA: TaskDetailData = {
  id: "GT-2025-018",
  badgeText: "Gói thầu",
  name: "Mua sắm thiết bị mạng và phụ kiện CNTT",
  vendor: "Thiên Long Tech",
  packageType: "Rút gọn",
  biddingForm: "Chào hàng cạnh tranh",
  estimatedPrice: "6,200,000,000 VNĐ",
  winningPrice: "5,800,000,000 VNĐ",
  status: "processing",
  dueDate: "03/05/2025",
  assignee: "Nguyễn Văn A",
};

export function TaskDetailModal({
  open,
  onOpenChange,
  data,
  onOpenDocument,
}: TaskDetailModalProps) {
  if (!open) return null;

  const currentData = data || DEFAULT_DATA;
  const badgeLabel = currentData.badgeText || (currentData.id?.startsWith("HD") ? "Hợp đồng" : "Gói thầu");

  const detailRows = [
    { label: "Tên gói thầu", value: currentData.name || "Mua sắm thiết bị mạng và phụ kiện CNTT" },
    { label: "Nhà thầu", value: currentData.vendor || "Thiên Long Tech" },
    { label: "Loại gói thầu", value: currentData.packageType || "Rút gọn" },
    { label: "Hình thức thầu", value: currentData.biddingForm || "Chào hàng cạnh tranh" },
    { label: "Giá dự toán", value: currentData.estimatedPrice || "6,200,000,000 VNĐ" },
    { label: "Giá trị trúng thầu", value: currentData.winningPrice || "5,800,000,000 VNĐ" },
    {
      label: "Trạng thái",
      value: (
        <StatusBadge
          status={currentData.status || "processing"}
          label={currentData.status === "processing" ? "Đang đánh giá" : undefined}
        />
      ),
    },
    { label: "Hạn xử lý", value: currentData.dueDate || "03/05/2025" },
    { label: "Người phụ trách", value: currentData.assignee || "Nguyễn Văn A" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-[460px] bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">Chi tiết hồ sơ</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Đóng"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Badge & ID Row */}
          <div className="flex items-center gap-3">
            <span className="bg-[#e6f9f0] text-[#10b981] font-semibold text-xs px-3 py-1 rounded-[4px] inline-block">
              {badgeLabel}
            </span>
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{currentData.id}</h3>
          </div>

          {/* Details Table */}
          <div className="divide-y divide-slate-100 text-xs">
            {detailRows.map((row, idx) => (
              <div key={idx} className="py-3 flex items-center justify-between gap-4">
                <span className="text-slate-500 font-medium shrink-0 w-32">{row.label}</span>
                <span className="text-slate-800 font-semibold text-right leading-snug break-words">
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons Footer */}
          <div className="pt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="flex-1 py-2.5 px-4 rounded-md border border-slate-300 bg-white text-slate-700 font-medium text-xs hover:bg-slate-50 transition-colors shadow-2xs text-center cursor-pointer"
            >
              Xem chi tiết
            </button>
            <button
              type="button"
              onClick={() => {
                onOpenChange(false);
                if (onOpenDocument) onOpenDocument(currentData);
              }}
              className="flex-1 py-2.5 px-4 rounded-md bg-[#ff4c51] hover:bg-[#e64449] text-white font-medium text-xs shadow-sm transition-colors text-center cursor-pointer"
            >
              Mở hồ sơ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
