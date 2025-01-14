# Singleton

## Bài toán

- Mỗi lần chúng ta tạo ra đối tượng để sử dụng thì sẽ phải tốn thời gian và bộ nhớ để khởi tạo đối tượng, khi số lượng nhiều sẽ làm giảm hiệu suất của chương trình

## Mục tiêu

- Tạo ra 1 đối tượng duy nhất của 1 class tránh việc tạo ra nhiều đối tượng tiết kiệm bộ nhớ và hiệu năng của chương trình
- Tạo ra đối tượng chứa các thông tin và cho phép chia sẽ ở bất kì đâu

## Code

```
class Sum {
  sum(a, b) {
    const sumStorage = new SumStorage();
    const result = a + b;
    sumStorage.store(result);
    return result;
  }
}

class SumStorage {
  store(value) {}
}

class Main {
  constructor() {
    const sum = new Sum();
    sum(1 + 1);
  }
}

const main = new Main();
```

- Mỗi lần gọi hàm sum ta phải khởi tạo SumStorage tốn bộ nhớ và mất thời gian khởi tạo

  - => Sử dụng singleton để chỉ tạo SumStorage 1 lần duy nhất

### Eager Singleton

```
class Sum {
  sum(a, b) {
    const sumStorage = SumStorage.getInstance();
    const result = a + b;
    sumStorage.store(result);
    return result;
  }
}

class SumStorage {
  static instance = new this();
  static getInstance() {
    return SumStorage.instance;
  }
  store(value) {}
}


class Main {
  constructor() {
    const sumObj = new Sum();
    const result = sumObj.sum(1, 1);
    console.log(result);
  }
}

const main = new Main();

```

### Lazy init Singleton

- Chỉ tạo ra instance khi gọi

```
class SumStorage {
  static instance = new this();
  static getInstance() {
    if (!SumStorage.instance) {
      SumStorage.instance = new this();
    }
    return SumStorage.instance;
  }
  store(value) {}
}

```
