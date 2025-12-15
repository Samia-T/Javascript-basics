walk() //ok (declaration)
//works because of hoisting- the process of moving func decs to the top of the file (done automatically)
//does not work for func expressions

//function declaration
function walk() {
    console.log('walk');
}

//function expression - similar to object
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

function sum(callback, x, y) {
    let res = x + y;
    callback(res);
}

function disp(res) {
    console.log(res);
}