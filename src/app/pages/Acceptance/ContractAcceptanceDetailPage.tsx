import { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import { toast } from "sonner";
import { WidgetCard } from "../../components/common/WidgetCard";
import { RecentActivitiesWidget } from "../../components/common/RecentActivitiesWidget";
import { IconCustomCheck } from "../../components/icons";

interface ContractAcceptanceDetailPageProps {
  contractId?: string;
  onBack: () => void;
}

function RedCheckbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange?: () => void;
}) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        if (onChange) onChange();
      }}
      className={`size-[13px] rounded-[2.5px] flex items-center justify-center shrink-0 cursor-pointer transition-colors ${
        checked
          ? "bg-[#ff4c51] text-white"
          : "border border-[#dbdade] bg-white hover:border-slate-400"
      }`}
    >
      {checked && <IconCustomCheck className="size-[8.5px]" />}
    </div>
  );
}

interface MonthQtyValue {
  qty: number;
  value: number;
}

interface ContractItemRow {
  id: string;
  name: string;
  unit: string;
  unitPrice: number;
  contractQty: number;
  contractValue: number;
  acceptedQty: number;
  acceptedValue: number;
  remainingQty: number;
  remainingValue: number;
  pakds: { code: string; checked: boolean }[];
  pakdAllocationStatus: "Đã phân bổ" | "Chưa phân bổ";
  monthlyDetails: {
    month4: MonthQtyValue;
    month5: MonthQtyValue;
    month6: MonthQtyValue;
    month7: MonthQtyValue;
    month8: MonthQtyValue;
  };
  subBreakdown?: {
    pakdCode: string;
    pakdItem: string;
    months: {
      month4: MonthQtyValue;
      month5: MonthQtyValue;
      month6: MonthQtyValue;
      month7: MonthQtyValue;
      month8: MonthQtyValue;
    };
    totalValue: number;
    hasWarning?: boolean;
  }[];
}

