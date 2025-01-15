# Object pool


## Bài toán
- Object pool dùng để quản lý cách thức đối tượng được tạo ra và tái sử dụng, đặc biệt đối với các đối tượng tiêu tốn tài nguyên khi khởi tạo vd db connection . Thay vì phải khởi tạo lại 1 instance của đối tượng mỗi lần khi cần, Object pool sẽ duy trì và tái sử dụng nó

## Khi nào sử dụng builder
- Khi việc khởi tạo đối tượng tốn nhiều tài nguyên: Ví dụ Database Connection , Network Connection, threads, 1 đối tượng lớn
- Những object thường xuyên được khởi tạo và phá huỷ: việc tạo và phá huỷ 1 object thường xuyên có thể dẫn đến việc hiệu xuất kém
- Những object được tái sử dụng nhiều nơi

## Object pool pattern hoạt động như thế nào
- Tạo ra pool : Object pool sẽ tạo ra 1 tập hợp các objects, nó sẽ được phân bố trước và sẵn sàng để sử dụng
- Mượn object: khi cần, client có thể mượn 1 object trong pool 
- Trả object: Sau khi được sử dụng, object sẽ được trả về pool thay vì là bị phá huỷ
- Tái sử dụng object: Sau khi trở về pool, object sẽ sẵn sàng để tiếp tục sử dụng

## Trường hợp sử dụng
- Hiện với việc các phần cứng càng ngày càng được nâng cấp thì việc tạo mới các đối tượng và phá huỷ nó đã không còn quá nặng nề nữa, sử dụng Object pool sẽ phù hợp hơn cho việc kết nối đến cơ sở dữ liệu hay các đối tượng đồ hoạ

## Code
```
```

## Run
- npm install -g typescript ts-node '@types/node'
- ts-node index.ts