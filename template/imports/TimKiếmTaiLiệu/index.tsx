import imgVariantCircleBadgeFalseIconFalseImageTrue from "./420fce61b2448c9eab5d25435a5e458a011f53b7.png";
import svgPaths from "./svg-ld85ssymfd";
import imgImage2 from "./01342b2bb964441edcb3fd61de43edf5fdb34da6.png";
import imgImage7 from "./d0158cda7b777eff614476338cab8f61c01d388a.png";

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

function Frame38() {
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
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
              <p className="leading-[1.4]">Quản trị dữ liệu</p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
                <div className="absolute inset-[-18.75%_-9.38%]">
                  <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 9.5 5.5" width="9.5">
                    <path d={svgPaths.p14416700} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
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
              <p className="leading-[1.4]">Số hóa tài liệu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e64449] text-[14px] whitespace-nowrap">
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

function Frame39() {
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
            <Frame39 />
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

function Frame40() {
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
            <Frame40 />
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

function Frame41() {
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
            <Frame41 />
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
              <Frame38 />
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
              <span className="leading-[1.2]">{` \ Tìm kiếm sản phẩm`}</span>
            </p>
          </div>
        </div>
      </div>
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
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 w-[809px] whitespace-nowrap" data-name="Frame">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#393740] text-[24px]">Tìm kiếm sản phẩm</p>
      <p className="font-['Roboto:Italic',sans-serif] font-normal italic leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tìm kiếm nhanh trên kho tài liệu mua bán thuộc phạm vi bạn được phân công
      </p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Header">
      <Frame />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Header">
      <Header1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[4.17%_11.9%_4.16%_11.91%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.8338" preserveAspectRatio="none" viewBox="0 0 10.6666 12.8338" width="10.6666">
        <g id="Group">
          <path d={svgPaths.p38635700} fill="#FF4C51" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] overflow-clip size-[14px] top-px" data-name="AI">
        <Group />
      </div>
    </div>
  );
}

function BtnOutlineDangerBtnSm() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[14px] py-[6px] relative shrink-0" data-name="btn-outline-danger btn-sm">
      <MaskedIcon1 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#ff4c51] text-[12px] whitespace-nowrap">AI Mode</p>
    </div>
  );
}

function Form1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-bl-[4px] rounded-tl-[4px]" data-name="_Form">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
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
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[12px] text-[rgba(47,43,61,0.9)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">Laptop Chip Ryzen 7, ram 32gb, rom 512gb</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="x">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
            <div className="absolute inset-1/4" data-name="Path">
              <div className="absolute inset-[-7.5%]">
                <svg className="block size-full" fill="none" height="11.5" preserveAspectRatio="none" viewBox="0 0 11.5 11.5" width="11.5">
                  <path d="M10.75 0.75L0.75 10.75" id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-1/4" data-name="Path">
              <div className="absolute inset-[-7.5%]">
                <svg className="block size-full" fill="none" height="11.5" preserveAspectRatio="none" viewBox="0 0 11.5 11.5" width="11.5">
                  <path d="M0.75 0.75L10.75 10.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="h-[29px] relative rounded-[20px] shrink-0" data-name="Outline Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnOutlineDangerBtnSm />
              </div>
            </div>
            <div aria-hidden className="absolute border-[#ff4c51] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="col-1 content-stretch flex h-[44px] items-center ml-0 mt-0 relative rounded-[20px] row-1 w-full" data-name="Form">
      <div aria-hidden className="absolute border-[#dbdade] border-[0.5px] border-solid inset-[-0.25px] pointer-events-none rounded-[20.25px]" />
      <Form1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Form />
    </div>
  );
}

function ChipOutline() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[24px] px-[10px] py-[2px] relative rounded-[12px] shrink-0" data-name="chip-outline">
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[12px] text-[rgba(47,43,61,0.9)] text-center">
        <p className="leading-[1.4]">Laptop</p>
      </div>
    </div>
  );
}

function ChipOutline1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[24px] px-[10px] py-[2px] relative rounded-[12px] shrink-0" data-name="chip-outline">
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[12px] text-[rgba(47,43,61,0.9)] text-center">
        <p className="leading-[1.4]">Chip Ryzen 7</p>
      </div>
    </div>
  );
}

function ChipOutline2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[24px] px-[10px] py-[2px] relative rounded-[12px] shrink-0" data-name="chip-outline">
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[12px] text-[rgba(47,43,61,0.9)] text-center">
        <p className="leading-[1.4]">32Gb RAM</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">{`Gợi ý tìm kiếm: `}</p>
      </div>
      <ChipOutline />
      <ChipOutline1 />
      <ChipOutline2 />
    </div>
  );
}

function Tittle() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Tittle">
      <div aria-hidden className="absolute border-[0.5px] border-[rgba(47,43,61,0.12)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-end px-[20px] py-[8px] relative size-full">
          <Group3 />
          <Frame61 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Khoảng thời gian</p>
      </div>
    </div>
  );
}

function Form3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[2px]" data-name="_Form">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] py-[7px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">12 tháng gần đây</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
              <div className="absolute inset-[-15%_-7.5%]">
                <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 11.5 6.5" width="11.5">
                  <path d={svgPaths.p3d2c9380} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Form">
      <div className="content-stretch flex items-start overflow-clip py-[5px] relative rounded-[inherit] size-full">
        <Form3 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.22)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function FormWithLabel() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Form With Label">
      <Label />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Form Select">
        <div className="content-stretch flex items-start relative size-full">
          <Form2 />
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Row">
      <FormWithLabel />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-[rgba(47,43,61,0.9)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Khoảng giá</p>
      </div>
    </div>
  );
}

function Form5() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[2px]" data-name="_Form">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[7px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-[rgba(47,43,61,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">Từ</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
              <div className="absolute inset-[-15%_-7.5%]">
                <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 11.5 6.5" width="11.5">
                  <path d={svgPaths.p3d2c9380} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form4() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Form">
      <div className="content-stretch flex items-start overflow-clip py-[5px] relative rounded-[inherit] size-full">
        <Form5 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.22)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function FormWithLabel1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Form With Label">
      <Label1 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Form Select">
        <div className="content-stretch flex items-start relative size-full">
          <Form4 />
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Row">
      <FormWithLabel1 />
    </div>
  );
}

function Label2() {
  return <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label" />;
}

function Form7() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[2px]" data-name="_Form">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[7px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-[rgba(47,43,61,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">Đến</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
              <div className="absolute inset-[-15%_-7.5%]">
                <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 11.5 6.5" width="11.5">
                  <path d={svgPaths.p3d2c9380} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form6() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Form">
      <div className="content-stretch flex items-start overflow-clip py-[5px] relative rounded-[inherit] size-full">
        <Form7 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.22)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function FormWithLabel2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Form With Label">
      <Label2 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Form Select">
        <div className="content-stretch flex items-start relative size-full">
          <Form6 />
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Row">
      <FormWithLabel2 />
    </div>
  );
}

function MaskedIcon2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="rotate">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[15.76%_15.81%_15.42%_15.67%]" data-name="Shape">
          <div className="absolute inset-[-7.78%_-7.82%_-7.79%_-7.82%]">
            <svg className="block size-full" fill="none" height="11.1349" preserveAspectRatio="none" viewBox="0 0 11.0937 11.1349" width="11.0937">
              <path d={svgPaths.p2a471800} fill="#2F2B3D" fillOpacity="0.9" id="Shape" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnOutlineSecondaryBtnSm() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[14px] py-[6px] relative shrink-0" data-name="btn-outline-secondary btn-sm">
      <MaskedIcon2 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">Xóa bộ lọc</p>
    </div>
  );
}

function OutlineButton() {
  return (
    <div className="h-[44px] relative rounded-[4px] shrink-0" data-name="Outline Button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <BtnOutlineSecondaryBtnSm />
      </div>
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.4)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Tittle1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Tittle">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end px-[20px] py-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name="# Input Field">
            <div className="content-stretch flex items-start relative size-full">
              <Row1 />
            </div>
          </div>
          <div className="relative shrink-0 w-[250px]" data-name="# Input Field">
            <div className="content-stretch flex items-start relative size-full">
              <Row2 />
            </div>
          </div>
          <div className="relative shrink-0 w-[250px]" data-name="# Input Field">
            <div className="content-stretch flex items-start relative size-full">
              <Row3 />
            </div>
          </div>
          <OutlineButton />
        </div>
      </div>
    </div>
  );
}

function Th() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center px-[4px] relative shrink-0 w-[46px]" data-name="th">
        <div className="overflow-clip relative shrink-0 size-[48px]" data-name="CheckCircle">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
              <g id="Vector">
                <path d={svgPaths.p2772df40} fill="#28C76F" />
                <path d={svgPaths.p2772df40} fill="#28C76F" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#393740] text-[18px] whitespace-nowrap">Đã tìm thấy 5 kết quả liên quan</p>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Header">
      <Th />
      <Frame2 />
    </div>
  );
}

function Header2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex items-start p-[8px] relative size-full">
        <Header3 />
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="absolute h-[20px] left-[-5px] top-[-1.5px] w-[18px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
        <g id="chevron-down">
          <path d="M4 8L9 13L14 8" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <ChevronDown />
    </div>
  );
}

