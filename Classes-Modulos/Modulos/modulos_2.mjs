/* No ES6 foi especificado na própria linguagem, baseado no conceito de importação e exportação*/


import * as math_1 from './math_1.mjs'; // usando * para importar tudo

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return  math_1.PI * math_1.pow(this.radius, 2);
        //necessário atualizar module
    }
}

const circle = new Circle(10);
console.log(circle);
console.log(circle.area);