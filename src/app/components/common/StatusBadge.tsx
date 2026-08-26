import React from "react";

export type StatusVariant = "info" | "success" | "warning" | "danger" | "neutral" | "purple";

export interface StatusBadgeProps {
  status?: string;
  variant?: StatusVariant;
  label?: string;
  className?: string;
}

const VARIANT_STYLES: Record<StatusVariant, string> = {
  info: "bg-[#e8f3ff] text-[#3f81ea]",
  success: "bg-[#e9f9f0] text-[#28c76f]",
  warning: "bg-[#fff2e5] text-[#ff9f43]",
  danger: "bg-[#ffecee] text-[#ff4c51]",
  purple: "bg-[#f3e8ff] text-[#a855f7]",
  neutral: "bg-[#f1f0f2] text-[#8f8d95]",
};

const STATUS_VARIANT_MAP: Record<string, StatusVariant> = {
  // Common Vietnamese Statuses
  "Chờ đối soát": "warning",
  "Đang đánh giá": "info",
  "Chờ ký kết": "success",
  "Cảnh báo": "danger",
  "Mới khởi tạo": "neutral",
  "Đang thực hiện": "info",
  "Đã hoàn thành": "success",
  "Tạm dừng": "warning",
  "Đã nghiệm thu": "success",
  "Đã nghiệm thu toàn bộ": "success",
  "Nghiệm thu một phần": "info",
  "Chưa nghiệm thu": "neutral",
  "Đã thanh toán": "info",
  "Chờ phê duyệt": "warning",
  "Yêu cầu chỉnh sửa": "warning",
  "Đã ký": "info",
  "Đã giao hàng": "info",
  "Nghiệm thu": "purple",
  "Thanh lý": "success",
  "Hủy": "danger",
  "Đã duyệt": "success",
  "Từ chối": "danger",
  "Lưu nháp": "neutral",

  // Document OCR Statuses
  confirmed: "success",
  review: "warning",
  failed: "danger",
  ocr: "info",
  pending: "warning",
  processing: "info",
};

const STATUS_LABEL_MAP: Record<string, string> = {
  confirmed: "Đã xác nhận",
  review: "Chờ đối soát",
  failed: "Lỗi",
  ocr: "Đang xử lý",
  pending: "Đang xử lý",
  processing: "Đang xử lý",
};

export function StatusBadge({ status, variant, label, className = "" }: StatusBadgeProps) {
  const resolvedVariant = variant || (status ? STATUS_VARIANT_MAP[status] : undefined) || "neutral";
  const displayLabel = label || (status ? STATUS_LABEL_MAP[status] : undefined) || status || "";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-[6px] text-[12px] font-medium leading-tight whitespace-nowrap ${VARIANT_STYLES[resolvedVariant]} ${className}`}
    >
      {displayLabel}
    </span>
  );
}
