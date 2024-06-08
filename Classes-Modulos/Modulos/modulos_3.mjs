/* No ES6 foi especificado na própria linguagem, baseado no conceito de importação e exportação*/

import Circle from './circle.mjs'; //sobre o processo de hosting

const circle = new Circle(10);
console.log(circle);
console.log(circle.area);