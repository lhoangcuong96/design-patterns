class Pizza {
  size: string;
  crust: string;
  toppings: string[];

  constructor() {
    this.size = "medium";
    this.crust = "regular";
    this.toppings = [];
  }
}

class PizzaBuilder extends Pizza {
  setSize(size: string): PizzaBuilder {
    this.size = size;
    return this;
  }

  setCrust(crust: string): PizzaBuilder {
    this.crust = crust;
    return this;
  }

  setToppings(toppings: string[]): PizzaBuilder {
    this.toppings = toppings;
    return this;
  }

  build(): Pizza {
    return this;
  }
}

const pizza = new PizzaBuilder()
  .setSize("large")
  .setCrust("thin")
  .setToppings(["cheese", "pepperoni"])
  .build();