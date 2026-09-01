import {
  ProposalFilterOptions,
  ProposalPaginatedResponse,
  ProposalDetailDto,
  ProposalLineItemDto,
  ProposalQuotationDto,
} from "../core/types/proposal.types";
import { apiFetch } from "./http";
import { sampleProposals } from "./mocks/proposalMock";

export const proposalApi = {
  /** Danh sách Tờ trình từ PostgreSQL backend (có fallback mock data theo Figma) */
  async getProposals(filters: ProposalFilterOptions = {}): Promise<ProposalPaginatedResponse> {
    try {
      return await apiFetch<ProposalPaginatedResponse>("/proposals/search", {
        method: "POST",
        body: JSON.stringify(filters),
      });
    } catch {
      let list = [...sampleProposals];
      if (filters.category && filters.category !== "all") {
        list = list.filter((item) => item.category.toLowerCase().includes(filters.category!.toLowerCase()));
      }
      if (filters.valueFilter && filters.valueFilter !== "all") {
        if (filters.valueFilter === "under50") list = list.filter((item) => item.amount < 50000000);
        else if (filters.valueFilter === "50to100") list = list.filter((item) => item.amount >= 50000000 && item.amount <= 100000000);
        else if (filters.valueFilter === "over100") list = list.filter((item) => item.amount > 100000000);
      }
      if (filters.search && filters.search.trim()) {
        const q = filters.search.trim().toLowerCase();
        list = list.filter(
          (item) =>
            item.code.toLowerCase().includes(q) ||
            item.title.toLowerCase().includes(q) ||
            item.supplier.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q)
        );
      }
      const page = filters.page || 1;
      const size = filters.size || 10;
      const totalElements = list.length;
      const totalPages = Math.ceil(totalElements / size) || 1;
      const start = (page - 1) * size;
      const content = list.slice(start, start + size);
      return { content, page, size, totalElements, totalPages };
    }
  },

  /** Chi tiết Tờ trình theo ID */
  async getProposalById(id: string): Promise<ProposalDetailDto | null> {
    try {
      return await apiFetch<ProposalDetailDto>(`/proposals/${id}`);
    } catch (error) {
      console.error(`Failed to fetch proposal detail ${id}:`, error);
      return null;
    }
  },

  /** Cập nhật thông tin Tờ trình */
  async updateProposal(
    id: string,
    data: {
      title?: string;
      proposalNumber?: string;
      proposalDate?: string;
      proposingUnit?: string;
      proposalContent?: string;
      purpose?: string;
      legalBasis?: string;
      budgetSource?: string;
      executionPeriod?: string;
      version?: number;
    }
  ): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  },

  /** Thêm hạng mục vào Tờ trình */
  async addProposalItem(id: string, item: ProposalLineItemDto): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/items`, {
      method: "POST",
      body: JSON.stringify(item),
    });
  },

  async updateProposalItem(id: string, itemId: string, item: ProposalLineItemDto): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/items/${itemId}`, {
      method: "PATCH",
      body: JSON.stringify(item),
    });
  },

  async removeProposalItem(id: string, itemId: string): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/items/${itemId}`, { method: "DELETE" });
  },

  async addProposalQuotation(
    id: string,
    quotation: Pick<ProposalQuotationDto, "vendorNameRaw" | "totalValue" | "quotationDate">
  ): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/quotations`, {
      method: "POST",
      body: JSON.stringify(quotation),
    });
  },

  async updateProposalQuotation(
    id: string,
    quotationId: string,
    quotation: Pick<ProposalQuotationDto, "vendorNameRaw" | "totalValue" | "quotationDate">
  ): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/quotations/${quotationId}`, {
      method: "PATCH",
      body: JSON.stringify(quotation),
    });
  },

  async removeProposalQuotation(id: string, quotationId: string): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/quotations/${quotationId}`, { method: "DELETE" });
  },

  async selectProposalQuotation(id: string, quotationId: string, selectionReason?: string): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/quotations/${quotationId}/select`, {
      method: "POST",
      body: JSON.stringify({ selectionReason }),
    });
  },

  async linkProposalDocument(id: string, documentId: string, documentRole = "REFERENCE"): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/documents`, {
      method: "POST",
      body: JSON.stringify({ documentId, documentRole, requiredForSubmit: false }),
    });
  },

  async unlinkProposalDocument(id: string, linkId: string): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/documents/${linkId}`, { method: "DELETE" });
  },

  /** Trình phê duyệt Tờ trình */
  async submitProposal(id: string): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/submit`, {
      method: "POST",
    });
  },

  /** Hủy Tờ trình */
  async cancelProposal(id: string, reason: string): Promise<ProposalDetailDto> {
    return apiFetch<ProposalDetailDto>(`/proposals/${id}/cancel`, {
      method: "POST",
      body: JSON.stringify({ reason }),
    });
  },
};
