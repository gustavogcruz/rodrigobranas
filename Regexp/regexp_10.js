let regExp = /^[a-z]+@[a-z]+(\.[a-z]{2,3})+$/;
let result = regExp.exec("mary@hotmail.com.br");
console.log(result[0]);
console.log(result[1]);
console.log(result.index);
console.log(result.input);
