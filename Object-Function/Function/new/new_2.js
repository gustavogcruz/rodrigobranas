//Função Fábrica (Factory)

const createPerson = function(name, city, year){
    return { // retorna um novo objeto
        name, // shorthand notation - chave tem mesmo nome de uma determinada variavel
        city,
        year,
        getAge() // methot notation
        {
            return (new Date()).getFullYear() - this.year;
        }
    };
}

const person1 = createPerson("Linus Torvalds", "Helsink", 1969);
console.log(person1);
console.log(person1.getAge());

const person2 = createPerson("Bill Gates", "Seattle", 1955);
console.log(person2);
console.log(person2.getAge());