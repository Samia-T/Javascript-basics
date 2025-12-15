const object1 = {
    message: 'hello',
    price: 799
};

//destructuring
const {message, price} = object1;
console.log(message);
console.log(price);

//shorthand property, method
const object2 = {
    message,
    method() {
        console.log('method')
    }
}