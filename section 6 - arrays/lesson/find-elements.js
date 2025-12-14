//prim
const numbers = [1,2,3,1,4];

// returns index of given element (1), after given index (2)
console.log(numbers.indexOf(1,2));

console.log(numbers.lastIndexOf(1));

console.log(numbers.includes(1));

//ref
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

//false - object passed here has a different reference
console.log(courses.includes({id: 1, name: 'a'}));

//find - pass function -> call-back function/predicate
const course = courses.find(function(course) {
    return course.name === 'a';
})

console.log(course);

//arrow function
//const course1 = courses.find(course => course.name ==='a');

const course1 = courses.find(course => {
    return course.name ==='a'
});

console.log(course1);
