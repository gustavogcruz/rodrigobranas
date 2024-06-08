const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};

delete book.available; // exclui a propriedade do objeto por referência
delete book["language"]; // excluir a propriedade por chave computada

for (let key in book) {
    console.log(book[key]);
    }

console.log("available" in book);
console.log("language" in book);