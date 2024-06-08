const rectangle = {
    set x(x) { // propriedade externa do set - x
        if (x > 0) {
        this._x = x; // propriedade interna do objeto - _x
        } else {
            console.log("Invalid value for X")
        }
    },
    set y(y) {
        if (y > 0) {
        this._y = y;
        } else {
            console.log("Invalid value for Y") 
        }
    },
    get area() { // method notation
        return this._x * this._y
    }
}
rectangle.x = 10;
rectangle.y = 2;
console.log(rectangle.area);
