import React, { ReactNode } from "react";
import { PageKey } from "../components/Sidebar";
import { OverviewReportPage } from "../components/pages/OverviewReportPage";
import { DocumentListPage } from "../components/pages/DocumentListPage";
import { ContractListPage } from "../components/pages/ContractListPage";
import { ProposalListPage } from "../components/pages/ProposalListPage";
import { ProductLookupPage } from "../components/pages/ProductLookupPage";
import { LoginPage } from "../components/pages/LoginPage";
import { BusinessPlanListPage } from "../components/pages/BusinessPlanListPage";
import { AcceptanceListPage } from "../components/pages/AcceptanceListPage";
import { AcceptanceReconciliationPage } from "../components/pages/AcceptanceReconciliationPage";
import { DigitizedDoc } from "../data/models";

export interface RouteComponentProps {
  onOpenDoc: (doc: DigitizedDoc) => void;
  onUploadClick: () => void;
  onViewOriginalDoc: (doc: DigitizedDoc) => void;
  refreshToken: number;
}

export interface RouteDefinition {
  key: PageKey;
  hash: string;
  breadcrumb: string[];
  render: (props: RouteComponentProps) => ReactNode;
}

/** Registry danh sách tất cả Route/Tab trong hệ thống */
export const ROUTES: RouteDefinition[] = [
  {
    key: "overview",
    hash: "#/overview",
    breadcrumb: ["Trang chủ", "Báo cáo tổng quan"],
    render: () => <OverviewReportPage />,
  },
  {
    key: "login",
    hash: "#/login",
    breadcrumb: ["Trang chủ", "Đăng nhập"],
    render: () => <LoginPage onLoginSuccess={() => { window.location.hash = "#/overview"; }} />,
  },
  {
    key: "list",
    hash: "#/documents",
    breadcrumb: ["Trang chủ", "Quản trị dữ liệu", "Số hoá tài liệu"],
    render: (props) => (
      <DocumentListPage
        onOpenDoc={props.onOpenDoc}
        onUploadClick={props.onUploadClick}
        onViewOriginalDoc={props.onViewOriginalDoc}
        refreshToken={props.refreshToken}
      />
    ),
  },
  {
    key: "proposal",
    hash: "#/proposals",
    breadcrumb: ["Trang chủ", "Quản lý tờ trình"],
    render: () => <ProposalListPage />,
  },
  {
    key: "contract",
    hash: "#/contracts",
    breadcrumb: ["Trang chủ", "Quản trị dữ liệu", "Quản lý hợp đồng"],
    render: () => <ContractListPage />,
  },
  {
    key: "product",
    hash: "#/products",
    breadcrumb: ["Trang chủ", "Tìm kiếm sản phẩm"],
    render: (props) => (
      <ProductLookupPage
        onViewDocument={props.onViewOriginalDoc}
      />
    ),
  },
  {
    key: "business-plan",
    hash: "#/business-plans",
    breadcrumb: ["Trang chủ", "Phương án kinh doanh", "Quản lý phương án kinh doanh"],
    render: () => (
      <BusinessPlanListPage
        onSelectPlan={(id) => {
          window.location.hash = `#/business-plans/detail/${encodeURIComponent(id)}`;
        }}
      />
    ),
  },
  {
    key: "acceptance",
    hash: "#/acceptance",
    breadcrumb: ["Trang chủ", "Phương án kinh doanh", "Quản lý nghiệm thu"],
    render: () => <AcceptanceListPage />,
  },
  {
    key: "reconciliation",
    hash: "#/reconciliation",
    breadcrumb: ["Trang chủ", "Phương án kinh doanh", "Đối sánh nghiệm thu"],
    render: () => <AcceptanceReconciliationPage />,
  },
];

/** Lấy thông tin Route theo Key */
export function getRouteByKey(key: PageKey): RouteDefinition {
  return ROUTES.find((r) => r.key === key) || ROUTES[0];
}

export function getDocumentRoutePrefix(page: PageKey): string {
  if (page === "proposal") return "#/proposals";
  if (page === "product") return "#/products";
  return "#/documents";
}

/** Lấy thông tin Route theo Hash URL */
export function getRouteByHash(hash: string): RouteDefinition {
  const cleanHash = hash.replace(/^#\/?/, "").split("/")[0];
  return ROUTES.find((r) => r.hash.replace(/^#\/?/, "") === cleanHash) || ROUTES[0];
}

export interface ParsedRoute {
  page: PageKey;
  subType?: "detail" | "original" | string;
  docId?: string;
}

/** Parse Hash URL hoàn toàn tự động cho cả Main Route & Sub-pages (detail, original, etc.) */
export function parseHashRoute(hash: string): ParsedRoute {
  const clean = hash.replace(/^#\/?/, "");
  const parts = clean.split("/").filter(Boolean);

  const rawSection = parts[0] || "overview";
  const section = rawSection === "doc" ? "documents" : rawSection;
  
  // Tự động tìm Route khớp với URL section từ ROUTES Registry
  const matchedRoute =
    ROUTES.find((r) => r.hash.replace(/^#\/?/, "") === section) || ROUTES[0];

  if (parts.length >= 3) {
    return {
      page: matchedRoute.key,
      subType: parts[1],
      docId: parts[2],
    };
  }

  if (parts.length === 2) {
    if (matchedRoute.key === "proposal" && parts[1] === "new") {
      return { page: matchedRoute.key };
    }
    return {
      page: matchedRoute.key,
      subType: "detail",
      docId: parts[1],
    };
  }

  return { page: matchedRoute.key };
}
