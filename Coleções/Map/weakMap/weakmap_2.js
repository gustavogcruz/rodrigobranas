/* WeakMap é um objeto, similar ao Map, que permite apenas chaves do tipo Object e mantém as
referêncais de forma fraca, sendo volátil e não iterável. */

/* Operações:
- set - adiciona um par de chave e valor;
- has - retorna true se a chave existir;
- get - retorna o valor de uma determinada chave;
- delete - remove um par de chave e valor;
*/

const areas = new WeakMap();

const rectangle1 = {
    x: 10,
    y:2
};
const rectangle2 = {
    x: 5,
    y: 3
};
function calculateArea(rectangle) {
    if (areas.has(rectangle)) {
        console.log("Using cache...");
        return areas.get(rectangle);
    }
    const area = rectangle.x * rectangle.y;
    areas.set(rectangle, area);
    return area;
};

console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle1));

console.log(calculateArea(rectangle2));
console.log(calculateArea(rectangle2));

console.log(areas.get(rectangle1));
console.log(areas.get(rectangle2));
