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

let product = Factory.createProduct(0, "Free");
product.order(10)

let product2 = Factory.createProduct(100, "Priced");
product2.order(10)