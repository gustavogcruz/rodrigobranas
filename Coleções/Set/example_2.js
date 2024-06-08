/* Set vs Array - não permite elemento duplicado*/

let array = [10,10,10];
console.log(array);
const obj = {};
array.forEach(function(element) {
    obj[element] = undefined;
});
console.log(obj);

array = Object.keys(obj);
console.log(array);