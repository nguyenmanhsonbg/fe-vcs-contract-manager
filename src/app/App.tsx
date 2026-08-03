import { Component, ErrorInfo, ReactNode, useState, useEffect } from "react";
import { Sidebar, PageKey } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { DocumentDetailPage } from "./components/pages/DocumentDetailPage";
import { ProposalDetailPage } from "./components/pages/ProposalDetailPage";
import { OriginalDocView } from "./components/pages/OriginalDocView";
import { UploadModal } from "./components/modals/UploadModal";
import { DigitizedDoc } from "./data/mock";
import { docApi } from "./services/api";
import { Toaster } from "./components/ui/sonner";
import { getRouteByKey, parseHashRoute } from "./config/routes";

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
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [documentRefreshToken, setDocumentRefreshToken] = useState(0);

  // Sync state from Hash URL (supplying support for direct links & reload on sub-pages)
  useEffect(() => {
    async function syncStateFromHash() {
      const parsed = parseHashRoute(window.location.hash);
      setPage(parsed.page);

      if (parsed.subType === "detail" && parsed.docId) {
        if (!openDoc || openDoc.id !== parsed.docId) {
          const apiDoc = await docApi.getDocumentById(parsed.docId);
          if (apiDoc) {
            setOpenDoc(apiDoc);
          } else {
            // Fallback mock object when opening direct URL
            setOpenDoc({
              id: parsed.docId,
              fileName: `Tài liệu_${parsed.docId}.pdf`,
              documentType: parsed.page === "proposal" ? "proposal" : "goods_contract",
              uploadedBy: "Nguyễn Văn A",
              uploadedAt: "18/04/2025 10:23",
              pageCount: 1,
              status: "review",
              confidence: 96,
              averageConfidence: 96,
              fieldsToReview: 0,
              assignedTo: "Trần Văn B",
              lastUpdated: "18/04/2025",
              fields: [
                { id: "f1", label: "Số tờ trình", value: parsed.docId, confidence: 98 },
                { id: "f2", label: "Nội dung", value: "Mua máy in laser HP M712dn cho phòng hành chính", confidence: 95 },
              ],
              lineItems: [],
              editLogs: [],
            });
          }
        }
        setOriginalDoc(null);
      } else if (parsed.subType === "original" && parsed.docId) {
        if (!originalDoc || originalDoc.id !== parsed.docId) {
          setOriginalDoc({
            id: parsed.docId,
            fileName: `Tài liệu gốc_${parsed.docId}.pdf`,
            documentType: "goods_contract",
            uploadedBy: "Nguyễn Văn A",
            uploadedAt: "18/04/2025",
            pageCount: 1,
            status: "review",
            confidence: 96,
            averageConfidence: 96,
            fieldsToReview: 0,
            assignedTo: "Trần Văn B",
            lastUpdated: "18/04/2025",
            fields: [],
            lineItems: [],
            editLogs: [],
          });
        }
      } else {
        setOpenDoc(null);
        setOriginalDoc(null);
      }
    }

    syncStateFromHash();

    if (!window.location.hash) {
      window.location.hash = getRouteByKey("list").hash;
    }

    window.addEventListener("hashchange", syncStateFromHash);
    return () => window.removeEventListener("hashchange", syncStateFromHash);
  }, [openDoc?.id, originalDoc?.id]);

  const handleOpenDoc = (doc: DigitizedDoc) => {
    setOpenDoc(doc);
    setOriginalDoc(null);
    const routePrefix = doc.documentType === "proposal" ? "#/proposals" : "#/documents";
    window.location.hash = `${routePrefix}/detail/${doc.id}`;
  };

  const handleViewOriginalDoc = (doc: DigitizedDoc) => {
    setOriginalDoc(doc);
    window.location.hash = `#/documents/original/${doc.id}`;
  };

  const handleBackFromSubPage = () => {
    setOpenDoc(null);
    setOriginalDoc(null);
    const mainHash = getRouteByKey(page).hash;
    window.location.hash = mainHash;
  };

  function navigate(p: PageKey) {
    setOpenDoc(null);
    setOriginalDoc(null);
    setPage(p);
    const targetRoute = getRouteByKey(p);
    window.location.hash = targetRoute.hash;
  }

  const currentRoute = getRouteByKey(page);

  const breadcrumb = originalDoc
    ? ["Trang chủ", "Quản trị dữ liệu", "Chi tiết tài liệu gốc"]
    : openDoc
    ? openDoc.documentType === "proposal"
      ? ["Trang chủ", "Quản trị dữ liệu", "Chi tiết tờ trình"]
      : ["Trang chủ", "Quản trị dữ liệu", "Chi tiết số hóa"]
    : currentRoute.breadcrumb;

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#f8f7fa] text-foreground font-sans">
      {/* Sidebar navigation */}
      <Sidebar active={page} onNavigate={navigate} onUploadClick={() => setUploadModalOpen(true)} />

      {/* Main Application Area */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <TopBar breadcrumb={breadcrumb} />

        <main className="min-h-0 flex-1 overflow-y-auto">
          <ErrorBoundary>
            {originalDoc ? (
              <OriginalDocView doc={originalDoc} onBack={handleBackFromSubPage} />
            ) : openDoc ? (
              openDoc.documentType === "proposal" ? (
                <ProposalDetailPage doc={openDoc} onBack={handleBackFromSubPage} />
              ) : (
                <DocumentDetailPage
                  doc={openDoc}
                  onBack={handleBackFromSubPage}
                  onViewOriginalDoc={handleViewOriginalDoc}
                  refreshToken={documentRefreshToken}
                />
              )
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
