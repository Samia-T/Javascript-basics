//contains unqiue elemts only 

const letters =  new Set(['a', 'b', 'c']);

letters.add('d');

const e = 'e';
letters.add(e);

// forEach,  like array
// for-of, values()

let text = '';

for (const x of letters.values()) {
    text += x;
}

// entries, like values() in set
for (const x of fruits.entries()) {
    text += x; // x -> array
}

// size
letters.size;