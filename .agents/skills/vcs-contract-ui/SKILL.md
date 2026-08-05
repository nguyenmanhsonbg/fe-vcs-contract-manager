---
name: vcs-contract-ui
description: Best practices, architecture conventions, component reusability guidelines, and code organization rules for vcs-contract-manager-ui codebase
---

# VCS Contract Manager UI - Engineering & Component Guide

Bộ hướng dẫn phát triển mã nguồn dành riêng cho dự án **Core UI Frontend (React + TypeScript + Tailwind CSS)** thuộc dự án `vcs-contract-manager-ui`.

---

## 1. Cấu trúc Thư mục Dự án (`src/app/`)

Mọi file mới được thêm vào dự án PHẢI tuân theo đúng vị trí thư mục sau:

```
src/
├── app/
│   ├── components/
│   │   ├── common/         # Widgets dùng chung toàn ứng dụng (PageHeader, StatCard, SearchInput, SelectFilter...)
│   │   ├── modals/         # Dialogs, Popups (UploadModal, TaskDetailModal...)
│   │   ├── pages/          # Giao diện các trang chính (OverviewReportPage, DocumentListPage, ContractListPage...)
│   │   ├── ui/             # Radix / Tailwind UI primitives (button, dialog, collapsible, sonner, utils)
│   │   ├── Sidebar.tsx     # Navigation sidebar chính
│   │   ├── TopBar.tsx      # Top bar tiêu đề & thông báo
│   │   ├── DocumentCanvas.tsx # Xem canvas tài liệu
│   │   └── icons.tsx       # TẬP TRUNG TOÀN BỘ SVG icons dùng trong ứng dụng (KHÔNG viết SVG inline)
│   ├── config/
│   │   └── routes.tsx      # Khai báo Hash route & Navigation routing map
│   ├── data/
│   │   ├── models.ts       # TypeScript Data Interfaces chính (DigitizedDoc, DocType, DocStatus...)
│   │   ├── apiModels.ts    # DTOs & Search Params models
│   │   └── contractMock.ts # Mock data cho hợp đồng & hợp đồng mẫu
│   ├── hooks/              # Custom React Hooks
│   ├── services/
│   │   └── api.ts          # Backend API client (docApi) & Fallbacks
│   └── App.tsx             # Root Layout, Routing Provider & State management
├── imports/                # Assets/Hình ảnh import từ Figma
└── styles/
    └── index.css           # CSS quy chuẩn & Token Tailwind CSS
```

---

## 2. Thư viện Component Dùng Chung (`src/app/components/common/`)

Khi xây dựng màn hình mới hoặc nâng cấp giao diện, **BẮT BUỘC** tái sử dụng các component có sẵn trong `common/`:

| Component | Đường dẫn | Công dụng & Tham số chính |
| :--- | :--- | :--- |
| **`PageHeader`** | `common/PageHeader.tsx` | Tiêu đề trang (`title`), mô tả ngữ cảnh (`description`) và vùng nút/bộ lọc bên phải (`action`). |
| **`StatCard`** | `common/StatCard.tsx` | Thẻ thống kê KPI với 2 variant (`default` hỗ trợ icon góc trên + bottom bar, `accent-bottom` thanh viền chân absolute). |
| **`SelectFilter`** | `common/SelectFilter.tsx` | Select dropdown chuẩn tích hợp icon `ChevronDown`. |
| **`SearchInput`** | `common/SearchInput.tsx` | Ô tìm kiếm văn bản chuẩn tích hợp icon kính lúp. |
| **`UploadDropzone`** | `common/UploadDropzone.tsx` | Khung kéo thả/tải lên tệp đính kèm viền nét đứt. |
| **`DatePickerInput`** | `common/DatePickerInput.tsx` | Ô chọn/nhập khoảng thời gian tích hợp icon lịch. |
| **`StatusBadge`** | `common/StatusBadge.tsx` | Badge hiển thị trạng thái chuẩn màu (`pending`, `ocr`, `review`, `confirmed`, `failed`, `approved`...). |
| **`Pagination`** | `common/Pagination.tsx` | Thanh phân trang đầy đủ chỉ số phần tử, trang hiện tại, kích thước trang. |

---

## 3. Quy chuẩn Icon (`src/app/components/icons.tsx`)