function DataTableCell() {
  return (
    <div className="h-full relative shrink-0" data-name="Data Table Cell">
      <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[4px] py-[8px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#393740] text-[14px] whitespace-nowrap">Nhà cung cấp</p>
          <MaskedIcon3 />
        </div>
      </div>
    </div>
  );
}

function MaskedIcon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Masked Icon">
      <div className="absolute left-0 size-[20px] top-[0.5px]" data-name="arrow-narrow-down">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[20.83%_47.92%]" data-name="Path">
          <div className="absolute inset-[-6.43%_-40%]">
            <svg className="block size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 1.5 13.1667" width="1.5">
              <path d="M0.75 0.75V12.4167" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-1/2 right-[33.33%] top-[62.5%]" data-name="Path">
          <div className="absolute inset-[-22.5%]">
            <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 4.83333 4.83333" width="4.83333">
              <path d="M4.08333 0.75L0.75 4.08333" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-[33.33%] right-1/2 top-[62.5%]" data-name="Path">
          <div className="absolute inset-[-22.5%]">
            <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 4.83333 4.83333" width="4.83333">
              <path d="M0.75 0.75L4.08333 4.08333" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTableCell1() {
  return (
    <div className="h-full relative shrink-0 w-[100px]" data-name="Data Table Cell">
      <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Đơn giá (VND)</p>
          <MaskedIcon4 />
        </div>
      </div>
    </div>
  );
}

function MaskedIcon5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-5px] size-[20px] top-[-1.5px]" data-name="arrow-narrow-down">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[20.83%_47.92%]" data-name="Path">
          <div className="absolute inset-[-6.43%_-40%]">
            <svg className="block size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 1.5 13.1667" width="1.5">
              <path d="M0.75 0.75V12.4167" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-1/2 right-[33.33%] top-[62.5%]" data-name="Path">
          <div className="absolute inset-[-22.5%]">
            <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 4.83333 4.83333" width="4.83333">
              <path d="M4.08333 0.75L0.75 4.08333" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-[33.33%] right-1/2 top-[62.5%]" data-name="Path">
          <div className="absolute inset-[-22.5%]">
            <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 4.83333 4.83333" width="4.83333">
              <path d="M0.75 0.75L4.08333 4.08333" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTableCell2() {
  return (
    <div className="h-full relative shrink-0 w-[85px]" data-name="Data Table Cell">
      <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Thời điểm báo giá</p>
          <MaskedIcon5 />
        </div>
      </div>
    </div>
  );
}

function DataTableRow() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Data Table Row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] relative size-full">
          <div className="h-full relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Tên HHDV</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Mô tả</p>
              </div>
            </div>
          </div>
          <div className="h-full relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Mã hàng hóa</p>
              </div>
            </div>
          </div>
          <DataTableCell />
          <div className="h-full relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#393740] text-[14px] whitespace-nowrap">Xuất xứ</p>
              </div>
            </div>
          </div>
          <div className="h-full relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#393740] text-[14px] whitespace-nowrap">ĐVT</p>
              </div>
            </div>
          </div>
          <DataTableCell1 />
          <DataTableCell2 />
          <div className="h-full relative shrink-0 w-[97px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px] text-center">Thao tác</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col h-[53px] items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-b-[0.5px] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
      <DataTableRow />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]">
      <div className="relative shrink-0" data-name="Data Table Cell">
        <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap">21.990.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-78.57%_-9.18%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 9.66667 1.5" width="9.66667">
              <path d="M0.75 0.75H8.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 4.25L4.25 0.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 0.75L4.25 4.25" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnTextPrimaryBtnSm() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[9px] py-[6px] relative shrink-0" data-name="btn-text-primary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f81ea] text-[12px] whitespace-nowrap">Xem tài liệu</p>
      <MaskedIcon6 />
    </div>
  );
}

function DataTableRow1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Table Row">
      <div aria-hidden className="absolute border-[#dbdade] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#28c76f] text-[13px]">Lenovo IdeaPad Slim 5 15ARP10 OLED</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#28c76f] text-[13px]">Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB kết hợp màn hình 15.1 inch WQXGA OLED sắc nét. Máy có thiết kế vỏ nhôm mỏng nhẹ (khoảng 1.39 kg)</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#28c76f] text-[13px]">-</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[115px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#28c76f] text-[13px]">Công ty TNHH Hưng Việt</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap">Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap">Cái</p>
              </div>
            </div>
          </div>
          <Frame90 />
          <div className="relative shrink-0 w-[85px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap">22/05/2026</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Text Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnTextPrimaryBtnSm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DataTableRow1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(40,199,111,0.16)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame72 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]">
      <div className="relative shrink-0" data-name="Data Table Cell">
        <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22.590.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-78.57%_-9.18%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 9.66667 1.5" width="9.66667">
              <path d="M0.75 0.75H8.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 4.25L4.25 0.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 0.75L4.25 4.25" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnTextPrimaryBtnSm1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[9px] py-[6px] relative shrink-0" data-name="btn-text-primary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f81ea] text-[12px] whitespace-nowrap">Xem tài liệu</p>
      <MaskedIcon7 />
    </div>
  );
}

function DataTableRow2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Table Row">
      <div aria-hidden className="absolute border-[#dbdade] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Lenovo IdeaPad Slim 5 15ARP10 OLED</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB kết hợp màn hình 15.1 inch WQXGA OLED sắc nét. Máy có thiết kế vỏ nhôm mỏng nhẹ (khoảng 1.39 kg)</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">-</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[115px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Công ty TNHH Hưng Việt</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Cái</p>
              </div>
            </div>
          </div>
          <Frame92 />
          <div className="relative shrink-0 w-[85px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22/05/2026</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Text Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnTextPrimaryBtnSm1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DataTableRow2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame73 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]">
      <div className="relative shrink-0" data-name="Data Table Cell">
        <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22.990.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-78.57%_-9.18%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 9.66667 1.5" width="9.66667">
              <path d="M0.75 0.75H8.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 4.25L4.25 0.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 0.75L4.25 4.25" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnTextPrimaryBtnSm2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[9px] py-[6px] relative shrink-0" data-name="btn-text-primary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f81ea] text-[12px] whitespace-nowrap">Xem tài liệu</p>
      <MaskedIcon8 />
    </div>
  );
}

function DataTableRow3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Table Row">
      <div aria-hidden className="absolute border-[#dbdade] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">HP Victus 16</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Laptop phiên bản cấu hình R7-7840HS hoặc R7-8845HS / RAM 32GB / SSD 512GB</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">-</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[115px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Thiên Long Tech</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Cái</p>
              </div>
            </div>
          </div>
          <Frame93 />
          <div className="relative shrink-0 w-[85px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22/05/2026</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Text Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnTextPrimaryBtnSm2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DataTableRow3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame74 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]">
      <div className="relative shrink-0" data-name="Data Table Cell">
        <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22.990.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-78.57%_-9.18%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 9.66667 1.5" width="9.66667">
              <path d="M0.75 0.75H8.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 4.25L4.25 0.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 0.75L4.25 4.25" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnTextPrimaryBtnSm3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[9px] py-[6px] relative shrink-0" data-name="btn-text-primary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f81ea] text-[12px] whitespace-nowrap">Xem tài liệu</p>
      <MaskedIcon9 />
    </div>
  );
}

function DataTableRow4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Table Row">
      <div aria-hidden className="absolute border-[#dbdade] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Acer Nitro ProPanel ANV16-41</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px] whitespace-pre-wrap">{`Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB,  Sở hữu màn hình 16 inch chuẩn màu (100% sRGB)`}</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">-</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[115px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Thiên Long Tech</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Cái</p>
              </div>
            </div>
          </div>
          <Frame94 />
          <div className="relative shrink-0 w-[85px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22/05/2026</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Text Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnTextPrimaryBtnSm3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DataTableRow4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame75 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]">
      <div className="relative shrink-0" data-name="Data Table Cell">
        <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">23.590.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-78.57%_-9.18%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 9.66667 1.5" width="9.66667">
              <path d="M0.75 0.75H8.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 4.25L4.25 0.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 0.75L4.25 4.25" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnTextPrimaryBtnSm4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[9px] py-[6px] relative shrink-0" data-name="btn-text-primary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f81ea] text-[12px] whitespace-nowrap">Xem tài liệu</p>
      <MaskedIcon10 />
    </div>
  );
}

function DataTableRow5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Table Row">
      <div aria-hidden className="absolute border-[#dbdade] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Acer Nitro ProPanel ANV16-41</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px] whitespace-pre-wrap">{`Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB,  Sở hữu màn hình 16 inch chuẩn màu (100% sRGB)`}</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">-</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[115px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Thiên Long Tech</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Cái</p>
              </div>
            </div>
          </div>
          <Frame95 />
          <div className="relative shrink-0 w-[85px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22/05/2026</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Text Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnTextPrimaryBtnSm4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DataTableRow5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame76 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Hiển thị 1 - 5 của 5 kết quả
      </p>
    </div>
  );
}

function Form9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[14px] py-[7px] relative rounded-[2px] shrink-0" data-name="_Form">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#393740] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">10</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
          <div className="absolute inset-[-15%_-7.5%]">
            <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 11.5 6.5" width="11.5">
              <path d={svgPaths.p3d2c9380} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form8() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Form">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Form9 />
      </div>
      <div aria-hidden className="absolute border border-[#dbdade] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function FormSelect() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Form Select">
      <Form8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] h-[38px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Hiển thị</p>
      </div>
      <FormSelect />
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
      <PageLinkNext />
    </div>
  );
}

function TableFooter() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="TableFooter">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] relative size-full">
          <Container />
          <Frame11 />
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

