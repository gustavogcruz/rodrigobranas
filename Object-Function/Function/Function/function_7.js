// rest parameter - deve ser sempre o último da lista - array []
// for...of - iteração sobre um array, não um objeto

const sum = function(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
};

//sum();
console.log(sum(1,2,3,4,5,6,7,8,9));
