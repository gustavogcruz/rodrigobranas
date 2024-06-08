/* Todo Iterable tem uma propriedade de chave Symbol.iterator que define o protocolo de 
iteração para o objeto.*/

//const languages = ["Fortran", "Lisp", "COBOL"];
// const languages = new Map([["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]]);
// const languages = new Set(["Fortran","Lisp","COBOL"]);
// const language = "COBOL";
// const iterator = languages[Symbol.iterator] ();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next()); // undefined

// //const languages = ["Fortran", "Lisp", "COBOL"];
// const languages = new Map([["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]])
// const iterator = languages.entries();
// //const iterator = languages.keys();
// //const iterator = languages.values();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next()); // undefined

//const languages = ["Fortran", "Lisp", "COBOL"];
const languages = new Set([["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]])
//const iterator = languages.entries();
const iterator = languages.keys();
//const iterator = languages.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); // undefined