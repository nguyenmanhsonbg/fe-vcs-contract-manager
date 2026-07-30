import imgVariantCircleBadgeFalseIconFalseImageTrue from "./420fce61b2448c9eab5d25435a5e458a011f53b7.png";
import svgPaths from "./svg-ejg7olf6cg";
import imgImage2 from "./01342b2bb964441edcb3fd61de43edf5fdb34da6.png";
import imgImage7 from "./d0158cda7b777eff614476338cab8f61c01d388a.png";
type DocStatusProps = {
  className?: string;
  property1?: "Đang xử lý" | "Đã xác nhận" | "Chờ đối soát" | "Lỗi";
};

function DocStatus({ className, property1 = "Đang xử lý" }: DocStatusProps) {
  const isChDiSoat = property1 === "Chờ đối soát";
  const isDaXacNhn = property1 === "Đã xác nhận";
  const isLi = property1 === "Lỗi";
  return (
    <div className={className || `relative ${["Đã xác nhận", "Chờ đối soát"].includes(property1) ? "w-[95px]" : ""}`}>
      <div className="content-stretch flex items-start relative size-full">
        <div className={`relative rounded-[4px] shrink-0 ${isLi ? "bg-[rgba(234,84,85,0.16)]" : isChDiSoat ? "bg-[rgba(255,159,67,0.16)]" : isDaXacNhn ? "bg-[rgba(40,199,111,0.16)]" : "bg-[rgba(0,123,255,0.16)]"}`} data-name="Badge">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[10px] py-[5px] relative size-full">
              <p className={`[word-break:break-word] leading-[14px] not-italic relative shrink-0 text-[13px] whitespace-nowrap ${isLi ? 'font-["Pretendard_Variable:Medium",sans-serif] text-[#ea5455]' : isChDiSoat ? 'font-["Pretendard_Variable:Medium",sans-serif] text-[#ff9f43]' : isDaXacNhn ? 'font-["Pretendard_Variable:Medium",sans-serif] text-[#28c76f]' : 'font-["Pretendard:Medium",sans-serif] text-[#007bff]'}`} style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1' }}>
                {isLi ? "Lỗi" : isChDiSoat ? "Chờ đối soát" : isDaXacNhn ? "Đã xác nhận" : "Đang xử lý"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Plus({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Path" />
      </svg>
      <div className="absolute inset-[20.83%_47.92%]" data-name="Path">
        <div className="absolute inset-[-5.36%_-25%]">
          <svg className="block size-full" fill="none" height="15.5" preserveAspectRatio="none" viewBox="0 0 1.5 15.5" width="1.5">
            <path d="M0.75 0.75V14.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
        <div className="absolute inset-[-25%_-5.36%]">
          <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 15.5 1.5" width="15.5">
            <path d="M0.75 0.75H14.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type AvatarProps = {
  className?: string;
  badge?: "False";
  icon?: "False";
  image?: "True";
  variant?: "Circle";
};

function Avatar({ className, badge = "False", icon = "False", image = "True", variant = "Circle" }: AvatarProps) {
  return (
    <div className={className || "relative rounded-[500px] size-[40px]"}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[500px] size-full" src={imgVariantCircleBadgeFalseIconFalseImageTrue} />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Logo">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[22px] pr-[16px] py-[20px] relative size-full">
          <div className="h-[62px] relative shrink-0 w-[150px]" data-name="image 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[16px] top-[2px]" data-name="cloud-upload">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute bottom-1/4 left-[9.56%] right-[6.25%] top-[20.62%]" data-name="Path">
          <div className="absolute inset-[-8.62%_-5.57%]">
            <svg className="block size-full" fill="none" height="10.2" preserveAspectRatio="none" viewBox="0 0 14.9697 10.2" width="14.9697">
              <path d={svgPaths.p2a60d340} id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Path">
          <div className="absolute inset-[-37.5%_-18.75%]">
            <svg className="block size-full" fill="none" height="3.5" preserveAspectRatio="none" viewBox="0 0 5.5 3.5" width="5.5">
              <path d={svgPaths.p26da0740} id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-[47.92%] right-[47.92%] top-1/2" data-name="Path">
          <div className="absolute inset-[-12.5%_-62.5%]">
            <svg className="block size-full" fill="none" height="7.5" preserveAspectRatio="none" viewBox="0 0 1.5 7.5" width="1.5">
              <path d="M0.75 0.75V6.75" id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnOutlineDanger() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[20px] py-[8px] relative shrink-0" data-name="btn-outline-danger">
      <MaskedIcon />
      <p className="[word-break:break-word] capitalize font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#ff4c51] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tải Lên tài liệu
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Báo cáo tổng quan</p>
      </div>
    </div>
  );
}

function ChipBgDanger() {
  return (
    <div className="bg-[#ff4c51] content-stretch flex gap-[4px] items-center justify-center min-w-[24px] px-[10px] py-[2px] relative rounded-[500px] shrink-0" data-name="chip bg-danger">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[1.4]">5</p>
      </div>
    </div>
  );
}

function ListSubheader() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="ListSubheader">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">PHÂN HỆ LƯU TRỮ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSeparator() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Quản trị dữ liệu</p>
      </div>
    </div>
  );
}

function Applications() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[8px] relative shrink-0 w-[236px]" data-name="Applications">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="folders">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute inset-[16.67%_12.5%_29.17%_29.17%]" data-name="Path">
                <div className="absolute inset-[-6.92%_-6.43%]">
                  <svg className="block size-full" fill="none" height="12.3333" preserveAspectRatio="none" viewBox="0 0 13.1667 12.3333" width="13.1667">
                    <path d={svgPaths.pdf11640} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[33.33%_29.17%_12.5%_12.5%]" data-name="Path">
                <div className="absolute inset-[-6.92%_-6.43%]">
                  <svg className="block size-full" fill="none" height="12.3333" preserveAspectRatio="none" viewBox="0 0 13.1667 12.3333" width="13.1667">
                    <path d={svgPaths.p2ea8e080} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <Frame16 />
            <div className="relative shrink-0 size-[16px]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Path">
                <div className="absolute inset-[-9.38%_-18.75%]">
                  <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 5.5 9.5" width="5.5">
                    <path d={svgPaths.p2fd49480} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e64449] text-[14px] whitespace-nowrap">
              <p className="leading-[1.4]">Số hóa tài liệu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Tìm kiếm sản phẩm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Quản lý tờ trình</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Quản lý hợp đồng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhanHLuTr() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ lưu trữ">
      <SectionSeparator />
      <Applications />
    </div>
  );
}

function ListSubheader1() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="ListSubheader">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">PHÂN HỆ ĐẤU THẦU</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSeparator1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Quản trị gói thầu</p>
      </div>
    </div>
  );
}

function Applications1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[8px] relative shrink-0 w-[236px]" data-name="Applications">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Suitcase">
              <div className="absolute inset-[28.13%_12.5%_15.63%_12.5%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="11.25" preserveAspectRatio="none" viewBox="0 0 15 11.25" width="15">
                  <path d={svgPaths.p4c1b600} fill="#2F2B3D" fillOpacity="0.9" id="Union" opacity="0.2" />
                </svg>
              </div>
              <div className="absolute inset-[10.63%_7.5%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="15.75" preserveAspectRatio="none" viewBox="0 0 17 15.75" width="17">
                  <path d={svgPaths.p19ad2000} fill="#2F2B3D" fillOpacity="0.9" id="Union" />
                </svg>
              </div>
            </div>
            <Frame17 />
            <div className="relative shrink-0 size-[16px]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Path">
                <div className="absolute inset-[-9.38%_-18.75%]">
                  <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 5.5 9.5" width="5.5">
                    <path d={svgPaths.p2fd49480} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Danh mục gói thầu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Hồ sơ mời thầu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Đối soát dự thầu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhanHLuTr1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ lưu trữ">
      <SectionSeparator1 />
      <Applications1 />
    </div>
  );
}

function ListSubheader2() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="ListSubheader">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">{`PHÂN TÍCH & BÁO CÁO`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSeparator2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader2 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Báo cáo tổng hợp</p>
      </div>
    </div>
  );
}

function Applications2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-[236px]" data-name="Applications">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="report-analytics">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute inset-[20.83%_20.83%_12.5%_20.83%]" data-name="Path">
                <div className="absolute inset-[-5.63%_-6.43%]">
                  <svg className="block size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 13.1667 14.8333" width="13.1667">
                    <path d={svgPaths.p35273c80} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[12.5%_37.5%_70.83%_37.5%] rounded-[2px]" data-name="Rectangle">
                <div aria-hidden className="absolute border-[1.5px] border-[rgba(47,43,61,0.9)] border-solid inset-[-0.75px] pointer-events-none rounded-[2.75px]" />
              </div>
              <div className="absolute bottom-[29.17%] left-[35.42%] right-[60.42%] top-1/2" data-name="Path">
                <div className="absolute inset-[-18%_-40%]">
                  <svg className="block size-full" fill="none" height="5.66667" preserveAspectRatio="none" viewBox="0 0 1.5 5.66667" width="1.5">
                    <path d="M0.75 4.91667V0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[66.67%_47.92%_29.17%_47.92%]" data-name="Path">
                <div className="absolute inset-[-90%_-40%]">
                  <svg className="block size-full" fill="none" height="2.33333" preserveAspectRatio="none" viewBox="0 0 1.5 2.33333" width="1.5">
                    <path d="M0.75 1.58333V0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[58.33%_35.42%_29.17%_60.42%]" data-name="Path">
                <div className="absolute inset-[-30%_-40%]">
                  <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 1.5 4" width="1.5">
                    <path d="M0.75 3.25V0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <Frame18 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhanHDuThu() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ đấu thầu">
      <SectionSeparator2 />
      <Applications2 />
    </div>
  );
}

function ListSubheader3() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="ListSubheader">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">{`TÀI KHOẢN & CÀI ĐẶT`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSeparator3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader3 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">{`Tài khoản & Cài đặt`}</p>
      </div>
    </div>
  );
}

function Applications3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[8px] relative shrink-0 w-[236px]" data-name="Applications">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="user-circle">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute inset-[12.5%]" data-name="Oval">
                <div className="absolute inset-[-5%]">
                  <svg className="block size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                    <circle cx="8.25" cy="8.25" id="Oval" r="7.5" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Oval">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 6.5 6.5" width="6.5">
                    <circle cx="3.25" cy="3.25" id="Oval" r="2.5" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[66.67%_25.69%_21.44%_25.7%]" data-name="Path">
                <div className="absolute inset-[-31.52%_-7.72%_-31.53%_-7.72%]">
                  <svg className="block size-full" fill="none" height="3.87936" preserveAspectRatio="none" viewBox="0 0 11.2221 3.87936" width="11.2221">
                    <path d={svgPaths.p21b1de00} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <Frame19 />
            <div className="relative shrink-0 size-[16px]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Path">
                <div className="absolute inset-[-9.38%_-18.75%]">
                  <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 5.5 9.5" width="5.5">
                    <path d={svgPaths.p2fd49480} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Hồ sơ của tôi</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Bảo mật tài khoản</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhanHDuThu1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ đấu thầu">
      <SectionSeparator3 />
      <Applications3 />
    </div>
  );
}

function MenuDrawer() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative" data-name="Menu Drawer">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative size-full">
        <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center pt-[14px] relative size-full">
              <div className="flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Outline Button">
                <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                    <BtnOutlineDanger />
                  </div>
                </div>
                <div aria-hidden className="absolute border border-[#ff4c51] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[14px] px-[8px] relative size-full">
              <div className="relative shrink-0 size-[20px]" data-name="smart-home">
                <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                  <g id="Path" />
                </svg>
                <div className="absolute inset-[16.67%_16.54%_16.6%_16.79%]" data-name="Path">
                  <div className="absolute inset-[-5.62%_-5.63%]">
                    <svg className="block size-full" fill="none" height="14.8456" preserveAspectRatio="none" viewBox="0 0 14.8333 14.8456" width="14.8333">
                      <path d={svgPaths.p1b9cd808} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[62.5%_33.33%_33.33%_33.33%]" data-name="Path">
                  <div className="absolute inset-[-90%_-11.25%_-89.99%_-11.25%]">
                    <svg className="block size-full" fill="none" height="2.33324" preserveAspectRatio="none" viewBox="0 0 8.16689 2.33324" width="8.16689">
                      <path d={svgPaths.p1f02c980} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <Frame15 />
              <div className="min-w-[24px] relative shrink-0" data-name="Chip">
                <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] relative size-full">
                    <ChipBgDanger />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PhanHLuTr />
        <PhanHLuTr1 />
        <PhanHDuThu />
        <PhanHDuThu1 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px relative text-[rgba(47,43,61,0.9)] tracking-[0.25px]">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[22px] w-full">
        <p className="leading-[24px]">Nguyễn Văn A</p>
      </div>
      <div className="flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center not-italic relative shrink-0 text-[12px] w-full">
        <p className="leading-[24px]">Cán bộ Đầu tư</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-name="Row">
      <Avatar className="relative rounded-[500px] shrink-0 size-[40px]" />
      <Frame1 />
    </div>
  );
}

function Logo1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Logo">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[22px] pr-[16px] py-[20px] relative size-full">
          <Row />
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Search">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-end leading-[0] min-w-px not-italic relative text-[18px] text-[rgba(47,43,61,0.9)]">
            <p>
              <span className="leading-[1.2] text-[rgba(47,43,61,0.7)]">Trang chủ</span>
              <span className="leading-[1.2]">{` \ Số hóa tài liệu`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <div className="relative shrink-0" data-name="search">
        <div className="content-stretch flex gap-[8px] items-start relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Path">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
          </div>
          <div className="absolute inset-[12.5%_29.17%_29.17%_12.5%]" data-name="Oval">
            <div className="absolute inset-[-5.36%]">
              <svg className="block size-full" fill="none" height="15.5" preserveAspectRatio="none" viewBox="0 0 15.5 15.5" width="15.5">
                <circle cx="7.75" cy="7.75" id="Oval" r="7" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[62.5%_12.5%_12.5%_62.5%]" data-name="Path">
            <div className="absolute inset-[-12.5%]">
              <svg className="block size-full" fill="none" height="7.5" preserveAspectRatio="none" viewBox="0 0 7.5 7.5" width="7.5">
                <path d="M6.75 6.75L0.75 0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnIconBtnPrimary() {
  return (
    <div className="content-stretch flex items-center p-[7px] relative rounded-[500px] shrink-0" data-name="btn-icon btn-primary">
      <Icon />
    </div>
  );
}

function Search1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center pl-[16px] relative rounded-[6px] shrink-0 w-[350px]" data-name="Search">
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.12)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="relative shrink-0" data-name="IconButton">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <BtnIconBtnPrimary />
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.4)]">Tìm kiếm</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute left-[23px] size-[7.5px] top-[9px]" data-name="Badge">
      <div className="absolute inset-[-20%]">
        <svg className="block size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
          <g id="Badge">
            <circle cx="5.25" cy="5.25" fill="#FF4C51" id="Ellipse" r="4.5" stroke="#F8F7FA" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function UnstyledIconButton() {
  return (
    <div className="h-[38px] relative rounded-[48px] shrink-0 w-[54px]" data-name="UnstyledIconButton">
      <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="bell">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%_16.67%_29.17%_16.67%]" data-name="Path">
          <div className="absolute inset-[-5.36%_-4.69%]">
            <svg className="block size-full" fill="none" height="15.5" preserveAspectRatio="none" viewBox="0 0 17.5001 15.5" width="17.5001">
              <path d={svgPaths.p1f816900} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_37.5%_12.5%_37.5%]" data-name="Path">
          <div className="absolute inset-[-18.75%_-12.5%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 7.5 5.5" width="7.5">
              <path d={svgPaths.pab7b200} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Badge />
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[48px]" data-name="IconButton">
      <UnstyledIconButton />
    </div>
  );
}

function Border() {
  return (
    <div className="absolute bg-white inset-[70%_0_0_70%] rounded-[64px]" data-name="border">
      <div className="absolute inset-[16.67%_16.67%_16.66%_16.67%]" data-name="Badge">
        <svg className="absolute block inset-0 size-full" fill="none" height="7.6" preserveAspectRatio="none" viewBox="0 0 7.6 7.6" width="7.6">
          <circle cx="3.8" cy="3.8" fill="#28C76F" id="Badge" r="3.8" />
        </svg>
      </div>
    </div>
  );
}

function WBadge() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="wBadge">
      <div className="absolute inset-0 rounded-[500px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[500px] size-full" src={imgVariantCircleBadgeFalseIconFalseImageTrue} />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="relative size-full" />
        </div>
      </div>
      <Border />
    </div>
  );
}

