/* Map é um objeto que armazena um conjunto de chaves e valores que podem ser de qualquer 
tipo de dado */

/*Operações:

- size - retorna a quantidade de elementos;
- set - adiciona um par de chave e valor;
- forEach - itera sobre o mapa;
- has - retorna true se a chave existir
- get - retorna o valor de uma determinada chave
- delete - remove um par de chave e valor
- clear - remove todos os elementos
*/


const timeUnits = new Map([
["second", 1],
["minute", 60],
["hour", 3600]
]);
console.log(timeUnits);
//console.log(Array.from(timeUnits));

console.log(timeUnits.size);