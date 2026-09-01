import { DigitizedDoc, DocumentFilterOptions, ExtractionFieldSpec } from "../core/types/document.types";
import { PageResponse } from "../core/types/common.types";
import { apiFetch, apiDownload, API_BASE } from "./http";

export const docApi = {
  /** Search all documents and apply filters/widgets/date range/sort. */
  async getDocuments(filters?: DocumentFilterOptions): Promise<PageResponse<DigitizedDoc>> {
    return apiFetch<PageResponse<DigitizedDoc>>("/documents/search", {
      method: "POST",
      body: JSON.stringify(filters || {}),
    });
  },

  /** Lấy chi tiết tài liệu theo ID từ Spring Boot REST API /api/v1/documents/{id} */
  async getDocumentById(id: string): Promise<DigitizedDoc | null> {
    try {
      return await apiFetch<DigitizedDoc>(`/documents/${id}`);
    } catch (error) {
      console.error(`Failed to load document ${id}:`, error);
      return null;
    }
  },

  /** Tải file gốc của tài liệu qua endpoint preview của document service. */
  async downloadDocument(id: string): Promise<Blob> {
    return apiDownload(`/documents/${id}/preview`);
  },

  /** Tải file lên Spring Boot Backend qua POST /api/v1/documents/upload (Multipart Form Data) */
  async uploadDocument(file: File): Promise<DigitizedDoc> {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${API_BASE}/documents/upload`, {
      method: "POST",
      body: formData,
    });
    if (!res.ok) {
      throw new Error(`Upload failed: ${res.statusText}`);
    }
    return await res.json();
  },

  /** Cập nhật thông tin trường bóc tách via PATCH /api/v1/documents/{docId}/fields/{fieldId} */
  async updateDocumentField(
    docId: string,
    fieldId: string,
    newValue: string,
    reason?: string
  ): Promise<DigitizedDoc> {
    return apiFetch<DigitizedDoc>(`/documents/${docId}/fields/${fieldId}`, {
      method: "PATCH",
      body: JSON.stringify({ value: newValue, reason }),
    });
  },

  /** Xác nhận dữ liệu số hóa via POST /api/v1/documents/{docId}/confirm */
  async confirmDocument(docId: string): Promise<DigitizedDoc> {
    return apiFetch<DigitizedDoc>(`/documents/${docId}/confirm`, {
      method: "POST",
    });
  },

  /** Chạy lại tiến trình OCR AI via POST /api/v1/documents/{docId}/rerun-ocr */
  async rerunOCR(docId: string): Promise<DigitizedDoc> {
    return apiFetch<DigitizedDoc>(`/documents/${docId}/rerun-ocr`, {
      method: "POST",
    });
  },

  /** Gửi raw OCR + field schema sang LLM qua backend. */
  async extractFields(docId: string, fields?: ExtractionFieldSpec[]): Promise<DigitizedDoc> {
    return apiFetch<DigitizedDoc>(`/documents/${docId}/extract-fields`, {
      method: "POST",
      body: JSON.stringify(fields ?? []),
    });
  },
};
