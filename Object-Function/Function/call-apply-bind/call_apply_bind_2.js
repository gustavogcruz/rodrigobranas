const calulateArea = function(fn) { // method notation
    return fn(Math.PI * Math.pow(this.radius, 2)); // fn - dinamicamente sem saber qual função
}

const circle = {
    radius: 10,
    calulateArea
};

console.log(calulateArea.call(circle, Math.round)); // parâmetro - this e função
console.log(calulateArea.apply(circle, [Math.ceil])); // apply - this, parâmetro dentro do array