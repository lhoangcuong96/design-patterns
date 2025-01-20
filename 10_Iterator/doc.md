# Iterator 
Là một behavioral design pattern, cung cấp cách thức để truy cập vào 1 element của 1 collection như list, array, set một cách tuần tự mà không làm lộ cấu trúc của collection

## Tại sao phải sử dụng Iterator design pattern
- Encapsulation(đóng gói):
  - Ẩn đi các cấu trúc bên trong
  - Không cần biết liệu rằng bên trong là 1 array, linked list hay là 1 tree
- Truy cập thống nhất:
  - Cho phép các các loại collection khác nhau có cùng 1 cách duyệt giống nhau
- Phân tách các mối quan tâm
  - Logic duyệt sẽ được tách ra khỏi class của collection và bên trong của class Iterator
- Tính linh hoạt
  - Cho phép custom lại cách duyệt(eg: reserve iterator, skipping elements)

## Một số ví dụ trong js
- Pagination:
  - Duyệt kết quả từ API's result
- Duyệt DOM:
  - Duyệt qua các NODE con của 1 DOM elements sử dụng NodeList's iterator

## Ưu điểm:
- Đơn giản hoá: Làm cho việc duyệt qua 1 collection trở nên dễ dàng hơn mà không cần biết cấu trúc bên trong nó là gì
- Nhiều hệ thống duyệt: có thể duyệt 1 mảng bằng nhiều cách và nhiều class iterator má không làm ảnh hưởng nhau
- Custom lại cách duyệt: Cho phép nhiều cách duyệt qua 1 collection (forward, backward)

## Khi nào sử dụng
- Khi có 1 collection cấu trúc phức tạp(trees, graphs) nhưng muốn có 1 cách nhanh để duyệt qua nó
- Khi muốn có nhiều cách để duyệt qua 1 collection (forward, backward)
- Khi muốn tách biệt logic duyệt với phần code bên trong của collection

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