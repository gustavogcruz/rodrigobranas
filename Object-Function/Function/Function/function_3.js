// Function Expression
const sum = function(a, b) {
    return a + b;
};

// Function Declaration - sofre hosting
subtract = function(a, b) {
    return a - b;
};

const calculator = function (fn) {
    return function(a,b) {
        return fn(a,b);
    }
}

//console.log(calculator()());
//console.log(sum(2,2));
console.log(calculator(sum)(2,2));
console.log(calculator(subtract)(2,2));