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