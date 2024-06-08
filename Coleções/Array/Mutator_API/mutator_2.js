/* Mutator Methos - quando invocados modificam o array*/

/*
push - adiciona um elemento no final
pop - remove um elemento do final
unshift - adiciona um elemento no início
shift - remove um elemento no início
splice - remove, substitui ou adiciona um ou mais elementos em uma determinada posição
sort - ordena os elementos de acordo com a função de ordenação
reverse - inverte a ordem dos elementos
fill - preenche os elementos de acordo com a posição de início e fim
*/

const languages = ["Python", "C", "Java"];

console.log(languages);
console.log(languages.unshift("Ruby"));
console.log(languages.unshift("Go"));
console.log(languages);
console.log(languages.shift());
console.log(languages.shift());
console.log(languages);

