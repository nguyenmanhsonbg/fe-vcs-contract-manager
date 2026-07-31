import { useState } from "react";
import { Sidebar, PageKey } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { DocumentListPage } from "./components/pages/DocumentListPage";
import { DocumentDetailPage } from "./components/pages/DocumentDetailPage";
import { OriginalDocView } from "./components/pages/OriginalDocView";
import { ProductLookupPage } from "./components/pages/ProductLookupPage";
import { UploadModal } from "./components/modals/UploadModal";
import { DigitizedDoc } from "./data/mock";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [page, setPage] = useState<PageKey>("list");
  const [openDoc, setOpenDoc] = useState<DigitizedDoc | null>(null);
  const [originalDoc, setOriginalDoc] = useState<DigitizedDoc | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

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
          {originalDoc ? (
            <OriginalDocView doc={originalDoc} onBack={() => setOriginalDoc(null)} />
          ) : openDoc ? (
            <DocumentDetailPage
              doc={openDoc}
              onBack={() => setOpenDoc(null)}
              onViewOriginalDoc={(d) => setOriginalDoc(d)}
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
        </main>
      </div>

      {/* Upload Modal */}
      <UploadModal
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
