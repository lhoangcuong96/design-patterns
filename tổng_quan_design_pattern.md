# Tổng quan design pattern

## Nhóm khởi tạo

- Singleton: Tạo ra các đối tượng sử dụng cho toàn bộ chương trình và chỉ khởi tạo 1 lần
- Factory: Đóng gói đối tượng có chung 1 lớp cơ sở(Interface, Abstract class)
- Factory method: Đóng gói việc tạo ra đối tượng và cho phép lớp kế thừa quy định đối tượng sẽ được tạo ra
    - Sự khác nhau giữa Factory Method và Factory:
        - Factory Method:
            - Responsibility: Factory sẽ không trực tiếp tạo ra object mà sẽ sẽ sử dụng các lớp con
            - Extensibility(Tính mở rộng): Tính mở rộng cao hơn, khi thêm 1 loại mới thì chỉ cần thêm 1 subclass thôi
        - Factory
            - Responsibilities: Factory sẽ trực tiếp tạo ra object
            - Extensibility: Mở rộng thấp, khi thêm loại mới thì phải sửa lại code của Factory

