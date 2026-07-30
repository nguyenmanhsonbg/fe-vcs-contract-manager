import { useState } from "react";
import { toast } from "sonner";
import { ExtractedField, EditLogEntry, DigitizedDoc } from "../data/mock";

interface UseFieldEditorOptions {
  doc: DigitizedDoc;
  confirmed: boolean;
  onFieldsChange: (updater: (prev: ExtractedField[]) => ExtractedField[]) => void;
  onLogChange: (updater: (prev: EditLogEntry[]) => EditLogEntry[]) => void;
  onSelectField: (f: ExtractedField) => void;
}

export function useFieldEditor({
  doc,
  confirmed,
  onFieldsChange,
  onLogChange,
  onSelectField,
}: UseFieldEditorOptions) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [reasonOpen, setReasonOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [pendingEdit, setPendingEdit] = useState<{ field: ExtractedField; next: string } | null>(null);

  function startEdit(f: ExtractedField) {
    onSelectField(f);
    setEditingId(f.id);
    setDraft(f.value);
  }

  async function applyEdit(f: ExtractedField, next: string, editReason?: string) {
    try {
      const updatedDoc = await docApi.updateDocumentField(doc.id, f.id, next, editReason);
      onFieldsChange(() => updatedDoc.fields);
      onLogChange(() => updatedDoc.editLog);
      toast.success(`Đã cập nhật trường "${f.label}"`);
    } catch (err) {
      toast.error("Lỗi khi cập nhật trường dữ liệu.");
    }
  }

  function commitEdit(f: ExtractedField) {
    if (draft === f.value) {
      setEditingId(null);
      return;
    }
    if (confirmed) {
      setPendingEdit({ field: f, next: draft });
      setReasonOpen(true);
      return;
    }
    applyEdit(f, draft);
    setEditingId(null);
  }

  function confirmReason() {
    if (pendingEdit && reason.trim()) {
      applyEdit(pendingEdit.field, pendingEdit.next, reason.trim());
      setReasonOpen(false);
      setReason("");
      setPendingEdit(null);
      setEditingId(null);
    }
  }

  return {
    editingId,
    setEditingId,
    draft,
    setDraft,
    reasonOpen,
    setReasonOpen,
    reason,
    setReason,
    pendingEdit,
    startEdit,
    commitEdit,
    confirmReason,
  };
}
