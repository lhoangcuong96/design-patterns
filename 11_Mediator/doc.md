# Mediator 
Là một behavioral design pattern, giảm phụ thuộc giữa các thành phần tương tác với nhau. Thay vì các thành phần tương tác trực tiếp với nhau, nó sẽ tương tác thông qua 1 Mediator object. Design pattern này sẽ đơn giản hoá những phần logic tương tác, làm cho hệ thống dễ dàng bảo trì, mở rộng và chỉnh sửa

## Cách thức hoạt động
- Những thành phần sẽ không giao tiếp với nhau trực tiếp thay vì đó:
  - Nó sẽ send message tới Mediator
  - Mediator sẽ quyết định thành phần nào sẽ nhận được message và chuyển tiếp nó đi


## Ưu điểm:
- Giảm phụ thuộc(Reduce coupling):
  - Các thành phần sẽ không phụ thuộc vào nhau mà sẽ phụ thuộc vào mỗi Mediator
- Đơn giản hoá giao tiếp:
  - Tập trung các phần logic giao tiếp, làm cho nó dễ dàng để quản lý
- Tăng khả năng bảo trì:
  - Thêm và xoá các thành phần sẽ không làm ảnh hưởng hay thay đổi những cái khác
- Khuyến khích tính tái sử dụng:
  - Các phần thành có thể tái sử dụng một cách độc lập, vì chúng không liên kết chặt chẽ với nhau

## Khi nào sử dụng Mediator
- Khi có 1 nhóm các thành phần phụ thuộc chặt chẽ với nhau mà nó lại đuợc  tương tác thường xuyên
- Khi muốn tập trung các logic giao tiếp, điều khiển phức tạp
- Khi muốn thêm mới/xoá/sửa đổi các thành phần mà không làm ảnh hưởng tới những cái khác
- Tạo ra một cấu trúc giao tiếp rõ ràng với nhiều các thành phần có thể tương tác với nhau

## Code
```
const dataset = Array.from({ length: 100 }, (_, i) => i + 1);

class PaginationIterator {
  data: Array<any>;
  pageSize: number;
  currentPage: number;
  constructor(data: any, pageSize: number) {
    this.data = data;
    this.pageSize = pageSize;
    this.currentPage = 1;
  }

  hasNext() {
    return this.currentPage * this.pageSize < this.data.length;
  }

  next() {
    if (!this.hasNext()) {
      throw new Error("Invalid page");
    }
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    const pageItems = this.data.slice(start, end);
    this.currentPage++;

    return pageItems;
  }

  goToPage(page: number) {
    if (page <= 0 || page > Math.ceil(this.data.length / this.pageSize)) {
      throw new Error("Invalid page");
    }
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    const pageItems = this.data.slice(start, end);
    this.currentPage = page;
    return pageItems;
  }

  reset() {
    this.currentPage = 1;
  }
}

const pagination =new PaginationIterator(dataset,10)
console.log(pagination.hasNext())
console.log(pagination.next())
console.log(pagination.goToPage(5))
pagination.reset()
console.log(pagination.next())

```

## Run
- npm install -g typescript ts-node '@types/node'
- ts-node index.ts