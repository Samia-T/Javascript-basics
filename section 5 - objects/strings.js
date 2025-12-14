// string primitive - can work like string object
// look at documentation
const message = 'hi';

// string object
const another = new String('hi');

// template literals ``
const name= 'john'
const anthr = 
`Hi ${name} ${2+3}
This is
my 'first' message`;

// date
const date1 = new Date('May 11 2018 09:00');
const now = new Date();
const date2 = new Date(2018, 4, 13, 9, 11);

now.setFullYear(2017);
