import {
  DOCUMENTS as initialDocuments,
  PRODUCTS as initialProducts,
  DigitizedDoc,
  DocStatus,
  DocType,
  ExtractedField,
  EditLogEntry,
  Product,
} from "../data/mock";

// In-memory data store for state management before real backend endpoint wiring
let documentsStore: DigitizedDoc[] = [...initialDocuments];
let productsStore: Product[] = [...initialProducts];

export interface DocumentFilterOptions {
  search?: string;
  type?: string;
  status?: string;
  uploadedBy?: string;
  assignedTo?: string;
  lowConfidenceOnly?: boolean;
}

/**
 * Service API Abstraction Layer.
 * To integrate with a real REST Backend, replace the internal promise logic
 * with standard `fetch('/api/...')` calls.
 */
export const docApi = {
  /** Fetch all digitized documents with optional filtering */
  async getDocuments(filters?: DocumentFilterOptions): Promise<DigitizedDoc[]> {
    let result = [...documentsStore];
    if (!filters) return result;

    const { search, type, status, uploadedBy, assignedTo, lowConfidenceOnly } = filters;

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (d) => d.fileName.toLowerCase().includes(q) || d.id.toLowerCase().includes(q)
      );
    }
    if (type && type !== "all") {
      result = result.filter((d) => d.type === type);
    }
    if (status && status !== "all") {
      result = result.filter((d) => d.status === status);
    }
    if (uploadedBy && uploadedBy !== "all") {
      result = result.filter((d) => d.uploadedBy === uploadedBy);
    }
    if (assignedTo && assignedTo !== "all") {
      result = result.filter((d) => d.assignedTo === assignedTo);
    }
    if (lowConfidenceOnly) {
      result = result.filter((d) => d.avgConfidence < 85);
    }

    return result;
  },

  /** Get detail of a single document by ID */
  async getDocumentById(id: string): Promise<DigitizedDoc | null> {
    const doc = documentsStore.find((d) => d.id === id);
    return doc ? { ...doc } : null;
  },

  /** Upload a new document file */
  async uploadDocument(file: File, type: DocType = "proposal"): Promise<DigitizedDoc> {
    const newId = `TT-2025-0${Math.floor(40 + Math.random() * 50)}`;
    const nowStr = new Date().toLocaleDateString("vi-VN") + " " + new Date().toLocaleTimeString("vi-VN", { hour: '2-digit', minute: '2-digit' });

    const newDoc: DigitizedDoc = {
      id: newId,
      fileName: file.name,
      type: type,
      uploadedBy: "Nguyễn Văn A",
      uploadTime: nowStr,
      pageCount: Math.floor(1 + Math.random() * 5),
      status: "review",
      progress: 100,
      avgConfidence: 85,
      fieldsToReview: 1,
      assignedTo: "Nguyễn Văn A",
      lastUpdated: nowStr,
      fields: [
        { id: "f1", label: "Loại tài liệu", value: type === "quotation" ? "Báo giá" : "Tờ trình", confidence: 95, region: { page: 1, x: 30, y: 15, w: 30, h: 5 } },
        { id: "f2", label: "Mã tài liệu", value: newId, confidence: 96, region: { page: 1, x: 8, y: 12, w: 22, h: 4 } },
        { id: "f3", label: "Ngày lập", value: new Date().toLocaleDateString("vi-VN"), confidence: 90, region: { page: 1, x: 60, y: 15, w: 25, h: 4 } },
        { id: "f4", label: "Đơn vị cung cấp", value: "Công ty Cổ phần Công nghệ Mới", confidence: 80, region: { page: 1, x: 12, y: 45, w: 40, h: 4 } },
      ],
      lineItems: [
        { id: `li_${Date.now()}`, no: 1, name: "Thiết bị số hoá thử nghiệm", code: "TB-01", qty: "1", unitPrice: "15.000.000", total: "15.000.000", confidence: 90, region: { page: 1, x: 8, y: 45, w: 80, h: 5 } }
      ],
      editLog: [],
    };

    documentsStore = [newDoc, ...documentsStore];
    return newDoc;
  },

  /** Update an extracted field value & record edit log entry */
  async updateDocumentField(
    docId: string,
    fieldId: string,
    newValue: string,
    reason?: string
  ): Promise<DigitizedDoc> {
    const index = documentsStore.findIndex((d) => d.id === docId);
    if (index === -1) throw new Error("Document not found");

    const doc = documentsStore[index];
    const targetField = doc.fields.find((f) => f.id === fieldId);
    if (!targetField) throw new Error("Field not found");

    const updatedFields = doc.fields.map((f) =>
      f.id === fieldId ? { ...f, value: newValue, confidence: 100 } : f
    );

    const logEntry: EditLogEntry = {
      id: `e_${Date.now()}`,
      field: targetField.label,
      aiValue: targetField.value,
      before: targetField.value,
      after: newValue,
      editor: "Nguyễn Văn A",
      time: new Date().toLocaleString("vi-VN"),
      reason: reason,
    };

    const updatedDoc: DigitizedDoc = {
      ...doc,
      fields: updatedFields,
      lastUpdated: new Date().toLocaleString("vi-VN"),
      editLog: [logEntry, ...doc.editLog],
    };

    documentsStore[index] = updatedDoc;
    return updatedDoc;
  },

  /** Mark document processing as confirmed */
  async confirmDocument(docId: string): Promise<DigitizedDoc> {
    const index = documentsStore.findIndex((d) => d.id === docId);
    if (index === -1) throw new Error("Document not found");

    const updatedDoc: DigitizedDoc = {
      ...documentsStore[index],
      status: "confirmed",
      lastUpdated: new Date().toLocaleString("vi-VN"),
    };

    documentsStore[index] = updatedDoc;
    return updatedDoc;
  },

  /** Trigger OCR re-processing */
  async rerunOCR(docId: string): Promise<DigitizedDoc> {
    const index = documentsStore.findIndex((d) => d.id === docId);
    if (index === -1) throw new Error("Document not found");

    const updatedDoc: DigitizedDoc = {
      ...documentsStore[index],
      status: "ocr",
      progress: 0,
      lastUpdated: new Date().toLocaleString("vi-VN"),
    };

    documentsStore[index] = updatedDoc;
    return updatedDoc;
  },

  /** Get list of products with optional search and keyword filters */
  async getProducts(search?: string, keywords: string[] = []): Promise<Product[]> {
    let results = [...productsStore];

    if (search) {
      const q = search.toLowerCase();
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.supplier.toLowerCase().includes(q)
      );
    }

    if (keywords.length > 0) {
      results = results.filter((p) =>
        keywords.some(
          (kw) =>
            p.name.toLowerCase().includes(kw.toLowerCase()) ||
            p.description.toLowerCase().includes(kw.toLowerCase())
        )
      );
    }

    return results;
  },
};
