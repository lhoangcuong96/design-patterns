# Tổng quan design pattern

## Nhóm khởi tạo

- [Singleton](https://github.com/lhoangcuong96/design-patterns/blob/master/1_Singleton/doc.md): Tạo ra các đối tượng sử dụng cho toàn bộ chương trình và chỉ khởi tạo 1 lần
- [Factory](https://github.com/lhoangcuong96/design-patterns/blob/master/2_Factory/doc.md): Đóng gói đối tượng có chung 1 lớp cơ sở(Interface, Abstract class)
    - Khởi tạo các object có quá trình phức tạp, lặp lại
    - Dựa vào đầu vào để xác định creator class
    - Ần đi chi tiết khởi tạo giúp không làm ảnh hưởng đến những nơi sử dụng khi sửa đổi và update
- [Factory method](https://github.com/lhoangcuong96/design-patterns/blob/master/3_Factory_Method/doc.md): Đóng gói việc tạo ra đối tượng và cho phép lớp kế thừa quy định đối tượng sẽ được tạo ra
    - Cũng giống Factory([Simple Factory](https://github.com/lhoangcuong96/design-patterns/blob/master/2_Factory/doc.md))
    - Khởi tạo các object có quá trình phức tạp, lặp lại
    - Ần đi chi tiết khởi tạo giúp không làm ảnh hưởng đến những nơi sử dụng khi sửa đổi và update
    - Khác với Factory(Simple Factory) sẽ chỉ tạo ra 1 factory là dựa vào điều kiện để sử dụng các class creator để tạo ra các object khác nhau, Factory Method sẽ tạo ra các factory khác nhau mỗi factory sẽ tương ứng 1 loại Object được tạo ra dựa trên 1 class
    - Nó chỉ làm giảm quá trình lặp lại code và ẩn đi chi tiết khởi tạo   

