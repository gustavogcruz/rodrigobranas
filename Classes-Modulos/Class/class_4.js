/* As classes não sofrem hosting, não importanto a forma como são declaradas.

As classes são formadas por 3 tipos de membros: constructor, prototype methods e static methods.

Os static methods não dependem de uma instância para serem invocados.

*/

class Square {
    constructor(side) {
        this.side = side;
    }

    calculateArea() {
        return `area: ${Math.pow(this.side, 2)}`;
    }

    toString() {
        return `side: ${this.side}`;
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area));
    }

}
const square = Square.fromArea(16); // method statis - pertence a classe e não a instância
//console.log(square);
console.log(square.toString()); //prototype method
console.log(square.calculateArea()); // prototype method





