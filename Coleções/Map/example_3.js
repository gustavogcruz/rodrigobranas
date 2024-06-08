const obj1 = {}; // propriedade existe no prototype
console.log("toString" in obj1);
console.log("valueOf" in obj1); 


const obj2 = Object.create(null); // passando null não tem prototype
console.log("toString" in obj2);
console.log("valueOf" in obj2);

const map = new Map(); // não terá algum tipo de herança
console.log(map.get("toString"));
console.log(map.get("valueOf"));
