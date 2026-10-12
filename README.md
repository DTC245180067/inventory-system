
# INVENTORY SYSTEM - DOCKER COMPOSE

## 1. Giới thiệu dự án

Dự án Inventory System triển khai ứng dụng quản lý kho bằng Docker Compose trên Ubuntu, tích hợp ứng dụng Web, MySQL, phpMyAdmin, Nginx Reverse Proxy, Prometheus, Grafana, Loki và Promtail.

## 2. Công nghệ sử dụng

- Docker và Docker Compose: Quản lý các container.
- Web Application: Giao diện ứng dụng quản lý kho.
- MySQL: Lưu trữ dữ liệu.
- phpMyAdmin: Quản trị cơ sở dữ liệu.
- Nginx: Reverse Proxy cho ứng dụng Web.
- Prometheus: Thu thập metrics.
- Grafana: Hiển thị dashboard giám sát.
- Loki: Lưu trữ và truy vấn log.
- Promtail: Thu thập và chuyển log tới Loki.

## 3. Cấu trúc thư mục

```text
inventory-system/
├── app/
├── nginx/
├── prometheus/
├── promtail/
└── docker-compose.yml
```

## 4. Yêu cầu hệ thống

- Ubuntu Linux
- Docker Engine
- Docker Compose Plugin
- Git

## 5. Hướng dẫn triển khai

### Bước 1: Tải mã nguồn

```bash
git clone https://github.com/DTC245180067/inventory-system.git
cd inventory-system
```

### Bước 2: Kiểm tra cấu hình

```bash
docker compose config
```

Cấu hình các biến môi trường cần thiết theo file `docker-compose.yml`. Không đưa mật khẩu thật hoặc API key lên GitHub.

### Bước 3: Khởi chạy hệ thống

```bash
docker compose up -d --build
```

### Bước 4: Kiểm tra container

```bash
docker compose ps
```

### Bước 5: Kiểm tra log

```bash
docker compose logs --tail=100
```

### Bước 6: Dừng hệ thống

```bash
docker compose down
```

## 6. Kiểm tra hoạt động

- Truy cập ứng dụng Web thông qua Nginx.
- Kiểm tra kết nối MySQL bằng phpMyAdmin.
- Kiểm tra metrics trên Prometheus.
- Kiểm tra dashboard trong Grafana.
- Kiểm tra log Loki bằng Grafana Explore.

**Lưu ý:** Địa chỉ IP và cổng truy cập phụ thuộc cấu hình thực tế trong `docker-compose.yml`.

## 7. Quản lý mã nguồn

Dự án sử dụng Git và GitHub để quản lý phiên bản, theo dõi lịch sử thay đổi và lưu trữ mã nguồn. Các commit được chia theo từng giai đoạn triển khai ứng dụng, monitoring, logging và hoàn thiện Docker Compose.

## 8. Bảo mật

- Không lưu mật khẩu thật trong repository.
- Hạn chế công khai các cổng dịch vụ nội bộ.
- Phân quyền truy cập cơ sở dữ liệu.
- Sử dụng network Docker để tách biệt các dịch vụ.

## 9. Tác giả

- GitHub: DTC245180067
- Repository: https://github.com/DTC245180067/inventory-system
  
