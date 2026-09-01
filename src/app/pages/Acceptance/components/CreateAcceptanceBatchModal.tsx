import React, { useState } from "react";
import { X, Calendar, FileText, CheckCircle } from "lucide-react";
import { AcceptanceContractDetail } from "../../../core/types/acceptance.types";
import { acceptanceApi } from "../../../api/acceptanceApi";
import { toast } from "sonner";

interface CreateAcceptanceBatchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contract: AcceptanceContractDetail | null;
  onSuccess: () => void;
}

function formatCurrency(val?: number): string {
  if (val === undefined || val === null) return "0";
  return new Intl.NumberFormat("vi-VN").format(val);
}

export function CreateAcceptanceBatchModal({
  open,
  onOpenChange,
  contract,
  onSuccess,
}: CreateAcceptanceBatchModalProps) {
  if (!open || !contract) return null;

  const items = contract.milestones || [];
  const existingPeriodsCount = items[0]
    ? Object.keys(items[0].periods || {}).length
    : 0;
  const nextPeriodNo = existingPeriodsCount + 1;
  const [periodName, setPeriodName] = useState(`Đợt ${nextPeriodNo}`);
  const [acceptanceDate, setAcceptanceDate] = useState(
    new Date().toLocaleDateString("vi-VN")
  );
  const [documentNo, setDocumentNo] = useState(
    `BB-NT-0${nextPeriodNo}/${contract.contractCode.split(".")[0] || "VCS"}-2025`
  );
  const [quantities, setQuantities] = useState<{ [itemId: string]: number }>(() => {
    const initial: { [itemId: string]: number } = {};
    items.forEach((item) => {
      initial[item.id] = Math.min(item.remainingQty, Math.ceil(item.contractQty * 0.3));
    });
    return initial;
  });
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalBatchValue = items.reduce((acc, item) => {
    const qty = quantities[item.id] || 0;
    return acc + qty * item.contractUnitPrice;
  }, 0);

  const handleQtyChange = (itemId: string, val: number, maxQty: number) => {
    const clamped = Math.max(0, Math.min(val, maxQty));
    setQuantities((prev) => ({
      ...prev,
      [itemId]: clamped,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!periodName.trim()) {
      toast.error("Vui lòng nhập tên đợt nghiệm thu");
      return;
    }
    if (!acceptanceDate.trim()) {
      toast.error("Vui lòng nhập ngày nghiệm thu");
      return;
    }

    try {
      setIsSubmitting(true);
      const itemsPayload = items.map((item) => ({
        itemId: item.id,
        qty: quantities[item.id] || 0,
        unitPrice: item.contractUnitPrice,
        notes: notes.trim(),
      }));

      await acceptanceApi.createAcceptancePeriod(contract.id, {
        periodName: periodName.trim(),
        date: acceptanceDate.trim(),
        documentNo: documentNo.trim(),
        items: itemsPayload,
      });

      toast.success(`Tạo mới ${periodName} thành công!`);
      onSuccess();
      onOpenChange(false);
    } catch (err: any) {
      toast.error(err.message || "Không thể tạo đợt nghiệm thu");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[8px] bg-white shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50/70">
          <div>
            <h3 className="text-base font-bold text-[#2f2b3d]">Thêm đợt nghiệm thu mới</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Hợp đồng: <span className="font-semibold text-[#3f81ea]">{contract.contractCode}</span> &bull; {contract.partner}
            </p>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="flex size-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSubmit} className="max-h-[75vh] overflow-y-auto p-6 space-y-5 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[12px] font-medium text-slate-700 mb-1">
                Tên đợt nghiệm thu <span className="text-[#ff4c51]">*</span>
              </label>
              <input
                type="text"
                value={periodName}
                onChange={(e) => setPeriodName(e.target.value)}
                placeholder="VD: Đợt 3 (30%)"
                className="h-9 w-full rounded-[6px] border border-slate-200 bg-white px-3 text-xs text-slate-800 outline-none hover:border-slate-300 focus:border-[#ff4c51]"
                required
              />
            </div>

            <div>
              <label className="block text-[12px] font-medium text-slate-700 mb-1">
                Ngày nghiệm thu <span className="text-[#ff4c51]">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={acceptanceDate}
                  onChange={(e) => setAcceptanceDate(e.target.value)}
                  placeholder="dd/mm/yyyy"
                  className="h-9 w-full rounded-[6px] border border-slate-200 bg-white px-3 pr-8 text-xs text-slate-800 outline-none hover:border-slate-300 focus:border-[#ff4c51]"
                  required
                />
                <Calendar className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-[12px] font-medium text-slate-700 mb-1">
                Số biên bản nghiệm thu
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={documentNo}
                  onChange={(e) => setDocumentNo(e.target.value)}
                  placeholder="VD: BB-NT-03/VCS-2025"
                  className="h-9 w-full rounded-[6px] border border-slate-200 bg-white px-3 pr-8 text-xs text-slate-800 outline-none hover:border-slate-300 focus:border-[#ff4c51]"
                />
                <FileText className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Line items quantity table */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[12px] font-semibold text-slate-700">
                Phân bổ số lượng nghiệm thu theo hạng mục
              </label>
              <span className="text-[11px] text-slate-500">
                Tổng giá trị đợt: <span className="font-bold text-[#28c76f]">{formatCurrency(totalBatchValue)} VNĐ</span>
              </span>
            </div>

            <div className="overflow-hidden rounded-[6px] border border-slate-200 bg-white">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[11px] text-[#5d586c]">
                    <th className="px-3 py-2 font-medium">Hạng mục</th>
                    <th className="px-2 py-2 font-medium text-center w-16">ĐVT</th>
                    <th className="px-2 py-2 font-medium text-center w-20">Còn lại</th>
                    <th className="px-2 py-2 font-medium text-right w-28">Đơn giá (VNĐ)</th>
                    <th className="px-3 py-2 font-medium text-center w-28">SL Nghiệm thu</th>
                    <th className="px-3 py-2 font-medium text-right w-32">Thành tiền (VNĐ)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {items.map((item) => {
                    const currentQty = quantities[item.id] || 0;
                    const itemTotal = currentQty * item.contractUnitPrice;
                    return (
                      <tr key={item.id} className="hover:bg-slate-50/70">
                        <td className="px-3 py-2.5 font-medium text-slate-800 text-[11px]">
                          {item.itemName}
                        </td>
                        <td className="px-2 py-2.5 text-center text-slate-500">{item.unit}</td>
                        <td className="px-2 py-2.5 text-center font-semibold text-slate-700">
                          {item.remainingQty}
                        </td>
                        <td className="px-2 py-2.5 text-right text-slate-600">
                          {formatCurrency(item.contractUnitPrice)}
                        </td>
                        <td className="px-3 py-2.5 text-center">
                          <input
                            type="number"
                            min={0}
                            max={item.remainingQty}
                            value={currentQty}
                            onChange={(e) =>
                              handleQtyChange(item.id, parseInt(e.target.value) || 0, item.remainingQty)
                            }
                            className="h-7 w-20 rounded border border-slate-200 text-center font-bold text-slate-800 outline-none focus:border-[#ff4c51]"
                          />
                        </td>
                        <td className="px-3 py-2.5 text-right font-bold text-[#28c76f]">
                          {formatCurrency(itemTotal)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <label className="block text-[12px] font-medium text-slate-700 mb-1">Ghi chú đợt nghiệm thu</label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Nhập nội dung biên bản, điều kiện nghiệm thu hoặc ghi chú bổ sung..."
              className="w-full rounded-[6px] border border-slate-200 bg-white p-2.5 text-xs text-slate-800 outline-none hover:border-slate-300 focus:border-[#ff4c51]"
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-2 border-t border-slate-200 pt-4">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="rounded-[6px] border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={isSubmitting || totalBatchValue === 0}
              className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#ff4c51] px-5 py-2 text-xs font-medium text-white shadow-2xs hover:bg-[#e64449] disabled:opacity-50 transition-colors cursor-pointer"
            >
              <CheckCircle className="size-4" />
              {isSubmitting ? "Đang xử lý..." : "Lưu đợt nghiệm thu"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
