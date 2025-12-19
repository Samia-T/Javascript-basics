
// similar to call()
// call() takes args seperately, apply() takes them as an array
const person = {
    fullName: function(city, country){
        return this.firstName + " " + this.lastName + ', ' + city + ', ' + country;
    }
}

const person1 = {
    firstName: 'John',
    lastName: 'Doe'
};

const person2 = {
    firstName: 'Jane',
    lastName: 'Smith'
};

// call - (obj(this), param1, param2)
const p2 = person.fullName.call(person2, ['Dhaka', "Bangladesh"]);
console.log(p2);

// Math.max - find max elem of an array with loop
Math.max.apply(null, [1,3,2]); //first arg not used here

// In Strict mode, if first arg not obj, it becomes the owner of the invoked func.
// in non- strict mode, it ecomes the global obj (window)