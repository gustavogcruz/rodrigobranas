/* Toda função tem uma propriedade chamada prototype, que é vinculada ao __proto__ do
objeto criado pelo operador new */

//Função Construtora new
const _new = function(fn, ...params) {
    const obj = {};
    Object.setPrototypeOf(obj, fn.prototype)
    fn.apply(obj, params);
    return obj;
}

//Função Construtora
const Person = function(name, city, year) {
        this.name = name; // associa as propriedades pública a this pelo new
        this.city = city;
        this.year = year;
 };

Person.prototype.getAge = function() { // reuso de propriedade
    return(new Date()).getFullYear() - this.year;
 };

const person1 = _new(Person, "Linus Torvalds", "Helsink", 1969);
console.log(person1);
console.log("reuso",person1.__proto__);
console.log(person1.getAge());

// for (let key in person1) { // in - percorre as propriedades além do objeto
//     console.log(key, person1.hasOwnProperty(key));
// }

const person2 = _new(Person, "Bill Gates", "Seattle", 1955);
console.log(person2);
console.log("reuso",person2.__proto__);
console.log(person2.getAge());

// for (let key in person2) { // in - percorre as propriedades além do objeto
//     console.log(key, person2.hasOwnProperty(key));
// }

console.log("Comparação",person1.__proto__ === person2.__proto__);