const person1 = {
    name: "Linus Torvalds",
    city: "Helsinki",
    year: 1969,
    getAge() { // method notation
        return (new Date()).getFullYear() - this.year;
    }
};
const person2 = {
    name: "Beill Gates",
    city: "Seattle",
    year: 1955,
    getAge() { // method notation
        return (new Date()).getFullYear() - this.year;
    }
};

console.log(person1);
console.log(person1.getAge());

console.log(person2);
console.log(person2.getAge());