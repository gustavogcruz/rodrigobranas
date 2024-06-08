const book1 = {
    name: "Refatoring",
    author: "Martin Fowler"
}

const book2 = {
    name: "Refatoring",
    author: "Martin Fowler"
}

//const book3 = book2;
const book3 = JSON.parse(JSON.stringify(book2));

console.log(0, book1 === book2);
console.log(1, book2 === book3);
console.log(2, JSON.stringify(book1) === JSON.stringify(book2));