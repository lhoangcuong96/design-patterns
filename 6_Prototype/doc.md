# Prototype


## Bài toán
- Prototype sử dụng để tạo ra 1 đối tượng từ 1 đối tượng có sẵn nhưng tránh được việc phải tạo lại từ đầu đặc biệt khi việc khởi tạo tốn nhiều tài nguyên và phức tạp

## Khi nào sử dụng prototype
- Tránh việc cloning đối tượng tiêu tốn quá nhiều tài nguyên

## Khái niệm chỉnh
- Prototype object: Một đối tượng có sẵn nhằm cung cấp như 1 template để tạo ra những đối tượng mới
- Cloning: Thay vì phải khởi tạo 1 đối tượng mới, Prototype được clone để tạo ra đối tượng mới
- Shallow copy & Deep copy:
  - Shallow copy: chỉ copy những properties của đối tượng, còn những objects được lồng bên trong sẽ được tham chiếu(reference)
  - Deep copy: copy tất cả properties của object bao gồm những objects được lồng bên trong

## Prototype trong js
- Lấy cảm hứng từ Prototype design pattern
- Mỗi đối tượng đều có thuộc tính [[Prototype]] có thể truy cập qua __proto__, nó sẽ trỏ tới 1 object khác nơi lưu trữ các thông tin được shared khi các đối tượng được tạo thông qua cùng 1 hàm khởi tạo hoặc clone
- Khi truy cập 1 thuộc tính hoặc phương thức js sẽ kiểm tra đối tượng, nếu k có sẽ kiểm tra tới prototype của đối tượng đó

## Nhược điểm
- Phải cẩn thận khi sử dụng
- Cần 1 object có sẵn để sử dụng như 1 prototype
- Việc thay đổi prototype có thể sẽ làm ảnh hưởng đến những objects được cloned từ nó, có thể dẫn đến những thay đổi không mong muốn

## Code
```
class Car {
  brand: string;
  model: string;
  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  drive() {
    console.log(`Driving ${this.brand} ${this.model}`);
  }

  clone(): Car {
    // shallow copy
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);

    // deep copy
    // return JSON.parse(JSON.stringify(this));
    // return _.cloneDeep(this); // lodash
  }
}

const car1 = new Car("Ford", "Fiesta");
car1.drive();

const car2 = car1.clone()
car2.drive();

```
## Run
- npm install -g typescript ts-node '@types/node'
- ts-node index.ts