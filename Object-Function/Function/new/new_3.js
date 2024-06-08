//Função Fábrica (Factory)
// reuso propriedades de objetos
// eliminar duplicidade

const personPrototype = { // objeto prototype
    getAge() {
        return (new Date()).getFullYear() - this.year;
    }
}

const createPerson = function(name, city, year){
    const person = {
        name, // shorthand notation - chave tem mesmo nome da variavel
        city,
        year
    };
    Object.setPrototypeOf(person, personPrototype)
    return person
}


const person1 = createPerson("Linus Torvalds", "Helsink", 1969);
console.log(person1);
console.log(person1.getAge());
console.log("reuso",person1.__proto__);

for (let key in person1) { // in - percorre as propriedades além do objeto
    console.log(key, person1.hasOwnProperty(key));
}

const person2 = createPerson("Bill Gates", "Seattle", 1955);
console.log(person2);
console.log(person2.getAge());
console.log("reuso",person2.__proto__);

for (let key in person2) { // in - percorre as propriedades além do objeto
    console.log(key, person2.hasOwnProperty(key));
}

console.log("Comparação",person1.__proto__ === person2.__proto__);