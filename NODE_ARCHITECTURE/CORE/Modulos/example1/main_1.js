const generator = require("./generator_2");

console.log(generator.generate());

console.log(module.exports === exports);
console.log(module.exports === this);
console.log(exports === this);