function ActionButton() {
  return (
    <div className="content-stretch flex items-center justify-end pr-[24px] relative shrink-0" data-name="Action Button">
      <IconButton />
      <div className="relative shrink-0 size-[38px]" data-name="Avatar">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <WBadge />
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav">
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[24px] relative size-full">
        <div className="backdrop-blur-[10px] bg-white relative rounded-bl-[10px] rounded-br-[10px] shadow-[0px_4px_10px_-4px_rgba(47,43,61,0.24)] shrink-0 w-full" data-name="# Vertical Navbar Scroll">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center py-[12px] relative size-full">
              <Search />
              <Search1 />
              <ActionButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 w-[591px] whitespace-nowrap" data-name="Frame">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#393740] text-[24px]">Số hoá tài liệu</p>
      <p className="font-['Roboto:Italic',sans-serif] font-normal italic leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tải tài liệu mua sắm vào hệ thống để lưu trữ, trích xuất dữ liệu (OCR) và phục vụ xử lý nghiệp vụ
      </p>
    </div>
  );
}

function Form1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[2px]" data-name="_Form">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[7px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-[rgba(47,43,61,0.9)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">01/04/2025 - 30/04/2025</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="calendar-event">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
            <div className="absolute inset-[20.83%_16.67%_12.5%_16.67%] rounded-[2px]" data-name="Rectangle">
              <div aria-hidden className="absolute border-[#393740] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[2.75px]" />
            </div>
            <div className="absolute inset-[12.5%_31.25%_70.83%_64.58%]" data-name="Path">
              <div className="absolute inset-[-22.5%_-40%]">
                <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 1.5 4.83333" width="1.5">
                  <path d="M0.75 0.75V4.08333" id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[12.5%_64.58%_70.83%_31.25%]" data-name="Path">
              <div className="absolute inset-[-22.5%_-40%]">
                <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 1.5 4.83333" width="1.5">
                  <path d="M0.75 0.75V4.08333" id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[43.75%_16.67%_52.08%_16.67%]" data-name="Path">
              <div className="absolute inset-[-40%_-5.63%]">
                <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 14.8333 1.5" width="14.8333">
                  <path d="M0.75 0.75H14.0833" id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[62.5%_58.33%_29.17%_33.33%]" data-name="Rectangle">
              <div aria-hidden className="absolute border-[#393740] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Form">
      <div className="content-stretch flex items-start overflow-clip py-[5px] relative rounded-[inherit] size-full">
        <Form1 />
      </div>
      <div aria-hidden className="absolute border border-[#dbdade] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Header">
      <div className="flex-[1_0_0] min-w-px relative" data-name="# Date Picker">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <Form />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[190px] items-start min-w-px relative">
      <Frame />
      <Header2 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex h-[46px] items-end relative shrink-0 w-full" data-name="Header">
      <Frame39 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Header">
      <Header1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[rgba(63,129,234,0.16)] content-stretch flex items-start p-[6px] relative rounded-[6px] shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[28px]" data-name="file-text">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%_20.83%_66.67%_58.33%]" data-name="Path">
          <div className="absolute inset-[-12.86%]">
            <svg className="block size-full" fill="none" height="7.33333" preserveAspectRatio="none" viewBox="0 0 7.33333 7.33333" width="7.33333">
              <path d={svgPaths.pb660270} id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_20.83%]" data-name="Path">
          <div className="absolute inset-[-3.57%_-4.59%]">
            <svg className="block size-full" fill="none" height="22.5" preserveAspectRatio="none" viewBox="0 0 17.8333 22.5" width="17.8333">
              <path clipRule="evenodd" d={svgPaths.p341d2380} fillRule="evenodd" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[35.42%_58.33%_60.42%_37.5%]" data-name="Path">
          <div className="absolute inset-[-14.29%_-64.29%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 2.66667 1.5" width="2.66667">
              <path d="M0.75 0.75H1.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[52.08%_37.5%_43.75%_37.5%]" data-name="Path">
          <div className="absolute inset-[-14.29%_-10.71%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 8.5 1.5" width="8.5">
              <path d="M0.75 0.75H7.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[68.75%_37.5%_27.08%_37.5%]" data-name="Path">
          <div className="absolute inset-[-14.29%_-10.71%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 8.5 1.5" width="8.5">
              <path d="M0.75 0.75H7.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center min-w-full not-italic overflow-hidden relative shrink-0 text-[13px] text-[rgba(47,43,61,0.9)] text-ellipsis w-[min-content]">
        <p className="leading-[1.4] overflow-hidden text-ellipsis">Tài liệu của tôi</p>
      </div>
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#3f81ea] text-[0px]">
        <p className="font-['Public_Sans:Bold',sans-serif] font-bold leading-[38px] text-[24px]">18</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <Icon1 />
      <Frame33 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white drop-shadow-[0px_3px_6px_rgba(47,43,61,0.14)] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Card">
      <div aria-hidden className="absolute border-[#3f81ea] border-b-3 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Row2 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[rgba(0,186,209,0.16)] content-stretch flex items-start p-[6px] relative rounded-[6px] shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[28px]" data-name="clock">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%]" data-name="Oval">
          <div className="absolute inset-[-3.57%]">
            <svg className="block size-full" fill="none" height="22.5" preserveAspectRatio="none" viewBox="0 0 22.5 22.5" width="22.5">
              <circle cx="11.25" cy="11.25" id="Oval" r="10.5" stroke="#00BAD1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-1/2 right-[37.5%] top-[29.17%]" data-name="Path">
          <div className="absolute inset-[-8.04%_-21.43%]">
            <svg className="block size-full" fill="none" height="10.8333" preserveAspectRatio="none" viewBox="0 0 5 10.8333" width="5">
              <path d={svgPaths.p35c99400} id="Path" stroke="#00BAD1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center min-w-full not-italic overflow-hidden relative shrink-0 text-[13px] text-[rgba(47,43,61,0.9)] text-ellipsis w-[min-content]">
        <p className="leading-[1.4] overflow-hidden text-ellipsis">Đang xử lý</p>
      </div>
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#00bad1] text-[24px]">
        <p className="leading-[38px]">5</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <Icon2 />
      <Frame34 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white drop-shadow-[0px_3px_6px_rgba(47,43,61,0.14)] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Card">
      <div aria-hidden className="absolute border-[#00bad1] border-b-3 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Row3 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[rgba(255,159,67,0.16)] content-stretch flex items-start p-[6px] relative rounded-[6px] shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[28px]" data-name="layout-board-split">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[16.67%] rounded-[2px]" data-name="Rectangle">
          <div aria-hidden className="absolute border-[#ff9f43] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[2.75px]" />
        </div>
        <div className="absolute bottom-[47.92%] left-[16.67%] right-1/2 top-[47.92%]" data-name="Path">
          <div className="absolute inset-[-14.29%_-8.04%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 10.8333 1.5" width="10.8333">
              <path d="M0.75 0.75H10.0833" id="Path" stroke="#FF9F43" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[35.42%] left-1/2 right-[16.67%] top-[60.42%]" data-name="Path">
          <div className="absolute inset-[-14.29%_-8.04%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 10.8333 1.5" width="10.8333">
              <path d="M0.75 0.75H10.0833" id="Path" stroke="#FF9F43" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[60.42%] left-1/2 right-[16.67%] top-[35.42%]" data-name="Path">
          <div className="absolute inset-[-14.29%_-8.04%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 10.8333 1.5" width="10.8333">
              <path d="M0.75 0.75H10.0833" id="Path" stroke="#FF9F43" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_47.92%]" data-name="Path">
          <div className="absolute inset-[-4.02%_-14.29%]">
            <svg className="block size-full" fill="none" height="20.1667" preserveAspectRatio="none" viewBox="0 0 1.5 20.1667" width="1.5">
              <path d="M0.75 0.75V19.4167" id="Path" stroke="#FF9F43" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px relative text-[#ff9f43] whitespace-nowrap">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center min-w-full not-italic overflow-hidden relative shrink-0 text-[13px] text-ellipsis w-[min-content]">
        <p className="leading-[1.4] overflow-hidden text-ellipsis">Chờ đối soát</p>
      </div>
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[0px]">
        <p className="font-['Public_Sans:Bold',sans-serif] font-bold leading-[38px] text-[24px]">2</p>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <Icon3 />
      <Frame35 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white drop-shadow-[0px_3px_6px_rgba(47,43,61,0.14)] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Card">
      <div aria-hidden className="absolute border-[#ff9f43] border-b-3 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Row4 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-[rgba(40,199,111,0.16)] content-stretch flex items-start p-[6px] relative rounded-[6px] shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[28px]" data-name="checkbox">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute bottom-[41.67%] left-[37.5%] right-[16.67%] top-1/4" data-name="Path">
          <div className="absolute inset-[-8.04%_-5.84%]">
            <svg className="block size-full" fill="none" height="10.8333" preserveAspectRatio="none" viewBox="0 0 14.3333 10.8333" width="14.3333">
              <path d={svgPaths.pcce8d80} id="Path" stroke="#28C76F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%]" data-name="Path">
          <div className="absolute inset-[-4.02%]">
            <svg className="block size-full" fill="none" height="20.1667" preserveAspectRatio="none" viewBox="0 0 20.1667 20.1667" width="20.1667">
              <path d={svgPaths.p3a9f3a80} id="Path" stroke="#28C76F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center min-w-full not-italic overflow-hidden relative shrink-0 text-[13px] text-[rgba(47,43,61,0.9)] text-ellipsis w-[min-content]">
        <p className="leading-[1.4] overflow-hidden text-ellipsis">Đã xác nhận</p>
      </div>
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#28c76f] text-[0px]">
        <p className="font-['Public_Sans:Bold',sans-serif] font-bold leading-[38px] text-[24px]">10</p>
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <Icon4 />
      <Frame36 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white drop-shadow-[0px_3px_6px_rgba(47,43,61,0.14)] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Card">
      <div aria-hidden className="absolute border-[#28c76f] border-b-3 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Row5 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-[rgba(255,76,81,0.16)] content-stretch flex items-start p-[6px] relative rounded-[6px] shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[28px]" data-name="file-x">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%_20.83%_66.67%_58.33%]" data-name="Path">
          <div className="absolute inset-[-12.86%]">
            <svg className="block size-full" fill="none" height="7.33333" preserveAspectRatio="none" viewBox="0 0 7.33333 7.33333" width="7.33333">
              <path d={svgPaths.pb660270} id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_20.83%]" data-name="Path">
          <div className="absolute inset-[-3.57%_-4.59%]">
            <svg className="block size-full" fill="none" height="22.5" preserveAspectRatio="none" viewBox="0 0 17.8333 22.5" width="17.8333">
              <path clipRule="evenodd" d={svgPaths.p341d2380} fillRule="evenodd" id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[33.33%] left-[41.67%] right-[41.67%] top-1/2" data-name="Shape">
          <div className="absolute inset-[-16.07%]">
            <svg className="block size-full" fill="none" height="6.16667" preserveAspectRatio="none" viewBox="0 0 6.16667 6.16667" width="6.16667">
              <path d={svgPaths.p279ae080} fill="#FF4C51" id="Shape" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center min-w-full not-italic overflow-hidden relative shrink-0 text-[13px] text-[rgba(47,43,61,0.9)] text-ellipsis w-[min-content]">
        <p className="leading-[1.4] overflow-hidden text-ellipsis">Lỗi</p>
      </div>
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#ff4c51] text-[0px]">
        <p className="font-['Public_Sans:Bold',sans-serif] font-bold leading-[38px] text-[24px]">1</p>
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <Icon5 />
      <Frame37 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white drop-shadow-[0px_3px_6px_rgba(47,43,61,0.14)] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Card">
      <div aria-hidden className="absolute border-[#ff4c51] border-b-3 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Row6 />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Row">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="bg-[#ffdbdc] content-stretch flex items-start justify-center p-[10px] relative rounded-[6px] shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[28px]" data-name="upload">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[70.83%_16.67%_12.5%_16.67%]" data-name="Path">
          <div className="absolute inset-[-16.07%_-4.02%]">
            <svg className="block size-full" fill="none" height="6.16667" preserveAspectRatio="none" viewBox="0 0 20.1667 6.16667" width="20.1667">
              <path d={svgPaths.p38e5a7c0} id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_29.17%_62.5%_29.17%]" data-name="Path">
          <div className="absolute inset-[-12.86%_-6.43%]">
            <svg className="block size-full" fill="none" height="7.33333" preserveAspectRatio="none" viewBox="0 0 13.1667 7.33333" width="13.1667">
              <path d={svgPaths.p3e99cd80} id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_47.92%_33.33%_47.92%]" data-name="Path">
          <div className="absolute inset-[-5.36%_-14.29%]">
            <svg className="block size-full" fill="none" height="15.5" preserveAspectRatio="none" viewBox="0 0 1.5 15.5" width="1.5">
              <path d="M0.75 0.75V14.75" id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[4px] w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Icon6 />
          <div className="[word-break:break-word] flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5d586c] text-[18px] text-center w-[176px]">
            <p className="leading-[24px]">Thả tệp vào đây hoặc nhấp để tải lên</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#393740] text-[11px] text-center w-[276px]">
            <ol className="list-decimal" start="1">
              <li className="mb-0 ms-[16.5px]">
                <span className="leading-[14px]">
                  Dung lượng tối đa 10MB/tệp
                  <br aria-hidden />
                  <br aria-hidden />
                </span>
              </li>
              <li className="ms-[16.5px]">
                <span className="leading-[14px]">Hỗ trợ: PDF, DOCX, XLSX, JPG, PNG</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#cccdd3] border-[1.5px] border-dashed inset-[-1.5px] pointer-events-none rounded-[5.5px]" />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[378px] items-start justify-center min-w-px relative">
      <Frame2 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame58 />
    </div>
  );
}

function Form3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="_Form">
      <div className="relative shrink-0 size-[20px]" data-name="search">
        <div className="content-stretch flex gap-[8px] items-start relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Path">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
          </div>
          <div className="absolute inset-[12.5%_29.17%_29.17%_12.5%]" data-name="Oval">
            <div className="absolute inset-[-6.43%]">
              <svg className="block size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 13.1667 13.1667" width="13.1667">
                <circle cx="6.58333" cy="6.58333" id="Oval" r="5.83333" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[62.5%_12.5%_12.5%_62.5%]" data-name="Path">
            <div className="absolute inset-[-15%]">
              <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 6.5 6.5" width="6.5">
                <path d="M5.75 5.75L0.75 0.75" id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b7b5be] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Tìm kiếm trong danh sách ...</p>
      </div>
    </div>
  );
}

function Form2() {
  return (
    <div className="content-stretch flex h-[36px] items-center relative rounded-[4px] shrink-0" data-name="Form">
      <div aria-hidden className="absolute border border-[#dbdade] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      <Form3 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Form2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame38 />
      <div className="relative shrink-0 size-[24px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[16.73%_16.67%_54.17%_16.67%]" data-name="Shape">
          <div className="absolute inset-[-10.74%_-4.69%]">
            <svg className="block size-full" fill="none" height="8.48556" preserveAspectRatio="none" viewBox="0 0 17.5001 8.48556" width="17.5001">
              <path d={svgPaths.p104b3f30} fill="#2F2B3D" fillOpacity="0.9" id="Shape" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[54.17%_16.67%_16.73%_16.67%]" data-name="Shape">
          <div className="absolute inset-[-10.74%_-4.69%]">
            <svg className="block size-full" fill="none" height="8.48556" preserveAspectRatio="none" viewBox="0 0 17.5001 8.48556" width="17.5001">
              <path d={svgPaths.p215aba00} fill="#2F2B3D" fillOpacity="0.9" id="Shape" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[8px] relative shrink-0 w-full" data-name="Table Header">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
        <p className="leading-[1.4]">Danh sách tài liệu đang số hoá</p>
      </div>
      <Frame9 />
    </div>
  );
}

function DataCell() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[2px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[13px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">Loại tài liệu</p>
        </div>
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-b border-solid border-t inset-[-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[10px] py-[4px] relative size-full">
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Medium',sans-serif] leading-[1.4] min-w-px not-italic relative text-[13px] text-[rgba(47,43,61,0.9)]">Tên tài liệu</p>
              </div>
            </div>
          </div>
          <DataCell />
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[13px] text-[rgba(47,43,61,0.9)] w-[96px]">Người tải lên</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[13px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">Thời gian tải lên</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[13px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">Trạng thái xử lý</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataCell1() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[2px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[12px] text-[rgba(47,43,61,0.9)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Tờ trình
          </p>
        </div>
      </div>
    </div>
  );
}

function DataCell2() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
          <DocStatus className="relative shrink-0" />
        </div>
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-b border-solid border-t inset-[-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[10px] py-[4px] relative size-full">
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px overflow-hidden relative text-[12px] text-[rgba(47,43,61,0.9)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  TTr_2024_0123_Phe_duyet_ke_hoach_mua_sam.pdf
                </p>
              </div>
            </div>
          </div>
          <DataCell1 />
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[12px] text-[rgba(47,43,61,0.9)]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Nguyễn Văn A
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  10:51 20/05/2026
                </p>
              </div>
            </div>
          </div>
          <DataCell2 />
        </div>
      </div>
    </div>
  );
}

function DataCell3() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[2px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[12px] text-[rgba(47,43,61,0.9)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Hợp đồng
          </p>
        </div>
      </div>
    </div>
  );
}

function DataCell4() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
          <DocStatus className="relative shrink-0 w-[95px]" property1="Đã xác nhận" />
        </div>
      </div>
    </div>
  );
}