const sampleContractItems: ContractItemRow[] = [
  {
    id: "item-1",
    name: "Chi phí thuê ngoài threat hunting 50 máy định kỳ 2 lần từ 01/04/2025 đến 23/06/2025",
    unit: "Manmonth",
    unitPrice: 20000000,
    contractQty: 500,
    contractValue: 100000000000,
    acceptedQty: 500,
    acceptedValue: 100000000000,
    remainingQty: 500,
    remainingValue: 100000000000,
    pakds: [
      { code: "1446A TTr - TTKDMB", checked: true },
      { code: "1447A TTr - TTKDMB", checked: true },
      { code: "1448A TTr - TTKDMB", checked: false },
    ],
    pakdAllocationStatus: "Đã phân bổ",
    monthlyDetails: {
      month4: { qty: 500, value: 100000000000 },
      month5: { qty: 500, value: 100000000000 },
      month6: { qty: 500, value: 100000000000 },
      month7: { qty: 500, value: 100000000000 },
      month8: { qty: 500, value: 100000000000 },
    },
    subBreakdown: [
      {
        pakdCode: "1446A TTr - TTKDMB",
        pakdItem: "Chi phí thuê ngoài threat hunting 50 máy định kỳ 2 lần từ 01/04/2025 đến 23/06/2025",
        months: {
          month4: { qty: 500, value: 100000000 },
          month5: { qty: 500, value: 100000000 },
          month6: { qty: 500, value: 100000000 },
          month7: { qty: 500, value: 100000000 },
          month8: { qty: 500, value: 100000000 },
        },
        totalValue: 100000000,
        hasWarning: true,
      },
      {
        pakdCode: "1447A TTr - TTKDMB",
        pakdItem: "Chi phí thuê ngoài threat hunting 50 máy định kỳ 2 lần từ 01/04/2025 đến 23/06/2025",
        months: {
          month4: { qty: 500, value: 100000000 },
          month5: { qty: 500, value: 100000000 },
          month6: { qty: 500, value: 100000000 },
          month7: { qty: 500, value: 100000000 },
          month8: { qty: 500, value: 100000000 },
        },
        totalValue: 100000000,
        hasWarning: true,
      },
    ],
  },
  {
    id: "item-2",
    name: "Dịch vụ đánh giá an toàn thông tin ứng dụng",
    unit: "Ứng dụng",
    unitPrice: 36100000,
    contractQty: 500,
    contractValue: 100000000000,
    acceptedQty: 500,
    acceptedValue: 100000000000,
    remainingQty: 500,
    remainingValue: 100000000000,
    pakds: [
      { code: "1446A TTr - TTKDMB", checked: true },
      { code: "1447A TTr - TTKDMB", checked: true },
      { code: "1448A TTr - TTKDMB", checked: false },
    ],
    pakdAllocationStatus: "Đã phân bổ",
    monthlyDetails: {
      month4: { qty: 500, value: 100000000000 },
      month5: { qty: 500, value: 100000000000 },
      month6: { qty: 500, value: 100000000000 },
      month7: { qty: 500, value: 100000000000 },
      month8: { qty: 500, value: 100000000000 },
    },
  },
  {
    id: "item-3",
    name: "Scan lỗ hổng thiết bị",
    unit: "Thiết bị",
    unitPrice: 11400000,
    contractQty: 500,
    contractValue: 100000000000,
    acceptedQty: 500,
    acceptedValue: 100000000000,
    remainingQty: 500,
    remainingValue: 100000000000,
    pakds: [
      { code: "1446A TTr - TTKDMB", checked: true },
      { code: "1447A TTr - TTKDMB", checked: true },
      { code: "1448A TTr - TTKDMB", checked: false },
    ],
    pakdAllocationStatus: "Đã phân bổ",
    monthlyDetails: {
      month4: { qty: 500, value: 100000000000 },
      month5: { qty: 500, value: 100000000000 },
      month6: { qty: 500, value: 100000000000 },
      month7: { qty: 500, value: 100000000000 },
      month8: { qty: 500, value: 100000000000 },
    },
  },
  {
    id: "item-4",
    name: "Dịch vụ đánh giá an toàn thông tin thiết bị mạng",
    unit: "Thiết bị",
    unitPrice: 1500000,
    contractQty: 500,
    contractValue: 100000000000,
    acceptedQty: 500,
    acceptedValue: 100000000000,
    remainingQty: 500,
    remainingValue: 100000000000,
    pakds: [
      { code: "1446A TTr - TTKDMB", checked: true },
      { code: "1447A TTr - TTKDMB", checked: true },
      { code: "1448A TTr - TTKDMB", checked: false },
    ],
    pakdAllocationStatus: "Đã phân bổ",
    monthlyDetails: {
      month4: { qty: 500, value: 100000000000 },
      month5: { qty: 500, value: 100000000000 },
      month6: { qty: 500, value: 100000000000 },
      month7: { qty: 500, value: 100000000000 },
      month8: { qty: 500, value: 100000000000 },
    },
  },
];

const sampleDetailActivities = [
  {
    id: "act-1",
    title: "Tải lên Biên bản nghiệm thu 144/TTr-TTKDMB",
    user: "Nguyễn Văn A",
    time: "18/04/2025 10:23",
    type: "upload_green",
  },
  {
    id: "act-2",
    title: 'Cập nhật trạng thái sang "Đang thực hiện"',
    user: "Nguyễn Văn A",
    time: "18/04/2025 10:24",
    type: "status_blue",
  },
  {
    id: "act-3",
    title: "Tải lên Hợp đồng 144/TTr-TTKDMB",
    user: "Nguyễn Văn A",
    time: "18/04/2025 10:25",
    type: "upload_cyan",
  },
  {
    id: "act-4",
    title: 'Cập nhật trạng thái sang "Đã hoàn thành"',
    user: "Nguyễn Văn A",
    time: "18/04/2025 14:32",
    type: "status_blue",
  },
];

function formatCurrency(val: number): string {
  return new Intl.NumberFormat("vi-VN").format(val);
}

