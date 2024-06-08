let regExp = /^[a-z]+@[a-z]+\.[a-z]{3}$/;
let result = regExp.exec("jane@hotmail.com");
console.log(result[0]);
console.log(result.index);
console.log(result.input);
