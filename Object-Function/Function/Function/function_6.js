// variável implícita arguments - objeto {}
// for...in - iteração sobre objeto e não sobre array

const sum = function() {
    let total = 0;
    for (let argument in arguments) {
        total += arguments[argument] // chave computada - arguments NA argument
    }
    return total;
};

//sum();
console.log(sum(1,2,3,4,5,6,7,8,9));
