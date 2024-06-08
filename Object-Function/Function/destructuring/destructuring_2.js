//destructuring - valor default

// const language = "c;Dennis Ritchie;1972".split(";");
// const [name = "-", author = "-", year = "-"] = language;
// console.log(name, author, year);

const language = "c;Dennis Ritchie".split(";"); // retira elementos do array, retorna valor padrão
const [name = "-", author = "-", year = "-"] = language;
console.log(name, author, year);
