
# 📄 rename.md — Hướng dẫn API Upload & Rename File

## 🧩 Mục đích

Dự án này cung cấp một API đơn giản sử dụng Node.js và Express để:

- Upload file từ client
- Đổi tên file sau khi upload
- Lưu file vào thư mục `uploads/`
- Cấu hình cổng và biến môi trường qua `.env`

---

## 📦 Các package sử dụng

| Package         | Mô tả |
|-----------------|-------|
| `express`       | Framework backend cho Node.js |
| `cors`          | Cho phép gọi API từ domain khác |
| `dotenv`        | Đọc biến môi trường từ file `.env` |
| `multer`        | Xử lý file upload (multipart/form-data) |
| `fs`, `path`    | Xử lý đường dẫn và đổi tên file |
| *(Tùy chọn mở rộng)* | |
| `jsonwebtoken`  | Xác thực bằng token JWT |
| `bcryptjs`      | Mã hóa mật khẩu |
| `mongoose`      | Kết nối MongoDB |
| `exceljs`       | Xuất file danh sách dưới dạng Excel |

---

## 🚀 Cách sử dụng

### 1. Cài đặt

```bash
npm install express cors dotenv multer bcryptjs jsonwebtoken mongoose exceljs
```

### 2. Tạo file `.env`

```env
PORT=3000
```

### 3. Tạo thư mục chứa file upload

```bash
mkdir uploads
```

### 4. Chạy server

```bash
node rename.js
```

---

## 📤 API Upload & Đổi tên file

**Endpoint:** `POST /upload`  
**Method:** `POST`  
**Content-Type:** `multipart/form-data`

### Body (form-data):

| Field     | Mô tả |
|-----------|------|
| `myfile`  | File cần upload |
| `newName` | Tên mới cho file (không cần phần mở rộng) |

### Ví dụ:

- File upload: `avatar.png`
- newName: `user_001`

Server sẽ lưu file thành: `uploads/user_001.png`

---

## 📁 Cấu trúc thư mục

```
project-root/
├── uploads/        # Nơi lưu file upload
├── rename.js       # Script xử lý upload & rename
├── .env            # Biến môi trường
└── rename.md       # Hướng dẫn sử dụng
```

---

## 🛠 Mở rộng gợi ý

- ✅ Thêm bảo mật JWT trước khi cho phép upload
- ✅ Ghi log file upload vào MongoDB
- ✅ Export danh sách file ra Excel (`exceljs`)

---

## 👨‍💻 Tác giả

Huỳnh Văn Sáu  
[GitHub](https://github.com/) • [LinkedIn](https://linkedin.com/) *(thêm link nếu cần)*
