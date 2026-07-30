interface Region {
  page: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

/** A mocked document page render with an overlay highlight for the selected region. */
export function DocumentCanvas({
  zoom,
  page,
  region,
}: {
  zoom: number;
  page: number;
  region: Region | null;
}) {
  return (
    <div
      className="relative mx-auto bg-white shadow-md"
      style={{ width: `${(zoom / 100) * 620}px`, aspectRatio: "1 / 1.414" }}
    >
      <div className="p-8 text-[10px] leading-relaxed text-slate-700">
        <div className="mb-4 flex justify-between text-center">
          <div>
            <p className="font-bold">CÔNG TY TNHH MTV AN NINH MẠNG VIETTEL</p>
            <p>Số: {`TT-2025-041`}</p>
          </div>
          <div>
            <p className="font-bold">CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
            <p>Độc lập - Tự do - Hạnh phúc</p>
          </div>
        </div>
        <p className="mb-3 text-center font-bold">TỜ TRÌNH</p>
        <p className="mb-3 text-center italic">V/v: Đề nghị mua sắm thiết bị</p>
        <p className="mb-2">Kính gửi: Ban Giám đốc Công ty</p>
        <p className="mb-3">
          Căn cứ nhu cầu thực tế, phòng Hành chính - Quản trị kính trình Ban Giám đốc phê duyệt mua sắm
          thiết bị với các nội dung như sau:
        </p>
        <table className="mb-3 w-full border-collapse text-[9px]">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 p-1">STT</th>
              <th className="border border-slate-300 p-1">Tên hàng hoá</th>
              <th className="border border-slate-300 p-1">Mã hàng</th>
              <th className="border border-slate-300 p-1">SL</th>
              <th className="border border-slate-300 p-1">Đơn giá</th>
              <th className="border border-slate-300 p-1">Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 p-1 text-center">1</td>
              <td className="border border-slate-300 p-1">Máy in laser HP M712Dn</td>
              <td className="border border-slate-300 p-1">HP-M712DN</td>
              <td className="border border-slate-300 p-1 text-center">1</td>
              <td className="border border-slate-300 p-1 text-right">86.000.000</td>
              <td className="border border-slate-300 p-1 text-right">86.000.000</td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-1 text-center">2</td>
              <td className="border border-slate-300 p-1">Mực in chính hãng HP</td>
              <td className="border border-slate-300 p-1">HP-CF287A</td>
              <td className="border border-slate-300 p-1 text-center">2</td>
              <td className="border border-slate-300 p-1 text-right">43.000.000</td>
              <td className="border border-slate-300 p-1 text-right">86.000.000</td>
            </tr>
          </tbody>
        </table>
        <p className="mb-1">Thông số kỹ thuật: In A3, in 2 mặt tự động, tốc độ 40 trang/phút.</p>
        <p className="mb-3">Đối tác cung cấp: Công ty Sao Bắc.</p>
        <p className="mt-6 text-right italic">Hà Nội, ngày 18 tháng 04 năm 2025</p>
        <p className="text-right font-bold">NGƯỜI LẬP TỜ TRÌNH</p>
      </div>

      {region && (
        <div
          className="pointer-events-none absolute rounded-sm border-2 border-brand bg-brand/15 transition-all"
          style={{
            left: `${region.x}%`,
            top: `${region.y}%`,
            width: `${region.w}%`,
            height: `${region.h}%`,
          }}
        />
      )}
    </div>
  );
}
