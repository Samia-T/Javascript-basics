//perform a task
//param - name
function greet (name, lastName) {
    console.log('hello ' + name + ' ' + lastName);
}

greet('john', 'smith'); //arg- john, mary
greet('mary', 'something')

//calculate a value
function square(number) {
    return number*number;
}

let num = square(2);
console.log(num);