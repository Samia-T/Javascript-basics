// hold key-val pairs, visit w3schools
// key can be any data type, unlike obj, where key is always string

const fruits = new Map([
    ['apples', 500],
    ['oranges', 300]
])

fruits.set('bananas', 200);
fruits.get('apples');
fruits.delete('apples');
fruits.has('pineapples'); //false

// forEach, like array
let text = ''
fruits.forEach(function(value, key) {
    text += key + '=' + value;
}) 

//entries(), like values() in sets
for (const x of fruits.entries()) {
    text += x;
}
// size
fruits.size;