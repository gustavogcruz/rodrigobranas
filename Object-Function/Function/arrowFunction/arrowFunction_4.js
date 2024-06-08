//shorthand notation - mesmo nome da chave do objeto e da variavel

// const createPerson = function(name, city, year) {
//     return {
//         name,
//         city,
//         year
//     };
// };

// const person = createPerson("Alan Kay", "Springfield", 1940);
// console.log(person);

//const createPerson = (name, city, year) => {name, city, year}; // não entende como objeto
//const createPerson = (name, city, year) => {return {name, city, year}}; // entende como objeto
const createPerson = (name, city, year) => ({name, city, year}); // entende como objeto


const person = createPerson("Alan Kay", "Springfield", 1940);
console.log(person);