//object eg
const product2 = {
    name: 'shirt',
    'delivery-time': '1 day',
    //nested object
    rating: {
        stars: 4.5,
        count: 45,
    },
    //method
    fun: function func() {
        console.log('function inside object');
    }
};

console.log(product2.rating.stars);
console.log(product2['delivery-time']);
product2.fun();

//json - similar to js object
//does not support function, uses double quotes
//more universal, store data

//js obj to json
const jsonString = JSON.stringify(product2);
console.log(jsonString)

//jsn to js
console.log(JSON.parse(jsonString));

//local storage - only supports strings
localStorage.setItem('message', 'hello')

localStorage.getItem('message');

localStorage.removeItem('message');

// localStorage.setItem('score', JSON.stringify(score));
// JSON.parse(localStorage.getItem('score'))

// built-in obj ex -console, math, JSON, localStorage, document
//(window.)document, (window.)console.log, (window.)alert -> window is a buil-tin obj that represents the browser