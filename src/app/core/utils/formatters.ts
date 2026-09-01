/** Format số sang định dạng tiền tệ VNĐ (ví dụ: 100.000.000) */
export function formatCurrency(val: number | string | undefined | null): string {
  if (val === undefined || val === null || val === "") return "0";
  const num = typeof val === "string" ? parseFloat(val.replace(/[^\d.-]/g, "")) : val;
  if (isNaN(num)) return "0";
  return new Intl.NumberFormat("vi-VN").format(num);
}

/** Format ngày tháng YYYY-MM-DD sang DD/MM/YYYY */
export function formatDate(dateStr: string | undefined | null): string {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  } catch {
    return dateStr;
  }
}
