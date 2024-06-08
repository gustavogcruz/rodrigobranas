//Object
//referenciar propriedades de objetos que estão em outros objetos

const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972,
    company: {
        name: "Bell Labs"
    }
};

// const name = language.name;
// const author = language.author;
// const year = language.year;

const {name: n, author: a, year: y, company:{name: c}} = language; // destructuring Object

console.log(n, a, y, c);