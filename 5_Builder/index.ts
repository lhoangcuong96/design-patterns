class Car {
  engine: string;
  wheel: number;
  seats: number;
  color: string;
  maxSpeed: number; // Sport
  hasSunroof: boolean; // Sedan


  constructor() {
    this.engine = "";
    this.wheel =  0;
    this.seats =  0;
    this.color =  "";
    this.maxSpeed = 0;
    this.hasSunroof = false;
  }

  displayDetails(): void {
    console.log(
      `Car with engine: ${this.engine}, wheel: ${this.wheel}, seats: ${this.seats}, color: ${this.color}`
    );
  }
}

interface CarBuilder {
  setEngine(engine: string): CarBuilder;
  setWheel(wheel: number): CarBuilder;
  setSeats(seats: number): CarBuilder;
  setColor(color: string): CarBuilder;
  build(): Car;
}

class SedanCarBuilder implements CarBuilder {
  private car: Car;
  constructor() {
    this.car = new Car();
  }

  setEngine(engine: string): SedanCarBuilder {
    /*
     xử lý riêng cho từng loại xe
     ...
    */
    this.car.engine = engine;
    return this;
  }

  setWheel(wheel: number): SedanCarBuilder {
    this.car.wheel = wheel;
    return this;
  }

  setSeats(seats: number): SedanCarBuilder {
    this.car.seats = seats;
    return this;
  }

  setColor(color: string): SedanCarBuilder {
    this.car.color = color;
    return this;
  }

  // Sự khác biệt ở đây
  setSunroof(hasSunroof: boolean): SedanCarBuilder {
    this.car.hasSunroof = hasSunroof;
    return this;
  }

  build(): Car {
    return this.car;
  }
}

class SportCarBuilder implements CarBuilder {
  private car: Car;
  constructor() {
    this.car = new Car();
  }

  setEngine(engine: string): SportCarBuilder {
    /*
     xử lý riêng cho từng loại xe
     ...
    */
    this.car.engine = engine;
    return this;
  }

  setWheel(wheel: number): SportCarBuilder {
    this.car.wheel = wheel;
    return this;
  }

  setSeats(seats: number): SportCarBuilder {
    this.car.seats = seats;
    return this;
  }

  setColor(color: string): SportCarBuilder {
    this.car.color = color;
    return this;
  }

  // Sự khác biệt ở đây
  setMaxSpeed(maxSpeed: number): SportCarBuilder {
    this.car.maxSpeed = maxSpeed;
    return this;
  }

  build(): Car {
    return this.car;
  }
}


const sedanBuilder = new SedanCarBuilder();
sedanBuilder.setEngine("Toyota").setWheel(3).setSeats(3).setSunroof(true).build().displayDetails()

const sportBuilder = new SportCarBuilder();
sportBuilder.setEngine("BWM").setWheel(3).setSeats(1).setMaxSpeed(500).build().displayDetails()