function Frame87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <div className="relative shrink-0 w-full" data-name="Table Footer">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <TableFooter />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame87 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <Frame91 />
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
        <Header2 />
        <Frame63 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-end p-[24px] relative size-full">
          <Header />
          <Tittle />
          <Tittle1 />
          <Frame62 />
        </div>
      </div>
    </div>
  );
}

function Search1() {
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
            <Search1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function AutoLayoutFrame() {
  return (
    <div className="content-stretch flex h-full items-start justify-between relative shrink-0 w-[1440px]" data-name="Auto-layout Frame">
      <div className="drop-shadow-[0px_2px_4px_rgba(47,43,61,0.12)] h-[1140px] relative shrink-0" data-name="Menu - side bar">
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

function TimKimTaiLiuNhanVien() {
  return (
    <div className="absolute bg-[#f8f7fa] content-stretch flex h-[1140px] items-start justify-center left-[183px] min-h-[820px] overflow-clip top-[137px] w-[1440px]" data-name="Tìm kiếm tài liệu - Nhân viên">
      <AutoLayoutFrame />
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

function MaskedIcon11() {
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
      <MaskedIcon11 />
      <p className="[word-break:break-word] capitalize font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#ff4c51] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tải Lên tài liệu
      </p>
    </div>
  );
}

function Frame42() {
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
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
              <p className="leading-[1.4]">Quản trị dữ liệu</p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
                <div className="absolute inset-[-18.75%_-9.38%]">
                  <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 9.5 5.5" width="9.5">
                    <path d={svgPaths.p14416700} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
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
              <p className="leading-[1.4]">Số hóa tài liệu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e64449] text-[14px] whitespace-nowrap">
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

function Frame43() {
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
            <Frame43 />
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

function Frame44() {
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
            <Frame44 />
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

function Frame45() {
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
            <Frame45 />
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
              <Frame42 />
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

function Frame9() {
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

function Row4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-name="Row">
      <Avatar className="relative rounded-[500px] shrink-0 size-[40px]" />
      <Frame9 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Logo">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[22px] pr-[16px] py-[20px] relative size-full">
          <Row4 />
        </div>
      </div>
    </div>
  );
}

function Search2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Search">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-end leading-[0] min-w-px not-italic relative text-[18px] text-[rgba(47,43,61,0.9)]">
            <p>
              <span className="leading-[1.2] text-[rgba(47,43,61,0.7)]">Trang chủ</span>
              <span className="leading-[1.2]">{` \ Tìm kiếm sản phẩm`}</span>
            </p>
          </div>
        </div>
      </div>
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
              <Search2 />
              <ActionButton1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 w-[809px] whitespace-nowrap" data-name="Frame">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#393740] text-[24px]">Tìm kiếm sản phẩm</p>
      <p className="font-['Roboto:Italic',sans-serif] font-normal italic leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tìm kiếm nhanh trên kho tài liệu mua bán thuộc phạm vi bạn được phân công
      </p>
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Header">
      <Frame10 />
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Header">
      <Header5 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] w-[931px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4] mb-0">
          {`Laptop `}
          <br aria-hidden />
          Chip Ryzen 7<br aria-hidden />
          Ram 32gb
          <br aria-hidden />
          Rom 512gb
          <br aria-hidden />
          Màn hình 15.1 inch
        </p>
        <p className="leading-[1.4] mb-0">
          Wifi 6<br aria-hidden />
          Win 11
        </p>
        <p className="leading-[1.4]">Dell XPS</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[4.17%_11.9%_4.16%_11.91%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.8338" preserveAspectRatio="none" viewBox="0 0 10.6666 12.8338" width="10.6666">
        <g id="Group">
          <path d={svgPaths.p38635700} fill="#FF4C51" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] overflow-clip size-[14px] top-px" data-name="AI">
        <Group1 />
      </div>
    </div>
  );
}

function BtnOutlineDangerBtnSm1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[14px] py-[6px] relative shrink-0" data-name="btn-outline-danger btn-sm">
      <MaskedIcon12 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#ff4c51] text-[12px] whitespace-nowrap">AI Mode</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="x">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-7.5%]">
            <svg className="block size-full" fill="none" height="11.5" preserveAspectRatio="none" viewBox="0 0 11.5 11.5" width="11.5">
              <path d="M10.75 0.75L0.75 10.75" id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-7.5%]">
            <svg className="block size-full" fill="none" height="11.5" preserveAspectRatio="none" viewBox="0 0 11.5 11.5" width="11.5">
              <path d="M0.75 0.75L10.75 10.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[29px] relative rounded-[20px] shrink-0" data-name="Outline Button">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <BtnOutlineDangerBtnSm1 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#ff4c51] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
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

function Form11() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-bl-[4px] rounded-tl-[4px]" data-name="_Form">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start pl-[12px] pr-[8px] relative size-full">
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
          <Frame109 />
          <Frame112 />
          <Scrollbar />
        </div>
      </div>
    </div>
  );
}

function Form10() {
  return (
    <div className="bg-white content-stretch flex items-start py-[8px] relative rounded-[20px] shrink-0 w-full" data-name="Form">
      <div aria-hidden className="absolute border-[#dbdade] border-[0.5px] border-solid inset-[-0.25px] pointer-events-none rounded-[20.25px]" />
      <Form11 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Khoảng thời gian</p>
      </div>
    </div>
  );
}

function Form13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[2px]" data-name="_Form">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] py-[7px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">12 tháng gần đây</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
              <div className="absolute inset-[-15%_-7.5%]">
                <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 11.5 6.5" width="11.5">
                  <path d={svgPaths.p3d2c9380} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form12() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Form">
      <div className="content-stretch flex items-start overflow-clip py-[5px] relative rounded-[inherit] size-full">
        <Form13 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.22)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function FormWithLabel3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Form With Label">
      <Label3 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Form Select">
        <div className="content-stretch flex items-start relative size-full">
          <Form12 />
        </div>
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Row">
      <FormWithLabel3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-[rgba(47,43,61,0.9)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Khoảng giá</p>
      </div>
    </div>
  );
}

function Form15() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[2px]" data-name="_Form">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[7px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-[rgba(47,43,61,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">Từ</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
              <div className="absolute inset-[-15%_-7.5%]">
                <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 11.5 6.5" width="11.5">
                  <path d={svgPaths.p3d2c9380} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form14() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Form">
      <div className="content-stretch flex items-start overflow-clip py-[5px] relative rounded-[inherit] size-full">
        <Form15 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.22)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function FormWithLabel4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Form With Label">
      <Label4 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Form Select">
        <div className="content-stretch flex items-start relative size-full">
          <Form14 />
        </div>
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Row">
      <FormWithLabel4 />
    </div>
  );
}

function Label5() {
  return <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label" />;
}

function Form17() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[2px]" data-name="_Form">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[7px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-[rgba(47,43,61,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">Đến</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
              <div className="absolute inset-[-15%_-7.5%]">
                <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 11.5 6.5" width="11.5">
                  <path d={svgPaths.p3d2c9380} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form16() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Form">
      <div className="content-stretch flex items-start overflow-clip py-[5px] relative rounded-[inherit] size-full">
        <Form17 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.22)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function FormWithLabel5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Form With Label">
      <Label5 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Form Select">
        <div className="content-stretch flex items-start relative size-full">
          <Form16 />
        </div>
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Row">
      <FormWithLabel5 />
    </div>
  );
}

function MaskedIcon13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="rotate">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[15.76%_15.81%_15.42%_15.67%]" data-name="Shape">
          <div className="absolute inset-[-7.78%_-7.82%_-7.79%_-7.82%]">
            <svg className="block size-full" fill="none" height="11.1349" preserveAspectRatio="none" viewBox="0 0 11.0937 11.1349" width="11.0937">
              <path d={svgPaths.p2a471800} fill="#2F2B3D" fillOpacity="0.9" id="Shape" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnOutlineSecondaryBtnSm1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[14px] py-[6px] relative shrink-0" data-name="btn-outline-secondary btn-sm">
      <MaskedIcon13 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">Xóa bộ lọc</p>
    </div>
  );
}

function OutlineButton1() {
  return (
    <div className="h-[44px] relative rounded-[4px] shrink-0" data-name="Outline Button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <BtnOutlineSecondaryBtnSm1 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.4)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Tittle2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Tittle">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end px-[20px] py-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name="# Input Field">
            <div className="content-stretch flex items-start relative size-full">
              <Row5 />
            </div>
          </div>
          <div className="relative shrink-0 w-[250px]" data-name="# Input Field">
            <div className="content-stretch flex items-start relative size-full">
              <Row6 />
            </div>
          </div>
          <div className="relative shrink-0 w-[250px]" data-name="# Input Field">
            <div className="content-stretch flex items-start relative size-full">
              <Row7 />
            </div>
          </div>
          <OutlineButton1 />
        </div>
      </div>
    </div>
  );
}

function Th1() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center px-[4px] relative shrink-0 w-[46px]" data-name="th">
        <div className="overflow-clip relative shrink-0 size-[48px]" data-name="CheckCircle">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
              <g id="Vector">
                <path d={svgPaths.p2772df40} fill="#28C76F" />
                <path d={svgPaths.p2772df40} fill="#28C76F" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#393740] text-[18px] whitespace-nowrap">Đã tìm thấy 5 kết quả liên quan</p>
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Header">
      <Th1 />
      <Frame12 />
    </div>
  );
}

