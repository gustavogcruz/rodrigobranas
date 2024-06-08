/* As classes não sofrem hosting, não importanto a forma como são declaradas.

As classes são formadas por 3 tipos de membros: constructor, prototype methods e static methods.

É possível criar uma hierarquia de classes por meio da palavra-chave extends.

Ao declarar um construtor na subclass é necessário invocar o construtor da superclass por meio
do super() antes de utilizar a referência this

*/

class Shape {

    toString() {
        return  `area: ${this.calculateArea()}`;
    }

}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2);
    }

    toString() {
        return `side: ${this.side} ${super.toString()}`;
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area));
    }

}
const square = Square.fromArea(16); // method statis - pertence a classe e não a instância
//console.log(square);
console.log(square.toString()); //prototype method
//console.log(square.calculateArea()); // prototype method

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    toString() {
        return `radius: ${this.radius} ${super.toString()}`;
    }

    static fromArea(area) {
        return new Circle(Math.sqrt(area / Math.PI));
    }

}

const circle = Circle.fromArea(314.1592653589793);
//const circle = new Circle(10);
console.log(circle.toString());
//console.log(circle.calculateArea());



