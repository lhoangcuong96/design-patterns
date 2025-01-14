# Factory(Simple factory)


## Bài toán
- Là một creational design pattern
- Được áp dụng một số tình huống 
  - Khởi tạo các object có quá trình phức tạp, lặp lại
  - Dựa vào đầu vào để xác định creator class
  - Ần đi chi tiết khởi tạo giúp không làm ảnh hưởng đến những nơi sử dụng khi sửa đổi và update
- Ví dụ:
  - Lớp cơ sở là Product, tuỳ thuộc vào giá trị đầu vào sẽ tạo ra Free Product hoặc PricedProduct,

## Mục tiêu
- Tránh lặp lại code
- Che dấu logic phức tạp bên trong khi tạo ra đối tượng, giúp chỉ cần quan tâm đến đối tượng được tạo ra mà thôi
- Giúp ta không cần quan tâm đến lớp cài đặt, đảm bảo sau này khi sửa đổi hoặc nâng cấp thì chỉ cần sửa trong hàm cài đặt trong Factory mà không làm ảnh hưởng đến những nơi sử dụng

## Code
```
abstract class Product {
  name: string;
  price: number;
  constructor(_price: number, _name: string) {
    this.name = _name;
    this.price = _price;
  }
  abstract order(amount: number):void;
}


class FreeProduct extends Product {
  order(_amount: number) {
    console.log(0);
  }
}

class PricedProduct extends Product {
  order(amount: number) {
    console.log(this.price * amount);
  }
}

class Main {
  constructor(price: number, name: string) {
    const price = 0;
    const name = "Free"
    let product;
    if (price === 0) {
      product = new FreeProduct(price, name);
    } else {
      product = new PricedProduct(price, name);
    }
    product.order(1); 
  }
}

const main = new Main();
```
- Mỗi nơi sử dụng đều phải kiểm tra điều kiện để tạo product tương ứng => rất khó khăn bảo trì và nâng cấp gây ra nhiều lỗi tiềm tàng

### Áp dụng Factory
```
abstract class Product {
  name: string;
  price: number;
  constructor(_price: number, _name: string) {
    this.name = _name;
    this.price = _price;
  }
  abstract order(amount: number):void;
}


class FreeProduct extends Product {
  order(_amount: number) {
    console.log(0);
  }
}

class PricedProduct extends Product {
  order(amount: number) {
    console.log(this.price * amount);
  }
}

class Factory {
  static createProduct(price: number, name: string) {
    if (price === 0) {
      return new FreeProduct(price, name);
    } else {
      return new PricedProduct(price, name);
    }
  }
}


class Main {
  constructor() {
   let product = Factory.createProduct(0, "Free");
   product.order(1)
  }
}

const main = new Main();

```



## Run
- npm install -g typescript ts-node '@types/node'
- ts-node index.ts