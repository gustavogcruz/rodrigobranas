// defineProperty

// enumerable - Permite que uma determinada propriedade seja numerada
// writable - permite que uma determinada propriedade tenha seu valor modificado
// configurable- Permite que determinada propriedade seja apagada
// value - Define o valor de uma determinada propriedade

const javascript = {};
Object.defineProperty(javascript, "name", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: "JavaScript"    
});

//javascript.name = "ECMAScript";
//delete javascript.name;

console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));
console.log(javascript.name);
console.log("name" in javascript);