function Row9() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-b border-solid border-t inset-[-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[10px] py-[4px] relative size-full">
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px overflow-hidden relative text-[12px] text-[rgba(47,43,61,0.9)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  HD_2024_0456_Cung_cap_thiet_bi_mang.pdf
                </p>
              </div>
            </div>
          </div>
          <DataCell3 />
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[12px] text-[rgba(47,43,61,0.9)]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Nguyễn Văn A
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  10:51 20/05/2026
                </p>
              </div>
            </div>
          </div>
          <DataCell4 />
        </div>
      </div>
    </div>
  );
}

function DataCell5() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[2px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[12px] text-[rgba(47,43,61,0.9)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Bảng báo giá
          </p>
        </div>
      </div>
    </div>
  );
}

function DataCell6() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
          <DocStatus className="relative shrink-0 w-[95px]" property1="Chờ đối soát" />
        </div>
      </div>
    </div>
  );
}

function Row10() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-b border-solid border-t inset-[-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[10px] py-[4px] relative size-full">
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px overflow-hidden relative text-[12px] text-[rgba(47,43,61,0.9)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Bang_bao_gia_thiet_bi.png
                </p>
              </div>
            </div>
          </div>
          <DataCell5 />
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[12px] text-[rgba(47,43,61,0.9)]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Trần Thị B
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  10:51 20/05/2026
                </p>
              </div>
            </div>
          </div>
          <DataCell6 />
        </div>
      </div>
    </div>
  );
}

function DataCell7() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[2px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[12px] text-[rgba(47,43,61,0.9)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Biên bản nghiệm thu
          </p>
        </div>
      </div>
    </div>
  );
}

function DataCell8() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
          <DocStatus className="relative shrink-0 w-[95px]" property1="Đã xác nhận" />
        </div>
      </div>
    </div>
  );
}

function Row11() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-b border-solid border-t inset-[-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[10px] py-[4px] relative size-full">
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px overflow-hidden relative text-[12px] text-[rgba(47,43,61,0.9)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Bien_ban_nghiem_thu.png
                </p>
              </div>
            </div>
          </div>
          <DataCell7 />
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[12px] text-[rgba(47,43,61,0.9)]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Lê Minh C
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  10:51 20/05/2026
                </p>
              </div>
            </div>
          </div>
          <DataCell8 />
        </div>
      </div>
    </div>
  );
}

function DataCell9() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[2px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[12px] text-[rgba(47,43,61,0.9)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Hồ sơ mời thầu
          </p>
        </div>
      </div>
    </div>
  );
}

function DataCell10() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
          <DocStatus className="relative shrink-0" property1="Lỗi" />
        </div>
      </div>
    </div>
  );
}

function Row12() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-b border-solid border-t inset-[-0.5px_0] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[10px] py-[4px] relative size-full">
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px overflow-hidden relative text-[12px] text-[rgba(47,43,61,0.9)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  HS_moi_thau_cung_cap_dich_vu_it.pdf
                </p>
              </div>
            </div>
          </div>
          <DataCell9 />
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[12px] text-[rgba(47,43,61,0.9)]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Nguyễn Văn A
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  10:51 20/05/2026
                </p>
              </div>
            </div>
          </div>
          <DataCell10 />
        </div>
      </div>
    </div>
  );
}

function DataTable() {
  return (
    <div className="content-stretch flex flex-col h-[243px] items-start relative shrink-0 w-full" data-name="Data Table">
      <Row7 />
      <Row8 />
      <Row9 />
      <Row10 />
      <Row11 />
      <Row12 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Container">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">Hiển thị 1 - 5 của 28 kết quả</p>
    </div>
  );
}

function PageLinkPrev() {
  return (
    <div className="bg-[rgba(47,43,61,0.08)] content-stretch flex items-center justify-center p-[7px] relative rounded-[6px] shrink-0" data-name="page-link prev">
      <div className="relative shrink-0 size-[16px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%_-18.75%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 5.5 9.5" width="5.5">
              <path d={svgPaths.p2052b680} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageLinkActive() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-w-[30px] p-[6px] relative rounded-[6px] shrink-0" data-name="page-link active">
      <div aria-hidden className="absolute border border-[#3f81ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#3f81ea] text-[12px] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1
      </p>
    </div>
  );
}

function PageLink() {
  return (
    <div className="bg-[rgba(47,43,61,0.08)] content-stretch flex items-center justify-center min-w-[30px] p-[6px] relative rounded-[6px] shrink-0" data-name="page-link">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        2
      </p>
    </div>
  );
}

function PageLink1() {
  return (
    <div className="bg-[rgba(47,43,61,0.08)] content-stretch flex items-center justify-center min-w-[30px] p-[6px] relative rounded-[6px] shrink-0" data-name="page-link">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3
      </p>
    </div>
  );
}

function PageLinkNext() {
  return (
    <div className="bg-[rgba(47,43,61,0.08)] content-stretch flex items-center justify-center p-[7px] relative rounded-[6px] shrink-0" data-name="page-link next">
      <div className="relative shrink-0 size-[16px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%_-18.75%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 5.5 9.5" width="5.5">
              <path d={svgPaths.p2fd49480} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaginationPaginationSm() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-center relative shrink-0" data-name="pagination pagination-sm">
      <PageLinkPrev />
      <PageLinkActive />
      <PageLink />
      <PageLink1 />
      <PageLinkNext />
    </div>
  );
}

function TableFooter() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="TableFooter">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] relative size-full">
          <Container1 />
          <div className="relative shrink-0" data-name="Pagination">
            <div className="flex flex-row items-center justify-end size-full">
              <div className="content-center flex flex-wrap gap-y-[4px] items-center justify-end relative size-full">
                <PaginationPaginationSm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SampleTable() {
  return (
    <div className="drop-shadow-[0px_3px_6px_rgba(47,43,61,0.14)] relative rounded-[6px] shrink-0 w-full" data-name="# Sample Table">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[24px] relative size-full">
          <TableHeader />
          <DataTable />
          <div className="h-[43px] relative shrink-0 w-full" data-name="Table Footer">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <TableFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px] self-stretch shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)]" data-name="Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[12px] relative size-full">
          <SampleTable />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Container />
    </div>
  );
}

function Frame42() {
  return <div className="h-[28px] relative shrink-0 w-full" />;
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-end p-[24px] relative size-full">
          <Header />
          <Row1 />
          <Frame40 />
          <Frame41 />
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function Search2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Search">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.7)] text-center">LoogIX © 2026</p>
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Wrapper">
      <Nav />
      <Body />
      <div className="drop-shadow-[0px_-4px_5px_rgba(47,43,61,0.24)] relative shrink-0 w-full" data-name="# Footer">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center py-[16px] relative size-full">
            <Search2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function AutoLayoutFrame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1440px]" data-name="Auto-layout Frame">
      <div className="drop-shadow-[0px_2px_4px_rgba(47,43,61,0.12)] h-[1228px] relative shrink-0" data-name="Menu - side bar">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <Logo />
            <MenuDrawer />
            <Logo1 />
          </div>
        </div>
      </div>
      <Wrapper />
    </div>
  );
}

function SHoaTaiLiu1() {
  return (
    <div className="absolute bg-[#f8f7fa] content-stretch flex flex-col items-center left-[156px] min-h-[820px] overflow-clip top-[59px] w-[1440px]" data-name="Số hóa tài liệu">
      <AutoLayoutFrame />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.2]">Tải lên tài liệu</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
              <path d="M12.75 0.75L0.75 12.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
              <path d="M0.75 0.75L12.75 12.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame43 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="bg-[#ffdbdc] content-stretch flex items-start justify-center p-[10px] relative rounded-[6px] shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[28px]" data-name="upload">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[70.83%_16.67%_12.5%_16.67%]" data-name="Path">
          <div className="absolute inset-[-16.07%_-4.02%]">
            <svg className="block size-full" fill="none" height="6.16667" preserveAspectRatio="none" viewBox="0 0 20.1667 6.16667" width="20.1667">
              <path d={svgPaths.p38e5a7c0} id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_29.17%_62.5%_29.17%]" data-name="Path">
          <div className="absolute inset-[-12.86%_-6.43%]">
            <svg className="block size-full" fill="none" height="7.33333" preserveAspectRatio="none" viewBox="0 0 13.1667 7.33333" width="13.1667">
              <path d={svgPaths.p3e99cd80} id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_47.92%_33.33%_47.92%]" data-name="Path">
          <div className="absolute inset-[-5.36%_-14.29%]">
            <svg className="block size-full" fill="none" height="15.5" preserveAspectRatio="none" viewBox="0 0 1.5 15.5" width="1.5">
              <path d="M0.75 0.75V14.75" id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[171px] items-center relative shrink-0">
      <Icon7 />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5d586c] text-[18px] text-center w-[176px]">
        <p className="leading-[24px]">Thả tệp vào đây hoặc nhấp để tải lên</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#393740] text-[11px] text-center w-[276px]">
        <ol className="list-decimal" start="1">
          <li className="mb-0 ms-[16.5px]">
            <span className="leading-[14px]">
              Dung lượng tối đa 10MB/tệp
              <br aria-hidden />
              <br aria-hidden />
            </span>
          </li>
          <li className="ms-[16.5px]">
            <span className="leading-[14px]">Hỗ trợ: PDF, DOCX, XLSX, JPG, PNG</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
          <Frame78 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#cccdd3] border-[1.5px] border-dashed inset-[-1.5px] pointer-events-none rounded-[5.5px]" />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[16px] items-center leading-[0] not-italic py-[8px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] h-full justify-center min-w-px relative text-[16px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Tệp đã tải lên</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center min-w-px relative text-[#3271d7] text-[14px] text-right">
        <p className="leading-[1.4]">Đã tải lên 3/10 file</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0" data-name="Data Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[2px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.55)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              PDF
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Data Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[2px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.55)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              2.5MB
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Data Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[2px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.55)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              18/04/2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <div className="relative shrink-0 w-full" data-name="Data Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[2px] relative size-full">
              <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">Tờ_trình_mua_ccdc.pdf</p>
            </div>
          </div>
        </div>
        <Frame72 />
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] relative size-full">
          <div className="relative shrink-0 size-[22px]" data-name="bxs:file-pdf">
            <div className="absolute inset-[61.17%_45.8%_27.68%_32.9%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="2.45305" preserveAspectRatio="none" viewBox="0 0 4.68788 2.45305" width="4.68788">
                <path d={svgPaths.pb78500} fill="#FF4C51" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="18.3333" preserveAspectRatio="none" viewBox="0 0 14.6667 18.3333" width="14.6667">
                <path d={svgPaths.p1e1abf40} fill="#FF4C51" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Row13() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[147px] items-center justify-center p-[4px] relative size-full">
          <Frame75 />
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0" data-name="Data Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[2px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.55)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              PDF
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Data Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[2px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.55)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              2.5MB
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Data Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[2px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.55)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              18/04/2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <div className="relative shrink-0 w-full" data-name="Data Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[2px] relative size-full">
              <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">Hợp đồng mua ccdc.pdf</p>
            </div>
          </div>
        </div>
        <Frame73 />
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] relative size-full">
          <div className="relative shrink-0 size-[22px]" data-name="bxs:file-pdf">
            <div className="absolute inset-[61.17%_45.8%_27.68%_32.9%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="2.45305" preserveAspectRatio="none" viewBox="0 0 4.68788 2.45305" width="4.68788">
                <path d={svgPaths.pb78500} fill="#FF4C51" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="18.3333" preserveAspectRatio="none" viewBox="0 0 14.6667 18.3333" width="14.6667">
                <path d={svgPaths.p1e1abf40} fill="#FF4C51" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Row14() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[147px] items-center justify-center p-[4px] relative size-full">
          <Frame76 />
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0" data-name="Data Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[2px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.55)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              XLSX
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Data Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[2px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.55)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              2.5MB
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Data Cell">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[2px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.55)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              18/04/2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <div className="relative shrink-0 w-full" data-name="Data Cell">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[2px] relative size-full">
              <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">Bảng giá chi tiết.xlsx</p>
            </div>
          </div>
        </div>
        <Frame74 />
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] relative size-full">
          <div className="relative shrink-0 size-[22px]" data-name="healthicons:excel-logo">
            <div className="absolute inset-[12.5%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                <path clipRule="evenodd" d={svgPaths.p145be700} fill="#28C76F" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Row15() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[147px] items-center justify-center p-[4px] relative size-full">
          <Frame77 />
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <Row13 />
      <Row14 />
      <Row15 />
    </div>
  );
}

function Scrollbar() {
  return (
    <div className="bg-[#fafafa] relative rounded-[90px] self-stretch shrink-0 w-[15px]" data-name="Scrollbar">
      <div aria-hidden className="absolute border-[0.5px] border-[rgba(47,43,61,0.12)] border-solid inset-0 pointer-events-none rounded-[90px]" />
      <div className="-translate-x-1/2 absolute bg-[#c1c1c1] h-[20px] left-1/2 rounded-[4px] top-[3px] w-[7px]" data-name="Thumb">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#c1c1c1] text-[4px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal]">​</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame82 />
      <Scrollbar />
    </div>
  );
}

function SampleTable1() {
  return (
    <div className="drop-shadow-[0px_3px_6px_rgba(47,43,61,0.14)] relative rounded-[6px] shrink-0 w-full" data-name="# Sample Table">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] py-[8px] relative size-full">
          <TableHeader1 />
          <Frame83 />
        </div>
      </div>
    </div>
  );
}

function BtnSecondaryBtnSm() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[14px] py-[6px] relative shrink-0" data-name="btn-secondary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Hủy</p>
    </div>
  );
}

function BtnDangerBtnSm() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[14px] py-[6px] relative shrink-0" data-name="btn-danger btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Xử lý tài liệu</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-end relative shrink-0 w-full">
      <div className="bg-[#808390] relative rounded-[4px] shadow-[0px_2px_6px_0px_rgba(128,131,144,0.3)] shrink-0" data-name="Default Button">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <BtnSecondaryBtnSm />
          </div>
        </div>
      </div>
      <div className="bg-[#ff4c51] relative rounded-[4px] shadow-[0px_2px_6px_0px_rgba(255,76,81,0.3)] shrink-0" data-name="Default Button">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <BtnDangerBtnSm />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center px-[24px] py-[8px] relative size-full">
          <Frame29 />
          <Frame3 />
          <SampleTable1 />
          <Frame79 />
        </div>
      </div>
    </div>
  );
}

function Upload() {
  return (
    <div className="absolute bg-white content-stretch flex items-start left-[148px] overflow-clip px-[8px] py-[12px] rounded-[6px] shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)] top-[1327px] w-[600px]" data-name="Upload">
      <Frame59 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Logo">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[22px] pr-[16px] py-[20px] relative size-full">
          <div className="h-[62px] relative shrink-0 w-[150px]" data-name="image 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[16px] top-[2px]" data-name="cloud-upload">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute bottom-1/4 left-[9.56%] right-[6.25%] top-[20.62%]" data-name="Path">
          <div className="absolute inset-[-8.62%_-5.57%]">
            <svg className="block size-full" fill="none" height="10.2" preserveAspectRatio="none" viewBox="0 0 14.9697 10.2" width="14.9697">
              <path d={svgPaths.p2a60d340} id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Path">
          <div className="absolute inset-[-37.5%_-18.75%]">
            <svg className="block size-full" fill="none" height="3.5" preserveAspectRatio="none" viewBox="0 0 5.5 3.5" width="5.5">
              <path d={svgPaths.p26da0740} id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-[47.92%] right-[47.92%] top-1/2" data-name="Path">
          <div className="absolute inset-[-12.5%_-62.5%]">
            <svg className="block size-full" fill="none" height="7.5" preserveAspectRatio="none" viewBox="0 0 1.5 7.5" width="1.5">
              <path d="M0.75 0.75V6.75" id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnOutlineDanger1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[20px] py-[8px] relative shrink-0" data-name="btn-outline-danger">
      <MaskedIcon1 />
      <p className="[word-break:break-word] capitalize font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#ff4c51] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tải Lên tài liệu
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Báo cáo tổng quan</p>
      </div>
    </div>
  );
}

function ChipBgDanger1() {
  return (
    <div className="bg-[#ff4c51] content-stretch flex gap-[4px] items-center justify-center min-w-[24px] px-[10px] py-[2px] relative rounded-[500px] shrink-0" data-name="chip bg-danger">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[1.4]">5</p>
      </div>
    </div>
  );
}