export function ContractAcceptanceDetailPage({
  onBack,
}: ContractAcceptanceDetailPageProps) {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({
    "item-1": true,
  });

  const [checkedPakds, setCheckedPakds] = useState<Record<string, boolean>>({
    "item-1-0": true,
    "item-1-1": true,
    "item-1-2": false,
    "item-2-0": true,
    "item-2-1": true,
    "item-2-2": false,
    "item-3-0": true,
    "item-3-1": true,
    "item-3-2": false,
    "item-4-0": true,
    "item-4-1": true,
    "item-4-2": false,
  });

  const toggleRow = (id: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const togglePakdCheck = (key: string) => {
    setCheckedPakds((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-6 bg-[#f8f7fa] p-6">
      {/* Header back button */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex size-9 items-center justify-center rounded-[6px] border border-[#dbdade] bg-white text-slate-600 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
        >
          <ArrowLeft className="size-4" />
        </button>
        <h1 className="text-[20px] font-bold text-[#2f2b3d]">
          Chi tiết nghiệm thu Hợp đồng
        </h1>
      </div>

      {/* Card 1: Thông tin chung */}
      <WidgetCard className="space-y-4">
        <h3 className="text-[16px] font-bold text-[#2f2b3d]">
          Thông tin chung
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 gap-x-8 text-[13px]">
          <div className="grid grid-cols-[220px_1fr] items-center">
            <span className="text-slate-500">Số Hợp đồng</span>
            <span className="font-semibold text-slate-900">TT - 2025 - 028</span>
          </div>

          <div className="grid grid-cols-[220px_1fr] items-center">
            <span className="text-slate-500">Ngày ký</span>
            <span className="font-normal text-slate-900">18/04/2026</span>
          </div>

          <div className="grid grid-cols-[220px_1fr] items-center">
            <span className="text-slate-500">Khách hàng</span>
            <span className="font-normal text-slate-900">Công ty TNHH Bluecyber</span>
          </div>

          <div className="grid grid-cols-[220px_1fr] items-center">
            <span className="text-slate-500">Trạng thái</span>
            <div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-[4px] text-[12px] font-medium bg-[#e8f4fd] text-[#3f81ea]">
                Đang thực hiện
              </span>
            </div>
          </div>

          <div className="grid grid-cols-[220px_1fr] items-center">
            <span className="text-slate-500">Tổng giá trị</span>
            <span className="font-normal text-slate-900">900.000.000 VNĐ</span>
          </div>

          <div className="grid grid-cols-[220px_1fr] items-center">
            <span className="text-slate-500">Tổng giá trị đã nghiệm thu</span>
            <span className="font-normal text-slate-900">600.000.000 VNĐ</span>
          </div>

          <div className="grid grid-cols-[220px_1fr] items-center">
            <span className="text-slate-500">Còn lại</span>
            <span className="font-normal text-slate-900">300.000.000 VNĐ</span>
          </div>
        </div>
      </WidgetCard>

      {/* Card 2: Chi tiết hạng mục */}
      <WidgetCard className="space-y-4">
        <h3 className="text-[16px] font-bold text-[#2f2b3d]">
          Chi tiết hạng mục
        </h3>

        <div className="overflow-x-auto custom-scrollbar pb-2">
          <div className="border border-[#dbdade] rounded-[6px] overflow-hidden min-w-[2750px]">
            <table className="w-full border-collapse text-left text-[12px] bg-white">
              <thead>
                <tr className="border-b border-[#dbdade] text-[12px] font-semibold text-[#2f2b3d] bg-white">
                  <th rowSpan={3} className="border-r border-[#dbdade] px-4 py-3 min-w-[340px] text-center align-middle">
                    Hạng mục
                  </th>
                  <th rowSpan={3} className="border-r border-[#dbdade] px-3 py-3 text-center min-w-[90px] align-middle">
                    ĐVT
                  </th>
                  <th rowSpan={3} className="border-r border-[#dbdade] px-3 py-3 text-center min-w-[130px] align-middle">
                    Đơn giá
                  </th>
                  <th colSpan={2} className="border-r border-[#dbdade] px-3 py-2 text-center">
                    Theo Hợp đồng
                  </th>
                  <th colSpan={2} className="border-r border-[#dbdade] px-3 py-2 text-center">
                    Đã nghiệm thu
                  </th>
                  <th colSpan={2} className="border-r border-[#dbdade] px-3 py-2 text-center">
                    Còn lại
                  </th>
                  <th rowSpan={3} className="border-r border-[#dbdade] px-4 py-3 min-w-[210px] whitespace-nowrap text-center align-middle">
                    PAKD tương ứng
                  </th>
                  <th rowSpan={3} className="border-r border-[#dbdade] px-3 py-3 text-center min-w-[160px] whitespace-nowrap align-middle">
                    Trạng thái phân bổ PAKD
                  </th>
                  <th colSpan={10} className="px-3 py-2 text-center">
                    Chi tiết nghiệm thu
                  </th>
                </tr>

                <tr className="border-b border-[#dbdade] text-[11px] font-semibold text-[#2f2b3d] bg-white">
                  <th colSpan={2} className="border-r border-[#dbdade] p-0" />
                  <th colSpan={2} className="border-r border-[#dbdade] p-0" />
                  <th colSpan={2} className="border-r border-[#dbdade] p-0" />

                  <th colSpan={2} className="border-r border-[#dbdade] px-2 py-2 text-center">
                    Tháng 4
                  </th>
                  <th colSpan={2} className="border-r border-[#dbdade] px-2 py-2 text-center">
                    Tháng 5
                  </th>
                  <th colSpan={2} className="border-r border-[#dbdade] px-2 py-2 text-center">
                    Tháng 6
                  </th>
                  <th colSpan={2} className="border-r border-[#dbdade] px-2 py-2 text-center">
                    Tháng 7
                  </th>
                  <th colSpan={2} className="px-2 py-2 text-center">
                    Tháng 8
                  </th>
                </tr>

                <tr className="border-b border-[#dbdade] text-[11px] font-semibold text-[#2f2b3d] bg-white">
                  <th className="border-r border-[#dbdade] px-2 py-2 text-center min-w-[60px]">SL</th>
                  <th className="border-r border-[#dbdade] px-3 py-2 text-center min-w-[145px]">Giá trị (Chưa VAT)</th>

                  <th className="border-r border-[#dbdade] px-2 py-2 text-center min-w-[60px]">SL</th>
                  <th className="border-r border-[#dbdade] px-3 py-2 text-center min-w-[145px]">Giá trị (Chưa VAT)</th>

                  <th className="border-r border-[#dbdade] px-2 py-2 text-center min-w-[60px]">SL</th>
                  <th className="border-r border-[#dbdade] px-3 py-2 text-center min-w-[145px]">Giá trị (Chưa VAT)</th>

                  <th className="border-r border-[#dbdade] px-2 py-2 text-center min-w-[60px]">SL</th>
                  <th className="border-r border-[#dbdade] px-3 py-2 text-center min-w-[145px]">Giá trị (Chưa VAT)</th>

                  <th className="border-r border-[#dbdade] px-2 py-2 text-center min-w-[60px]">SL</th>
                  <th className="border-r border-[#dbdade] px-3 py-2 text-center min-w-[145px]">Giá trị (Chưa VAT)</th>

                  <th className="border-r border-[#dbdade] px-2 py-2 text-center min-w-[60px]">SL</th>
                  <th className="border-r border-[#dbdade] px-3 py-2 text-center min-w-[145px]">Giá trị (Chưa VAT)</th>

                  <th className="border-r border-[#dbdade] px-2 py-2 text-center min-w-[60px]">SL</th>
                  <th className="border-r border-[#dbdade] px-3 py-2 text-center min-w-[145px]">Giá trị (Chưa VAT)</th>

                  <th className="border-r border-[#dbdade] px-2 py-2 text-center min-w-[60px]">SL</th>
                  <th className="px-3 py-2 text-center min-w-[145px]">Giá trị (Chưa VAT)</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#dbdade] text-[12px] text-[#2f2b3d]">
                {sampleContractItems.map((item) => {
                  const isExpanded = Boolean(expandedRows[item.id]);

                  return (
                    <div key={item.id} style={{ display: "contents" }}>
                      <tr className="hover:bg-slate-50/70 border-b border-[#dbdade]">
                        <td className="border-r border-[#dbdade] px-4 py-3.5 text-slate-800 align-middle">
                          <div
                            className="flex items-center justify-between gap-3 cursor-pointer select-none"
                            onClick={() => toggleRow(item.id)}
                          >
                            <span className="leading-[18px] text-[12px] text-[#2f2b3d]">{item.name}</span>
                            {isExpanded ? (
                              <ChevronDown className="size-4 text-[#5d586c] shrink-0" />
                            ) : (
                              <ChevronRight className="size-4 text-[#5d586c] shrink-0" />
                            )}
                          </div>
                        </td>

                        <td className="border-r border-[#dbdade] px-3 py-3.5 text-center text-slate-600 align-middle">
                          {item.unit}
                        </td>

                        <td className="border-r border-[#dbdade] px-3 py-3.5 text-right font-normal align-middle whitespace-nowrap">
                          {formatCurrency(item.unitPrice)}
                        </td>

                        <td className="border-r border-[#dbdade] px-2 py-3.5 text-center align-middle">
                          {item.contractQty}
                        </td>
                        <td className="border-r border-[#dbdade] px-3 py-3.5 text-right font-normal align-middle whitespace-nowrap">
                          {formatCurrency(item.contractValue)}
                        </td>

                        <td className="border-r border-[#dbdade] px-2 py-3.5 text-center align-middle">
                          {item.acceptedQty}
                        </td>
                        <td className="border-r border-[#dbdade] px-3 py-3.5 text-right font-normal align-middle whitespace-nowrap">
                          {formatCurrency(item.acceptedValue)}
                        </td>

                        <td className="border-r border-[#dbdade] px-2 py-3.5 text-center align-middle">
                          {item.remainingQty}
                        </td>
                        <td className="border-r border-[#dbdade] px-3 py-3.5 text-right font-normal align-middle whitespace-nowrap">
                          {formatCurrency(item.remainingValue)}
                        </td>

                        <td className="border-r border-[#dbdade] px-4 py-3.5 min-w-[210px] whitespace-nowrap align-middle">
                          <div className="py-0.5 space-y-1.5">
                            {item.pakds.map((pakd, pIdx) => {
                              const key = `${item.id}-${pIdx}`;
                              const isChecked = checkedPakds[key] ?? pakd.checked;
                              return (
                                <div
                                  key={pIdx}
                                  onClick={() => togglePakdCheck(key)}
                                  className="flex items-center gap-1.5 cursor-pointer text-[#393740] hover:text-black whitespace-nowrap select-none"
                                >
                                  <RedCheckbox
                                    checked={isChecked}
                                    onChange={() => togglePakdCheck(key)}
                                  />
                                  <span className="text-[11px] font-normal leading-none whitespace-nowrap">
                                    {pakd.code}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </td>

                        <td className="border-r border-[#dbdade] px-3 py-3.5 text-center min-w-[160px] whitespace-nowrap align-middle">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-[4px] text-[11px] font-medium bg-[#e8f9ee] text-[#28c76f] whitespace-nowrap">
                            {item.pakdAllocationStatus}
                          </span>
                        </td>

                        <td className="border-r border-[#dbdade] px-2 py-3.5 text-center align-middle">
                          {item.monthlyDetails.month4.qty}
                        </td>
                        <td className="border-r border-[#dbdade] px-3 py-3.5 text-right font-normal align-middle whitespace-nowrap">
                          {formatCurrency(item.monthlyDetails.month4.value)}
                        </td>

                        <td className="border-r border-[#dbdade] px-2 py-3.5 text-center align-middle">
                          {item.monthlyDetails.month5.qty}
                        </td>
                        <td className="border-r border-[#dbdade] px-3 py-3.5 text-right font-normal align-middle whitespace-nowrap">
                          {formatCurrency(item.monthlyDetails.month5.value)}
                        </td>

                        <td className="border-r border-[#dbdade] px-2 py-3.5 text-center align-middle">
                          {item.monthlyDetails.month6.qty}
                        </td>
                        <td className="border-r border-[#dbdade] px-3 py-3.5 text-right font-normal align-middle whitespace-nowrap">
                          {formatCurrency(item.monthlyDetails.month6.value)}
                        </td>

                        <td className="border-r border-[#dbdade] px-2 py-3.5 text-center align-middle">
                          {item.monthlyDetails.month7.qty}
                        </td>
                        <td className="border-r border-[#dbdade] px-3 py-3.5 text-right font-normal align-middle whitespace-nowrap">
                          {formatCurrency(item.monthlyDetails.month7.value)}
                        </td>

                        <td className="border-r border-[#dbdade] px-2 py-3.5 text-center align-middle">
                          {item.monthlyDetails.month8.qty}
                        </td>
                        <td className="px-3 py-3.5 text-right font-normal align-middle whitespace-nowrap">
                          {formatCurrency(item.monthlyDetails.month8.value)}
                        </td>
                      </tr>

                      {isExpanded && item.subBreakdown && (
                        <tr className="border-b border-[#dbdade]">
                          <td colSpan={21} className="p-0">
                            <div className="bg-white">
                              <div className="px-4 py-2.5 font-bold text-[13px] text-[#2f2b3d] bg-white border-b border-[#dbdade]">
                                Chi tiết phân bổ nghiệm thu
                              </div>

                              <table className="w-full border-collapse text-left text-[12px] bg-white">
                                <thead>
                                  <tr className="border-b border-[#dbdade] text-[11px] font-semibold text-[#2f2b3d] bg-white">
                                    <th rowSpan={2} className="border-r border-[#dbdade] px-4 py-2.5 w-44 text-center align-middle">
                                      PAKD
                                    </th>
                                    <th rowSpan={2} className="border-r border-[#dbdade] px-4 py-2.5 min-w-[340px] text-center align-middle">
                                      Hạng mục PAKD
                                    </th>
                                    <th colSpan={2} className="border-r border-[#dbdade] px-2 py-1.5 text-center">
                                      Tháng 4
                                    </th>
                                    <th colSpan={2} className="border-r border-[#dbdade] px-2 py-1.5 text-center">
                                      Tháng 5
                                    </th>
                                    <th colSpan={2} className="border-r border-[#dbdade] px-2 py-1.5 text-center">
                                      Tháng 6
                                    </th>
                                    <th colSpan={2} className="border-r border-[#dbdade] px-2 py-1.5 text-center">
                                      Tháng 7
                                    </th>
                                    <th colSpan={2} className="border-r border-[#dbdade] px-2 py-1.5 text-center">
                                      Tháng 8
                                    </th>
                                    <th rowSpan={2} className="px-4 py-2.5 min-w-[190px] text-center align-middle">
                                      <div>Tổng giá trị phân bổ nghiệm thu</div>
                                      <div className="text-[10px] font-normal text-slate-500">Giá trị (chưa VAT)</div>
                                    </th>
                                  </tr>

                                  <tr className="border-b border-[#dbdade] text-[11px] font-semibold text-[#2f2b3d] bg-white">
                                    <th className="border-r border-[#dbdade] px-2 py-1.5 text-center min-w-[55px]">SL</th>
                                    <th className="border-r border-[#dbdade] px-2.5 py-1.5 text-center min-w-[115px]">Giá trị (Chưa VAT)</th>

                                    <th className="border-r border-[#dbdade] px-2 py-1.5 text-center min-w-[55px]">SL</th>
                                    <th className="border-r border-[#dbdade] px-2.5 py-1.5 text-center min-w-[115px]">Giá trị (Chưa VAT)</th>

                                    <th className="border-r border-[#dbdade] px-2 py-1.5 text-center min-w-[55px]">SL</th>
                                    <th className="border-r border-[#dbdade] px-2.5 py-1.5 text-center min-w-[115px]">Giá trị (Chưa VAT)</th>

                                    <th className="border-r border-[#dbdade] px-2 py-1.5 text-center min-w-[55px]">SL</th>
                                    <th className="border-r border-[#dbdade] px-2.5 py-1.5 text-center min-w-[115px]">Giá trị (Chưa VAT)</th>

                                    <th className="border-r border-[#dbdade] px-2 py-1.5 text-center min-w-[55px]">SL</th>
                                    <th className="border-r border-[#dbdade] px-2.5 py-1.5 text-center min-w-[115px]">Giá trị (Chưa VAT)</th>
                                  </tr>
                                </thead>

                                <tbody className="divide-y divide-[#dbdade] text-[12px]">
                                  {item.subBreakdown.map((sub, sIdx) => (
                                    <tr key={sIdx} className="hover:bg-slate-50/50 border-b border-[#dbdade]">
                                      <td className="border-r border-[#dbdade] px-4 py-2.5 font-medium text-[#2f2b3d] whitespace-nowrap align-middle">
                                        {sub.pakdCode}
                                      </td>
                                      <td className="border-r border-[#dbdade] px-4 py-2.5 text-slate-700 leading-[18px] align-middle">
                                        {sub.pakdItem}
                                      </td>

                                      <td className="border-r border-[#dbdade] px-2 py-2 text-center align-middle">
                                        <input
                                          type="text"
                                          defaultValue={sub.months.month4.qty}
                                          className="h-[30px] w-[50px] text-center rounded-[4px] border border-[#dbdade] bg-white text-[12px] text-[#2f2b3d] outline-none hover:border-slate-400 focus:border-[#ff4c51]"
                                        />
                                      </td>
                                      <td className="border-r border-[#dbdade] px-2 py-2 text-right align-middle">
                                        <input
                                          type="text"
                                          defaultValue={formatCurrency(sub.months.month4.value)}
                                          className="h-[30px] w-[110px] text-right rounded-[4px] border border-[#dbdade] bg-white px-2.5 text-[12px] text-[#2f2b3d] outline-none hover:border-slate-400 focus:border-[#ff4c51]"
                                        />
                                      </td>

                                      <td className="border-r border-[#dbdade] px-2 py-2 text-center align-middle">
                                        <input
                                          type="text"
                                          defaultValue={sub.months.month5.qty}
                                          className="h-[30px] w-[50px] text-center rounded-[4px] border border-[#dbdade] bg-white text-[12px] text-[#2f2b3d] outline-none hover:border-slate-400 focus:border-[#ff4c51]"
                                        />
                                      </td>
                                      <td className="border-r border-[#dbdade] px-2 py-2 text-right align-middle">
                                        <input
                                          type="text"
                                          defaultValue={formatCurrency(sub.months.month5.value)}
                                          className="h-[30px] w-[110px] text-right rounded-[4px] border border-[#dbdade] bg-white px-2.5 text-[12px] text-[#2f2b3d] outline-none hover:border-slate-400 focus:border-[#ff4c51]"
                                        />
                                      </td>

                                      <td className="border-r border-[#dbdade] px-2 py-2 text-center align-middle">
                                        <input
                                          type="text"
                                          defaultValue={sub.months.month6.qty}
                                          className="h-[30px] w-[50px] text-center rounded-[4px] border border-[#dbdade] bg-white text-[12px] text-[#2f2b3d] outline-none hover:border-slate-400 focus:border-[#ff4c51]"
                                        />
                                      </td>
                                      <td className="border-r border-[#dbdade] px-2 py-2 text-right align-middle">
                                        <input
                                          type="text"
                                          defaultValue={formatCurrency(sub.months.month6.value)}
                                          className="h-[30px] w-[110px] text-right rounded-[4px] border border-[#dbdade] bg-white px-2.5 text-[12px] text-[#2f2b3d] outline-none hover:border-slate-400 focus:border-[#ff4c51]"
                                        />
                                      </td>

                                      <td className="border-r border-[#dbdade] px-2 py-2 text-center align-middle">
                                        <input
                                          type="text"
                                          defaultValue={sub.months.month7.qty}
                                          className="h-[30px] w-[50px] text-center rounded-[4px] border border-[#dbdade] bg-white text-[12px] text-[#2f2b3d] outline-none hover:border-slate-400 focus:border-[#ff4c51]"
                                        />
                                      </td>
                                      <td className="border-r border-[#dbdade] px-2 py-2 text-right align-middle">
                                        <input
                                          type="text"
                                          defaultValue={formatCurrency(sub.months.month7.value)}
                                          className="h-[30px] w-[110px] text-right rounded-[4px] border border-[#dbdade] bg-white px-2.5 text-[12px] text-[#2f2b3d] outline-none hover:border-slate-400 focus:border-[#ff4c51]"
                                        />
                                      </td>

                                      <td className="border-r border-[#dbdade] px-2 py-2 text-center align-middle">
                                        <input
                                          type="text"
                                          defaultValue={sub.months.month8.qty}
                                          className="h-[30px] w-[50px] text-center rounded-[4px] border border-[#dbdade] bg-white text-[12px] text-[#2f2b3d] outline-none hover:border-slate-400 focus:border-[#ff4c51]"
                                        />
                                      </td>
                                      <td className="border-r border-[#dbdade] px-2 py-2 text-right align-middle">
                                        <input
                                          type="text"
                                          defaultValue={formatCurrency(sub.months.month8.value)}
                                          className="h-[30px] w-[110px] text-right rounded-[4px] border border-[#dbdade] bg-white px-2.5 text-[12px] text-[#2f2b3d] outline-none hover:border-slate-400 focus:border-[#ff4c51]"
                                        />
                                      </td>

                                      <td className="px-4 py-2 text-right align-middle">
                                        <div className="flex items-center justify-end gap-1.5">
                                          <span className="font-normal text-[#2f2b3d] text-[12px] whitespace-nowrap">
                                            {formatCurrency(sub.totalValue)}
                                          </span>
                                          {sub.hasWarning && (
                                            <AlertTriangle className="size-4 text-[#ff4c51] shrink-0 stroke-[2.2]" />
                                          )}
                                        </div>
                                      </td>
                                    </tr>
                                  ))}

                                  <tr className="font-bold text-[#2f2b3d] border-t border-[#dbdade] bg-white">
                                    <td className="border-r border-[#dbdade] px-4 py-3 text-[12px] align-middle">
                                      Tổng phân bổ
                                    </td>
                                    <td className="border-r border-[#dbdade] px-4 py-3 align-middle" />

                                    <td className="border-r border-[#dbdade] px-2 py-3 text-center text-[11px] align-middle" />
                                    <td className="border-r border-[#dbdade] px-2.5 py-3 text-right text-[11px] font-bold align-middle whitespace-nowrap">
                                      100.000.000
                                    </td>

                                    <td className="border-r border-[#dbdade] px-2 py-3 text-center text-[11px] align-middle" />
                                    <td className="border-r border-[#dbdade] px-2.5 py-3 text-right text-[11px] font-bold align-middle whitespace-nowrap">
                                      100.000.000
                                    </td>

                                    <td className="border-r border-[#dbdade] px-2 py-3 text-center text-[11px] align-middle" />
                                    <td className="border-r border-[#dbdade] px-2.5 py-3 text-right text-[11px] font-bold align-middle whitespace-nowrap">
                                      100.000.000
                                    </td>

                                    <td className="border-r border-[#dbdade] px-2 py-3 text-center text-[11px] align-middle" />
                                    <td className="border-r border-[#dbdade] px-2.5 py-3 text-right text-[11px] font-bold align-middle whitespace-nowrap">
                                      100.000.000
                                    </td>

                                    <td className="border-r border-[#dbdade] px-2 py-3 text-center text-[11px] align-middle" />
                                    <td className="border-r border-[#dbdade] px-2.5 py-3 text-right text-[11px] font-bold align-middle whitespace-nowrap">
                                      100.000.000
                                    </td>

                                    <td className="px-4 py-3 text-right text-[11px] font-bold align-middle whitespace-nowrap">
                                      100.000.000
                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                              <div className="flex justify-end py-2.5 px-4 bg-white border-t border-[#dbdade]">
                                <button
                                  type="button"
                                  onClick={() => {
                                    toast.success("Lưu chi tiết phân bổ nghiệm thu thành công!");
                                  }}
                                  className="inline-flex h-[28px] items-center justify-center rounded-[4px] bg-[#ff4c51] px-4 text-[12px] font-medium text-white shadow-2xs hover:bg-[#e64449] transition-colors cursor-pointer"
                                >
                                  Lưu
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </div>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </WidgetCard>

      <RecentActivitiesWidget activities={sampleDetailActivities} />
    </div>
  );
}
