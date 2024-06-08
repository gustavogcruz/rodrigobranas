// const obj1 = {
//     p1: 10,
//     getP1: function () {
//         const that = this;
//         const fn1 = function () {
//             return that.p1;
//         }
//         return fn1();
//     }
// };

// console.log(obj1.getP1());

const obj1 = {
    p1: 10,
    getP1: function () {
        const fn1 = () => { // dessa forma irá funcionar, pois usando arrow function, o this será redefinido
            return this.p1;
        }
        return fn1();
    }
};

console.log(obj1.getP1());

