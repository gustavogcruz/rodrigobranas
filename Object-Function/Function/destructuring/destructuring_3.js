//Object

const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972
};

// const name = language.name;
// const author = language.author;
// const year = language.year;

const {name, author, year} = language; // destructuring Object

console.log(name, author, year);