function Header6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex items-start p-[8px] relative size-full">
        <Header7 />
      </div>
    </div>
  );
}

function MaskedIcon14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-5px] size-[20px] top-[-1.5px]" data-name="chevron-down">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
          <div className="absolute inset-[-15%_-7.5%]">
            <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 11.5 6.5" width="11.5">
              <path d={svgPaths.p3d2c9380} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTableCell3() {
  return (
    <div className="h-full relative shrink-0 w-[115px]" data-name="Data Table Cell">
      <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Nhà cung cấp</p>
          <MaskedIcon14 />
        </div>
      </div>
    </div>
  );
}

function MaskedIcon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Masked Icon">
      <div className="absolute left-0 size-[20px] top-[0.5px]" data-name="arrow-narrow-down">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[20.83%_47.92%]" data-name="Path">
          <div className="absolute inset-[-6.43%_-40%]">
            <svg className="block size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 1.5 13.1667" width="1.5">
              <path d="M0.75 0.75V12.4167" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-1/2 right-[33.33%] top-[62.5%]" data-name="Path">
          <div className="absolute inset-[-22.5%]">
            <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 4.83333 4.83333" width="4.83333">
              <path d="M4.08333 0.75L0.75 4.08333" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-[33.33%] right-1/2 top-[62.5%]" data-name="Path">
          <div className="absolute inset-[-22.5%]">
            <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 4.83333 4.83333" width="4.83333">
              <path d="M0.75 0.75L4.08333 4.08333" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTableCell4() {
  return (
    <div className="h-full relative shrink-0 w-[100px]" data-name="Data Table Cell">
      <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#393740] text-[14px] w-[59px]">Đơn giá (VND)</p>
          <MaskedIcon15 />
        </div>
      </div>
    </div>
  );
}

function MaskedIcon16() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-5px] size-[20px] top-[-1.5px]" data-name="arrow-narrow-down">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[20.83%_47.92%]" data-name="Path">
          <div className="absolute inset-[-6.43%_-40%]">
            <svg className="block size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 1.5 13.1667" width="1.5">
              <path d="M0.75 0.75V12.4167" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-1/2 right-[33.33%] top-[62.5%]" data-name="Path">
          <div className="absolute inset-[-22.5%]">
            <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 4.83333 4.83333" width="4.83333">
              <path d="M4.08333 0.75L0.75 4.08333" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-[33.33%] right-1/2 top-[62.5%]" data-name="Path">
          <div className="absolute inset-[-22.5%]">
            <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 4.83333 4.83333" width="4.83333">
              <path d="M0.75 0.75L4.08333 4.08333" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTableCell5() {
  return (
    <div className="h-full relative shrink-0 w-[85px]" data-name="Data Table Cell">
      <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Thời điểm báo giá</p>
          <MaskedIcon16 />
        </div>
      </div>
    </div>
  );
}

function DataTableRow6() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Data Table Row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] relative size-full">
          <div className="h-full relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Tên HHDV</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Mô tả</p>
              </div>
            </div>
          </div>
          <div className="h-full relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Mã hàng hóa</p>
              </div>
            </div>
          </div>
          <DataTableCell3 />
          <div className="h-full relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#393740] text-[14px] whitespace-nowrap">Xuất xứ</p>
              </div>
            </div>
          </div>
          <div className="h-full relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#393740] text-[14px] whitespace-nowrap">ĐVT</p>
              </div>
            </div>
          </div>
          <DataTableCell4 />
          <DataTableCell5 />
          <div className="h-full relative shrink-0 w-[97px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Thao tác</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col h-[53px] items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-b-[0.5px] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
      <DataTableRow6 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]">
      <div className="relative shrink-0" data-name="Data Table Cell">
        <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap">21.990.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon17() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-78.57%_-9.18%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 9.66667 1.5" width="9.66667">
              <path d="M0.75 0.75H8.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 4.25L4.25 0.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 0.75L4.25 4.25" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnTextPrimaryBtnSm5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[9px] py-[6px] relative shrink-0" data-name="btn-text-primary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f81ea] text-[12px] whitespace-nowrap">Xem tài liệu</p>
      <MaskedIcon17 />
    </div>
  );
}

function DataTableRow7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Table Row">
      <div aria-hidden className="absolute border-[#dbdade] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#28c76f] text-[13px]">Lenovo IdeaPad Slim 5 15ARP10 OLED</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#28c76f] text-[13px]">Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB kết hợp màn hình 15.1 inch WQXGA OLED sắc nét. Máy có thiết kế vỏ nhôm mỏng nhẹ (khoảng 1.39 kg)</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#28c76f] text-[13px]">-</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[115px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#28c76f] text-[13px]">Hưng Việt</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap">Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap">Cái</p>
              </div>
            </div>
          </div>
          <Frame97 />
          <div className="relative shrink-0 w-[85px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap">22/05/2026</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Text Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnTextPrimaryBtnSm5 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DataTableRow7 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[rgba(40,199,111,0.16)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame77 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]">
      <div className="relative shrink-0" data-name="Data Table Cell">
        <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22.590.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-78.57%_-9.18%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 9.66667 1.5" width="9.66667">
              <path d="M0.75 0.75H8.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 4.25L4.25 0.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 0.75L4.25 4.25" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnTextPrimaryBtnSm6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[9px] py-[6px] relative shrink-0" data-name="btn-text-primary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f81ea] text-[12px] whitespace-nowrap">Xem tài liệu</p>
      <MaskedIcon18 />
    </div>
  );
}

function DataTableRow8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Table Row">
      <div aria-hidden className="absolute border-[#dbdade] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Lenovo IdeaPad Slim 5 15ARP10 OLED</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB kết hợp màn hình 15.1 inch WQXGA OLED sắc nét. Máy có thiết kế vỏ nhôm mỏng nhẹ (khoảng 1.39 kg)</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">-</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[115px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Hưng Việt</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Cái</p>
              </div>
            </div>
          </div>
          <Frame98 />
          <div className="relative shrink-0 w-[85px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22/05/2026</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Text Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnTextPrimaryBtnSm6 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DataTableRow8 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame78 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]">
      <div className="relative shrink-0" data-name="Data Table Cell">
        <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22.990.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-78.57%_-9.18%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 9.66667 1.5" width="9.66667">
              <path d="M0.75 0.75H8.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 4.25L4.25 0.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 0.75L4.25 4.25" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnTextPrimaryBtnSm7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[9px] py-[6px] relative shrink-0" data-name="btn-text-primary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f81ea] text-[12px] whitespace-nowrap">Xem tài liệu</p>
      <MaskedIcon19 />
    </div>
  );
}

function DataTableRow9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Table Row">
      <div aria-hidden className="absolute border-[#dbdade] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">HP Victus 16</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Laptop phiên bản cấu hình R7-7840HS hoặc R7-8845HS / RAM 32GB / SSD 512GB</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">-</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[115px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Thiên Long Tech</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Cái</p>
              </div>
            </div>
          </div>
          <Frame99 />
          <div className="relative shrink-0 w-[85px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22/05/2026</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Text Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnTextPrimaryBtnSm7 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DataTableRow9 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame79 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]">
      <div className="relative shrink-0" data-name="Data Table Cell">
        <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22.990.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon20() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-78.57%_-9.18%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 9.66667 1.5" width="9.66667">
              <path d="M0.75 0.75H8.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 4.25L4.25 0.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 0.75L4.25 4.25" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnTextPrimaryBtnSm8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[9px] py-[6px] relative shrink-0" data-name="btn-text-primary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f81ea] text-[12px] whitespace-nowrap">Xem tài liệu</p>
      <MaskedIcon20 />
    </div>
  );
}

function DataTableRow10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Table Row">
      <div aria-hidden className="absolute border-[#dbdade] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Acer Nitro ProPanel ANV16-41</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px] whitespace-pre-wrap">{`Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB,  Sở hữu màn hình 16 inch chuẩn màu (100% sRGB)`}</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">-</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[115px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Thiên Long Tech</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Cái</p>
              </div>
            </div>
          </div>
          <Frame100 />
          <div className="relative shrink-0 w-[85px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22/05/2026</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Text Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnTextPrimaryBtnSm8 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DataTableRow10 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame80 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]">
      <div className="relative shrink-0" data-name="Data Table Cell">
        <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">23.590.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon21() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-78.57%_-9.18%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 9.66667 1.5" width="9.66667">
              <path d="M0.75 0.75H8.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 4.25L4.25 0.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 0.75L4.25 4.25" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnTextPrimaryBtnSm9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[9px] py-[6px] relative shrink-0" data-name="btn-text-primary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f81ea] text-[12px] whitespace-nowrap">Xem tài liệu</p>
      <MaskedIcon21 />
    </div>
  );
}

function DataTableRow11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Table Row">
      <div aria-hidden className="absolute border-[#dbdade] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Acer Nitro ProPanel ANV16-41</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px] whitespace-pre-wrap">{`Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB,  Sở hữu màn hình 16 inch chuẩn màu (100% sRGB)`}</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">-</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[115px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Thiên Long Tech</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Cái</p>
              </div>
            </div>
          </div>
          <Frame101 />
          <div className="relative shrink-0 w-[85px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22/05/2026</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Text Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnTextPrimaryBtnSm9 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DataTableRow11 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame81 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Hiển thị 1 - 5 của 5 kết quả
      </p>
    </div>
  );
}

