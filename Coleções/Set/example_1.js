/* Set vs Array - não permite elemento duplicado*/

const array1 = [];
array1.push(10);
array1.push(10);
array1.push(10);
console.log(array1);
console.log(array1.length);

const charsets = new Set([]);
charsets.add(10); // não add novamente, mas não retorna nada
charsets.add(10);
charsets.add(10);
console.log(charsets);

let array2 = [10,10,10];
console.log(array2);
console.log(array2.length);
const set = new Set(array2); // retirou as duplicidades
console.log(set);
console.log(set.size);
array2 = Array.from(set);
console.log(array2);
console.log(array2.length);