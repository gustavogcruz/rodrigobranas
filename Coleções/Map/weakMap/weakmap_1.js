/* WeakMap é um objeto, similar ao Map, que permite apenas chaves do tipo Object e mantém as
referêncais de forma fraca, sendo volátil e não iterável. */

// qualquer outro elemento diferente de Object, retorna erro
//evita memory leak

/* Operações:
- set - adiciona um par de chave e valor;
- has - retorna true se a chave existir;
- get - retorna o valor de uma determinada chave;
- delete - remove um par de chave e valor;
*/
const wm1 = new WeakMap();

const obj1 = {};
const obj2 = {};

wm1.set(obj1, "obj1");
wm1.set(obj2, "obj2");

console.log(wm1);
console.log("has",wm1.has(obj1));
console.log("has",wm1.has(obj2));

console.log("delete - obj1",wm1.delete(obj1));
console.log("get - obj1",wm1.get(obj1));

console.log("get - obj2",wm1.get(obj2));
console.log("delete - obj2",wm1.delete(obj2));
console.log("get - obj2",wm1.get(obj2));