1. **KHÔNG** viết các đoạn mã `<svg>...</svg>` inline rải rác trong các file giao diện/trang.
2. Nếu cần SVG mới từ thiết kế Figma:
   - Thêm component icon exported mới vào file [icons.tsx](file:///home/quocnm/workspace/vcs-produce/vcs-contract-manager-ui/src/app/components/icons.tsx).
   - Truyền props `className?: string` để dễ dàng thay đổi kích thước (`size-4`, `size-5`), màu sắc (`text-[#3f81ea]`, `text-[#ff4c51]`).
   - Sử dụng `stroke="currentColor"` hoặc `fill="currentColor"` để kế thừa màu chữ Tailwind.

---

## 4. Nguyên tắc Thiết kế Giao diện (Design System Tokens)

- **Bảng màu chuẩn**:
  - Primary Red: `#ff4c51` / `#e64449`
  - Accent Blue: `#3f81ea`
  - Green (Success): `#28c76f` / `#e6f9f0`
  - Orange (Warning/Review): `#ff9f43`
  - Cyan (Processing): `#00bad1`
  - Danger Red: `#ea5455`
  - Surface Background: `#f8f7fa`
  - Card Background: `#ffffff`
  - Text Primary: `#2f2b3d` / `#393740`
  - Text Secondary: `#5d586c` / `#8f8d95`
  - Border: `border-slate-100` / `border-slate-200` / `border-[#dbdade]`
- **Bo góc (Border Radius)**:
  - Thẻ / Card / Container: `rounded-[6px]` hoặc `rounded-lg`
  - Button / Input: `rounded-[6px]`
  - Badge / Tag: `rounded-[4px]`
- **Đổ bóng (Box Shadow)**:
  - Standard Card: `shadow-[0px_2px_4px_rgba(47,43,61,0.12)]`
  - Elevated Modal / Floating Card: `shadow-2xl` hoặc `shadow-[0px_3px_12px_rgba(47,43,61,0.14)]`

---

## 5. Định hướng Routing & State Management

- Sử dụng **Hash Routing** (`#/overview`, `#/documents`, `#/products`, `#/proposals`, `#/contracts`, `#/doc/:id`).
- Khi cần bổ sung route mới:
  1. Đăng ký path và key tương ứng trong [routes.tsx](file:///home/quocnm/workspace/vcs-produce/vcs-contract-manager-ui/src/app/config/routes.tsx).
  2. Khai báo menu item tương ứng trong [Sidebar.tsx](file:///home/quocnm/workspace/vcs-produce/vcs-contract-manager-ui/src/app/components/Sidebar.tsx).
  3. Xử lý render trang chính trong [App.tsx](file:///home/quocnm/workspace/vcs-produce/vcs-contract-manager-ui/src/app/App.tsx).

---

## 7. Nguyên tắc Thiết kế FE Sẵn sàng Gắn Backend API (Backend API-Ready Conventions)

Để đảm bảo khi chuyển giao kết nối Backend RESTful API (Spring Boot/Node.js) không cần phải refactor lại giao diện FE, tất cả trang và component trong dự án PHẢI tuân thủ các quy tắc sau:

### 7.1. Tập trung hóa Service Layer (`src/app/services/`)
- Mọi thao tác gọi dữ liệu (HTTP GET, POST, PUT, DELETE) **KHÔNG** được viết `fetch`/`axios` trực tiếp trong file JSX/TSX của trang.
- Định nghĩa tất cả API method bên trong [api.ts](file:///home/quocnm/workspace/vcs-produce/vcs-contract-manager-ui/src/app/services/api.ts).
- Đảm bảo sử dụng `API_BASE = import.meta.env.VITE_API_BASE_URL || "/api/v1"` và hỗ trợ fallback dữ liệu khi chưa bật server backend.

### 7.2. Định nghĩa DTO & Models thống nhất (`src/app/data/`)
- Khai báo đầy đủ TypeScript Interface cho Request Payload & Response Body trong [models.ts](file:///home/quocnm/workspace/vcs-produce/vcs-contract-manager-ui/src/app/data/models.ts) hoặc [apiModels.ts](file:///home/quocnm/workspace/vcs-produce/vcs-contract-manager-ui/src/app/data/apiModels.ts).
- Sử dụng kiểu dữ liệu chuẩn RESTful PageResponse:
  ```typescript
  export interface PageResponse<T> {
    content: T[];
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
  }
  ```

### 7.3. Quản lý 4 Trạng thái Cốt lõi tại Component (UI State Pattern)
Mọi trang danh sách/bảng/chi tiết PHẢI quản lý đủ 4 trạng thái sau:
1. `loading: boolean` - Hiển thị Skeleton hoặc hiệu ứng tải dữ liệu.
2. `data: T | T[]` - Dữ liệu nhận từ API.
3. `error: string | null` - Thông báo lỗi khi API thất bại (`ApiError`).
4. `pagination: PageResponse` - Quản lý trang hiện tại, kích thước trang và tổng số phần tử.

```tsx
// Pattern chuẩn cho Page Component sẵn sàng kết nối API
const [loading, setLoading] = useState(false);
const [data, setData] = useState<DigitizedDoc[]>([]);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  async function loadData() {
    try {
      setLoading(true);
      setError(null);
      const res = await docApi.getDocuments(filters);
      setData(res.content);
    } catch (err: any) {
      setError(err.message || "Không thể tải dữ liệu");
      toast.error("Lỗi kết nối Backend API");
    } finally {
      setLoading(false);
    }
  }
  loadData();
}, [filters]);
```

### 7.4. Xử lý Thao tác Mutation Async (`async/await` + `try/catch`)
- Với các nút hành động (Tạo mới, Cập nhật, Xóa, Phê duyệt, Đổi trạng thái), luôn bọc trong hàm `async` và hiển thị phản hồi bằng `toast` (`sonner`):
  ```tsx
  async function handleConfirm(id: string) {
    try {
      await docApi.updateDocumentStatus(id, "confirmed");
      toast.success("Cập nhật trạng thái thành công!");
      fetchData(); // Reload danh sách từ API
    } catch (err: any) {
      toast.error(err.message || "Thao tác thất bại");
    }
  }
  ```

---

## 8. Kiểm tra & Đảm bảo chất lượng Code (Quality & Build Checklist)

Trước khi hoàn tất bất kỳ thay đổi nào:
1. Chạy `npm run build` để đảm bảo ứng dụng biên dịch thành công 100%, không bị lỗi trùng lặp import hay sai kiểu TypeScript.
2. Kiểm tra không có code dư thừa hay over-engineering (Tuân thủ skill `ponytail`).
3. Đảm bảo tất cả biến dữ liệu giao diện đều truyền từ state/props đại diện cho DTO từ backend API.

