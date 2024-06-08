const Generator = require("./generator_3");

console.log(Generator);
const generator = new Generator.Generator(1000);
console.log(generator.generate());