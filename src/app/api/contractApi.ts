import {
  ContractDetailDto,
  ContractPageResponse,
  ContractStatsDto,
  ContractActivityDto,
  ContractTemplateVersionDto,
  ContractClauseTemplateDto,
  ContractTemplateOption,
} from "../core/types/contract.types";
import { apiFetch, apiBlob, apiDownload } from "./http";

export const contractApi = {
  async getContracts(
    params: { q?: string; contractType?: string; status?: string; page?: number; size?: number } = {}
  ): Promise<ContractPageResponse> {
    const query = new URLSearchParams();
    Object.entries(params).forEach(
      ([key, value]) => value !== undefined && value !== "" && query.set(key, String(value))
    );
    return apiFetch<ContractPageResponse>(`/contracts?${query}`);
  },

  async getContractTemplates(): Promise<ContractTemplateOption[]> {
    return apiFetch<ContractTemplateOption[]>("/contracts/templates");
  },

  async getContractTemplateVersions(contractType: string): Promise<ContractTemplateVersionDto[]> {
    return apiFetch<ContractTemplateVersionDto[]>(
      `/contract-templates?contractType=${encodeURIComponent(contractType)}`
    );
  },

  async getPublishedContractTemplates(): Promise<ContractTemplateVersionDto[]> {
    return apiFetch<ContractTemplateVersionDto[]>("/contract-templates");
  },

  async getContractTemplate(templateVersionId: string): Promise<ContractTemplateVersionDto> {
    return apiFetch<ContractTemplateVersionDto>(`/contract-templates/${templateVersionId}`);
  },

  async getContractTemplateClauses(templateVersionId: string): Promise<ContractClauseTemplateDto[]> {
    const result = await apiFetch<ContractClauseTemplateDto[] | { clauses: ContractClauseTemplateDto[] }>(
      `/contract-templates/${templateVersionId}/clauses`
    );
    return Array.isArray(result) ? result : result.clauses;
  },

  async previewContract(data: unknown): Promise<Blob> {
    return apiBlob("/contracts/preview", data);
  },

  async previewSavedContract(id: string): Promise<Blob> {
    return apiDownload(`/contracts/${id}/preview`, "POST");
  },

  async exportContract(id: string, format: "docx" | "pdf" = "docx"): Promise<Blob> {
    return apiDownload(`/contracts/${id}/export?format=${format}`);
  },

  async getContractStats(): Promise<ContractStatsDto> {
    return apiFetch<ContractStatsDto>("/contracts/stats");
  },

  async getContractActivity(size = 10): Promise<ContractActivityDto[]> {
    return apiFetch<ContractActivityDto[]>(`/contracts/activity?size=${size}`);
  },

  async getContract(id: string): Promise<ContractDetailDto> {
    return apiFetch<ContractDetailDto>(`/contracts/${id}`);
  },

  async createContractDraft(templateVersionId: string): Promise<ContractDetailDto> {
    return apiFetch<ContractDetailDto>("/contracts/drafts", {
      method: "POST",
      body: JSON.stringify({ templateVersionId }),
    });
  },

  async saveContractDraft(id: string, data: Record<string, unknown>, version: number): Promise<ContractDetailDto> {
    return apiFetch<ContractDetailDto>(`/contracts/${id}/draft`, {
      method: "PATCH",
      body: JSON.stringify({ data, version }),
    });
  },

  async createContract(data: unknown): Promise<ContractDetailDto> {
    return apiFetch<ContractDetailDto>("/contracts", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async updateContract(id: string, data: unknown): Promise<ContractDetailDto> {
    return apiFetch<ContractDetailDto>(`/contracts/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  },

  async contractFromProposal(proposalId: string): Promise<ContractDetailDto> {
    return apiFetch<ContractDetailDto>(`/contracts/from-proposal?proposalId=${encodeURIComponent(proposalId)}`, {
      method: "POST",
      headers: { "Idempotency-Key": `proposal:${proposalId}` },
    });
  },

  async contractFromExtraction(extractionResultId: string): Promise<ContractDetailDto> {
    return apiFetch<ContractDetailDto>(
      `/contracts/from-extraction?extractionResultId=${encodeURIComponent(extractionResultId)}`,
      { method: "POST" }
    );
  },

  async contractFromBidding(data: unknown): Promise<ContractDetailDto> {
    return apiFetch<ContractDetailDto>("/contracts/from-bidding-result", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async contractAction(id: string, action: string, body?: unknown): Promise<ContractDetailDto> {
    return apiFetch<ContractDetailDto>(`/contracts/${id}/${action}`, {
      method: "POST",
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  },

  async contractApproval(id: string, body: unknown): Promise<ContractDetailDto> {
    return apiFetch<ContractDetailDto>(`/contracts/${id}/approval-actions`, {
      method: "POST",
      body: JSON.stringify(body),
    });
  },
};