function ListSubheader4() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="ListSubheader">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">PHÂN HỆ LƯU TRỮ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSeparator4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader4 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Quản trị dữ liệu</p>
      </div>
    </div>
  );
}

function Applications4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[8px] relative shrink-0 w-[236px]" data-name="Applications">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="folders">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute inset-[16.67%_12.5%_29.17%_29.17%]" data-name="Path">
                <div className="absolute inset-[-6.92%_-6.43%]">
                  <svg className="block size-full" fill="none" height="12.3333" preserveAspectRatio="none" viewBox="0 0 13.1667 12.3333" width="13.1667">
                    <path d={svgPaths.pdf11640} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[33.33%_29.17%_12.5%_12.5%]" data-name="Path">
                <div className="absolute inset-[-6.92%_-6.43%]">
                  <svg className="block size-full" fill="none" height="12.3333" preserveAspectRatio="none" viewBox="0 0 13.1667 12.3333" width="13.1667">
                    <path d={svgPaths.p2ea8e080} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <Frame21 />
            <div className="relative shrink-0 size-[16px]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Path">
                <div className="absolute inset-[-9.38%_-18.75%]">
                  <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 5.5 9.5" width="5.5">
                    <path d={svgPaths.p2fd49480} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e64449] text-[14px] whitespace-nowrap">
              <p className="leading-[1.4]">Số hóa tài liệu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Tìm kiếm sản phẩm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Quản lý tờ trình</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Quản lý hợp đồng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhanHLuTr2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ lưu trữ">
      <SectionSeparator4 />
      <Applications4 />
    </div>
  );
}

function ListSubheader5() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="ListSubheader">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">PHÂN HỆ ĐẤU THẦU</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSeparator5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader5 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Quản trị gói thầu</p>
      </div>
    </div>
  );
}

function Applications5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[8px] relative shrink-0 w-[236px]" data-name="Applications">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Suitcase">
              <div className="absolute inset-[28.13%_12.5%_15.63%_12.5%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="11.25" preserveAspectRatio="none" viewBox="0 0 15 11.25" width="15">
                  <path d={svgPaths.p4c1b600} fill="#2F2B3D" fillOpacity="0.9" id="Union" opacity="0.2" />
                </svg>
              </div>
              <div className="absolute inset-[10.63%_7.5%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="15.75" preserveAspectRatio="none" viewBox="0 0 17 15.75" width="17">
                  <path d={svgPaths.p19ad2000} fill="#2F2B3D" fillOpacity="0.9" id="Union" />
                </svg>
              </div>
            </div>
            <Frame22 />
            <div className="relative shrink-0 size-[16px]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Path">
                <div className="absolute inset-[-9.38%_-18.75%]">
                  <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 5.5 9.5" width="5.5">
                    <path d={svgPaths.p2fd49480} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Danh mục gói thầu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Hồ sơ mời thầu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Đối soát dự thầu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhanHLuTr3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ lưu trữ">
      <SectionSeparator5 />
      <Applications5 />
    </div>
  );
}

function ListSubheader6() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="ListSubheader">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">{`PHÂN TÍCH & BÁO CÁO`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSeparator6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader6 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Báo cáo tổng hợp</p>
      </div>
    </div>
  );
}

function Applications6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-[236px]" data-name="Applications">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="report-analytics">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute inset-[20.83%_20.83%_12.5%_20.83%]" data-name="Path">
                <div className="absolute inset-[-5.63%_-6.43%]">
                  <svg className="block size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 13.1667 14.8333" width="13.1667">
                    <path d={svgPaths.p35273c80} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[12.5%_37.5%_70.83%_37.5%] rounded-[2px]" data-name="Rectangle">
                <div aria-hidden className="absolute border-[1.5px] border-[rgba(47,43,61,0.9)] border-solid inset-[-0.75px] pointer-events-none rounded-[2.75px]" />
              </div>
              <div className="absolute bottom-[29.17%] left-[35.42%] right-[60.42%] top-1/2" data-name="Path">
                <div className="absolute inset-[-18%_-40%]">
                  <svg className="block size-full" fill="none" height="5.66667" preserveAspectRatio="none" viewBox="0 0 1.5 5.66667" width="1.5">
                    <path d="M0.75 4.91667V0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[66.67%_47.92%_29.17%_47.92%]" data-name="Path">
                <div className="absolute inset-[-90%_-40%]">
                  <svg className="block size-full" fill="none" height="2.33333" preserveAspectRatio="none" viewBox="0 0 1.5 2.33333" width="1.5">
                    <path d="M0.75 1.58333V0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[58.33%_35.42%_29.17%_60.42%]" data-name="Path">
                <div className="absolute inset-[-30%_-40%]">
                  <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 1.5 4" width="1.5">
                    <path d="M0.75 3.25V0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <Frame23 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhanHDuThu2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ đấu thầu">
      <SectionSeparator6 />
      <Applications6 />
    </div>
  );
}

function ListSubheader7() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="ListSubheader">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">{`TÀI KHOẢN & CÀI ĐẶT`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSeparator7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader7 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">{`Tài khoản & Cài đặt`}</p>
      </div>
    </div>
  );
}

function Applications7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[8px] relative shrink-0 w-[236px]" data-name="Applications">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="user-circle">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute inset-[12.5%]" data-name="Oval">
                <div className="absolute inset-[-5%]">
                  <svg className="block size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                    <circle cx="8.25" cy="8.25" id="Oval" r="7.5" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Oval">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 6.5 6.5" width="6.5">
                    <circle cx="3.25" cy="3.25" id="Oval" r="2.5" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[66.67%_25.69%_21.44%_25.7%]" data-name="Path">
                <div className="absolute inset-[-31.52%_-7.72%_-31.53%_-7.72%]">
                  <svg className="block size-full" fill="none" height="3.87936" preserveAspectRatio="none" viewBox="0 0 11.2221 3.87936" width="11.2221">
                    <path d={svgPaths.p21b1de00} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <Frame24 />
            <div className="relative shrink-0 size-[16px]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Path">
                <div className="absolute inset-[-9.38%_-18.75%]">
                  <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 5.5 9.5" width="5.5">
                    <path d={svgPaths.p2fd49480} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Hồ sơ của tôi</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Bảo mật tài khoản</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhanHDuThu3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ đấu thầu">
      <SectionSeparator7 />
      <Applications7 />
    </div>
  );
}

function MenuDrawer1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative" data-name="Menu Drawer">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative size-full">
        <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center pt-[14px] relative size-full">
              <div className="flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Outline Button">
                <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                    <BtnOutlineDanger1 />
                  </div>
                </div>
                <div aria-hidden className="absolute border border-[#ff4c51] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[14px] px-[8px] relative size-full">
              <div className="relative shrink-0 size-[20px]" data-name="smart-home">
                <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                  <g id="Path" />
                </svg>
                <div className="absolute inset-[16.67%_16.54%_16.6%_16.79%]" data-name="Path">
                  <div className="absolute inset-[-5.62%_-5.63%]">
                    <svg className="block size-full" fill="none" height="14.8456" preserveAspectRatio="none" viewBox="0 0 14.8333 14.8456" width="14.8333">
                      <path d={svgPaths.p1b9cd808} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[62.5%_33.33%_33.33%_33.33%]" data-name="Path">
                  <div className="absolute inset-[-90%_-11.25%_-89.99%_-11.25%]">
                    <svg className="block size-full" fill="none" height="2.33324" preserveAspectRatio="none" viewBox="0 0 8.16689 2.33324" width="8.16689">
                      <path d={svgPaths.p1f02c980} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <Frame20 />
              <div className="min-w-[24px] relative shrink-0" data-name="Chip">
                <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] relative size-full">
                    <ChipBgDanger1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PhanHLuTr2 />
        <PhanHLuTr3 />
        <PhanHDuThu2 />
        <PhanHDuThu3 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px relative text-[rgba(47,43,61,0.9)] tracking-[0.25px]">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[22px] w-full">
        <p className="leading-[24px]">Nguyễn Văn A</p>
      </div>
      <div className="flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center not-italic relative shrink-0 text-[12px] w-full">
        <p className="leading-[24px]">Cán bộ Đầu tư</p>
      </div>
    </div>
  );
}

function Row16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-name="Row">
      <Avatar className="relative rounded-[500px] shrink-0 size-[40px]" />
      <Frame4 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Logo">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[22px] pr-[16px] py-[20px] relative size-full">
          <Row16 />
        </div>
      </div>
    </div>
  );
}

function Search3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Search">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-end leading-[0] min-w-px not-italic relative text-[18px] text-[rgba(47,43,61,0.9)]">
            <p>
              <span className="leading-[1.2] text-[rgba(47,43,61,0.7)]">Trang chủ</span>
              <span className="leading-[1.2]">{` \ Số hóa tài liệu`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <div className="relative shrink-0" data-name="search">
        <div className="content-stretch flex gap-[8px] items-start relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Path">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
          </div>
          <div className="absolute inset-[12.5%_29.17%_29.17%_12.5%]" data-name="Oval">
            <div className="absolute inset-[-5.36%]">
              <svg className="block size-full" fill="none" height="15.5" preserveAspectRatio="none" viewBox="0 0 15.5 15.5" width="15.5">
                <circle cx="7.75" cy="7.75" id="Oval" r="7" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[62.5%_12.5%_12.5%_62.5%]" data-name="Path">
            <div className="absolute inset-[-12.5%]">
              <svg className="block size-full" fill="none" height="7.5" preserveAspectRatio="none" viewBox="0 0 7.5 7.5" width="7.5">
                <path d="M6.75 6.75L0.75 0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnIconBtnPrimary1() {
  return (
    <div className="content-stretch flex items-center p-[7px] relative rounded-[500px] shrink-0" data-name="btn-icon btn-primary">
      <Icon8 />
    </div>
  );
}

function Search4() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center pl-[16px] relative rounded-[6px] shrink-0 w-[350px]" data-name="Search">
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.12)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="relative shrink-0" data-name="IconButton">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <BtnIconBtnPrimary1 />
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.4)]">Tìm kiếm</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute left-[23px] size-[7.5px] top-[9px]" data-name="Badge">
      <div className="absolute inset-[-20%]">
        <svg className="block size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
          <g id="Badge">
            <circle cx="5.25" cy="5.25" fill="#FF4C51" id="Ellipse" r="4.5" stroke="#F8F7FA" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function UnstyledIconButton1() {
  return (
    <div className="h-[38px] relative rounded-[48px] shrink-0 w-[54px]" data-name="UnstyledIconButton">
      <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="bell">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%_16.67%_29.17%_16.67%]" data-name="Path">
          <div className="absolute inset-[-5.36%_-4.69%]">
            <svg className="block size-full" fill="none" height="15.5" preserveAspectRatio="none" viewBox="0 0 17.5001 15.5" width="17.5001">
              <path d={svgPaths.p1f816900} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_37.5%_12.5%_37.5%]" data-name="Path">
          <div className="absolute inset-[-18.75%_-12.5%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 7.5 5.5" width="7.5">
              <path d={svgPaths.pab7b200} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Badge1 />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[48px]" data-name="IconButton">
      <UnstyledIconButton1 />
    </div>
  );
}

function Border1() {
  return (
    <div className="absolute bg-white inset-[70%_0_0_70%] rounded-[64px]" data-name="border">
      <div className="absolute inset-[16.67%_16.67%_16.66%_16.67%]" data-name="Badge">
        <svg className="absolute block inset-0 size-full" fill="none" height="7.6" preserveAspectRatio="none" viewBox="0 0 7.6 7.6" width="7.6">
          <circle cx="3.8" cy="3.8" fill="#28C76F" id="Badge" r="3.8" />
        </svg>
      </div>
    </div>
  );
}

function WBadge1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="wBadge">
      <div className="absolute inset-0 rounded-[500px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[500px] size-full" src={imgVariantCircleBadgeFalseIconFalseImageTrue} />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="relative size-full" />
        </div>
      </div>
      <Border1 />
    </div>
  );
}

function ActionButton1() {
  return (
    <div className="content-stretch flex items-center justify-end pr-[24px] relative shrink-0" data-name="Action Button">
      <IconButton1 />
      <div className="relative shrink-0 size-[38px]" data-name="Avatar">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <WBadge1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav">
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[24px] relative size-full">
        <div className="backdrop-blur-[10px] bg-white relative rounded-bl-[10px] rounded-br-[10px] shadow-[0px_4px_10px_-4px_rgba(47,43,61,0.24)] shrink-0 w-full" data-name="# Vertical Navbar Scroll">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center py-[12px] relative size-full">
              <Search3 />
              <Search4 />
              <ActionButton1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[809px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#393740] text-[24px] whitespace-nowrap">Chi tiết tài liệu</p>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Header">
      <div className="relative shrink-0 size-[32px]" data-name="arrow-left">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-6.25%_-4.02%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 20.1667 1.5" width="20.1667">
              <path d="M0.75 0.75H19.4167" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[20.83%] right-[54.17%] top-1/2" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M0.75 0.75L8.75 8.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[20.83%] right-[54.17%] top-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M0.75 8.75L8.75 0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function Header3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex items-start px-[24px] py-[8px] relative size-full">
        <Header4 />
      </div>
    </div>
  );
}

function PageLinkPrev1() {
  return (
    <div className="bg-[rgba(47,43,61,0.08)] content-stretch flex items-center justify-center p-[7px] relative rounded-[6px] shrink-0 size-[24px]" data-name="page-link prev">
      <div className="relative shrink-0 size-[16px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[16.73%_16.67%_54.17%_16.67%]" data-name="Shape">
          <div className="absolute inset-[-16.11%_-7.03%]">
            <svg className="block size-full" fill="none" height="6.15708" preserveAspectRatio="none" viewBox="0 0 12.1668 6.15708" width="12.1668">
              <path d={svgPaths.p2b327880} fill="#2F2B3D" fillOpacity="0.9" id="Shape" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[54.17%_16.67%_16.73%_16.67%]" data-name="Shape">
          <div className="absolute inset-[-16.11%_-7.03%]">
            <svg className="block size-full" fill="none" height="6.15708" preserveAspectRatio="none" viewBox="0 0 12.1668 6.15708" width="12.1668">
              <path d={svgPaths.p35d8680} fill="#2F2B3D" fillOpacity="0.9" id="Shape" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageLinkPrev2() {
  return (
    <div className="bg-[rgba(47,43,61,0.08)] content-stretch flex items-center justify-center p-[7px] relative rounded-[6px] shrink-0 size-[24px]" data-name="page-link prev">
      <div className="relative shrink-0 size-[16px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-62.5%_-8.04%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 10.8333 1.5" width="10.8333">
              <path d="M0.75 0.75H10.0833" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageLink2() {
  return (
    <div className="bg-[rgba(47,43,61,0.08)] content-stretch flex gap-[10px] h-[24px] items-center justify-center min-w-[30px] p-[6px] relative rounded-[6px] shrink-0 w-[73px]" data-name="page-link">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        100%
      </p>
      <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
          <div className="absolute inset-[-18.75%_-9.38%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 9.5 5.5" width="9.5">
              <path d={svgPaths.p14416700} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageLinkNext1() {
  return (
    <div className="bg-[rgba(47,43,61,0.08)] content-stretch flex items-center justify-center p-[7px] relative rounded-[6px] shrink-0 size-[24px]" data-name="page-link next">
      <Plus className="relative shrink-0 size-[16px]" />
    </div>
  );
}

function PaginationPaginationSm1() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-center relative shrink-0" data-name="pagination pagination-sm">
      <PageLinkPrev1 />
      <PageLinkPrev2 />
      <PageLink2 />
      <PageLinkNext1 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-center flex flex-wrap gap-y-[4px] items-center justify-end relative shrink-0" data-name="Pagination">
      <PaginationPaginationSm1 />
    </div>
  );
}

function ChipOutline() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[24px] px-[10px] py-[2px] relative rounded-[4px] shrink-0" data-name="chip-outline">
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[12px] text-[rgba(47,43,61,0.9)] text-center">
        <p className="leading-[1.4]">1</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <ChipOutline />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">/</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">12</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
          <div className="absolute inset-[-18.75%_-9.38%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 9.5 5.5" width="9.5">
              <path d={svgPaths.p14416700} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="scan">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[16.67%_66.67%_70.83%_16.67%]" data-name="Path">
          <div className="absolute inset-[-37.5%_-28.13%_-37.5%_-28.12%]">
            <svg className="block size-full" fill="none" height="3.5" preserveAspectRatio="none" viewBox="0 0 4.16667 3.5" width="4.16667">
              <path d={svgPaths.pf49c8c0} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_66.67%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-37.5%_-28.13%_-37.5%_-28.12%]">
            <svg className="block size-full" fill="none" height="3.5" preserveAspectRatio="none" viewBox="0 0 4.16667 3.5" width="4.16667">
              <path d={svgPaths.p238ccaa0} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_16.67%_70.83%_66.67%]" data-name="Path">
          <div className="absolute inset-[-37.5%_-28.13%_-37.5%_-28.12%]">
            <svg className="block size-full" fill="none" height="3.5" preserveAspectRatio="none" viewBox="0 0 4.16667 3.5" width="4.16667">
              <path d={svgPaths.p2fcdda40} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_16.67%_16.67%_66.67%]" data-name="Path">
          <div className="absolute inset-[-37.5%_-28.13%_-37.5%_-28.12%]">
            <svg className="block size-full" fill="none" height="3.5" preserveAspectRatio="none" viewBox="0 0 4.16667 3.5" width="4.16667">
              <path d={svgPaths.pedc090} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-62.5%_-8.04%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 10.8333 1.5" width="10.8333">
              <path d="M0.75 0.75H10.0833" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full">
      <Pagination />
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[6px] w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[24px] relative size-full">
          <Frame44 />
          <div className="h-[1146px] relative shrink-0 w-[919px]" data-name="image 7">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTable1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative w-full" data-name="Data Table">
      <Frame14 />
    </div>
  );
}

