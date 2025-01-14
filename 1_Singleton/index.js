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
    if (!SumStorage.instance) {
      SumStorage.instance = new this();
    }
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
