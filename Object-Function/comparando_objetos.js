/* A comparação dos objetos é feita por meio da sua referência, assim, ainda que dois objetos
tenham exatamente as mesmas propriedades eles serão considerados diferentes*/

const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true,
    year: 1994
};

const book2 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
    ,year: 1994
};

//analisando cada uma das propriedades por meio da comparação das chaves e valores.
let equal = true;
for (let key in book1) {
    if (book1[key] !== book2[key]) {equal = false};
}
for (let key in book2) {
    if (book2[key] !== book1[key]) {equal = false};
}


console.log(equal);
//transforma em uma string e comparo se os valores são iguais
console.log(JSON.stringify(book1) === JSON.stringify(book2)); 

//console.log(book1 == book2); // false
//console.log(book1 === book2); // false


