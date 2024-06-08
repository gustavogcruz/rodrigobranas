const title = "Clean Code";
const author= "Robert C. Martin";
const pages = 464;
const language = "English";
const available = true;

//shorthand notation - variavel com o mesmo nome da chave do objeto
const book = {
    title,
    author: author,
    pages,
    language: language,
    available
};

console.log(book);
