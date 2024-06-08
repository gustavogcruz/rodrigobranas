// JavaScript é uma linguagem orientada a prototype - __proto__

const functionalLanguage = {
    paradigm: "Functional"
}

const scheme = {
    name: "Scheme",
    year: 1975
};
Object.setPrototypeOf(scheme, functionalLanguage); //permite interação com o protótipo do objeto

const javascript = {
    name: "JavaScript",
    year: 1995
};
Object.setPrototypeOf(javascript, functionalLanguage);

for (let key in scheme) { // in - percorre as propriedades além do objeto
     console.log(key, javascript.hasOwnProperty(key));
}