function Form19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[14px] py-[7px] relative rounded-[2px] shrink-0" data-name="_Form">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#393740] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">10</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
          <div className="absolute inset-[-15%_-7.5%]">
            <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 11.5 6.5" width="11.5">
              <path d={svgPaths.p3d2c9380} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form18() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Form">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Form19 />
      </div>
      <div aria-hidden className="absolute border border-[#dbdade] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function FormSelect1() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Form Select">
      <Form18 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[16px] h-[38px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Hiển thị</p>
      </div>
      <FormSelect1 />
    </div>
  );
}

function PageLinkPrev1() {
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

function PageLinkActive1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-w-[30px] p-[6px] relative rounded-[6px] shrink-0" data-name="page-link active">
      <div aria-hidden className="absolute border border-[#3f81ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#3f81ea] text-[12px] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1
      </p>
    </div>
  );
}

function PageLink1() {
  return (
    <div className="bg-[rgba(47,43,61,0.08)] content-stretch flex items-center justify-center min-w-[30px] p-[6px] relative rounded-[6px] shrink-0" data-name="page-link">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        2
      </p>
    </div>
  );
}

function PageLinkNext1() {
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

function PaginationPaginationSm1() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-center relative shrink-0" data-name="pagination pagination-sm">
      <PageLinkPrev1 />
      <PageLinkActive1 />
      <PageLink1 />
      <PageLinkNext1 />
    </div>
  );
}

function TableFooter1() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="TableFooter">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] relative size-full">
          <Container1 />
          <Frame21 />
          <div className="relative shrink-0" data-name="Pagination">
            <div className="flex flex-row items-center justify-end size-full">
              <div className="content-center flex flex-wrap gap-y-[4px] items-center justify-end relative size-full">
                <PaginationPaginationSm1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <div className="relative shrink-0 w-full" data-name="Table Footer">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <TableFooter1 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame88 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <Frame96 />
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
        <Header6 />
        <Frame65 />
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-end p-[24px] relative size-full">
          <Header4 />
          <Form10 />
          <Tittle2 />
          <Frame64 />
        </div>
      </div>
    </div>
  );
}

function Search3() {
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
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Wrapper">
      <Nav1 />
      <Body1 />
      <div className="drop-shadow-[0px_-4px_5px_rgba(47,43,61,0.24)] relative shrink-0 w-full" data-name="# Footer">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center py-[16px] relative size-full">
            <Search3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function AutoLayoutFrame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative self-stretch shrink-0 w-[1440px]" data-name="Auto-layout Frame">
      <div className="drop-shadow-[0px_2px_4px_rgba(47,43,61,0.12)] h-[1192px] relative shrink-0" data-name="Menu - side bar">
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

function TimKimTaiLiuNhanVien1() {
  return (
    <div className="absolute bg-[#f8f7fa] content-stretch flex items-start justify-center left-[1693px] min-h-[820px] overflow-clip top-[124px] w-[1440px]" data-name="Tìm kiếm tài liệu - Nhân viên">
      <AutoLayoutFrame1 />
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

function MaskedIcon22() {
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
      <MaskedIcon22 />
      <p className="[word-break:break-word] capitalize font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#ff4c51] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tải Lên tài liệu
      </p>
    </div>
  );
}

function Frame46() {
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
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
              <p className="leading-[1.4]">Quản trị dữ liệu</p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Path" />
              </svg>
              <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
                <div className="absolute inset-[-18.75%_-9.38%]">
                  <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 9.5 5.5" width="9.5">
                    <path d={svgPaths.p14416700} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
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
              <p className="leading-[1.4]">Số hóa tài liệu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e64449] text-[14px] whitespace-nowrap">
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

function Frame47() {
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
            <Frame47 />
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

function Frame48() {
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
            <Frame48 />
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

function Frame49() {
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
            <Frame49 />
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
              <Frame46 />
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

function Frame22() {
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

function Row8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-name="Row">
      <Avatar className="relative rounded-[500px] shrink-0 size-[40px]" />
      <Frame22 />
    </div>
  );
}

function Logo5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Logo">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[22px] pr-[16px] py-[20px] relative size-full">
          <Row8 />
        </div>
      </div>
    </div>
  );
}

function Search4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Search">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-end leading-[0] min-w-px not-italic relative text-[18px] text-[rgba(47,43,61,0.9)]">
            <p>
              <span className="leading-[1.2] text-[rgba(47,43,61,0.7)]">Trang chủ</span>
              <span className="leading-[1.2]">{` \ Tìm kiếm sản phẩm`}</span>
            </p>
          </div>
        </div>
      </div>
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
              <Search4 />
              <ActionButton2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 w-[809px] whitespace-nowrap" data-name="Frame">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#393740] text-[24px]">Tìm kiếm sản phẩm</p>
      <p className="font-['Roboto:Italic',sans-serif] font-normal italic leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.4)] tracking-[0.4px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tìm kiếm nhanh trên kho tài liệu mua bán thuộc phạm vi bạn được phân công
      </p>
    </div>
  );
}

function Header9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Header">
      <Frame23 />
    </div>
  );
}

function Header8() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Header">
      <Header9 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[4.17%_11.9%_4.16%_11.91%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.8338" preserveAspectRatio="none" viewBox="0 0 10.6666 12.8338" width="10.6666">
        <g id="Group">
          <path d={svgPaths.p38635700} fill="#FF4C51" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon23() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] overflow-clip size-[14px] top-px" data-name="AI">
        <Group2 />
      </div>
    </div>
  );
}

