const circle = {
    radius: 1,
    //read only area
    get area() {
        return (Math.PI * this.radius ** 2)
    },
}

circle.radius = 20;

console.log(circle);
console.log(circle.area);