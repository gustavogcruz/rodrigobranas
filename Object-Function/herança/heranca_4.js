// JavaScript é uma linguagem orientada a prototype - __proto__

/* Caso a mesma propriedade exista no objeto e no seu prototype, a propriedade do objeto
 é retornada (mais especifica), fazendo sombra a propriedade do protoype.*/

//const functionalLanguage = Object.create(null); // erro
const functionalLanguage = Object.create({});
functionalLanguage.paradigm = "Functional";

const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year= 1975;

const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year= 1995;
javascript.paradigm = "O.O";


for (let key in javascript) { // in - percorre as propriedades além do objeto
     console.log(key, javascript[key]);
}

console.log(javascript);
console.log("Objeto - ",javascript.paradigm);
console.log("__proto__ - ",javascript.__proto__.paradigm);
console.log("Object.getProtoypeOf - ",Object.getPrototypeOf(javascript).paradigm); //permite interação com o protótipo do objeto
console.dir(javascript, { showHidden: true });