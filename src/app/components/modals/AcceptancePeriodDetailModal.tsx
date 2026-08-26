import { X, Calendar, FileText, CheckCircle2, Clock } from "lucide-react";
import { AcceptanceMilestoneItem, AcceptancePeriodRecord } from "../../data/acceptanceMock";

interface AcceptancePeriodDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: AcceptanceMilestoneItem | null;
  contractCode?: string;
}

function formatCurrency(val?: number): string {
  if (val === undefined || val === null) return "0";
  return new Intl.NumberFormat("vi-VN").format(val);
}

export function AcceptancePeriodDetailModal({
  open,
  onOpenChange,
  item,
  contractCode,
}: AcceptancePeriodDetailModalProps) {
  if (!open || !item) return null;

  const periodsList: AcceptancePeriodRecord[] = Object.values(item.periods).filter(
    (p): p is AcceptancePeriodRecord => p !== undefined
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[8px] bg-white shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50/70">
          <div>
            <h3 className="text-base font-bold text-[#2f2b3d]">Chi tiết các đợt nghiệm thu</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Hợp đồng: <span className="font-semibold text-[#3f81ea]">{contractCode || "N/A"}</span> &bull; {item.itemName}
            </p>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="flex size-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Summary Mini Banner */}
        <div className="grid grid-cols-3 gap-4 border-b border-slate-200 bg-slate-50/40 p-4 text-xs">
          <div className="rounded-[6px] border border-slate-200 bg-white p-3 shadow-2xs">
            <span className="text-slate-500 block text-[11px]">Tổng số lượng HĐ</span>
            <span className="text-sm font-bold text-[#2f2b3d] mt-0.5 block">
              {item.contractQty} {item.unit}
            </span>
            <span className="text-[11px] text-slate-400">
              {formatCurrency(item.contractValue)} VNĐ
            </span>
          </div>

          <div className="rounded-[6px] border border-[#28c76f]/20 bg-[#e8f9ee]/40 p-3 shadow-2xs">
            <span className="text-[#28c76f] block text-[11px] font-medium">Đã nghiệm thu</span>
            <span className="text-sm font-bold text-[#28c76f] mt-0.5 block">
              {item.totalAcceptedQty} {item.unit}
            </span>
            <span className="text-[11px] text-[#28c76f]">
              {formatCurrency(item.totalAcceptedValue)} VNĐ
            </span>
          </div>

          <div className="rounded-[6px] border border-slate-200 bg-white p-3 shadow-2xs">
            <span className="text-slate-500 block text-[11px]">Còn lại</span>
            <span className="text-sm font-bold text-slate-700 mt-0.5 block">
              {item.remainingQty} {item.unit}
            </span>
            <span className="text-[11px] text-slate-400">
              {formatCurrency(item.remainingValue)} VNĐ
            </span>
          </div>
        </div>

        {/* Modal Body: Periods Table */}
        <div className="max-h-[60vh] overflow-y-auto p-6">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wider text-[#5d586c]">
                <th className="px-3 py-2.5 font-semibold text-center w-16">Đợt</th>
                <th className="px-3 py-2.5 font-semibold">Tên đợt / Nội dung</th>
                <th className="px-3 py-2.5 font-semibold text-center">Ngày NT</th>
                <th className="px-3 py-2.5 font-semibold text-center">Số lượng</th>
                <th className="px-3 py-2.5 font-semibold text-right">Đơn giá</th>
                <th className="px-3 py-2.5 font-semibold text-right">Thành tiền (VNĐ)</th>
                <th className="px-3 py-2.5 font-semibold text-center">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {periodsList.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400">
                    Chưa có dữ liệu đợt nghiệm thu.
                  </td>
                </tr>
              ) : (
                periodsList.map((p, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70">
                    <td className="px-3 py-3 text-center font-bold text-slate-700">
                      {p.periodNo}
                    </td>
                    <td className="px-3 py-3">
                      <div className="font-medium text-[#2f2b3d]">{p.periodName}</div>
                      {p.notes && <div className="text-[11px] text-slate-500 mt-0.5">{p.notes}</div>}
                      {p.documentNo && (
                        <div className="inline-flex items-center gap-1 text-[11px] text-[#3f81ea] mt-0.5">
                          <FileText className="size-3" />
                          <span>{p.documentNo}</span>
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-3 text-center text-slate-600">
                      {p.date ? (
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="size-3 text-slate-400" />
                          {p.date}
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-slate-800">
                      {p.qty} {item.unit}
                    </td>
                    <td className="px-3 py-3 text-right text-slate-600">
                      {formatCurrency(p.unitPrice)}
                    </td>
                    <td className="px-3 py-3 text-right font-bold text-[#28c76f]">
                      {formatCurrency(p.value)}
                    </td>
                    <td className="px-3 py-3 text-center">
                      <span
                        className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px] font-medium ${
                          p.status === "Đã nghiệm thu"
                            ? "bg-[#e8f9ee] text-[#28c76f]"
                            : p.status === "Đang xử lý"
                            ? "bg-[#e8f4fd] text-[#3f81ea]"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {p.status === "Đã nghiệm thu" ? (
                          <CheckCircle2 className="size-3 text-[#28c76f]" />
                        ) : (
                          <Clock className="size-3 text-slate-400" />
                        )}
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end border-t border-slate-200 px-6 py-3 bg-slate-50">
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-[6px] border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
