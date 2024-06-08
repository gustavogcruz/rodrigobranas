// invocando função variando o número de parâmetros

const sum = function(a, b) {
    return a + b;
};

console.log(sum(2,2));
console.log(sum(3)); // segundo parâmetro é undefined e o retorno é NaN
console.log(sum(1,2,3)); // retorna os dois primeiros
