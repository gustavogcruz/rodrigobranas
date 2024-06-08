// JavaScript é uma linguagem orientada a prototype - __proto__

const functionalLanguage = {
    paradigm: "Functional"
}

const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year= 1975;

const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year= 1995;



for (let key in scheme) { // in - percorre as propriedades além do objeto
     console.log(key, javascript.hasOwnProperty(key));
}

console.log(scheme);
console.dir(scheme, { showHidden: true });