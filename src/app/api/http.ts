import { ApiError } from "../core/types/common.types";

export const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api/v1";

export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });
  if (!res.ok) {
    const body = await res.text();
    let message = body;
    try {
      const parsed = JSON.parse(body) as { message?: string; detail?: string; error?: string };
      message = parsed.message || parsed.detail || parsed.error || body;
    } catch {
      // Keep the raw response when it is not JSON.
    }
    throw new ApiError(res.status, message || res.statusText || `HTTP ${res.status}`);
  }
  return await res.json();
}

export async function apiBlob(endpoint: string, body: unknown): Promise<Blob> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new ApiError(res.status, (await res.text()) || "Request failed");
  return res.blob();
}

export async function apiDownload(endpoint: string, method = "GET"): Promise<Blob> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new ApiError(res.status, (await res.text()) || "Request failed");
  return res.blob();
}

export async function apiDownloadWithBody(endpoint: string, body: unknown): Promise<Blob> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new ApiError(res.status, (await res.text()) || "Request failed");
  return res.blob();
}
