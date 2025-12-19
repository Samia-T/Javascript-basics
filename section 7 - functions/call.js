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

//call - (obj(this), param1, param2)
const p1 = person.fullName.call(person1, 'Dhaka', "Bangladesh") // decides which obj this refers to (person1)
console.log(p1);