function BtnOutlineDangerBtnSm2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[14px] py-[6px] relative shrink-0" data-name="btn-outline-danger btn-sm">
      <MaskedIcon23 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#ff4c51] text-[12px] whitespace-nowrap">AI Mode</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
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
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[12px] text-[rgba(47,43,61,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Nhập từ khóa tìm kiếm</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="x">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-7.5%]">
            <svg className="block size-full" fill="none" height="11.5" preserveAspectRatio="none" viewBox="0 0 11.5 11.5" width="11.5">
              <path d="M10.75 0.75L0.75 10.75" id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-7.5%]">
            <svg className="block size-full" fill="none" height="11.5" preserveAspectRatio="none" viewBox="0 0 11.5 11.5" width="11.5">
              <path d="M0.75 0.75L10.75 10.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[29px] relative rounded-[20px] shrink-0" data-name="Outline Button">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <BtnOutlineDangerBtnSm2 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#ff4c51] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative size-full">
        <Frame108 />
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[16px]" data-name="clock">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%]" data-name="Oval">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
              <circle cx="6.75" cy="6.75" id="Oval" r="6" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-1/2 right-[37.5%] top-[29.17%]" data-name="Path">
          <div className="absolute inset-[-14.06%_-37.5%]">
            <svg className="block size-full" fill="none" height="6.83333" preserveAspectRatio="none" viewBox="0 0 3.5 6.83333" width="3.5">
              <path d={svgPaths.p21e70000} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[12px] text-[rgba(47,43,61,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Ryzen 7 7735HS</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="x">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M8.75 0.75L0.75 8.75" id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M0.75 0.75L8.75 8.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[rgba(47,43,61,0.12)] relative rounded-br-[20px] rounded-tr-[20px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative size-full">
        <Frame110 />
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[16px]" data-name="clock">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%]" data-name="Oval">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
              <circle cx="6.75" cy="6.75" id="Oval" r="6" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-1/2 right-[37.5%] top-[29.17%]" data-name="Path">
          <div className="absolute inset-[-14.06%_-37.5%]">
            <svg className="block size-full" fill="none" height="6.83333" preserveAspectRatio="none" viewBox="0 0 3.5 6.83333" width="3.5">
              <path d={svgPaths.p21e70000} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[12px] text-[rgba(47,43,61,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">RAM 32GB</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="x">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M8.75 0.75L0.75 8.75" id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M0.75 0.75L8.75 8.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative size-full">
        <Frame113 />
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[16px]" data-name="clock">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%]" data-name="Oval">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
              <circle cx="6.75" cy="6.75" id="Oval" r="6" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-1/2 right-[37.5%] top-[29.17%]" data-name="Path">
          <div className="absolute inset-[-14.06%_-37.5%]">
            <svg className="block size-full" fill="none" height="6.83333" preserveAspectRatio="none" viewBox="0 0 3.5 6.83333" width="3.5">
              <path d={svgPaths.p21e70000} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[12px] text-[rgba(47,43,61,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">RAM 32GB</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="x">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M8.75 0.75L0.75 8.75" id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M0.75 0.75L8.75 8.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative size-full">
        <Frame114 />
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[16px]" data-name="clock">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%]" data-name="Oval">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
              <circle cx="6.75" cy="6.75" id="Oval" r="6" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-1/2 right-[37.5%] top-[29.17%]" data-name="Path">
          <div className="absolute inset-[-14.06%_-37.5%]">
            <svg className="block size-full" fill="none" height="6.83333" preserveAspectRatio="none" viewBox="0 0 3.5 6.83333" width="3.5">
              <path d={svgPaths.p21e70000} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[12px] text-[rgba(47,43,61,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">SSD 512GB</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="x">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M8.75 0.75L0.75 8.75" id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M0.75 0.75L8.75 8.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative size-full">
        <Frame115 />
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[16px]" data-name="clock">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%]" data-name="Oval">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
              <circle cx="6.75" cy="6.75" id="Oval" r="6" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-1/2 right-[37.5%] top-[29.17%]" data-name="Path">
          <div className="absolute inset-[-14.06%_-37.5%]">
            <svg className="block size-full" fill="none" height="6.83333" preserveAspectRatio="none" viewBox="0 0 3.5 6.83333" width="3.5">
              <path d={svgPaths.p21e70000} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[12px] text-[rgba(47,43,61,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">màn hình 15.1 inch WQXGA OLED</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="x">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M8.75 0.75L0.75 8.75" id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M0.75 0.75L8.75 8.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative size-full">
        <Frame116 />
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[16px]" data-name="clock">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%]" data-name="Oval">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
              <circle cx="6.75" cy="6.75" id="Oval" r="6" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-1/2 right-[37.5%] top-[29.17%]" data-name="Path">
          <div className="absolute inset-[-14.06%_-37.5%]">
            <svg className="block size-full" fill="none" height="6.83333" preserveAspectRatio="none" viewBox="0 0 3.5 6.83333" width="3.5">
              <path d={svgPaths.p21e70000} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[12px] text-[rgba(47,43,61,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">vỏ nhôm</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="x">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M8.75 0.75L0.75 8.75" id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M0.75 0.75L8.75 8.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative size-full">
        <Frame117 />
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[16px]" data-name="clock">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%]" data-name="Oval">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
              <circle cx="6.75" cy="6.75" id="Oval" r="6" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-1/2 right-[37.5%] top-[29.17%]" data-name="Path">
          <div className="absolute inset-[-14.06%_-37.5%]">
            <svg className="block size-full" fill="none" height="6.83333" preserveAspectRatio="none" viewBox="0 0 3.5 6.83333" width="3.5">
              <path d={svgPaths.p21e70000} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[12px] text-[rgba(47,43,61,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Laptop Dell</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="x">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M8.75 0.75L0.75 8.75" id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M0.75 0.75L8.75 8.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative size-full">
        <Frame118 />
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[16px]" data-name="clock">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%]" data-name="Oval">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
              <circle cx="6.75" cy="6.75" id="Oval" r="6" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-1/2 right-[37.5%] top-[29.17%]" data-name="Path">
          <div className="absolute inset-[-14.06%_-37.5%]">
            <svg className="block size-full" fill="none" height="6.83333" preserveAspectRatio="none" viewBox="0 0 3.5 6.83333" width="3.5">
              <path d={svgPaths.p21e70000} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[12px] text-[rgba(47,43,61,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Dell Xps</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="x">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M8.75 0.75L0.75 8.75" id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-1/4" data-name="Path">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
              <path d="M0.75 0.75L8.75 8.75" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative size-full">
        <Frame119 />
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.12)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative size-full">
        <Frame24 />
        <Frame25 />
        <Frame55 />
        <Frame56 />
        <Frame57 />
        <Frame58 />
        <Frame59 />
        <Frame60 />
        <Frame66 />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Khoảng thời gian</p>
      </div>
    </div>
  );
}

function Form21() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[2px]" data-name="_Form">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] py-[7px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">12 tháng gần đây</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
              <div className="absolute inset-[-15%_-7.5%]">
                <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 11.5 6.5" width="11.5">
                  <path d={svgPaths.p3d2c9380} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form20() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Form">
      <div className="content-stretch flex items-start overflow-clip py-[5px] relative rounded-[inherit] size-full">
        <Form21 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.22)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function FormWithLabel6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Form With Label">
      <Label6 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Form Select">
        <div className="content-stretch flex items-start relative size-full">
          <Form20 />
        </div>
      </div>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Row">
      <FormWithLabel6 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-[rgba(47,43,61,0.9)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Khoảng giá</p>
      </div>
    </div>
  );
}

function Form23() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[2px]" data-name="_Form">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[7px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-[rgba(47,43,61,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">Từ</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
              <div className="absolute inset-[-15%_-7.5%]">
                <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 11.5 6.5" width="11.5">
                  <path d={svgPaths.p3d2c9380} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form22() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Form">
      <div className="content-stretch flex items-start overflow-clip py-[5px] relative rounded-[inherit] size-full">
        <Form23 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.22)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function FormWithLabel7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Form With Label">
      <Label7 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Form Select">
        <div className="content-stretch flex items-start relative size-full">
          <Form22 />
        </div>
      </div>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Row">
      <FormWithLabel7 />
    </div>
  );
}

function Label8() {
  return <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label" />;
}

function Form25() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[2px]" data-name="_Form">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[7px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-[rgba(47,43,61,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.4]">Đến</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g id="Path" />
            </svg>
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
              <div className="absolute inset-[-15%_-7.5%]">
                <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 11.5 6.5" width="11.5">
                  <path d={svgPaths.p3d2c9380} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form24() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Form">
      <div className="content-stretch flex items-start overflow-clip py-[5px] relative rounded-[inherit] size-full">
        <Form25 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.22)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function FormWithLabel8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Form With Label">
      <Label8 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Form Select">
        <div className="content-stretch flex items-start relative size-full">
          <Form24 />
        </div>
      </div>
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Row">
      <FormWithLabel8 />
    </div>
  );
}

function MaskedIcon24() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="rotate">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[15.76%_15.81%_15.42%_15.67%]" data-name="Shape">
          <div className="absolute inset-[-7.78%_-7.82%_-7.79%_-7.82%]">
            <svg className="block size-full" fill="none" height="11.1349" preserveAspectRatio="none" viewBox="0 0 11.0937 11.1349" width="11.0937">
              <path d={svgPaths.p2a471800} fill="#2F2B3D" fillOpacity="0.9" id="Shape" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnOutlineSecondaryBtnSm2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[14px] py-[6px] relative shrink-0" data-name="btn-outline-secondary btn-sm">
      <MaskedIcon24 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap">Xóa bộ lọc</p>
    </div>
  );
}

function OutlineButton2() {
  return (
    <div className="h-[44px] relative rounded-[4px] shrink-0" data-name="Outline Button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <BtnOutlineSecondaryBtnSm2 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.4)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Tittle3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Tittle">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end px-[20px] py-[8px] relative size-full">
          <div className="flex-[1_0_0] min-w-px relative" data-name="# Input Field">
            <div className="content-stretch flex items-start relative size-full">
              <Row9 />
            </div>
          </div>
          <div className="relative shrink-0 w-[250px]" data-name="# Input Field">
            <div className="content-stretch flex items-start relative size-full">
              <Row10 />
            </div>
          </div>
          <div className="relative shrink-0 w-[250px]" data-name="# Input Field">
            <div className="content-stretch flex items-start relative size-full">
              <Row11 />
            </div>
          </div>
          <OutlineButton2 />
        </div>
      </div>
    </div>
  );
}

function Th2() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-center px-[4px] relative shrink-0 w-[46px]" data-name="th">
        <div className="overflow-clip relative shrink-0 size-[48px]" data-name="CheckCircle">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
              <g id="Vector">
                <path d={svgPaths.p2772df40} fill="#28C76F" />
                <path d={svgPaths.p2772df40} fill="#28C76F" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#393740] text-[18px] whitespace-nowrap">Đã tìm thấy 5 kết quả liên quan</p>
    </div>
  );
}

function Header11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Header">
      <Th2 />
      <Frame26 />
    </div>
  );
}

function Header10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex items-start p-[8px] relative size-full">
        <Header11 />
      </div>
    </div>
  );
}

function MaskedIcon25() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-5px] size-[20px] top-[-1.5px]" data-name="chevron-down">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
          <div className="absolute inset-[-15%_-7.5%]">
            <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 11.5 6.5" width="11.5">
              <path d={svgPaths.p3d2c9380} id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTableCell6() {
  return (
    <div className="h-full relative shrink-0 w-[115px]" data-name="Data Table Cell">
      <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Nhà cung cấp</p>
          <MaskedIcon25 />
        </div>
      </div>
    </div>
  );
}

function MaskedIcon26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Masked Icon">
      <div className="absolute left-0 size-[20px] top-[0.5px]" data-name="arrow-narrow-down">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[20.83%_47.92%]" data-name="Path">
          <div className="absolute inset-[-6.43%_-40%]">
            <svg className="block size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 1.5 13.1667" width="1.5">
              <path d="M0.75 0.75V12.4167" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-1/2 right-[33.33%] top-[62.5%]" data-name="Path">
          <div className="absolute inset-[-22.5%]">
            <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 4.83333 4.83333" width="4.83333">
              <path d="M4.08333 0.75L0.75 4.08333" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-[33.33%] right-1/2 top-[62.5%]" data-name="Path">
          <div className="absolute inset-[-22.5%]">
            <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 4.83333 4.83333" width="4.83333">
              <path d="M0.75 0.75L4.08333 4.08333" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTableCell7() {
  return (
    <div className="h-full relative shrink-0 w-[100px]" data-name="Data Table Cell">
      <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#393740] text-[14px] w-[59px]">Đơn giá (VND)</p>
          <MaskedIcon26 />
        </div>
      </div>
    </div>
  );
}

function MaskedIcon27() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-5px] size-[20px] top-[-1.5px]" data-name="arrow-narrow-down">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[20.83%_47.92%]" data-name="Path">
          <div className="absolute inset-[-6.43%_-40%]">
            <svg className="block size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 1.5 13.1667" width="1.5">
              <path d="M0.75 0.75V12.4167" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-1/2 right-[33.33%] top-[62.5%]" data-name="Path">
          <div className="absolute inset-[-22.5%]">
            <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 4.83333 4.83333" width="4.83333">
              <path d="M4.08333 0.75L0.75 4.08333" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-[33.33%] right-1/2 top-[62.5%]" data-name="Path">
          <div className="absolute inset-[-22.5%]">
            <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 4.83333 4.83333" width="4.83333">
              <path d="M0.75 0.75L4.08333 4.08333" id="Path" stroke="#2F2B3D" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTableCell8() {
  return (
    <div className="h-full relative shrink-0 w-[85px]" data-name="Data Table Cell">
      <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Thời điểm báo giá</p>
          <MaskedIcon27 />
        </div>
      </div>
    </div>
  );
}

