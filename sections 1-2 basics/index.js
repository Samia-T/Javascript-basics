//first js code
let name = 'mosh';
console.log(name);

const interestRate = 0.3;
//variable cannot be changed later
//if variable needs to be reassigned, use let

//primitives (val types) - string, number, boolean, undefined, null (to clear var), [symbol]
//reference types - objects, arrays, functions

//key-val pairs
let person = {
    name: 'mosh',
    age: 20
};

//dot notation
person.name = 'john'
console.log(person.name);

//bracket notation
person['name'] = 'mary'
console.log(person['name']);


const a = 'block-scoped, cannot be reassigned or redecaled in same scope'; // does not attach to global obj
let b = 'block-scoped, can be reassigned, cannot be redecaled in same scope '; // does not attach to windows
var c = 'function-scoped, can be redecalred and reassigned'; // avoid, creates properties on global obj

// variables declared without a declaration keyword (const, let or var) are Always Global, even if created inside a function
