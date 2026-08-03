import React, { Component, ErrorInfo, ReactNode, useState } from "react";
import { Sidebar, PageKey } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { DocumentListPage } from "./components/pages/DocumentListPage";
import { DocumentDetailPage } from "./components/pages/DocumentDetailPage";
import { OriginalDocView } from "./components/pages/OriginalDocView";
import { ProductLookupPage } from "./components/pages/ProductLookupPage";
import { UploadModal } from "./components/modals/UploadModal";
import { DigitizedDoc } from "./data/mock";
import { Toaster } from "./components/ui/sonner";

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
  const [page, setPage] = useState<PageKey>("list");
  const [openDoc, setOpenDoc] = useState<DigitizedDoc | null>(null);
  const [originalDoc, setOriginalDoc] = useState<DigitizedDoc | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [documentRefreshToken, setDocumentRefreshToken] = useState(0);

  function navigate(p: PageKey) {
    setOpenDoc(null);
    setOriginalDoc(null);
    setPage(p);
  }

  const breadcrumb = originalDoc
    ? ["Trang chủ", "Số hoá tài liệu", "Chi tiết tài liệu"]
    : openDoc
    ? ["Trang chủ", "Số hoá tài liệu", "Chi tiết số hóa"]
    : page === "list"
    ? ["Trang chủ", "Số hoá tài liệu"]
    : ["Trang chủ", "Tìm kiếm sản phẩm"];

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
              <OriginalDocView doc={originalDoc} onBack={() => setOriginalDoc(null)} />
            ) : openDoc ? (
              <DocumentDetailPage
                doc={openDoc}
                onBack={() => setOpenDoc(null)}
                onViewOriginalDoc={(d) => setOriginalDoc(d)}
                refreshToken={documentRefreshToken}
              />
            ) : page === "list" ? (
              <DocumentListPage
                onOpenDoc={setOpenDoc}
                onUploadClick={() => setUploadModalOpen(true)}
                onViewOriginalDoc={(d) => setOriginalDoc(d)}
              />
            ) : (
              <ProductLookupPage
                onOpenDoc={(doc) => {
                  setPage("list");
                  setOpenDoc(doc);
                }}
              />
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
          setPage("list");
          setOpenDoc(null);
        }}
      />

      <Toaster position="top-right" richColors />
    </div>
  );
}