function Table() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Table">
      <div className="content-stretch flex flex-col gap-[16px] items-start py-[24px] relative size-full">
        <Header3 />
        <DataTable1 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_9px_rgba(75,70,92,0.1)] flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-[6px] w-full" data-name="Card">
      <Table />
    </div>
  );
}

function Body1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Body">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Card5 />
      </div>
    </div>
  );
}

function Search5() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Search">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.7)] text-center">LoogIX © 2026</p>
        </div>
      </div>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Wrapper">
      <Nav1 />
      <Body1 />
      <div className="drop-shadow-[0px_-4px_5px_rgba(47,43,61,0.24)] relative shrink-0 w-full" data-name="# Footer">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center py-[16px] relative size-full">
            <Search5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function AutoLayoutFrame1() {
  return (
    <div className="content-stretch flex h-[1490px] items-start justify-between relative shrink-0 w-[1440px]" data-name="Auto-layout Frame">
      <div className="drop-shadow-[0px_2px_4px_rgba(47,43,61,0.12)] h-[1490px] relative shrink-0" data-name="Menu - side bar">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <Logo2 />
            <MenuDrawer1 />
            <Logo3 />
          </div>
        </div>
      </div>
      <Wrapper1 />
    </div>
  );
}

function PhongToTaiLiu() {
  return (
    <div className="absolute bg-[#f8f7fa] content-stretch flex flex-col h-[1490px] items-center left-[3987px] min-h-[820px] overflow-clip top-[51px] w-[1440px]" data-name="Phóng to tài liệu">
      <AutoLayoutFrame1 />
    </div>
  );
}

function Thumb() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#c1c1c1] content-stretch flex flex-col h-[54px] items-start left-[calc(50%+0.5px)] rounded-[4px] top-px w-[8px]" data-name="Thumb">
      <div className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#c1c1c1] text-[4px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">​</p>
      </div>
    </div>
  );
}

function Scrollbar1() {
  return (
    <div className="absolute h-[1172px] left-[5297px] rounded-br-[8px] rounded-tr-[8px] top-[293px] w-[15px]" data-name="Scrollbar">
      <div aria-hidden className="absolute bg-[#fafafa] inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <Thumb />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_0px_0px_0px_#e8e8e8]" />
    </div>
  );
}

function Logo4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Logo">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[22px] pr-[16px] py-[20px] relative size-full">
          <div className="h-[62px] relative shrink-0 w-[150px]" data-name="image 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[16px] top-[2px]" data-name="cloud-upload">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute bottom-1/4 left-[9.56%] right-[6.25%] top-[20.62%]" data-name="Path">
          <div className="absolute inset-[-8.62%_-5.57%]">
            <svg className="block size-full" fill="none" height="10.2" preserveAspectRatio="none" viewBox="0 0 14.9697 10.2" width="14.9697">
              <path d={svgPaths.p2a60d340} id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Path">
          <div className="absolute inset-[-37.5%_-18.75%]">
            <svg className="block size-full" fill="none" height="3.5" preserveAspectRatio="none" viewBox="0 0 5.5 3.5" width="5.5">
              <path d={svgPaths.p26da0740} id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-[47.92%] right-[47.92%] top-1/2" data-name="Path">
          <div className="absolute inset-[-12.5%_-62.5%]">
            <svg className="block size-full" fill="none" height="7.5" preserveAspectRatio="none" viewBox="0 0 1.5 7.5" width="1.5">
              <path d="M0.75 0.75V6.75" id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnOutlineDanger2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[20px] py-[8px] relative shrink-0" data-name="btn-outline-danger">
      <MaskedIcon2 />
      <p className="[word-break:break-word] capitalize font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#ff4c51] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tải Lên tài liệu
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Báo cáo tổng quan</p>
      </div>
    </div>
  );
}

function ChipBgDanger2() {
  return (
    <div className="bg-[#ff4c51] content-stretch flex gap-[4px] items-center justify-center min-w-[24px] px-[10px] py-[2px] relative rounded-[500px] shrink-0" data-name="chip bg-danger">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[1.4]">5</p>
      </div>
    </div>
  );
}

function ListSubheader8() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="ListSubheader">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">PHÂN HỆ LƯU TRỮ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSeparator8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader8 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Quản trị dữ liệu</p>
      </div>
    </div>
  );
}

function Applications8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[8px] relative shrink-0 w-[236px]" data-name="Applications">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="folders">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute inset-[16.67%_12.5%_29.17%_29.17%]" data-name="Path">
                <div className="absolute inset-[-6.92%_-6.43%]">
                  <svg className="block size-full" fill="none" height="12.3333" preserveAspectRatio="none" viewBox="0 0 13.1667 12.3333" width="13.1667">
                    <path d={svgPaths.pdf11640} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[33.33%_29.17%_12.5%_12.5%]" data-name="Path">
                <div className="absolute inset-[-6.92%_-6.43%]">
                  <svg className="block size-full" fill="none" height="12.3333" preserveAspectRatio="none" viewBox="0 0 13.1667 12.3333" width="13.1667">
                    <path d={svgPaths.p2ea8e080} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <Frame26 />
            <div className="relative shrink-0 size-[16px]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Path">
                <div className="absolute inset-[-9.38%_-18.75%]">
                  <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 5.5 9.5" width="5.5">
                    <path d={svgPaths.p2fd49480} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e64449] text-[14px] whitespace-nowrap">
              <p className="leading-[1.4]">Số hóa tài liệu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Tìm kiếm sản phẩm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Quản lý tờ trình</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Quản lý hợp đồng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhanHLuTr4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ lưu trữ">
      <SectionSeparator8 />
      <Applications8 />
    </div>
  );
}

function ListSubheader9() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="ListSubheader">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">PHÂN HỆ ĐẤU THẦU</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSeparator9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader9 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Quản trị gói thầu</p>
      </div>
    </div>
  );
}

function Applications9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[8px] relative shrink-0 w-[236px]" data-name="Applications">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Suitcase">
              <div className="absolute inset-[28.13%_12.5%_15.63%_12.5%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="11.25" preserveAspectRatio="none" viewBox="0 0 15 11.25" width="15">
                  <path d={svgPaths.p4c1b600} fill="#2F2B3D" fillOpacity="0.9" id="Union" opacity="0.2" />
                </svg>
              </div>
              <div className="absolute inset-[10.63%_7.5%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="15.75" preserveAspectRatio="none" viewBox="0 0 17 15.75" width="17">
                  <path d={svgPaths.p19ad2000} fill="#2F2B3D" fillOpacity="0.9" id="Union" />
                </svg>
              </div>
            </div>
            <Frame27 />
            <div className="relative shrink-0 size-[16px]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Path">
                <div className="absolute inset-[-9.38%_-18.75%]">
                  <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 5.5 9.5" width="5.5">
                    <path d={svgPaths.p2fd49480} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Danh mục gói thầu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Hồ sơ mời thầu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Đối soát dự thầu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhanHLuTr5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ lưu trữ">
      <SectionSeparator9 />
      <Applications9 />
    </div>
  );
}

function ListSubheader10() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="ListSubheader">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">{`PHÂN TÍCH & BÁO CÁO`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSeparator10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader10 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Báo cáo tổng hợp</p>
      </div>
    </div>
  );
}

function Applications10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-[236px]" data-name="Applications">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="report-analytics">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute inset-[20.83%_20.83%_12.5%_20.83%]" data-name="Path">
                <div className="absolute inset-[-5.63%_-6.43%]">
                  <svg className="block size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 13.1667 14.8333" width="13.1667">
                    <path d={svgPaths.p35273c80} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[12.5%_37.5%_70.83%_37.5%] rounded-[2px]" data-name="Rectangle">
                <div aria-hidden className="absolute border-[1.5px] border-[rgba(47,43,61,0.9)] border-solid inset-[-0.75px] pointer-events-none rounded-[2.75px]" />
              </div>
              <div className="absolute bottom-[29.17%] left-[35.42%] right-[60.42%] top-1/2" data-name="Path">
                <div className="absolute inset-[-18%_-40%]">
                  <svg className="block size-full" fill="none" height="5.66667" preserveAspectRatio="none" viewBox="0 0 1.5 5.66667" width="1.5">
                    <path d="M0.75 4.91667V0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[66.67%_47.92%_29.17%_47.92%]" data-name="Path">
                <div className="absolute inset-[-90%_-40%]">
                  <svg className="block size-full" fill="none" height="2.33333" preserveAspectRatio="none" viewBox="0 0 1.5 2.33333" width="1.5">
                    <path d="M0.75 1.58333V0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[58.33%_35.42%_29.17%_60.42%]" data-name="Path">
                <div className="absolute inset-[-30%_-40%]">
                  <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 1.5 4" width="1.5">
                    <path d="M0.75 3.25V0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <Frame28 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhanHDuThu4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ đấu thầu">
      <SectionSeparator10 />
      <Applications10 />
    </div>
  );
}

function ListSubheader11() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="ListSubheader">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">{`TÀI KHOẢN & CÀI ĐẶT`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSeparator11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader11 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">{`Tài khoản & Cài đặt`}</p>
      </div>
    </div>
  );
}

function Applications11() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[8px] relative shrink-0 w-[236px]" data-name="Applications">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="user-circle">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute inset-[12.5%]" data-name="Oval">
                <div className="absolute inset-[-5%]">
                  <svg className="block size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                    <circle cx="8.25" cy="8.25" id="Oval" r="7.5" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Oval">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 6.5 6.5" width="6.5">
                    <circle cx="3.25" cy="3.25" id="Oval" r="2.5" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[66.67%_25.69%_21.44%_25.7%]" data-name="Path">
                <div className="absolute inset-[-31.52%_-7.72%_-31.53%_-7.72%]">
                  <svg className="block size-full" fill="none" height="3.87936" preserveAspectRatio="none" viewBox="0 0 11.2221 3.87936" width="11.2221">
                    <path d={svgPaths.p21b1de00} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <Frame30 />
            <div className="relative shrink-0 size-[16px]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Path">
                <div className="absolute inset-[-9.38%_-18.75%]">
                  <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 5.5 9.5" width="5.5">
                    <path d={svgPaths.p2fd49480} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Hồ sơ của tôi</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
              <p className="leading-[1.4]">Bảo mật tài khoản</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhanHDuThu5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ đấu thầu">
      <SectionSeparator11 />
      <Applications11 />
    </div>
  );
}

function MenuDrawer2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative" data-name="Menu Drawer">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative size-full">
        <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center pt-[14px] relative size-full">
              <div className="flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Outline Button">
                <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                    <BtnOutlineDanger2 />
                  </div>
                </div>
                <div aria-hidden className="absolute border border-[#ff4c51] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[14px] px-[8px] relative size-full">
              <div className="relative shrink-0 size-[20px]" data-name="smart-home">
                <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                  <g id="Path" />
                </svg>
                <div className="absolute inset-[16.67%_16.54%_16.6%_16.79%]" data-name="Path">
                  <div className="absolute inset-[-5.62%_-5.63%]">
                    <svg className="block size-full" fill="none" height="14.8456" preserveAspectRatio="none" viewBox="0 0 14.8333 14.8456" width="14.8333">
                      <path d={svgPaths.p1b9cd808} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[62.5%_33.33%_33.33%_33.33%]" data-name="Path">
                  <div className="absolute inset-[-90%_-11.25%_-89.99%_-11.25%]">
                    <svg className="block size-full" fill="none" height="2.33324" preserveAspectRatio="none" viewBox="0 0 8.16689 2.33324" width="8.16689">
                      <path d={svgPaths.p1f02c980} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <Frame25 />
              <div className="min-w-[24px] relative shrink-0" data-name="Chip">
                <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] relative size-full">
                    <ChipBgDanger2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PhanHLuTr4 />
        <PhanHLuTr5 />
        <PhanHDuThu4 />
        <PhanHDuThu5 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px relative text-[rgba(47,43,61,0.9)] tracking-[0.25px]">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[22px] w-full">
        <p className="leading-[24px]">Nguyễn Văn A</p>
      </div>
      <div className="flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center not-italic relative shrink-0 text-[12px] w-full">
        <p className="leading-[24px]">Cán bộ Đầu tư</p>
      </div>
    </div>
  );
}

function Row17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-name="Row">
      <Avatar className="relative rounded-[500px] shrink-0 size-[40px]" />
      <Frame6 />
    </div>
  );
}

function Logo5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Logo">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[22px] pr-[16px] py-[20px] relative size-full">
          <Row17 />
        </div>
      </div>
    </div>
  );
}

function Search6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Search">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-end leading-[0] min-w-px not-italic relative text-[18px] text-[rgba(47,43,61,0.9)]">
            <p>
              <span className="leading-[1.2] text-[rgba(47,43,61,0.7)]">Trang chủ</span>
              <span className="leading-[1.2]">{` \ Số hóa tài liệu`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <div className="relative shrink-0" data-name="search">
        <div className="content-stretch flex gap-[8px] items-start relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Path">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
          </div>
          <div className="absolute inset-[12.5%_29.17%_29.17%_12.5%]" data-name="Oval">
            <div className="absolute inset-[-5.36%]">
              <svg className="block size-full" fill="none" height="15.5" preserveAspectRatio="none" viewBox="0 0 15.5 15.5" width="15.5">
                <circle cx="7.75" cy="7.75" id="Oval" r="7" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[62.5%_12.5%_12.5%_62.5%]" data-name="Path">
            <div className="absolute inset-[-12.5%]">
              <svg className="block size-full" fill="none" height="7.5" preserveAspectRatio="none" viewBox="0 0 7.5 7.5" width="7.5">
                <path d="M6.75 6.75L0.75 0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnIconBtnPrimary2() {
  return (
    <div className="content-stretch flex items-center p-[7px] relative rounded-[500px] shrink-0" data-name="btn-icon btn-primary">
      <Icon9 />
    </div>
  );
}

function Search7() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center pl-[16px] relative rounded-[6px] shrink-0 w-[350px]" data-name="Search">
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.12)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="relative shrink-0" data-name="IconButton">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <BtnIconBtnPrimary2 />
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.4)]">Tìm kiếm</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute left-[23px] size-[7.5px] top-[9px]" data-name="Badge">
      <div className="absolute inset-[-20%]">
        <svg className="block size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
          <g id="Badge">
            <circle cx="5.25" cy="5.25" fill="#FF4C51" id="Ellipse" r="4.5" stroke="#F8F7FA" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function UnstyledIconButton2() {
  return (
    <div className="h-[38px] relative rounded-[48px] shrink-0 w-[54px]" data-name="UnstyledIconButton">
      <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="bell">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%_16.67%_29.17%_16.67%]" data-name="Path">
          <div className="absolute inset-[-5.36%_-4.69%]">
            <svg className="block size-full" fill="none" height="15.5" preserveAspectRatio="none" viewBox="0 0 17.5001 15.5" width="17.5001">
              <path d={svgPaths.p1f816900} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_37.5%_12.5%_37.5%]" data-name="Path">
          <div className="absolute inset-[-18.75%_-12.5%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 7.5 5.5" width="7.5">
              <path d={svgPaths.pab7b200} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Badge2 />
    </div>
  );
}

function IconButton2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[48px]" data-name="IconButton">
      <UnstyledIconButton2 />
    </div>
  );
}

function Border2() {
  return (
    <div className="absolute bg-white inset-[70%_0_0_70%] rounded-[64px]" data-name="border">
      <div className="absolute inset-[16.67%_16.67%_16.66%_16.67%]" data-name="Badge">
        <svg className="absolute block inset-0 size-full" fill="none" height="7.6" preserveAspectRatio="none" viewBox="0 0 7.6 7.6" width="7.6">
          <circle cx="3.8" cy="3.8" fill="#28C76F" id="Badge" r="3.8" />
        </svg>
      </div>
    </div>
  );
}

