// Arrow Function com um retorno

const sum = (a, b) => a + b;

// Function Expression
const subtract = function (a, b){
    return a - b;
};

// quando se tem um parâmetro pode se eliminar os paranteses
const calculator = fn => (a,b) => fn(a,b);

console.log(calculator(sum)(2,2));
console.log(calculator(subtract)(2,2));