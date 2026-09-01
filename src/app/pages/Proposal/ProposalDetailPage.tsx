import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { proposalApi } from "../../api/proposalApi";
import { docApi } from "../../api/docApi";
import { DigitizedDoc } from "../../core/types/document.types";
import { DocumentCanvas } from "../DocumentDigitization/components/DocumentCanvas";
import {
  defaultProposalDetail,
  getSampleProposalDetail,
  ProposalDetailMockData,
} from "../../api/mocks/proposalMock";
import {
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconChevronDown,
  IconDownload,
  IconMinus,
  IconPlus,
  IconRotateCw,
  IconScan,
} from "../../components/icons";

interface ProposalDetailPageProps {
  proposalId?: string;
  mode?: "view" | "edit";
  onBack: () => void;
}

function money(value?: number) {
  return new Intl.NumberFormat("vi-VN").format(value || 0);
}

export function ProposalDetailPage({ proposalId, onBack }: ProposalDetailPageProps) {
  const [data, setData] = useState<ProposalDetailMockData>(() =>
    getSampleProposalDetail(proposalId || "TT-2025-028")
  );
  const [sourceDocument, setSourceDocument] = useState<DigitizedDoc | null>(null);
  const [loading, setLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!proposalId) {
      setData(getSampleProposalDetail("TT-2025-028"));
      return;
    }
    let active = true;
    setLoading(true);
    proposalApi
      .getProposalById(proposalId)
      .then((res) => {
        if (!active) return;
        if (res) {
          if (res.sourceDocumentId) {
            docApi.getDocumentById(res.sourceDocumentId).then((document) => {
              if (active) setSourceDocument(document);
            });
          }
          setData((prev) => ({
            ...prev,
            code: res.proposalNumber || res.summary?.code || prev.code,
            updatedAt: res.summary?.createdAt || prev.updatedAt,
            generalInfo: {
              ...prev.generalInfo,
              proposalNumber: res.proposalNumber || prev.generalInfo.proposalNumber,
              proposalDate: res.proposalDate || prev.generalInfo.proposalDate,
              proposingUnit: prev.generalInfo.proposingUnit,
              goodsCategory: res.summary?.category || prev.generalInfo.goodsCategory,
              goodsName: res.summary?.title || prev.generalInfo.goodsName,
            },
          }));
        }
      })
      .catch(() => {
        if (active) setData(getSampleProposalDetail(proposalId));
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [proposalId]);

  const handleDownload = () => {
    if (sourceDocument) {
      docApi
        .downloadDocument(sourceDocument.id)
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const anchor = document.createElement("a");
          anchor.href = url;
          anchor.download = sourceDocument.fileName || "tai-lieu-goc.pdf";
          anchor.click();
          URL.revokeObjectURL(url);
        })
        .catch(() => toast.error("Không thể tải tài liệu gốc"));
    } else {
      toast.success("Đang chuẩn bị tải xuống tài liệu tờ trình...");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center text-slate-500">
        <Loader2 className="mr-2 size-6 animate-spin text-[#3f81ea]" />
        <span>Đang tải chi tiết tờ trình...</span>
      </div>
    );
  }

  return (
    <div className="w-full space-y-5 bg-[#f8f7fa] p-6 text-[#2f2b3d]">
      {/* Top Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-[18px] font-medium text-[#2f2b3d] hover:text-[#3f81ea] transition-colors cursor-pointer"
          >
            <span className="text-xl">←</span>
            <span>Chi tiết tờ trình</span>
          </button>
          <h1 className="mt-2 text-[18px] font-bold text-[#2f2b3d]">
            Mã tờ trình: {data.generalInfo.proposalNumber || data.code}
          </h1>
          <p className="mt-0.5 text-[12px] text-[#8f8d95]">
            Cập nhật lần cuối: {data.updatedAt} bởi {data.updatedBy}
          </p>
        </div>

        {/* Action Button Top Right */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex h-9 items-center gap-2 rounded-[6px] border border-[#dbdade] bg-white px-4 text-[13px] font-medium text-[#2f2b3d] shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <IconDownload className="size-4 text-[#5d586c]" />
            <span>Tải xuống</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {isFullscreen ? (
        <ProposalDocumentPreview
          sourceDocument={sourceDocument}
          proposalData={data}
          isFullscreen={true}
          onToggleFullscreen={() => setIsFullscreen(false)}
        />
      ) : (
        <>
          {/* Top Section: 2 Columns Side by Side */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-start">
            {/* Left Card: A. Thông tin chung */}
            <div className="rounded-[6px] border border-slate-200/80 bg-white p-6 shadow-[0px_2px_4px_rgba(47,43,61,0.06)] min-h-[480px]">
              <h2 className="text-[15px] font-bold text-[#2f2b3d] mb-4">A. Thông tin chung</h2>

              <div className="divide-y divide-slate-100 text-[13px]">
                <div className="flex py-3.5 first:pt-1">
                  <span className="w-[200px] shrink-0 text-[#5d586c]">Số tờ trình</span>
                  <span className="font-normal text-[#2f2b3d]">
                    {data.generalInfo.proposalNumber || data.code}
                  </span>
                </div>
                <div className="flex py-3.5">
                  <span className="w-[200px] shrink-0 text-[#5d586c]">Ngày ký trình</span>
                  <span className="font-normal text-[#2f2b3d]">
                    {data.generalInfo.proposalDate || "19/04/2025"}
                  </span>
                </div>
                <div className="flex py-3.5">
                  <span className="w-[200px] shrink-0 text-[#5d586c]">Loại đề xuất</span>
                  <span className="font-normal text-[#2f2b3d]">
                    {data.generalInfo.goodsCategory || "Hàng hóa"}
                  </span>
                </div>
                <div className="flex py-3.5">
                  <span className="w-[200px] shrink-0 text-[#5d586c]">
                    Danh mục hàng hoá/dịch vụ
                  </span>
                  <span className="font-normal text-[#2f2b3d]">Thiết bị văn phòng</span>
                </div>
                <div className="flex py-3.5 last:pb-1">
                  <span className="w-[200px] shrink-0 text-[#5d586c]">Nội dung đề xuất</span>
                  <span className="font-normal text-[#2f2b3d] leading-relaxed">
                    {data.generalInfo.goodsName || "Mua máy in laser HP M772dn cho phòng Hành Chính"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Card: Xem trước tờ trình */}
            <ProposalDocumentPreview
              sourceDocument={sourceDocument}
              proposalData={data}
              isFullscreen={false}
              onToggleFullscreen={() => setIsFullscreen(true)}
            />
          </div>

          {/* Bottom Card: Hạng mục và kinh phí đề xuất */}
          <section className="rounded-[6px] border border-slate-200/80 bg-white p-6 shadow-[0px_2px_4px_rgba(47,43,61,0.06)] space-y-6">
            <h2 className="text-[15px] font-bold text-[#2f2b3d]">Hạng mục và kinh phí đề xuất</h2>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[950px] table-auto text-left text-[13px] text-[#2f2b3d]">
                <thead>
                  <tr className="h-10 border-y border-slate-200/90 font-medium text-[#2f2b3d]">
                    <th className="px-3 py-2 text-center w-12 font-medium">STT</th>
                    <th className="px-3 py-2 w-44 font-medium">Tên HH/DV</th>
                    <th className="px-3 py-2 font-medium">Mô tả</th>
                    <th className="px-3 py-2 w-32 font-medium">Nhà cung cấp</th>
                    <th className="px-3 py-2 text-center w-16 font-medium">ĐVT</th>
                    <th className="px-3 py-2 text-center w-14 font-medium">SL</th>
                    <th className="px-3 py-2 text-right w-36 font-medium">Đơn giá (trước thuế)</th>
                    <th className="px-3 py-2 text-center w-20 font-medium">VAT (%)</th>
                    <th className="px-3 py-2 text-right w-36 font-medium">Thành tiền (VNĐ)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.items.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50">
                      <td className="px-3 py-3 text-center text-[#5d586c]">{item.stt}</td>
                      <td className="px-3 py-3 font-normal text-[#2f2b3d]">{item.name}</td>
                      <td className="px-3 py-3 text-[#5d586c] leading-relaxed text-[12.5px]">
                        {item.description}
                      </td>
                      <td className="px-3 py-3 text-[#5d586c]">{item.supplier}</td>
                      <td className="px-3 py-3 text-center text-[#5d586c]">{item.unit}</td>
                      <td className="px-3 py-3 text-center text-[#2f2b3d]">{item.quantity}</td>
                      <td className="px-3 py-3 text-right text-[#2f2b3d]">{money(item.unitPrice)}</td>
                      <td className="px-3 py-3 text-center text-[#5d586c]">{item.vatPercent}</td>
                      <td className="px-3 py-3 text-right font-normal text-[#2f2b3d]">
                        {money(item.totalPrice)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* KPI Summary Cards */}
            <div className="pt-2">
              <h3 className="mb-3 text-[14px] font-bold text-[#2f2b3d]">Tổng kinh phí dự kiến</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-[6px] border border-slate-200 bg-white p-4">
                  <p className="text-[12px] font-normal text-[#5d586c]">Tổng giá trị chưa VAT (VNĐ)</p>
                  <p className="mt-2 text-[18px] font-bold text-[#2f2b3d]">
                    {money(data.totals.preTaxTotal)}
                  </p>
                </div>

                <div className="rounded-[6px] border border-slate-200 bg-white p-4">
                  <p className="text-[12px] font-normal text-[#5d586c]">VAT (VNĐ)</p>
                  <p className="mt-2 text-[18px] font-bold text-[#2f2b3d]">
                    {money(data.totals.vatTotal)}
                  </p>
                </div>

                <div className="rounded-[6px] border border-[#ff4c51] bg-[#fff5f5] p-4 text-[#2f2b3d]">
                  <p className="text-[12px] font-normal text-[#5d586c]">Tổng giá trị (VNĐ)</p>
                  <p className="mt-2 text-[18px] font-bold text-[#2f2b3d]">
                    {money(data.totals.grandTotal)}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[12px] italic text-[#8f8d95]">
                Bằng chữ: <span className="font-normal text-[#5d586c]">{data.totals.amountInWords}</span>
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

function ProposalDocumentPreview({
  sourceDocument,
  proposalData,
  isFullscreen,
  onToggleFullscreen,
}: {
  sourceDocument: DigitizedDoc | null;
  proposalData: ProposalDetailMockData;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}) {
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(sourceDocument?.pageCount || 12);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const rotate = () => setRotation((r) => (r + 90) % 360);
  const zoomIn = () => setZoom((z) => Math.min(200, z + 15));
  const zoomOut = () => setZoom((z) => Math.max(50, z - 15));

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    if (pageRefs.current[newPage]) {
      pageRefs.current[newPage]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const proposalPages = [
    {
      pageNumber: 1,
      title: "TỜ TRÌNH ĐỀ XUẤT MUA SẮM",
      subtitle: `Về việc đề xuất Mua sắm ${proposalData.generalInfo.goodsName || "Thiết bị văn phòng"}`,
      content: (
        <div className="space-y-2 text-[8.5px] text-slate-700">
          <p className="italic text-slate-500">
            HƯỚNG DẪN SỬ DỤNG: Tùy vào kết quả áp dụng mục đích, có những căn cứ phù hợp áp dụng cập nhật lại cho đúng theo thực tế thông tin.
          </p>
          <p>- Căn cứ QUY CHẾ QUYẾT ĐỊNH QUẢN LÝ ĐẦU TƯ, MUA SẮM VÀ SỞ HỮU HIỆU;</p>
          <p>- Căn cứ KẾ HOẠCH CHỦ TRƯƠNG DỰ ÁN ĐÃ ĐƯỢC PHÊ DUYỆT;</p>
          <p>- Căn cứ chức năng, nhiệm vụ của {proposalData.generalInfo.proposingUnit || "Phòng Hành chính"};</p>
          <p>- Căn cứ NHU CẦU THỰC TẾ KẾ HOẠCH SẢN XUẤT KINH DOANH VÀ CÁC CĂN CỨ KHÁC.</p>
          <p className="font-semibold pt-1">
            {proposalData.generalInfo.proposingUnit || "Phòng Hành chính"} kính trình Ban Giám đốc Công ty phê duyệt đề xuất {proposalData.generalInfo.goodsName}. Nội dung cụ thể như sau:
          </p>
          <p className="font-bold text-slate-900 pt-1">1. THÔNG TIN CHUNG VỀ ĐỀ XUẤT</p>
          <p className="pl-2 font-medium">1.1. Mục đích mục tiêu đề xuất:</p>
          <p className="pl-2 italic text-slate-600">
            - Trang bị máy in laser tốc độ cao phục vụ nhu cầu in ấn chứng từ kế toán, báo cáo tài chính và tài liệu hợp đồng nội bộ định kỳ.
          </p>
          <p className="pl-2 italic text-slate-600">
            - Đảm bảo hiệu suất công việc liên tục, giảm thiểu thời gian chờ đợi và sự cố kỹ thuật trong quá trình xử lý văn bản.
          </p>
        </div>
      ),
    },
    {
      pageNumber: 2,
      title: "LÝ DO VÀ SỰ CẦN THIẾT PHẢI MUA SẮM",
      subtitle: "Đánh giá hiện trạng và tính cấp thiết",
      content: (
        <div className="space-y-2 text-[8.5px] text-slate-700">
          <p className="font-bold text-slate-900">2. ĐÁNH GIÁ HIỆN TRẠNG TRANG THIẾT BỊ</p>
          <p className="leading-relaxed">
            - Hiện tại các thiết bị máy in tại văn phòng đã sử dụng trên 05 năm, vượt quá thời gian khấu hao theo quy định nội bộ của Viettel.
          </p>
          <p className="leading-relaxed">
            - Tần suất xảy ra sự cố kẹt giấy, lỗi bo mạch và mờ mực ngày càng tăng, làm gián đoạn tiến độ phát hành văn bản hành chính và tài liệu khách hàng.
          </p>
          <p className="leading-relaxed">
            - Chi phí sửa chữa và thay thế linh kiện định kỳ trong 6 tháng gần nhất đã vượt 40% giá trị mua mới, không còn hiệu quả về mặt kinh tế.
          </p>
          <p className="font-bold text-slate-900 pt-2">2.1. Tính cấp thiết:</p>
          <p className="leading-relaxed">
            - Đảm bảo tiến độ xử lý hồ sơ thầu, hợp đồng kinh tế và báo cáo quản trị bảo mật cho các dự án an ninh mạng trọng điểm trong Quý 2/2025.
          </p>
        </div>
      ),
    },
    {
      pageNumber: 3,
      title: "DANH MỤC VÀ TIÊU CHUẨN KỸ THUẬT HÀNG HÓA",
      subtitle: "Quy cách kỹ thuật và thông số chi tiết",
      content: (
        <div className="space-y-2 text-[8.5px] text-slate-700">
          <p className="font-bold text-slate-900">3. TIÊU CHUẨN KỸ THUẬT ĐỀ XUẤT</p>
          <table className="w-full border-collapse border border-slate-300 text-[8px]">
            <thead>
              <tr className="bg-slate-100 font-semibold">
                <th className="border border-slate-300 p-1">Thông số</th>
                <th className="border border-slate-300 p-1">Yêu cầu tối thiểu</th>
                <th className="border border-slate-300 p-1">Cấu hình đề xuất (HP M772dn)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-1">Tốc độ in</td>
                <td className="border border-slate-300 p-1">&ge; 40 trang/phút</td>
                <td className="border border-slate-300 p-1">45 trang/phút (A4)</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-1">Độ phân giải</td>
                <td className="border border-slate-300 p-1">1200 x 1200 dpi</td>
                <td className="border border-slate-300 p-1">1200 x 1200 dpi HP FastRes</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-1">Kết nối</td>
                <td className="border border-slate-300 p-1">Gigabit Ethernet, USB 2.0</td>
                <td className="border border-slate-300 p-1">Gigabit LAN + USB 2.0 High-Speed</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-1">In 2 mặt tự động</td>
                <td className="border border-slate-300 p-1">Có (Duplex)</td>
                <td className="border border-slate-300 p-1">Tích hợp sẵn Duplex tự động</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      pageNumber: 4,
      title: "BẢNG TỔNG HỢP KINH PHÍ ĐỀ XUẤT",
      subtitle: "Dự toán tài chính và cơ cấu chi phí",
      content: (
        <div className="space-y-2 text-[8.5px] text-slate-700">
          <p className="font-bold text-slate-900">4. TỔNG HỢP DỰ TOÁN KINH PHÍ</p>
          <div className="rounded border border-slate-200 p-2 space-y-1 bg-slate-50/50">
            <div className="flex justify-between">
              <span>Tổng giá trị hàng hóa trước thuế:</span>
              <span className="font-semibold">{money(proposalData.totals.preTaxTotal)} VNĐ</span>
            </div>
            <div className="flex justify-between">
              <span>Thuế giá trị gia tăng (VAT 8%):</span>
              <span className="font-semibold">{money(proposalData.totals.vatTotal)} VNĐ</span>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-1 font-bold text-slate-900">
              <span>Tổng cộng thanh toán:</span>
              <span className="text-[#ff4c51]">{money(proposalData.totals.grandTotal)} VNĐ</span>
            </div>
          </div>
          <p className="italic pt-1">
            Bằng chữ: <span className="font-medium text-slate-900">{proposalData.totals.amountInWords}</span>
          </p>
          <p className="pt-2">Nguồn vốn: Ngân sách chi thường xuyên năm 2025 của đơn vị đã được phê duyệt.</p>
        </div>
      ),
    },
    {
      pageNumber: 5,
      title: "HÌNH THỨC VÀ PHƯƠNG ÁN LỰA CHỌN NHÀ CUNG CẤP",
      subtitle: "Phương án so sánh báo giá cạnh tranh",
      content: (
        <div className="space-y-2 text-[8.5px] text-slate-700">
          <p className="font-bold text-slate-900">5. KẾT QUẢ KHẢO SÁT BÁO GIÁ THỊ TRƯỜNG</p>
          <p>
            Đơn vị đã tiến hành thu thập 03 báo giá độc lập từ các đối tác ủy quyền chính hãng của HP tại Việt Nam:
          </p>
          <ol className="list-decimal pl-4 space-y-1">
            <li>
              <span className="font-medium">Công ty An Phát:</span> 86.000.000 VNĐ/cái (Đã bao gồm chi phí vận chuyển, lắp đặt và bảo hành tận nơi 24 tháng).
            </li>
            <li>
              <span className="font-medium">Công ty Sao Bắc:</span> 89.500.000 VNĐ/cái.
            </li>
            <li>
              <span className="font-medium">Công ty Minh Quân:</span> 91.200.000 VNĐ/cái.
            </li>
          </ol>
          <p className="pt-1 font-semibold text-slate-900">
            &rarr; Đề xuất lựa chọn: Công ty An Phát (Giá cạnh tranh nhất, đáp ứng đầy đủ tiêu chí kỹ thuật và dịch vụ hậu mãi).
          </p>
        </div>
      ),
    },
    {
      pageNumber: 6,
      title: "KẾ HOẠCH VÀ TIẾN ĐỘ THỰC HIỆN",
      subtitle: "Lịch trình giao hàng và nghiệm thu bàn giao",
      content: (
        <div className="space-y-2 text-[8.5px] text-slate-700">
          <p className="font-bold text-slate-900">6. TIẾN ĐỘ VÀ KẾ HOẠCH BÀN GIAO</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ký kết thỏa thuận/hợp đồng mua sắm: Trong vòng 02 ngày sau khi tờ trình được phê duyệt.</li>
            <li>Giao hàng và lắp đặt thiết bị tại văn phòng: Trong vòng 05 ngày làm việc kể từ ngày hợp đồng có hiệu lực.</li>
            <li>Cài đặt cấu hình mạng, phân quyền in nội bộ: Trong vòng 01 ngày làm việc.</li>
            <li>Nghiệm thu chạy thử và đào tạo sử dụng: Trong vòng 02 ngày làm việc.</li>
          </ul>
        </div>
      ),
    },
    {
      pageNumber: 7,
      title: "QUY TRÌNH KIỂM THỬ VÀ NGHIỆM THU",
      subtitle: "Tiêu chí đánh giá chất lượng sản phẩm",
      content: (
        <div className="space-y-2 text-[8.5px] text-slate-700">
          <p className="font-bold text-slate-900">7. TIÊU CHÍ VÀ THÀNH PHẦN NGHIỆM THU</p>
          <p>Thành phần Hội đồng nghiệm thu:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Đại diện đơn vị sử dụng: Trưởng phòng Hành chính (Chủ tịch hội đồng)</li>
            <li>Đại diện kỹ thuật CNTT: Chuyên viên phụ trách hạ tầng mạng</li>
            <li>Đại diện Ban Tài chính Kế toán: Chuyên viên quản lý tài sản</li>
            <li>Đại diện nhà cung cấp: Trưởng bộ phận kỹ thuật bảo hành</li>
          </ul>
          <p className="pt-1">
            Nội dung nghiệm thu: Kiểm tra tem niêm phong chính hãng, CO/CQ, số Serial và in thử 500 trang mẫu kiểm tra tốc độ.
          </p>
        </div>
      ),
    },
    {
      pageNumber: 8,
      title: "DỰ TOÁN CHI PHÍ VẬN HÀNH & BẢO HÀNH",
      subtitle: "Phương án bảo dưỡng định kỳ và dịch vụ sau bán",
      content: (
        <div className="space-y-2 text-[8.5px] text-slate-700">
          <p className="font-bold text-slate-900">8. BẢO HÀNH VÀ DỊCH VỤ HẬU MÃI</p>
          <p>- Thời gian bảo hành tiêu chuẩn: 24 tháng chính hãng HP tại địa điểm đặt máy của Viettel.</p>
          <p>- Cam kết thời gian khắc phục sự cố kỹ thuật trong vòng 04 giờ kể từ khi tiếp nhận thông báo.</p>
          <p>- Miễn phí kiểm tra, vệ sinh máy định kỳ 03 tháng/lần trong suốt thời hạn bảo hành.</p>
        </div>
      ),
    },
    {
      pageNumber: 9,
      title: "PHỤ LỤC 1: BẢNG BÁO GIÁ NHÀ CUNG CẤP AN PHÁT",
      subtitle: "Báo giá đính kèm số 142/BG-AP",
      content: (
        <div className="space-y-2 text-[8.5px] text-slate-700">
          <p className="font-bold text-slate-900">PHỤ LỤC 1: CHI TIẾT BÁO GIÁ AN PHÁT</p>
          <div className="p-2 border border-dashed border-slate-300 rounded bg-slate-50 text-[8px] space-y-1">
            <p className="font-semibold text-slate-800">CÔNG TY TNHH THƯƠNG MẠI & DỊCH VỤ AN PHÁT</p>
            <p>Địa chỉ: Tầng 5, Tòa nhà Zodiac, Phố Duy Tân, Cầu Giấy, Hà Nội</p>
            <p>Mã số thuế: 0102384912 - Điện thoại: 024.3768.9999</p>
            <div className="border-t border-slate-200 pt-1 mt-1">
              <p>1. Máy in HP LaserJet Enterprise M772dn: 86.000.000 VNĐ x 2 cái = 172.000.000 VNĐ</p>
              <p>2. Thuế GTGT (VAT 8%): 13.760.000 VNĐ</p>
              <p className="font-bold">Tổng cộng: 185.760.000 VNĐ (Đã bao gồm giao hàng và lắp đặt)</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      pageNumber: 10,
      title: "PHỤ LỤC 2: BẢNG BÁO GIÁ ĐỐI ỨNG (SAO BẮC & MINH QUÂN)",
      subtitle: "Tài liệu so sánh giá thị trường",
      content: (
        <div className="space-y-2 text-[8.5px] text-slate-700">
          <p className="font-bold text-slate-900">PHỤ LỤC 2: TỔNG HỢP CÁC BÁO GIÁ THAM KHẢO</p>
          <table className="w-full border-collapse border border-slate-300 text-[8px]">
            <thead>
              <tr className="bg-slate-100 font-semibold">
                <th className="border border-slate-300 p-1">Nhà cung cấp</th>
                <th className="border border-slate-300 p-1">Đơn giá (chưa VAT)</th>
                <th className="border border-slate-300 p-1">Bảo hành</th>
                <th className="border border-slate-300 p-1">Đánh giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-1 font-medium">An Phát</td>
                <td className="border border-slate-300 p-1">86.000.000 VNĐ</td>
                <td className="border border-slate-300 p-1">24 tháng tận nơi</td>
                <td className="border border-slate-300 p-1 text-[#28c76f] font-semibold">Đạt - Chọn</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-1">Sao Bắc</td>
                <td className="border border-slate-300 p-1">89.500.000 VNĐ</td>
                <td className="border border-slate-300 p-1">12 tháng</td>
                <td className="border border-slate-300 p-1">Không ưu tiên</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-1">Minh Quân</td>
                <td className="border border-slate-300 p-1">91.200.000 VNĐ</td>
                <td className="border border-slate-300 p-1">12 tháng</td>
                <td className="border border-slate-300 p-1">Không ưu tiên</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      pageNumber: 11,
      title: "Ý KIẾN THẨM ĐỊNH CỦA CÁC ĐƠN VỊ LIÊN QUAN",
      subtitle: "Ý kiến chuyên môn từ Phòng KT-TC và Phòng CNTT",
      content: (
        <div className="space-y-2 text-[8.5px] text-slate-700">
          <p className="font-bold text-slate-900">9. Ý KIẾN CÁC PHÒNG BAN THẨM ĐỊNH</p>
          <div className="space-y-1.5">
            <div className="p-1.5 border border-slate-200 rounded bg-slate-50/70">
              <p className="font-semibold text-slate-900">Ý kiến Phòng Kế toán - Tài chính:</p>
              <p className="italic text-slate-600">
                &ldquo;Đồng ý với phương án dự toán kinh phí và lựa chọn nhà cung cấp An Phát. Đơn vị đã cân đối nguồn ngân sách chi thường xuyên năm 2025 theo đúng quy định.&rdquo;
              </p>
            </div>
            <div className="p-1.5 border border-slate-200 rounded bg-slate-50/70">
              <p className="font-semibold text-slate-900">Ý kiến Phòng Công nghệ Thông tin:</p>
              <p className="italic text-slate-600">
                &ldquo;Thông số kỹ thuật của thiết bị HP LaserJet Enterprise M772dn hoàn toàn tương thích với hệ thống hạ tầng mạng và chuẩn bảo mật văn phòng của Viettel.&rdquo;
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      pageNumber: 12,
      title: "KÝ DUYỆT VÀ NƠI NHẬN TỜ TRÌNH",
      subtitle: "Phê duyệt của Ban Giám Đốc Công ty",
      content: (
        <div className="space-y-3 text-[8.5px] text-slate-700">
          <p className="font-bold text-slate-900">10. KÝ DUYỆT VÀ THỰC HIỆN</p>
          <p className="leading-relaxed">
            Kính trình Ban Giám đốc Công ty xem xét, phê duyệt để đơn vị tiến hành triển khai các bước mua sắm theo đúng tiến độ kế hoạch.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-200 text-center">
            <div>
              <p className="font-bold uppercase text-[8.5px] text-slate-900">NGƯỜI LẬP TỜ TRÌNH</p>
              <p className="text-[7.5px] italic text-slate-500">(Ký và ghi rõ họ tên)</p>
              <div className="h-10 flex items-center justify-center font-serif text-[10px] text-blue-800 font-semibold italic">
                {proposalData.updatedBy || "Nguyễn Văn A"}
              </div>
              <p className="font-medium text-slate-800">{proposalData.updatedBy || "Nguyễn Văn A"}</p>
            </div>
            <div>
              <p className="font-bold uppercase text-[8.5px] text-slate-900">BAN GIÁM ĐỐC PHÊ DUYỆT</p>
              <p className="text-[7.5px] italic text-slate-500">(Ký và đóng dấu)</p>
              <div className="h-10 flex items-center justify-center font-serif text-[10px] text-red-700 font-semibold italic">
                ĐÃ PHÊ DUYỆT
              </div>
              <p className="font-medium text-slate-800">{proposalData.generalInfo.approver || "Lê Văn B"}</p>
            </div>
          </div>
          <div className="pt-2 text-[7.5px] text-slate-500 border-t border-slate-100">
            <p className="font-semibold">Nơi nhận:</p>
            <p>- Ban Giám đốc Công ty (để báo cáo);</p>
            <p>- Phòng KT-TC, Phòng Đầu tư (để phối hợp thực hiện);</p>
            <p>- Lưu: VT, Đơn vị đề xuất.</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      className={`flex flex-col rounded-[6px] border border-slate-200/80 bg-white p-6 shadow-[0px_2px_4px_rgba(47,43,61,0.06)] ${
        isFullscreen ? "min-h-[750px]" : "min-h-[480px]"
      }`}
    >
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-[#2f2b3d]">Xem trước tờ trình</h2>
        <span className="text-[12px] text-[#8f8d95] font-normal">
          Tổng số: <strong className="text-[#2f2b3d] font-semibold">{totalPages} trang</strong>
        </span>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-y border-slate-100 py-2 text-xs text-[#5d586c]">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={rotate}
            title="Xoay trang"
            className="flex size-7 items-center justify-center rounded hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
          >
            <IconRotateCw className="size-3.5" />
          </button>
          <button
            type="button"
            onClick={zoomOut}
            title="Thu nhỏ"
            className="flex size-7 items-center justify-center rounded hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
          >
            <IconMinus className="size-3.5" />
          </button>
          <div className="relative inline-flex items-center">
            <select
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="h-7 appearance-none rounded border border-slate-200 bg-white px-2 pr-6 text-xs text-[#2f2b3d] outline-none cursor-pointer hover:border-slate-300"
            >
              <option value={75}>75%</option>
              <option value={100}>100%</option>
              <option value={125}>125%</option>
              <option value={150}>150%</option>
            </select>
            <IconChevronDown className="pointer-events-none absolute right-1.5 size-3 text-slate-400" />
          </div>
          <button
            type="button"
            onClick={zoomIn}
            title="Phóng to"
            className="flex size-7 items-center justify-center rounded hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
          >
            <IconPlus className="size-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative inline-flex items-center">
            <select
              value={page}
              onChange={(e) => handlePageChange(Number(e.target.value))}
              className="h-7 appearance-none rounded border border-slate-200 bg-white px-2.5 pr-6 text-xs text-[#2f2b3d] font-medium outline-none cursor-pointer hover:border-slate-300"
            >
              {Array.from({ length: totalPages }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} / {totalPages}
                </option>
              ))}
            </select>
            <IconChevronDown className="pointer-events-none absolute right-1.5 size-3 text-slate-400" />
          </div>

          <button
            type="button"
            onClick={() => setZoom(100)}
            title="Khớp chiều rộng"
            className="flex size-7 items-center justify-center rounded hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
          >
            <IconScan className="size-3.5" />
          </button>
          <button
            type="button"
            onClick={() => toast.success("Đang tải xuống tệp PDF tờ trình...")}
            title="Tải xuống tài liệu"
            className="flex size-7 items-center justify-center rounded hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
          >
            <IconDownload className="size-3.5" />
          </button>
          <button
            type="button"
            onClick={onToggleFullscreen}
            title={isFullscreen ? "Thu nhỏ xem trước" : "Toàn màn hình"}
            className="flex size-7 items-center justify-center rounded hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
          >
            {isFullscreen ? (
              <IconArrowsMinimize className="size-3.5" />
            ) : (
              <IconArrowsMaximize className="size-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Document View Canvas Area */}
      <div
        ref={containerRef}
        className={`mt-3 flex flex-1 flex-col items-center overflow-y-auto rounded bg-slate-100/60 p-4 border border-slate-200/60 space-y-6 ${
          isFullscreen ? "min-h-[640px] max-h-[780px]" : "min-h-[400px] max-h-[520px]"
        }`}
      >
        {sourceDocument ? (
          <DocumentCanvas
            docId={sourceDocument.id}
            zoom={zoom}
            page={page}
            rotation={rotation}
            region={null}
            onPageCount={(count) => setTotalPages(count)}
            compact
          />
        ) : (
          <div
            style={{
              transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
              transformOrigin: "top center",
            }}
            className="w-full flex flex-col items-center space-y-6 transition-transform duration-150"
          >
            {proposalPages.map((p) => (
              <div
                key={p.pageNumber}
                ref={(el) => {
                  pageRefs.current[p.pageNumber] = el;
                }}
                className="relative min-h-[580px] w-full max-w-[440px] rounded bg-white p-7 shadow-md text-slate-900 border border-slate-200 font-serif text-[9.5px] leading-[15px]"
              >
                {/* Page Number Badge */}
                <div className="absolute top-2 right-3 text-[8.5px] font-sans font-medium text-slate-400 select-none">
                  Trang {p.pageNumber} / {totalPages}
                </div>

                {/* Header */}
                {p.pageNumber === 1 ? (
                  <div className="flex justify-between border-b border-slate-300 pb-2">
                    <div className="text-center font-sans">
                      <p className="font-bold text-[9px] uppercase text-slate-900">
                        CÔNG TY TNHH MTV AN NINH MẠNG VIETTEL
                      </p>
                      <p className="text-[8px] italic text-slate-600">(TÊN ĐƠN VỊ/PHÒNG/TRUNG TÂM)</p>
                      <p className="mt-1 text-[8.5px]">
                        Số: {proposalData.generalInfo.proposalNumber || "TT-2025-028"}/TTr-HCTH
                      </p>
                      <p className="mt-0.5 font-bold text-[8.5px]">PHÊ DUYỆT</p>
                      <p className="text-[8px]">Ngày {proposalData.generalInfo.proposalDate || "19/04/2025"}</p>
                      <p className="text-[8px] italic">[CHỨC DANH NGƯỜI PHÊ DUYỆT]</p>
                    </div>
                    <div className="text-center font-sans">
                      <p className="font-bold text-[9px] uppercase text-slate-900">
                        CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                      </p>
                      <p className="font-medium text-[8.5px]">Độc lập - Tự do - Hạnh phúc</p>
                      <div className="relative mt-1 inline-block">
                        <span className="text-[8px] italic text-slate-600">
                          Hà Nội, ngày {proposalData.generalInfo.proposalDate || "19/04/2025"}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between border-b border-slate-200 pb-2 mb-3 text-slate-500 font-sans text-[8px]">
                    <span>CÔNG TY TNHH MTV AN NINH MẠNG VIETTEL</span>
                    <span>Số: {proposalData.generalInfo.proposalNumber || "TT-2025-028"}</span>
                  </div>
                )}

                {/* Page Title */}
                <div className="mt-3 text-center">
                  <p className="font-bold font-sans text-[11px] uppercase tracking-wide text-slate-900">
                    {p.title}
                  </p>
                  {p.subtitle && (
                    <p className="mt-0.5 text-[8.5px] font-sans font-semibold text-slate-700">
                      {p.subtitle}
                    </p>
                  )}
                  {p.pageNumber === 1 && (
                    <p className="mt-1 text-[8.5px] font-medium text-slate-700">
                      Kính gửi: Ban Giám đốc Công ty
                    </p>
                  )}
                </div>

                {/* Body Content */}
                <div className="mt-3">{p.content}</div>

                {/* Page Footer */}
                <div className="mt-6 pt-2 border-t border-slate-100 flex justify-between items-center text-[7.5px] text-slate-400 font-sans">
                  <span>VCS Contract Management System</span>
                  <span>
                    Trang {p.pageNumber} / {totalPages}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
