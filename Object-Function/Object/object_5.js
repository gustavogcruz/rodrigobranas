//const book = {};
//const book = new Object();
const book  = Object.create(null);

// atribuição de propriedades por meio de referência
book.title = "Clean Code"; // objeto - book | chave - .title | valor - ="Clean Code"
book.author = "Robert C. Martin";
book.pages = 464;
book.language = "English";
book.available = true; 

console.log(book);