/* Classes são um tipo especial de função que atuam com um template para a criação de objetos */

// class Square {

// }

// console.log(Square);

const Square = class {}
// console.log(typeof Square); // function

const square = new Square();
console.log(square);

const Square1 = class {};
const Square2 = function () {};

console.log(Square1); // [class Square1]
console.log(Square2); // [Function: Square2]
console.log(typeof Square1); // function
console.log(typeof Square2); // function

