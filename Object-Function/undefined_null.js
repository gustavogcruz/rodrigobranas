//null - ausência de valor
//undefined - se quer existe (retornado caso a chave não seja encontrada)

const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};

book.available = null;

for (let key in book) {
    console.log(book[key]);
}

console.log("title" in book); // chave in objeto - retorna boolean
console.log("author" in book);
console.log("pages" in book);
console.log("language" in book);
console.log("available" in book); 
console.log("publisher", book.publisher);
console.log("publisher existe?","publisher" in book);

