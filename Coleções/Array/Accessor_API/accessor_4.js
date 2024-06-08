/* Accessor methods - quando invocados retornam informações específicas sobre o arrat */

/*
indexOf - retorna a posição do primeiro elemento encontrado
lastIndexOf - retorna a posição do último elemento encontrado
includes - retorna true se o elemento existir
concat - retorna um novo array resultante da concatenação de um ou mais arrays
slice - retorna partes de um determinado array de acordo com a posição de inicio e fim
join - converte um array para uma String, juntando os elementos com base em um separador
*/

const languages = ["Smalltalk", "C++", "Simula", "Haskell", "Scheme"];
console.log(languages.slice(0,2));
console.log(languages.slice(2,4));
console.log(languages.slice(1));

