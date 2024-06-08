/* As classes não sofrem hosting, não importanto a forma como são declaradas.

As classes são formadas por 3 tipos de membros: constructor, prototype methods e static methods.

O constructor é invocado no momento da instaciação de uma classe e serve para inicializar um 
determinado objeto.

*/

class Square {
    constructor(side) {
        this.side = side;
    }

}
const square = new Square(4);
console.log(square);





