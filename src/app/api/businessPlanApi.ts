import {
  BusinessPlanItem,
  BusinessPlanFilterOptions,
} from "../core/types/businessPlan.types";
import { PageResponse } from "../core/types/common.types";
import { apiFetch } from "./http";
import { sampleBusinessPlans } from "./mocks/businessPlanMock";

export const businessPlanApi = {
  /** Danh sách Phương án kinh doanh */
  async getBusinessPlans(filters: BusinessPlanFilterOptions = {}): Promise<PageResponse<BusinessPlanItem>> {
    try {
      return await apiFetch<PageResponse<BusinessPlanItem>>("/business-plans/search", {
        method: "POST",
        body: JSON.stringify(filters),
      });
    } catch {
      let list = [...sampleBusinessPlans];
      if (filters.status && filters.status !== "all") {
        list = list.filter((item) => item.status === filters.status);
      }
      if (filters.search && filters.search.trim()) {
        const q = filters.search.trim().toLowerCase();
        list = list.filter(
          (item) =>
            item.id.toLowerCase().includes(q) ||
            item.code.toLowerCase().includes(q) ||
            item.title.toLowerCase().includes(q) ||
            item.customerName.toLowerCase().includes(q) ||
            item.proposer.toLowerCase().includes(q)
        );
      }
      const page = filters.page || 1;
      const size = filters.size || 10;
      const totalElements = list.length;
      const totalPages = Math.max(1, Math.ceil(totalElements / size));
      const start = (page - 1) * size;
      const content = list.slice(start, start + size);
      return { content, page, size, totalElements, totalPages };
    }
  },

  /** Chi tiết Phương án kinh doanh theo ID */
  async getBusinessPlanById(id: string): Promise<BusinessPlanItem | null> {
    try {
      return await apiFetch<BusinessPlanItem>(`/business-plans/${encodeURIComponent(id)}`);
    } catch {
      const found = sampleBusinessPlans.find((p) => p.id === id);
      return found || sampleBusinessPlans[0] || null;
    }
  },

  /** Tạo mới Phương án kinh doanh */
  async createBusinessPlan(data: Partial<BusinessPlanItem>): Promise<BusinessPlanItem> {
    try {
      return await apiFetch<BusinessPlanItem>("/business-plans", {
        method: "POST",
        body: JSON.stringify(data),
      });
    } catch {
      const newPlan: BusinessPlanItem = {
        id: data.id || `${Math.floor(100 + Math.random() * 900)}/TTr-TTKDMB`,
        code: data.code || `TT - 2026 - ${Math.floor(100 + Math.random() * 900)}`,
        title: data.title || "Phương án kinh doanh mới",
        planDate: data.planDate || new Date().toLocaleDateString("vi-VN"),
        proposingUnit: data.proposingUnit || "TTKDMB",
        proposer: data.proposer || "Người dùng hiện tại",
        phone: data.phone || "0912345678",
        customerName: data.customerName || "Chưa xác định",
        packageType: data.packageType || "Mua sắm hàng hoá",
        biddingPackageName: data.biddingPackageName || "Gói thầu thiết bị",
        procurementType: data.procurementType || "Chào hàng cạnh tranh",
        status: data.status || "Chờ duyệt",
        financial: data.financial || {
          revenue: (data.financial?.revenue || 1000000000),
          revenueVat: 80000000,
          revenueWithVat: 1080000000,
          cost: 900000000,
          costVat: 72000000,
          costWithVat: 972000000,
          procurementCost: 900000000,
          procurementCostVat: 72000000,
          procurementCostWithVat: 972000000,
          generalAdminCost: 1000000,
          grossProfit: 100000000,
          corporateTax: 20000000,
          netProfit: 80000000,
          profitOnCostRatio: 8.8,
          profitOnRevenueRatio: 8.0,
        },
        lineItems: data.lineItems || [],
        appendices: data.appendices || [],
        activities: [
          {
            id: `act-${Date.now()}`,
            title: "Tạo mới phương án kinh doanh",
            user: "Người dùng hiện tại",
            time: new Date().toLocaleString("vi-VN"),
            type: "created",
          },
        ],
      };
      sampleBusinessPlans.unshift(newPlan);
      return newPlan;
    }
  },

  /** Cập nhật trạng thái Phương án kinh doanh */
  async updateBusinessPlanStatus(id: string, status: BusinessPlanItem["status"]): Promise<BusinessPlanItem> {
    try {
      return await apiFetch<BusinessPlanItem>(`/business-plans/${encodeURIComponent(id)}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
    } catch {
      const item = sampleBusinessPlans.find((p) => p.id === id);
      if (item) {
        item.status = status;
        item.activities.unshift({
          id: `act-${Date.now()}`,
          title: `Cập nhật trạng thái sang "${status}"`,
          user: "Người dùng hiện tại",
          time: new Date().toLocaleString("vi-VN"),
          type: status === "Đã duyệt" ? "approved" : "updated",
        });
        return item;
      }
      throw new Error("Không tìm thấy phương án kinh doanh");
    }
  },
};
