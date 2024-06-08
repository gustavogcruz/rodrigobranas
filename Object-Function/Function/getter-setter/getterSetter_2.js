// defineProperty - também é possível definir funções do tipo getter e setter.

const rectangle = {}

Object.defineProperty(rectangle, "x", { // Object API - Object.defineProperty (Obj, propriedade, func)
    set(x) { // propriedade externa do set - x
        if (x > 0) {
        this._x = x; // propriedade interna do objeto - _x
        } else {
            console.log("Invalid value for X")
        }
    }
});

Object.defineProperty(rectangle, "y", {
    set(y) {
        if (y > 0) {
            this._y = y;
            } else {
                console.log("Invalid value for Y")
            }
    }
});

Object.defineProperty(rectangle, "area", {
    get() {
        return this._x * this._y;
    }
});

rectangle.x = 10;
rectangle.y = 2;
console.log(rectangle.area);
