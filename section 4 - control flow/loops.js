//for, while, do..while, for..in, for..of

//for
for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);
}

//while
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

// do while
i = 9;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);


//for-in (to iterate over properties of an object)
const person = {
    name: 'mosh',
    age: 30
};

for (let key in person)
    console.log(key, person[key]);
//bracket notation, cannot use dot notation here
//no key called key exist, person.key-invalid

const colors = ['red', 'blue', 'green'];
for (let index in colors)
    console.log(index, colors[index]);

//for-of (to iterate of elements of an object)
for (let color of colors)
    console.log(color);

//break - to jump out of loop, continue - to jump to next iteration