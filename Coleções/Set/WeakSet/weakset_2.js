/* WeakSet é um objeto, similar ao Set, que permite apenas chaves do tipo Object e mantém as
referêncais de forma fraca, sendo volátil e não iterável. */

/* Operações:

- add - adiciona um elemento;
- has - retorna true se o elemento existir;
- delete - remove um par de chave e valor;
*/
// qualquer outro elemento diferente de Object, retorna erro

const ws1 = new WeakSet();
const obj1 = {};
const obj2 = {};
ws1.add(obj1);
ws1.add(obj2);
console.log(ws1);
console.log("delete - obj1 ",ws1.delete(obj1));
console.log("has - obj1 ",ws1.has(obj1));
console.log("has - obj2 ",ws1.has(obj2));