function WBadge2() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="wBadge">
      <div className="absolute inset-0 rounded-[500px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[500px] size-full" src={imgVariantCircleBadgeFalseIconFalseImageTrue} />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="relative size-full" />
        </div>
      </div>
      <Border2 />
    </div>
  );
}

function ActionButton2() {
  return (
    <div className="content-stretch flex items-center justify-end pr-[24px] relative shrink-0" data-name="Action Button">
      <IconButton2 />
      <div className="relative shrink-0 size-[38px]" data-name="Avatar">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <WBadge2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav">
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[24px] relative size-full">
        <div className="backdrop-blur-[10px] bg-white relative rounded-bl-[10px] rounded-br-[10px] shadow-[0px_4px_10px_-4px_rgba(47,43,61,0.24)] shrink-0 w-full" data-name="# Vertical Navbar Scroll">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center py-[12px] relative size-full">
              <Search6 />
              <Search7 />
              <ActionButton2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[809px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#393740] text-[24px] whitespace-nowrap">Chi tiết số hóa tài liệu</p>
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Header">
      <div className="relative shrink-0 size-[32px]" data-name="arrow-left">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-6.25%_-4.02%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 20.1667 1.5" width="20.1667">
              <path d="M0.75 0.75H19.4167" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[20.83%] right-[54.17%] top-1/2" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M0.75 0.75L8.75 8.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[20.83%] right-[54.17%] top-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M0.75 8.75L8.75 0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Header5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex items-start px-[24px] py-[8px] relative size-full">
        <Header6 />
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[4px]">
      <div className="content-stretch flex items-start p-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
          <p className="leading-[1.4]">Đang xem: TT-2025-041_scan.pdf</p>
        </div>
      </div>
    </div>
  );
}

function Th() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative self-stretch shrink-0 w-[30px]" data-name="th">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="CheckCircle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <g id="Vector">
              <path d={svgPaths.p2c6a7600} fill="#28C76F" />
              <path d={svgPaths.p2c6a7600} fill="#28C76F" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[4px]">
      <div className="content-stretch flex gap-[8px] items-start p-[8px] relative size-full">
        <Th />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
          <p>
            <span className="leading-[1.4]">{`Đã xác nhận `}</span>
            <span className="leading-[1.4] text-[#24b364]">8</span>
            <span className="leading-[1.4]">/10 trường</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Th1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative self-stretch shrink-0 w-[30px]" data-name="th">
      <div className="relative shrink-0 size-[24px]" data-name="alert-triangle">
        <div className="absolute bottom-[50.91%] left-1/2 right-1/2 top-[33.33%]" data-name="Shape">
          <div className="absolute inset-[-19.83%_-0.75px]">
            <svg className="block size-full" fill="none" height="5.28156" preserveAspectRatio="none" viewBox="0 0 1.5 5.28156" width="1.5">
              <path d="M0.75 0.75V4.53156" id="Shape" stroke="#FF9F43" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[35.06%] left-1/2 right-1/2 top-[64.75%]" data-name="Shape">
          <div className="absolute inset-[-1578%_-0.75px]">
            <svg className="block size-full" fill="none" height="1.54753" preserveAspectRatio="none" viewBox="0 0 1.5 1.54753" width="1.5">
              <path d="M0.75 0.75V0.797529" id="Shape" stroke="#FF9F43" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.37%_12.56%_20.83%_12.47%]" data-name="Path">
          <div className="absolute inset-[-4.68%_-4.17%]">
            <svg className="block size-full" fill="none" height="17.5318" preserveAspectRatio="none" viewBox="0 0 19.493 17.5318" width="19.493">
              <path d={svgPaths.p202bbdd0} id="Path" stroke="#FF9F43" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[4px] shrink-0 w-[302px]">
      <Th1 />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Còn 2 trường cảnh báo độ tin cậy thấp</p>
      </div>
    </div>
  );
}

function BtnOutlineSecondaryBtnSm() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[14px] py-[6px] relative shrink-0" data-name="btn-outline-secondary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">Lưu tạm</p>
    </div>
  );
}

function BtnDangerBtnSm1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[14px] py-[6px] relative shrink-0" data-name="btn-danger btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Xác nhận và lưu</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center justify-end min-w-px relative" data-name="Frame">
        <div className="relative rounded-[4px] shrink-0" data-name="Outline Button">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center relative size-full">
              <BtnOutlineSecondaryBtnSm />
            </div>
          </div>
          <div aria-hidden className="absolute border border-[rgba(47,43,61,0.4)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="bg-[#ff4c51] relative rounded-[4px] shadow-[0px_2px_6px_0px_rgba(255,76,81,0.3)] shrink-0" data-name="Default Button">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center relative size-full">
              <BtnDangerBtnSm1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[8px] relative shrink-0 w-full" data-name="Table Header">
      <Frame51 />
      <Frame52 />
      <Frame53 />
      <Frame8 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[541px]">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard:Medium',sans-serif] h-[30px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(47,43,61,0.9)] w-[67px]">
        <p className="leading-[1.2]">Bản gốc</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame47 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="content-stretch flex h-[22px] items-center relative shrink-0 w-full" data-name="Table Header">
      <Frame31 />
    </div>
  );
}

function PageLinkPrev3() {
  return (
    <div className="bg-[rgba(47,43,61,0.08)] content-stretch flex items-center justify-center p-[7px] relative rounded-[6px] shrink-0 size-[24px]" data-name="page-link prev">
      <div className="relative shrink-0 size-[16px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[16.73%_16.67%_54.17%_16.67%]" data-name="Shape">
          <div className="absolute inset-[-16.11%_-7.03%]">
            <svg className="block size-full" fill="none" height="6.15708" preserveAspectRatio="none" viewBox="0 0 12.1668 6.15708" width="12.1668">
              <path d={svgPaths.p2b327880} fill="#2F2B3D" fillOpacity="0.9" id="Shape" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[54.17%_16.67%_16.73%_16.67%]" data-name="Shape">
          <div className="absolute inset-[-16.11%_-7.03%]">
            <svg className="block size-full" fill="none" height="6.15708" preserveAspectRatio="none" viewBox="0 0 12.1668 6.15708" width="12.1668">
              <path d={svgPaths.p35d8680} fill="#2F2B3D" fillOpacity="0.9" id="Shape" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageLinkPrev4() {
  return (
    <div className="bg-[rgba(47,43,61,0.08)] content-stretch flex items-center justify-center p-[7px] relative rounded-[6px] shrink-0 size-[24px]" data-name="page-link prev">
      <div className="relative shrink-0 size-[16px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-62.5%_-8.04%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 10.8333 1.5" width="10.8333">
              <path d="M0.75 0.75H10.0833" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageLink3() {
  return (
    <div className="bg-[rgba(47,43,61,0.08)] content-stretch flex gap-[10px] h-[24px] items-center justify-center min-w-[30px] p-[6px] relative rounded-[6px] shrink-0 w-[73px]" data-name="page-link">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        100%
      </p>
      <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
          <div className="absolute inset-[-18.75%_-9.38%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 9.5 5.5" width="9.5">
              <path d={svgPaths.p14416700} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageLinkNext2() {
  return (
    <div className="bg-[rgba(47,43,61,0.08)] content-stretch flex items-center justify-center p-[7px] relative rounded-[6px] shrink-0 size-[24px]" data-name="page-link next">
      <Plus className="relative shrink-0 size-[16px]" />
    </div>
  );
}

function PaginationPaginationSm2() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-center relative shrink-0" data-name="pagination pagination-sm">
      <PageLinkPrev3 />
      <PageLinkPrev4 />
      <PageLink3 />
      <PageLinkNext2 />
    </div>
  );
}

function Pagination1() {
  return (
    <div className="content-center flex flex-wrap gap-y-[4px] items-center justify-end relative shrink-0" data-name="Pagination">
      <PaginationPaginationSm2 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="scan">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[16.67%_66.67%_70.83%_16.67%]" data-name="Path">
          <div className="absolute inset-[-37.5%_-28.13%_-37.5%_-28.12%]">
            <svg className="block size-full" fill="none" height="3.5" preserveAspectRatio="none" viewBox="0 0 4.16667 3.5" width="4.16667">
              <path d={svgPaths.pf49c8c0} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_66.67%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-37.5%_-28.13%_-37.5%_-28.12%]">
            <svg className="block size-full" fill="none" height="3.5" preserveAspectRatio="none" viewBox="0 0 4.16667 3.5" width="4.16667">
              <path d={svgPaths.p238ccaa0} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_16.67%_70.83%_66.67%]" data-name="Path">
          <div className="absolute inset-[-37.5%_-28.13%_-37.5%_-28.12%]">
            <svg className="block size-full" fill="none" height="3.5" preserveAspectRatio="none" viewBox="0 0 4.16667 3.5" width="4.16667">
              <path d={svgPaths.p2fcdda40} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_16.67%_16.67%_66.67%]" data-name="Path">
          <div className="absolute inset-[-37.5%_-28.13%_-37.5%_-28.12%]">
            <svg className="block size-full" fill="none" height="3.5" preserveAspectRatio="none" viewBox="0 0 4.16667 3.5" width="4.16667">
              <path d={svgPaths.pedc090} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-62.5%_-8.04%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 10.8333 1.5" width="10.8333">
              <path d="M0.75 0.75H10.0833" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="download">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[70.83%_16.67%_12.5%_16.67%]" data-name="Path">
          <div className="absolute inset-[-28.12%_-7.03%_-28.13%_-7.03%]">
            <svg className="block size-full" fill="none" height="4.16667" preserveAspectRatio="none" viewBox="0 0 12.1667 4.16667" width="12.1667">
              <path d={svgPaths.p3b07adc0} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_29.17%_33.33%_29.17%]" data-name="Path">
          <div className="absolute inset-[-22.5%_-11.25%]">
            <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 8.16667 4.83333" width="8.16667">
              <path d={svgPaths.p3ad9ab98} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_47.92%_33.33%_47.92%]" data-name="Path">
          <div className="absolute inset-[-9.38%_-62.5%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 1.5 9.5" width="1.5">
              <path d="M0.75 0.75V8.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pagination1 />
      <Frame49 />
    </div>
  );
}

function PageLinkPrev5() {
  return (
    <div className="absolute bg-[rgba(47,43,61,0.08)] content-stretch flex items-center justify-center left-[494px] p-[7px] rounded-[6px] top-[4px]" data-name="page-link prev">
      <div className="relative shrink-0 size-[16px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[16.67%_16.67%_66.67%_66.67%]" data-name="Path">
          <div className="absolute inset-[-28.12%_-28.13%_-28.13%_-28.12%]">
            <svg className="block size-full" fill="none" height="4.16667" preserveAspectRatio="none" viewBox="0 0 4.16667 4.16667" width="4.16667">
              <path d="M0.75 0.75H3.41667V3.41667" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_16.67%_58.33%_58.33%]" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 4.75L4.75 0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_66.67%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-28.12%_-28.13%_-28.13%_-28.12%]">
            <svg className="block size-full" fill="none" height="4.16667" preserveAspectRatio="none" viewBox="0 0 4.16667 4.16667" width="4.16667">
              <path d="M3.41667 3.41667H0.75V0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_58.33%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 4.75L4.75 0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_16.67%_16.67%_66.67%]" data-name="Path">
          <div className="absolute inset-[-28.12%_-28.13%_-28.13%_-28.12%]">
            <svg className="block size-full" fill="none" height="4.16667" preserveAspectRatio="none" viewBox="0 0 4.16667 4.16667" width="4.16667">
              <path d="M0.75 3.41667H3.41667V0.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_16.67%_16.67%_58.33%]" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 0.75L4.75 4.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_66.67%_66.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-28.12%_-28.13%_-28.13%_-28.12%]">
            <svg className="block size-full" fill="none" height="4.16667" preserveAspectRatio="none" viewBox="0 0 4.16667 4.16667" width="4.16667">
              <path d="M3.41667 0.75H0.75V3.41667" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_58.33%_58.33%_16.67%]" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 0.75L4.75 4.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Times_New_Roman:Bold',sans-serif] gap-[8px] items-start not-italic relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] text-center tracking-[0.15px] w-full">
      <p className="leading-[normal] relative shrink-0 w-[188px]">CÔNG TY TNHH MTV AN NINH MẠNG VIETTEL</p>
      <div className="flex-[1_0_0] leading-[0] min-w-px relative">
        <p className="leading-[normal] mb-0">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
        <p className="leading-[normal]">Độc lập - Tự do - Hạnh phúc</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] tracking-[0.25px] w-full">
      <p className="font-['Times_New_Roman:Regular',sans-serif] relative shrink-0 text-center w-[118px]">Số: TT-2025-041</p>
      <p className="flex-[1_0_0] font-['Times_New_Roman:Italic',sans-serif] min-w-px relative text-right">Hà Nội, ngày 18 tháng 04 năm 2025</p>
    </div>
  );
}

function Row18() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[0.5px] border-black border-solid inset-[-0.25px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[10px] py-[4px] relative size-full">
          <div className="h-[32px] relative shrink-0 w-[35px]" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] capitalize font-['Times_New_Roman:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">STT</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] capitalize flex-[1_0_0] font-['Times_New_Roman:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[12px] text-[rgba(47,43,61,0.9)] text-center">Tên hàng hóa</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] capitalize flex-[1_0_0] font-['Times_New_Roman:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[12px] text-[rgba(47,43,61,0.9)] text-center">mã hàng</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] capitalize flex-[1_0_0] font-['Times_New_Roman:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[12px] text-[rgba(47,43,61,0.9)] text-center">Số lượng</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] capitalize flex-[1_0_0] font-['Times_New_Roman:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[12px] text-[rgba(47,43,61,0.9)] text-center">Đơn giá (VND)</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] capitalize flex-[1_0_0] font-['Times_New_Roman:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[12px] text-[rgba(47,43,61,0.9)] text-center">Thành tiền (VND)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[0.5px] border-black border-solid inset-[-0.25px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[10px] py-[4px] relative size-full">
          <div className="h-[32px] relative shrink-0 w-[35px]" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] capitalize flex-[1_0_0] font-['Times_New_Roman:Bold',sans-serif] leading-[1.4] min-w-px not-italic overflow-hidden relative text-[12px] text-[rgba(47,43,61,0.9)] text-center text-ellipsis whitespace-nowrap">1</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative rounded-[4px]" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] capitalize flex-[1_0_0] font-['Times_New_Roman:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[10px] text-[rgba(47,43,61,0.9)] text-center">Máy in laser HP M712dn</p>
              </div>
            </div>
          </div>
          <div className="bg-[#ffecd9] flex-[1_0_0] h-[32px] min-w-px relative rounded-[4px]" data-name="Data Cell">
            <div aria-hidden className="absolute border border-[#ff9f43] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] capitalize flex-[1_0_0] font-['Times_New_Roman:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[10px] text-[rgba(47,43,61,0.9)] text-center">HP-M712DN</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] capitalize flex-[1_0_0] font-['Times_New_Roman:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[10px] text-[rgba(47,43,61,0.9)] text-center">2</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative rounded-[4px]" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] capitalize flex-[1_0_0] font-['Times_New_Roman:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[10px] text-[rgba(47,43,61,0.9)] text-center">86.000.000</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] capitalize flex-[1_0_0] font-['Times_New_Roman:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[10px] text-[rgba(47,43,61,0.9)] text-center">172.000.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[0.5px] border-black border-solid inset-[-0.25px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[10px] py-[4px] relative size-full">
          <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] capitalize flex-[1_0_0] font-['Times_New_Roman:Bold',sans-serif] leading-[1.4] min-w-px not-italic overflow-hidden relative text-[12px] text-[rgba(47,43,61,0.9)] text-center text-ellipsis whitespace-nowrap">Tổng cộng</p>
              </div>
            </div>
          </div>
          <div className="h-[32px] relative shrink-0 w-[82.6px]" data-name="Data Cell">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[2px] relative size-full">
                <p className="[word-break:break-word] capitalize flex-[1_0_0] font-['Times_New_Roman:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[10px] text-[rgba(47,43,61,0.9)] text-center">172.000.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTable3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Data Table">
      <div aria-hidden className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none" />
      <Row18 />
      <Row19 />
      <Row20 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[12px] items-start not-italic relative shrink-0 text-[10px] text-[rgba(47,43,61,0.9)] tracking-[0.25px] w-full">
      <p className="flex-[1_0_0] font-['Times_New_Roman:Regular',sans-serif] leading-[normal] min-w-px relative">Đề nghị Ban Giám đốc xem xét phê duyệt.</p>
      <div className="font-['Times_New_Roman:Bold',sans-serif] leading-[0] relative shrink-0 text-center whitespace-nowrap">
        <p className="leading-[normal] mb-0 whitespace-pre">NGƯỜI LẬP TỜ TRÌNH</p>
        <p className="font-['Times_New_Roman:Italic',sans-serif] leading-[normal] mb-0 whitespace-pre">(Ký, ghi rõ họ tên)</p>
        <p className="leading-[normal] mb-0 whitespace-pre">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre">​</p>
        <p className="leading-[normal] whitespace-pre">Nguyễn Văn A</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[416px] items-start left-[8px] pt-[18px] px-[8px] top-[34px] w-[516px]">
      <Frame60 />
      <Frame61 />
      <div className="[word-break:break-word] font-['Times_New_Roman:Bold',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-[rgba(47,43,61,0.9)] text-center tracking-[1px] w-[min-content]">
        <p className="leading-[normal] mb-0 text-[16px]">TỜ TRÌNH</p>
        <p className="leading-[normal] text-[12px] tracking-[0.25px]">V/v: Đề nghị mua sắm thiết bị</p>
      </div>
      <p className="[word-break:break-word] font-['Times_New_Roman:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[10px] text-[rgba(47,43,61,0.9)] text-center tracking-[0.3px] w-[min-content]">
        <span className="font-['Times_New_Roman:Bold',sans-serif] leading-[normal]">Kính gửi:</span>
        <span className="leading-[normal]">{` Ban Giám đốc Công ty TNHH MTV An ninh mạng Viettel.`}</span>
      </p>
      <p className="[word-break:break-word] font-['Times_New_Roman:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[10px] text-[rgba(47,43,61,0.9)] tracking-[0.25px] w-[min-content]">Căn cứ nhu cầu thực tế, phòng Hành chính - Quản trị kính trình Ban Giám đốc phê duyệt mua sắm thiết bị với nội dung như sau:</p>
      <DataTable3 />
      <div className="bg-[#ffdbdc] h-[32px] relative rounded-[4px] shrink-0 w-[297px]" data-name="Data Cell">
        <div aria-hidden className="absolute border border-[#ff4c51] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[8px] relative size-full">
            <p className="[word-break:break-word] capitalize flex-[1_0_0] font-['Times_New_Roman:Bold',sans-serif] leading-[0] min-w-px not-italic relative text-[10px] text-[rgba(47,43,61,0.9)]">
              <span className="leading-[1.4]">{`Thông số kỹ thuật: `}</span>
              <span className="font-['Times_New_Roman:Regular',sans-serif] leading-[1.4]">I</span>
              <span className="font-['Times_New_Roman:Regular',sans-serif] leading-[1.4] lowercase">{`n `}</span>
              <span className="font-['Times_New_Roman:Regular',sans-serif] leading-[1.4]">A</span>
              <span className="font-['Times_New_Roman:Regular',sans-serif] leading-[1.4] lowercase">{`3, in 2 mặt tự động, tốc độ 41 trang/phút, khay giấy 600 tờ, mạng `}</span>
              <span className="font-['Times_New_Roman:Regular',sans-serif] leading-[1.4] uppercase">Lan</span>
            </p>
          </div>
        </div>
      </div>
      <Frame62 />
    </div>
  );
}

