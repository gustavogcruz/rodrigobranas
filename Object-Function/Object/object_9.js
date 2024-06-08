/*
O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. 
O laço pode ser executado para cada propriedade distinta do objeto.
*/

const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};

const book2 = {};
for (let key in book1) {
    book2[key] = book1[key];
}
console.log(book2);