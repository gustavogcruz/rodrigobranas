/* As classes não sofrem hosting, não importanto a forma como são declaradas.

As classes são formadas por 3 tipos de membros: constructor, prototype methods e static methods.

As classes (Syntactic Sugar) funcionam de maneira similiar as funções construtoras.

*/

function Square(side) {
    this.side = side;
}

Square.prototype.calculateArea = function() {
    return `area: ${Math.pow(this.side, 2)}`;
};

Square.prototype.toString = function(){
    return `side: ${this.side}`;
};

Square.fromArea = function(area) {
    return new Square(Math.sqrt(area));
}

const square = Square.fromArea(16); // method statis - pertence a classe e não a instância
//console.log(square);
console.log(square.toString()); //prototype method
console.log(square.calculateArea()); // prototype method





