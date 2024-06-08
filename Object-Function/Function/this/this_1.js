const rectangle = {
    x: 10,
    y: 2,
    calculateArea() { // <-- simplicação de função. ao invés de key:function
        return this.x * this.y; // this acessando o objeto responsável por invocar função

    }
}
console.log(rectangle.calculateArea());