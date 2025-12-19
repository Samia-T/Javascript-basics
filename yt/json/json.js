//object eg
const product2 = {
    name: 'shirt',
    'delivery-time': '1 day',
    //nested object
    rating: {
        stars: 4.5,
        count: 45,
    },
    birth: '1986-12-14',
    //method - not supported, like date; can be passed as strings
    fun: function func() {
        console.log('function inside object');
    }
};

console.log(product2.rating.stars);
console.log(product2['delivery-time']);
product2.fun();

//json - similar to js object
//does not support function, date, undefined, (set, map, symbol); uses double quotes
//keys must be strings, values can be - string, number, object, array, boolean, null
//more universal, store data

//js obj to json
const jsonString = JSON.stringify(product2);
console.log(jsonString);

// jsn to js
//myObj = JSON.parse(jsonString);

// convert date
// console.log(new Date(myObj.birth))

// reviver func
const myObj = JSON.parse(jsonString, function(key, value) {
    if (key === 'birth') {
        return new Date(value);
    } 
    return value;
})

console.log(myObj);

//to convert functions, use eval() (with caution) -> treats strings like code


//local storage - only supports strings
localStorage.setItem('message', 'hello')

localStorage.getItem('message');

localStorage.removeItem('message');

// localStorage.setItem('score', JSON.stringify(score));
// JSON.parse(localStorage.getItem('score'))

// built-in obj ex - console, math, JSON, localStorage, document
//(window.)document, (window.)console.log, (window.)alert -> window is a buil-tin obj that represents the browser