function DataTable2() {
  return (
    <div className="content-stretch flex items-center relative rounded-[6px] shrink-0 w-full" data-name="Data Table">
      <div aria-hidden className="absolute border-[0.5px] border-[rgba(47,43,61,0.12)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="h-[488px] relative rounded-[8px] shrink-0 w-[543px]" />
      <div className="h-[488px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-[15px]" data-name="Scrollbar">
        <div aria-hidden className="absolute bg-[#fafafa] inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
        <div className="-translate-x-1/2 absolute bg-[#c1c1c1] left-[calc(50%+0.5px)] rounded-[4px] top-px w-[8px]" data-name="Thumb">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <div className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#c1c1c1] text-[4px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[normal] mb-0">​</p>
              <p className="leading-[normal] mb-0">​</p>
              <p className="leading-[normal] mb-0">​</p>
              <p className="leading-[normal] mb-0">​</p>
              <p className="leading-[normal]">​</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_0px_0px_0px_#e8e8e8]" />
      </div>
      <PageLinkPrev5 />
      <Frame50 />
    </div>
  );
}

function SampleTable2() {
  return (
    <div className="content-stretch drop-shadow-[0px_3px_6px_rgba(47,43,61,0.14)] flex flex-col gap-[12px] items-start overflow-clip pt-[16px] px-[8px] relative rounded-[6px] shrink-0" data-name="# Sample Table">
      <TableHeader3 />
      <Frame48 />
      <DataTable2 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
        <p className="leading-[1.2]">Dữ liệu đã bóc tách</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <Frame54 />
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pb-[4px] px-[8px] relative size-full">
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function DataCell11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[2px] relative shrink-0 w-[100px]" data-name="Data Cell">
      <div className="bg-[rgba(40,199,111,0.16)] relative rounded-[4px] shrink-0" data-name="Badge">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[5px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap" style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1' }}>
              96%
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[19.47%_19.46%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-4.89%]">
            <svg className="block size-full" fill="none" height="16.8284" preserveAspectRatio="none" viewBox="0 0 16.8284 16.8284" width="16.8284">
              <path d={svgPaths.p92dfe00} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.08%_27.08%_56.25%_56.25%]" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 0.75L4.75 4.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[4px] relative size-full">
          <div className="relative shrink-0 w-[150px]" data-name="Data Cell">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
                <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center py-[4px] relative size-full">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                        <p className="leading-[1.4]">Loại tài liệu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
                <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center py-[4px] relative size-full">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                        <p className="leading-[1.4]">Tờ trình</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DataCell11 />
        </div>
      </div>
    </div>
  );
}

function DataTable4() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[6px] shrink-0 w-full" data-name="Data Table">
      <Row21 />
    </div>
  );
}

function DataCell12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[2px] relative shrink-0 w-[100px]" data-name="Data Cell">
      <div className="bg-[rgba(40,199,111,0.16)] relative rounded-[4px] shrink-0" data-name="Badge">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[5px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap" style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1' }}>
              98%
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[19.47%_19.46%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-4.89%]">
            <svg className="block size-full" fill="none" height="16.8284" preserveAspectRatio="none" viewBox="0 0 16.8284 16.8284" width="16.8284">
              <path d={svgPaths.p92dfe00} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.08%_27.08%_56.25%_56.25%]" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 0.75L4.75 4.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[4px] relative size-full">
          <div className="relative shrink-0 w-[150px]" data-name="Data Cell">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
                <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center py-[4px] relative size-full">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                        <p className="leading-[1.4]">Mã tài liệu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
                <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center py-[4px] relative size-full">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                        <p className="leading-[1.4]">TT-2025-041</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DataCell12 />
        </div>
      </div>
    </div>
  );
}

function DataTable5() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[6px] shrink-0 w-full" data-name="Data Table">
      <Row22 />
    </div>
  );
}

function DataCell13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[2px] relative shrink-0 w-[100px]" data-name="Data Cell">
      <div className="bg-[rgba(40,199,111,0.16)] relative rounded-[4px] shrink-0" data-name="Badge">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[5px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap" style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1' }}>
              98%
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[19.47%_19.46%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-4.89%]">
            <svg className="block size-full" fill="none" height="16.8284" preserveAspectRatio="none" viewBox="0 0 16.8284 16.8284" width="16.8284">
              <path d={svgPaths.p92dfe00} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.08%_27.08%_56.25%_56.25%]" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 0.75L4.75 4.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row23() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0 w-full" data-name="Row">
      <div className="relative shrink-0 w-[150px]" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Ngày lập</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">18/04/2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DataCell13 />
    </div>
  );
}

function DataTable6() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Data Table">
      <div className="content-stretch flex flex-col items-start px-[4px] relative size-full">
        <Row23 />
      </div>
    </div>
  );
}

function DataCell14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[2px] relative shrink-0 w-[100px]" data-name="Data Cell">
      <div className="bg-[rgba(40,199,111,0.16)] relative rounded-[4px] shrink-0" data-name="Badge">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[5px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap" style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1' }}>
              95%
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[19.47%_19.46%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-4.89%]">
            <svg className="block size-full" fill="none" height="16.8284" preserveAspectRatio="none" viewBox="0 0 16.8284 16.8284" width="16.8284">
              <path d={svgPaths.p92dfe00} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.08%_27.08%_56.25%_56.25%]" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 0.75L4.75 4.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row24() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0 w-full" data-name="Row">
      <div className="relative shrink-0 w-[150px]" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Tên hàng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Máy in laser HP M712dn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DataCell14 />
    </div>
  );
}

function DataTable7() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Data Table">
      <div className="content-stretch flex flex-col items-start px-[4px] relative size-full">
        <Row24 />
      </div>
    </div>
  );
}

function DataCell15() {
  return (
    <div className="content-stretch flex flex-col items-start px-[2px] relative shrink-0 w-[150px]" data-name="Data Cell">
      <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
        <div className="content-stretch flex items-start py-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
            <p className="leading-[1.4]">Mã hàng</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataCell16() {
  return (
    <div className="content-stretch flex items-center px-[4px] relative shrink-0 w-[32px]" data-name="Data Cell">
      <div className="relative shrink-0 size-[24px]" data-name="page-link">
        <div className="absolute bottom-[50.91%] left-1/2 right-1/2 top-[33.33%]" data-name="Shape">
          <div className="absolute inset-[-19.83%_-0.75px]">
            <svg className="block size-full" fill="none" height="5.28156" preserveAspectRatio="none" viewBox="0 0 1.5 5.28156" width="1.5">
              <path d="M0.75 0.75V4.53156" id="Shape" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[35.06%] left-1/2 right-1/2 top-[64.75%]" data-name="Shape">
          <div className="absolute inset-[-1578%_-0.75px]">
            <svg className="block size-full" fill="none" height="1.54753" preserveAspectRatio="none" viewBox="0 0 1.5 1.54753" width="1.5">
              <path d="M0.75 0.75V0.797529" id="Shape" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.37%_12.56%_20.83%_12.47%]" data-name="Path">
          <div className="absolute inset-[-4.68%_-4.17%]">
            <svg className="block size-full" fill="none" height="17.5318" preserveAspectRatio="none" viewBox="0 0 19.493 17.5318" width="19.493">
              <path d={svgPaths.p202bbdd0} id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataCell17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[2px] relative shrink-0 w-[100px]" data-name="Data Cell">
      <div className="bg-[rgba(255,159,67,0.16)] relative rounded-[4px] shrink-0" data-name="Badge">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[5px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#ff9f43] text-[13px] whitespace-nowrap" style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1' }}>
              72%
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[29.17%_16.67%_29.17%_20.83%]" data-name="Path">
          <div className="absolute inset-[-7.5%_-5%]">
            <svg className="block size-full" fill="none" height="11.5" preserveAspectRatio="none" viewBox="0 0 16.5 11.5" width="16.5">
              <path d={svgPaths.p2fdecc00} id="Path" stroke="#28C76F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <DataCell15 />
      <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Data Cell">
        <div aria-hidden className="absolute border border-[#ff9f43] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[4px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">HP - M712DN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DataCell16 />
      <DataCell17 />
    </div>
  );
}

function Th2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative self-stretch shrink-0" data-name="th">
      <div className="relative shrink-0 size-[16px]" data-name="clock">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%]" data-name="Oval">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
              <circle cx="6.75" cy="6.75" id="Oval" r="6" stroke="#808390" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-1/2 right-[37.5%] top-[29.17%]" data-name="Path">
          <div className="absolute inset-[-14.06%_-37.5%]">
            <svg className="block size-full" fill="none" height="6.83333" preserveAspectRatio="none" viewBox="0 0 3.5 6.83333" width="3.5">
              <path d={svgPaths.p21e70000} id="Path" stroke="#808390" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[4px] items-start py-[4px] relative rounded-[4px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(47,43,61,0.7)] tracking-[0.3px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Đã chỉnh sửa</p>
      </div>
      <Th2 />
    </div>
  );
}

function DataCell18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative shrink-0 w-[150px]" data-name="Data Cell">
      <Frame55 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <DataCell18 />
    </div>
  );
}

function Row25() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0 w-full" data-name="Row">
      <Frame84 />
      <Frame85 />
    </div>
  );
}

function DataTable8() {
  return (
    <div className="bg-[#ffecd9] relative rounded-[4px] shrink-0 w-full" data-name="Data Table">
      <div aria-hidden className="absolute border-[#ff9f43] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[4px] relative size-full">
          <Row25 />
        </div>
      </div>
    </div>
  );
}

function DataCell19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[2px] relative shrink-0 w-[100px]" data-name="Data Cell">
      <div className="bg-[rgba(40,199,111,0.16)] relative rounded-[4px] shrink-0" data-name="Badge">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[5px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap" style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1' }}>
              96%
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[19.47%_19.46%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-4.89%]">
            <svg className="block size-full" fill="none" height="16.8284" preserveAspectRatio="none" viewBox="0 0 16.8284 16.8284" width="16.8284">
              <path d={svgPaths.p92dfe00} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.08%_27.08%_56.25%_56.25%]" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 0.75L4.75 4.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row26() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0 w-full" data-name="Row">
      <div className="relative shrink-0 w-[150px]" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Đối tác</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Công ty Sao Bắc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DataCell19 />
    </div>
  );
}

function DataTable9() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Data Table">
      <div className="content-stretch flex flex-col items-start px-[4px] relative size-full">
        <Row26 />
      </div>
    </div>
  );
}

function DataCell20() {
  return (
    <div className="content-stretch flex flex-col items-start px-[2px] relative shrink-0 w-[150px]" data-name="Data Cell">
      <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
        <div className="content-stretch flex items-start py-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
            <p className="leading-[1.4]">Thông số kỹ thuật</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataCell21() {
  return (
    <div className="content-stretch flex items-center px-[4px] relative shrink-0 w-[32px]" data-name="Data Cell">
      <div className="relative shrink-0 size-[24px]" data-name="page-link">
        <div className="absolute bottom-[50.91%] left-1/2 right-1/2 top-[33.33%]" data-name="Shape">
          <div className="absolute inset-[-19.83%_-0.75px]">
            <svg className="block size-full" fill="none" height="5.28156" preserveAspectRatio="none" viewBox="0 0 1.5 5.28156" width="1.5">
              <path d="M0.75 0.75V4.53156" id="Shape" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[35.06%] left-1/2 right-1/2 top-[64.75%]" data-name="Shape">
          <div className="absolute inset-[-1578%_-0.75px]">
            <svg className="block size-full" fill="none" height="1.54753" preserveAspectRatio="none" viewBox="0 0 1.5 1.54753" width="1.5">
              <path d="M0.75 0.75V0.797529" id="Shape" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.37%_12.56%_20.83%_12.47%]" data-name="Path">
          <div className="absolute inset-[-4.68%_-4.17%]">
            <svg className="block size-full" fill="none" height="17.5318" preserveAspectRatio="none" viewBox="0 0 19.493 17.5318" width="19.493">
              <path d={svgPaths.p202bbdd0} id="Path" stroke="#FF4C51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataCell22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[2px] relative shrink-0 w-[100px]" data-name="Data Cell">
      <div className="bg-[rgba(234,84,85,0.16)] relative rounded-[4px] shrink-0" data-name="Badge">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[5px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#ea5455] text-[13px] whitespace-nowrap" style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1' }}>
              68%
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[29.17%_16.67%_29.17%_20.83%]" data-name="Path">
          <div className="absolute inset-[-7.5%_-5%]">
            <svg className="block size-full" fill="none" height="11.5" preserveAspectRatio="none" viewBox="0 0 16.5 11.5" width="16.5">
              <path d={svgPaths.p2fdecc00} id="Path" stroke="#28C76F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <DataCell20 />
      <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Data Cell">
        <div aria-hidden className="absolute border border-[#ff4c51] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[4px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[14px] text-[rgba(47,43,61,0.9)] text-ellipsis whitespace-nowrap">
                    <p className="leading-[1.4] overflow-hidden text-ellipsis">In A3, in 2 mặt tự động, tốc độ 41 trang/phút, khay giấy 600 tờ, mạng Lan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DataCell21 />
      <DataCell22 />
    </div>
  );
}

function Th3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative self-stretch shrink-0" data-name="th">
      <div className="relative shrink-0 size-[16px]" data-name="clock">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%]" data-name="Oval">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
              <circle cx="6.75" cy="6.75" id="Oval" r="6" stroke="#808390" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-1/2 right-[37.5%] top-[29.17%]" data-name="Path">
          <div className="absolute inset-[-14.06%_-37.5%]">
            <svg className="block size-full" fill="none" height="6.83333" preserveAspectRatio="none" viewBox="0 0 3.5 6.83333" width="3.5">
              <path d={svgPaths.p21e70000} id="Path" stroke="#808390" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[4px] items-start py-[4px] relative rounded-[4px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(47,43,61,0.7)] tracking-[0.3px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Đã chỉnh sửa</p>
      </div>
      <Th3 />
    </div>
  );
}

function DataCell23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative shrink-0 w-[150px]" data-name="Data Cell">
      <Frame56 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <DataCell23 />
    </div>
  );
}

function Row27() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0 w-full" data-name="Row">
      <Frame86 />
      <Frame87 />
    </div>
  );
}

