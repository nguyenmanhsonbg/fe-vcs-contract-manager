import { useState } from "react";
import { Sidebar, PageKey } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { DocumentListPage } from "./components/DocumentListPage";
import { DocumentDetailPage } from "./components/DocumentDetailPage";
import { ProductLookupPage } from "./components/ProductLookupPage";
import { DigitizedDoc } from "./data/mock";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [page, setPage] = useState<PageKey>("list");
  const [openDoc, setOpenDoc] = useState<DigitizedDoc | null>(null);

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
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 text-foreground">
      <Sidebar active={page} onNavigate={navigate} />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar breadcrumb={breadcrumb} />
        <main className="min-h-0 flex-1 overflow-y-auto">
          {openDoc ? (
            <DocumentDetailPage doc={openDoc} onBack={() => setOpenDoc(null)} />
          ) : page === "list" ? (
            <DocumentListPage onOpen={setOpenDoc} />
          ) : (
            <ProductLookupPage onOpenDoc={setOpenDoc} />
          )}
        </main>
      </div>
      <Toaster position="top-right" richColors />
    </div>
  );
}