function DataTableRow12() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Data Table Row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] relative size-full">
          <div className="h-full relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Tên HHDV</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Mô tả</p>
              </div>
            </div>
          </div>
          <div className="h-full relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Mã hàng hóa</p>
              </div>
            </div>
          </div>
          <DataTableCell6 />
          <div className="h-full relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#393740] text-[14px] whitespace-nowrap">Xuất xứ</p>
              </div>
            </div>
          </div>
          <div className="h-full relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#393740] text-[14px] whitespace-nowrap">ĐVT</p>
              </div>
            </div>
          </div>
          <DataTableCell7 />
          <DataTableCell8 />
          <div className="h-full relative shrink-0 w-[97px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#393740] text-[14px]">Thao tác</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col h-[53px] items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-b-[0.5px] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
      <DataTableRow12 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]">
      <div className="relative shrink-0" data-name="Data Table Cell">
        <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap">21.990.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon28() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-78.57%_-9.18%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 9.66667 1.5" width="9.66667">
              <path d="M0.75 0.75H8.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 4.25L4.25 0.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 0.75L4.25 4.25" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnTextPrimaryBtnSm10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[9px] py-[6px] relative shrink-0" data-name="btn-text-primary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f81ea] text-[12px] whitespace-nowrap">Xem tài liệu</p>
      <MaskedIcon28 />
    </div>
  );
}

function DataTableRow13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Table Row">
      <div aria-hidden className="absolute border-[#dbdade] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#28c76f] text-[13px]">Lenovo IdeaPad Slim 5 15ARP10 OLED</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#28c76f] text-[13px]">Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB kết hợp màn hình 15.1 inch WQXGA OLED sắc nét. Máy có thiết kế vỏ nhôm mỏng nhẹ (khoảng 1.39 kg)</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#28c76f] text-[13px]">-</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[115px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#28c76f] text-[13px]">Hưng Việt</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap">Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap">Cái</p>
              </div>
            </div>
          </div>
          <Frame103 />
          <div className="relative shrink-0 w-[85px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#28c76f] text-[13px] whitespace-nowrap">22/05/2026</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Text Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnTextPrimaryBtnSm10 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DataTableRow13 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[rgba(40,199,111,0.16)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame82 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]">
      <div className="relative shrink-0" data-name="Data Table Cell">
        <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22.590.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon29() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-78.57%_-9.18%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 9.66667 1.5" width="9.66667">
              <path d="M0.75 0.75H8.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 4.25L4.25 0.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 0.75L4.25 4.25" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnTextPrimaryBtnSm11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[9px] py-[6px] relative shrink-0" data-name="btn-text-primary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f81ea] text-[12px] whitespace-nowrap">Xem tài liệu</p>
      <MaskedIcon29 />
    </div>
  );
}

function DataTableRow14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Table Row">
      <div aria-hidden className="absolute border-[#dbdade] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Lenovo IdeaPad Slim 5 15ARP10 OLED</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB kết hợp màn hình 15.1 inch WQXGA OLED sắc nét. Máy có thiết kế vỏ nhôm mỏng nhẹ (khoảng 1.39 kg)</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">-</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[115px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Hưng Việt</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Cái</p>
              </div>
            </div>
          </div>
          <Frame104 />
          <div className="relative shrink-0 w-[85px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22/05/2026</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Text Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnTextPrimaryBtnSm11 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DataTableRow14 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame83 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]">
      <div className="relative shrink-0" data-name="Data Table Cell">
        <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22.990.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon30() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-78.57%_-9.18%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 9.66667 1.5" width="9.66667">
              <path d="M0.75 0.75H8.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 4.25L4.25 0.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 0.75L4.25 4.25" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnTextPrimaryBtnSm12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[9px] py-[6px] relative shrink-0" data-name="btn-text-primary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f81ea] text-[12px] whitespace-nowrap">Xem tài liệu</p>
      <MaskedIcon30 />
    </div>
  );
}

function DataTableRow15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Table Row">
      <div aria-hidden className="absolute border-[#dbdade] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">HP Victus 16</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Laptop phiên bản cấu hình R7-7840HS hoặc R7-8845HS / RAM 32GB / SSD 512GB</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">-</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[115px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Thiên Long Tech</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Cái</p>
              </div>
            </div>
          </div>
          <Frame105 />
          <div className="relative shrink-0 w-[85px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22/05/2026</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Text Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnTextPrimaryBtnSm12 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DataTableRow15 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame84 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]">
      <div className="relative shrink-0" data-name="Data Table Cell">
        <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22.990.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon31() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-78.57%_-9.18%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 9.66667 1.5" width="9.66667">
              <path d="M0.75 0.75H8.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 4.25L4.25 0.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 0.75L4.25 4.25" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnTextPrimaryBtnSm13() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[9px] py-[6px] relative shrink-0" data-name="btn-text-primary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f81ea] text-[12px] whitespace-nowrap">Xem tài liệu</p>
      <MaskedIcon31 />
    </div>
  );
}

function DataTableRow16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Table Row">
      <div aria-hidden className="absolute border-[#dbdade] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Acer Nitro ProPanel ANV16-41</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px] whitespace-pre-wrap">{`Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB,  Sở hữu màn hình 16 inch chuẩn màu (100% sRGB)`}</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">-</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[115px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Thiên Long Tech</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Cái</p>
              </div>
            </div>
          </div>
          <Frame106 />
          <div className="relative shrink-0 w-[85px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22/05/2026</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Text Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnTextPrimaryBtnSm13 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DataTableRow16 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame85 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]">
      <div className="relative shrink-0" data-name="Data Table Cell">
        <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">23.590.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon32() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] size-[14px] top-px" data-name="arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[47.92%_20.83%]" data-name="Path">
          <div className="absolute inset-[-78.57%_-9.18%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 9.66667 1.5" width="9.66667">
              <path d="M0.75 0.75H8.91667" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 4.25L4.25 0.75" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Path">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <path d="M0.75 0.75L4.25 4.25" id="Path" stroke="#3F81EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnTextPrimaryBtnSm14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[9px] py-[6px] relative shrink-0" data-name="btn-text-primary btn-sm">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f81ea] text-[12px] whitespace-nowrap">Xem tài liệu</p>
      <MaskedIcon32 />
    </div>
  );
}

function DataTableRow17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Table Row">
      <div aria-hidden className="absolute border-[#dbdade] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 w-[130px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Acer Nitro ProPanel ANV16-41</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px] whitespace-pre-wrap">{`Laptop sử dụng chip Ryzen 7 7735HS, RAM 32GB, SSD 512GB,  Sở hữu màn hình 16 inch chuẩn màu (100% sRGB)`}</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[100px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">-</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[115px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#393740] text-[13px]">Thiên Long Tech</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[70px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-[60px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">Cái</p>
              </div>
            </div>
          </div>
          <Frame107 />
          <div className="relative shrink-0 w-[85px]" data-name="Data Table Cell">
            <div aria-hidden className="absolute border-0 border-[#dbdade] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#393740] text-[13px] whitespace-nowrap">22/05/2026</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Text Button">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <BtnTextPrimaryBtnSm14 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DataTableRow17 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame86 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Hiển thị 1 - 5 của 5 kết quả
      </p>
    </div>
  );
}

function Form27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[14px] py-[7px] relative rounded-[2px] shrink-0" data-name="_Form">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#393740] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">10</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Path" />
        </svg>
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Path">
          <div className="absolute inset-[-15%_-7.5%]">
            <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 11.5 6.5" width="11.5">
              <path d={svgPaths.p3d2c9380} id="Path" stroke="#393740" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form26() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Form">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Form27 />
      </div>
      <div aria-hidden className="absolute border border-[#dbdade] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function FormSelect2() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Form Select">
      <Form26 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[16px] h-[38px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.4]">Hiển thị</p>
      </div>
      <FormSelect2 />
    </div>
  );
}

function PageLinkPrev2() {
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

function PageLinkActive2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-w-[30px] p-[6px] relative rounded-[6px] shrink-0" data-name="page-link active">
      <div aria-hidden className="absolute border border-[#3f81ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#3f81ea] text-[12px] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1
      </p>
    </div>
  );
}

function PageLink2() {
  return (
    <div className="bg-[rgba(47,43,61,0.08)] content-stretch flex items-center justify-center min-w-[30px] p-[6px] relative rounded-[6px] shrink-0" data-name="page-link">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-[rgba(47,43,61,0.9)] text-center tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        2
      </p>
    </div>
  );
}

function PageLinkNext2() {
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

function PaginationPaginationSm2() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-center relative shrink-0" data-name="pagination pagination-sm">
      <PageLinkPrev2 />
      <PageLinkActive2 />
      <PageLink2 />
      <PageLinkNext2 />
    </div>
  );
}

