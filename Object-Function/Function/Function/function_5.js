// valor padrão em função

const sum = function(a = 1, b = 1) {
    return a + b;
};

console.log(sum(2,2));
console.log(sum(3)); // recebeu 1 como b
console.log(sum()); // recebeu 1 para a e b
