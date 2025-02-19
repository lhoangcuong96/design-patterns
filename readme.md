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
- [Object pool](https://github.com/lhoangcuong96/design-patterns/blob/master/7_Object_pool/doc.md)
    - Object pool dùng để quản lý cách thức đối tượng được tạo ra và tái sử dụng, đặc biệt đối với các đối tượng tiêu tốn tài nguyên khi khởi tạo vd db connection. Thay vì phải khởi tạo lại 1 instance của đối tượng mỗi lần khi cần, Object pool sẽ duy trì và tái sử dụng nó

## Nhóm hành vi
- [Chain of responsibility](https://github.com/lhoangcuong96/design-patterns/blob/master/8_Chain_of_responsibility/doc.md)
    - Là một pattern nhóm hành vi. Cho phép request được truyền qua các mắt xích handler, mỗi một mắt xích sẽ xử lý hoặc truyền tiếp qua 1 mắt xích cao hơn trong chuỗi. 
    - Ví dụ một hệ thống hỗ trợ theo tickets. Khi user submit ticket nó sẽ được đánh giá từng bậc từ thấp đến cao(mắt xích) đầu tiên là nhân viên hỗ trợ người dùng nếu không xử lý được sẽ chuyển tiếp cho trưởng nhóm và nếu không được sẽ chuyển cho quản lý ... Mỗi mắt xích sẽ quyết định yêu cầu có được xử lý hay không hay sẽ tiếp tục được chuyển tiếp
- [Command](https://github.com/lhoangcuong96/design-patterns/blob/master/9_Command/doc.md)
    - Là một behavioral design pattern, nó sẽ đóng gói một request hoặc một action như 1 object. Cho phép tách biệt sender và receiver giúp hạn chế thay đổi code ở nơi gọi và chỉ cần thay đổi ở receiver. Pattern này cho phép hoàn tác các tác vụ bằng cách lưu lại các states hoặc các câu lệnh đảo ngược