function DataTable10() {
  return (
    <div className="bg-[#ffdbdc] relative rounded-[4px] shrink-0 w-full" data-name="Data Table">
      <div aria-hidden className="absolute border-[#ff4c51] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[4px] relative size-full">
          <Row27 />
        </div>
      </div>
    </div>
  );
}

function DataCell24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[2px] relative shrink-0 w-[100px]" data-name="Data Cell">
      <div className="bg-[rgba(40,199,111,0.16)] relative rounded-[4px] shrink-0" data-name="Badge">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[5px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap" style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1' }}>
              99%
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[19.47%_19.46%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-4.89%]">
            <svg className="block size-full" fill="none" height="16.8284" preserveAspectRatio="none" viewBox="0 0 16.8284 16.8284" width="16.8284">
              <path d={svgPaths.p92dfe00} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.08%_27.08%_56.25%_56.25%]" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 0.75L4.75 4.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row28() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0 w-full" data-name="Row">
      <div className="relative shrink-0 w-[150px]" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Đơn vị tính</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Cái</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DataCell24 />
    </div>
  );
}

function DataTable11() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Data Table">
      <div className="content-stretch flex flex-col items-start px-[4px] relative size-full">
        <Row28 />
      </div>
    </div>
  );
}

function DataCell25() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[2px] relative shrink-0 w-[100px]" data-name="Data Cell">
      <div className="bg-[rgba(40,199,111,0.16)] relative rounded-[4px] shrink-0" data-name="Badge">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[5px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap" style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1' }}>
              99%
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[19.47%_19.46%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-4.89%]">
            <svg className="block size-full" fill="none" height="16.8284" preserveAspectRatio="none" viewBox="0 0 16.8284 16.8284" width="16.8284">
              <path d={svgPaths.p92dfe00} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.08%_27.08%_56.25%_56.25%]" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 0.75L4.75 4.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row29() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0 w-full" data-name="Row">
      <div className="relative shrink-0 w-[150px]" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Số lượng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DataCell25 />
    </div>
  );
}

function DataTable12() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Data Table">
      <div className="content-stretch flex flex-col items-start px-[4px] relative size-full">
        <Row29 />
      </div>
    </div>
  );
}

function DataCell26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[2px] relative shrink-0 w-[100px]" data-name="Data Cell">
      <div className="bg-[rgba(40,199,111,0.16)] relative rounded-[4px] shrink-0" data-name="Badge">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[5px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap" style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1' }}>
              92%
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[19.47%_19.46%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-4.89%]">
            <svg className="block size-full" fill="none" height="16.8284" preserveAspectRatio="none" viewBox="0 0 16.8284 16.8284" width="16.8284">
              <path d={svgPaths.p92dfe00} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.08%_27.08%_56.25%_56.25%]" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 0.75L4.75 4.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row30() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0 w-full" data-name="Row">
      <div className="relative shrink-0 w-[150px]" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Đơn giá (VND)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">86.000.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DataCell26 />
    </div>
  );
}

function DataTable13() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Data Table">
      <div className="content-stretch flex flex-col items-start px-[4px] relative size-full">
        <Row30 />
      </div>
    </div>
  );
}

function DataCell27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[2px] relative shrink-0 w-[100px]" data-name="Data Cell">
      <div className="bg-[rgba(40,199,111,0.16)] relative rounded-[4px] shrink-0" data-name="Badge">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[5px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap" style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1' }}>
              93%
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="page-link">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[19.47%_19.46%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-4.89%]">
            <svg className="block size-full" fill="none" height="16.8284" preserveAspectRatio="none" viewBox="0 0 16.8284 16.8284" width="16.8284">
              <path d={svgPaths.p92dfe00} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.08%_27.08%_56.25%_56.25%]" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 0.75L4.75 4.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row31() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0 w-full" data-name="Row">
      <div className="relative shrink-0 w-[150px]" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Tổng giá trị (VND)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[4px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">172.000.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DataCell27 />
    </div>
  );
}

function DataTable14() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Data Table">
      <div className="content-stretch flex flex-col items-start px-[4px] relative size-full">
        <Row31 />
      </div>
    </div>
  );
}

function Th4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative self-stretch shrink-0" data-name="th">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="circle-filled">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 9.99989 10" width="9.99989">
            <path d={svgPaths.p29e3dd80} fill="#FF9F43" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[4px]">
      <div className="content-stretch flex gap-[4px] items-start px-[2px] py-[8px] relative size-full">
        <Th4 />
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.7)] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[1.4]">Độ tin cậy trung bình (70% - 84%)</p>
        </div>
      </div>
    </div>
  );
}

function Th5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative self-stretch shrink-0" data-name="th">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="circle-filled">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 9.99989 10" width="9.99989">
            <path d={svgPaths.p29e3dd80} fill="#FF4C51" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[4px]">
      <div className="content-stretch flex gap-[4px] items-start px-[2px] py-[8px] relative size-full">
        <Th5 />
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.7)] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[1.4]">{`Độ tin cậy thấp (< 70%)`}</p>
        </div>
      </div>
    </div>
  );
}

function Row32() {
  return (
    <div className="content-stretch flex items-center justify-between py-[4px] relative shrink-0 w-full" data-name="Row">
      <Frame57 />
      <Frame64 />
    </div>
  );
}

function DataTable15() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="Data Table">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[4px] relative size-full">
          <Row32 />
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start px-[4px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] shrink-0 w-[490px]">
      <div aria-hidden className="absolute border-[0.5px] border-[rgba(47,43,61,0.12)] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px]" />
      <DataTable4 />
      <DataTable5 />
      <DataTable6 />
      <DataTable7 />
      <DataTable8 />
      <DataTable9 />
      <DataTable10 />
      <DataTable11 />
      <DataTable12 />
      <DataTable13 />
      <DataTable14 />
      <DataTable15 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex items-start pr-px relative shrink-0">
      <Frame63 />
      <div className="h-[573px] relative shrink-0 w-[15px]" data-name="Scrollbar">
        <div aria-hidden className="absolute bg-[#fafafa] inset-0 pointer-events-none" />
        <div aria-hidden className="absolute border-[#e8e8e8] border-solid border-t inset-0 pointer-events-none" />
        <div className="-translate-x-1/2 absolute bg-[#c1c1c1] left-[calc(50%+0.5px)] rounded-[4px] top-px w-[8px]" data-name="Thumb">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <div className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#c1c1c1] text-[4px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[normal] mb-0">​</p>
              <p className="leading-[normal] mb-0">​</p>
              <p className="leading-[normal] mb-0">​</p>
              <p className="leading-[normal] mb-0">​</p>
              <p className="leading-[normal]">​</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_0px_0px_0px_#e8e8e8]" />
      </div>
    </div>
  );
}

function SampleTable3() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="# Sample Table">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pl-[8px] py-[16px] relative size-full">
          <TableHeader4 />
          <Frame81 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.12)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)]" />
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-[rgba(47,43,61,0.9)]">
            <p className="leading-[1.2]">Nhật ký gần đây</p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="chevron-right">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
            <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Path">
              <div className="absolute inset-[-6.25%_-12.5%]">
                <svg className="block size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 7.5 13.5" width="7.5">
                  <path d={svgPaths.p38424000} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white relative rounded-[6px] shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[12px] relative size-full">
          <TableHeader5 />
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-w-px relative">
      <SampleTable3 />
      <Container3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <SampleTable2 />
      <Frame80 />
    </div>
  );
}

function Container2() {
  return (
    <div className="drop-shadow-[0px_3px_6px_rgba(47,43,61,0.14)] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
          <TableHeader2 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Table1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[24px] relative shrink-0 w-full" data-name="Table">
      <Header5 />
      <Container2 />
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_9px_rgba(75,70,92,0.1)] flex flex-col items-start relative rounded-[6px] shrink-0 w-full" data-name="Card">
      <Table1 />
    </div>
  );
}

function Body2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Card6 />
      </div>
    </div>
  );
}

function Search8() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Search">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.7)] text-center">LoogIX © 2026</p>
        </div>
      </div>
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Wrapper">
      <Nav2 />
      <Body2 />
      <div className="drop-shadow-[0px_-4px_5px_rgba(47,43,61,0.24)] relative shrink-0 w-full" data-name="# Footer">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center py-[16px] relative size-full">
            <Search8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function AutoLayoutFrame2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1440px]" data-name="Auto-layout Frame">
      <div className="drop-shadow-[0px_2px_4px_rgba(47,43,61,0.12)] h-[1097px] relative shrink-0" data-name="Menu - side bar">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <Logo4 />
            <MenuDrawer2 />
            <Logo5 />
          </div>
        </div>
      </div>
      <Wrapper2 />
    </div>
  );
}

function PhongToTaiLiu1() {
  return (
    <div className="absolute bg-[#f8f7fa] content-stretch flex flex-col items-center left-[1765px] min-h-[820px] overflow-clip top-[33px] w-[1440px]" data-name="Phóng to tài liệu">
      <AutoLayoutFrame2 />
    </div>
  );
}

function TableHeader6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-[rgba(47,43,61,0.9)]">
            <p className="leading-[1.2]">Nhật ký gần đây</p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="chevron-down">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
              <div className="absolute inset-[-12.5%_-6.25%]">
                <svg className="block size-full" fill="none" height="7.5" preserveAspectRatio="none" viewBox="0 0 13.5 7.5" width="13.5">
                  <path d={svgPaths.p2e08bc80} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineDot() {
  return (
    <div className="bg-[rgba(63,129,234,0.16)] content-stretch flex items-center p-[6px] relative rounded-[500px] shrink-0" data-name="TimelineDot">
      <div className="relative shrink-0 size-[24px]" data-name="pencil">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[19.47%_19.46%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-4.89%]">
            <svg className="block size-full" fill="none" height="16.8284" preserveAspectRatio="none" viewBox="0 0 16.8284 16.8284" width="16.8284">
              <path d={svgPaths.p92dfe00} id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.08%_27.08%_56.25%_56.25%]" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 0.75L4.75 4.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-[32px]" data-name="Divider">
      <div className="flex h-[43px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[43px]" data-name="divider">
            <div className="absolute inset-[-0.75px_0]">
              <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 43 1.5" width="43">
                <path d="M0 0.75H43" id="divider" stroke="#2F2B3D" strokeOpacity="0.12" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DotContainer() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0" data-name="dot-container">
      <TimelineDot />
      <Divider />
    </div>
  );
}

function Th6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative self-stretch shrink-0 w-[30px]" data-name="th">
      <div className="relative rounded-[500px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[500px] size-full" src={imgVariantCircleBadgeFalseIconFalseImageTrue} />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="relative size-full" />
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[4px]">
      <div className="content-stretch flex gap-[4px] items-start p-[2px] relative size-full">
        <Th6 />
        <div className="[word-break:break-word] flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
          <p className="leading-[1.4]">Nguyễn Văn A</p>
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px] whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        18/04/2025
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        10:23
      </p>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Main">
      <Frame66 />
      <Frame68 />
    </div>
  );
}

function DotContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Dot Container">
      <Main />
    </div>
  );
}

function TimelineItem1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="TimelineItem">
      <DotContainer1 />
    </div>
  );
}

function Row33() {
  return (
    <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-full" data-name="Row">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[2px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Trường dữ liệu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[2px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Giá trị cũ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[2px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Giá trị mới</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row34() {
  return (
    <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-full" data-name="Row">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[2px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Mã hàng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[2px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#ff4c51] text-[11px]">
                    <p className="leading-[1.4]">HP-M172dn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[2px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#28c76f] text-[11px]">
                    <p className="leading-[1.4]">HP-M172DN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTable16() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Data Table">
      <div className="content-stretch flex flex-col items-start px-[4px] relative size-full">
        <Row33 />
        <Row34 />
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px py-[4px] relative">
      <TimelineItem1 />
      <DataTable16 />
    </div>
  );
}

function TimelineItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-start opacity-80 relative shrink-0 w-full" data-name="TimelineItem">
      <DotContainer />
      <Frame65 />
    </div>
  );
}

function Timeline() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Timeline">
      <TimelineItem />
    </div>
  );
}

function TimelineDot1() {
  return (
    <div className="bg-[rgba(63,129,234,0.16)] content-stretch flex items-center p-[6px] relative rounded-[500px] shrink-0" data-name="TimelineDot">
      <div className="relative shrink-0 size-[24px]" data-name="pencil">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[19.47%_19.46%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-4.89%]">
            <svg className="block size-full" fill="none" height="16.8284" preserveAspectRatio="none" viewBox="0 0 16.8284 16.8284" width="16.8284">
              <path d={svgPaths.p92dfe00} id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.08%_27.08%_56.25%_56.25%]" data-name="Path">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 5.5 5.5" width="5.5">
              <path d="M0.75 0.75L4.75 4.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-[68px] relative shrink-0 w-[32px]" data-name="Divider">
      <svg className="absolute block inset-0 size-full" fill="none" height="68" preserveAspectRatio="none" viewBox="0 0 32 68" width="32">
        <g id="Divider">
          <path d="M16 2L16 66" id="divider" stroke="#2F2B3D" strokeOpacity="0.12" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DotContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="dot-container">
      <TimelineDot1 />
      <Divider1 />
    </div>
  );
}

function Th7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative self-stretch shrink-0 w-[30px]" data-name="th">
      <div className="relative rounded-[500px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[500px] size-full" src={imgVariantCircleBadgeFalseIconFalseImageTrue} />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="relative size-full" />
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[4px]">
      <div className="content-stretch flex gap-[4px] items-start p-[2px] relative size-full">
        <Th7 />
        <div className="[word-break:break-word] flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">
          <p className="leading-[1.4]">Nguyễn Văn A</p>
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-center leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px] whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        18/04/2025
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        10:23
      </p>
    </div>
  );
}

function Main1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Main">
      <Frame70 />
      <Frame71 />
    </div>
  );
}

function DotContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Dot Container">
      <Main1 />
    </div>
  );
}

function TimelineItem3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="TimelineItem">
      <DotContainer3 />
    </div>
  );
}

function Row35() {
  return (
    <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-full" data-name="Row">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[2px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Trường dữ liệu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[2px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Giá trị cũ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[2px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Giá trị mới</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row36() {
  return (
    <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-full" data-name="Row">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[2px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[11px] text-[rgba(47,43,61,0.9)]">
                    <p className="leading-[1.4]">Thông số kỹ thuật</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[2px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#ff4c51] text-[11px]">
                    <p className="leading-[1.4]">In A3, in 2 mặt tự động, tốc độ 41 trang/phút</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Data Cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[2px] relative size-full">
            <div className="relative shrink-0 w-full" data-name="Data type">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center py-[2px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#28c76f] text-[11px]">
                    <p className="leading-[1.4]">In A3, in 2 mặt tự động, tốc độ 41 trang/phút, khay giấy 600 tờ, mạng LAN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTable17() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Data Table">
      <div className="content-stretch flex flex-col items-start px-[4px] relative size-full">
        <Row35 />
        <Row36 />
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px py-[4px] relative">
      <TimelineItem3 />
      <DataTable17 />
    </div>
  );
}

function TimelineItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start opacity-80 relative shrink-0 w-full" data-name="TimelineItem">
      <DotContainer2 />
      <Frame69 />
    </div>
  );
}

function Timeline1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Timeline">
      <TimelineItem2 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <Timeline />
      <Timeline1 />
    </div>
  );
}

function Scrollbar2() {
  return (
    <div className="bg-[#fafafa] relative rounded-[90px] self-stretch shrink-0 w-[15px]" data-name="Scrollbar">
      <div aria-hidden className="absolute border-[0.5px] border-[rgba(47,43,61,0.12)] border-solid inset-0 pointer-events-none rounded-[90px]" />
      <div className="-translate-x-1/2 absolute bg-[#c1c1c1] h-[20px] left-1/2 rounded-[4px] top-[3px] w-[7px]" data-name="Thumb">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#c1c1c1] text-[4px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal]">​</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SampleTable4() {
  return (
    <div className="drop-shadow-[0px_3px_6px_rgba(47,43,61,0.14)] relative rounded-[6px] shrink-0 w-full" data-name="# Sample Table">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start pl-[24px] pr-[8px] py-[8px] relative size-full">
          <Frame67 />
          <Scrollbar2 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[10px] items-center justify-center left-[3238px] overflow-clip px-[4px] py-[12px] rounded-[6px] shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)] top-[841px] w-[531px]" data-name="Container">
      <TableHeader6 />
      <SampleTable4 />
    </div>
  );
}

export default function SHoaTaiLiu() {
  return (
    <div className="bg-[#6e6a6a] relative size-full" data-name="Số hóa tài liệu">
      <SHoaTaiLiu1 />
      <Upload />
      <PhongToTaiLiu />
      <Scrollbar1 />
      <PhongToTaiLiu1 />
      <Container4 />
    </div>
  );
}