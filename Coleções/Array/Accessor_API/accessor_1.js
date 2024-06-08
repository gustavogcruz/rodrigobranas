/* Accessor methods - quando invocados retornam informações específicas sobre o arrat */

/*
indexOf - retorna a posição do primeiro elemento encontrado
lastIndexOf - retorna a posição do último elemento encontrado
includes - retorna true se o elemento existir
concat - retorna um novo array resultante da concatenação de um ou mais arrays
slice - retorna partes de um determinado array de acordo com a posição de inicio e fim
join - converte um array para uma String, juntando os elementos com base em um separador
*/

const languages = ["Phyton", "C", "Java"];
console.log(languages.indexOf("Phyton"));
console.log(languages.indexOf("JavaScript")); // retorna -1, pois o elemento não existe
console.log(languages.lastIndexOf("Phyton"));