import { Component, ErrorInfo, ReactNode, useState, useEffect } from "react";
import { Sidebar, PageKey } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { DocumentDetailPage } from "./components/pages/DocumentDetailPage";
import { ProposalDetailPage } from "./components/pages/ProposalDetailPage";
import { BusinessPlanDetailPage } from "./components/pages/BusinessPlanDetailPage";
import { ContractAcceptanceDetailPage } from "./components/pages/ContractAcceptanceDetailPage";
import { OriginalDocView } from "./components/pages/OriginalDocView";
import { UploadModal } from "./components/modals/UploadModal";
import { DigitizedDoc } from "./data/models";
import { docApi } from "./services/api";
import { Toaster } from "./components/ui/sonner";
import { getDocumentRoutePrefix, getRouteByKey, parseHashRoute } from "./config/routes";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("React Error Boundary Caught:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-50 border border-red-200 text-red-700 m-6 rounded-[6px] shadow-md">
          <h2 className="text-base font-bold mb-2 text-red-800">⚠️ Đã xảy ra lỗi khi hiển thị chi tiết</h2>
          <p className="text-xs mb-3 text-red-600">Chi tiết lỗi runtime:</p>
          <pre className="text-xs bg-red-100 p-3 rounded overflow-auto font-mono max-h-60 text-red-900 border border-red-200">
            {this.state.error?.toString()}
            {"\n\n"}
            {this.state.error?.stack}
          </pre>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded text-xs font-semibold hover:bg-red-700 transition-colors shadow-2xs"
          >
            Tải lại trang
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  const [page, setPage] = useState<PageKey>(() => parseHashRoute(window.location.hash).page);
  const [openDoc, setOpenDoc] = useState<DigitizedDoc | null>(null);
  const [originalDoc, setOriginalDoc] = useState<DigitizedDoc | null>(null);
  const [proposalRoute, setProposalRoute] = useState<{ mode: "view" | "edit"; id: string } | null>(null);
  const [businessPlanDetailId, setBusinessPlanDetailId] = useState<string | null>(null);
  const [contractAcceptanceDetailId, setContractAcceptanceDetailId] = useState<string | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [documentRefreshToken, setDocumentRefreshToken] = useState(0);

  // Sync state from Hash URL (supplying support for direct links & reload on sub-pages)
  useEffect(() => {
    async function syncStateFromHash() {
      const parsed = parseHashRoute(window.location.hash);
      setPage(parsed.page);

      if (parsed.page === "proposal" && parsed.docId && (parsed.subType === "detail" || parsed.subType === "edit")) {
        setProposalRoute({ mode: "view", id: parsed.docId });
        setOpenDoc(null);
        setOriginalDoc(null);
        return;
      }
      setProposalRoute(null);

      if (parsed.page === "business-plan" && parsed.subType === "detail" && parsed.docId) {
        setBusinessPlanDetailId(decodeURIComponent(parsed.docId));
        setOpenDoc(null);
        setOriginalDoc(null);
        return;
      } else {
        setBusinessPlanDetailId(null);
      }

      if (parsed.page === "acceptance" && parsed.subType === "detail" && parsed.docId) {
        setContractAcceptanceDetailId(decodeURIComponent(parsed.docId));
        setOpenDoc(null);
        setOriginalDoc(null);
        return;
      } else {
        setContractAcceptanceDetailId(null);
      }

      if (parsed.subType === "detail" && parsed.docId) {
        if (!openDoc || openDoc.id !== parsed.docId) {
          const apiDoc = await docApi.getDocumentById(parsed.docId);
          if (apiDoc) {
            setOpenDoc(apiDoc);
          } else if (parsed.page === "proposal") {
            // Fallback for proposal detail direct route
            setOpenDoc({
              id: parsed.docId,
              fileName: "TT-2025-028",
              type: "proposal",
              uploadedBy: "Nguyễn Văn A",
              uploadTime: "18/04/2025 10:23",
              pageCount: 12,
              status: "confirmed",
              progress: 100,
              avgConfidence: 98,
              fieldsToReview: 0,
              assignedTo: "Nguyễn Văn A",
              lastUpdated: "18/04/2025 10:23",
              fields: [
                { id: "proposalNumber", label: "proposalNumber", value: "TT - 2025 - 028", confidence: 98 },
                { id: "proposalDate", label: "proposalDate", value: "18/04/2025", confidence: 98 },
                { id: "title", label: "title", value: "Mua máy in laser HP M712dn cho phòng hành Chính", confidence: 98 },
              ],
              lineItems: [],
              editLog: [],
            });
          } else {
            setOpenDoc(null);
          }
        }
        setOriginalDoc(null);
      } else if (parsed.subType === "original" && parsed.docId) {
        if (!originalDoc || originalDoc.id !== parsed.docId) {
          const apiDoc = await docApi.getDocumentById(parsed.docId);
          setOriginalDoc(apiDoc);
        }
      } else {
        setOpenDoc(null);
        setOriginalDoc(null);
      }
    }

    syncStateFromHash();

    if (!window.location.hash) {
      window.location.hash = getRouteByKey("overview").hash;
    }

    window.addEventListener("hashchange", syncStateFromHash);
    return () => window.removeEventListener("hashchange", syncStateFromHash);
  }, [openDoc?.id, originalDoc?.id]);

  const handleOpenDoc = (doc: DigitizedDoc) => {
    setOpenDoc(doc);
    setOriginalDoc(null);
    setBusinessPlanDetailId(null);
    setContractAcceptanceDetailId(null);
    const routePrefix = getDocumentRoutePrefix(page);
    window.location.hash = `${routePrefix}/detail/${doc.id}`;
  };

  const handleViewOriginalDoc = (doc: DigitizedDoc) => {
    setOriginalDoc(doc);
    setBusinessPlanDetailId(null);
    setContractAcceptanceDetailId(null);
    const routePrefix = getDocumentRoutePrefix(page);
    window.location.hash = `${routePrefix}/original/${doc.id}`;
  };

  const handleBackFromOriginalDoc = () => {
    if (originalDoc) {
      if (page === "product") {
        setOriginalDoc(null);
        setOpenDoc(null);
        window.location.hash = getRouteByKey("product").hash;
        return;
      }
      const doc = originalDoc;
      setOriginalDoc(null);
      setOpenDoc(doc);
      const routePrefix = getDocumentRoutePrefix(page);
      window.location.hash = `${routePrefix}/detail/${doc.id}`;
    } else {
      handleBackFromSubPage();
    }
  };

  const handleBackFromSubPage = () => {
    setOpenDoc(null);
    setOriginalDoc(null);
    setProposalRoute(null);
    setBusinessPlanDetailId(null);
    setContractAcceptanceDetailId(null);
    const mainHash = getRouteByKey(page).hash;
    window.location.hash = mainHash;
  };

  function navigate(p: PageKey) {
    setOpenDoc(null);
    setOriginalDoc(null);
    setProposalRoute(null);
    setBusinessPlanDetailId(null);
    setContractAcceptanceDetailId(null);
    setPage(p);
    const targetRoute = getRouteByKey(p);
    window.location.hash = targetRoute.hash;
  }

  const currentRoute = getRouteByKey(page);

  const breadcrumb = proposalRoute
    ? ["Trang chủ", "Quản lý tờ trình", "Chi tiết tờ trình"]
    : originalDoc
    ? page === "product"
      ? ["Trang chủ", "Tìm kiếm sản phẩm"]
      : ["Trang chủ", "Quản trị dữ liệu", page === "proposal" ? "Quản lý tờ trình" : "Số hoá tài liệu", "Chi tiết tài liệu gốc"]
    : openDoc
    ? page === "proposal"
      ? ["Trang chủ", "Quản trị dữ liệu", "Quản lý tờ trình", "Chi tiết tờ trình"]
      : ["Trang chủ", "Quản trị dữ liệu", "Số hoá tài liệu", "Chi tiết số hóa"]
    : page === "business-plan" && businessPlanDetailId
    ? ["Trang chủ", "Quản lý Phương án kinh doanh", "Chi tiết Phương án kinh doanh"]
    : page === "acceptance" && contractAcceptanceDetailId
    ? ["Trang chủ", "Phương án kinh doanh", "Quản lý nghiệm thu", "Chi tiết nghiệm thu Hợp đồng"]
    : currentRoute.breadcrumb;

  if (currentRoute.key === "login") {
    return (
      <div className="min-h-screen w-full bg-[#f8f7fa]">
        {currentRoute.render({
          onOpenDoc: handleOpenDoc,
          onUploadClick: () => setUploadModalOpen(true),
          onViewOriginalDoc: handleViewOriginalDoc,
          refreshToken: documentRefreshToken,
        })}
        <Toaster position="top-right" richColors />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#f8f7fa] text-foreground font-sans">
      {/* Sidebar navigation */}
      <Sidebar active={page} onNavigate={navigate} onUploadClick={() => setUploadModalOpen(true)} />

      {/* Main Application Area */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <TopBar breadcrumb={breadcrumb} />

        <main className="min-h-0 flex-1 overflow-y-auto">
          <ErrorBoundary>
            {proposalRoute ? (
              <ProposalDetailPage
                proposalId={proposalRoute.id}
                mode={proposalRoute.mode}
                onBack={handleBackFromSubPage}
              />
            ) : originalDoc ? (
              <OriginalDocView doc={originalDoc} onBack={handleBackFromOriginalDoc} />
            ) : openDoc ? (
              page === "proposal" ? null : (
                <DocumentDetailPage
                  doc={openDoc}
                  onBack={handleBackFromSubPage}
                  onViewOriginalDoc={handleViewOriginalDoc}
                  refreshToken={documentRefreshToken}
                />
              )
            ) : page === "business-plan" && businessPlanDetailId ? (
              <BusinessPlanDetailPage
                planId={businessPlanDetailId}
                onBack={() => {
                  window.location.hash = "#/business-plans";
                }}
              />
            ) : page === "acceptance" && contractAcceptanceDetailId ? (
              <ContractAcceptanceDetailPage
                contractId={contractAcceptanceDetailId}
                onBack={() => {
                  window.location.hash = "#/acceptance";
                }}
              />
            ) : (
              currentRoute.render({
                onOpenDoc: handleOpenDoc,
                onUploadClick: () => setUploadModalOpen(true),
                onViewOriginalDoc: handleViewOriginalDoc,
                refreshToken: documentRefreshToken,
              })
            )}
          </ErrorBoundary>
        </main>
      </div>

      {/* Upload Modal */}
      <UploadModal
        open={uploadModalOpen}
        onOpenChange={setUploadModalOpen}
        onSuccess={() => {
          setDocumentRefreshToken((value) => value + 1);
          navigate("list");
        }}
      />

      <Toaster position="top-right" richColors />
    </div>
  );
}
