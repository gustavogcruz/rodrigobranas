/* Set - é um objeto que armazena elementos únicos, que podem ser de qualquer tipo de dado*/

/*
size - retorna a quantidade de elementos
add - adiciona um elemento
forEach - itera sobre o set
has - retorna true se o elemento existir
delete - remove um elemento
clear - remove todos os elementos
*/

const charsets = new Set(["ASCII", "ISO-8859-1", "UTF-8"]);
console.log(charsets);
console.log(Array.from(charsets)); // retorna para Array
console.log(charsets.size);

