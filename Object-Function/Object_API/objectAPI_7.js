// preventExtensions - impede que o objeto tenha novas propriedades, mas permite modificar ou remover
// as propriedades existentes
// seal - impede que o objeto tenha novas propriedades ou apague propriedades existentes, mas permite
// modificar propriedades existentes
//freeze - impede que o objeto tenha novas propriedades, apague ou modifique propriedades existentes

const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};

//Object.preventExtensions(javascript);
//Object.seal(javascript);
Object.freeze(javascript);

javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
//delete javascript.year;

console.log("preventExtensions: ", Object.isExtensible(javascript));
console.log("seal: ", Object.isSealed(javascript));
console.log("freeze: ", Object.isFrozen(javascript));

console.log(javascript);