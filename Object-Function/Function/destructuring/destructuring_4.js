//Object
//nome chave diferente da propriedade do objeto

const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972
};

// const name = language.name;
// const author = language.author;
// const year = language.year;

const {name: n, author: a, year: y} = language; // destructuring Object

console.log(n, a, y);