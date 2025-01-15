# Tổng quan design patterns

## Nhóm khởi tạo

- [Singleton](https://github.com/lhoangcuong96/design-patterns/blob/master/1_Singleton/doc.md): Tạo ra các đối tượng sử dụng cho toàn bộ chương trình và chỉ khởi tạo 1 lần
- [Factory](https://github.com/lhoangcuong96/design-patterns/blob/master/2_Factory/doc.md)
    - Khởi tạo các object có quá trình phức tạp, lặp lại
    - Dựa vào đầu vào để xác định creator class
    - Ần đi chi tiết khởi tạo giúp không làm ảnh hưởng đến những nơi sử dụng khi sửa đổi và update
- [Factory method](https://github.com/lhoangcuong96/design-patterns/blob/master/3_Factory_Method/doc.md)
    - Cũng giống Factory([Simple Factory](https://github.com/lhoangcuong96/design-patterns/blob/master/2_Factory/doc.md))
    - Khởi tạo các object có quá trình phức tạp, lặp lại
    - Ần đi chi tiết khởi tạo giúp không làm ảnh hưởng đến những nơi sử dụng khi sửa đổi và update
    - Khác với Factory(Simple Factory) sẽ chỉ tạo ra 1 factory là dựa vào điều kiện để sử dụng các class creator để tạo ra các object khác nhau, Factory Method sẽ tạo ra các factory khác nhau mỗi factory sẽ tương ứng 1 loại Object được tạo ra dựa trên 1 class
    - Nó chỉ làm giảm quá trình lặp lại code và ẩn đi chi tiết khởi tạo   
- [Abstract factory](https://github.com/lhoangcuong96/design-patterns/blob/master/4_Abstract_Factory/doc.md)
    - [Factory method](https://github.com/lhoangcuong96/design-patterns/blob/master/3_Factory_Method/doc.md) sẽ tập trung vào việc tạo ra đối tượng, Abstract Factory sẽ tập trung vào việc tạo ra các nhóm đối tượng có liên quan hay phụ thuộc
- [Builder](https://github.com/lhoangcuong96/design-patterns/blob/master/5_Builder/doc.md)
    - Cho phép quy định loại đối tượng(biến thể) nào được tạo ra
    - Ví dụ Car có nhiều loại car và cấu trúc constructor khác nhau. Các loại yêu cầu khác nhau
        - Sedan car thì ngoài những thông tin cần thiết của car còn phải có thông tin về option "hasSunroof"
        - Sport car thì cần thông tin về "Max speed"
    - Mỗi đối tượng(biến thể) cần các thông tin khác nhau và như vậy nếu sử dụng chung 1 constructor khởi tạo sẽ cực kì phức tạp và khó đọc và bảo trì, đồng thơi một số properties không cần thiết cũng phải truyền vào null, cực kì không cần thiết và thứ tự của nó cũng là 1 điều khá phức tạp
        - Sử dụng Builder có thể giải quyết bài toán đó
- [Prototype](https://github.com/lhoangcuong96/design-patterns/blob/master/6_Prototype/doc.md)
    - Prototype sử dụng để tạo ra 1 đối tượng từ 1 đối tượng có sẵn nhưng tránh được việc phải tạo lại từ đầu đặc biệt khi việc khởi tạo tốn nhiều tài nguyên và phức tạp


    
