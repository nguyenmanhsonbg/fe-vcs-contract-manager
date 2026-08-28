import { ChevronRight, CheckCheck } from "lucide-react";
import { toast } from "sonner";
import { WidgetCard } from "./WidgetCard";
import {
  IconActivityDoc,
  IconActivityDocPlus,
  IconActivityDocUpload,
} from "../icons";

export interface ActivityItem {
  id: string;
  title: string;
  user: string;
  time: string;
  type?: "upload_green" | "upload_cyan" | "status_blue" | "doc_plus" | "doc_upload" | string;
}

interface RecentActivitiesWidgetProps {
  title?: string;
  activities?: ActivityItem[];
  onViewAll?: () => void;
  className?: string;
  emptyText?: string;
}

export function RecentActivitiesWidget({
  title = "Nhật ký gần đây",
  activities = [],
  onViewAll,
  className = "",
  emptyText = "Chưa có nhật ký hoạt động gần đây.",
}: RecentActivitiesWidgetProps) {
  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    } else {
      toast.info("Xem toàn bộ lịch sử hoạt động");
    }
  };

  const renderIcon = (type?: string) => {
    if (type === "upload_green" || type === "doc_plus") {
      return (
        <div className="size-10 rounded-full flex items-center justify-center shrink-0 z-10 bg-[#e8f9ee] text-[#28c76f]">
          <IconActivityDocPlus className="size-5" />
        </div>
      );
    }
    if (type === "upload_cyan" || type === "doc_upload") {
      return (
        <div className="size-10 rounded-full flex items-center justify-center shrink-0 z-10 bg-[#e0f7fa] text-[#00bad1]">
          <IconActivityDocUpload className="size-5" />
        </div>
      );
    }
    if (type === "status_blue") {
      return (
        <div className="size-10 rounded-full flex items-center justify-center shrink-0 z-10 bg-[#e8f4fd] text-[#3f81ea]">
          <CheckCheck className="size-5" />
        </div>
      );
    }
    return (
      <div className="size-10 rounded-full flex items-center justify-center shrink-0 z-10 bg-slate-100 text-slate-600">
        <IconActivityDoc className="size-5" />
      </div>
    );
  };

  return (
    <WidgetCard className={`space-y-4 ${className}`}>
      {/* Widget Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-bold text-[#2f2b3d]">{title}</h3>
        <button
          onClick={handleViewAll}
          className="flex items-center gap-1 text-[13px] font-medium text-[#3f81ea] hover:underline cursor-pointer"
        >
          <span>Xem tất cả nhật ký</span>
          <ChevronRight className="size-4" />
        </button>
      </div>

      {/* Activity Timeline List */}
      {activities.length === 0 ? (
        <p className="text-[12px] text-slate-400 py-2">{emptyText}</p>
      ) : (
        <div className="relative pl-0 space-y-4">
          {/* Vertical connecting line between icons */}
          {activities.length > 1 && (
            <div className="absolute left-[19px] top-5 bottom-5 w-[1.5px] bg-[#e6e6e8]" />
          )}

          {activities.map((act) => (
            <div
              key={act.id}
              className="relative flex items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3.5 min-w-0">
                {renderIcon(act.type)}

                <div className="pt-0.5 min-w-0">
                  <p className="text-[13px] text-[#2f2b3d] font-normal leading-[20px] truncate sm:whitespace-normal">
                    {act.title}
                  </p>
                  <p className="text-[12px] text-[#8f8d95] mt-0.5">
                    {act.user}
                  </p>
                </div>
              </div>

              <div className="text-[12px] text-[#8f8d95] shrink-0 font-normal self-start pt-1 font-mono sm:font-sans">
                {act.time}
              </div>
            </div>
          ))}
        </div>
      )}
    </WidgetCard>
  );
}
