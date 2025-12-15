// class - cleaner way to work with objects

class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Prodcut: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 =  new Product('shirt', 19.99);
const product2 =  new Product('pants', 22.5);
const product3 =  new Product('skirt', 100);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);

//done till 5.23 - classes, next STATIC
