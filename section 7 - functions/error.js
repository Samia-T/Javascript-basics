const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(name) {
        if (typeof name !== 'string')
            throw new Error('Value is not a string.');

        const parts = name.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and a last name');
        this.firstName = parts[0];
        this.lastName = parts[1];

        //this - references obj executing the current function
    }
};

try {
    person.fullName = '';
}
catch (e) {
    alert(e);
}

//scope, local and global variables
//let, const - block-scoped
//(avoid) var - function-scoped, attaches variable to window obj (bad)

console.log(person);