function TableFooter2() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="TableFooter">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] relative size-full">
          <Container2 />
          <Frame34 />
          <div className="relative shrink-0" data-name="Pagination">
            <div className="flex flex-row items-center justify-end size-full">
              <div className="content-center flex flex-wrap gap-y-[4px] items-center justify-end relative size-full">
                <PaginationPaginationSm2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
      <div className="relative shrink-0 w-full" data-name="Table Footer">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <TableFooter2 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame89 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame27 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <Frame102 />
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
        <Header10 />
        <Frame68 />
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-end p-[24px] relative size-full">
          <Header8 />
          <Frame111 />
          <Tittle3 />
          <Frame67 />
        </div>
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

function Wrapper2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Wrapper">
      <Nav2 />
      <Body2 />
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

function AutoLayoutFrame2() {
  return (
    <div className="content-stretch flex items-start justify-between relative self-stretch shrink-0 w-[1440px]" data-name="Auto-layout Frame">
      <div className="drop-shadow-[0px_2px_4px_rgba(47,43,61,0.12)] h-[1370px] relative shrink-0" data-name="Menu - side bar">
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

function TimKimTaiLiuNhanVien2() {
  return (
    <div className="absolute bg-[#f8f7fa] content-stretch flex items-start justify-center left-[3219px] min-h-[820px] overflow-clip top-[126px] w-[1440px]" data-name="Tìm kiếm tài liệu - Nhân viên">
      <AutoLayoutFrame2 />
    </div>
  );
}

function Logo6() {
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

function MaskedIcon33() {
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

function BtnOutlineDanger3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[20px] py-[8px] relative shrink-0" data-name="btn-outline-danger">
      <MaskedIcon33 />
      <p className="[word-break:break-word] capitalize font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#ff4c51] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tải Lên tài liệu
      </p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Báo cáo tổng quan</p>
      </div>
    </div>
  );
}

function ChipBgDanger3() {
  return (
    <div className="bg-[#ff4c51] content-stretch flex gap-[4px] items-center justify-center min-w-[24px] px-[10px] py-[2px] relative rounded-[500px] shrink-0" data-name="chip bg-danger">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[1.4]">5</p>
      </div>
    </div>
  );
}

function ListSubheader12() {
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

function SectionSeparator12() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader12 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Quản trị dữ liệu</p>
      </div>
    </div>
  );
}

function Applications12() {
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
            <Frame51 />
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
              <p className="leading-[1.4]">Số hóa tài liệu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[36px] pr-[12px] py-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e64449] text-[14px] whitespace-nowrap">
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

function PhanHLuTr6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ lưu trữ">
      <SectionSeparator12 />
      <Applications12 />
    </div>
  );
}

function ListSubheader13() {
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

function SectionSeparator13() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader13 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Quản trị gói thầu</p>
      </div>
    </div>
  );
}

function Applications13() {
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
            <Frame52 />
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

function PhanHLuTr7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ lưu trữ">
      <SectionSeparator13 />
      <Applications13 />
    </div>
  );
}

function ListSubheader14() {
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

function SectionSeparator14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader14 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">Báo cáo tổng hợp</p>
      </div>
    </div>
  );
}

function Applications14() {
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
            <Frame53 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhanHDuThu6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ đấu thầu">
      <SectionSeparator14 />
      <Applications14 />
    </div>
  );
}

function ListSubheader15() {
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

function SectionSeparator15() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-[236px]" data-name="Section Separator">
      <ListSubheader15 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(47,43,61,0.9)]">
        <p className="leading-[1.4]">{`Tài khoản & Cài đặt`}</p>
      </div>
    </div>
  );
}

function Applications15() {
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
            <Frame54 />
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

function PhanHDuThu7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Phân hệ đấu thầu">
      <SectionSeparator15 />
      <Applications15 />
    </div>
  );
}

function MenuDrawer3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative" data-name="Menu Drawer">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative size-full">
        <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu Components">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center pt-[14px] relative size-full">
              <div className="flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Outline Button">
                <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                    <BtnOutlineDanger3 />
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
              <Frame50 />
              <div className="min-w-[24px] relative shrink-0" data-name="Chip">
                <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] relative size-full">
                    <ChipBgDanger3 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PhanHLuTr6 />
        <PhanHLuTr7 />
        <PhanHDuThu6 />
        <PhanHDuThu7 />
      </div>
    </div>
  );
}

function Frame35() {
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

function Row12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-name="Row">
      <Avatar className="relative rounded-[500px] shrink-0 size-[40px]" />
      <Frame35 />
    </div>
  );
}

function Logo7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Logo">
      <div aria-hidden className="absolute border-[rgba(47,43,61,0.12)] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[22px] pr-[16px] py-[20px] relative size-full">
          <Row12 />
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
              <span className="leading-[1.2]">{` \ Tìm kiếm sản phẩm`}</span>
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

function Search7() {
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

function Badge3() {
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

function UnstyledIconButton3() {
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
      <Badge3 />
    </div>
  );
}

function IconButton3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[48px]" data-name="IconButton">
      <UnstyledIconButton3 />
    </div>
  );
}

function Border3() {
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

function WBadge3() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="wBadge">
      <div className="absolute inset-0 rounded-[500px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[500px] size-full" src={imgVariantCircleBadgeFalseIconFalseImageTrue} />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="relative size-full" />
        </div>
      </div>
      <Border3 />
    </div>
  );
}

function ActionButton3() {
  return (
    <div className="content-stretch flex items-center justify-end pr-[24px] relative shrink-0" data-name="Action Button">
      <IconButton3 />
      <div className="relative shrink-0 size-[38px]" data-name="Avatar">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <WBadge3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav">
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[24px] relative size-full">
        <div className="backdrop-blur-[10px] bg-white relative rounded-bl-[10px] rounded-br-[10px] shadow-[0px_4px_10px_-4px_rgba(47,43,61,0.24)] shrink-0 w-full" data-name="# Vertical Navbar Scroll">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center py-[12px] relative size-full">
              <Search6 />
              <Search7 />
              <ActionButton3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[809px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#393740] text-[24px] whitespace-nowrap">Chi tiết tài liệu</p>
    </div>
  );
}

function Header13() {
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
      <Frame36 />
    </div>
  );
}

function Header12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex items-start px-[24px] py-[8px] relative size-full">
        <Header13 />
      </div>
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

function PageLinkNext3() {
  return (
    <div className="bg-[rgba(47,43,61,0.08)] content-stretch flex items-center justify-center p-[7px] relative rounded-[6px] shrink-0 size-[24px]" data-name="page-link next">
      <Plus className="relative shrink-0 size-[16px]" />
    </div>
  );
}

function PaginationPaginationSm3() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-center relative shrink-0" data-name="pagination pagination-sm">
      <PageLinkPrev3 />
      <PageLinkPrev4 />
      <PageLink3 />
      <PageLinkNext3 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-center flex flex-wrap gap-y-[4px] items-center justify-end relative shrink-0" data-name="Pagination">
      <PaginationPaginationSm3 />
    </div>
  );
}

function ChipOutline3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[24px] px-[10px] py-[2px] relative rounded-[4px] shrink-0" data-name="chip-outline">
      <div aria-hidden className="absolute border border-[rgba(47,43,61,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[12px] text-[rgba(47,43,61,0.9)] text-center">
        <p className="leading-[1.4]">1</p>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <ChipOutline3 />
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

function Frame71() {
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

function Frame69() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full">
      <Pagination />
      <Frame70 />
      <Frame71 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[6px] w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[24px] relative size-full">
          <Frame69 />
          <div className="h-[1146px] relative shrink-0 w-[919px]" data-name="image 7">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTable() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative w-full" data-name="Data Table">
      <Frame37 />
    </div>
  );
}

function Table() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Table">
      <div className="content-stretch flex flex-col gap-[16px] items-start py-[24px] relative size-full">
        <Header12 />
        <DataTable />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_9px_rgba(75,70,92,0.1)] flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-[6px] w-full" data-name="Card">
      <Table />
    </div>
  );
}

function Body3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Body">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Card />
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

function Wrapper3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Wrapper">
      <Nav3 />
      <Body3 />
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

function AutoLayoutFrame3() {
  return (
    <div className="content-stretch flex h-[1490px] items-start justify-between relative shrink-0 w-[1440px]" data-name="Auto-layout Frame">
      <div className="drop-shadow-[0px_2px_4px_rgba(47,43,61,0.12)] h-[1490px] relative shrink-0" data-name="Menu - side bar">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <Logo6 />
            <MenuDrawer3 />
            <Logo7 />
          </div>
        </div>
      </div>
      <Wrapper3 />
    </div>
  );
}

function PhongToTaiLiu() {
  return (
    <div className="absolute bg-[#f8f7fa] content-stretch flex flex-col h-[1490px] items-center left-[4774px] min-h-[820px] overflow-clip top-[129px] w-[1440px]" data-name="Phóng to tài liệu">
      <AutoLayoutFrame3 />
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
    <div className="absolute h-[1172px] left-[6084px] rounded-br-[8px] rounded-tr-[8px] top-[371px] w-[15px]" data-name="Scrollbar">
      <div aria-hidden className="absolute bg-[#fafafa] inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <Thumb />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_0px_0px_0px_#e8e8e8]" />
    </div>
  );
}

export default function TimKimTaiLiu() {
  return (
    <div className="bg-[#6e6a6a] relative size-full" data-name="Tìm kiếm tài liệu">
      <TimKimTaiLiuNhanVien />
      <TimKimTaiLiuNhanVien1 />
      <TimKimTaiLiuNhanVien2 />
      <PhongToTaiLiu />
      <Scrollbar1 />
    </div>
  );
}