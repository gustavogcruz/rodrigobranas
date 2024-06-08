const calculateArea = function() {
    return this.x * this.y; // objeto assume o papel de this da mesma forma
};


const rectangle = {
    x: 10,
    y: 2,
    calculateArea //passando por referência para dentro do objeto rectangle
}
console.log(rectangle.calculateArea()); //objeto invocando a função

//console.log(calculateArea());