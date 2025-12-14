const circle = {
    radius: 1,
    draw: function() {
        console.log('draw');
    }
};

for (let key in circle) {
    console.log(key, circle[key]);
}

for (let key of Object.keys(circle)) {
    console.log(key);
}

for (let entry of Object.entries(circle)) {
    console.log(entry);
}

if ('color' in circle) console.log('yes');

// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

// semsem
// const another = Object.assign({}, circle);

// more sem
const another = {...circle};

console.log(another);

// garbage collectors exist, don't have to worry about memory allocation

// Math exists
//Math.random/pi/abs/round/max/min
