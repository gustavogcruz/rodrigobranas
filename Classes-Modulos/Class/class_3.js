/* As classes não sofrem hosting, não importanto a forma como são declaradas.

As classes são formadas por 3 tipos de membros: constructor, prototype methods e static methods.

Os prototype methods dependem de uma instância para serem invocados.

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

}
const square = new Square(4);
console.log(square);
console.log(square.toString()); //prototype method
console.log(square.calculateArea()); // prototype method





