let regExp = /^john@gmail\.com$/;
let result1 = regExp.exec("E-Mail: john@gmail.com");
console.log(result1);
let result2 = regExp.exec("john@gmail.com");
console.log(result2);
