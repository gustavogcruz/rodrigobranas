const circles = new WeakSet();

function Circle(radius) {
    circles.add(this);
    this.radius = radius;
}
Circle.prototype.calculetaArea = function() {
    if(!circles.has(this)) throw "Invalid Object";
    return Math.PI * Math.pow(this.radius, 2);
}

const circle1 = new Circle(10);
const circle2 = {
    radius: 5
};

console.log(circle1.calculetaArea());
console.log(circle1.calculetaArea.call(circle2));