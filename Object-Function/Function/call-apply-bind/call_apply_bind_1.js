/* Por meio das operações call e apply é possível invocar uma função 
passando o this por parâmetro */

const calulateArea = function() { // method notation
    return Math.PI * Math.pow(this.radius, 2); // this sendo referência para o objeto que invocou a função
}

const circle = {
    radius: 10,
    calulateArea
};
console.log(circle.calulateArea()); // invocando objeto e função

console.log(calulateArea()); // retorna undefined, ao invés do this

console.log(calulateArea.call(circle)); //invoca a função passando o this
console.log(calulateArea.apply(circle)); //invoca a função passando o this