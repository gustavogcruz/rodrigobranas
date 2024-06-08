import pow, {PI} from "./math_1.mjs";

export default class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return  PI * pow(this.radius, 2);
        //necessário atualizar module
    }
}