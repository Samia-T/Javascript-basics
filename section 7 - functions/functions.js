walk() // ok (declaration)
// works because of hoisting- the process of moving func decs to the top of the file (done automatically)
// does not work for func expressions

// function declaration
function walk() {
    console.log('walk');
}

// function expression - similar to object
// anonymous
let run = function() {
    console.log('run');
};

const move = run;
run();
move();

// callback - func that is passed as an argument? to another func
// used to handle async ops: reading a file, network reqs, interacting with DBs
sum(disp, 5, 7)

// arguments - values passed to func; parameters - names listed in func def
function sum(callback, x, y) {
    console.log(arguments); // array of args
    let res = x + y;
    callback(res);
    return res; // ?
}

// let smt = sum(disp, 3, 4) * 3; // -> smt = 10, res = 7

// func.arguments.length; -> returns number of args passed

function disp(res) {
    console.log(res);
}

console.log(typeof run());

// function always returns something (undefined, if user doesn't specify)

// (anonymous) self-invoking functions, IIFE - Immediately invoking func. expression

(function(){
    console.log('I am a self-invoking function');
})();

// func.toString() method returns func as string
let text =  walk.toString(); 

// func of an obj is method to the obj

// ARROW FUNCTIONS
// do not have their own this (denotes global obj) -> not well suited for defining obj methods
// are not hoisted
// can omit {return} if it's only one line


