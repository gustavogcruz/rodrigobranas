/* Destructuring - podemos extrair valores de arrays e objetos de uma forma mais simples e
direta*/

//Array

// const language = "c;Dennis Ritchie;1972".split(";");

/*const name = language[0];
const author = language[1];  //atribuição de cada elemento a uma variável
const year = language[2];*/

// console.log(name, author, year);

// const [name, author, year] = "c;Dennis Ritchie;1972".split(";");
// console.log(name, author, year);

// const [, author, year] = "c;Dennis Ritchie;1972".split(";");
// console.log(author, year);

const [, , year] = "c;Dennis Ritchie;1972".split(";");
console.log(year);
