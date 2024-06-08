//Object - Array
// podemos aplicar destructuring também nos parâmetros de uma função, tanto arrays quanto objetos.

const sum1 = function([a,b]) {
        return a + b;
}

console.log(sum1([2,2]));


const sum2 = function({a,b}) {
    return a + b;
}

console.log(sum2({a: 2, b: 2}));