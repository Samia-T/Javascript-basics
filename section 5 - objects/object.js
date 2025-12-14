const circle = {
    radius: 1,
    location: {
        x: 1,
        y:1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw(); //method 

//factory function
function createCircle(radius) {
    return {
        radius, //if key-val semsem, just write key

        draw() {
             console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

//constructor function
//use PascalNotation, rather than camelNotation
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle2 = new Circle(1);