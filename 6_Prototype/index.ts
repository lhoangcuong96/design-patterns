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
