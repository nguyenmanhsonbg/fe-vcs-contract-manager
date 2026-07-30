import { Badge } from "./ui/badge";
import { DocStatus, STATUS_LABELS } from "../data/mock";

const STYLES: Record<DocStatus, string> = {
  pending: "bg-[#007bff]/15 text-[#007bff] border-none",
  ocr: "bg-[#007bff]/15 text-[#007bff] border-none",
  review: "bg-[#ff9f43]/15 text-[#ff9f43] border-none",
  confirmed: "bg-[#28c76f]/15 text-[#28c76f] border-none",
  failed: "bg-[#ea5455]/15 text-[#ea5455] border-none",
};

export function StatusBadge({ status }: { status: DocStatus }) {
  return (
    <Badge variant="outline" className={`rounded-[4px] px-2.5 py-[3px] font-medium text-[13px] ${STYLES[status]}`}>
      {STATUS_LABELS[status]}
    </Badge>
  );
}

export function ConfidencePill({ value }: { value: number }) {
  const tone =
    value >= 85
      ? "bg-[#28c76f]/15 text-[#28c76f]"
      : value >= 70
      ? "bg-[#ff9f43]/15 text-[#ff9f43]"
      : "bg-[#ea5455]/15 text-[#ea5455]";
  return (
    <span className={`inline-flex items-center rounded-[4px] px-1.5 py-[3px] text-xs font-medium ${tone}`}>
      {value}%
    </span>
  );
}
