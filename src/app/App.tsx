import { useState } from "react";
import { Sidebar, PageKey } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { FigmaDocumentListPage } from "./components/figma/FigmaDocumentListPage";
import { FigmaDocumentDetailPage } from "./components/figma/FigmaDocumentDetailPage";
import { FigmaProductLookupPage } from "./components/figma/FigmaProductLookupPage";
import { FigmaUploadModal } from "./components/figma/FigmaUploadModal";
import { DigitizedDoc } from "./data/mock";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [page, setPage] = useState<PageKey>("list");
  const [openDoc, setOpenDoc] = useState<DigitizedDoc | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  function navigate(p: PageKey) {
    setOpenDoc(null);
    setPage(p);
  }

  const breadcrumb = openDoc
    ? ["Trang chủ", "Số hoá tài liệu", "Chi tiết"]
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
          {openDoc ? (
            <FigmaDocumentDetailPage doc={openDoc} onBack={() => setOpenDoc(null)} />
          ) : page === "list" ? (
            <FigmaDocumentListPage
              onOpenDoc={setOpenDoc}
              onUploadClick={() => setUploadModalOpen(true)}
            />
          ) : (
            <FigmaProductLookupPage
              onOpenDoc={(doc) => {
                setPage("list");
                setOpenDoc(doc);
              }}
            />
          )}
        </main>
      </div>

      {/* 100% Figma-matching Upload Modal */}
      <FigmaUploadModal
        open={uploadModalOpen}
        onOpenChange={setUploadModalOpen}
        onSuccess={(doc) => {
          setPage("list");
          setOpenDoc(doc);
        }}
      />

      <Toaster position="top-right" richColors />
    </div>
  );
}
