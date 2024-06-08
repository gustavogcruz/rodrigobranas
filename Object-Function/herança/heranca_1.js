/* O principal objetivo da herança é permitir o reuso de código por meio do compartilhamento de
propriedades entre objetos, evitando a duplicação. */

// JavaScript é uma linguagem orientada a prototype - __proto__

const functionalLanguage = {
    paradigm: "Functional"
}

const scheme = {
    name: "Scheme",
    year: 1975,
    __proto__: functionalLanguage
};

const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: functionalLanguage
};

// for (let key in scheme) { // in - percorre as propriedades além do objeto
//      console.log(key, scheme.hasOwnProperty(key));
// }

// console.log(functionalLanguage);
//console.dir(scheme, { showHidden: true });
//console.log(scheme);
//console.dir(javascript, { showHidden: true });
//console.log(javascript);
// console.log(scheme.paradigm);
// console.log(javascript.paradigm);



