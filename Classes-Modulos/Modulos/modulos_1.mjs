/* No ES6 foi especificado na própria linguagem, baseado no conceito de importação e exportação*/


import {PI as pi, pow} from './math_1.mjs'; // usando AS para criar alias

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return pi * pow(this.radius, 2);
    }
}

const circle = new Circle(10);
console.log(circle);
console.log(circle.area);