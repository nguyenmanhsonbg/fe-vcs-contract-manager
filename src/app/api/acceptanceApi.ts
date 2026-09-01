import {
  AcceptanceContractDetail,
  AcceptanceDocument,
} from "../core/types/acceptance.types";
import { apiFetch } from "./http";
import { sampleAcceptanceContractDetails } from "./mocks/acceptanceMock";

export const acceptanceApi = {
  /** Lấy chi tiết Nghiệm thu Hợp đồng theo Contract Code / ID */
  async getAcceptanceContractById(id: string): Promise<AcceptanceContractDetail | null> {
    try {
      return await apiFetch<AcceptanceContractDetail>(`/acceptance/contracts/${encodeURIComponent(id)}`);
    } catch {
      const found = sampleAcceptanceContractDetails.find(
        (c) => c.id.toLowerCase() === id.toLowerCase() || c.contractCode.toLowerCase() === id.toLowerCase()
      );
      return found || sampleAcceptanceContractDetails[0] || null;
    }
  },

  /** Tạo đợt nghiệm thu mới cho Hợp đồng */
  async createAcceptancePeriod(
    contractId: string,
    periodData: {
      periodName: string;
      date: string;
      documentNo: string;
      items: { itemId: string; qty: number; unitPrice: number; notes?: string }[];
    }
  ): Promise<AcceptanceContractDetail> {
    try {
      return await apiFetch<AcceptanceContractDetail>(
        `/acceptance/contracts/${encodeURIComponent(contractId)}/periods`,
        {
          method: "POST",
          body: JSON.stringify(periodData),
        }
      );
    } catch {
      const contract =
        sampleAcceptanceContractDetails.find(
          (c) =>
            c.id.toLowerCase() === contractId.toLowerCase() ||
            c.contractCode.toLowerCase() === contractId.toLowerCase()
        ) || sampleAcceptanceContractDetails[0];

      const newPeriodNo = (contract.milestones[0] ? Object.keys(contract.milestones[0].periods).length : 0) + 1;
      const newPeriodKey = `period${newPeriodNo}`;

      let addedTotalValue = 0;
      periodData.items.forEach((pItem) => {
        const item = contract.milestones.find((i) => i.id === pItem.itemId);
        if (item) {
          const itemVal = pItem.qty * (pItem.unitPrice || item.contractUnitPrice);
          addedTotalValue += itemVal;
          item.periods[newPeriodKey] = {
            periodNo: newPeriodNo,
            periodName: periodData.periodName,
            qty: pItem.qty,
            unitPrice: pItem.unitPrice || item.contractUnitPrice,
            value: itemVal,
            date: periodData.date,
            documentNo: periodData.documentNo,
            status: "Đã nghiệm thu",
            executor: "Người dùng hiện tại",
            notes: pItem.notes,
          };
          item.totalAcceptedQty += pItem.qty;
          item.totalAcceptedValue += itemVal;
          item.remainingQty = Math.max(0, item.contractQty - item.totalAcceptedQty);
          item.remainingValue = Math.max(0, item.contractValue - item.totalAcceptedValue);
        }
      });

      contract.totalAcceptedValue += addedTotalValue;
      contract.remainingValue = Math.max(0, contract.totalValue - contract.totalAcceptedValue);
      contract.status = contract.remainingValue === 0 ? "Đã hoàn thành" : "Đang thực hiện";

      contract.activities.unshift({
        id: `act-${Date.now()}`,
        action: `Nghiệm thu ${periodData.periodName} (${new Intl.NumberFormat("vi-VN").format(addedTotalValue)} VNĐ)`,
        user: "Người dùng hiện tại",
        timestamp: new Date().toLocaleString("vi-VN"),
        type: "approved",
      });

      return { ...contract };
    }
  },

  /** Tải lên tài liệu biên bản nghiệm thu */
  async uploadAcceptanceDocument(
    contractId: string,
    docData: { fileName: string; type: AcceptanceDocument["type"]; period?: string }
  ): Promise<AcceptanceDocument> {
    try {
      return await apiFetch<AcceptanceDocument>(
        `/acceptance/contracts/${encodeURIComponent(contractId)}/documents`,
        {
          method: "POST",
          body: JSON.stringify(docData),
        }
      );
    } catch {
      const contract =
        sampleAcceptanceContractDetails.find(
          (c) =>
            c.id.toLowerCase() === contractId.toLowerCase() ||
            c.contractCode.toLowerCase() === contractId.toLowerCase()
        ) || sampleAcceptanceContractDetails[0];

      const newDoc: AcceptanceDocument = {
        id: `doc-${Date.now()}`,
        fileName: docData.fileName,
        type: docData.type,
        fileSize: "2.1 MB",
        uploadedBy: "Người dùng hiện tại",
        uploadedAt: new Date().toLocaleString("vi-VN"),
        period: docData.period || "Đợt mới",
      };

      contract.documents.unshift(newDoc);
      contract.activities.unshift({
        id: `act-${Date.now()}`,
        action: `Tải lên ${docData.type}: ${docData.fileName}`,
        user: "Người dùng hiện tại",
        timestamp: new Date().toLocaleString("vi-VN"),
        type: "uploaded",
      });

      return newDoc;
    }
  },
};
